import type { Metadata } from "next";
import { siteContent } from "@/app/content";
import { LegalPage, LegalH2 } from "@/app/components/LegalPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";

export const metadata: Metadata = {
  title: "Impressum | The Reform Room",
  description: "Impressum von The Reform Room, Reformer Pilates Studio in Lemgo.",
  alternates: { canonical: `${SITE_URL}/impressum` },
  robots: { index: true, follow: true },
};

const { studio } = siteContent;

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <LegalH2>Angaben gemäß § 5 DDG</LegalH2>
      <p>
        {studio.name}
        <br />
        {studio.owner}
        <br />
        {studio.street}
        <br />
        {studio.postalCode} {studio.city}
      </p>

      <LegalH2>Kontakt</LegalH2>
      <p>E-Mail: {studio.email}</p>

      <LegalH2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</LegalH2>
      <p>
        {studio.owner}
        <br />
        {studio.street}, {studio.postalCode} {studio.city}
      </p>

      <LegalH2>EU-Streitschlichtung</LegalH2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-olive underline underline-offset-2"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse findest du oben im Impressum.
      </p>

      <LegalH2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</LegalH2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
