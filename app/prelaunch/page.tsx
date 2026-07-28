import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/app/content";
import { Logo } from "@/app/components/Logo";
import { NewsletterForm } from "@/app/components/NewsletterForm";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";

export const metadata: Metadata = {
  title: "Coming Soon | The Reform Room Lemgo",
  description:
    "The Reform Room eröffnet bald in Lemgo. Melde dich für den Newsletter an und erfahre als Erste, wann die Kursbuchung startet.",
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

/**
 * Pre-Launch-Overlay — volle Viewport-Ansicht mit Warteliste.
 * Wird auf thereformroom.de per Middleware für alle Seiten ausgeliefert.
 */
export default function PrelaunchPage() {
  const { hero, comingSoon: cs, footer, studio } = siteContent;

  return (
    <div className="relative min-h-[100svh] flex flex-col overflow-hidden bg-porcelain text-espresso prelaunch-canvas">
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12 lg:py-16">
        <div className="text-center max-w-xl mx-auto w-full">
          <Logo
            variant="dark"
            layout="stacked"
            className="text-[2.75rem] sm:text-[3.5rem] md:text-[4rem] mb-8 sm:mb-10"
            priority
          />

          <p className="eyebrow text-olive mb-6">
            {cs.badge} · {cs.line}
          </p>

          <h1>
            <span className="sr-only">The Reform Room — Reformer Pilates Lemgo</span>
            <span
              aria-hidden
              className="block font-display font-light leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl text-espresso whitespace-pre-line"
            >
              {hero.claim}
            </span>
          </h1>

          <div className="mt-8 space-y-4 text-espresso/80 text-base md:text-lg leading-relaxed font-light text-center max-w-lg mx-auto">
            {cs.bodyParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 max-w-md mx-auto">
            <NewsletterForm variant="light" submitLabel={cs.submit} />
            <p className="mt-4 text-xs text-espresso/50 font-light">{cs.trustHint}</p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 px-6 pb-8 text-center">
        <p className="text-xs text-espresso/40 font-light mb-3">
          {studio.postalCode} {studio.city}
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-espresso/45">
          <Link
            href="/impressum"
            className="underline underline-offset-2 hover:text-espresso transition-colors"
          >
            {footer.impressum}
          </Link>
          <span className="text-espresso/20" aria-hidden>
            |
          </span>
          <Link
            href="/datenschutz"
            className="underline underline-offset-2 hover:text-espresso transition-colors"
          >
            {footer.datenschutz}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
