import React from "react";
import { MapPin, ArrowRight, Building2, Bookmark, DollarSign } from "lucide-react";
import { JobOpportunity } from "@/data/landing";
import { cn } from "@/lib/utils";

interface JobCardProps {
  job: JobOpportunity;
}

export function JobCard({ job }: JobCardProps) {
  const isFeatured = job.isFeatured;

  // Custom subtle pastel accents per company
  const accentBadgeStyles: Record<string, string> = {
    sky: "bg-sky-50 text-sky-700 border-sky-200/60",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    peach: "bg-orange-50 text-orange-700 border-orange-200/60",
    mint: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    amber: "bg-amber-50 text-amber-700 border-amber-200/60",
    lavender: "bg-purple-50 text-purple-700 border-purple-200/60",
  };

  const currentAccent = accentBadgeStyles[job.accentColor] || accentBadgeStyles.indigo;

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-7 transition-all duration-200 border flex flex-col justify-between relative group card-soft",
        isFeatured
          ? "bg-[#4F46E5] text-white border-transparent shadow-xl shadow-indigo-600/25 ring-2 ring-indigo-500/50"
          : "bg-white text-slate-900 border-slate-200/90 hover:border-slate-300 hover:shadow-md"
      )}
    >
      <div>
        {/* Top bar: Company badge, Name, Posted Time, Bookmark */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 border transition-transform group-hover:scale-105",
                isFeatured
                  ? "bg-white/15 text-white border-white/20 backdrop-blur-xs"
                  : currentAccent
              )}
            >
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4
                  className={cn(
                    "text-sm font-bold leading-tight",
                    isFeatured ? "text-white" : "text-slate-900"
                  )}
                >
                  {job.company}
                </h4>
                {isFeatured && (
                  <span className="bg-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider text-white">
                    Featured
                  </span>
                )}
              </div>
              <p
                className={cn(
                  "text-xs mt-0.5",
                  isFeatured ? "text-indigo-100" : "text-slate-500"
                )}
              >
                {job.postedTime} • {job.department}
              </p>
            </div>
          </div>

          <button
            type="button"
            className={cn(
              "p-2 rounded-xl transition-colors cursor-pointer",
              isFeatured
                ? "text-indigo-200 hover:text-white hover:bg-white/10"
                : "text-slate-400 hover:text-slate-800 hover:bg-slate-100"
            )}
            aria-label="Save job"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>

        {/* Job Title */}
        <h3
          className={cn(
            "text-xl font-semibold tracking-tight mb-2.5",
            isFeatured ? "text-white" : "text-slate-900 group-hover:text-indigo-600 transition-colors"
          )}
        >
          {job.title}
        </h3>

        {/* Location & Salary Metadata */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs mb-5">
          <div
            className={cn(
              "flex items-center gap-1.5",
              isFeatured ? "text-indigo-100" : "text-slate-600"
            )}
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{job.location}</span>
          </div>

          <div
            className={cn(
              "flex items-center gap-1 font-semibold",
              isFeatured ? "text-white" : "text-slate-900"
            )}
          >
            <DollarSign className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
            <span>{job.salary}</span>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className={cn(
                "text-xs px-2.5 py-1 rounded-lg font-medium transition-colors",
                isFeatured
                  ? "bg-white/15 text-white border border-white/10"
                  : "bg-slate-100/80 text-slate-700 border border-slate-200/50"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-2 flex items-center justify-between border-t border-slate-100/20">
        <span
          className={cn(
            "text-xs font-medium",
            isFeatured ? "text-indigo-100" : "text-slate-500"
          )}
        >
          {job.employmentType}
        </span>

        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer group/btn",
            isFeatured
              ? "bg-white text-[#4F46E5] hover:bg-indigo-50 shadow-sm"
              : "border border-slate-300 text-slate-800 hover:border-indigo-600 hover:text-white hover:bg-indigo-600 shadow-2xs"
          )}
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
