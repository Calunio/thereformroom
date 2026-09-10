"use client";

import { siteContent } from "@/app/content";
import { useCalunioEmbed } from "@/app/lib/calunio-embed";

/**
 * Calunio-Widgets für Preise: Tabs (Mitgliedschaften | Pakete)
 * plus Gutscheine. Alle Container sitzen vor dem Script-Load im DOM.
 */
export function CalunioPricing() {
  useCalunioEmbed();
  const { giftcards } = siteContent.pricing;

  return (
    <div className="calunio-pricing space-y-16">
      <div data-calunio-widget="pricing" />

      <section>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="eyebrow text-olive mb-4">{giftcards.eyebrow}</p>
          <h2 className="font-display font-light text-espresso text-3xl md:text-4xl leading-tight mb-3">
            {giftcards.heading}
          </h2>
          <p className="text-espresso/65 font-light">{giftcards.subheading}</p>
        </div>
        <div data-calunio-widget="giftcards" />
      </section>
    </div>
  );
}
