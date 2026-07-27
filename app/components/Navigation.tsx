"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/app/content";
import { Logo } from "./Logo";
import { InstagramIcon } from "./Icons";

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isCityLanding = pathname?.startsWith("/reformer-pilates/");
  const overHero = isHomePage || isCityLanding;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    document.body.style.overflow = "";
  }, [isMenuOpen]);

  const showSolidNav = !overHero || isScrolled;
  const navBgClass = showSolidNav
    ? "bg-porcelain/95 backdrop-blur-md border-b border-espresso/10 shadow-sm"
    : "bg-transparent";
  const linkClass = showSolidNav
    ? "text-espresso/70 hover:text-espresso"
    : "text-porcelain/85 hover:text-porcelain";
  // Eigenständige Note: gefüllter Buchen-Button statt Outline-Rahmen.
  const ctaClass = showSolidNav
    ? "bg-espresso text-porcelain hover:bg-walnut"
    : "bg-porcelain text-espresso hover:bg-sand";
  const dividerClass = showSolidNav ? "bg-espresso/20" : "bg-porcelain/40";

  const href = (link: { hash?: string; href?: string }) => {
    if (link.href) return link.href;
    const hash = link.hash ?? "";
    return overHero ? `#${hash}` : `/#${hash}`;
  };

  const navLinks =
    isCityLanding && siteContent.nav.linksLanding
      ? siteContent.nav.linksLanding
      : siteContent.nav.links;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isMenuOpen ? "z-[10000]" : "z-50"
      } ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="relative z-10 flex items-center gap-4">
            <Link href="/" aria-label={siteContent.nav.logoAria}>
              <Logo
                layout="stacked"
                className="text-[1.25rem] sm:text-[1.4rem] transition-opacity duration-500"
                variant={showSolidNav ? "dark" : "light"}
                priority
              />
            </Link>
            {siteContent.instagramUrl && (
              <a
                href={siteContent.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`opacity-80 hover:opacity-100 transition-opacity ${
                  showSolidNav ? "text-espresso" : "text-porcelain"
                }`}
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href ?? link.hash}
                href={href(link)}
                className={`text-sm tracking-wide font-light transition-colors duration-300 ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-6">
              <a
                href={siteContent.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs tracking-[0.16em] uppercase font-light transition-colors duration-300 ${linkClass}`}
              >
                {siteContent.nav.login}
              </a>
              <span className={`h-4 w-px ${dividerClass}`} aria-hidden />
              <Link
                href={siteContent.bookingUrl}
                className={`px-6 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300 ${ctaClass}`}
              >
                {siteContent.nav.ctaBook}
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden relative z-10 flex items-center justify-center w-10 h-10 transition-colors duration-300 ${
              showSolidNav || isMenuOpen ? "text-espresso" : "text-porcelain"
            }`}
            aria-label={isMenuOpen ? siteContent.nav.menuClose : siteContent.nav.menuOpen}
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} strokeWidth={1.75} aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen min-h-[100dvh] bg-porcelain z-[10000] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="fixed top-0 right-0 z-[10002] flex items-center justify-center w-14 h-20 text-espresso hover:text-walnut transition-colors duration-200 mr-6"
          aria-label={siteContent.nav.menuClose}
        >
          <X size={26} strokeWidth={1.75} className="shrink-0" />
        </button>

        <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6 pt-20 pb-24">
          {navLinks.map((link) => (
            <Link
              key={link.href ?? link.hash}
              href={href(link)}
              className="font-display text-3xl text-espresso tracking-wide hover:text-olive transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteContent.bookingUrl}
            className="mt-4 bg-espresso text-porcelain px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-walnut transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteContent.nav.ctaBookLong}
          </Link>
          <a
            href={siteContent.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 text-xs tracking-[0.16em] uppercase text-espresso/60 hover:text-olive transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteContent.nav.login}
          </a>
        </div>
      </div>
    </nav>
  );
}
