"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HEADER_CONFIG } from "@/config/landingConfig";
import { useAudience } from "@/context/AudienceContext";
import { Menu, X, ArrowRight, ArrowLeftRight } from "lucide-react";

export function Header() {
  const { audience, openModal } = useAudience();
  const config = HEADER_CONFIG[audience] || HEADER_CONFIG.guest;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getModeLabel = () => {
    switch (audience) {
      case "recruiter":
        return "Recruiter";
      case "jobseeker":
        return "Jobseeker";
      default:
        return "Guest";
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100/90 transition-all duration-200">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Global Logo */}
          <Link href="/" className="flex items-center group">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation dynamically customized per audience */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/60">
            {config.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-white rounded-full transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Group: Unobtrusive Switch Experience & Audience CTA */}
          <div className="flex items-center gap-3">
            {/* Small Unobtrusive Switch Experience Trigger */}
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-[#4F46E5] border border-slate-200/80 transition-colors cursor-pointer text-slate-700"
              title="Click to switch role or audience mode"
            >
              <ArrowLeftRight className="w-3 h-3 text-slate-400 group-hover:text-[#4F46E5]" />
              <span className="hidden sm:inline text-slate-500">Mode:</span>
              <span className="font-bold text-slate-900">{getModeLabel()}</span>
            </button>

            {/* Audience Primary CTA */}
            <a href={config.ctaHref} className="hidden sm:block">
              <Button
                size="md"
                className={`rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-all group font-semibold ${
                  audience === "jobseeker"
                    ? "bg-[#EA580C] hover:bg-[#C2410C] text-white"
                    : "bg-[#4F46E5] hover:bg-[#4338CA] text-white"
                }`}
              >
                <span>{config.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col gap-2">
              {config.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-[#4F46E5] hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="px-4 py-2.5 text-left text-sm font-semibold text-[#4F46E5] bg-indigo-50/60 rounded-xl flex items-center justify-between"
              >
                <span>Switch Experience (Current: {getModeLabel()})</span>
                <ArrowLeftRight className="w-4 h-4" />
              </button>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 px-2">
                <a href={config.ctaHref} className="w-full">
                  <Button
                    className={`w-full justify-center ${
                      audience === "jobseeker"
                        ? "bg-[#EA580C] hover:bg-[#C2410C]"
                        : "bg-[#4F46E5] hover:bg-[#4338CA]"
                    }`}
                  >
                    {config.ctaText}
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
