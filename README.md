# The Reform Room — Website

Website für **The Reform Room**, ein Boutique-Studio für Reformer Pilates in **Lemgo** (Inhaberin: Lisa Kutschinski).

Gebaut mit **Next.js 16 (App Router)** + **TypeScript** + **Tailwind CSS 4**, deploybar auf **Netlify**, mit **Brevo** (Kontakt/Newsletter) und dem **Calunio**-Buchungs-Widget – dasselbe Setup wie The Pulse Club, aber mit eigener Marke und eigenen Instanzen/Keys.

Dieser Ordner ist **eigenständig** und kann als eigenes Repository/Projekt herausgezogen werden.

---

## Schnellstart

```bash
npm install
cp .env.example .env.local   # Werte eintragen (siehe unten)
npm run dev                  # http://localhost:3000
```

Production-Build lokal testen:

```bash
npm run build && npm run start
```

---

## Environment-Variablen (`.env.local`)

| Variable | Zweck |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Öffentliche URL (Canonicals, Sitemap, DOI-Redirect) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (optional, nur mit Consent aktiv) |
| `BREVO_API_KEY` | Brevo-API-Key (eigene Reform-Room-Instanz) |
| `BREVO_LIST_ID` | Brevo-Listen-ID für Newsletter |
| `BREVO_DOI_TEMPLATE_ID` | Double-Opt-in-Template |
| `BREVO_CONTACT_CONFIRM_TEMPLATE_ID` | „Anfrage erhalten"-Bestätigung (optional) |
| `BREVO_NOTIFY_EMAIL` | Empfänger der Kontaktformular-Benachrichtigung (Lisa) |
| `BREVO_SENDER_EMAIL` | Verifizierte Absender-Adresse in Brevo |
| `NEXT_PUBLIC_LAUNCH_DATE` | Coming-Soon-Inhalte auf der öffentlichen Domain (ISO-Datum). |
| `NEXT_PUBLIC_PRELAUNCH_GATE` | `true` = thereformroom.de nur Overlay; `false` = Go-Live. Preview immer offen. |

> Ohne `BREVO_API_KEY` geben die Formular-Routen einen Fehler zurück (kein Versand). Die Website funktioniert ansonsten normal.

---

## Pre-Launch-Gate (Domain-basiert)

Während der Pre-Opening-Phase:

| Domain | Ansicht |
|---|---|
| `thereformroom.de` / `www.thereformroom.de` | Nur Pre-Launch-Overlay (Warteliste) — Website nicht erreichbar |
| `*.netlify.app` / `localhost` | Volle Website ohne Overlay (Team-Review) |

Steuerung über `NEXT_PUBLIC_PRELAUNCH_GATE` (`app/lib/prelaunch-gate.ts` + `middleware.ts`):

- **`true`** (Default) → Gate aktiv auf der öffentlichen Domain
- **`false`** → Gate aus → volle Website live

Zum Go-Live in Netlify `NEXT_PUBLIC_PRELAUNCH_GATE=false` setzen und neu deployen.

Rechtliche Seiten (`/impressum`, `/datenschutz`, `/agb`) sowie APIs bleiben auch im Gate erreichbar.

## Coming-Soon-Inhalte (Hero / Buchung)

Zusätzlich steuert `NEXT_PUBLIC_LAUNCH_DATE` Coming-Soon-Inhalte auf der öffentlichen Domain (`app/lib/launch.ts`):

- Datum **in der Zukunft** / **leer** → Newsletter statt Buchung im Hero, Buchungsseite „bald live"
- Datum **erreicht** → normale Buchungs-CTAs
- Auf Preview-Hosts immer volle Live-Ansicht (unabhängig vom Datum)

---

## Buchung (Calunio-Widget)

Das Buchungssystem läuft über **Calunio** (Tenant-Slug in `app/content.ts` → `CALUNIO_TENANT`, aktuell Platzhalter `thereformroom`). Eingebunden über `app/components/CalunioWidget.tsx`. Login/Preise/Pakete/Mitgliedschaften laufen über das Widget, kein eigener Auth-Stack. Slug & Produkt-IDs beim Kick-off final bestätigen.

---

## Marke & Logo

- Farben & Schriften: `tailwind.config.ts` + `app/globals.css` (Cormorant Garamond + Jost, beide lizenzfrei via Google Fonts).
- Logo als React-Komponente: `app/components/Logo.tsx` (rendert das echte Marken-Emblem als SVG, Varianten `dark`/`light`, Größe via `className`).
- **Marken-Emblem** aus Lisas Original-Logo: `public/logo/the-reform-room-emblem-{espresso,cream}.{svg,png,webp}` (hintergrundfrei, SVG = skalierbar, WebP = platzsparend). Quelle: `scripts/brand/reform-room-logo-source.png`. Neu erzeugen via:

```bash
npm run generate:brand-logo   # vektorisiert das Original → SVG + transparentes PNG + WebP (espresso & cream)
npm run generate:favicon
```

  Der ältere schriftbasierte Nachbau (`npm run generate:logo` → `*-stacked-*`/`*-wordmark-*`) bleibt als Fallback erhalten, wird aber nicht mehr eingebunden.

---

## Bilder

Studio-/Hero-Bilder liegen in `public/images/*.webp` (Platzhalter, KI-generiert – durch echte Fotos von Lisa ersetzen). Neue Fotos einfach unter gleichem Namen ablegen. Das OG-Bild wird aus `public/images/hero.webp` erzeugt:

```bash
npm run generate:og
```

---

## SEO

- Metadaten & JSON-LD: `app/layout.tsx` (Organization/WebSite) + `app/page.tsx` (LocalBusiness/FAQ) + Orts-Seiten.
- `app/sitemap.ts`, `app/robots.ts`.
- Lokale Landingpages für **echte Nachbarorte in Lippe**: `/reformer-pilates/[stadt]` (Konfiguration in `app/lib/cities.ts`).

---

## Deployment (Netlify)

`netlify.toml` ist vorbereitet (Next Runtime Plugin). Vorgehen:

1. Repo mit Netlify verbinden.
2. Environment-Variablen in Netlify eintragen.
3. `public/__forms.html` registriert die Formulare für Netlify (Fallback); das eigentliche Handling läuft über die API-Routen (Brevo).

---

## Noch zu erledigen (Platzhalter)

Alle mit `[PLATZHALTER]` bzw. hervorgehobenen Markierungen versehenen Stellen von Lisa/vor Launch klären:

- Finale **Texte** (Über mich, Kursnamen), **echte Fotos**, **Instagram-Link**, **Telefonnummer**.
- **Preise/Pakete** über Calunio.
- **Rechtstexte** (Impressum/Datenschutz/AGB) juristisch prüfen & freigeben.
- Calunio-Tenant-Slug & Produkt-IDs, Brevo-Templates, GA4-ID, Domain/DNS.

---

## Lokaler Kontext (nicht im Git)

Ordner `reform-room-design-export/` (in `.gitignore`): Vertrags-Checkliste, Projekt-Ablauf, Festpreis, Lisas Mitwirkungspflichten, Original-Logo. Beim Herausziehen des Projekts **lokal mitkopieren**, wenn du den Auftragskontext brauchst – steht nicht auf der Website.
