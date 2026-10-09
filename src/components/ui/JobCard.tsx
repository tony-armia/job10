import React from "react";
import { MapPin, ArrowRight, Building2, Bookmark, DollarSign } from "lucide-react";
import { JobOpportunity } from "@/data/landing";
import { cn } from "@/lib/utils";

interface JobCardProps {
  job: JobOpportunity;
}

export function JobCard({ job }: JobCardProps) {
  const isFeatured = job.isFeatured;

  // Custom subtle accents per company (aligned with primary palette, no orange)
  const accentBadgeStyles: Record<string, string> = {
    sky: "bg-sky-50 text-sky-700 border-sky-200/60",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    violet: "bg-violet-50 text-violet-700 border-violet-200/60",
    mint: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    blue: "bg-blue-50 text-blue-700 border-blue-200/60",
    lavender: "bg-purple-50 text-purple-700 border-purple-200/60",
    peach: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    amber: "bg-blue-50 text-blue-700 border-blue-200/60",
  };

  const currentAccent = accentBadgeStyles[job.accentColor] || accentBadgeStyles.indigo;

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-7 border flex flex-col justify-between relative group card-soft cursor-pointer",
        "bg-white text-slate-900 border-slate-200/90 shadow-2xs",
        "hover:bg-[#4F46E5] hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-1",
        "transition-all duration-300 ease-out"
      )}
    >
      <div>
        {/* Top bar: Company badge, Name, Posted Time, Bookmark */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 border transition-all duration-300",
                currentAccent,
                "group-hover:bg-white/15 group-hover:text-white group-hover:border-white/20 group-hover:backdrop-blur-xs group-hover:scale-105"
              )}
            >
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold leading-tight text-slate-900 group-hover:text-white transition-colors duration-200">
                  {job.company}
                </h4>
                {isFeatured && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-indigo-50 text-[#4F46E5] border border-indigo-200/60 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/20 transition-all duration-200">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-xs mt-0.5 text-slate-500 group-hover:text-indigo-100 transition-colors duration-200">
                {job.postedTime} • {job.department}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 group-hover:text-indigo-100 group-hover:hover:text-white group-hover:hover:bg-white/15 transition-colors duration-200 cursor-pointer"
            aria-label="Save job"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>

        {/* Job Title */}
        <h3 className="text-xl font-semibold tracking-tight mb-2.5 text-slate-900 group-hover:text-white transition-colors duration-200">
          {job.title}
        </h3>

        {/* Location & Salary Metadata */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs mb-5">
          <div className="flex items-center gap-1.5 text-slate-600 group-hover:text-indigo-100 transition-colors duration-200">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-1 font-semibold text-slate-900 group-hover:text-white transition-colors duration-200">
            <DollarSign className="w-3.5 h-3.5 shrink-0 text-emerald-500 group-hover:text-emerald-300 transition-colors duration-200" />
            <span>{job.salary}</span>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded-lg font-medium bg-slate-100/80 text-slate-700 border border-slate-200/50 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/15 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-2 flex items-center justify-between border-t border-slate-100 group-hover:border-white/15 transition-colors duration-200">
        <span className="text-xs font-medium text-slate-500 group-hover:text-indigo-100 transition-colors duration-200">
          {job.employmentType}
        </span>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border border-slate-300 text-slate-800 bg-white group-hover:bg-white group-hover:text-[#4F46E5] group-hover:border-white group-hover:shadow-md hover:bg-slate-50 transition-all duration-200 cursor-pointer group/btn"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
