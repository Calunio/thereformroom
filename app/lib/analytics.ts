import { readConsent } from "@/app/lib/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (!readConsent().prefs.analytics) return;
  window.gtag?.("event", eventName, params);
}

export function trackFBEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (!readConsent().prefs.marketing) return;
  window.fbq?.("track", eventName, params);
}
