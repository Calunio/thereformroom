/**
 * Zentrale Website-Texte für The Reform Room.
 * Texte hier bearbeiten, ohne die React-Komponenten anzufassen.
 * Import: import { siteContent } from "@/app/content";
 *
 * HINWEIS: Viele Texte, Preise und Bilder sind Platzhalter, bis Lisa die
 * finalen Inhalte liefert (siehe reform-room-design-export/INHALTE.md).
 * Platzhalter sind mit [PLATZHALTER] markiert.
 */

/** Calunio-Tenant für The Reform Room. Slug/IDs beim Kick-off final bestätigen. */
const CALUNIO_TENANT = "thereformroom";
const CALUNIO_BASE = `https://${CALUNIO_TENANT}.calunio.com`;

export const siteContent = {
  /** Studio-Stammdaten (fest) */
  studio: {
    name: "The Reform Room",
    owner: "Lisa Kutschinski",
    street: "Lagesche Str. 15a",
    postalCode: "32657",
    city: "Lemgo",
    email: "info@thereformroom.de",
    phone: "", // [PLATZHALTER] Telefonnummer von Lisa
  },

  /** Buchung / externe URLs (Calunio-Widget-Instanz von The Reform Room) */
  bookingUrl: "/buchen",
  loginUrl: `${CALUNIO_BASE}/auth/login?next=%2Fdashboard%2F`,
  calunioScriptSrc: `https://calunio.com/widget/${CALUNIO_TENANT}/embed.js`,
  instagramUrl: "https://www.instagram.com/_thereformroom", // Handle von Lisa: _thereformroom
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lagesche+Str.+15a,+32657+Lemgo",

  hero: {
    eyebrow: "Reformer Pilates · Lemgo",
    title: "The Reform Room",
    claim: "Strengthen your body.\nCalm your mind.",
    subline:
      "Ein Boutique-Studio für Reformer Pilates in Lemgo. Präzises, achtsames Training in kleinen Gruppen – für ein Körpergefühl, das dich durch den Alltag trägt.",
    ctaBook: "Platz sichern",
    ctaSecondary: "Mehr erfahren",
  },

  comingSoon: {
    badge: "Coming Soon",
    line: "In Lemgo",
    body: "The Reform Room eröffnet bald. Trag dich ein und erfahre als Erste, wann die ersten Classes buchbar sind.",
    submit: "Jetzt eintragen",
    trustHint: "Kostenlos & unverbindlich. Keine Werbung.",
  },

  intro: {
    eyebrow: "Willkommen",
    heading: "Ankommen. Aufrichten.\nÜber dich hinauswachsen.",
    body: "The Reform Room ist ein Ort, an dem Bewegung mehr ist als Training. Auf dem Reformer verbinden wir Kraft und Kontrolle mit Atmung und Achtsamkeit – präzise, wirkungsvoll und ganz in deinem Tempo. Kleine Gruppen, persönliche Betreuung und eine Atmosphäre, in der du wirklich abschalten kannst.",
  },

  /** Markenwerte (angelehnt an Boutique-Studio-Sprache) */
  values: {
    heading: "Warum The Reform Room.",
    subheading: "Bewegung, bewusst kuratiert.",
    items: [
      {
        title: "Kleine Gruppen",
        description:
          "Maximal wenige Plätze pro Class – für echte Korrektur, Fortschritt und ein Training, das zu dir passt.",
      },
      {
        title: "Präzision am Reformer",
        description:
          "Federbasiertes Ganzkörpertraining, das tiefe Muskulatur aktiviert, die Gelenke schont und deine Haltung nachhaltig verbessert.",
      },
      {
        title: "Ruhe & Atmosphäre",
        description:
          "Ein warmer, hochwertiger Raum, in dem der Kopf zur Ruhe kommt. Kein Lärm, kein Druck – nur du und deine Praxis.",
      },
    ] as Array<{ title: string; description: string }>,
  },

  /** Kurse & Angebote */
  courses: {
    eyebrow: "Classes",
    heading: "Finde deine Class.",
    subheading:
      "Finde den Kurs, der zu deinem Level und deinem Trainingsziel passt.",
    items: [
      {
        id: "new-to-reformer",
        name: "New to Reformer",
        forWho: "Für Einsteiger",
        description:
          "Der ideale Einstieg für alle, die Reformer Pilates zum ersten Mal ausprobieren. Du lernst das Gerät, die wichtigsten Bewegungsabläufe und die grundlegende Technik in einem ruhigen und verständlichen Tempo kennen.",
        ctaBook: "Class buchen",
      },
      {
        id: "booty-reform",
        name: "Booty Reform",
        forWho: "Glutes & Beine",
        description:
          "Ein fokussiertes Reformer-Workout für Gesäß, Beine und Hüfte. Kontrollierte Bewegungen und gezielte Widerstände kräftigen die Muskulatur und sorgen für ein intensives Training des Unterkörpers.",
        ctaBook: "Class buchen",
      },
      {
        id: "core-reform",
        name: "Core Reform",
        forWho: "Core & Stabilität",
        description:
          "Ein gezieltes Training für die tiefliegende Bauch-, Rücken- und Rumpfmuskulatur. Die Übungen verbessern Stabilität, Haltung und Körperkontrolle und stärken deine Mitte nachhaltig.",
        ctaBook: "Class buchen",
      },
      {
        id: "total-body-reform",
        name: "Total Body Reform",
        forWho: "Kraft & Beweglichkeit",
        description:
          "Ein ausgewogenes Ganzkörpertraining auf dem Reformer. Kraft, Mobilität, Koordination und Stabilität werden in einer fließenden Einheit miteinander verbunden.",
        ctaBook: "Class buchen",
      },
      {
        id: "jumpboard-reform",
        name: "Jumpboard Reform",
        forWho: "Cardio & Intensiv",
        description:
          "Ein dynamisches und gelenkschonendes Reformer-Workout mit Jumpboard. Die Einheit verbindet Cardio, Beinkraft und Koordination und sorgt für ein energiegeladenes Training.",
        ctaBook: "Class buchen",
      },
    ] as Array<{
      id: string;
      name: string;
      forWho: string;
      description: string;
      ctaBook: string;
    }>,
    reformerNote:
      "Neu auf dem Reformer? Dann starte mit New to Reformer. Wenn du bereits Erfahrung hast, melde dich gern direkt für eine Class an.",
  },

  /** How to book – 3 Schritte (inspiriert von Boutique-Studio-Flows) */
  howToBook: {
    eyebrow: "So einfach geht's",
    heading: "In vier Schritten zu deiner Class.",
    steps: [
      {
        step: "01",
        title: "Class wählen",
        description:
          "Öffne den Kursplan, wähle deine Wunsch-Class und klick auf „Buchen“.",
      },
      {
        step: "02",
        title: "Konto erstellen oder einloggen",
        description:
          "Beim ersten Mal legst du in Sekunden ein kostenloses Konto an – danach genügt der Login.",
      },
      {
        step: "03",
        title: "Paket oder Mitgliedschaft",
        description:
          "Wähle ein Paket oder eine Mitgliedschaft und bezahle sicher über unseren Zahlungsdienstleister.",
      },
      {
        step: "04",
        title: "Buchung bestätigen",
        description:
          "Bestätige nach dem Kauf noch deine Buchung und warte auf das Erfolgsfenster. Fertig – deine Bestätigung kommt per E-Mail.",
      },
    ] as Array<{ step: string; title: string; description: string }>,
  },

  /** Preise & Pakete — Buchung/Preise laufen über das Calunio-Widget */
  pricing: {
    eyebrow: "Preise & Pakete",
    heading: "Dein Weg in den Reform Room.",
    subheading:
      "Ob einmal reinschnuppern oder regelmäßig trainieren – finde das Modell, das zu deinem Leben passt. Alle aktuellen Preise, Pakete und Mitgliedschaften findest du direkt im Buchungssystem.",
    // [PLATZHALTER] Konkrete Preise kommen aus Calunio / von Lisa.
    cards: [
      {
        badge: "Zum Reinschnuppern",
        title: "Reformer Intro",
        description:
          "Dein vergünstigter Einstieg auf dem Reformer – lerne das Gerät und die Basics in einer geführten Intro-Class kennen.",
        priceHint: "Einmaliger Einstiegspreis",
      },
      {
        badge: "Flexibel",
        title: "Einzelticket & Pakete",
        description:
          "Buche einzelne Classes oder sichere dir ein Credit-Paket für mehr Flexibilität – ideal, wenn du deinen Rhythmus selbst bestimmen möchtest.",
        priceHint: "Ohne Bindung buchbar",
      },
      {
        badge: "Für Regelmäßige",
        title: "Mitgliedschaft",
        description:
          "Trainiere regelmäßig zum besten Preis. Deine feste Praxis im Reform Room – mit monatlichem Kontingent.",
        priceHint: "Bester Preis pro Class",
      },
    ] as Array<{ badge: string; title: string; description: string; priceHint: string }>,
    ctaBook: "Preise & Buchung ansehen",
    note: "Buchung, Pakete, Mitgliedschaften und Login laufen über unser sicheres Buchungssystem.",
  },

  /** Über mich (Lisa) — [PLATZHALTER], Lisa liefert finalen Text */
  about: {
    eyebrow: "Über mich",
    heading: "Hi, ich bin Lisa.",
    portraitAlt: "Lisa Kutschinski – Gründerin von The Reform Room",
    paragraphs: [
      "The Reform Room ist mein Herzensprojekt. Ich habe in Lemgo einen Ort geschaffen, an dem sich Menschen bewusst bewegen, zur Ruhe kommen und Stärke aufbauen – körperlich wie mental.",
      "Reformer Pilates hat für mich verändert, wie ich meinen Körper wahrnehme. Diese Verbindung aus Präzision, Atmung und Kraft möchte ich weitergeben: in kleinen Gruppen, mit echter Betreuung und ohne Hektik.",
      "Ich freue mich darauf, dich im Reform Room kennenzulernen und dich auf deinem Weg zu begleiten.",
    ],
    signature: "— Lisa Kutschinski, Gründerin",
    placeholderNote: true,
  },

  /**
   * Stimmen / Testimonials.
   * WICHTIG: `enabled` bleibt auf `false`, bis echte Bewertungen vorliegen –
   * so werden keine erfundenen Stimmen veröffentlicht. Sobald echte Zitate da
   * sind: Items eintragen und `enabled` auf `true` setzen.
   */
  testimonials: {
    enabled: false,
    eyebrow: "Stimmen",
    heading: "Was andere sagen.",
    items: [
      // Beispiel-Format (erst mit echten Bewertungen befüllen):
      // { quote: "…", name: "Vorname N." },
    ] as Array<{ quote: string; name: string }>,
  },

  contact: {
    eyebrow: "Komm vorbei",
    heading: "Kontakt & Anfragen",
    subtitle:
      "Du hast Fragen oder möchtest mehr erfahren? Schreib uns gern – wir melden uns zeitnah bei dir.",
    studioLabel: "Studio",
    addressLine1: "Lagesche Str. 15a",
    addressLine2: "32657 Lemgo",
    emailLabel: "E-Mail",
    email: "info@thereformroom.de",
    mapCta: "Route in Google Maps öffnen",
    instagramLabel: "Instagram",
    instagramHandle: "@_thereformroom",
  },

  contactForm: {
    successTitle: "Vielen Dank!",
    successMessage: "Wir melden uns in Kürze bei dir.",
    errorMessage: "Senden fehlgeschlagen. Bitte versuche es später erneut.",
    labelName: "Name *",
    labelEmail: "E-Mail *",
    labelPhone: "Telefon",
    labelInterest: "Interessiert an",
    interestOptions: [
      { value: "Reformer Intro", label: "Reformer Intro" },
      { value: "Reformer Class", label: "Reformer Class" },
      { value: "Mitgliedschaft", label: "Mitgliedschaft" },
      { value: "Gutschein", label: "Gutschein" },
      { value: "Sonstiges", label: "Sonstiges" },
    ],
    labelMessage: "Nachricht *",
    submit: "Nachricht senden",
    sending: "Wird gesendet …",
    marketingOptIn:
      "Ja, ich möchte News, Angebote und Class-Infos per E-Mail erhalten. Abmeldung jederzeit möglich.",
  },

  newsletter: {
    eyebrow: "Bleib in Verbindung",
    heading: "Sei als Erste dabei.",
    subtitle:
      "Trag dich ein und erfahre, wann The Reform Room eröffnet, wann neue Classes buchbar sind und welche Angebote es gibt.",
    placeholder: "Deine E-Mail-Adresse",
    submit: "Anmelden",
    successMessage:
      "Fast geschafft! Bitte bestätige deine Anmeldung über die E-Mail, die wir dir gerade geschickt haben.",
    errorMessage: "Das hat leider nicht geklappt. Bitte versuche es in ein paar Minuten erneut.",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Häufige Fragen",
    subtitle: "Kurze Antworten auf das, was am häufigsten gefragt wird.",
    items: [
      {
        question: "Was ist Reformer Pilates?",
        answer:
          "Reformer Pilates ist ein Ganzkörpertraining auf einem federbasierten Gerät, dem Reformer. Der einstellbare Widerstand ermöglicht präzises, gelenkschonendes Training, das tiefe Muskulatur aktiviert, die Körpermitte stärkt und die Haltung nachhaltig verbessert.",
      },
      {
        question: "Brauche ich Vorkenntnisse?",
        answer:
          "Nein. Wenn du neu auf dem Reformer bist, startest du mit unserer Reformer Intro. Dort lernst du das Gerät und die Grundlagen in Ruhe kennen. Danach steht dir das gesamte Class-Angebot offen.",
      },
      {
        question: "Wie buche ich eine Class?",
        answer:
          "Wähle im Kursplan deine Class und klick auf „Buchen“ – du gelangst in unser sicheres Buchungssystem. Beim ersten Mal legst du ein kostenloses Konto an (ohne Konto ist keine Buchung möglich), bestätigst die Buchung mit Einzelticket, Paket oder Mitgliedschaft und akzeptierst die Stornobedingungen. Anschließend erhältst du eine Bestätigung per E-Mail.",
      },
      {
        question: "Was soll ich mitbringen und anziehen?",
        answer:
          "Trage bequeme Sportkleidung, in der du dich frei bewegen kannst. Für Reformer Classes brauchst du rutschfeste Socken (Stopper-Socken); falls du keine hast, kannst du sie bei uns erwerben. Ein Handtuch und etwas zu trinken sind sinnvoll.",
      },
      {
        question: "Wie groß sind die Gruppen?",
        answer:
          "Wir trainieren bewusst in kleinen Gruppen mit maximal 8 Plätzen pro Class. So bleibt genug Raum für individuelle Korrektur und ein Training, das wirklich zu dir passt.",
      },
      {
        question: "Wo befindet sich das Studio?",
        answer:
          "The Reform Room liegt in der Lagesche Str. 15a, 32657 Lemgo, in der 3. Etage – zentral und aus dem gesamten Kreis Lippe gut erreichbar.",
      },
      {
        question: "Gibt es Parkplätze?",
        answer:
          "Ja, Parkplätze sind vorhanden. So kommst du entspannt an und kannst dich ganz auf dein Training konzentrieren.",
      },
      {
        question: "Kann ich einen Gutschein verschenken?",
        answer:
          "Ja. Gutscheine für Classes oder Pakete kannst du bequem über unser Buchungssystem erwerben – eine schöne Geschenkidee für alle, die Bewegung und Auszeit lieben.",
      },
    ] as Array<{ question: string; answer: string }>,
  },

  booking: {
    eyebrow: "Buchung",
    heading: "Kursplan & Buchung",
    subtitle:
      "Wähle deine Class, sichere dir deinen Platz und verwalte deine Buchungen – alles an einem Ort.",
    widgetComingSoonTitle: "Der Kursplan geht bald live.",
    widgetComingSoonBody:
      "Sobald die ersten Classes buchbar sind, erscheint hier der Kursplan. Trag dich in die Liste ein, um als Erste Bescheid zu wissen.",
    loginLabel: "Mitglieder-Login",
  },

  footer: {
    tagline: "Reformer Pilates\nin Lemgo.",
    contactTitle: "Kontakt",
    studioTitle: "Studio",
    exploreTitle: "Entdecken",
    lippeTitle: "Pilates in Lippe",
    copyright: "The Reform Room. Alle Rechte vorbehalten.",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    agb: "AGB",
    logoAria: "The Reform Room – zur Startseite",
    nav: [
      { hash: "kurse", label: "Classes" },
      { hash: "preise", label: "Preise" },
      { hash: "ueber-mich", label: "Über mich" },
      { hash: "faq", label: "FAQ" },
      { hash: "kontakt", label: "Kontakt" },
    ] as Array<{ hash: string; label: string }>,
  },

  nav: {
    links: [
      { hash: "kurse", label: "Classes" },
      { hash: "preise", label: "Preise" },
      { hash: "ueber-mich", label: "Über mich" },
      { hash: "faq", label: "FAQ" },
      { hash: "kontakt", label: "Kontakt" },
    ] as Array<{ hash?: string; href?: string; label: string }>,
    linksLanding: [
      { href: "/#kurse", label: "Classes" },
      { hash: "erreichbarkeit", label: "Anreise" },
      { href: "/#preise", label: "Preise" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#kontakt", label: "Kontakt" },
    ] as Array<{ hash?: string; href?: string; label: string }>,
    ctaBook: "Buchen",
    ctaBookLong: "Platz sichern",
    login: "Login",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    logoAria: "The Reform Room – zur Startseite",
  },
} as const;
