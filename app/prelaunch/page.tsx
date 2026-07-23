import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/app/content";
import { Logo } from "@/app/components/Logo";
import { NewsletterForm } from "@/app/components/NewsletterForm";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";

export const metadata: Metadata = {
  title: "Coming Soon | The Reform Room Lemgo",
  description:
    "The Reform Room eröffnet bald in Lemgo. Trag dich ein und erfahre als Erste, wann die ersten Classes buchbar sind.",
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

/**
 * Pre-Launch-Overlay — volle Viewport-Ansicht mit Warteliste.
 * Wird auf thereformroom.de per Middleware für alle Seiten ausgeliefert.
 */
export default function PrelaunchPage() {
  const { hero, comingSoon: cs, footer } = siteContent;

  return (
    <div className="relative min-h-[100svh] flex flex-col overflow-hidden bg-ink text-porcelain">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          quality={68}
          sizes="100vw"
          className="object-cover object-center animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70" />
        <div className="absolute inset-0 bg-ink/15" />
      </div>

      <header className="relative z-10 flex justify-center pt-10 px-6">
        <Logo variant="light" className="h-40 sm:h-52 w-auto" priority />
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-xl mx-auto w-full">
          <p className="eyebrow text-porcelain mb-6 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            {cs.badge} · {cs.line}
          </p>

          <h1>
            <span className="sr-only">The Reform Room — Reformer Pilates Lemgo</span>
            <span
              aria-hidden
              className="block font-display font-light leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl whitespace-pre-line"
            >
              {hero.claim}
            </span>
          </h1>

          <p className="mt-8 text-porcelain/85 text-base md:text-lg leading-relaxed font-light">
            {cs.body}
          </p>

          <div className="mt-10 max-w-md mx-auto">
            <NewsletterForm variant="dark" submitLabel={cs.submit} />
            <p className="mt-4 text-xs text-porcelain/55 font-light">{cs.trustHint}</p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 px-6 pb-8 text-center">
        <p className="text-xs text-porcelain/40 font-light mb-3">
          {siteContent.studio.street} · {siteContent.studio.postalCode}{" "}
          {siteContent.studio.city}
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-porcelain/45">
          <Link
            href="/impressum"
            className="underline underline-offset-2 hover:text-porcelain transition-colors"
          >
            {footer.impressum}
          </Link>
          <span className="text-porcelain/20" aria-hidden>
            |
          </span>
          <Link
            href="/datenschutz"
            className="underline underline-offset-2 hover:text-porcelain transition-colors"
          >
            {footer.datenschutz}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
