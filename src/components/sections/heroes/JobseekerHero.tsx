"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JOBSEEKER_HERO_CONFIG } from "@/config/landingConfig";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  MapPin,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export function JobseekerHero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#FFFDFB] via-white to-white overflow-hidden">
      {/* Soft warm peach & lavender background ambient shapes */}
      <div
        className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-80 h-80 bg-purple-100/35 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Headline & Career Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start max-w-xl">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-slate-900 tracking-tight leading-[1.08] mb-4">
              The right job shouldn&apos;t be{" "}
              <span className="relative inline-block">
                <span className="text-[#4F46E5]">hard to find.</span>
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-indigo-200/80 -z-10"
                  height="10"
                  viewBox="0 0 200 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 7C50 2 150 2 197 7"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              {JOBSEEKER_HERO_CONFIG.description}
            </p>

            {/* CTAs: Primary Purple Button + Subordinate Text Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full mb-6">
              <a href={JOBSEEKER_HERO_CONFIG.primaryCtaHref}>
                <Button
                  size="md"
                  className="rounded-full px-7 py-3.5 h-12 text-sm sm:text-base font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-sm hover:shadow-md transition-all group w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>{JOBSEEKER_HERO_CONFIG.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>

              <a
                href={JOBSEEKER_HERO_CONFIG.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-1.5 text-sm sm:text-base font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group px-2 py-2"
              >
                <span>{JOBSEEKER_HERO_CONFIG.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Free for Jobseekers</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero Recruiter Spam</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Direct Hiring Teams</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual + Refined Opportunity Discovery Card */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Editorial Career Photo Frame */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white bg-slate-100">
                <Image
                  src="/images/hero-interview.jpg"
                  alt="Professional in interview collaboration"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Layered High-Match Opportunity Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-200/80 max-w-sm w-full animate-in fade-in slide-in-from-bottom-3 duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4F46E5] font-bold text-sm">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        CloudScale Systems
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <MapPin className="w-3 h-3" />
                        <span>Remote • Worldwide</span>
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    96% Fit
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  Staff Systems Administrator
                </h3>

                <div className="flex items-center justify-between text-xs text-slate-600 mb-3 pt-2 border-t border-slate-100">
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    $120k – $155k / yr
                  </span>
                  <span className="text-[11px] text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-md">
                    Full Time
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Direct hiring team review</span>
                  </div>
                  <span className="text-xs font-bold text-[#4F46E5] flex items-center gap-1 hover:underline">
                    <span>Quick Apply</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Floating Top-Right Mini Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Direct Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
