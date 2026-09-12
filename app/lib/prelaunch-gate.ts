/**
 * Pre-Launch-Gate — Domain + Uhrzeit (middleware-sicher, ohne next/headers).
 *
 * Öffentliche Domain (thereformroom.de / www) → Overlay, bis Launch.
 * Netlify-Preview (*.netlify.app) / localhost → volle Website.
 *
 * Ab DEFAULT_LAUNCH_ISO (Europe/Berlin) geht das Gate von selbst aus.
 * Sofort aus: NEXT_PUBLIC_PRELAUNCH_GATE=false
 * Anderes Datum: NEXT_PUBLIC_LAUNCH_DATE (ISO mit Offset, z. B. 2026-09-12T20:00:30+02:00)
 */

/** Öffentliche Produktions-Hosts, die das Pre-Launch-Gate sehen. */
export const PUBLIC_PRODUCTION_HOSTS = new Set([
  "thereformroom.de",
  "www.thereformroom.de",
]);

/** Samstag, 12.09.2026, 20:00:30 Uhr Europe/Berlin (MESZ). */
export const DEFAULT_LAUNCH_ISO = "2026-09-12T20:00:30+02:00";

export function normalizeHost(host: string | null | undefined): string {
  if (!host) return "";
  return host.split(",")[0].trim().split(":")[0].toLowerCase();
}

export function isPublicProductionHost(host: string | null | undefined): boolean {
  return PUBLIC_PRODUCTION_HOSTS.has(normalizeHost(host));
}

export function getLaunchDate(): Date {
  const raw = process.env.NEXT_PUBLIC_LAUNCH_DATE?.trim() || DEFAULT_LAUNCH_ISO;
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return new Date(DEFAULT_LAUNCH_ISO);
  return parsed;
}

export function hasLaunched(now: Date = new Date()): boolean {
  return now.getTime() >= getLaunchDate().getTime();
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
  return isPreLaunchGateEnabled() && isPublicProductionHost(host) && !hasLaunched();
}
