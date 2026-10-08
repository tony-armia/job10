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
} from "lucide-react";

export function HiringJourney() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="w-4 h-4 text-[#4F46E5]" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-[#4F46E5]" />;
      case "Calendar":
        return <Calendar className="w-4 h-4 text-[#4F46E5]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-[#4F46E5]" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-4 h-4 text-[#4F46E5]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#4F46E5]" />;
    }
  };

  const topSteps = HIRING_STEPS.slice(0, 3);
  const bottomSteps = HIRING_STEPS.slice(3, 5);

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-100">
      <Container>
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Hiring Journey in <span className="text-[#4F46E5]">5 Connected Steps</span>
          </h2>
        </div>

        {/* Top Row: 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 bg-indigo-50/70 border border-indigo-100/80 px-3 py-1.5 rounded-full text-xs font-semibold text-[#4F46E5]">
                    <span className="w-4 h-4 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-[10px] font-bold">
                      {item.step}
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    {getStepIcon(item.iconName)}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Steps (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {bottomSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 bg-indigo-50/70 border border-indigo-100/80 px-3 py-1.5 rounded-full text-xs font-semibold text-[#4F46E5]">
                    <span className="w-4 h-4 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-[10px] font-bold">
                      {item.step}
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    {getStepIcon(item.iconName)}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA & Subtitle */}
        <div className="text-center flex flex-col items-center">
          <p className="text-xs sm:text-sm text-slate-500 mb-6 max-w-md">
            A streamlined transparent process so you can hire or get hired with zero friction.
          </p>

          <Button size="lg" className="rounded-full px-8 gap-2.5 shadow-sm group">
            <span>Start Hiring</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
