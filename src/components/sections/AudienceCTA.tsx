import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BOTTOM_CTA_CONFIG } from "@/config/landingConfig";
import { ArrowRight } from "lucide-react";

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
              ? "bg-gradient-to-b from-[#F5F3FF] via-[#FAF8FF] to-white border-indigo-100"
              : "bg-gradient-to-b from-[#EEF2FF] via-[#F8FAFC] to-white border-indigo-100"
          }`}
        >
          {/* Decorative ambient glow */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-3xl pointer-events-none -z-0 ${
              isRecruiter ? "bg-indigo-200/50" : "bg-indigo-100/60"
            }`}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-4">
              {config.headline}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-8 font-normal">
              {config.description}
            </p>

            {/* Action Button */}
            <a href={config.buttonHref}>
              <Button
                size="md"
                className="rounded-full px-8 h-12 text-base font-semibold shadow-sm hover:shadow-md transition-all group inline-flex items-center gap-2 cursor-pointer bg-[#192CE7] hover:bg-[#1324C7] text-white shadow-[#192CE7]/20 active:scale-95 hover:scale-105"
              >
                <span>{config.buttonText}</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
