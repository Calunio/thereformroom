import type { Metadata } from "next";
import { siteContent } from "@/app/content";
import { LegalPage, LegalH2, LegalH3 } from "@/app/components/LegalPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";
const { studio } = siteContent;

export const metadata: Metadata = {
  title: "Datenschutzerklärung | The Reform Room",
  description: "Datenschutzerklärung von The Reform Room, Reformer Pilates Studio in Lemgo.",
  alternates: { canonical: `${SITE_URL}/datenschutz` },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="19. Juli 2026">
      <LegalH2>1. Verantwortlicher</LegalH2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
        Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <p>
        {studio.name}
        <br />
        {studio.owner}
        <br />
        {studio.street}
        <br />
        {studio.postalCode} {studio.city}
        <br />
        E-Mail: {studio.email}
      </p>

      <LegalH2>2. Hosting</LegalH2>
      <p>
        Diese Website wird bei Netlify gehostet (Netlify, Inc., 44 Montgomery Street, Suite 300,
        San Francisco, CA 94104, USA). Netlify stellt die technische Infrastruktur zur Verfügung,
        damit die Website erreichbar ist und Inhalte ausgeliefert werden können.
      </p>
      <p>
        Dabei können personenbezogene Daten (insbesondere IP-Adresse sowie technische
        Verbindungsdaten) an Netlify übermittelt und dort verarbeitet werden. Die Verarbeitung
        erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
        sicheren, stabilen und performanten Bereitstellung der Website).
      </p>
      <p>
        Soweit eine Übermittlung in die USA stattfindet, erfolgt diese auf Grundlage geeigneter
        Garantien, insbesondere der EU-Standardvertragsklauseln. Weitere Informationen:
        {" "}
        <a
          href="https://www.netlify.com/privacy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://www.netlify.com/privacy/
        </a>
        .
      </p>

      <LegalH2>3. SSL-/TLS-Verschlüsselung</LegalH2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
        Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du
        daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
        Schloss-Symbol in der Browserzeile. Wenn die Verschlüsselung aktiviert ist, können Daten,
        die du an uns übermittelst, von Dritten nicht ohne Weiteres mitgelesen werden.
      </p>

      <LegalH2>4. Server-Logfiles</LegalH2>
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
        Server-Logfiles, die dein Browser automatisch an uns bzw. an den Hosting-Anbieter
        übermittelt. Dazu können gehören:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer-URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
        Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse
        liegt in der technisch fehlerfreien Darstellung und der Sicherheit der Website
        (z. B. Erkennung von Angriffen).
      </p>

      <LegalH2>5. Cookies & Einwilligung</LegalH2>
      <p>
        Unsere Website verwendet Cookies und vergleichbare Technologien. Cookies sind kleine
        Textdateien, die auf deinem Endgerät gespeichert werden und die dein Browser speichert.
      </p>
      <LegalH3>Technisch notwendige Cookies</LegalH3>
      <p>
        Technisch notwendige Cookies sind für den Betrieb der Website erforderlich, etwa zur
        Speicherung deiner Cookie-Auswahl. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw.
        § 25 Abs. 2 TDDDG.
      </p>
      <LegalH3>Optionale Cookies (Analyse)</LegalH3>
      <p>
        Analyse-Cookies setzen wir nur, wenn du dazu eingewilligt hast. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG. Deine Auswahl kannst du jederzeit über die
        „Cookie-Einstellungen“ im Seitenfuß ändern oder widerrufen.
      </p>
      <p>
        Derzeit setzen wir keine Marketing-Pixel (z. B. Meta Pixel) ein. Eine entsprechende
        Kategorie in den Cookie-Einstellungen dient der Vorbereitung und speichert ggf. deine
        Auswahl, lädt aber keine Marketing-Trackingdienste.
      </p>

      <LegalH2>6. Google Analytics 4</LegalH2>
      <p>
        Sofern du einwilligst, nutzen wir Google Analytics 4, einen Webanalysedienst der Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
      </p>
      <p>
        Google Analytics verwendet Cookies und vergleichbare Technologien, um zu analysieren, wie
        Besucher unsere Website nutzen. Dabei können u. a. Informationen zum genutzten Gerät, zur
        Interaktion mit der Website und zur ungefähren geografischen Lage verarbeitet werden. Die
        IP-Adresse wird nach Angaben von Google in der EU gekürzt bzw. anonymisiert verarbeitet
        (IP-Anonymisierung).
      </p>
      <p>
        Wir setzen Google Analytics mit Consent Mode ein: Messungen und Speicherung erfolgen nur
        nach deiner Einwilligung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Du kannst die
        Einwilligung jederzeit über die Cookie-Einstellungen widerrufen. Die Rechtmäßigkeit der
        bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
      </p>
      <p>
        Weitere Informationen:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://policies.google.com/privacy
        </a>
        {" "}sowie{" "}
        <a
          href="https://support.google.com/analytics/answer/6004245"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://support.google.com/analytics/answer/6004245
        </a>
        .
      </p>

      <LegalH2>7. Kontaktformular</LegalH2>
      <p>
        Wenn du uns über das Kontaktformular auf dieser Website kontaktierst, verarbeiten wir die
        von dir angegebenen Daten (insbesondere Name, E-Mail-Adresse, ggf. Telefonnummer,
        Interessensangabe und Nachricht), um deine Anfrage zu bearbeiten und zu beantworten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen bzw.
        Vertragsanbahnung), soweit deine Anfrage auf den Abschluss eines Vertrags gerichtet ist;
        im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von
        Anfragen).
      </p>
      <p>
        Für den technischen Versand der Benachrichtigung an uns und – soweit vorhanden – einer
        Bestätigungsmail an dich nutzen wir den Dienst Brevo (Sendinblue GmbH, Köpenicker Straße
        126, 10179 Berlin). Die Daten werden dabei an Brevo übermittelt und dort verarbeitet.
        Weitere Informationen:{" "}
        <a
          href="https://www.brevo.com/de/legal/privacypolicy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://www.brevo.com/de/legal/privacypolicy/
        </a>
        .
      </p>
      <p>
        Die Daten bleiben so lange gespeichert, wie es für die Bearbeitung deiner Anfrage und
        etwaiger Anschlussfragen erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>

      <LegalH2>8. Newsletter (Brevo)</LegalH2>
      <p>
        Wenn du dich für unseren Newsletter anmeldest, verarbeiten wir deine E-Mail-Adresse, um
        dich über Eröffnung, Classes, Angebote und Studio-News zu informieren.
      </p>
      <p>
        Die Anmeldung erfolgt im Double-Opt-in-Verfahren: Nach der Eintragung erhältst du eine
        Bestätigungs-E-Mail mit einem Link. Erst nach Klick auf diesen Link wird deine Anmeldung
        wirksam und deine E-Mail-Adresse in unserer Newsletter-Liste gespeichert.
      </p>
      <p>
        Rechtsgrundlage ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung
        kannst du jederzeit widerrufen, z. B. über den Abmeldelink in jeder Newsletter-E-Mail oder
        durch Nachricht an {studio.email}. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Verarbeitung bleibt unberührt.
      </p>
      <p>
        Für Versand, Double-Opt-in und Speicherung der Newsletter-Kontakte nutzen wir Brevo
        (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin). Deine Kontaktdaten werden bei Brevo
        in unserer Kontaktliste gespeichert und dort verarbeitet. Weitere Informationen:{" "}
        <a
          href="https://www.brevo.com/de/legal/privacypolicy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://www.brevo.com/de/legal/privacypolicy/
        </a>
        .
      </p>
      <p>
        Sofern du im Kontaktformular zusätzlich der Zusendung von News und Angeboten zustimmst,
        erfolgt die Aufnahme in den Newsletter ebenfalls über das Double-Opt-in-Verfahren bei Brevo.
      </p>

      <LegalH2>9. Buchungssystem (Calunio)</LegalH2>
      <p>
        Für Kursplan, Buchung, Pakete, Mitgliedschaften und Login binden wir auf unserer
        Buchungsseite das Buchungs-Widget von Calunio ein (Calunio GbR, Vierhausstr. 112, 44807
        Bochum).
      </p>
      <p>
        Bei Nutzung des Buchungssystems werden die von dir eingegebenen bzw. für die Buchung
        erforderlichen Daten (z. B. Name, Kontaktdaten, Buchungs- und Vertragsdaten) verarbeitet.
        Verantwortliche Stelle für die Verarbeitung der Endkundendaten im Zusammenhang mit
        Studio-Buchungen ist The Reform Room. Calunio handelt hierbei als Auftragsverarbeiterin
        gemäß Art. 28 DSGVO.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Erfüllung bzw. Anbahnung eines Vertrags)
        sowie ggf. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten
        Online-Buchung).
      </p>
      <p>
        Beim Laden des Widgets können technisch notwendige Verbindungsdaten an Calunio übermittelt
        werden. Weitere Informationen zur Datenverarbeitung durch Calunio:{" "}
        <a
          href="https://calunio.com/legal/datenschutzerklaerung"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://calunio.com/legal/datenschutzerklaerung
        </a>
        .
      </p>

      <LegalH2>10. Externe Links (Google Maps)</LegalH2>
      <p>
        Für die Anfahrt verlinken wir auf Google Maps. Es handelt sich um einen einfachen
        Textlink. Google-Maps-Inhalte werden nicht in unsere Website eingebettet und beim
        bloßen Besuch unserer Seiten nicht geladen. Erst wenn du den Link anklickst, wirst du zu
        Google weitergeleitet; dort gelten die Datenschutzbestimmungen von Google.
      </p>

      <LegalH2>11. Rechte der betroffenen Personen</LegalH2>
      <p>Du hast nach der DSGVO insbesondere folgende Rechte:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong className="font-medium text-espresso">Auskunft</strong> (Art. 15 DSGVO) über die
          bei uns zu deiner Person gespeicherten Daten
        </li>
        <li>
          <strong className="font-medium text-espresso">Berichtigung</strong> (Art. 16 DSGVO)
          unrichtiger oder unvollständiger Daten
        </li>
        <li>
          <strong className="font-medium text-espresso">Löschung</strong> (Art. 17 DSGVO), soweit
          keine gesetzlichen Aufbewahrungspflichten entgegenstehen
        </li>
        <li>
          <strong className="font-medium text-espresso">Einschränkung der Verarbeitung</strong>{" "}
          (Art. 18 DSGVO)
        </li>
        <li>
          <strong className="font-medium text-espresso">Datenübertragbarkeit</strong> (Art. 20
          DSGVO)
        </li>
        <li>
          <strong className="font-medium text-espresso">Widerspruch</strong> (Art. 21 DSGVO) gegen
          Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
        </li>
        <li>
          <strong className="font-medium text-espresso">Widerruf von Einwilligungen</strong>{" "}
          (Art. 7 Abs. 3 DSGVO) mit Wirkung für die Zukunft
        </li>
      </ul>
      <p>
        Zudem steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Zuständig
        für Nordrhein-Westfalen ist die Landesbeauftragte für Datenschutz und
        Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
      </p>

      <LegalH2>12. Kontakt in Datenschutzfragen</LegalH2>
      <p>
        Bei Fragen zum Datenschutz oder zur Wahrnehmung deiner Rechte erreichst du uns unter:{" "}
        {studio.email}
      </p>
    </LegalPage>
  );
}
