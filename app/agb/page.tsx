import type { Metadata } from "next";
import { LegalPage, LegalH2, Placeholder } from "@/app/components/LegalPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";

export const metadata: Metadata = {
  title: "AGB | The Reform Room",
  description: "Allgemeine Geschäftsbedingungen von The Reform Room, Reformer Pilates Studio in Lemgo.",
  alternates: { canonical: `${SITE_URL}/agb` },
};

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <p className="text-sm text-espresso/50 italic">
        Hinweis: Diese AGB sind ein Platzhalter-Entwurf. Die finalen Bedingungen (u. a. zu Buchung,
        Zahlung, Stornierung und Mitgliedschaften) werden mit dem Buchungssystem abgestimmt und vor
        dem Launch von der Inhaberin freigegeben.
      </p>

      <LegalH2>1. Geltungsbereich</LegalH2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Kurse, Classes, Pakete und
        Mitgliedschaften von The Reform Room. Die Buchung erfolgt über das eingebundene
        Buchungssystem.
      </p>

      <LegalH2>2. Buchung & Zahlung</LegalH2>
      <p>
        <Placeholder>Ablauf zu Buchung, Zahlungsarten und Fälligkeit ergänzen</Placeholder>
      </p>

      <LegalH2>3. Stornierung & Umbuchung</LegalH2>
      <p>
        <Placeholder>Stornofristen und Umbuchungsregeln ergänzen (z. B. bis X Stunden vor Kursbeginn)</Placeholder>
      </p>

      <LegalH2>4. Mitgliedschaften & Pakete</LegalH2>
      <p>
        <Placeholder>Laufzeiten, Gültigkeit von Credits/Paketen, Kündigungsfristen ergänzen</Placeholder>
      </p>

      <LegalH2>5. Gutscheine</LegalH2>
      <p>
        <Placeholder>Gültigkeit und Einlösung von Gutscheinen ergänzen</Placeholder>
      </p>

      <LegalH2>6. Teilnahme & Gesundheit</LegalH2>
      <p>
        Die Teilnahme erfolgt auf eigene Verantwortung. Bei gesundheitlichen Einschränkungen,
        Schwangerschaft oder Verletzungen halte bitte vor der Teilnahme Rücksprache mit deiner Ärztin
        oder deinem Arzt und informiere uns entsprechend.
      </p>

      <LegalH2>7. Widerrufsrecht</LegalH2>
      <p>
        <Placeholder>Widerrufsbelehrung für Verbraucher ergänzen</Placeholder>
      </p>
    </LegalPage>
  );
}
