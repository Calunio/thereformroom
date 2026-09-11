"use client";

import { useCalunioEmbed } from "@/app/lib/calunio-embed";

/**
 * Calunio-Widget-Container. Rendering übernimmt embed.js anhand der
 * data-Attribute. Script-Laden: useCalunioEmbed (einmal scannen, bei
 * Navigation neu injizieren).
 *
 * embed.js liest `root._cwWeekStart` vor dem ersten Render der Wochenansicht.
 */

type CalunioScheduleRoot = HTMLDivElement & { _cwWeekStart?: Date };

interface CalunioWidgetProps {
  type?: "schedule" | "packages" | "memberships" | "pricing" | "giftcards";
  view?: "week" | "day";
  packageId?: string | number;
  membershipId?: string | number;
  giftcardId?: string | number;
  /** Exclusive YYYY-MM-DD (Europe/Berlin): show next week until this date. */
  startNextWeekUntil?: string;
}

function berlinYmd(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Same Monday-start as Calunio embed.js, plus 7 days. */
function nextWeekMonday(now = new Date()): Date {
  const c = new Date(now);
  const weekday = c.getDay() || 7;
  c.setDate(c.getDate() - weekday + 1 + 7);
  c.setHours(0, 0, 0, 0);
  return c;
}

export function CalunioWidget({
  type = "schedule",
  view = "week",
  packageId,
  membershipId,
  giftcardId,
  startNextWeekUntil,
}: CalunioWidgetProps) {
  useCalunioEmbed();

  const bindRoot = (el: HTMLDivElement | null) => {
    if (!el || type !== "schedule" || view !== "week" || !startNextWeekUntil) return;
    if (berlinYmd() >= startNextWeekUntil) return;
    (el as CalunioScheduleRoot)._cwWeekStart = nextWeekMonday();
  };

  return (
    <div
      ref={bindRoot}
      data-calunio-widget={type}
      {...(type === "schedule" ? { "data-calunio-view": view } : {})}
      {...(packageId != null ? { "data-package-id": String(packageId) } : {})}
      {...(membershipId != null ? { "data-membership-id": String(membershipId) } : {})}
      {...(giftcardId != null ? { "data-giftcard-id": String(giftcardId) } : {})}
    />
  );
}
