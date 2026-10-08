import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HIRING_STEPS } from "@/data/landing";
import {
  FileText,
  Sparkles,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function HiringJourney() {
  const getStepIcon = (iconName: string) => {
    const iconClass = "w-5 h-5";
    switch (iconName) {
      case "FileText":
        return <FileText className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      case "Calendar":
        return <Calendar className={iconClass} />;
      case "ShieldCheck":
        return <ShieldCheck className={iconClass} />;
      case "CheckCircle2":
        return <CheckCircle2 className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const stepAccents: Record<string, { badge: string; iconBox: string; border: string }> = {
    indigo: {
      badge: "bg-indigo-100 text-indigo-700",
      iconBox: "bg-indigo-50 text-indigo-600",
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
    <section id="how-it-works" className="py-24 md:py-32 bg-[#F8F9FC] border-t border-slate-100 relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
            From requirements to the{" "}
            <span className="text-[#4F46E5]">right candidate.</span>
          </h2>
          <p className="text-base text-slate-600 font-normal">
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
                  "bg-white border border-slate-200/80 rounded-3xl p-7 transition-all duration-300 card-soft shadow-2xs hover:shadow-md flex flex-col justify-between relative group",
                  styling.border
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full",
                        styling.badge
                      )}
                    >
                      <span>Step 0{item.step}</span>
                    </span>
                    <div className={cn("p-2.5 rounded-2xl border border-black/5", styling.iconBox)}>
                      {getStepIcon(item.iconName)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
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
                  "bg-white border border-slate-200/80 rounded-3xl p-7 transition-all duration-300 card-soft shadow-2xs hover:shadow-md flex flex-col justify-between relative group",
                  styling.border
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full",
                        styling.badge
                      )}
                    >
                      <span>Step 0{item.step}</span>
                    </span>
                    <div className={cn("p-2.5 rounded-2xl border border-black/5", styling.iconBox)}>
                      {getStepIcon(item.iconName)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
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
            size="lg"
            className="rounded-full px-8 py-3.5 text-base font-semibold shadow-md shadow-indigo-600/20 hover:shadow-lg group"
          >
            <span>Start Hiring</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center ml-1 transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
