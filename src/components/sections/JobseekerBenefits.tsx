import React from "react";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Target, Award, Compass } from "lucide-react";

export function JobseekerBenefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Less searching. <span className="text-[#4F46E5]">More moving forward.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Designed to cut through the noise so you can focus on opportunities worthy of your time and expertise.
          </p>
        </div>

        {/* 3 Distinct Benefit Cards with Intentional Color Palettes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit Card 1: Matches that make sense */}
          <div className="bg-[#F5F3FF] border border-indigo-200/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 card-soft">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#4F46E5] flex items-center justify-center shadow-xs mb-6 border border-indigo-100">
                <Target className="w-6 h-6" />
              </div>

              {/* Miniature Product Preview: Matching Breakdown */}
              <div className="bg-white rounded-2xl p-4 border border-indigo-100/70 shadow-xs mb-6 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Skill Compatibility</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md text-[11px]">
                    96% Fit
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold bg-indigo-50 text-[#4F46E5] px-2 py-0.5 rounded-md">
                    System Architecture
                  </span>
                  <span className="text-[10px] font-semibold bg-indigo-50 text-[#4F46E5] px-2 py-0.5 rounded-md">
                    TypeScript
                  </span>
                  <span className="text-[10px] font-semibold bg-indigo-50 text-[#4F46E5] px-2 py-0.5 rounded-md">
                    Cloud Native
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-2.5">
                Matches that make sense
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Discover opportunities aligned with your skills, seniority, and professional goals rather than keyword-stuffed search results.
              </p>
            </div>

            <div className="pt-6 border-t border-indigo-150/60 mt-6 flex items-center gap-1.5 text-xs font-bold text-[#4F46E5]">
              <span>Direct high-fit matches</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Benefit Card 2: Put your experience to work */}
          <div className="bg-[#FFF5F1] border border-orange-200/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 card-soft">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#EA580C] flex items-center justify-center shadow-xs mb-6 border border-orange-100">
                <Award className="w-6 h-6" />
              </div>

              {/* Miniature Product Preview: Verified Experience Profile */}
              <div className="bg-white rounded-2xl p-4 border border-orange-100/70 shadow-xs mb-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-900">Verified Work Depth</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Validated leadership & portfolio impact presented directly to hiring managers.
                </p>
                <div className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-1 rounded-md inline-block">
                  No Keyword Screening Bots
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-2.5">
                Put your experience to work
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Help relevant employers understand what you genuinely bring to the role with verified projects, compensation targets, and domain depth.
              </p>
            </div>

            <div className="pt-6 border-t border-orange-150/60 mt-6 flex items-center gap-1.5 text-xs font-bold text-[#EA580C]">
              <span>Direct founder visibility</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Benefit Card 3: A simpler way to discover opportunities */}
          <div className="bg-[#F0FDF4] border border-emerald-200/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 card-soft">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#059669] flex items-center justify-center shadow-xs mb-6 border border-emerald-100">
                <Compass className="w-6 h-6" />
              </div>

              {/* Miniature Product Preview: Curated Openings Feed */}
              <div className="bg-white rounded-2xl p-4 border border-emerald-100/70 shadow-xs mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Curated Weekly Feed</span>
                  <span className="text-[10px] text-slate-500">100% Signal</span>
                </div>
                <div className="bg-emerald-50/70 p-2 rounded-lg text-[11px] text-emerald-800 font-medium">
                  3 Handpicked Roles Ready for Interview
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-2.5">
                A simpler way to discover opportunities
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Explore suitable openings without manually sifting through thousands of stale, unvetted listings or repetitive recruiter outreach.
              </p>
            </div>

            <div className="pt-6 border-t border-emerald-150/60 mt-6 flex items-center gap-1.5 text-xs font-bold text-[#059669]">
              <span>Transparent salary ranges</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
