import Link from "next/link";
import { siteContent } from "@/app/content";
import { getLippeFooterCities } from "@/app/lib/cities";
import { Logo } from "./Logo";
import { CookieSettingsButton } from "./CookieConsent";
import { InstagramIcon } from "./Icons";

const { footer: c, studio } = siteContent;
const lippeCities = getLippeFooterCities();

export function Footer() {
  return (
    <footer className="bg-ink text-porcelain py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label={c.logoAria} className="inline-block">
              <Logo className="h-20 w-auto mb-6" variant="light" />
            </Link>
            <p className="text-sm text-porcelain/50 leading-relaxed whitespace-pre-line font-light">
              {c.tagline}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-[0.18em] uppercase text-porcelain/70">
              {c.studioTitle}
            </p>
            <address className="not-italic space-y-1 text-sm text-porcelain/50 font-light">
              <p>{studio.name}</p>
              <p>{studio.street}</p>
              <p>
                {studio.postalCode} {studio.city}
              </p>
            </address>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-[0.18em] uppercase text-porcelain/70">
              {c.contactTitle}
            </p>
            <div className="space-y-2 text-sm text-porcelain/50 font-light">
              <a
                href={`mailto:${studio.email}`}
                className="block hover:text-porcelain transition-colors break-words"
              >
                {studio.email}
              </a>
              {siteContent.instagramUrl && (
                <a
                  href={siteContent.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-porcelain transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs tracking-[0.18em] uppercase text-porcelain/70">
              {c.exploreTitle}
            </p>
            <nav className="flex flex-col gap-y-1.5 text-sm text-porcelain/50 font-light">
              {c.nav.map((link) => (
                <Link
                  key={link.hash}
                  href={`/#${link.hash}`}
                  className="hover:text-porcelain transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/buchen" className="hover:text-porcelain transition-colors w-fit">
                Buchung
              </Link>
            </nav>
          </div>

          {lippeCities.length > 0 && (
            <div className="col-span-2 md:col-span-1">
              <p className="mb-4 text-xs tracking-[0.18em] uppercase text-porcelain/70">
                {c.lippeTitle}
              </p>
              <nav
                aria-label={c.lippeTitle}
                className="flex flex-col gap-y-1.5 text-sm text-porcelain/50 font-light"
              >
                {lippeCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/reformer-pilates/${city.slug}`}
                    className="hover:text-porcelain transition-colors underline-offset-2 hover:underline w-fit"
                  >
                    Pilates {city.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-porcelain/10 text-sm text-porcelain/30 text-center space-y-2">
          <p>
            © {new Date().getFullYear()} {c.copyright}
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link
              href="/impressum"
              className="text-porcelain/50 hover:text-porcelain transition-colors underline underline-offset-2"
            >
              {c.impressum}
            </Link>
            <span className="text-porcelain/20">|</span>
            <Link
              href="/datenschutz"
              className="text-porcelain/50 hover:text-porcelain transition-colors underline underline-offset-2"
            >
              {c.datenschutz}
            </Link>
            <span className="text-porcelain/20">|</span>
            <Link
              href="/agb"
              className="text-porcelain/50 hover:text-porcelain transition-colors underline underline-offset-2"
            >
              {c.agb}
            </Link>
            <span className="text-porcelain/20">|</span>
            <CookieSettingsButton />
          </p>
        </div>
      </div>
    </footer>
  );
}
