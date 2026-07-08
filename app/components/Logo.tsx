/**
 * The Reform Room — Wortmarke als reine Typo-Lockup (kein Bild).
 *
 * Eigenständige, editorial-serifige Signatur: "The" wird ganz normal (kein
 * getracktes Mini-Label) inline und kursiv gesetzt, "Reform Room" in der
 * Marken-Serife Cormorant Garamond. Themebar über `currentColor` (dark/light).
 * Standalone-Logodateien (SVG/PNG, transparent) liegen zusätzlich unter
 * /public/logo und werden über scripts/generate-logo.mjs erzeugt.
 */

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  /** "wordmark" = einzeilige Lockup (Nav). "stacked" = zweizeilig (Footer). */
  layout?: "wordmark" | "stacked";
}

export function Logo({
  className = "",
  variant = "dark",
  layout = "wordmark",
}: LogoProps) {
  const color = variant === "light" ? "text-porcelain" : "text-espresso";

  if (layout === "stacked") {
    return (
      <span
        className={`inline-flex flex-col items-center font-display leading-[0.98] ${color} ${className}`}
        style={{ fontSize: "1.35rem" }}
        aria-label="The Reform Room — Pilates Studio"
      >
        <span style={{ fontWeight: 500, letterSpacing: "0.01em" }}>
          <span
            className="italic"
            style={{ fontWeight: 400, fontSize: "0.8em", opacity: 0.85, marginRight: "0.14em" }}
          >
            The
          </span>
          Reform
        </span>
        <span style={{ fontWeight: 500, letterSpacing: "0.01em" }}>Room</span>
        <span
          className="font-sans uppercase"
          style={{
            marginTop: "0.7em",
            fontSize: "0.26em",
            letterSpacing: "0.42em",
            paddingLeft: "0.42em",
            opacity: 0.7,
          }}
        >
          Pilates Studio
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-baseline font-display whitespace-nowrap leading-none ${color} ${className}`}
      style={{ fontSize: "1.5rem" }}
      aria-label="The Reform Room"
    >
      <span
        className="italic"
        style={{ fontWeight: 400, fontSize: "0.8em", opacity: 0.85, marginRight: "0.2em" }}
      >
        The
      </span>
      <span style={{ fontWeight: 500, letterSpacing: "0.015em" }}>Reform Room</span>
    </span>
  );
}
