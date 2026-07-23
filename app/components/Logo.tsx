/**
 * The Reform Room — Marken-Emblem.
 *
 * Rendert Lisas Original-Logo als hintergrundfreies, skalierbares SVG (via
 * scripts/generate-brand-logo.mjs aus dem Original vektorisiert). Zwei
 * Farbvarianten:
 *   - "dark"  → Espresso (#4B4233) für helle Flächen (Nav solid).
 *   - "light" → Creme    (#F9F5ED) für dunkle Flächen (Footer, Prelaunch, Hero).
 *
 * Die Größe wird ausschließlich über `className` (z. B. h-12 w-auto) gesteuert.
 * `layout` bleibt aus API-Kompatibilität erhalten, beeinflusst das Emblem aber
 * nicht (das Motiv ist immer die runde Signatur).
 */
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  /** Nur noch für API-Kompatibilität; das Emblem ist immer die runde Signatur. */
  layout?: "wordmark" | "stacked";
  /** Für above-the-fold-Platzierungen (Nav, Prelaunch-Header). */
  priority?: boolean;
}

const SRC = {
  dark: "/logo/the-reform-room-emblem-espresso.svg",
  light: "/logo/the-reform-room-emblem-cream.svg",
} as const;

export function Logo({
  className = "",
  variant = "dark",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={SRC[variant]}
      alt="The Reform Room — Pilates Studio"
      width={900}
      height={936}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}
