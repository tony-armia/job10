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
    <section id="advantage" className="py-20 md:py-28 bg-[#FAF9FD] border-t border-slate-100 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12] mb-3 sm:mb-4">
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
            className="hidden lg:flex items-center justify-center absolute left-[39.5%] top-[42%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              className="w-10 h-7 text-[#818CF8]"
              viewBox="0 0 46 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 14C12 4 28 4 42 14M42 14L34 8M42 14L35 20"
                stroke="currentColor"
                strokeWidth="2.5"
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
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white text-slate-600 border border-slate-200 shadow-2xs">
                    <XCircle className="w-3.5 h-3.5 text-slate-400" />
                    <span>Conventional Hiring Boards</span>
                  </span>
                  <span className="text-xs font-normal text-slate-400">High friction</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2.5">
                  Manual Screening &amp; Keyword Noise
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal mb-7">
                  Recruiters spend hours reviewing hundreds of keyword-stuffed PDFs, only to find the majority of applicants don&apos;t meet the core role qualifications.
                </p>

                {/* 3 Pain points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-200/70 text-slate-600 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Unfiltered volume</h4>
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
                      <h4 className="text-sm font-bold text-slate-800">Slow manual review</h4>
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
                      <h4 className="text-sm font-bold text-slate-800">Cold outreach drop-off</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        Low response rates to unsolicited messaging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Result */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 text-xs text-slate-500 font-normal">
                <strong className="font-bold text-slate-700">Result:</strong> Extended time-to-hire and hiring team fatigue.
              </div>
            </div>

            {/* Right Card: Job10 Structured Matching */}
            <div className="lg:col-span-7 relative bg-white border-2 border-indigo-200/80 rounded-[32px] p-7 sm:p-9 flex flex-col justify-between shadow-xl shadow-indigo-100/40">
              {/* Floating Badge: THE JOB10 WAY */}
              <div className="absolute -top-3.5 right-8 bg-[#4338CA] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                THE JOB10 WAY
              </div>

              {/* Two Diagonal Decorative Slashes */}
              <div
                className="hidden xl:flex absolute -right-6 top-14 text-indigo-400 font-black text-xl rotate-12 select-none"
                aria-hidden="true"
              >
                //
              </div>

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1 rounded-full bg-indigo-50/90 text-[#4338CA] border border-indigo-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Job10 Structured Matching</span>
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                    High signal
                  </span>
                </div>

                <div className="relative">
                  {/* Floating Candidate Cards (Desktop/Tablet) */}
                  <div
                    className="hidden sm:flex flex-col gap-2.5 absolute -right-2 sm:-right-4 lg:-right-6 top-0 z-10 pointer-events-none"
                    aria-hidden="true"
                  >
                    {/* Card 1: 96% Match */}
                    <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 border border-slate-100 shadow-lg shadow-indigo-950/8 flex items-center gap-3 w-48 rotate-2">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                        alt="Candidate"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <span className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 font-bold text-xs flex items-center justify-center shrink-0">
                        96
                      </span>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-1.5 bg-slate-200 rounded-full w-16" />
                        <div className="h-1.5 bg-slate-150 rounded-full w-12" />
                      </div>
                    </div>

                    {/* Card 2: 92% Match */}
                    <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 border border-slate-100 shadow-lg shadow-indigo-950/8 flex items-center gap-3 w-48 -rotate-1 translate-x-2">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                        alt="Candidate"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <span className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 font-bold text-xs flex items-center justify-center shrink-0">
                        92
                      </span>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-1.5 bg-slate-200 rounded-full w-16" />
                        <div className="h-1.5 bg-slate-150 rounded-full w-10" />
                      </div>
                    </div>

                    {/* Card 3: 88% Match */}
                    <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-2.5 border border-slate-100 shadow-lg shadow-indigo-950/8 flex items-center gap-3 w-48 rotate-1">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Candidate"
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <span className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 font-bold text-xs flex items-center justify-center shrink-0">
                        88
                      </span>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-1.5 bg-slate-200 rounded-full w-16" />
                        <div className="h-1.5 bg-slate-150 rounded-full w-12" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="max-w-md sm:max-w-xs md:max-w-sm lg:max-w-[340px] xl:max-w-[380px]">
                    <h3 className="text-2xl sm:text-[30px] font-bold text-slate-900 tracking-tight leading-tight mb-2.5">
                      Pre-Scored Candidates<br />Aligned to Needs
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-7">
                      Receive candidates whose technical depth, project history, and availability align directly with your job specification before you begin review.
                    </p>
                  </div>
                </div>

                {/* 3 Solution Features */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Precision criteria</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        Matches based on verified competencies, not keywords.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Validated experience</h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        Work history and project impact verified upfront.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Interview readiness</h4>
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
                    <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block">
                      RESULT
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#4338CA]">
                      Meaningful candidate discovery from day one.
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/25 transition-transform hover:scale-105 cursor-pointer ml-3">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Workflow Enablers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center font-bold mb-4">
              <Search className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1.5">
              Requirement-Led Matching
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Define your core technical requirements and let Job10 evaluate candidate alignment across depth, seniority, and stack.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center font-bold mb-4">
              <Filter className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1.5">
              Zero Low-Fit Volume
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Avoid inboxes flooded with irrelevant applicants. Only profiles meeting your criteria are highlighted for review.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center font-bold mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1.5">
              Direct Interaction
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Initiate interview conversations without middlemen or agency gatekeepers slowing down communication.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
