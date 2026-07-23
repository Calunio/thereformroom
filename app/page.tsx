import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { siteContent } from "@/app/content";
import { isComingSoon } from "@/app/lib/launch";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { FAQSection } from "@/app/components/FAQSection";
import { ContactForm } from "@/app/components/ContactForm";
import { NewsletterForm } from "@/app/components/NewsletterForm";
import { InstagramIcon } from "@/app/components/Icons";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";

function LocalBusinessJsonLd() {
  const { studio } = siteContent;
  const data = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "@id": `${SITE_URL}/#localbusiness`,
    name: studio.name,
    description:
      "Boutique Reformer Pilates Studio in Lemgo – präzises, achtsames Training in kleinen Gruppen.",
    url: SITE_URL,
    email: studio.email,
    image: `${SITE_URL}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.street,
      addressLocality: studio.city,
      postalCode: studio.postalCode,
      addressCountry: "DE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 52.0277, longitude: 8.8997 },
    areaServed: [
      { "@type": "City", name: "Lemgo" },
      { "@type": "City", name: "Bad Salzuflen" },
      { "@type": "City", name: "Detmold" },
      { "@type": "AdministrativeArea", name: "Kreis Lippe" },
    ],
    priceRange: "€€",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default async function Home() {
  const comingSoon = await isComingSoon();
  const {
    intro,
    values,
    courses,
    howToBook,
    pricing,
    about,
    testimonials,
    faq,
    contact,
    newsletter,
  } = siteContent;

  return (
    <div className="min-h-screen bg-porcelain">
      <LocalBusinessJsonLd />
      <FaqJsonLd />
      <Navigation />
      <Hero comingSoon={comingSoon} />

      {/* ─── Courses ─── */}
      <section id="kurse" className="py-24 lg:py-32 bg-sand scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <ScrollReveal>
              <p className="eyebrow text-olive mb-5">{courses.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-light text-espresso text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
                {courses.heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-espresso/65 text-lg font-light">{courses.subheading}</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4">
            {courses.items.map((course, i) => (
              <ScrollReveal key={course.id} delay={0.1 + i * 0.08}>
                <article className="h-full flex flex-col bg-card border border-taupe/15 rounded-sm p-5 lg:p-6 hover:border-taupe/35 transition-colors">
                  <p className="eyebrow text-olive mb-3 text-[11px]">{course.forWho}</p>
                  <h3 className="font-display text-xl lg:text-2xl text-espresso mb-3 leading-tight">
                    {course.name}
                  </h3>
                  <p className="text-espresso/65 text-sm leading-relaxed font-light mb-6 flex-1">
                    {course.description}
                  </p>
                  <Link
                    href={siteContent.bookingUrl}
                    className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase text-espresso border-b border-espresso/30 pb-1 w-fit hover:border-espresso transition-colors"
                  >
                    {course.ctaBook}
                    <ArrowRight size={12} strokeWidth={1.75} />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mt-10 text-center text-sm text-espresso/55 font-light max-w-2xl mx-auto italic">
              {courses.reformerNote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── How to book ─── */}
      <section className="py-20 lg:py-28 bg-porcelain">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="eyebrow text-olive mb-5">{howToBook.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-light text-espresso text-4xl md:text-5xl leading-tight">
                {howToBook.heading}
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10">
            {howToBook.steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={0.1 + i * 0.08}>
                <div className="text-center md:text-left">
                  <span className="font-display text-5xl text-taupe/70">{step.step}</span>
                  <h3 className="font-display text-2xl text-espresso mt-3 mb-3">{step.title}</h3>
                  <p className="text-espresso/65 leading-relaxed font-light">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-14">
              <Link
                href={siteContent.bookingUrl}
                className="inline-block bg-espresso text-porcelain px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-walnut transition-all duration-300"
              >
                Zum Kursplan
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="preise" className="py-24 lg:py-32 bg-porcelain scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <ScrollReveal>
              <p className="eyebrow text-olive mb-5">{pricing.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-light text-espresso text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
                {pricing.heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-espresso/65 text-lg font-light">{pricing.subheading}</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricing.cards.map((card, i) => (
              <ScrollReveal key={card.title} delay={0.1 + i * 0.08}>
                <div className="h-full flex flex-col bg-card border border-taupe/15 rounded-sm p-8 text-center hover:border-taupe/35 transition-colors">
                  <p className="eyebrow text-olive mb-4">{card.badge}</p>
                  <h3 className="font-display text-3xl text-espresso mb-4">{card.title}</h3>
                  <p className="text-espresso/65 leading-relaxed font-light mb-6 flex-1">
                    {card.description}
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-olive">{card.priceHint}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.25}>
            <div className="text-center mt-12">
              <Link
                href={siteContent.bookingUrl}
                className="inline-block bg-espresso text-porcelain px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-walnut transition-all duration-300"
              >
                {pricing.ctaBook}
              </Link>
              <p className="mt-5 text-sm text-espresso/50 font-light">{pricing.note}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="pt-14 pb-20 lg:pt-16 lg:pb-28 bg-porcelain">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-display font-light text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5 whitespace-pre-line">
              {intro.heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-espresso/70 text-lg leading-relaxed font-light">{intro.body}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-20 lg:py-24 bg-sand">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-10">
            <ScrollReveal>
              <h2 className="font-display font-light text-espresso text-4xl md:text-5xl leading-tight">
                {values.heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-3 font-display font-light text-espresso/55 text-xl md:text-2xl leading-snug max-w-lg">
                {values.subheading}
              </p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.1 + i * 0.08}>
                <div className="h-full">
                  <span className="font-display text-3xl text-olive/60">0{i + 1}</span>
                  <h3 className="font-display text-2xl md:text-3xl text-espresso mt-3 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-espresso/65 leading-relaxed font-light">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Studio image break ─── */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[45vh] lg:min-h-[80vh]">
            <Image
              src="/images/studio.webp"
              alt="Der Trainingsraum von The Reform Room in Lemgo mit Reformer-Geräten"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-walnut text-porcelain flex items-center">
            <div className="px-8 py-16 lg:px-16 lg:py-24 max-w-xl">
              <ScrollReveal>
                <p className="eyebrow text-porcelain/60 mb-6">Der Raum</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display font-light text-4xl md:text-5xl leading-tight mb-6">
                  Ein Ort zum Ankommen.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-porcelain/75 text-lg leading-relaxed font-light mb-4">
                  Warmes Licht, natürliche Materialien und hochwertige Reformer – The Reform Room
                  ist bewusst reduziert gestaltet. Ein Raum, der einlädt, den Kopf frei zu machen
                  und ganz bei dir anzukommen.
                </p>
                <p className="text-porcelain/60 text-sm leading-relaxed font-light">
                  Mitten in Lemgo · Lagesche Str. 15a
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Lisa ─── */}
      <section id="ueber-mich" className="py-24 lg:py-32 bg-sand scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-almond">
                <Image
                  src="/images/about.webp"
                  alt={about.portraitAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal>
                <p className="eyebrow text-olive mb-5">{about.eyebrow}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display font-light text-espresso text-4xl md:text-5xl leading-tight mb-8">
                  {about.heading}
                </h2>
              </ScrollReveal>
              {about.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={0.15 + i * 0.05}>
                  <p className="text-espresso/70 leading-relaxed font-light mb-4">{p}</p>
                </ScrollReveal>
              ))}
              <ScrollReveal delay={0.35}>
                <p className="font-display text-2xl text-espresso mt-6">{about.signature}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials (nur wenn echte Stimmen vorliegen) ─── */}
      {testimonials.enabled && testimonials.items.length > 0 && (
        <section className="py-24 lg:py-32 bg-porcelain">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <ScrollReveal>
                <p className="eyebrow text-olive mb-5">{testimonials.eyebrow}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display font-light text-espresso text-4xl md:text-5xl leading-tight">
                  {testimonials.heading}
                </h2>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.items.map((t, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                  <figure className="h-full bg-card border border-taupe/15 rounded-sm p-8 flex flex-col">
                    <span className="font-display text-5xl text-olive/40 leading-none">&ldquo;</span>
                    <blockquote className="text-espresso/75 leading-relaxed font-light -mt-3 mb-6 flex-1">
                      {t.quote}
                    </blockquote>
                    <figcaption className="text-xs tracking-[0.15em] uppercase text-olive">
                      {t.name}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 lg:py-32 bg-sand scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <ScrollReveal>
              <p className="eyebrow text-olive mb-5">{faq.eyebrow}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-light text-espresso text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                {faq.heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-espresso/60 font-light">{faq.subtitle}</p>
            </ScrollReveal>
          </div>
          <FAQSection items={faq.items} />
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="kontakt" className="py-24 lg:py-32 bg-porcelain scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <ScrollReveal>
                <p className="eyebrow text-olive mb-5">{contact.eyebrow}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display font-light text-espresso text-4xl md:text-5xl leading-tight mb-6">
                  {contact.heading}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-espresso/65 leading-relaxed font-light mb-10 max-w-md">
                  {contact.subtitle}
                </p>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <MapPin size={20} strokeWidth={1.75} className="text-olive shrink-0 mt-1" />
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-espresso/50 mb-1">
                        {contact.studioLabel}
                      </p>
                      <p className="text-espresso/80 font-light">
                        {contact.addressLine1}
                        <br />
                        {contact.addressLine2}
                      </p>
                      <a
                        href={siteContent.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-olive underline underline-offset-2 hover:text-walnut transition-colors"
                      >
                        {contact.mapCta}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.25}>
                  <div className="flex items-start gap-4">
                    <Mail size={20} strokeWidth={1.75} className="text-olive shrink-0 mt-1" />
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-espresso/50 mb-1">
                        {contact.emailLabel}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-espresso/80 font-light hover:text-espresso transition-colors break-words"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
                {siteContent.instagramUrl && (
                  <ScrollReveal delay={0.3}>
                    <div className="flex items-start gap-4">
                      <InstagramIcon className="w-5 h-5 text-olive shrink-0 mt-1" />
                      <div>
                        <p className="text-xs tracking-[0.15em] uppercase text-espresso/50 mb-1">
                          {contact.instagramLabel}
                        </p>
                        <a
                          href={siteContent.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-espresso/80 font-light hover:text-espresso transition-colors"
                        >
                          {contact.instagramHandle}
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </div>

            <ScrollReveal delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Newsletter band ─── */}
      <section className="relative py-24 lg:py-32 bg-ink text-porcelain overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/reformer-detail.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12 text-center">
          <p className="eyebrow text-porcelain/60 mb-6">{newsletter.eyebrow}</p>
          <h2 className="font-display font-light text-4xl md:text-5xl leading-tight mb-5">
            {newsletter.heading}
          </h2>
          <p className="text-porcelain/70 font-light mb-10 max-w-lg mx-auto">
            {newsletter.subtitle}
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="dark" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
