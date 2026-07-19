/**
 * Pre-Launch-Gate — Domain-basierte Steuerung (middleware-sicher, ohne next/headers).
 *
 * Öffentliche Domain (thereformroom.de / www) → nur Overlay.
 * Netlify-Preview (*.netlify.app) / localhost → volle Website.
 *
 * Deaktivieren zum Go-Live:
 *   NEXT_PUBLIC_PRELAUNCH_GATE=false
 */

/** Öffentliche Produktions-Hosts, die das Pre-Launch-Gate sehen. */
export const PUBLIC_PRODUCTION_HOSTS = new Set([
  "thereformroom.de",
  "www.thereformroom.de",
]);

export function normalizeHost(host: string | null | undefined): string {
  if (!host) return "";
  return host.split(",")[0].trim().split(":")[0].toLowerCase();
}

export function isPublicProductionHost(host: string | null | undefined): boolean {
  return PUBLIC_PRODUCTION_HOSTS.has(normalizeHost(host));
}

/**
 * Master-Switch für das Pre-Launch-Gate.
 * Default: aktiv, solange nicht explizit auf false gesetzt.
 */
export function isPreLaunchGateEnabled(): boolean {
  const flag = process.env.NEXT_PUBLIC_PRELAUNCH_GATE?.trim().toLowerCase();
  if (flag === "false" || flag === "0" || flag === "off") return false;
  return true;
}

/** true, wenn Request-Host das volle Overlay bekommen soll. */
export function shouldShowPreLaunchGate(host: string | null | undefined): boolean {
  return isPreLaunchGateEnabled() && isPublicProductionHost(host);
}
