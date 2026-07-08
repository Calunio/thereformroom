import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/app/lib/cities";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";

/**
 * App-Router-Sitemap → https://thereformroom.de/sitemap.xml (in robots.ts referenziert).
 *
 * - Startseite: höchste Priorität, weekly.
 * - Buchung: hoch.
 * - Orts-Landingpages (Lippe): SEO, monthly.
 * - Rechtsseiten: niedrig, yearly.
 * - Ausgeschlossen: /newsletter/bestaetigt (noindex), /api/*.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const main: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/buchen`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];

  const legal: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/agb`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const cities: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${SITE_URL}/reformer-pilates/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...main, ...legal, ...cities];
}
