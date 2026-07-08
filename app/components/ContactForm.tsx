"use client";

import { useState } from "react";
import Link from "next/link";
import { siteContent } from "@/app/content";
import { trackEvent } from "@/app/lib/analytics";

const c = siteContent.contactForm;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: c.interestOptions[0].value,
    marketingConsent: false,
    company: "", // Honeypot – von Menschen unsichtbar, füllt sich nur bei Bots
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");

      trackEvent("form_submit", {
        form_name: "contact",
        interest: formData.interest,
        marketing_optin: formData.marketingConsent,
      });
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: c.interestOptions[0].value,
        marketingConsent: false,
        company: "",
      });
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setError(c.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full px-4 py-3 bg-porcelain border border-espresso/12 focus:outline-none focus:border-olive/60 focus:ring-1 focus:ring-olive/20 transition-all text-espresso placeholder:text-espresso/30 font-light";

  return (
    <div className="bg-card p-8 md:p-10 rounded-sm">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-16 text-center" role="status" aria-live="polite">
          <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-3xl text-espresso mb-2">{c.successTitle}</h3>
          <p className="text-espresso/60 text-sm font-light">{c.successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          )}

          {/* Honeypot: für Menschen unsichtbar, nur Bots füllen es aus */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="contact-company">Firma (bitte leer lassen)</label>
            <input
              type="text"
              id="contact-company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="contact-name" className="block mb-2 text-sm text-espresso/80">
              {c.labelName}
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block mb-2 text-sm text-espresso/80">
              {c.labelEmail}
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block mb-2 text-sm text-espresso/80">
              {c.labelPhone}
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-interest" className="block mb-2 text-sm text-espresso/80">
              {c.labelInterest}
            </label>
            <select
              id="contact-interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={inputClasses}
            >
              {c.interestOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block mb-2 text-sm text-espresso/80">
              {c.labelMessage}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.marketingConsent}
              onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-espresso/20 accent-olive cursor-pointer"
            />
            <span className="text-xs text-espresso/60 leading-relaxed font-light">
              {c.marketingOptIn}{" "}
              <Link
                href="/datenschutz"
                className="underline underline-offset-2 hover:text-espresso transition-colors"
              >
                Datenschutzerklärung
              </Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-espresso text-porcelain px-8 py-4 text-xs tracking-[0.18em] uppercase hover:bg-walnut transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? c.sending : c.submit}
          </button>
        </form>
      )}
    </div>
  );
}
