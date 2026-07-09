"use client";

import { useState } from "react";
import { siteContent } from "@/app/content";
import { trackEvent } from "@/app/lib/analytics";

const c = siteContent.newsletter;

export function NewsletterForm({
  variant = "light",
  submitLabel,
}: {
  variant?: "light" | "dark";
  submitLabel?: string;
}) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // Honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      if (!res.ok) throw new Error("failed");
      trackEvent("form_submit", { form_name: "newsletter" });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  const isDark = variant === "dark";
  const inputClass = isDark
    ? "flex-1 bg-transparent border border-porcelain/30 text-porcelain placeholder:text-porcelain/40 px-4 py-3 focus:outline-none focus:border-porcelain/70"
    : "flex-1 bg-porcelain border border-espresso/15 text-espresso placeholder:text-espresso/35 px-4 py-3 focus:outline-none focus:border-olive/60";
  const btnClass = isDark
    ? "bg-porcelain text-espresso hover:bg-sand"
    : "bg-espresso text-porcelain hover:bg-walnut";
  const msgClass = isDark ? "text-porcelain/80" : "text-espresso/70";

  if (status === "success") {
    return (
      <p className={`text-sm leading-relaxed font-light ${msgClass}`} role="status" aria-live="polite">
        {c.successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Honeypot: für Menschen unsichtbar, nur Bots füllen es aus */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="newsletter-company">Firma (bitte leer lassen)</label>
        <input
          id="newsletter-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="newsletter-email" className="sr-only">
          {c.placeholder}
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={c.placeholder}
          className={`${inputClass} font-light`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${btnClass} px-8 py-3 text-xs tracking-[0.18em] uppercase transition-colors disabled:opacity-50`}
        >
          {status === "loading" ? "…" : submitLabel ?? c.submit}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {c.errorMessage}
        </p>
      )}
    </form>
  );
}
