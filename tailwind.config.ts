import type { Config } from "tailwindcss";

/**
 * THE REFORM ROOM — Brand Color Palette
 *
 * Abgeleitet aus dem Logo (Cream #F9F5ED, Espresso #3B3128) und der warmen
 * Studio-Fotografie. Eine einzige Farbwelt: Ivory → Linen → Sand → Cocoa.
 * Ruhig, hochwertig, feminin, Boutique.
 *
 * Kern-Palette:
 *   Porcelain  #F9F5ED   Warm Ivory / Soft Cream (Basis)
 *   Sand       #EDE4D5   Linen / Soft Beige (Sektionen)
 *   Almond     #E2D2BC   Weiches Warm-Beige
 *   Clay       #CDB89A   Warmes Neutral
 *   Taupe      #B39476   Light Taupe / Linien
 *   Olive      #7A6B4C   Warmer Cocoa-Khaki-Akzent (Labels)
 *   Sage       #A6977C   Helleres Soft Taupe
 *   Walnut     #7A614C   Cocoa Brown (Button-Hover)
 *   Espresso   #3B3128   Logo-Braun (Text, Buttons) — Wortmarke / Marken-Assets
 *   Ink        #32281F   Tiefes Warm Espresso (Dark-UI, Footer)
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
        porcelain: "#F9F5ED",
        sand: "#EDE4D5",
        almond: "#E2D2BC",
        clay: "#CDB89A",
        taupe: "#B39476",
        olive: "#7A6B4C",
        sage: "#A6977C",
        walnut: "#7A614C",
        espresso: "#3B3128",
        ink: "#32281F",

        // Semantic mapping
        background: "#F9F5ED",
        foreground: "#3B3128",
        card: "#F5EFE5",
        "card-foreground": "#3B3128",
        primary: "#7A6B4C",
        "primary-foreground": "#F9F5ED",
        secondary: "#EDE4D5",
        "secondary-foreground": "#3B3128",
        muted: "#EDE4D5",
        "muted-foreground": "#7A6B4C",
        accent: "#B39476",
        "accent-foreground": "#F9F5ED",
        border: "rgba(59, 49, 40, 0.12)",
        ring: "#7A6B4C",
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
