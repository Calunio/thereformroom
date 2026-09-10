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
    <LegalPage title="Datenschutzerklärung" updated="September 2026">
      <LegalH2>1. Verantwortliche Stelle</LegalH2>
      <p>
        Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
      </p>
      <p>
        {studio.name}
        <br />
        Inhaberin: {studio.owner}
        <br />
        {studio.street}
        <br />
        {studio.postalCode} {studio.city}
        <br />
        Deutschland
      </p>
      <p>
        E-Mail: {studio.email}
        <br />
        Website: www.thereformroom.de
      </p>
      <p>
        Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung (DSGVO) ist die oben
        genannte Inhaberin.
      </p>

      <LegalH2>2. Allgemeine Hinweise zum Datenschutz</LegalH2>
      <p>
        Der Schutz deiner personenbezogenen Daten ist mir wichtig. Ich verarbeite personenbezogene
        Daten ausschließlich im Rahmen der geltenden datenschutzrechtlichen Vorschriften,
        insbesondere der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes
        (BDSG).
      </p>
      <p>
        Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
        identifizierbare Person beziehen, beispielsweise Name, E-Mail-Adresse, Telefonnummer,
        Anschrift, Buchungsdaten oder Zahlungsinformationen.
      </p>
      <p>
        In dieser Datenschutzerklärung informiere ich dich darüber, welche personenbezogenen Daten
        bei der Nutzung meiner Website, bei Buchungen und bei der Kontaktaufnahme verarbeitet
        werden, zu welchen Zwecken dies erfolgt und welche Rechte dir zustehen.
      </p>

      <LegalH2>3. Besuch der Website und Hosting</LegalH2>
      <p>
        Beim Aufruf meiner Website werden durch den verwendeten Webserver automatisch Informationen
        verarbeitet. Hierzu können insbesondere gehören:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>IP-Adresse des aufrufenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seiten und Dateien</li>
        <li>verwendeter Browser</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer-URL</li>
        <li>Informationen über den verwendeten Internetanbieter</li>
      </ul>
      <p>
        Die Verarbeitung dieser Daten erfolgt, um die Website technisch bereitzustellen, die
        Sicherheit und Stabilität der Website zu gewährleisten und mögliche technische Fehler zu
        erkennen.
      </p>
      <p>
        Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
        Interesse liegt in der sicheren und zuverlässigen Bereitstellung meiner Website.
      </p>
      <p>
        Diese Website wird bei <strong>Netlify</strong> gehostet (Netlify, Inc., 44 Montgomery
        Street, Suite 300, San Francisco, CA 94104, USA). Netlify kann dabei technisch bedingt
        Zugriff auf die oben genannten Server-Logdaten haben. Mit Netlify besteht — soweit
        gesetzlich erforderlich — ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
      </p>
      <p>
        Eine Übermittlung in die USA kann nicht ausgeschlossen werden. Netlify ist unter dem
        EU-U.S. Data Privacy Framework zertifiziert. Weitere Informationen:{" "}
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

      <LegalH2>4. Buchungssystem Calunio</LegalH2>
      <p>
        Für die Darstellung meines Kursplans, die Buchung von Kursen, Paketen, Mitgliedschaften
        und Gutscheinen sowie die Verwaltung von Buchungs- und Kundendaten nutze ich das
        Buchungssystem Calunio. Auf der Website ist hierfür ein Calunio-Widget eingebunden; bei
        einer Buchung oder beim Aufruf des Buchungsportals wirst du auf{" "}
        <strong>thereformroom.calunio.com</strong> weitergeleitet.
      </p>
      <p>Bei einer Buchung können insbesondere folgende Daten verarbeitet werden:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Vor- und Nachname</li>
        <li>E-Mail-Adresse</li>
        <li>ggf. Telefonnummer</li>
        <li>gebuchte Kurse</li>
        <li>Buchungs- und Stornierungsdaten</li>
        <li>erworbene Credits, Pakete, Mitgliedschaften oder Gutscheine</li>
        <li>ggf. Zahlungs- und Rechnungsdaten</li>
        <li>sonstige Angaben, die du im Rahmen der Buchung übermittelst</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen und zur Erfüllung
        von Verträgen (Art. 6 Abs. 1 lit. b DSGVO), zur Erfüllung gesetzlicher
        Aufbewahrungspflichten (Art. 6 Abs. 1 lit. c DSGVO) sowie auf Grundlage meines
        berechtigten Interesses an einer sicheren Kurs- und Kundenverwaltung (Art. 6 Abs. 1
        lit. f DSGVO).
      </p>
      <p>
        Calunio verarbeitet die Daten grundsätzlich in meinem Auftrag. Hierzu besteht ein
        Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Für die konkrete Datenverarbeitung
        gelten ergänzend die Datenschutzbestimmungen von Calunio:{" "}
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
      <LegalH3>Zahlungsabwicklung</LegalH3>
      <p>
        Soweit Zahlungen über das Buchungsportal ausgelöst werden, kann die Zahlungsabwicklung
        über externe Zahlungsdienstleister erfolgen, insbesondere über Stripe (Stripe Payments
        Europe, Ltd., Irland). In diesem Fall werden zahlungsrelevante Daten (z.&nbsp;B. Name,
        Zahlungsart, Betrag, Transaktionsdaten und Rechnungsdaten) verarbeitet. Rechtsgrundlage
        ist Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. c DSGVO für gesetzliche
        Aufbewahrungspflichten.
      </p>
      <p>
        Für die eigentliche Zahlungsabwicklung gelten zusätzlich die Datenschutzinformationen des
        jeweiligen Zahlungsdienstleisters, bei Stripe:{" "}
        <a
          href="https://stripe.com/de/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://stripe.com/de/privacy
        </a>
        .
      </p>
      <p>
        Buchungs- und Vertragsdaten werden gelöscht oder gesperrt, sobald sie für die genannten
        Zwecke nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen. Handels- und steuerrechtlich relevante Daten können bis zu zehn Jahre
        aufbewahrt werden.
      </p>

      <LegalH2>5. Kontaktformular</LegalH2>
      <p>
        Wenn du mich per E-Mail, Kontaktformular oder auf anderem Wege kontaktierst, verarbeite
        ich die von dir mitgeteilten personenbezogenen Daten zur Bearbeitung und Beantwortung
        deiner Anfrage.
      </p>
      <p>Hierzu können insbesondere gehören:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer</li>
        <li>Interesse</li>
        <li>Inhalt deiner Nachricht</li>
        <li>weitere freiwillig übermittelte Informationen</li>
      </ul>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der Anbahnung
        oder Durchführung eines Vertrags zusammenhängt. In allen anderen Fällen erfolgt die
        Verarbeitung auf Grundlage meines berechtigten Interesses an der Beantwortung von
        Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.
      </p>
      <p>
        Nach dem Absenden kannst du eine automatische Bestätigungs-E-Mail über den Eingang deiner
        Anfrage erhalten.
      </p>
      <p>
        Die technische Verarbeitung erfolgt über Brevo (Anbieterdaten siehe Abschnitt 6).
        Brevo verarbeitet die Daten in meinem Auftrag.
      </p>
      <p>
        Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <p>
        Über das Kontaktformular kannst du optional einwilligen, News, Angebote und Class-Infos
        per E-Mail zu erhalten. Diese Einwilligung ist freiwillig (Art. 6 Abs. 1 lit. a DSGVO)
        und kann jederzeit widerrufen werden.
      </p>

      <LegalH2>6. Newsletter</LegalH2>
      <p>Auf meiner Website besteht die Möglichkeit, sich für meinen Newsletter anzumelden.</p>
      <p>
        Wenn du dich für den Newsletter anmeldest, verarbeite ich deine E-Mail-Adresse, um dir
        Informationen über The Reform Room, Angebote, Kurse, Aktionen, Neuigkeiten und
        gegebenenfalls Veranstaltungen zuzusenden.
      </p>
      <p>
        Die Anmeldung erfolgt grundsätzlich über das sogenannte Double-Opt-in-Verfahren. Nach
        der Anmeldung erhältst du eine E-Mail, in der du deine Anmeldung bestätigen musst. Erst
        nach dieser Bestätigung wird deine E-Mail-Adresse in den Newsletter-Verteiler
        aufgenommen.
      </p>
      <p>Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
      <p>
        Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu
        kannst du den Abmeldelink verwenden, der in jedem Newsletter enthalten ist, oder mich
        direkt kontaktieren.
      </p>
      <LegalH3>Versand über Brevo</LegalH3>
      <p>
        Versand, Kontaktverwaltung sowie der Versand der Bestätigungs- und
        Benachrichtigungs-E-Mails erfolgen über die Brevo GmbH, Köpenicker Straße 126, 10179
        Berlin, Deutschland. Brevo verarbeitet die Daten in meinem Auftrag. Hierzu besteht ein
        Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
      </p>
      <p>
        Weitere Informationen zur Datenverarbeitung durch Brevo findest du in der
        Datenschutzerklärung von Brevo:{" "}
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

      <LegalH2>7. Gästeliste / Grand Opening</LegalH2>
      <p>
        Für Veranstaltungen wie das Grand Opening kannst du dich über ein Formular auf eine
        Gästeliste eintragen. Dabei verarbeite ich Vorname, Nachname und E-Mail-Adresse, um
        deine Zusage zu erfassen und dich im Zusammenhang mit der Veranstaltung zu informieren.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung deiner
        Veranstaltungszusage), hilfsweise Art. 6 Abs. 1 lit. f DSGVO (Organisation der
        Veranstaltung).
      </p>
      <p>
        Die Daten werden über Brevo verarbeitet (siehe Abschnitt 6) und nach der Veranstaltung
        gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten oder eine gesonderte
        Einwilligung (z.&nbsp;B. Newsletter) entgegenstehen.
      </p>

      <LegalH2>8. Cookies</LegalH2>
      <p>
        Meine Website kann sogenannte Cookies oder vergleichbare Speichertechniken verwenden.
        Cookies sind kleine Textdateien, die auf deinem Endgerät gespeichert werden und bestimmte
        Informationen enthalten können.
      </p>
      <p>
        Derzeit setze ich nur technisch notwendige Speichervorgänge ein, soweit sie für den Betrieb
        der Website erforderlich sind, etwa um Cookie-Einstellungen zu merken. Analyse- oder
        Marketing-Cookies kommen derzeit nicht zum Einsatz.
      </p>
      <p>
        Für den Einsatz technisch notwendiger Cookies ist grundsätzlich keine Einwilligung
        erforderlich, soweit diese für den von dir ausdrücklich gewünschten Dienst unbedingt
        erforderlich sind.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 TDDDG, soweit die
        entsprechenden Voraussetzungen vorliegen.
      </p>

      <LegalH2>9. Schriftarten</LegalH2>
      <p>
        Diese Website verwendet die Schriftarten Cormorant Garamond und Jost. Die
        Schriftdateien werden über Next.js zur Build-Zeit heruntergeladen und lokal von unserem
        Server ausgeliefert. Beim Aufruf der Website findet keine Verbindung zu Google-Servern
        statt; deine IP-Adresse wird dabei nicht an Google übermittelt.
      </p>

      <LegalH2>10. Social Media</LegalH2>
      <p>
        Ich nutze soziale Medien, insbesondere Instagram, um über The Reform Room, Kurse,
        Angebote und Neuigkeiten zu informieren.
      </p>
      <p>Auf meiner Website können Links zu meinen Social-Media-Profilen eingebunden sein.</p>
      <p>
        Beim bloßen Besuch meiner Website werden durch einen einfachen externen Link grundsätzlich
        keine personenbezogenen Daten an das jeweilige soziale Netzwerk übertragen. Erst wenn du
        den entsprechenden Link anklickst und das soziale Netzwerk aufrufst, gelten die
        Datenschutzbestimmungen des jeweiligen Anbieters.
      </p>
      <p>
        Mein Instagram-Profil wird betrieben über Instagram / Meta Platforms Ireland Limited.
        Weitere Informationen zur Verarbeitung personenbezogener Daten durch Meta findest du in
        den Datenschutzbestimmungen von Meta:{" "}
        <a
          href="https://privacycenter.instagram.com/policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://privacycenter.instagram.com/policy/
        </a>
        .
      </p>

      <LegalH2>11. Speicherdauer</LegalH2>
      <p>
        Ich speichere personenbezogene Daten grundsätzlich nur so lange, wie dies für den
        jeweiligen Zweck erforderlich ist.
      </p>
      <p>
        Darüber hinaus können gesetzliche Aufbewahrungspflichten bestehen, insbesondere nach
        handels- und steuerrechtlichen Vorschriften. In diesen Fällen werden die Daten für die
        gesetzlich vorgeschriebene Dauer gespeichert und anschließend gelöscht, sofern kein
        weiterer zulässiger Verarbeitungszweck besteht.
      </p>

      <LegalH2>12. Weitergabe von Daten</LegalH2>
      <p>
        Eine Weitergabe personenbezogener Daten erfolgt nur, wenn dies zur Erfüllung eines
        Vertrags erforderlich ist, eine gesetzliche Verpflichtung besteht, eine Einwilligung
        vorliegt oder ein berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO besteht.
      </p>
      <p>
        Dienstleister, die mich bei der Durchführung meiner Leistungen unterstützen, können
        personenbezogene Daten in meinem Auftrag verarbeiten. Mit diesen Dienstleistern werden —
        soweit gesetzlich erforderlich — entsprechende Auftragsverarbeitungsverträge gemäß Art. 28
        DSGVO geschlossen.
      </p>

      <LegalH2>13. Datenübermittlung in Drittländer</LegalH2>
      <p>
        Eine Übermittlung personenbezogener Daten in Länder außerhalb der Europäischen Union bzw.
        des Europäischen Wirtschaftsraums erfolgt nur, wenn die gesetzlichen Voraussetzungen der
        Art. 44 ff. DSGVO erfüllt sind.
      </p>
      <p>
        Soweit eine Übermittlung in ein Drittland erfolgt, wird insbesondere darauf geachtet, dass
        ein angemessenes Datenschutzniveau gewährleistet ist, beispielsweise durch einen
        Angemessenheitsbeschluss der Europäischen Kommission oder geeignete Garantien wie
        EU-Standardvertragsklauseln. Das betrifft insbesondere das Hosting bei Netlify (USA)
        sowie gegebenenfalls die Zahlungsabwicklung über Stripe.
      </p>

      <LegalH2>14. Deine Rechte</LegalH2>
      <p>Du hast nach der DSGVO insbesondere folgende Rechte:</p>
      <LegalH3>Recht auf Auskunft</LegalH3>
      <p>
        Du kannst Auskunft darüber verlangen, ob personenbezogene Daten über dich verarbeitet
        werden und welche Daten dies sind.
      </p>
      <LegalH3>Recht auf Berichtigung</LegalH3>
      <p>
        Du kannst die Berichtigung unrichtiger oder die Vervollständigung unvollständiger
        personenbezogenen Daten verlangen.
      </p>
      <LegalH3>Recht auf Löschung</LegalH3>
      <p>
        Du kannst unter den gesetzlichen Voraussetzungen die Löschung deiner personenbezogenen
        Daten verlangen.
      </p>
      <LegalH3>Recht auf Einschränkung der Verarbeitung</LegalH3>
      <p>
        Du kannst unter bestimmten Voraussetzungen verlangen, dass die Verarbeitung deiner
        personenbezogenen Daten eingeschränkt wird.
      </p>
      <LegalH3>Recht auf Datenübertragbarkeit</LegalH3>
      <p>
        Du hast unter den gesetzlichen Voraussetzungen das Recht, deine personenbezogenen Daten in
        einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
      </p>
      <LegalH3>Recht auf Widerspruch</LegalH3>
      <p>
        Du kannst aus Gründen, die sich aus deiner besonderen Situation ergeben, gegen eine
        Verarbeitung deiner personenbezogenen Daten widersprechen, sofern diese auf Art. 6 Abs. 1
        lit. e oder f DSGVO beruht.
      </p>
      <LegalH3>Widerruf einer Einwilligung</LegalH3>
      <p>
        Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Die
        Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.
      </p>
      <p>Zur Ausübung deiner Rechte kannst du dich jederzeit an mich wenden.</p>

      <LegalH2>15. Beschwerderecht bei einer Aufsichtsbehörde</LegalH2>
      <p>
        Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn du der
        Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen
        datenschutzrechtliche Vorschriften verstößt.
      </p>
      <p>Zuständige Aufsichtsbehörde kann insbesondere sein:</p>
      <p>
        Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)
      </p>
      <p>
        Weitere Informationen und Kontaktdaten findest du auf der Website der zuständigen
        Datenschutzaufsichtsbehörde:{" "}
        <a
          href="https://www.ldi.nrw.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://www.ldi.nrw.de/
        </a>
        .
      </p>

      <LegalH2>16. Datensicherheit</LegalH2>
      <p>
        Ich treffe angemessene technische und organisatorische Maßnahmen, um deine
        personenbezogenen Daten vor Verlust, Zerstörung, Manipulation, unberechtigtem Zugriff oder
        sonstiger unrechtmäßiger Verarbeitung zu schützen.
      </p>
      <p>
        Die Sicherheitsmaßnahmen werden entsprechend der technischen Entwicklung regelmäßig
        überprüft und angepasst.
      </p>

      <LegalH2>17. Aktualisierung dieser Datenschutzerklärung</LegalH2>
      <p>
        Ich behalte mir vor, diese Datenschutzerklärung anzupassen, wenn sich die rechtlichen
        Anforderungen, die technischen Gegebenheiten meiner Website oder die von mir eingesetzten
        Dienste ändern.
      </p>
      <p>
        Es gilt jeweils die zum Zeitpunkt deines Besuchs auf der Website veröffentlichte
        Datenschutzerklärung.
      </p>
    </LegalPage>
  );
}
