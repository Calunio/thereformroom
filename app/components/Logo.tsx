/**
 * The Reform Room — Logo
 *
 * - layout="emblem"  → Lisas Original-Logo (SVG, generate:brand-logo)
 * - layout="stacked"   → Wortmarke: „The“ über „Reform Room“ (Cormorant, currentColor)
 */
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  layout?: "emblem" | "stacked" | "wordmark";
  priority?: boolean;
}

const EMBLEM_SRC = {
  dark: "/logo/the-reform-room-emblem-espresso.svg",
  light: "/logo/the-reform-room-emblem-cream.svg",
} as const;

export function Logo({
  className = "",
  variant = "dark",
  layout = "stacked",
  priority = false,
}: LogoProps) {
  const color = variant === "light" ? "text-porcelain" : "text-espresso";

  if (layout === "emblem") {
    return (
      <Image
        src={EMBLEM_SRC[variant]}
        alt="The Reform Room — Pilates Studio"
        width={900}
        height={936}
        priority={priority}
        unoptimized
        className={className}
      />
    );
  }

  // Gestapelte Wortmarke (Navigation)
  return (
    <span
      className={`inline-flex flex-col items-center text-center font-display leading-[0.92] tracking-tight ${color} ${className}`}
      aria-label="The Reform Room"
    >
      <span className="italic font-normal text-[0.82em] opacity-90">The</span>
      <span className="font-medium text-[1em] -mt-0.5">Reform Room</span>
    </span>
  );
}
