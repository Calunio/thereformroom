/**
 * Coming-Soon-Inhalte (Hero / Buchung) + Launch-Datum.
 *
 * Pre-Launch-Gate liegt in `prelaunch-gate.ts` (Middleware).
 * Dieselbe Uhrzeit steuert Hero-Newsletter und Buchungs-Placeholder.
 *
 * Preview / localhost → immer volle Website.
 * Öffentliche Domain → bis Launch Coming-Soon, danach live.
 */

import { headers } from "next/headers";
import { hasLaunched, isPublicProductionHost } from "@/app/lib/prelaunch-gate";

export {
  getLaunchDate,
  hasLaunched,
  isPreLaunchGateEnabled,
  isPublicProductionHost,
  shouldShowPreLaunchGate,
  PUBLIC_PRODUCTION_HOSTS,
  DEFAULT_LAUNCH_ISO,
} from "@/app/lib/prelaunch-gate";

/**
 * Coming-Soon-Inhalte (Hero-Newsletter, Buchungs-Placeholder).
 * Auf Netlify-Preview / localhost immer false → volle Website reviewbar.
 */
export async function isComingSoon(now: Date = new Date()): Promise<boolean> {
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host") || "";
  if (!isPublicProductionHost(host)) return false;
  return !hasLaunched(now);
}
