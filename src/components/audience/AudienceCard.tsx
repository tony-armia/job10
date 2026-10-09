"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Star, Building2, MapPin, DollarSign, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AudienceCardProps {
  type: "recruiter" | "jobseeker";
  title: string;
  description: string;
  ctaText: string;
  onSelect: () => void;
}

export function AudienceCard({
  type,
  title,
  description,
  ctaText,
  onSelect,
}: AudienceCardProps) {
  const isRecruiter = type === "recruiter";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "group relative flex flex-col justify-between rounded-[28px] p-8 sm:p-10 border transition-all duration-300 cursor-pointer text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 select-none active:scale-[0.99]",
        isRecruiter
          ? "bg-[#F5F3FF] border-indigo-200/80 hover:border-indigo-400/90 hover:bg-[#EFEAFF] hover:shadow-xl hover:shadow-indigo-500/10 focus-visible:ring-indigo-500"
          : "bg-[#EEF2FF] border-indigo-200/80 hover:border-indigo-400/90 hover:bg-[#E0E7FF] hover:shadow-xl hover:shadow-indigo-500/10 focus-visible:ring-indigo-500"
      )}
    >
      {/* Top Header Badge & Meta */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border shadow-2xs",
              isRecruiter
                ? "bg-white text-indigo-700 border-indigo-100"
                : "bg-white text-indigo-700 border-indigo-100"
            )}
          >
            {isRecruiter ? (
              <>
                <Users className="w-3.5 h-3.5 text-indigo-600" />
                <span>For Hiring Teams & Founders</span>
              </>
            ) : (
              <>
                <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                <span>For Candidates & Professionals</span>
              </>
            )}
          </span>

          <span
            className={cn(
              "text-xs font-semibold px-2.5 py-1 rounded-lg transition-transform group-hover:scale-105",
              isRecruiter
                ? "bg-indigo-100/70 text-indigo-700"
                : "bg-indigo-100/80 text-indigo-700"
            )}
          >
            {isRecruiter ? "Hire Faster" : "Find Dream Job"}
          </span>
        </div>

        {/* Heading & Description */}
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-slate-950 transition-colors">
          {title}
        </h3>
        <p className="text-base text-slate-600 leading-relaxed max-w-md font-normal mb-8">
          {description}
        </p>
      </div>

      {/* Crafted Product-Inspired Miniature UI Showcase */}
      <div className="my-6 relative w-full rounded-2xl bg-white/90 backdrop-blur-xs p-5 border border-slate-200/60 shadow-xs transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        {isRecruiter ? (
          /* Recruiter UI Preview: Overlapping Candidate Match Cards */
          <div className="space-y-3">
            {/* Candidate Card 1 */}
            <div className="bg-[#FAF8FF] border border-indigo-100 rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-xs shadow-2xs">
                  SC
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h5 className="text-xs font-semibold text-slate-900">Sarah Chen</h5>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-[11px] text-slate-500">Staff Systems Architect</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                98% Match
              </span>
            </div>

            {/* Candidate Card 2 */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 flex items-center justify-between gap-3 opacity-90">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold text-xs">
                  DP
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-slate-900">Dillan Preece</h5>
                  <p className="text-[10px] text-slate-500">Lead Product Designer</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
            </div>

            {/* Recruiter Metric Bar */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 pt-1 border-t border-slate-100">
              <span className="font-semibold text-indigo-700">⚡ 3 New Verified Candidates Today</span>
              <span>18m Avg. Match</span>
            </div>
          </div>
        ) : (
          /* Jobseeker UI Preview: Compact Job Discovery Marketplace Cards */
          <div className="space-y-3">
            {/* Job Listing Card 1 */}
            <div className="bg-[#FAF8FF] border border-indigo-100 rounded-xl p-3.5 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-900 leading-tight">
                      CloudScale Systems
                    </h5>
                    <p className="text-[10px] text-slate-500">System Administrator • Remote</p>
                  </div>
                </div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Verified Role
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-indigo-100/60">
                <span className="font-semibold text-slate-900">$120k – $155k / yr</span>
                <span className="text-[10px] font-semibold text-[#4F46E5]">1-Click Fast Apply →</span>
              </div>
            </div>

            {/* Job Listing Card 2 */}
            <div className="bg-white border border-slate-100 rounded-xl p-2.5 flex items-center justify-between opacity-90">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 font-semibold text-xs">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-[11px] font-semibold text-slate-900">ApexGuard Security</h5>
                  <p className="text-[10px] text-slate-500">Cybersecurity Analyst • Dallas</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-900">$130k – $165k</span>
            </div>

            {/* Jobseeker Metric Bar */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 pt-1 border-t border-slate-100">
              <span className="font-semibold text-indigo-700">⚡ 10,000+ Active Verified Openings</span>
              <span>100% Free For Talent</span>
            </div>
          </div>
        )}
      </div>

      {/* Primary CTA Row with Micro-Interaction */}
      <div className="pt-4 flex items-center justify-between border-t border-indigo-100/60">
        <span
          className={cn(
            "text-base font-semibold flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1",
            "text-indigo-600"
          )}
        >
          <span>{ctaText}</span>
          <span
            className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-white shadow-xs transition-transform group-hover:translate-x-1",
              "bg-indigo-600"
            )}
          >
            <ArrowRight className="w-4 h-4" />
          </span>
        </span>

        <span className="text-xs font-medium text-slate-500">
          {isRecruiter ? "Recruiter Portal" : "Talent Discovery"}
        </span>
      </div>
    </div>
  );
}
