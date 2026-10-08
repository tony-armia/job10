"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { JobCard } from "@/components/ui/JobCard";
import { POPULAR_JOBS } from "@/data/landing";
import { ArrowRight, Sparkles, Filter } from "lucide-react";

const CATEGORIES = ["All Opportunities", "Engineering", "Security", "Product", "Analytics", "Remote"];

export function PopularJobs() {
  const [activeCategory, setActiveCategory] = useState("All Opportunities");

  return (
    <section id="jobs" className="py-24 md:py-32 bg-[#FBFBFE] border-t border-slate-100">
      <Container>
        {/* Section Header: Two Columns with Expressive Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Your next opportunity{" "}
              <span className="text-[#4F46E5]">could be right here.</span>
            </h2>
          </div>

          <div className="max-w-md flex items-center justify-between lg:justify-end gap-6">
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Explore opportunities across different roles and industries, with the details you need to find a better fit.
            </p>
            <button
              type="button"
              className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 hover:bg-indigo-700 transition-transform hover:scale-105 cursor-pointer shadow-md shadow-indigo-600/20"
              aria-label="View all popular jobs"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Marketplace Polish) */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 pb-4 border-b border-slate-200/60">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight mr-2">
              Popular Opportunities
            </h3>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {POPULAR_JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}
