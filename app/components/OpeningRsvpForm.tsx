"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

const inputClass =
  "w-full bg-porcelain border border-espresso/15 text-espresso placeholder:text-espresso/35 px-4 py-3 focus:outline-none focus:border-olive/60 font-light";

export function OpeningRsvpForm({ initialEmail = "" }: { initialEmail?: string }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/opening-rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, company }),
      });
      if (!res.ok) throw new Error("failed");
      trackEvent("form_submit", { form_name: "opening_rsvp" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center" role="status" aria-live="polite">
        <p className="font-display italic text-2xl text-espresso mb-3">Ich freue mich auf dich.</p>
        <p className="text-espresso/65 font-light leading-relaxed">
          19. September, 14–17 Uhr.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto text-left">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="opening-company">Firma (bitte leer lassen)</label>
        <input
          id="opening-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor="opening-firstname" className="sr-only">
            Vorname
          </label>
          <input
            id="opening-firstname"
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Vorname"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="opening-lastname" className="sr-only">
            Nachname
          </label>
          <input
            id="opening-lastname"
            type="text"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Nachname"
            className={inputClass}
          />
        </div>
      </div>

      <label htmlFor="opening-email" className="sr-only">
        E-Mail-Adresse
      </label>
      <input
        id="opening-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-Mail-Adresse"
        className={`${inputClass} mb-3`}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-espresso text-porcelain px-8 py-3.5 text-xs tracking-[0.28em] uppercase hover:bg-walnut transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Wird gesendet …" : "Ich bin dabei"}
      </button>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-700 text-center" role="alert">
          Das hat leider nicht geklappt. Bitte versuche es in ein paar Minuten erneut.
        </p>
      )}
    </form>
  );
}
