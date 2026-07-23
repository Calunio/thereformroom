import type { Metadata } from "next";
import { siteContent } from "@/app/content";
import { LegalPage, LegalH2, LegalH3 } from "@/app/components/LegalPage";

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
    <LegalPage title="Allgemeine Geschäftsbedingungen" updated="23. Juli 2026">
      <LegalH2>1. Geltungsbereich</LegalH2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen The Reform
        Room, Inhaberin {studio.owner}, {studio.street}, {studio.postalCode} {studio.city}
        (nachfolgend „Studio“, „wir“ oder „uns“) und Kundinnen sowie Kunden (nachfolgend „du“ oder
        „Teilnehmer:in“) über die Teilnahme an Reformer-Pilates-Classes sowie über den Erwerb von
        Einzeltickets, Credit-Paketen, Mitgliedschaften und Gutscheinen.
      </p>
      <p>
        Abweichende Bedingungen der Teilnehmer:innen werden nicht anerkannt, es sei denn, wir
        stimmen ihrer Geltung ausdrücklich schriftlich zu. Mit der Buchung bzw. dem Kauf erkennst
        du diese AGB an.
      </p>

      <LegalH2>2. Vertragsabschluss</LegalH2>
      <p>
        Die Darstellung von Classes, Preisen und Angeboten auf unserer Website stellt kein
        verbindliches Angebot dar, sondern eine Aufforderung zur Buchung bzw. Bestellung.
      </p>
      <p>
        Die Buchung und der Kauf erfolgen über unser Online-Buchungssystem (Calunio). Mit dem
        Abschluss des Buchungs- bzw. Kaufvorgangs gibst du ein verbindliches Angebot ab. Der
        Vertrag kommt zustande, wenn wir die Buchung bzw. den Kauf per E-Mail bestätigen oder die
        Leistung im Buchungssystem freischalten.
      </p>
      <p>
        Für die Buchung ist ein Nutzerkonto im Buchungssystem erforderlich. Du bist verpflichtet,
        wahrheitsgemäße Angaben zu machen und Zugangsdaten vertraulich zu behandeln.
      </p>

      <LegalH2>3. Buchung von Kursen</LegalH2>
      <p>
        Classes können online über den Kursplan gebucht werden, soweit freie Plätze verfügbar sind.
        Die Platzzahl ist begrenzt. Eine Buchung ist erst nach erfolgreicher Bestätigung gültig.
      </p>
      <p>
        Ohne Reformer-Erfahrung empfehlen wir den Einstieg über die Class „New to Reformer“. Wir
        behalten uns vor, Teilnehmer:innen ohne ausreichende Vorkenntnisse aus Sicherheitsgründen
        auf eine Einstiegs-Class zu verweisen.
      </p>
      <p>
        Die Teilnahme setzt voraus, dass die jeweilige Class vollständig bezahlt bzw. durch ein
        gültiges Ticket, Paket, eine Mitgliedschaft oder einen Gutschein abgedeckt ist.
      </p>

      <LegalH2>4. Warteliste</LegalH2>
      <LegalH3>Warteliste für ausgebuchte Classes</LegalH3>
      <p>
        Ist eine Class ausgebucht, kannst du dich – sofern im Buchungssystem angeboten – auf die
        Warteliste setzen lassen. Ein Platzanspruch entsteht dadurch nicht. Wird ein Platz frei,
        informieren wir dich bzw. das Buchungssystem dich nach den dort hinterlegten Regeln. Die
        Annahme eines frei gewordenen Platzes und die damit verbundenen Fristen richten sich nach
        den Angaben im Buchungssystem.
      </p>
      <LegalH3>Interessenliste / Newsletter</LegalH3>
      <p>
        Die Eintragung in unsere Newsletter- oder Interessenliste (z. B. vor Eröffnung oder für
        Class-Infos) begründet keinen Anspruch auf einen Kursplatz. Es handelt sich um eine
        unverbindliche Benachrichtigung. Näheres zur Datenverarbeitung findest du in unserer
        Datenschutzerklärung.
      </p>

      <LegalH2>5. Preise und Zahlungsbedingungen</LegalH2>
      <p>
        Es gelten die zum Zeitpunkt der Buchung bzw. des Kaufs im Buchungssystem ausgewiesenen
        Preise. Alle Preise verstehen sich in Euro und inklusive der gesetzlichen Mehrwertsteuer,
        sofern Umsatzsteuer anfällt und ausgewiesen wird.
      </p>
      <p>
        Die Zahlung erfolgt über die im Buchungssystem angebotenen Zahlungsarten. Der
        Rechnungsbetrag ist mit Vertragsschluss bzw. nach den dort angezeigten Zahlungsbedingungen
        fällig, sofern nichts anderes vereinbart ist.
      </p>
      <p>
        Bleibt eine Zahlung aus oder wird sie rückabgewickelt, können wir die Buchung stornieren
        und die Teilnahme verweigern.
      </p>

      <LegalH2>6. Einzeltickets, Pakete und Mitgliedschaften</LegalH2>
      <p>
        Einzeltickets berechtigen zur Teilnahme an einer Class gemäß den im Buchungssystem
        hinterlegten Bedingungen.
      </p>
      <p>
        Credit-Pakete und Mitgliedschaften berechtigen zur Buchung und Teilnahme im Rahmen des
        jeweils erworbenen Kontingents und der angegebenen Laufzeit bzw. Gültigkeit. Die konkrete
        Ausgestaltung (Anzahl der Credits, Laufzeit, Kündigung, Pausierung) ergibt sich aus dem
        jeweiligen Angebot im Buchungssystem.
      </p>
      <p>
        Nicht genutzte Credits oder Leistungen verfallen mit Ablauf der Gültigkeit, soweit gesetzlich
        zulässig und im Angebot nichts Abweichendes geregelt ist. Eine Auszahlung nicht genutzter
        Leistungen ist ausgeschlossen, es sei denn, zwingendes Recht schreibt etwas anderes vor.
      </p>

      <LegalH2>7. Stornierung und Umbuchung</LegalH2>
      <p>
        Gebuchte Classes können über das Buchungssystem storniert oder umgebucht werden, soweit
        dies dort technisch vorgesehen ist.
      </p>
      <p>
        Eine kostenfreie Stornierung oder Umbuchung ist bis spätestens 12 Stunden vor
        Class-Beginn möglich, sofern im Buchungssystem keine abweichende Frist ausgewiesen ist. In
        diesem Fall wird der Platz freigegeben und – je nach gebuchtem Produkt – das Ticket bzw.
        der Credit wieder gutgeschrieben oder die Buchung storniert.
      </p>
      <p>
        Erfolgt die Stornierung später als 12 Stunden vor Class-Beginn oder erscheinst du nicht zur
        Class (No-Show), bleibt der Anspruch auf die Gegenleistung bestehen. Das Ticket bzw. der
        Credit verfällt bzw. wird als verbraucht gewertet; eine Erstattung findet nicht statt, es
        sei denn, zwingendes Recht sieht etwas anderes vor oder wir entscheiden im Einzelfall
        anders.
      </p>
      <p>
        Absagen durch das Studio (z. B. Erkrankung der Trainerin, zu geringe Teilnehmerzahl,
        technische Gründe) führen zu einer Gutschrift des Tickets bzw. Credits oder – nach unserer
        Wahl – zu einem Alternativtermin. Weitergehende Ansprüche sind ausgeschlossen, soweit
        gesetzlich zulässig.
      </p>

      <LegalH2>8. Verspätetes Erscheinen</LegalH2>
      <p>
        Bitte erscheine rechtzeitig vor Class-Beginn, damit der Ablauf und die Sicherheit der
        Gruppe gewährleistet sind. Bei erheblicher Verspätung können wir dir aus
        Sicherheitsgründen die Teilnahme an der laufenden Class verweigern. In diesem Fall gilt die
        Regelung zum Nichtantritt entsprechend; ein Anspruch auf Nachholung oder Erstattung besteht
        nicht.
      </p>

      <LegalH2>9. Gesundheit und Eigenverantwortung</LegalH2>
      <p>
        Die Teilnahme an Reformer-Pilates-Classes erfolgt auf eigene Verantwortung. Du versicherst
        mit der Buchung, dass du gesundheitlich in der Lage bist, am Training teilzunehmen.
      </p>
      <p>
        Bei gesundheitlichen Einschränkungen, Verletzungen, Operationen, Schwangerschaft oder
        anderen relevanten Umständen bist du verpflichtet, vor der Teilnahme ärztlichen Rat
        einzuholen und uns vor Class-Beginn darüber zu informieren. Wir können die Teilnahme
        ablehnen oder anpassen, wenn dies aus Sicherheitsgründen erforderlich erscheint.
      </p>
      <p>
        Die Anleitung durch die Trainerin ersetzt keine medizinische Diagnose, Therapie oder
        individuelle ärztliche Betreuung.
      </p>

      <LegalH2>10. Haftung</LegalH2>
      <p>
        Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der
        Gesundheit, die auf einer fahrlässigen oder vorsätzlichen Pflichtverletzung beruhen, sowie
        für sonstige Schäden, die auf vorsätzlicher oder grob fahrlässiger Pflichtverletzung
        beruhen.
      </p>
      <p>
        Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Pflichten, deren
        Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf
        deren Einhaltung du regelmäßig vertrauen darfst) ist die Haftung auf den vorhersehbaren,
        vertragstypischen Schaden begrenzt.
      </p>
      <p>
        Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen. Die vorstehenden
        Haftungsbeschränkungen gelten auch zugunsten unserer Erfüllungsgehilfen.
      </p>
      <p>
        Für mitgebrachte Gegenstände und Wertgegenstände übernehmen wir keine Haftung, außer bei
        Vorsatz oder grober Fahrlässigkeit. Bitte verwahre persönliche Gegenstände sorgfältig.
      </p>

      <LegalH2>11. Gutscheine</LegalH2>
      <p>
        Gutscheine können – soweit angeboten – über das Buchungssystem erworben und für Classes,
        Pakete oder andere dort freigeschaltete Leistungen eingelöst werden. Der Gutscheinwert, die
        Einlösebedingungen und die Gültigkeitsdauer ergeben sich aus dem jeweiligen Angebot bzw.
        dem Gutschein.
      </p>
      <p>
        Eine Barauszahlung von Gutscheinen oder Restbeträgen ist ausgeschlossen. Verlorene oder
        gestohlene Gutscheine werden nicht ersetzt. Gesetzliche Rechte bleiben unberührt.
      </p>

      <LegalH2>12. Hausordnung</LegalH2>
      <p>
        Im Studio gelten die folgenden Grundsätze. Mit der Teilnahme verpflichtest du dich, diese
        zu beachten:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Bequeme Sportkleidung und rutschfeste Socken (Stopper-Socken) sind für Reformer-Classes
          erforderlich.
        </li>
        <li>Handtuch und etwas zu trinken sind sinnvoll und erwünscht.</li>
        <li>
          Bitte erscheine rechtzeitig, halte den Trainingsraum sauber und gehe respektvoll mit
          Geräten und anderen Teilnehmer:innen um.
        </li>
        <li>
          Das Studio ist ein Ort der Ruhe und Konzentration. Bitte stelle Handys auf lautlos und
          vermeide Störungen während der Class.
        </li>
        <li>
          Anweisungen der Trainerin zu Technik, Sicherheit und Gerätebedienung sind zu befolgen.
        </li>
        <li>
          Bei groben Verstößen gegen die Hausordnung oder bei Verhalten, das andere gefährdet,
          können wir dich von der Class oder vom Studio ausschließen. In diesem Fall besteht kein
          Anspruch auf Erstattung, soweit gesetzlich zulässig.
        </li>
      </ul>

      <LegalH2>13. Widerrufsrecht</LegalH2>
      <p>
        Für Verbraucher:innen gilt: Bei Verträgen über Dienstleistungen im Zusammenhang mit
        Freizeitbetätigungen, wenn der Vertrag für die Erbringung einen spezifischen Termin oder
        Zeitraum vorsieht (z. B. Buchung einer konkreten Class), besteht gemäß § 312g Abs. 2 Nr. 9
        BGB kein Widerrufsrecht.
      </p>
      <p>
        Beim Kauf von Gutscheinen, Paketen oder Mitgliedschaften online kann – soweit kein
        gesetzlicher Ausschluss greift – ein Widerrufsrecht von 14 Tagen ab Vertragsschluss
        bestehen. Zur Wahrung der Frist genügt die rechtzeitige Absendung des Widerrufs an{" "}
        {studio.email}. Wurde die Leistung auf deinen ausdrücklichen Wunsch vor Ablauf der
        Widerrufsfrist vollständig erbracht, erlischt das Widerrufsrecht unter den gesetzlichen
        Voraussetzungen.
      </p>
      <p>
        Wurde vor Ausübung des Widerrufsrechts bereits mit der Erbringung der Leistung begonnen
        (z. B. wurden aus einem Credit-Paket oder einer Mitgliedschaft bereits einzelne Classes in
        Anspruch genommen), schulden wir dir den bereits erhaltenen Betrag nur abzüglich eines
        Wertersatzes für die bis zum Widerruf bereits genutzten Leistungen. Der Wertersatz bemisst
        sich nach dem im Buchungssystem zum Zeitpunkt der jeweiligen Nutzung ausgewiesenen
        regulären Einzelticket-Preis (Drop-in-Preis) der in Anspruch genommenen Class. Der sich
        daraus ergebende Betrag wird von der Rückzahlung abgezogen. Dies gilt entsprechend, wenn
        du ausdrücklich verlangt hast, dass wir bereits vor Ablauf der Widerrufsfrist mit der
        Ausführung der Leistung beginnen.
      </p>

      <LegalH2>14. Datenschutz</LegalH2>
      <p>
        Informationen zur Verarbeitung personenbezogener Daten entnimmst du unserer{" "}
        <a href="/datenschutz" className="text-olive underline underline-offset-2">
          Datenschutzerklärung
        </a>
        .
      </p>

      <LegalH2>15. Schlussbestimmungen</LegalH2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Ist
        die Teilnehmer:in Verbraucherin bzw. Verbraucher, bleiben zwingende Schutzvorschriften des
        Staates, in dem sie bzw. er den gewöhnlichen Aufenthalt hat, unberührt.
      </p>
      <p>
        Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden,
        bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen
        Bestimmung gilt die gesetzlich zulässige Regelung, die dem wirtschaftlichen Zweck am
        nächsten kommt.
      </p>
      <p>
        Wir behalten uns vor, diese AGB mit Wirkung für die Zukunft zu ändern, soweit dies aus
        rechtlichen, technischen oder organisatorischen Gründen erforderlich ist. Für bereits
        geschlossene Verträge gelten die zum Zeitpunkt des Vertragsschlusses maßgeblichen AGB,
        sofern nichts anderes vereinbart wurde.
      </p>
      <p>
        Gerichtstand für Streitigkeiten mit Unternehmer:innen ist Lemgo, soweit gesetzlich
        zulässig. Für Verbraucher:innen gelten die gesetzlichen Gerichtsstände.
      </p>
    </LegalPage>
  );
}
