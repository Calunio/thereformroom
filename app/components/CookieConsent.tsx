"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { readConsent, writeConsent, DEFAULT_PREFS } from "@/app/lib/consent";

const REOPEN_EVENT = "trr:open-cookie-banner";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const { shouldAsk } = readConsent();
      if (shouldAsk) setVisible(true);
    };
    window.setTimeout(syncConsent, 0);

    const handleReopen = () => setVisible(true);
    window.addEventListener(REOPEN_EVENT, handleReopen);
    return () => window.removeEventListener(REOPEN_EVENT, handleReopen);
  }, []);

  const acknowledge = useCallback(() => {
    writeConsent(DEFAULT_PREFS);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-xl rounded-2xl bg-espresso/95 backdrop-blur-md shadow-2xl ring-1 ring-white/10 px-6 py-5 text-porcelain">
        <p className="text-sm leading-relaxed mb-5 font-light">
          Diese Website verwendet nur technisch notwendige Cookies, damit sie funktioniert.
          Analyse- oder Marketing-Cookies setzen wir derzeit nicht ein.{" "}
          <Link
            href="/datenschutz"
            className="underline underline-offset-2 hover:text-sand transition-colors"
          >
            Mehr erfahren
          </Link>
        </p>

        <button
          onClick={acknowledge}
          className="w-full rounded-full bg-olive px-5 py-2.5 text-sm font-medium text-porcelain hover:bg-walnut transition-colors cursor-pointer"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
      className="text-porcelain/50 hover:text-porcelain transition-colors underline underline-offset-2 cursor-pointer"
    >
      Cookie-Einstellungen
    </button>
  );
}
