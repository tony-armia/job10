import React from "react";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { RECRUITMENT_FEATURES } from "@/data/landing";
import { ArrowRight, Sparkles } from "lucide-react";

export function RecruitmentFeatures() {
  return (
    <section id="talent" className="py-24 md:py-32 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header: Two Columns */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Find The Right <span className="text-indigo-600">Talent</span> For Your Team
            </h2>
          </div>

          <div className="max-w-md flex items-center justify-between lg:justify-end gap-6">
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Supercharge your hiring pipeline with pre-vetted candidates matched accurately using our AI assessment engines.
            </p>
            <button
              type="button"
              className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 hover:bg-indigo-700 transition-transform hover:scale-105 cursor-pointer shadow-md shadow-indigo-600/20"
              aria-label="Explore all recruiter features"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Column Features with Varied Pastel Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECRUITMENT_FEATURES.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
