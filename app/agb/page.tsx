import type { Metadata } from "next";
import { siteContent } from "@/app/content";
import { LegalPage, LegalH2 } from "@/app/components/LegalPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";
const { studio } = siteContent;

export const metadata: Metadata = {
  title: "AGB | The Reform Room",
  description:
    "Allgemeine Geschäftsbedingungen von The Reform Room, Reformer Pilates Studio in Lemgo.",
  alternates: { canonical: `${SITE_URL}/agb` },
};

export default function AgbPage() {
  return (
    <LegalPage
      title={"Allgemeine Geschäftsbedingungen\u00A0(AGB)"}
      titleClassName="text-[1.7rem] sm:text-[1.85rem] md:text-[2rem] lg:text-[2.05rem] tracking-tight sm:whitespace-nowrap"
      updated="September 2026"
    >
      <p className="text-espresso/60">{studio.name}</p>

      <LegalH2>§ 1 Geltungsbereich und Vertragspartnerin</LegalH2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen The Reform Room
        und dem Kunden über die Buchung und Nutzung der angebotenen Leistungen. Hierzu zählen
        insbesondere Reformer-Pilates-Kurse, Special Offers, Events, Credits, Credit-Pakete,
        Abonnements sowie sonstige Leistungen.
      </p>
      <p>
        The Reform Room wird betrieben von {studio.owner}, {studio.street}, {studio.postalCode}{" "}
        {studio.city} – nachfolgend „Anbieterin“ genannt.
      </p>
      <p>
        Kunde ist jede Person, die eine Leistung von The Reform Room bucht oder in Anspruch nimmt.
        Die Bezeichnung „Kunde“ gilt unabhängig vom Geschlecht.
      </p>
      <p>
        Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft überwiegend zu privaten
        Zwecken abschließt.
      </p>
      <p>
        Die jeweils gültigen AGB werden dem Kunden im Buchungssystem Calunio und gegebenenfalls
        auf der Website der Anbieterin zur Verfügung gestellt. Mit Abschluss einer Buchung erkennt
        der Kunde diese AGB an.
      </p>
      <p>
        Abweichende Bedingungen des Kunden gelten nur, wenn die Anbieterin ihrer Geltung
        ausdrücklich in Textform zugestimmt hat.
      </p>

      <LegalH2>§ 2 Buchung und Vertragsschluss</LegalH2>
      <p>
        Die Darstellung der Leistungen im Buchungssystem oder auf der Website stellt kein
        verbindliches Angebot dar, sondern eine Aufforderung zur Buchung.
      </p>
      <p>
        Mit Abschluss des Buchungsvorgangs gibt der Kunde ein verbindliches Angebot zum Abschluss
        des jeweiligen Vertrages ab.
      </p>
      <p>
        Der Vertrag kommt zustande, sobald die Buchung durch die Anbieterin oder das
        Buchungssystem Calunio bestätigt wurde. Die Bestätigung erfolgt durch den Abschluss im
        Kundenkonto.
      </p>
      <p>
        Vor Abschluss der Buchung kann der Kunde seine Angaben und die ausgewählte Leistung
        überprüfen und gegebenenfalls korrigieren.
      </p>

      <LegalH2>§ 3 Widerrufsrecht</LegalH2>
      <p>
        Verbrauchern steht grundsätzlich ein gesetzliches Widerrufsrecht zu. Soweit ein
        Widerrufsrecht besteht, wird der Kunde hierüber gesondert informiert.
      </p>
      <p>
        Für Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, die zu einem bestimmten
        Termin oder innerhalb eines bestimmten Zeitraums erbracht werden, kann das Widerrufsrecht
        gemäß § 312g Abs. 2 Nr. 9 BGB ausgeschlossen sein. Dies betrifft insbesondere fest
        gebuchte Kurse, Specials und Events.
      </p>
      <p>
        Soweit das Widerrufsrecht gesetzlich ausgeschlossen ist, bleibt die Möglichkeit einer
        Stornierung nach den Regelungen in § 6 unberührt.
      </p>

      <LegalH2>§ 4 Preise und Zahlung</LegalH2>
      <p>
        Es gelten die Preise, die zum Zeitpunkt der Buchung im Buchungssystem Calunio angegeben
        sind. Soweit nicht anders ausgewiesen, verstehen sich die Preise inklusive der
        gesetzlichen Mehrwertsteuer.
      </p>
      <p>Die verfügbaren Zahlungsmethoden werden dem Kunden während des Buchungsvorgangs angezeigt.</p>
      <p>
        Eine Teilnahme kann je nach Angebot über eine Einzelbuchung, Credits, Credit-Pakete, ein
        Abonnement oder ein anderes Buchungsmodell erfolgen.
      </p>
      <p>
        Die für eine Leistung erforderliche Anzahl an Credits sowie deren Gültigkeitsdauer werden
        vor Abschluss der Buchung angezeigt.
      </p>
      <p>
        Credits, Credit-Pakete, Buchungen, Abonnements und sonstige Teilnahmeberechtigungen sind
        persönlich und nicht übertragbar. Eine Weitergabe oder Nutzung durch andere Personen ist
        nicht gestattet.
      </p>
      <p>
        Credits müssen innerhalb ihrer jeweiligen Gültigkeitsdauer genutzt werden. Nach Ablauf der
        Gültigkeit verfallen nicht genutzte Credits, sofern keine zwingenden gesetzlichen
        Vorschriften entgegenstehen.
      </p>
      <p>
        Nicht genutzte Credits aus einem Abonnement werden nicht automatisch in den Folgemonat
        übertragen, sofern dies nicht ausdrücklich anders angegeben ist.
      </p>
      <p>
        Bei nicht fristgerechter Zahlung kann die Anbieterin den Zugang zu weiteren Buchungen und
        Leistungen bis zum Ausgleich der offenen Forderung sperren. Die Zahlungspflicht bleibt
        bestehen.
      </p>
      <p>
        Preisänderungen gelten grundsätzlich nur für zukünftige Buchungen. Bereits erworbene
        Credits und bereits abgeschlossene Verträge bleiben unberührt, sofern nichts anderes
        vereinbart wurde.
      </p>

      <LegalH2>§ 5 Abonnements und Mitgliedschaften</LegalH2>
      <p>
        Für Abonnements und Mitgliedschaften gelten die bei Vertragsschluss angegebenen Laufzeiten,
        Preise, Leistungen und Kündigungsfristen.
      </p>
      <p>
        Die Einzelheiten des jeweiligen Abonnements werden dem Kunden vor Abschluss im
        Buchungssystem angezeigt.
      </p>
      <p>
        Eine automatische Verlängerung erfolgt nur, wenn sie wirksam vereinbart wurde und
        gesetzlich zulässig ist.
      </p>
      <p>
        Die Kündigung kann in Textform über die von der Anbieterin angegebenen Kommunikationswege
        oder, sofern vorgesehen, über das Buchungssystem Calunio erfolgen.
      </p>
      <p>
        Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein
        wichtiger Grund kann insbesondere vorliegen, wenn der Kunde wiederholt gegen diese AGB,
        Studioregeln oder Sicherheitsanweisungen verstößt.
      </p>
      <p>Bereits entstandene Zahlungsansprüche bleiben von einer Kündigung unberührt.</p>

      <LegalH2>§ 6 Stornierung und Nichterscheinen</LegalH2>
      <p>
        Eine regulär gebuchte Reformer-Pilates-Stunde kann bis spätestens 24 Stunden vor Beginn
        kostenfrei storniert werden, sofern bei der jeweiligen Buchung keine abweichende Frist
        angegeben ist.
      </p>
      <p>
        Für Specials, Events und vergleichbare Veranstaltungen können besondere
        Stornierungsbedingungen gelten. Diese werden dem Kunden vor der Buchung angezeigt.
      </p>
      <p>
        Bei einer fristgerechten Stornierung wird der eingesetzte Credit wieder gutgeschrieben
        oder die Buchung entsprechend im Kundenkonto berücksichtigt.
      </p>
      <p>
        Bei einer späteren Stornierung oder bei Nichterscheinen gilt die Buchung als Late
        Cancellation beziehungsweise No-Show. Der eingesetzte Credit verfällt in diesem Fall und
        wird nicht erstattet.
      </p>
      <p>
        Dies gilt auch bei kurzfristiger Verhinderung aus persönlichen Gründen, wegen einer
        Terminkollision oder aus sonstigen Gründen, die die Anbieterin nicht zu vertreten hat.
      </p>
      <p>
        Bei wiederholten kurzfristigen Stornierungen oder No-Shows kann die Anbieterin den Kunden
        nach vorheriger Information vorübergehend von weiteren Buchungen ausschließen.
      </p>
      <p>
        Die Anbieterin kann Kurse aus wichtigem Grund absagen, insbesondere bei Krankheit,
        höherer Gewalt, technischen Problemen oder zu geringer Teilnehmerzahl.
      </p>
      <p>
        Wird ein Kurs durch die Anbieterin abgesagt, wird der eingesetzte Credit grundsätzlich
        wieder gutgeschrieben. Weitergehende Ansprüche bestehen nur, soweit sie gesetzlich
        vorgeschrieben sind.
      </p>

      <LegalH2>§ 7 Gesundheit und Teilnahmevoraussetzungen</LegalH2>
      <p>Die Teilnahme an den Angeboten von The Reform Room erfolgt auf eigene Verantwortung des Kunden.</p>
      <p>
        Der Kunde ist verpflichtet, die Anbieterin oder die Trainerin vor Beginn über
        gesundheitliche Einschränkungen, Verletzungen, Beschwerden, Schwangerschaft, kürzlich
        erfolgte Operationen oder andere relevante Umstände zu informieren.
      </p>
      <p>Bei gesundheitlichen Unsicherheiten sollte der Kunde vor der Teilnahme ärztlichen Rat einholen.</p>
      <p>
        Der Kunde darf nur teilnehmen, wenn aus seiner Sicht keine gesundheitlichen Gründe gegen
        die Teilnahme sprechen.
      </p>
      <p>
        Die Anbieterin oder die Trainerin kann den Kunden von einzelnen Übungen oder vollständig
        von der Teilnahme ausschließen, wenn eine sichere Durchführung nicht gewährleistet werden
        kann.
      </p>
      <p>
        Den Anweisungen der Trainerin ist Folge zu leisten. Übungen, die Schmerzen, Unwohlsein
        oder Unsicherheit verursachen, sind sofort abzubrechen und der Trainerin mitzuteilen.
      </p>
      <p>
        Die Anbieterin übernimmt keine Verantwortung für Beschwerden oder Schäden, die darauf
        zurückzuführen sind, dass der Kunde gesundheitliche Einschränkungen nicht mitgeteilt oder
        Sicherheitsanweisungen nicht beachtet hat. Die gesetzliche Haftung bleibt unberührt.
      </p>

      <LegalH2>§ 8 Nutzung der Geräte und Studioverhalten</LegalH2>
      <p>
        Reformer dürfen nur nach Einweisung und entsprechend den Anweisungen der Trainerin genutzt
        werden.
      </p>
      <p>
        Einstellungen, Federn, Seile, Schlaufen, Griffe und sonstige Bestandteile der Geräte
        dürfen nur nach Anweisung verändert werden.
      </p>
      <p>Schäden oder Mängel an Geräten sind der Anbieterin oder der Trainerin unverzüglich mitzuteilen.</p>
      <p>
        Für Schäden, die durch vorsätzliche oder grob fahrlässige unsachgemäße Nutzung entstehen,
        kann der Kunde im Rahmen der gesetzlichen Vorschriften haftbar gemacht werden.
      </p>
      <p>
        Im Studio ist auf andere Teilnehmer, die Trainerin und die Einrichtung Rücksicht zu
        nehmen. Den Anweisungen der Anbieterin und der Trainerin ist Folge zu leisten.
      </p>

      <LegalH2>§ 9 Kommunikation</LegalH2>
      <p>
        Kündigungen, Beschwerden und sonstige rechtlich relevante Erklärungen sind über die von
        der Anbieterin vorgesehenen Kommunikationswege zu übermitteln.
      </p>
      <p>
        Soweit nicht anders angegeben, können solche Erklärungen per E-Mail an die offizielle
        E-Mail-Adresse von The Reform Room oder über eine entsprechende Funktion im
        Buchungssystem Calunio abgegeben werden.
      </p>
      <p>
        Nachrichten über private Social-Media-Accounts, Instagram, WhatsApp oder andere Messenger
        gelten nur dann als rechtswirksam, wenn die Anbieterin diesen Kommunikationsweg
        ausdrücklich hierfür vorgesehen hat.
      </p>

      <LegalH2>§ 10 Persönliche Buchungsberechtigungen</LegalH2>
      <p>
        Der Kunde ist dafür verantwortlich, vor der Buchung die passende Leistung, den passenden
        Kurs und das passende Buchungsmodell auszuwählen.
      </p>
      <p>
        Informationen zu Preisen, Credits, Laufzeiten, Gültigkeiten und Teilnahmebedingungen
        werden im Buchungssystem Calunio oder in der jeweiligen Angebotsbeschreibung angezeigt.
      </p>
      <p>
        Mit Abschluss der Buchung bestätigt der Kunde, die für die jeweilige Leistung geltenden
        Bedingungen geprüft und akzeptiert zu haben.
      </p>
      <p>
        Alle Buchungen, Credits und sonstigen Teilnahmeberechtigungen sind ausschließlich für den
        registrierten Kunden bestimmt und nicht übertragbar.
      </p>

      <LegalH2>§ 11 Foto- und Videoaufnahmen</LegalH2>
      <p>Bei Kursen, Events oder Veranstaltungen können Foto- und Videoaufnahmen entstehen.</p>
      <p>
        Eine Veröffentlichung von Aufnahmen, auf denen der Kunde erkennbar ist, erfolgt nur, soweit
        hierfür eine Einwilligung erforderlich ist und diese vorliegt.
      </p>
      <p>
        Der Kunde kann einer Aufnahme oder Veröffentlichung jederzeit widersprechen, sofern keine
        andere gesetzliche Grundlage besteht.
      </p>

      <LegalH2>§ 12 Datenschutz</LegalH2>
      <p>
        Die Anbieterin verarbeitet personenbezogene Daten unter Beachtung der geltenden
        Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO).
      </p>
      <p>
        Weitere Informationen zur Verarbeitung personenbezogener Daten enthält die{" "}
        <a href="/datenschutz" className="text-olive underline underline-offset-2">
          Datenschutzerklärung
        </a>{" "}
        von The Reform Room.
      </p>
      <p>
        Zur Durchführung von Buchungen und Verträgen kann das Buchungssystem Calunio oder können
        weitere Dienstleister eingesetzt werden. Die Verarbeitung erfolgt im Rahmen der
        gesetzlichen Vorgaben.
      </p>

      <LegalH2>§ 13 Haftung</LegalH2>
      <p>Die Anbieterin haftet unbeschränkt für Schäden, die vorsätzlich oder grob fahrlässig verursacht wurden.</p>
      <p>
        Die Anbieterin haftet außerdem unbeschränkt für Schäden aus der Verletzung des Lebens, des
        Körpers oder der Gesundheit sowie in allen Fällen zwingender gesetzlicher Haftung.
      </p>
      <p>
        Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten haftet die Anbieterin
        nur für den vorhersehbaren und vertragstypischen Schaden.
      </p>
      <p>
        Im Übrigen ist die Haftung für leicht fahrlässige Pflichtverletzungen ausgeschlossen,
        soweit dies gesetzlich zulässig ist.
      </p>
      <p>
        Die Haftungsbeschränkungen gelten auch zugunsten der gesetzlichen Vertreter, Mitarbeiter
        und Erfüllungsgehilfen der Anbieterin.
      </p>
      <p>
        Für mitgebrachte Gegenstände, Kleidung, Wertsachen und sonstige persönliche Gegenstände
        übernimmt die Anbieterin keine Haftung, soweit keine zwingende gesetzliche Haftung
        besteht.
      </p>

      <LegalH2>§ 14 Schlussbestimmung</LegalH2>
      <p>Es gilt das Recht der Bundesrepublik Deutschland.</p>
      <p>
        Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit dadurch keine zwingenden
        gesetzlichen Vorschriften des Staates eingeschränkt werden, in dem der Kunde seinen
        gewöhnlichen Aufenthalt hat.
      </p>
      <p>
        Änderungen und Ergänzungen des Vertrages bedürfen der Textform, soweit gesetzlich keine
        strengere Form vorgeschrieben ist.
      </p>
      <p>
        Sollte eine Bestimmung dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt
        die Wirksamkeit der übrigen Bestimmungen unberührt.
      </p>
      <p>An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt die gesetzliche Regelung.</p>
      <p>
        Die jeweils aktuelle Fassung dieser AGB wird dem Kunden über die Website von The Reform
        Room und/oder das Buchungssystem Calunio zur Verfügung gestellt.
      </p>

      <p className="pt-6">
        {studio.name}
        <br />
        {studio.owner}
        <br />
        {studio.street}
        <br />
        {studio.postalCode} {studio.city}
        <br />
        {studio.email}
      </p>
    </LegalPage>
  );
}
