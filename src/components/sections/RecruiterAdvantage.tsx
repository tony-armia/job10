"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  XCircle,
  CheckCircle2,
  FileText,
  Clock,
  User,
  Target,
  ShieldCheck,
  Users,
  BarChart3,
  ArrowRight,
  Search,
  Filter,
  Layers,
} from "lucide-react";

export function RecruiterAdvantage() {
  return (
    <section id="advantage" className="relative py-20 md:py-28 bg-[#FAF9FD] border-t border-slate-100 overflow-hidden">
      {/* Soft ambient pastel curves in the background matching reference */}
      <div
        className="absolute top-1/4 -left-24 w-[520px] h-[520px] bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 right-0 w-[440px] h-[440px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.12] mb-3 sm:mb-4">
            Less screening. More promising candidates.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Move away from manual resume triage to structured, high-affinity matching that surfaces people who actually fit your requirements.
          </p>
        </div>

        {/* Visual Side-by-Side Comparison Container */}
        <div className="relative max-w-6xl mx-auto mb-16 sm:mb-20">
          {/* Hand-drawn Purple Connecting Arrow between Left and Right Cards */}
          <div
            className="hidden lg:flex items-center justify-center absolute left-[39.5%] top-[42%] -translate-x-1/3 -translate-y-1/2 z-30 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              className="w-12 h-8 text-[#818CF8]"
              viewBox="0 0 52 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 22C16 22 34 18 46 8"
                stroke="#818CF8"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M36 8L46 8L44 19"
                stroke="#818CF8"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Conventional Hiring Boards */}
            <div className="lg:col-span-5 bg-[#F8F9FA] border border-slate-200/80 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white text-slate-600 border border-slate-200/90 shadow-2xs">
                    <XCircle className="w-3.5 h-3.5 text-slate-400" />
                    <span>Conventional Hiring Boards</span>
                  </span>
                  <span className="text-xs font-normal text-slate-400">High friction</span>
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2.5">
                  Manual Screening &amp; Keyword Noise
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal mb-8">
                  Recruiters spend hours reviewing hundreds of keyword-stuffed PDFs, only to find the majority of applicants don&apos;t meet the core role qualifications.
                </p>

                {/* 3 Pain points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-200/70 text-slate-600 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">Unfiltered volume</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        Flooded inbox with hundreds of unvetted resumes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-200/70 text-slate-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">Slow manual review</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        15–20 hours spent every week manually sifting profiles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-200/70 text-slate-600 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">Cold outreach drop-off</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        Low response rates to unsolicited messaging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Result */}
              <div className="pt-6 mt-8 border-t border-slate-200/60 text-xs text-slate-500 font-normal">
                <strong className="font-semibold text-slate-700">Result:</strong> Extended time-to-hire and hiring team fatigue.
              </div>
            </div>

            {/* Right Card: Job10 Structured Matching */}
            <div className="lg:col-span-7 relative bg-white border-2 border-indigo-200/80 rounded-[32px] p-7 sm:p-9 flex flex-col justify-between shadow-xl shadow-indigo-100/40">
              {/* Floating Badge: THE JOB10 WAY */}
              <div className="absolute -top-3.5 right-8 bg-[#4338CA] text-white text-[11px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                THE JOB10 WAY
              </div>

              {/* Two Diagonal Decorative Slashes */}
              <div
                className="hidden xl:flex absolute -right-6 top-12 text-[#818CF8] font-bold text-2xl rotate-12 select-none z-10"
                aria-hidden="true"
              >
                //
              </div>

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-indigo-50/90 text-[#4338CA] border border-indigo-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Job10 Structured Matching</span>
                  </span>
                  <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                    High signal
                  </span>
                </div>

                <div className="relative">
                  {/* Fanned 3D Floating Candidate Cards (Overlapping right border) */}
                  <div
                    className="hidden sm:flex flex-col absolute -right-4 sm:-right-8 lg:-right-12 top-2 z-20 select-none"
                    aria-hidden="true"
                  >
                    {/* Card 1: 96% Match (Top, Jane Cooper style) */}
                    <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-3 border border-slate-100/90 shadow-xl shadow-slate-900/8 flex items-center gap-3 w-52 sm:w-56 -rotate-[1deg] hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                        alt="Candidate Jane Cooper"
                        className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-slate-100"
                      />
                      <span className="w-8 h-8 rounded-full bg-indigo-50/90 border border-indigo-200 text-[#4F46E5] font-semibold text-xs flex items-center justify-center shrink-0">
                        96
                      </span>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 bg-slate-300/80 rounded-full w-20" />
                        <div className="h-1.5 bg-slate-200/80 rounded-full w-14" />
                        <div className="h-1.5 bg-slate-200/80 rounded-full w-16" />
                      </div>
                    </div>

                    {/* Card 2: 92% Match (Middle, Dilan Preece style, shifted right) */}
                    <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-3 border border-slate-100/90 shadow-xl shadow-slate-900/8 flex items-center gap-3 w-52 sm:w-56 rotate-[1deg] translate-x-3 sm:translate-x-5 -mt-2 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                        alt="Candidate Dilan Preece"
                        className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-slate-100"
                      />
                      <span className="w-8 h-8 rounded-full bg-indigo-50/90 border border-indigo-200 text-[#4F46E5] font-semibold text-xs flex items-center justify-center shrink-0">
                        92
                      </span>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 bg-slate-300/80 rounded-full w-22" />
                        <div className="h-1.5 bg-slate-200/80 rounded-full w-16" />
                        <div className="h-1.5 bg-slate-200/80 rounded-full w-14" />
                      </div>
                    </div>

                    {/* Card 3: 88% Match (Bottom, shifted further right) */}
                    <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-3 border border-slate-100/90 shadow-xl shadow-slate-900/8 flex items-center gap-3 w-52 sm:w-56 -rotate-[2deg] translate-x-6 sm:translate-x-9 -mt-2 hover:rotate-0 hover:scale-105 hover:z-30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                        alt="Candidate Talent"
                        className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-slate-100"
                      />
                      <span className="w-8 h-8 rounded-full bg-indigo-50/90 border border-indigo-200 text-[#4F46E5] font-semibold text-xs flex items-center justify-center shrink-0">
                        88
                      </span>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2 bg-slate-300/80 rounded-full w-20" />
                        <div className="h-1.5 bg-slate-200/80 rounded-full w-14" />
                        <div className="h-1.5 bg-slate-200/80 rounded-full w-18" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="max-w-md sm:max-w-xs md:max-w-sm lg:max-w-[340px] xl:max-w-[370px]">
                    <h3 className="text-3xl sm:text-[34px] font-semibold text-slate-900 tracking-tight leading-[1.14] mb-3">
                      Pre-Scored Candidates<br />Aligned to Needs
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal mb-8">
                      Receive candidates whose technical depth, project history, and availability align directly with your job specification before you begin review.
                    </p>
                  </div>
                </div>

                {/* 3 Solution Features with subtle divider lines */}
                <div className="space-y-4 divide-y divide-slate-100">
                  <div className="flex items-start gap-3.5 pt-1 group/item">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Precision criteria</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        Matches based on verified competencies, not keywords.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-4 group/item">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Validated experience</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        Work history and project impact verified upfront.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-4 group/item">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/item:scale-110">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Interview readiness</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        Connect directly with candidates actively open to opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Result Banner */}
              <div className="mt-8 bg-[#EEF2FF] rounded-2xl p-4 sm:p-5 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="text-[#4F46E5] shrink-0">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-indigo-400 tracking-wider block">
                      RESULT
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#4338CA]">
                      Meaningful candidate discovery from day one.
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/25 transition-transform hover:scale-110 active:scale-95 cursor-pointer ml-3">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Workflow Enablers matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1: Requirement-Led Matching */}
          <div className="group bg-white rounded-[26px] p-7 sm:p-8 border border-slate-100/90 shadow-sm shadow-slate-900/3 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Search className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                  Smart Matching
                </span>
              </div>
              <h3 className="text-xl sm:text-[22px] font-semibold text-slate-900 tracking-tight leading-snug mb-3">
                Requirement-Led Matching
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal mb-8">
                Define your core technical requirements and let Job10 evaluate candidate alignment across depth, seniority, and stack.
              </p>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-12 group-hover:w-20 bg-[#6366F1] rounded-full transition-all duration-300" />
            </div>
          </div>

          {/* Card 2: Zero Low-Fit Volume */}
          <div className="group bg-white rounded-[26px] p-7 sm:p-8 border border-slate-100/90 shadow-sm shadow-slate-900/3 flex flex-col justify-between hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Filter className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316]">
                  Higher Quality
                </span>
              </div>
              <h3 className="text-xl sm:text-[22px] font-semibold text-slate-900 tracking-tight leading-snug mb-3">
                Zero Low-Fit Volume
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal mb-8">
                Avoid inboxes flooded with irrelevant applicants. Only profiles meeting your criteria are highlighted for review.
              </p>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-12 group-hover:w-20 bg-[#F97316] rounded-full transition-all duration-300" />
            </div>
          </div>

          {/* Card 3: Direct Interaction */}
          <div className="group bg-white rounded-[26px] p-7 sm:p-8 border border-slate-100/90 shadow-sm shadow-slate-900/3 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1.5 transition-all duration-300 cursor-default">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Layers className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#10B981]">
                  Direct Access
                </span>
              </div>
              <h3 className="text-xl sm:text-[22px] font-semibold text-slate-900 tracking-tight leading-snug mb-3">
                Direct Interaction
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal mb-8">
                Initiate interview conversations without middlemen or agency gatekeepers slowing down communication.
              </p>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-12 group-hover:w-20 bg-[#10B981] rounded-full transition-all duration-300" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
