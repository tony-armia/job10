import React from "react";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { JobOpportunity } from "@/data/landing";
import { cn } from "@/lib/utils";

interface JobCardProps {
  job: JobOpportunity;
}

export function JobCard({ job }: JobCardProps) {
  const isFeatured = job.isFeatured;

  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between relative group",
        isFeatured
          ? "bg-[#4F46E5] text-white border-transparent shadow-lg shadow-indigo-500/20"
          : "bg-white text-slate-900 border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
      )}
    >
      <div>
        {/* Header: Company & Meta */}
        <div className="flex items-center gap-3.5 mb-5">
          <div
            className={cn(
              "w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0",
              isFeatured
                ? "bg-white/20 text-white backdrop-blur-xs"
                : "bg-indigo-50 text-[#4F46E5] border border-indigo-100/60"
            )}
          >
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h4
              className={cn(
                "text-sm font-semibold leading-tight",
                isFeatured ? "text-white" : "text-slate-900"
              )}
            >
              {job.company}
            </h4>
            <p
              className={cn(
                "text-xs mt-0.5",
                isFeatured ? "text-indigo-100" : "text-slate-500"
              )}
            >
              {job.postedTime}
            </p>
          </div>
        </div>

        {/* Job Title */}
        <h3
          className={cn(
            "text-lg font-bold tracking-tight mb-2",
            isFeatured ? "text-white" : "text-slate-900"
          )}
        >
          {job.title}
        </h3>

        {/* Location */}
        <div
          className={cn(
            "flex items-center gap-1.5 text-xs mb-5",
            isFeatured ? "text-indigo-100" : "text-slate-500"
          )}
        >
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>{job.location}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {job.tags.map((tag, idx) => (
            <span
              key={idx}
              className={cn(
                "text-xs px-2.5 py-1 rounded-md font-medium transition-colors",
                isFeatured
                  ? "bg-white/15 text-white"
                  : "bg-slate-100 text-slate-700"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2">
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-150 cursor-pointer",
            isFeatured
              ? "bg-white text-[#4F46E5] hover:bg-indigo-50 shadow-xs"
              : "border border-slate-200 text-slate-700 hover:border-[#4F46E5] hover:text-[#4F46E5] hover:bg-indigo-50/50"
          )}
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
