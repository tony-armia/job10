import React from "react";
import { Container } from "@/components/ui/Container";
import { JobCard } from "@/components/ui/JobCard";
import { POPULAR_JOBS } from "@/data/landing";
import { ArrowRight } from "lucide-react";

export function PopularJobs() {
  return (
    <section id="jobs" className="py-20 md:py-24 bg-slate-50/60 border-t border-slate-100">
      <Container>
        {/* Section Header: Two Columns */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Most <span className="text-[#4F46E5]">Popular</span> Jobs for you.
            </h2>
          </div>

          <div className="max-w-md flex items-center justify-between md:justify-end gap-6">
            <p className="text-sm text-slate-500 leading-relaxed">
              Explore verified opportunities from top global companies and high-growth startups tailored to your skillset and career goals.
            </p>
            <button
              type="button"
              className="w-11 h-11 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 hover:bg-[#4338CA] transition-colors cursor-pointer shadow-sm shadow-indigo-200"
              aria-label="View more popular jobs"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-label: Popular Opportunities */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Popular Opportunities
          </h3>
        </div>

        {/* Grid of Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}
