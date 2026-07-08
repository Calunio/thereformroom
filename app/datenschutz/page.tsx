import type { Metadata } from "next";
import { siteContent } from "@/app/content";
import { LegalPage, LegalH2, Placeholder } from "@/app/components/LegalPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";
const { studio } = siteContent;

export const metadata: Metadata = {
  title: "Datenschutzerklärung | The Reform Room",
  description: "Datenschutzerklärung von The Reform Room, Reformer Pilates Studio in Lemgo.",
  alternates: { canonical: `${SITE_URL}/datenschutz` },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p className="text-sm text-espresso/50 italic">
        Hinweis: Dieser Text ist ein Entwurf und muss vor dem Launch rechtlich geprüft und von der
        Inhaberin freigegeben werden.
      </p>

      <LegalH2>1. Verantwortlicher</LegalH2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website:
        <br />
        {studio.name}, {studio.owner}
        <br />
        {studio.street}, {studio.postalCode} {studio.city}
        <br />
        E-Mail: {studio.email}
      </p>

      <LegalH2>2. Hosting</LegalH2>
      <p>
        Diese Website wird bei Netlify (Netlify, Inc., 512 2nd Street, San Francisco, CA 94107,
        USA) gehostet. Beim Aufruf der Website werden technisch notwendige Server-Logdaten
        (u. a. IP-Adresse, Datum/Uhrzeit, abgerufene Seite, Browsertyp) verarbeitet. Rechtsgrundlage
        ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer Bereitstellung). Für die
        Übermittlung in die USA bestehen entsprechende Garantien (EU-Standardvertragsklauseln).
      </p>

      <LegalH2>3. Cookies & Einwilligung</LegalH2>
      <p>
        Wir setzen technisch notwendige Cookies sowie – nur mit deiner Einwilligung – Analyse- und
        ggf. Marketing-Cookies ein. Deine Auswahl kannst du jederzeit über die
        „Cookie-Einstellungen" im Seitenfuß anpassen. Rechtsgrundlage für einwilligungspflichtige
        Cookies ist Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG.
      </p>

      <LegalH2>4. Google Analytics 4</LegalH2>
      <p>
        Sofern du einwilligst, nutzen wir Google Analytics 4 (Google Ireland Limited) zur
        pseudonymen Reichweitenmessung. Dabei werden Nutzungsdaten mit aktiviertem Consent Mode
        verarbeitet. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Du kannst
        die Einwilligung jederzeit über die Cookie-Einstellungen widerrufen.
      </p>

      <LegalH2>5. Kontaktformular & Newsletter (Brevo)</LegalH2>
      <p>
        Für den Versand von Benachrichtigungen und Newslettern nutzen wir Brevo (Sendinblue GmbH,
        Köpenicker Str. 126, 10179 Berlin). Wenn du unser Kontaktformular nutzt, verarbeiten wir die
        von dir angegebenen Daten (Name, E-Mail, ggf. Telefon, Nachricht), um deine Anfrage zu
        beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Für den Newsletter verwenden wir das
        Double-Opt-in-Verfahren; Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
        die du jederzeit über den Abmeldelink widerrufen kannst.
      </p>

      <LegalH2>6. Buchungssystem (Calunio)</LegalH2>
      <p>
        Für Kursplan, Buchung, Pakete, Mitgliedschaften und Login binden wir das Buchungs-Widget von
        Calunio ein. Bei Nutzung des Buchungssystems werden die von dir eingegebenen Daten durch den
        Anbieter des Buchungssystems verarbeitet. Details und Verantwortlichkeit des
        Buchungssystem-Betreibers:{" "}
        <Placeholder>Angaben zum Calunio-Betreiber / Datenschutz-Link ergänzen</Placeholder>.
      </p>

      <LegalH2>7. Karten / Anfahrt</LegalH2>
      <p>
        Für die Anfahrt verlinken wir auf Google Maps. Erst beim Klick auf den Link wirst du zu
        Google weitergeleitet; es werden keine Google-Maps-Inhalte ungefragt auf unserer Seite
        geladen.
      </p>

      <LegalH2>8. Deine Rechte</LegalH2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit sowie Widerspruch. Erteilte Einwilligungen kannst du jederzeit mit
        Wirkung für die Zukunft widerrufen. Zudem steht dir ein Beschwerderecht bei einer
        Aufsichtsbehörde zu (für NRW: Landesbeauftragte für Datenschutz und Informationsfreiheit
        Nordrhein-Westfalen).
      </p>

      <LegalH2>9. Kontakt in Datenschutzfragen</LegalH2>
      <p>Bei Fragen zum Datenschutz erreichst du uns unter: {studio.email}</p>
    </LegalPage>
  );
}
