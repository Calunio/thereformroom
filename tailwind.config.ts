import type { Config } from "tailwindcss";

/**
 * THE REFORM ROOM — Brand Color Palette
 *
 * Abgeleitet aus dem Logo (warmes Sand-Beige, dunkles Espresso-Braun) und der
 * Studio-Stimmung (Olivgrün, Walnussholz, Bouclé, warmes Licht). Ruhig,
 * hochwertig, feminin, Boutique — bewusst weicher & wärmer als ein klassisches
 * Fitness-Template.
 *
 * Kern-Palette:
 *   Porcelain  #F7F2EA   Heller Cream-Hintergrund (Basis)
 *   Sand       #E7DDCD   Warmes Beige aus dem Logo (Sektionen, Karten)
 *   Almond     #D8C9B4   Weiches Sand-Mittel
 *   Clay       #C2AE95   Warmes Neutral
 *   Taupe      #A88E72   Erdiges Neutral / Linien
 *   Olive      #83835F   Ruhiger Grün-Akzent (Labels, Highlights)
 *   Sage       #9A9A7B   Helleres Oliv (Hover, dezente Flächen)
 *   Walnut     #6E5A47   Mittleres Holz-Braun
 *   Espresso   #3B3128   Dunkles Braun (Logo, Primärtext)
 *   Ink        #262019   Tiefes Braun-Schwarz (Dark-UI, Footer)
 *
 * Schriften:
 *   Cormorant Garamond → Überschriften / Display (elegant, high-contrast)
 *   Jost               → Fließtext, Labels, Navigation (klare geometrische Grotesk)
 */

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core Brand Palette
        porcelain: "#F7F2EA",
        sand: "#E7DDCD",
        almond: "#D8C9B4",
        clay: "#C2AE95",
        taupe: "#A88E72",
        olive: "#6B6B47",
        sage: "#9A9A7B",
        walnut: "#6E5A47",
        espresso: "#3B3128",
        ink: "#262019",

        // Semantic mapping
        background: "#F7F2EA",
        foreground: "#3B3128",
        card: "#EFE7DA",
        "card-foreground": "#3B3128",
        primary: "#6B6B47",
        "primary-foreground": "#F7F2EA",
        secondary: "#E7DDCD",
        "secondary-foreground": "#3B3128",
        muted: "#E7DDCD",
        "muted-foreground": "#6B6B47",
        accent: "#A88E72",
        "accent-foreground": "#F7F2EA",
        border: "rgba(59, 49, 40, 0.12)",
        ring: "#6B6B47",
      },

      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Jost", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
