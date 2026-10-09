"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Audience } from "@/types/audience";
import { AUDIENCE_FAQS } from "@/config/landingConfig";
import { useAudience } from "@/context/AudienceContext";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  forcedAudience?: Audience;
}

export function FAQSection({ forcedAudience }: FAQSectionProps) {
  const { audience: currentAudience } = useAudience();
  const audience = forcedAudience || currentAudience;
  const faqs = AUDIENCE_FAQS[audience] || AUDIENCE_FAQS.guest;

  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Frequently Asked <span className="text-[#4F46E5]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {audience === "recruiter"
              ? "Answers about talent vetting, AI match accuracy, data privacy, and employer onboarding."
              : audience === "jobseeker"
              ? "Answers about confidentiality, candidate costs, response times, and direct messaging."
              : "Everything you need to know about the Job10 platform, matching algorithms, and security guarantees."}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={cn(
                  "border rounded-2xl transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-indigo-300 bg-indigo-50/25 shadow-xs"
                    : "border-slate-200/80 bg-white hover:border-indigo-200 hover:shadow-xs hover:-translate-y-0.5"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                      isOpen
                        ? "bg-[#4F46E5] text-white shadow-xs rotate-180"
                        : "bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-[#4F46E5]"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-indigo-100/60 mt-1 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
