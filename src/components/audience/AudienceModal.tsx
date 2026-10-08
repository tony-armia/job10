"use client";

import React, { useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { X, Users, Briefcase, ArrowRight } from "lucide-react";
import { Audience } from "@/types/audience";

interface AudienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRole: (role: Audience) => void;
}

export function AudienceModal({
  isOpen,
  onClose,
  onSelectRole,
}: AudienceModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audience-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop with soft blur matching design */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-[740px] bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 shadow-2xl shadow-indigo-950/20 border border-slate-100/80 z-10 animate-in zoom-in-95 fade-in duration-200">
        {/* Top Header: Logo on left, Close button on right */}
        <div className="flex items-center justify-between mb-8">
          {/* Global Logo */}
          <div className="flex items-center">
            <Logo size="sm" />
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close audience selection modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center max-w-md mx-auto mb-8 sm:mb-9">
          <h2
            id="audience-modal-title"
            className="text-2xl sm:text-[32px] font-black text-slate-900 tracking-tight leading-tight mb-2"
          >
            What brings you here?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Choose how you&apos;d like to get started with Job10.
          </p>
        </div>

        {/* Two Audience Selection Cards Side-by-Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {/* Left Card: Recruiter ("I'm Hiring") */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onSelectRole("recruiter")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectRole("recruiter");
              }
            }}
            className="group relative bg-[#F5F3FF] hover:bg-[#EFEAFF] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer border border-indigo-100/80 hover:border-indigo-300 hover:shadow-md overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {/* Top-Right Decorative Organic Pastel Blob */}
            <div
              className="absolute -top-6 -right-6 w-28 h-28 bg-[#EBE5FE] rounded-full blur-xs pointer-events-none transition-transform group-hover:scale-110"
              aria-hidden="true"
            />

            <div>
              {/* Top Icon Box */}
              <div className="relative w-12 h-12 rounded-xl bg-[#EDE8FF] text-[#4F46E5] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1.5">
                I&apos;m Hiring
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                Find the right talent for your team.
              </p>
            </div>

            {/* Bottom CTA Row */}
            <div className="pt-2 flex items-center justify-between border-t border-indigo-100/50">
              <span className="text-sm font-bold text-[#4F46E5] group-hover:text-[#4338CA] transition-colors">
                Find Talent
              </span>
              <span className="w-8 h-8 rounded-full bg-[#EDE8FF] text-[#4F46E5] flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Right Card: Jobseeker ("I'm Looking for a Job") */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onSelectRole("jobseeker")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectRole("jobseeker");
              }
            }}
            className="group relative bg-[#FFF6F1] hover:bg-[#FEEFEA] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer border border-orange-100/80 hover:border-orange-300 hover:shadow-md overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            {/* Top-Right Decorative Organic Pastel Blob */}
            <div
              className="absolute -top-6 -right-6 w-28 h-28 bg-[#FFE8DC] rounded-full blur-xs pointer-events-none transition-transform group-hover:scale-110"
              aria-hidden="true"
            />

            <div>
              {/* Top Icon Box */}
              <div className="relative w-12 h-12 rounded-xl bg-[#FFEDE3] text-[#EA580C] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1.5">
                I&apos;m Looking for a Job
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                Discover opportunities that match your skills and goals.
              </p>
            </div>

            {/* Bottom CTA Row */}
            <div className="pt-2 flex items-center justify-between border-t border-orange-100/50">
              <span className="text-sm font-bold text-[#EA580C] group-hover:text-[#C2410C] transition-colors">
                Explore Jobs
              </span>
              <span className="w-8 h-8 rounded-full bg-[#FFEDE3] text-[#EA580C] flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Footer: Just browsing? Explore as Guest */}
        <div className="text-center text-xs sm:text-sm text-slate-500">
          <span>Just browsing? </span>
          <button
            type="button"
            onClick={() => onSelectRole("guest")}
            className="font-bold text-[#4F46E5] hover:text-[#4338CA] hover:underline transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            <span>Explore as Guest</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
