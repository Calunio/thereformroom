import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/app/content";
import { isComingSoon } from "@/app/lib/launch";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { CalunioWidget } from "@/app/components/CalunioWidget";
import { NewsletterForm } from "@/app/components/NewsletterForm";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";

export const metadata: Metadata = {
  title: "Kursplan & Buchung | The Reform Room Lemgo",
  description:
    "Buche deine Reformer-Pilates-Class bei The Reform Room in Lemgo. Kursplan, Pakete und Mitgliedschaften – einfach online.",
  alternates: { canonical: `${SITE_URL}/buchen` },
};

export default function BuchenPage() {
  const comingSoon = isComingSoon();
  const { booking } = siteContent;

  return (
    <div className="min-h-screen bg-porcelain flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-olive mb-5">{booking.eyebrow}</p>
            <h1 className="font-display font-light text-espresso text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
              {booking.heading}
            </h1>
            <p className="text-espresso/65 text-lg font-light">{booking.subtitle}</p>
          </div>

          {comingSoon ? (
            <div className="max-w-xl mx-auto bg-card border border-taupe/20 rounded-sm p-10 lg:p-14 text-center">
              <p className="eyebrow text-olive mb-5">{siteContent.comingSoon.badge}</p>
              <h2 className="font-display text-3xl md:text-4xl text-espresso mb-4">
                {booking.widgetComingSoonTitle}
              </h2>
              <p className="text-espresso/65 font-light leading-relaxed mb-8">
                {booking.widgetComingSoonBody}
              </p>
              <NewsletterForm />
              <p className="mt-8 text-sm text-espresso/55 font-light">
                Schon Mitglied?{" "}
                <a
                  href={siteContent.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-olive underline underline-offset-2 hover:text-walnut transition-colors"
                >
                  {booking.loginLabel}
                </a>
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex justify-end">
                <a
                  href={siteContent.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-olive underline underline-offset-2 hover:text-walnut transition-colors"
                >
                  {booking.loginLabel}
                </a>
              </div>
              <div className="bg-card border border-taupe/15 rounded-sm p-4 md:p-6">
                <CalunioWidget type="schedule" view="week" />
              </div>
            </div>
          )}

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
