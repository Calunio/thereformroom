import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.BREVO_API_KEY;
const LIST_ID = Number(process.env.BREVO_LIST_ID) || 0;
const DOI_TEMPLATE_ID = Number(process.env.BREVO_DOI_TEMPLATE_ID) || 0;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";
const BREVO_URL = "https://api.brevo.com/v3";

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({ error: "Brevo not configured" }, { status: 500 });
  }

  let body: { email?: string; company?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: gefülltes Feld = Bot → still mit „ok" antworten.
  if ((body.company || "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email || "").trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const brevoHeaders = {
    "api-key": API_KEY,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    if (DOI_TEMPLATE_ID && LIST_ID) {
      const res = await fetch(`${BREVO_URL}/contacts/doubleOptinConfirmation`, {
        method: "POST",
        headers: brevoHeaders,
        body: JSON.stringify({
          email,
          includeListIds: [LIST_ID],
          templateId: DOI_TEMPLATE_ID,
          redirectionUrl: `${SITE_URL}/newsletter/bestaetigt`,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        if (text.includes("Contact already exist")) {
          return NextResponse.json({ ok: true });
        }
        console.error("[newsletter] Brevo DOI failed:", res.status, text);
        return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
      }
    } else {
      const res = await fetch(`${BREVO_URL}/contacts`, {
        method: "POST",
        headers: brevoHeaders,
        body: JSON.stringify({ email, updateEnabled: true, ...(LIST_ID ? { listIds: [LIST_ID] } : {}) }),
      });

      if (!res.ok) {
        const text = await res.text();
        if (text.includes("Contact already exist")) {
          return NextResponse.json({ ok: true });
        }
        console.error("[newsletter] Brevo contact failed:", res.status, text);
        return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
