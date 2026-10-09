"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { AudienceCard } from "@/components/audience/AudienceCard";
import { Container } from "@/components/ui/Container";

interface AudienceSelectorProps {
  onSelectRole: (role: "recruiter" | "jobseeker") => void;
  onExploreGeneral?: () => void;
}

export function AudienceSelector({
  onSelectRole,
  onExploreGeneral,
}: AudienceSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8FF] via-white to-[#FDFBFE] flex flex-col justify-between py-8 sm:py-12 px-4">
      {/* 1. Header with Job10 Logo */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between pb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Job
            </span>
            <span className="text-2xl font-black tracking-tight text-indigo-600">
              10
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 ml-0.5" />
          </div>
        </div>
      </header>

      {/* 2. Main Content: Heading & Two Connected Selection Cards */}
      <main className="w-full max-w-6xl mx-auto my-auto py-4">
        {/* Intentionally Connected Headline (no excessive empty spacing) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100/80 px-3.5 py-1.5 rounded-full text-xs font-bold text-indigo-600 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to Job10</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-4">
            What brings you to Job10?
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Your next opportunity or your next great hire starts here.
          </p>
        </div>

        {/* Two Large Equal-Height Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: Recruiter */}
          <AudienceCard
            type="recruiter"
            title="I'm Hiring"
            description="Discover qualified candidates, find the right match, and build your team faster."
            ctaText="Find Talent"
            onSelect={() => onSelectRole("recruiter")}
          />

          {/* Right Card: Jobseeker */}
          <AudienceCard
            type="jobseeker"
            title="I'm Looking for a Job"
            description="Find opportunities that match your skills, experience, and career goals."
            ctaText="Explore Jobs"
            onSelect={() => onSelectRole("jobseeker")}
          />
        </div>
      </main>

      {/* 3. Subtle Footer Note */}
      <footer className="w-full max-w-7xl mx-auto text-center pt-8 text-xs text-slate-400">
        <p>
          You can switch your experience anytime from the header • © 2026 Job10 Inc.
        </p>
      </footer>
    </div>
  );
}
