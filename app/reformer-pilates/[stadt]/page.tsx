import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Car, Train } from "lucide-react";
import { getCityBySlug, getAllCitySlugs, type CityConfig } from "@/app/lib/cities";
import { siteContent } from "@/app/content";
import { isComingSoon } from "@/app/lib/launch";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { FAQSection } from "@/app/components/FAQSection";
import { NewsletterForm } from "@/app/components/NewsletterForm";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";
const { studio } = siteContent;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string }>;
}): Promise<Metadata> {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);
  if (!city) return { title: "The Reform Room — Reformer Pilates Lemgo" };

  const title =
    city.driveMinutesDisplay === "0"
      ? `Reformer Pilates ${city.name} | The Reform Room`
      : `Reformer Pilates ${city.name} | Nur ${city.driveMinutesDisplay} Min. nach Lemgo`;

  return {
    title,
    description: city.metaDescription,
    openGraph: {
      title,
      description: city.metaDescription,
      type: "website",
      url: `${SITE_URL}/reformer-pilates/${city.slug}`,
      locale: "de_DE",
      siteName: "The Reform Room",
      images: ["/og-image.jpg"],
    },
    alternates: { canonical: `${SITE_URL}/reformer-pilates/${city.slug}` },
  };
}

export function generateStaticParams() {
  return getAllCitySlugs().map((stadt) => ({ stadt }));
}

