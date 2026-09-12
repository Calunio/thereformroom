"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { siteContent } from "@/app/content";
import { injectCalunioEmbed } from "@/app/lib/calunio-embed";

export type PricingKind = "memberships" | "packages" | "giftcards";

interface PricingOverlayProps {
  open: boolean;
  kind: PricingKind | null;
  onClose: () => void;
}

export function PricingOverlay({ open, kind, onClose }: PricingOverlayProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { pricing } = siteContent;
  const copy = kind ? pricing[kind] : null;

  useEffect(() => {
    if (!open || !kind) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    let cancelled = false;
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (cancelled) return;
        injectCalunioEmbed();
      });
    });
    const retry = window.setTimeout(() => {
      if (cancelled) return;
      const widget = document.querySelector("[data-calunio-widget]");
      if (widget && !widget.querySelector(".cw-root")) injectCalunioEmbed();
    }, 500);

    return () => {
      cancelled = true;
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(retry);
    };
  }, [open, kind, onClose]);

  if (!open || !kind || !copy || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-espresso/40 backdrop-blur-[6px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pricing-overlay-title"
    >
      <div
        className="bg-porcelain w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl border border-taupe/20"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-porcelain/95 backdrop-blur-sm border-b border-taupe/15 flex items-start justify-between gap-4 px-6 py-5">
          <div>
            <p className="eyebrow text-olive mb-2">{copy.eyebrow}</p>
            <h3
              id="pricing-overlay-title"
              className="font-display font-light text-2xl sm:text-3xl text-espresso leading-tight"
            >
              {copy.heading}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="p-2 -mr-1 text-espresso/60 hover:text-espresso hover:bg-sand rounded-sm transition-colors shrink-0 cursor-pointer"
            aria-label={pricing.overlayCloseAria}
          >
            <X size={22} strokeWidth={1.75} />
          </button>
        </div>

        <div className="calunio-pricing-overlay px-4 sm:px-6 py-6">
          <div key={kind} data-calunio-widget={kind} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
