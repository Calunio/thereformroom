import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/app/content";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { CalunioPricing } from "@/app/components/CalunioPricing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";

export const metadata: Metadata = {
  title: "Preise & Pakete | The Reform Room Lemgo",
  description:
    "Mitgliedschaften, Class Packs und Special Offers von The Reform Room in Lemgo – aktuelle Preise direkt aus dem Buchungssystem.",
  alternates: { canonical: `${SITE_URL}/preise` },
};

export default function PreisePage() {
  const { pricing } = siteContent;

  return (
    <div className="min-h-screen bg-porcelain flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-olive mb-5">{pricing.eyebrow}</p>
            <h1 className="font-display font-light text-espresso text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              {pricing.heading}
            </h1>
            <p className="text-espresso/65 text-lg font-light">{pricing.subheading}</p>
          </div>

          <CalunioPricing />

          <p className="text-center mt-8 text-sm text-espresso/50 font-light">{pricing.note}</p>

          <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={siteContent.bookingUrl}
              className="inline-block bg-espresso text-porcelain px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-walnut transition-all duration-300"
            >
              {pricing.ctaBook}
            </Link>
            <a
              href={siteContent.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-olive underline underline-offset-2 hover:text-walnut transition-colors"
            >
              {siteContent.booking.loginLabel}
            </a>
          </div>

          <p className="text-center mt-12">
            <Link
              href="/"
              className="text-sm text-espresso/60 underline underline-offset-2 hover:text-espresso transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
