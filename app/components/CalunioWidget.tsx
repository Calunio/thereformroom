"use client";

import { useEffect } from "react";
import { siteContent } from "@/app/content";

/**
 * Bindet das Calunio-Buchungs-Widget ein (embed.js) und rendert einen
 * Widget-Container. Das eigentliche Rendering übernimmt Calunio anhand der
 * data-Attribute.
 *
 * Widget-Typen (siehe Calunio-Doku): "schedule" | "packages" | "memberships" | "pricing".
 * Der Tenant-Slug steckt in siteContent.calunioScriptSrc.
 */

const SCRIPT_ATTR = "data-calunio-loader";
const HTTP_ORIGIN = "http://calunio.com";
const HTTPS_ORIGIN = "https://calunio.com";

type PatchedWindow = Window & { __trrCalunioHttpsPatch?: boolean };

function ensureHttpsPatch() {
  if (typeof window === "undefined") return;
  const w = window as PatchedWindow;
  if (w.__trrCalunioHttpsPatch) return;

  const originalOpen = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function open(
    this: XMLHttpRequest,
    method: string,
    url: string | URL,
    async?: boolean,
    username?: string | null,
    password?: string | null,
  ) {
    const value = typeof url === "string" ? url : url.toString();
    const secure = value.startsWith(HTTP_ORIGIN) ? value.replace(HTTP_ORIGIN, HTTPS_ORIGIN) : value;
    return originalOpen.call(this, method, secure, async ?? true, username ?? undefined, password ?? undefined);
  } as XMLHttpRequest["open"];

  w.__trrCalunioHttpsPatch = true;
}

function injectScript() {
  if (typeof document === "undefined") return;
  ensureHttpsPatch();
  const existing = document.querySelector<HTMLScriptElement>(`script[${SCRIPT_ATTR}]`);
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.src = siteContent.calunioScriptSrc;
  script.async = true;
  script.defer = true;
  script.setAttribute(SCRIPT_ATTR, "1");
  document.body.appendChild(script);
}

interface CalunioWidgetProps {
  type?: "schedule" | "packages" | "memberships" | "pricing";
  view?: "week" | "day";
}

export function CalunioWidget({ type = "schedule", view = "week" }: CalunioWidgetProps) {
  useEffect(() => {
    let cancelled = false;
    let attempts = 0;
    let timeoutId: number | null = null;

    const tick = () => {
      timeoutId = null;
      if (cancelled) return;
      const widget = document.querySelector<HTMLElement>("[data-calunio-widget]");
      if (widget && !widget.querySelector(".cw-root")) injectScript();
      attempts += 1;
      if (attempts >= 6) return;
      timeoutId = window.setTimeout(tick, 800);
    };

    timeoutId = window.setTimeout(tick, 0);
    return () => {
      cancelled = true;
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      data-calunio-widget={type}
      {...(type === "schedule" ? { "data-calunio-view": view } : {})}
      className="min-h-[320px]"
    />
  );
}
