"use client";

import { useCalunioEmbed } from "@/app/lib/calunio-embed";

/**
 * Calunio-Widget-Container. Rendering übernimmt embed.js anhand der
 * data-Attribute. Script-Laden: useCalunioEmbed (einmal scannen, bei
 * Navigation neu injizieren).
 */

interface CalunioWidgetProps {
  type?: "schedule" | "packages" | "memberships" | "pricing" | "giftcards";
  view?: "week" | "day";
  packageId?: string | number;
  membershipId?: string | number;
  giftcardId?: string | number;
}

export function CalunioWidget({
  type = "schedule",
  view = "week",
  packageId,
  membershipId,
  giftcardId,
}: CalunioWidgetProps) {
  useCalunioEmbed();

  return (
    <div
      data-calunio-widget={type}
      {...(type === "schedule" ? { "data-calunio-view": view } : {})}
      {...(packageId != null ? { "data-package-id": String(packageId) } : {})}
      {...(membershipId != null ? { "data-membership-id": String(membershipId) } : {})}
      {...(giftcardId != null ? { "data-giftcard-id": String(giftcardId) } : {})}
    />
  );
}
