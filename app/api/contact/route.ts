import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.BREVO_API_KEY;
const LIST_ID = Number(process.env.BREVO_LIST_ID) || undefined;
const DOI_TEMPLATE_ID = Number(process.env.BREVO_DOI_TEMPLATE_ID) || 0;
const NOTIFY_EMAIL = process.env.BREVO_NOTIFY_EMAIL || "Lisa.kutschinski@web.de";
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "info@thereformroom.de";
const CONTACT_CONFIRM_TEMPLATE_ID =
  Number(process.env.BREVO_CONTACT_CONFIRM_TEMPLATE_ID) || 0;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";
const BREVO_URL = "https://api.brevo.com/v3";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({ error: "Brevo not configured" }, { status: 500 });
  }

  let body: {
    name?: string;
    email?: string;
    phone?: string;
    interest?: string;
    message?: string;
    marketingConsent?: unknown;
    company?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: echte Nutzer sehen dieses Feld nicht. Ist es gefüllt → Bot.
  // Wir antworten mit „ok", damit der Bot keinen Fehler bemerkt.
  if ((body.company || "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim().toLowerCase();
  const phone = (body.phone || "").trim();
  const interest = (body.interest || "").trim();
  const message = (body.message || "").trim();
  const marketingConsent = body.marketingConsent === true;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const headers = {
    "api-key": API_KEY,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    const fullAttributes = {
      NAME: name,
      TELEFON: phone,
      INTERESSE: interest,
      MARKETING_OPTIN: marketingConsent,
      QUELLE: "Kontaktformular",
    };
    const safeAttributes = { VORNAME: name, TELEFON: phone, INTERESSE: interest };

    if (marketingConsent && LIST_ID && DOI_TEMPLATE_ID) {
      let res = await fetch(`${BREVO_URL}/contacts/doubleOptinConfirmation`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          email,
          attributes: fullAttributes,
          includeListIds: [LIST_ID],
          templateId: DOI_TEMPLATE_ID,
          redirectionUrl: `${SITE_URL}/newsletter/bestaetigt`,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        if (text.includes("Invalid attribute")) {
          res = await fetch(`${BREVO_URL}/contacts/doubleOptinConfirmation`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              email,
              attributes: safeAttributes,
              includeListIds: [LIST_ID],
              templateId: DOI_TEMPLATE_ID,
              redirectionUrl: `${SITE_URL}/newsletter/bestaetigt`,
            }),
          });
          if (!res.ok) {
            const t2 = await res.text();
            if (!t2.includes("Contact already exist")) {
              console.error("[contact] Brevo DOI fallback failed:", t2);
            }
          }
        } else if (!text.includes("Contact already exist")) {
          console.error("[contact] Brevo DOI failed:", text);
        }
      }
    } else {
      if (marketingConsent && (!LIST_ID || !DOI_TEMPLATE_ID)) {
        console.warn(
          "[contact] Marketing consent given but DOI not configured — BREVO_LIST_ID or BREVO_DOI_TEMPLATE_ID missing",
        );
      }

      let res = await fetch(`${BREVO_URL}/contacts`, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, attributes: fullAttributes, updateEnabled: true }),
      });

      if (!res.ok) {
        const text = await res.text();
        if (text.includes("Invalid attribute")) {
          res = await fetch(`${BREVO_URL}/contacts`, {
            method: "POST",
            headers,
            body: JSON.stringify({ email, attributes: safeAttributes, updateEnabled: true }),
          });
          if (!res.ok) {
            const t2 = await res.text();
            if (!t2.includes("Contact already exist")) {
              console.error("[contact] Brevo contact fallback failed:", t2);
            }
          }
        } else if (!text.includes("Contact already exist")) {
          console.error("[contact] Brevo contact failed:", text);
        }
      }
    }

    const notifyRes = await fetch(`${BREVO_URL}/smtp/email`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        sender: { name: "The Reform Room", email: SENDER_EMAIL },
        to: [{ email: NOTIFY_EMAIL }],
        replyTo: { email, name },
        subject: `Neue Anfrage: ${escapeHtml(interest || "Allgemein")} — ${escapeHtml(name)}`,
        htmlContent: `
          <h2>Neue Kontaktanfrage über die Website</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone || "–")}</p>
          <p><strong>Interesse:</strong> ${escapeHtml(interest || "–")}</p>
          <p><strong>Nachricht:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
          <p><strong>Marketing-Einwilligung:</strong> ${marketingConsent ? "Ja" : "Nein"}</p>
        `,
      }),
    });

    if (!notifyRes.ok) {
      console.error("[contact] Brevo notification failed:", await notifyRes.text());
    }

    if (CONTACT_CONFIRM_TEMPLATE_ID) {
      const confirmRes = await fetch(`${BREVO_URL}/smtp/email`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          to: [{ email, name }],
          templateId: CONTACT_CONFIRM_TEMPLATE_ID,
          params: { NAME: name, INTERESSE: interest || "Allgemein" },
        }),
      });
      if (!confirmRes.ok) {
        console.error("[contact] Brevo confirmation failed:", await confirmRes.text());
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Failed to process" }, { status: 500 });
  }
}
