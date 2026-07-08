import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { siteContent } from "./content";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import { CookieConsent } from "./components/CookieConsent";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thereformroom.de";
const SITE_NAME = "The Reform Room";

const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Reform Room – Reformer Pilates Studio in Lemgo",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Reform Room | Reformer Pilates Studio in Lemgo",
  description:
    "Boutique Reformer Pilates Studio in Lemgo. Präzises, achtsames Training in kleinen Gruppen – für Kraft, Haltung und Ruhe. Jetzt Platz sichern.",
  keywords: [
    "Reformer Pilates",
    "Pilates Lemgo",
    "Pilates Studio Lemgo",
    "Reformer Pilates Lemgo",
    "The Reform Room",
    "Pilates Lippe",
    "Boutique Pilates",
    "Pilates Kurse Lemgo",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: SITE_URL },
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "The Reform Room | Reformer Pilates Studio in Lemgo",
    description:
      "Boutique Reformer Pilates Studio in Lemgo. Präzises, achtsames Training in kleinen Gruppen.",
    type: "website",
    locale: "de_DE",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Reform Room | Reformer Pilates Studio in Lemgo",
    description:
      "Boutique Reformer Pilates Studio in Lemgo. Präzises, achtsames Training in kleinen Gruppen.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* Site-weites Organization-Schema; die LocalBusiness-Schemas der Seiten
 * referenzieren dieses als parentOrganization/provider. */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "The Reform Room",
  alternateName: "The Reform Room – Reformer Pilates Studio Lemgo",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/the-reform-room-stacked-espresso.png`,
  image: `${SITE_URL}${OG_IMAGE.url}`,
  email: siteContent.studio.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteContent.studio.street,
    addressLocality: siteContent.studio.city,
    postalCode: siteContent.studio.postalCode,
    addressCountry: "DE",
  },
  sameAs: [siteContent.instagramUrl].filter(Boolean),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
