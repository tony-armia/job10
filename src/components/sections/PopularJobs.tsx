"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { POPULAR_JOBS, JobOpportunity } from "@/data/landing";
import {
  ArrowRight,
  Building2,
  Bookmark,
  MapPin,
  Briefcase,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All Opportunities",
  "Engineering",
  "Security",
  "Product",
  "Analytics",
  "Remote",
];

const VALUE_PROPS = [
  {
    icon: Zap,
    iconColor: "text-purple-600 bg-purple-50",
    title: "Real opportunities",
    description: "Verified companies, real roles, real growth.",
  },
  {
    icon: Users,
    iconColor: "text-sky-600 bg-sky-50",
    title: "Transparent details",
    description: "Know the role, salary and skills up front.",
  },
  {
    icon: BarChart3,
    iconColor: "text-emerald-600 bg-emerald-50",
    title: "A better fit, faster",
    description: "Find roles that match your skills and goals.",
  },
];

export function PopularJobs() {
  const [activeCategory, setActiveCategory] = useState("All Opportunities");
  const [savedJobs, setSavedJobs] = useState<Record<string, boolean>>({});

  const toggleSaveJob = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedJobs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Separate the featured job and the standard jobs
  const featuredJob =
    POPULAR_JOBS.find((j) => j.isFeatured) || POPULAR_JOBS[1];
  const standardJobs = POPULAR_JOBS.filter(
    (j) => j.id !== featuredJob.id
  ).slice(0, 4);

  // Filter jobs by category if not "All Opportunities"
  const filteredStandardJobs =
    activeCategory === "All Opportunities"
      ? standardJobs
      : POPULAR_JOBS.filter(
          (j) =>
            j.id !== featuredJob.id &&
            (j.department.toLowerCase() === activeCategory.toLowerCase() ||
              (activeCategory === "Remote" &&
                j.location.toLowerCase().includes("remote")))
        ).slice(0, 4);

  // Accent styling for standard card company icons
  const accentBadgeStyles: Record<string, string> = {
    sky: "bg-sky-50 text-sky-600 border-sky-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    violet: "bg-purple-50 text-purple-600 border-purple-100",
    mint: "bg-emerald-50 text-emerald-600 border-emerald-100",
    blue: "bg-sky-50 text-sky-600 border-sky-100",
    lavender: "bg-purple-50 text-purple-600 border-purple-100",
    peach: "bg-indigo-50 text-indigo-600 border-indigo-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
  };

  return (
    <section id="jobs" className="py-20 md:py-28 bg-[#FAF9FB] border-t border-slate-100">
      <Container>
        {/* Section Header: Left Headline + Right 3 Value Props & Circular CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14 mb-14">
          {/* Left Column: Pill + Large Headline + Subtitle */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/70 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
              <span className="text-[10.5px] font-semibold tracking-widest text-slate-800 uppercase">
                Popular Opportunities
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
              Discover roles <br />
              worth <span className="text-[#4F46E5]">your time.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-lg">
              Explore hand-picked opportunities from top companies, with
              transparent details to help you find a better fit.
            </p>
          </div>

          {/* Right Column: 3 Value Props + Circular CTA */}
          <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-10">
            {/* 3 Value Props Stack */}
            <div className="space-y-4">
              {VALUE_PROPS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 group cursor-default">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110",
                        item.iconColor
                      )}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-0.5 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Circular CTA Button + Text */}
            <div className="flex items-center gap-3 shrink-0 group">
              <a
                href="#all-jobs"
                className="w-12 h-12 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 active:scale-95 shadow-md shadow-indigo-500/20 cursor-pointer"
                aria-label="Explore all opportunities"
              >
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#all-jobs"
                className="text-xs sm:text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA] leading-snug max-w-[110px] hidden sm:block transition-colors"
              >
                Explore all opportunities
              </a>
            </div>
          </div>
        </div>

        {/* Category Filter Pills & Showing Count Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer active:scale-95 ${
                  activeCategory === category
                    ? "bg-slate-950 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Showing Count */}
          <div className="text-xs text-slate-400 font-medium whitespace-nowrap">
            Showing 6 of 230+ roles
          </div>
        </div>

        {/* Main Grid: Left Featured Card + Right 2x2 Grid of Standard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Featured Opportunity Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#F5F4FF] via-[#FAF9FF] to-[#ECE9FE]/40 border border-indigo-100 rounded-[28px] p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            {/* Ambient decorative curved background shape in bottom right corner */}
            <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-gradient-to-tl from-indigo-200/50 via-purple-100/30 to-transparent pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            {/* Top / Main Content */}
            <div className="relative z-10">
              {/* Header: Company Icon, Company Name, Time/Dept, Featured Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-100/80 text-[#4F46E5] flex items-center justify-center font-semibold text-sm shrink-0 border border-indigo-200/50 transition-transform duration-300 group-hover:scale-105">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold leading-tight text-slate-900">
                      {featuredJob.company}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-normal">
                      {featuredJob.postedTime} • {featuredJob.department}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider bg-white text-[#4F46E5] border border-indigo-200/80 shadow-2xs">
                  Featured
                </span>
              </div>

              {/* Job Title */}
              <h3 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight mb-2.5">
                {featuredJob.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {featuredJob.description ||
                  "Help us build and maintain secure, reliable infrastructure that powers millions of users worldwide."}
              </p>

              {/* Location, Salary, Employment Type */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs mb-6">
                <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  <span>{featuredJob.location}</span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-slate-900">
                  <span className="text-emerald-600 font-bold">$</span>
                  <span>{featuredJob.salary}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <Briefcase className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  <span>{featuredJob.employmentType}</span>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredJob.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg font-medium bg-white/90 text-slate-700 border border-slate-200/60 shadow-2xs transition-colors hover:border-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer: Overlapping Avatars + Team Note + Dark Apply Now Button */}
            <div className="pt-6 border-t border-indigo-100/80 flex items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-100 text-[#4F46E5] text-[10px] font-bold flex items-center justify-center border-2 border-white ring-1 ring-slate-100 shrink-0">
                    CS
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                    alt="Team member"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white ring-1 ring-slate-100 shrink-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                    alt="Team member"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white ring-1 ring-slate-100 shrink-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                    alt="Team member"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white ring-1 ring-slate-100 shrink-0"
                  />
                </div>
                <p className="text-xs text-slate-600 font-normal leading-snug max-w-[190px]">
                  Join a team of 50+ engineers building at global scale.
                </p>
              </div>

              <button
                type="button"
                className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-[#4F46E5] text-white text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-1.5 shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Standard Opportunity Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredStandardJobs.map((job) => {
              const accent =
                accentBadgeStyles[job.accentColor] ||
                accentBadgeStyles.indigo;
              const isSaved = !!savedJobs[job.id];

              return (
                <div
                  key={job.id}
                  className="bg-white border border-slate-200/80 rounded-[22px] p-5 sm:p-6 shadow-2xs hover:shadow-lg hover:-translate-y-1 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Bar: Icon, Company, Posted, Bookmark */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm shrink-0 border transition-transform duration-300 group-hover:scale-105",
                            accent
                          )}
                        >
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold leading-tight text-slate-900">
                            {job.company}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5 font-normal">
                            {job.postedTime} • {job.department}
                          </p>
                        </div>
                      </div>

                      {/* Interactive Bookmark Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleSaveJob(job.id, e)}
                        className={cn(
                          "p-1.5 rounded-lg transition-all duration-200 cursor-pointer active:scale-90",
                          isSaved
                            ? "text-[#4F46E5] bg-indigo-50"
                            : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                        )}
                        aria-label={isSaved ? "Remove from saved" : "Save job"}
                      >
                        <Bookmark
                          className={cn(
                            "w-4 h-4 transition-all duration-200",
                            isSaved && "fill-[#4F46E5]"
                          )}
                        />
                      </button>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-base sm:text-[17px] font-semibold text-slate-900 tracking-tight mb-2.5 group-hover:text-[#4F46E5] transition-colors">
                      {job.title}
                    </h3>

                    {/* Metadata: Location, Salary, Employment Type */}
                    <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs mb-4">
                      <div className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-0.5 font-semibold text-slate-900">
                        <span className="text-emerald-600 font-bold">$</span>
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Briefcase className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                        <span>{job.employmentType}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {job.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-md font-medium bg-slate-50 text-slate-600 border border-slate-200/70 transition-colors group-hover:border-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer: Purple Apply Now text link */}
                  <div className="pt-2">
                    <a
                      href="#apply"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-all group-hover:gap-2.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

