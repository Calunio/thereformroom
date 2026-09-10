"use client";

import { useCalunioEmbed } from "@/app/lib/calunio-embed";

/**
 * Calunio-Preis-Widget (Tabs: Mitgliedschaften | Pakete).
 * Preise kommen live aus dem Tenant — nicht lokal nachbauen.
 */
export function CalunioPricing() {
  useCalunioEmbed();

  return (
    <div className="calunio-pricing">
      <div data-calunio-widget="pricing" />
    </div>
  );
}
