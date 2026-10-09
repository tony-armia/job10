import React from "react";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { RECRUITMENT_FEATURES } from "@/data/landing";

export function RecruitmentFeatures() {
  return (
    <section id="talent" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Find the right <span className="text-[#192CE7]">talent</span> for your team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Supercharge your hiring pipeline with pre-vetted candidates matched accurately using our AI assessment engines.
          </p>
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
