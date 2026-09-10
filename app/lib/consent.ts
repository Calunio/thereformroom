/**
 * Cookie-Hinweis (DSGVO / TDDDG).
 *
 * Derzeit nur technisch notwendige Speicherung. Analyse- und Marketing-Cookies
 * sind nicht aktiv; die Felder bleiben vorbereitet, falls später GA4 o. ä.
 * ergänzt wird.
 *
 * Speicherformat in localStorage:
 *  trr_consent = JSON.stringify({ analytics: false, marketing: false, ts: … })
 */

const STORAGE_KEY = "trr_consent";

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
    return {
      prefs: {
        analytics: !!stored.analytics,
        marketing: !!stored.marketing,
      },
      shouldAsk: false,
    };
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
