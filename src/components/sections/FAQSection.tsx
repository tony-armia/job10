"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FAQ_LIST } from "@/data/landing";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  // First item open by default as shown in the screenshot
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header: Two Columns */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently Asked <span className="text-[#4F46E5]">Questions.</span>
            </h2>
          </div>

          <div className="max-w-md flex items-center justify-between md:justify-end gap-6">
            <p className="text-sm text-slate-500 leading-relaxed">
              Everything you need to know about the Job10 platform, matching algorithms, and security guarantees.
            </p>
            <button
              type="button"
              className="w-11 h-11 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 hover:bg-[#4338CA] transition-colors cursor-pointer shadow-sm shadow-indigo-200"
              aria-label="Contact FAQ support"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={cn(
                  "border rounded-2xl transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "border-[#4F46E5]/40 bg-indigo-50/20 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                      isOpen
                        ? "bg-[#4F46E5] text-white"
                        : "bg-slate-100 text-slate-500 group-hover:text-slate-800"
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
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-indigo-100/60 mt-1">
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
