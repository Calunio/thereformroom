"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type FAQItem = { question: string; answer: string };

export function FAQSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <ScrollReveal key={index} delay={0.04 * index}>
          <div className="border border-taupe/25 bg-porcelain/60 backdrop-blur-sm rounded-sm overflow-hidden transition-colors hover:border-taupe/45">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="font-display text-xl md:text-2xl text-espresso pr-4">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                strokeWidth={1.75}
                className={`shrink-0 text-olive transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-0">
                  <p className="text-espresso/70 text-sm md:text-base leading-relaxed border-t border-taupe/20 pt-4 font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
