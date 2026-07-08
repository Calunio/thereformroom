"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  readConsent,
  writeConsent,
  DEFAULT_PREFS,
  type ConsentPreferences,
} from "@/app/lib/consent";

const REOPEN_EVENT = "trr:open-cookie-banner";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPreferences>(DEFAULT_PREFS);

  useEffect(() => {
    const syncConsent = () => {
      const { prefs: stored, shouldAsk } = readConsent();
      setPrefs(stored);
      if (shouldAsk) setVisible(true);
    };
    window.setTimeout(syncConsent, 0);

    const handleReopen = () => {
      const { prefs: current } = readConsent();
      setPrefs(current);
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(REOPEN_EVENT, handleReopen);
    return () => window.removeEventListener(REOPEN_EVENT, handleReopen);
  }, []);

  const save = useCallback((next: ConsentPreferences) => {
    writeConsent(next);
    setPrefs(next);
    setVisible(false);
    setShowDetails(false);
  }, []);

  const acceptAll = useCallback(() => save({ analytics: true, marketing: true }), [save]);
  const denyAll = useCallback(() => save({ analytics: false, marketing: false }), [save]);
  const saveSelection = useCallback(() => save(prefs), [save, prefs]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-xl rounded-2xl bg-espresso/95 backdrop-blur-md shadow-2xl ring-1 ring-white/10 px-6 py-5 text-porcelain">
        <p className="text-sm leading-relaxed mb-5 font-light">
          Wir nutzen Cookies, um unsere Website zu verbessern und dir relevante Inhalte zu
          zeigen. Du kannst alle akzeptieren oder einzeln auswählen.{" "}
          <Link
            href="/datenschutz"
            className="underline underline-offset-2 hover:text-sand transition-colors"
          >
            Mehr erfahren
          </Link>
        </p>

        {showDetails && (
          <div className="mb-5 space-y-3">
            <ToggleRow label="Essentiell" locked description="Immer aktiv — für die Grundfunktionen der Website." />
            <ToggleRow
              label="Analyse"
              description="Google Analytics — hilft uns zu verstehen, wie die Website genutzt wird."
              checked={prefs.analytics}
              onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
            />
            <ToggleRow
              label="Marketing"
              description="Pixel u. a. — für Werbeanzeigen und Reichweitenmessung."
              checked={prefs.marketing}
              onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <button
            onClick={acceptAll}
            className="flex-1 rounded-full bg-olive px-5 py-2.5 text-sm font-medium text-porcelain hover:bg-walnut transition-colors cursor-pointer"
          >
            Alle akzeptieren
          </button>

          {showDetails ? (
            <button
              onClick={saveSelection}
              className="flex-1 rounded-full bg-transparent ring-1 ring-porcelain/30 px-5 py-2.5 text-sm font-medium text-porcelain hover:ring-porcelain/60 transition-colors cursor-pointer"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="flex-1 rounded-full bg-transparent ring-1 ring-porcelain/30 px-5 py-2.5 text-sm font-medium text-porcelain hover:ring-porcelain/60 transition-colors cursor-pointer"
            >
              Einstellungen
            </button>
          )}

          <button
            onClick={denyAll}
            className="flex-1 rounded-full bg-transparent px-5 py-2.5 text-sm font-medium text-porcelain/50 hover:text-porcelain transition-colors cursor-pointer"
          >
            Alle ablehnen
          </button>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onChange,
  locked,
}: {
  label: string;
  description: string;
  checked?: boolean;
  onChange?: (v: boolean) => void;
  locked?: boolean;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer select-none group">
      <span className="relative mt-0.5 flex-shrink-0">
        <input
          type="checkbox"
          checked={locked ? true : checked}
          disabled={locked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only peer"
        />
        <span className="block w-9 h-5 rounded-full bg-porcelain/20 peer-checked:bg-olive transition-colors peer-disabled:opacity-60" />
        <span className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-porcelain shadow transition-transform peer-checked:translate-x-4" />
      </span>
      <span>
        <span className="text-sm font-medium block">{label}</span>
        <span className="text-xs text-porcelain/50 leading-snug block">{description}</span>
      </span>
    </label>
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
