/**
 * Coming-Soon-Steuerung.
 *
 * Solange das aktuelle Datum vor NEXT_PUBLIC_LAUNCH_DATE liegt, gilt das Studio
 * als "noch nicht eröffnet" → Coming-Soon-Banner sichtbar. Ist das Launch-Datum
 * erreicht/überschritten (oder wurde keins gesetzt und wir sind live), schaltet
 * sich das Banner automatisch ab.
 *
 * Verhalten:
 *  - NEXT_PUBLIC_LAUNCH_DATE gesetzt & in der Zukunft  → Coming Soon AN
 *  - NEXT_PUBLIC_LAUNCH_DATE gesetzt & erreicht/vorbei → Coming Soon AUS
 *  - NEXT_PUBLIC_LAUNCH_DATE leer                      → Coming Soon AN
 *    (bis das Datum gepflegt wird — bewusst konservativ vor dem Launch)
 */

const RAW_LAUNCH = process.env.NEXT_PUBLIC_LAUNCH_DATE?.trim();

export function getLaunchDate(): Date | null {
  if (!RAW_LAUNCH) return null;
  const d = new Date(RAW_LAUNCH);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** true, solange das Studio als „coming soon" gilt. */
export function isComingSoon(now: Date = new Date()): boolean {
  const launch = getLaunchDate();
  if (!launch) return true; // kein Datum gepflegt → konservativ Coming Soon
  return now.getTime() < launch.getTime();
}
