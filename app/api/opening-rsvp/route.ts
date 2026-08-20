import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.BREVO_API_KEY;
const OPENING_LIST_NAME = "Grand Opening Gästeliste";
const OPENING_LIST_ID_ENV = Number(process.env.BREVO_OPENING_LIST_ID) || 0;
const BREVO_URL = "https://api.brevo.com/v3";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 80;

function brevoHeaders() {
  return {
    "api-key": API_KEY as string,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

function cleanName(value: unknown): string {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, MAX_NAME);
}

/** Findet oder legt die Gästeliste in Brevo an. */
async function ensureOpeningList(): Promise<number> {
  if (OPENING_LIST_ID_ENV) return OPENING_LIST_ID_ENV;

  const listsRes = await fetch(`${BREVO_URL}/contacts/lists?limit=50`, {
    headers: brevoHeaders(),
  });
  if (listsRes.ok) {
    const data = (await listsRes.json()) as { lists?: Array<{ id: number; name: string }> };
    const existing = data.lists?.find((list) => list.name === OPENING_LIST_NAME);
    if (existing) return existing.id;
  }

  const createRes = await fetch(`${BREVO_URL}/contacts/lists`, {
    method: "POST",
    headers: brevoHeaders(),
    body: JSON.stringify({ name: OPENING_LIST_NAME, folderId: 1 }),
  });
  if (!createRes.ok) {
    const text = await createRes.text();
    console.error("[opening-rsvp] Could not create Brevo list:", createRes.status, text);
    return 0;
  }
  const created = (await createRes.json()) as { id?: number };
  return created.id || 0;
}

/** Legt das Attribut an, falls es in Brevo noch nicht existiert. */
async function ensureBooleanAttribute(name: string) {
  const res = await fetch(`${BREVO_URL}/contacts/attributes/normal/${name}`, {
    method: "POST",
    headers: brevoHeaders(),
    body: JSON.stringify({ type: "boolean" }),
  });
  if (res.ok || res.status === 400) return;
  const text = await res.text();
  if (text.toLowerCase().includes("already exist") || text.toLowerCase().includes("unique")) {
    return;
  }
  console.warn(`[opening-rsvp] Could not ensure attribute ${name}:`, res.status, text);
}

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({ error: "Brevo not configured" }, { status: 500 });
  }

  let body: { firstName?: string; lastName?: string; email?: string; company?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if ((body.company || "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const firstName = cleanName(body.firstName);
  const lastName = cleanName(body.lastName);
  const email = (body.email || "").trim().toLowerCase();

  if (!firstName || !lastName) {
    return NextResponse.json({ error: "Missing name" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const attributes = {
    VORNAME: firstName,
    NACHNAME: lastName,
    OPENING_RSVP: true,
  };

  try {
    await ensureBooleanAttribute("OPENING_RSVP");
    const openingListId = await ensureOpeningList();

    const payload: {
      email: string;
      updateEnabled: boolean;
      attributes: typeof attributes;
      listIds?: number[];
    } = {
      email,
      updateEnabled: true,
      attributes,
    };

    if (openingListId) {
      payload.listIds = [openingListId];
    }

    const res = await fetch(`${BREVO_URL}/contacts`, {
      method: "POST",
      headers: brevoHeaders(),
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      if (text.includes("Contact already exist")) {
        const putRes = await fetch(`${BREVO_URL}/contacts/${encodeURIComponent(email)}`, {
          method: "PUT",
          headers: brevoHeaders(),
          body: JSON.stringify({
            attributes,
            ...(openingListId ? { listIds: [openingListId] } : {}),
          }),
        });
        if (!putRes.ok) {
          const putText = await putRes.text();
          console.error("[opening-rsvp] Brevo update failed:", putRes.status, putText);
          return NextResponse.json({ error: "Failed to save RSVP" }, { status: 500 });
        }
        return NextResponse.json({ ok: true });
      }
      console.error("[opening-rsvp] Brevo contact failed:", res.status, text);
      return NextResponse.json({ error: "Failed to save RSVP" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[opening-rsvp] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to save RSVP" }, { status: 500 });
  }
}
