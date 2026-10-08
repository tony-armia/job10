import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BOTTOM_CTA_CONFIG } from "@/config/landingConfig";
import { ArrowRight, Sparkles } from "lucide-react";

interface AudienceCTAProps {
  role: "recruiter" | "jobseeker";
}

export function AudienceCTA({ role }: AudienceCTAProps) {
  const config = BOTTOM_CTA_CONFIG[role];
  const isRecruiter = role === "recruiter";

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <Container>
        <div
          className={`relative rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-16 border text-center overflow-hidden shadow-sm ${
            isRecruiter
              ? "bg-gradient-to-b from-[#F5F3FF] via-[#FAF8FF] to-white border-indigo-150"
              : "bg-gradient-to-b from-[#FFF5F1] via-[#FFF8F5] to-white border-orange-150"
          }`}
        >
          {/* Decorative ambient glow */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-3xl pointer-events-none -z-0 ${
              isRecruiter ? "bg-indigo-200/50" : "bg-orange-200/50"
            }`}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4">
              {config.headline}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-8 font-normal">
              {config.description}
            </p>

            {/* Action Button */}
            <a href={config.buttonHref}>
              <Button
                size="lg"
                className={`rounded-full px-8 py-4 text-base font-bold shadow-md hover:shadow-lg transition-all group ${
                  isRecruiter
                    ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-indigo-500/20"
                    : "bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-orange-500/20"
                }`}
              >
                <span>{config.buttonText}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center ml-1 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
