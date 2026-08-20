import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/app/content";
import { Logo } from "@/app/components/Logo";
import { OpeningRsvpForm } from "@/app/components/OpeningRsvpForm";

export const metadata: Metadata = {
  title: "Gästeliste | Grand Opening | The Reform Room",
  description:
    "Trag dich auf die Gästeliste für das Grand Opening von The Reform Room am 19. September 2026 in Lemgo ein.",
  robots: { index: false, follow: false },
};

function isValidEmail(value: string | undefined): value is string {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default async function OpeningPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const params = await searchParams;
  const initialEmail = isValidEmail(params.email) ? params.email.trim().toLowerCase() : "";
  const { footer, studio } = siteContent;

  return (
    <div className="relative min-h-[100svh] flex flex-col overflow-hidden bg-porcelain text-espresso prelaunch-canvas">
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12 lg:py-16">
        <div className="text-center max-w-lg mx-auto w-full">
          <Logo
            variant="dark"
            layout="stacked"
            className="text-[2.25rem] sm:text-[2.75rem] mb-8"
            priority
          />

          <p className="eyebrow text-olive mb-5">Grand Opening · 19.09.2026</p>

          <h1 className="font-display font-light text-4xl sm:text-5xl text-espresso mb-3">
            Trage dich auf die Gästeliste ein
          </h1>
          <p className="text-espresso/70 font-light leading-relaxed mb-2">
            14–17 Uhr · Lagesche Str. 15a, 3. Stock · Lemgo
          </p>
          <p className="text-espresso/65 font-light leading-relaxed mb-10 max-w-md mx-auto">
            Vorname, Nachname und E-Mail – und schon erwarte ich dich an diesem großen Tag.
          </p>

          <OpeningRsvpForm initialEmail={initialEmail} />
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
