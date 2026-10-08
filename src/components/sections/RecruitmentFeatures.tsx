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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Find The Right <span className="text-[#4F46E5]">Talent</span> For Your Team
            </h2>
          </div>

          <div className="max-w-md flex items-center justify-between md:justify-end gap-6">
            <p className="text-sm text-slate-500 leading-relaxed">
              Supercharge your hiring pipeline with pre-vetted candidates matched accurately using our AI assessment engines.
            </p>
            <button
              type="button"
              className="w-11 h-11 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 hover:bg-[#4338CA] transition-colors cursor-pointer shadow-sm shadow-indigo-200"
              aria-label="Explore talent solutions"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECRUITMENT_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
