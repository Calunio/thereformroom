/**
 * Zentraler Cookie-Consent-State (DSGVO).
 *
 * Kategorien:
 *  - essential:  immer an (kein Toggle)
 *  - analytics:  GA4
 *  - marketing:  Meta/TikTok Pixel etc. (vorbereitet, noch nicht aktiv)
 *
 * Speicherformat in localStorage:
 *  trr_consent = JSON.stringify({ analytics: true, marketing: false, ts: 1712345678901 })
 *
 * "ts" = Zeitpunkt der letzten Entscheidung — für das 24-h-Re-Ask nach "Alle ablehnen".
 */

const STORAGE_KEY = "trr_consent";
const REASK_MS = 24 * 60 * 60 * 1000; // 24 Stunden

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
}

interface StoredConsent extends ConsentPreferences {
  ts: number;
}

export const DEFAULT_PREFS: ConsentPreferences = {
  analytics: false,
  marketing: false,
};

export function readConsent(): { prefs: ConsentPreferences; shouldAsk: boolean } {
  if (typeof window === "undefined") return { prefs: DEFAULT_PREFS, shouldAsk: true };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { prefs: DEFAULT_PREFS, shouldAsk: true };

    const stored: StoredConsent = JSON.parse(raw);
    const prefs: ConsentPreferences = {
      analytics: !!stored.analytics,
      marketing: !!stored.marketing,
    };

    const allDenied = !prefs.analytics && !prefs.marketing;
    const expired = Date.now() - stored.ts > REASK_MS;

    return { prefs, shouldAsk: allDenied && expired };
  } catch {
    return { prefs: DEFAULT_PREFS, shouldAsk: true };
  }
}

export function writeConsent(prefs: ConsentPreferences) {
  try {
    const stored: StoredConsent = { ...prefs, ts: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Storage blockiert (ETP, Private Mode, Quota) — ignorieren.
  }
  pushToGtag(prefs);
}

export function pushToGtag(prefs: ConsentPreferences) {
  window.gtag?.("consent", "update", {
    analytics_storage: prefs.analytics ? "granted" : "denied",
    ad_storage: prefs.marketing ? "granted" : "denied",
    ad_user_data: prefs.marketing ? "granted" : "denied",
    ad_personalization: prefs.marketing ? "granted" : "denied",
  });
}

export function gtagDefaultConsent(): string {
  return `
    try {
      var raw = localStorage.getItem('${STORAGE_KEY}');
      var p = raw ? JSON.parse(raw) : {};
      var a = p.analytics === true ? 'granted' : 'denied';
      var m = p.marketing === true ? 'granted' : 'denied';
    } catch(e) { var a = 'denied', m = 'denied'; }

    gtag('consent', 'default', {
      analytics_storage: a,
      ad_storage: m,
      ad_user_data: m,
      ad_personalization: m,
      wait_for_update: 500
    });
  `;
}
