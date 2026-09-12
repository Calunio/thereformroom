"use client";

import { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/app/content";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { PricingOverlay, type PricingKind } from "@/app/components/PricingOverlay";

const KINDS: PricingKind[] = ["packages", "memberships", "giftcards"];

/**
 * Drei Auswahlkarten. Das jeweilige Calunio-Widget sitzt erst im Overlay,
 * damit Preise nicht schon auf der Seite offenliegen.
 */
export function CalunioPricing() {
  const [kind, setKind] = useState<PricingKind | null>(null);
  const { pricing } = siteContent;
  const closeOverlay = useCallback(() => setKind(null), []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {KINDS.map((item, index) => {
          const copy = pricing[item];
          const featured = item === "memberships";
          return (
            <ScrollReveal key={item} delay={0.08 + index * 0.08} className="h-full">
              <button
                type="button"
                onClick={() => setKind(item)}
                className={`group w-full h-full text-left flex flex-col rounded-sm p-7 lg:p-8 cursor-pointer focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                  featured
                    ? "bg-walnut text-porcelain hover:bg-espresso focus-visible:ring-olive/50"
                    : "bg-card text-espresso border border-taupe/15 hover:border-taupe/40 focus-visible:ring-olive/35"
                }`}
              >
                <p className={`eyebrow mb-4 ${featured ? "text-almond" : "text-olive"}`}>
                  {copy.eyebrow}
                </p>
                <h3
                  className={`font-display font-light text-2xl lg:text-3xl leading-tight mb-3 ${
                    featured ? "text-porcelain" : "text-espresso"
                  }`}
                >
                  {copy.heading}
                </h3>
                <p
                  className={`text-sm leading-relaxed font-light mb-8 flex-1 ${
                    featured ? "text-porcelain/70" : "text-espresso/65"
                  }`}
                >
                  {copy.teaser}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase border-b pb-1 w-fit transition-colors ${
                    featured
                      ? "text-porcelain border-porcelain/40 group-hover:border-porcelain"
                      : "text-espresso border-espresso/30 group-hover:border-espresso"
                  }`}
                >
                  {copy.cta}
                  <ArrowRight size={12} strokeWidth={1.75} />
                </span>
              </button>
            </ScrollReveal>
          );
        })}
      </div>

      <PricingOverlay open={kind !== null} kind={kind} onClose={closeOverlay} />
    </>
  );
}