function LocalBusinessJsonLd({ city }: { city: CityConfig }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "@id": `${SITE_URL}/reformer-pilates/${city.slug}#localbusiness`,
    name: studio.name,
    description: `Reformer Pilates Studio in Lemgo – gut erreichbar aus ${city.name}. Kleine Gruppen, persönliche Betreuung.`,
    url: `${SITE_URL}/reformer-pilates/${city.slug}`,
    email: studio.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.street,
      addressLocality: studio.city,
      postalCode: studio.postalCode,
      addressCountry: "DE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 52.0277, longitude: 8.8997 },
    areaServed: { "@type": "City", name: city.name },
    priceRange: "€€",
    image: `${SITE_URL}/og-image.jpg`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function BreadcrumbJsonLd({ city }: { city: CityConfig }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Reformer Pilates ${city.name}`,
        item: `${SITE_URL}/reformer-pilates/${city.slug}`,
      },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function FaqJsonLd({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default async function ReformerPilatesStadtPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);
  if (!city) notFound();

  const comingSoon = await isComingSoon();
  const isStudioCity = city.driveMinutesDisplay === "0";

  const anreiseFaq = {
    question: `Wie erreiche ich The Reform Room aus ${city.name}?`,
    answer: `${city.driveInfo} Mit den öffentlichen Verkehrsmitteln bzw. dem Rad: ${city.transitInfo}`,
  };
  const faqItems = [anreiseFaq, ...siteContent.faq.items];

  return (
    <div className="min-h-screen bg-porcelain">
      <LocalBusinessJsonLd city={city} />
      <BreadcrumbJsonLd city={city} />
      <FaqJsonLd faqs={faqItems} />
      <Navigation />

      {/* Hero */}
      <header>
        <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-ink pt-28 pb-16">
          <div className="absolute inset-0">
            <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/90" />
          </div>
          <div className="relative z-10 text-center text-porcelain px-6 max-w-3xl mx-auto">
            <p className="eyebrow text-porcelain/75 mb-6">
              Reformer Pilates · {city.name}
            </p>
            <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
              {isStudioCity
                ? `Reformer Pilates in ${city.name}`
                : `Reformer Pilates für ${city.name}`}
            </h1>
            <p className="text-porcelain/85 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light mb-8">
              {isStudioCity
                ? `The Reform Room – dein Boutique-Studio für Reformer Pilates mitten in ${city.name}. Kleine Gruppen, hochwertige Reformer, persönliche Betreuung.`
                : `The Reform Room in Lemgo – aus ${city.name} in ${city.driveDuration} erreichbar. Reformer Pilates in kleinen Gruppen, ganz ohne Hektik.`}
            </p>
            <a
              href={siteContent.bookingUrl}
              className="inline-block bg-porcelain text-espresso px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-sand transition-all duration-300"
            >
              {comingSoon ? "Auf die Liste" : "Platz sichern"}
            </a>
          </div>
        </section>
      </header>

      {/* Intro / SEO text */}
      <section className="py-20 lg:py-28 bg-porcelain">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <p className="eyebrow text-olive mb-5">Für dich aus {city.name}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-light text-espresso text-3xl md:text-4xl leading-tight mb-8">
              Reformer Pilates, das sich lohnt.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-espresso/70 text-lg leading-relaxed font-light">{city.seoText}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Erreichbarkeit */}
      {(
        <section id="erreichbarkeit" className="py-20 lg:py-28 bg-sand scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <ScrollReveal>
              <p className="eyebrow text-olive mb-5">
                {isStudioCity ? "Anreise & Adresse" : `Anreise aus ${city.name}`}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-light text-espresso text-3xl md:text-4xl leading-tight mb-10">
                {isStudioCity
                  ? "So findest du The Reform Room in Lemgo"
                  : "So erreichst du The Reform Room in Lemgo"}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <article className="flex gap-5">
                <div className="shrink-0 bg-porcelain p-3.5 h-fit rounded-sm">
                  <Car size={22} strokeWidth={1.75} className="text-espresso" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-espresso mb-2">Mit dem Auto</h3>
                  <p className="text-espresso/70 text-sm md:text-base leading-relaxed font-light">
                    {city.driveInfo}
                  </p>
                </div>
              </article>
              <article className="flex gap-5">
                <div className="shrink-0 bg-porcelain p-3.5 h-fit rounded-sm">
                  <Train size={22} strokeWidth={1.75} className="text-espresso" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-espresso mb-2">Mit ÖPNV & Rad</h3>
                  <p className="text-espresso/70 text-sm md:text-base leading-relaxed font-light">
                    {city.transitInfo}
                  </p>
                </div>
              </article>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {city.districtRoutes.map((route, index) => (
                <ScrollReveal key={route.area} delay={0.1 + index * 0.05}>
                  <article className="h-full rounded-sm border border-taupe/25 bg-porcelain p-5">
                    <p className="text-espresso font-medium mb-2">{route.area}</p>
                    <p className="text-espresso/55 text-sm leading-relaxed mb-4 font-light">
                      {route.route}
                    </p>
                    <p className="text-xs tracking-[0.15em] uppercase text-olive">{route.duration}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <aside className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-porcelain border border-taupe/25 rounded-sm">
              <div className="flex items-start gap-4">
                <MapPin size={22} strokeWidth={1.75} className="shrink-0 text-olive" />
                <div>
                  <p className="text-sm font-medium text-espresso mb-1">Adresse</p>
                  <p className="text-espresso/70 text-sm font-light">
                    {studio.name} · {studio.street}, {studio.postalCode} {studio.city}
                  </p>
                </div>
              </div>
              <a
                href={siteContent.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center shrink-0 px-5 py-3 text-sm text-espresso bg-card border border-taupe/30 rounded-sm hover:border-taupe/50 transition-colors"
              >
                Route in Google Maps öffnen
              </a>
            </aside>
          </div>
        </section>
      )}

      {/* Classes teaser */}
      <section className="py-20 lg:py-28 bg-porcelain">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <ScrollReveal>
              <p className="eyebrow text-olive mb-5">Classes</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-light text-espresso text-3xl md:text-4xl leading-tight">
                Dein Training im Reform Room
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {siteContent.courses.items.map((course) => (
              <article
                key={course.id}
                className="h-full flex flex-col bg-card border border-taupe/15 rounded-sm p-5 lg:p-6"
              >
                <p className="eyebrow text-olive mb-3 text-[11px]">{course.forWho}</p>
                <h3 className="font-display text-xl text-espresso mb-3 leading-tight">
                  {course.name}
                </h3>
                <p className="text-espresso/65 text-sm leading-relaxed font-light">
                  {course.description}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/#preise"
              className="inline-block border border-espresso/70 text-espresso px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-espresso hover:text-porcelain transition-all duration-300"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28 bg-sand scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <ScrollReveal>
              <p className="eyebrow text-olive mb-5">FAQ</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-light text-espresso text-3xl md:text-4xl leading-tight">
                Häufige Fragen – auch aus {city.name}
              </h2>
            </ScrollReveal>
          </div>
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-20 bg-ink text-porcelain text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display font-light text-3xl md:text-4xl mb-4">
            {comingSoon ? "Sei als Erste dabei." : "Bereit für deine erste Class?"}
          </h2>
          <p className="text-porcelain/70 font-light mb-8">
            {comingSoon
              ? `Trag dich ein und erfahre, wann The Reform Room für ${city.name} und ganz Lippe öffnet.`
              : "Sichere dir deinen Platz im Reform Room und starte deine Praxis."}
          </p>
          {comingSoon ? (
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="dark" />
            </div>
          ) : (
            <a
              href={siteContent.bookingUrl}
              className="inline-block bg-porcelain text-espresso px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-sand transition-all duration-300"
            >
              Platz sichern
            </a>
          )}
          <p className="mt-10 text-porcelain/50 text-sm">
            <Link href="/" className="underline underline-offset-2 hover:text-porcelain transition-colors">
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
