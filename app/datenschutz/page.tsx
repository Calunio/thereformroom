import type { Metadata } from "next";
import { siteContent } from "@/app/content";
import { LegalPage, LegalH2, LegalH3, Placeholder } from "@/app/components/LegalPage";

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
        Lagesche Straße 15a
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
        Hosting-Anbieter:{" "}
        <Placeholder>Name und Anschrift des Hosting-Anbieters einfügen</Placeholder>
      </p>
      <p>
        Weitere Informationen zur Datenverarbeitung durch den Hosting-Anbieter findest du in
        dessen Datenschutzerklärung.
      </p>

      <LegalH2>4. Buchungssystem Calunio</LegalH2>
      <p>
        Für die Anzeige meines Kursangebots sowie für die Buchung und Verwaltung von
        Reformer-Pilates-Kursen nutze ich das Buchungssystem Calunio.
      </p>
      <p>Bei einer Buchung können insbesondere folgende Daten verarbeitet werden:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Vor- und Nachname</li>
        <li>E-Mail-Adresse</li>
        <li>ggf. Telefonnummer</li>
        <li>gebuchte Kurse</li>
        <li>Buchungs- und Stornierungsdaten</li>
        <li>erworbene Credits, Pakete oder Mitgliedschaften</li>
        <li>ggf. Zahlungs- und Rechnungsdaten</li>
        <li>sonstige Angaben, die du im Rahmen der Buchung übermittelst</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt zur Durchführung und Verwaltung des Vertragsverhältnisses, zur
        Organisation der gebuchten Kurse sowie zur Kommunikation im Zusammenhang mit deiner
        Buchung.
      </p>
      <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
      <p>
        Soweit Calunio personenbezogene Daten in meinem Auftrag verarbeitet, erfolgt dies auf
        Grundlage eines entsprechenden Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO.
      </p>
      <p>
        Für die konkrete Datenverarbeitung gelten ergänzend die Datenschutzbestimmungen von
        Calunio:{" "}
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

      <LegalH2>5. Zahlungsabwicklung</LegalH2>
      <p>
        Sofern du über die Website oder über das Buchungssystem eine kostenpflichtige Leistung
        buchst, können für die Zahlungsabwicklung personenbezogene Daten an den jeweils
        eingesetzten Zahlungsdienstleister übermittelt werden.
      </p>
      <p>Hierzu können insbesondere gehören:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Name</li>
        <li>Rechnungsdaten</li>
        <li>Zahlungsinformationen</li>
        <li>Transaktionsdaten</li>
        <li>ggf. E-Mail-Adresse</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt zur Abwicklung deiner Zahlung und damit zur Erfüllung des Vertrags
        gemäß Art. 6 Abs. 1 lit. b DSGVO sowie zur Erfüllung gesetzlicher Aufbewahrungs- und
        Nachweispflichten gemäß Art. 6 Abs. 1 lit. c DSGVO.
      </p>
      <p>
        Eingesetzte Zahlungsdienstleister:{" "}
        <Placeholder>Zahlungsanbieter einfügen, z. B. Stripe / PayPal / Mollie</Placeholder>
      </p>
      <p>
        Für die Verarbeitung durch den jeweiligen Zahlungsdienstleister gelten dessen eigene
        Datenschutzbestimmungen.
      </p>

      <LegalH2>6. Kontaktaufnahme</LegalH2>
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
        Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <LegalH2>7. Newsletter</LegalH2>
      <p>Auf meiner Website besteht die Möglichkeit, sich für meinen Newsletter anzumelden.</p>
      <p>
        Wenn du dich für den Newsletter anmeldest, verarbeite ich deine E-Mail-Adresse, um dir
        Informationen über The Reform Room, Angebote, Kurse, Aktionen, Neuigkeiten und
        gegebenenfalls Veranstaltungen zuzusenden.
      </p>
      <p>
        Die Anmeldung erfolgt grundsätzlich über das sogenannte Double-Opt-in-Verfahren. Nach der
        Anmeldung erhältst du eine E-Mail, in der du deine Anmeldung bestätigen musst. Erst nach
        dieser Bestätigung wird deine E-Mail-Adresse in den Newsletter-Verteiler aufgenommen.
      </p>
      <p>Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
      <p>
        Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu
        kannst du den Abmeldelink verwenden, der in jedem Newsletter enthalten ist, oder mich
        direkt kontaktieren.
      </p>
      <LegalH3>Versand über Brevo</LegalH3>
      <p>Für den Versand meines Newsletters nutze ich Brevo.</p>
      <p>Anbieter ist:</p>
      <p>
        Brevo GmbH
        <br />
        Köpenicker Straße 126
        <br />
        10179 Berlin
        <br />
        Deutschland
      </p>
      <p>
        Brevo verarbeitet die für den Newsletter erforderlichen Daten in meinem Auftrag. Hierzu
        besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
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

      <LegalH2>8. Cookies</LegalH2>
      <p>
        Meine Website kann sogenannte Cookies verwenden. Cookies sind kleine Textdateien, die auf
        deinem Endgerät gespeichert werden und bestimmte Informationen enthalten können.
      </p>
      <p>Ich unterscheide zwischen technisch notwendigen Cookies und optionalen Cookies.</p>
      <LegalH3>Technisch notwendige Cookies</LegalH3>
      <p>
        Technisch notwendige Cookies sind erforderlich, damit die Website ordnungsgemäß
        funktioniert. Sie können beispielsweise dazu dienen, Einstellungen oder technische
        Funktionen bereitzustellen.
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
      <LegalH3>Optionale Cookies</LegalH3>
      <p>
        Nicht notwendige Cookies, insbesondere Analyse- oder Marketing-Cookies, werden nur
        eingesetzt, wenn du zuvor deine Einwilligung erteilt hast.
      </p>
      <p>
        Die Einwilligung kannst du jederzeit über die Cookie-Einstellungen der Website ändern oder
        widerrufen.
      </p>

      <LegalH2>9. Analyse- und Trackingdienste</LegalH2>
      <p>
        Sofern auf meiner Website Analyse- oder Trackingdienste eingesetzt werden, erfolgt deren
        Nutzung nur auf Grundlage deiner vorherigen Einwilligung.
      </p>
      <p>
        Aktuell eingesetzte Analyse-/Trackingdienste:{" "}
        <Placeholder>Hier nur die tatsächlich eingesetzten Dienste eintragen.</Placeholder>
      </p>
      <p>
        Sollten beispielsweise Google Analytics, Meta Pixel oder vergleichbare Dienste eingesetzt
        werden, werden diese an dieser Stelle einschließlich Anbieter, Zweck, Rechtsgrundlage,
        Speicherdauer und gegebenenfalls Datenübermittlung in Drittländer konkret beschrieben.
      </p>
      <p>Nicht benötigte Dienste werden nicht aktiviert.</p>

      <LegalH2>10. Social Media</LegalH2>
      <p>
        Ich nutze soziale Medien, insbesondere Instagram, um über The Reform Room, Kurse, Angebote
        und Neuigkeiten zu informieren.
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
        personenbezogene Daten in meinem Auftrag verarbeiten. Mit diesen Dienstleistern werden –
        soweit gesetzlich erforderlich – entsprechende Auftragsverarbeitungsverträge gemäß Art. 28
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
        EU-Standardvertragsklauseln.
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
        personenbezogener Daten verlangen.
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
