"use client";

import type { ReactNode } from "react";
import { siteContent } from "@/app/content";
import { useCalunioEmbed } from "@/app/lib/calunio-embed";

function PricingBlock({
  heading,
  eyebrow,
  subheading,
  children,
}: {
  heading: string;
  eyebrow?: string;
  subheading?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="text-center max-w-2xl mx-auto mb-8">
        {eyebrow ? <p className="eyebrow text-olive mb-4">{eyebrow}</p> : null}
        <h2 className="font-display font-light text-espresso text-3xl md:text-4xl leading-tight mb-3">
          {heading}
        </h2>
        {subheading ? <p className="text-espresso/65 font-light">{subheading}</p> : null}
      </div>
      {children}
    </section>
  );
}

/**
 * Getrennte Calunio-Widgets (kein Tab-Switch): Mitgliedschaften, Pakete, Gutscheine.
 * Alle Container sitzen vor dem Script-Load im DOM.
 */
export function CalunioPricing() {
  useCalunioEmbed();
  const { memberships, packages, giftcards } = siteContent.pricing;

  return (
    <div className="calunio-pricing space-y-16">
      <PricingBlock heading={memberships.heading}>
        <div data-calunio-widget="memberships" />
      </PricingBlock>

      <PricingBlock heading={packages.heading}>
        <div data-calunio-widget="packages" />
      </PricingBlock>

      <PricingBlock
        heading={giftcards.heading}
        eyebrow={giftcards.eyebrow}
        subheading={giftcards.subheading}
      >
        <div data-calunio-widget="giftcards" />
      </PricingBlock>
    </div>
  );
}
