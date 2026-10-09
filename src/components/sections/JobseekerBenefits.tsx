import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Target, Award, Compass, ArrowRight } from "lucide-react";

export function JobseekerBenefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-[#FAFAFC] border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.12] mb-4">
            Less searching.{" "}
            <span className="text-[#192CE7] inline-block">
              More moving forward.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
            Designed to cut through the noise so you can focus on opportunities worthy of your time and expertise.
          </p>
        </div>

        {/* 3 Distinct Benefit Cards with Photo + Overlapping UI Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto">
          {/* Benefit Card 1: Matches that make sense */}
          <div className="bg-gradient-to-b from-[#F7F8FF] to-white border border-indigo-100/80 rounded-[26px] p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-[#192CE7]/8 hover:-translate-y-1.5 transition-all duration-300 group">
            <div>
              {/* Media Frame with Photo + Overlapping UI Widget */}
              <div className="relative h-[250px] sm:h-[265px] rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-xs border border-white/80">
                <Image
                  src="/images/benefit-1-match.jpg"
                  alt="Candidate browsing matches on laptop"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Decorative Sparkle Doodle Top Right */}
                <div className="absolute top-3 right-3 text-indigo-400/90 z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="2" x2="12" y2="7" />
                    <line x1="4" y1="6" x2="8" y2="9.5" />
                    <line x1="20" y1="6" x2="16" y2="9.5" />
                  </svg>
                </div>

                {/* Miniature Product Preview: Matching Breakdown */}
                <div className="absolute right-2.5 bottom-2.5 max-w-[210px] w-full bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-100/90 z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9.5px] font-semibold text-slate-900">Skill Compatibility</span>
                    <span className="text-[8px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200/50">
                      96% Fit
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="text-[7.5px] font-medium bg-indigo-50 text-[#192CE7] px-1.5 py-0.5 rounded">
                      System Architecture
                    </span>
                    <span className="text-[7.5px] font-medium bg-indigo-50 text-[#192CE7] px-1.5 py-0.5 rounded">
                      TypeScript
                    </span>
                    <span className="text-[7.5px] font-medium bg-indigo-50 text-[#192CE7] px-1.5 py-0.5 rounded">
                      Cloud Native
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1.5 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-1 p-0.5 rounded hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-[8px] shrink-0">
                          AI
                        </div>
                        <div>
                          <div className="text-[8.5px] font-semibold text-slate-900 leading-tight">Senior Backend Engineer</div>
                          <div className="text-[7px] text-slate-500 font-normal">OpenAI • San Francisco, CA</div>
                        </div>
                      </div>
                      <span className="text-[#192CE7] text-[10px] font-bold shrink-0">›</span>
                    </div>

                    <div className="flex items-center justify-between gap-1 p-0.5 rounded hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-[#0ACF83] text-white flex items-center justify-center font-bold text-[8px] shrink-0">
                          Fg
                        </div>
                        <div>
                          <div className="text-[8.5px] font-semibold text-slate-900 leading-tight">Product Engineer</div>
                          <div className="text-[7px] text-slate-500 font-normal">Figma • Remote</div>
                        </div>
                      </div>
                      <span className="text-[#192CE7] text-[10px] font-bold shrink-0">›</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">
                Matches that make sense
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal mb-5">
                Discover opportunities aligned with your skills, seniority, and professional goals rather than keyword-stuffed search results.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-xs font-semibold text-[#192CE7]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-50 text-[#192CE7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <span className="text-[13px] font-semibold">Direct high-fit matches</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>

          {/* Benefit Card 2: Put your experience to work */}
          <div className="bg-gradient-to-b from-[#FDF9FF] to-white border border-purple-100/80 rounded-[26px] p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-500/8 hover:-translate-y-1 transition-all duration-300 group">
            <div>
              {/* Media Frame with Photo + Overlapping UI Widget */}
              <div className="relative h-[250px] sm:h-[265px] rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-xs border border-white/80">
                <Image
                  src="/images/benefit-2-depth.jpg"
                  alt="Colleagues having technical career discussion"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Decorative Sparkle Doodle Top Right */}
                <div className="absolute top-3 right-3 text-purple-400/90 z-10" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="2" x2="12" y2="7" />
                    <line x1="4" y1="6" x2="8" y2="9.5" />
                    <line x1="20" y1="6" x2="16" y2="9.5" />
                  </svg>
                </div>

                {/* Miniature Product Preview: Verified Experience Profile */}
                <div className="absolute left-2.5 bottom-2.5 max-w-[210px] w-full bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-100/90 z-10">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span className="text-[9.5px] font-semibold text-slate-900">Verified Work Depth</span>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-[9px] shrink-0">
                      AM
                    </div>
                    <div>
                      <div className="text-[9.5px] font-semibold text-slate-900 leading-tight">Arjun Mehta</div>
                      <div className="text-[7.5px] text-slate-500">Full Stack Engineer • 7+ yrs exp</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 border-b border-slate-100 pb-1 mb-1 text-[8px]">
                    <span className="font-semibold text-[#192CE7] border-b-2 border-[#192CE7] pb-0.5">Experience</span>
                    <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">Projects</span>
                    <span className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">Compensation</span>
                  </div>

                  <p className="text-[7.5px] text-slate-600 leading-snug mb-1.5 font-normal">
                    Led team of 5 engineers to build scalable payments platform serving 10M+ users.
                  </p>

                  <div className="flex flex-wrap gap-1">
                    <span className="text-[7px] font-medium bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded hover:bg-purple-100 transition-colors">
                      Leadership
                    </span>
                    <span className="text-[7px] font-medium bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded hover:bg-purple-100 transition-colors">
                      Payments
                    </span>
                    <span className="text-[7px] font-medium bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded hover:bg-purple-100 transition-colors">
                      Scale
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">
                Put your experience to work
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal mb-5">
                Help relevant employers understand what you genuinely bring to the role with verified projects, compensation targets, and domain depth.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-xs font-semibold text-[#7C3AED]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span className="text-[13px] font-semibold">Direct founder visibility</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>

          {/* Benefit Card 3: A simpler way to discover opportunities */}
          <div className="bg-gradient-to-b from-[#F6FBF7] to-white border border-emerald-100/80 rounded-[26px] p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-500/8 hover:-translate-y-1 transition-all duration-300 group">
            <div>
              {/* Media Frame with Photo + Overlapping UI Widget */}
              <div className="relative h-[250px] sm:h-[265px] rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-xs border border-white/80">
                <Image
                  src="/images/benefit-3-feed.jpg"
                  alt="Engineer analyzing weekly curated openings"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Decorative Sparkle Doodle Top Right */}
                <div className="absolute top-3 right-3 text-emerald-400/90 z-10" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="2" x2="12" y2="7" />
                    <line x1="4" y1="6" x2="8" y2="9.5" />
                    <line x1="20" y1="6" x2="16" y2="9.5" />
                  </svg>
                </div>

                {/* Miniature Product Preview: Curated Openings Feed */}
                <div className="absolute left-2.5 bottom-2.5 max-w-[210px] w-full bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-100/90 z-10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9.5px] font-semibold text-slate-900">Curated Weekly Feed</span>
                    <span className="text-[7.5px] font-medium text-slate-400">100% Signal</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-1 p-1 rounded-lg bg-slate-50/80 border border-slate-100 hover:bg-emerald-50/50 hover:border-emerald-200/60 transition-all cursor-pointer">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-slate-900 text-white flex items-center justify-center font-semibold text-[8px] shrink-0">
                          N
                        </div>
                        <div>
                          <div className="text-[8.5px] font-semibold text-slate-900 leading-tight">Senior Product Engineer</div>
                          <div className="text-[7px] text-slate-500">Notion • San Francisco, CA</div>
                        </div>
                      </div>
                      <span className="text-[7px] font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded shrink-0">
                        ↗ $180k–260k
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-1 p-1 rounded-lg bg-slate-50/80 border border-slate-100 hover:bg-emerald-50/50 hover:border-emerald-200/60 transition-all cursor-pointer">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-[#D97706] text-white flex items-center justify-center font-semibold text-[8px] shrink-0">
                          A
                        </div>
                        <div>
                          <div className="text-[8.5px] font-semibold text-slate-900 leading-tight">Founding Engineer</div>
                          <div className="text-[7px] text-slate-500">Anthropic • Remote</div>
                        </div>
                      </div>
                      <span className="text-[7px] font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded shrink-0">
                        ↗ $220k–320k
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-1 p-1 rounded-lg bg-slate-50/80 border border-slate-100 hover:bg-emerald-50/50 hover:border-emerald-200/60 transition-all cursor-pointer">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-[#96BF48] text-white flex items-center justify-center font-semibold text-[8px] shrink-0">
                          S
                        </div>
                        <div>
                          <div className="text-[8.5px] font-semibold text-slate-900 leading-tight">Staff Engineer</div>
                          <div className="text-[7px] text-slate-500">Shopify • New York, NY</div>
                        </div>
                      </div>
                      <span className="text-[7px] font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded shrink-0">
                        ↗ $200k–300k
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">
                A simpler way to discover opportunities
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-relaxed font-normal mb-5">
                Explore suitable openings without manually sifting through thousands of stale, unvetted listings or repetitive recruiter outreach.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-xs font-semibold text-[#059669]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span className="text-[13px] font-semibold">Transparent salary ranges</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
