import React from "react";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { RECRUITMENT_FEATURES } from "@/data/landing";
import { ArrowRight } from "lucide-react";

export function RecruitmentFeatures() {
  return (
    <section id="talent" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header: Two Columns */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Find the right <span className="text-[#4F46E5]">talent</span> for your team
            </h2>
          </div>

          <div className="max-w-md flex items-center justify-between lg:justify-end gap-6">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Supercharge your hiring pipeline with pre-vetted candidates matched accurately using our AI assessment engines.
            </p>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 hover:bg-[#4338CA] transition-all hover:scale-105 cursor-pointer shadow-sm"
              aria-label="Explore all recruiter features"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Column Features with Varied Pastel Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {RECRUITMENT_FEATURES.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
