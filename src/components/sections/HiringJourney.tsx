import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HIRING_STEPS } from "@/data/landing";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HiringJourney() {
  const stepAccents: Record<string, { badge: string; iconBox: string; border: string }> = {
    indigo: {
      badge: "bg-indigo-100 text-indigo-700",
      iconBox: "bg-indigo-50 text-[#192CE7]",
      border: "hover:border-indigo-300",
    },
    sky: {
      badge: "bg-sky-100 text-sky-700",
      iconBox: "bg-sky-50 text-sky-600",
      border: "hover:border-sky-300",
    },
    peach: {
      badge: "bg-orange-100 text-orange-800",
      iconBox: "bg-orange-50 text-orange-600",
      border: "hover:border-orange-300",
    },
    mint: {
      badge: "bg-emerald-100 text-emerald-800",
      iconBox: "bg-emerald-50 text-emerald-600",
      border: "hover:border-emerald-300",
    },
    violet: {
      badge: "bg-purple-100 text-purple-800",
      iconBox: "bg-purple-50 text-purple-600",
      border: "hover:border-purple-300",
    },
  };

  const topSteps = HIRING_STEPS.slice(0, 3);
  const bottomSteps = HIRING_STEPS.slice(3, 5);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F8F9FC] border-t border-slate-100 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-4">
            From requirements to the{" "}
            <span className="text-[#192CE7]">right candidate.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A structured, 5-stage recruitment process designed to simplify candidate discovery and accelerate your team&apos;s hiring cycles.
          </p>
        </div>

        {/* Top Row: Steps 1, 2, 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
          {topSteps.map((item) => {
            const styling = stepAccents[item.accent] || stepAccents.indigo;
            return (
              <div
                key={item.step}
                className={cn(
                  "bg-white border border-slate-200/80 rounded-3xl p-7 transition-all duration-300 card-soft shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1.5 flex flex-col justify-between relative group cursor-default",
                  styling.border
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-transform duration-200 group-hover:scale-105",
                        styling.badge
                      )}
                    >
                      <span>Step 0{item.step}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row: Steps 4, 5 (Centered on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-16">
          {bottomSteps.map((item) => {
            const styling = stepAccents[item.accent] || stepAccents.indigo;
            return (
              <div
                key={item.step}
                className={cn(
                  "bg-white border border-slate-200/80 rounded-3xl p-7 transition-all duration-300 card-soft shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1.5 flex flex-col justify-between relative group cursor-default",
                  styling.border
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-transform duration-200 group-hover:scale-105",
                        styling.badge
                      )}
                    >
                      <span>Step 0{item.step}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA & Subtitle */}
        <div className="text-center flex flex-col items-center">
          <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-md font-normal">
            A streamlined transparent process so you can hire or get hired with zero friction.
          </p>

          <Button
            size="md"
            className="rounded-full px-8 h-12 text-base font-semibold bg-[#192CE7] hover:bg-[#1324C7] text-white shadow-sm hover:shadow-md transition-all group inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Start Hiring</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
