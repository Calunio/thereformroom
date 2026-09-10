"use client";

import { useEffect } from "react";
import { siteContent } from "@/app/content";

const HTTP_ORIGIN = "http://calunio.com";
const HTTPS_ORIGIN = "https://calunio.com";

type PatchedWindow = Window & { __trrCalunioHttpsPatch?: boolean };

/**
 * embed.js ist ein IIFE ohne init() und ohne MutationObserver.
 * Es scannt [data-calunio-widget] einmal beim Laden. Bei App-Router-
 * Navigation muss das alte Script entfernt und neu angehängt werden.
 */
export function ensureCalunioHttpsPatch() {
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
    const secure = value.startsWith(HTTP_ORIGIN)
      ? value.replace(HTTP_ORIGIN, HTTPS_ORIGIN)
      : value;
    return originalOpen.call(
      this,
      method,
      secure,
      async ?? true,
      username ?? undefined,
      password ?? undefined,
    );
  } as XMLHttpRequest["open"];

  w.__trrCalunioHttpsPatch = true;
}

export function injectCalunioEmbed() {
  if (typeof document === "undefined") return;
  ensureCalunioHttpsPatch();
  document.querySelectorAll('script[src*="embed.js"]').forEach((el) => el.remove());
  const script = document.createElement("script");
  script.src = siteContent.calunioScriptSrc;
  script.defer = true;
  document.body.appendChild(script);
}

/** Injiziert embed.js, nachdem die Widget-Container im DOM sind. */
export function useCalunioEmbed() {
  useEffect(() => {
    let cancelled = false;
    const frame = window.requestAnimationFrame(() => {
      if (cancelled) return;
      if (!document.querySelector("[data-calunio-widget]")) return;
      injectCalunioEmbed();
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, []);
}
