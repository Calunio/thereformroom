/**
 * Coming-Soon-Inhalte (Hero / Buchung) + Launch-Datum.
 *
 * Pre-Launch-Gate (Domain-Overlay) liegt in `prelaunch-gate.ts` und wird
 * von der Middleware genutzt.
 *
 * Coming-Soon-Inhalte:
 *  - Preview / localhost → immer AUS (volle Website zum Reviewen)
 *  - Öffentliche Domain  → gesteuert über NEXT_PUBLIC_LAUNCH_DATE
 */

import { headers } from "next/headers";
import { isPublicProductionHost } from "@/app/lib/prelaunch-gate";

const RAW_LAUNCH = process.env.NEXT_PUBLIC_LAUNCH_DATE?.trim();

export function getLaunchDate(): Date | null {
  if (!RAW_LAUNCH) return null;
  const d = new Date(RAW_LAUNCH);
  return Number.isNaN(d.getTime()) ? null : d;
}

function comingSoonByLaunchDate(now: Date): boolean {
  const launch = getLaunchDate();
  if (!launch) return true;
  return now.getTime() < launch.getTime();
}

/**
 * Coming-Soon-Inhalte (Hero-Newsletter, Buchungs-Placeholder).
 * Auf Netlify-Preview / localhost immer false → volle Website reviewbar.
 */
export async function isComingSoon(now: Date = new Date()): Promise<boolean> {
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host") || "";
  if (!isPublicProductionHost(host)) return false;
  return comingSoonByLaunchDate(now);
}

// Re-exports für bestehenden Import-Pfad
export {
  isPreLaunchGateEnabled,
  isPublicProductionHost,
  shouldShowPreLaunchGate,
  PUBLIC_PRODUCTION_HOSTS,
} from "@/app/lib/prelaunch-gate";
