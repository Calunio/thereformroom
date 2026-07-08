import Image from "next/image";
import { siteContent } from "@/app/content";
import { NewsletterForm } from "./NewsletterForm";

export function Hero({ comingSoon }: { comingSoon: boolean }) {
  const { hero, comingSoon: cs } = siteContent;

  return (
    <header>
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85" />
          <div className="absolute inset-0 bg-ink/25" />
        </div>

        <div className="relative z-10 text-center text-porcelain px-6 max-w-3xl mx-auto pt-28 pb-20">
          <p className="eyebrow text-porcelain mb-6 animate-fade-in-up drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            {comingSoon ? `${cs.badge} · ${cs.line}` : hero.eyebrow}
          </p>

          <h1 className="animate-fade-in-up animation-delay-200">
            <span className="sr-only">The Reform Room — Reformer Pilates Lemgo</span>
            <span
              aria-hidden
              className="block font-display font-light leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] whitespace-pre-line"
            >
              {hero.claim}
            </span>
          </h1>

          <p className="mt-8 text-porcelain/85 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light animate-fade-in-up animation-delay-400">
            {comingSoon ? cs.body : hero.subline}
          </p>

          <div className="mt-10 animate-fade-in-up animation-delay-600">
            {comingSoon ? (
              <div className="max-w-md mx-auto">
                <NewsletterForm variant="dark" />
                <p className="mt-4 text-xs tracking-[0.15em] uppercase text-porcelain/50">
                  {cs.cta}
                </p>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={siteContent.bookingUrl}
                  className="inline-block bg-porcelain text-espresso px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-sand transition-all duration-300"
                >
                  {hero.ctaBook}
                </a>
                <a
                  href="#kurse"
                  className="inline-block border border-porcelain/60 text-porcelain px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-porcelain hover:text-espresso transition-all duration-300"
                >
                  {hero.ctaSecondary}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <div className="w-px h-12 bg-gradient-to-b from-porcelain/0 via-porcelain/50 to-porcelain/0" />
        </div>
      </section>
    </header>
  );
}
