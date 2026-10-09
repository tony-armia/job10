"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HEADER_CONFIG } from "@/config/landingConfig";
import { useAudience } from "@/context/AudienceContext";
import { Menu, X, ArrowRight, Users, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { audience, openModal } = useAudience();
  const config = HEADER_CONFIG[audience] || HEADER_CONFIG.guest;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getModeLabel = () => {
    switch (audience) {
      case "jobseeker":
        return "Jobseeker";
      case "recruiter":
      default:
        return "Recruiter";
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100/90 transition-all duration-200">
      <Container>
        <div className="flex items-center justify-between h-[76px] sm:h-[84px]">
          {/* Global Logo with Tagline */}
          <Link href="/" className="flex items-center shrink-0 group">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Capsule Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-white border border-slate-200/90 shadow-xs rounded-full p-1.5">
            {config.links.map((link) => {
              const isActive = link.label === "Home";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "rounded-full transition-all duration-150 text-sm",
                    isActive
                      ? "px-5 py-2 font-semibold text-[#4F46E5] bg-[#EEF0FF]"
                      : "px-4 py-2 font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50/80"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group: Role Selector Pill & Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Viewing as Role Selector Pill */}
            <button
              type="button"
              onClick={openModal}
              className="hidden sm:inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:bg-slate-50/60 transition-all cursor-pointer group active:scale-95"
              title="Click to switch role or audience mode"
            >
              <Users className="w-4 h-4 text-slate-400 group-hover:text-slate-600 shrink-0 transition-colors" />
              <span className="w-px h-5 bg-slate-200" aria-hidden="true" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 font-normal leading-tight">Viewing as</span>
                <span className="text-xs font-semibold text-slate-900 leading-tight">{getModeLabel()}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 ml-0.5 shrink-0 transition-transform group-hover:translate-y-0.5" />
            </button>

            {/* Audience Primary CTA */}
            <a href={config.ctaHref} className="hidden sm:inline-flex">
              <Button
                size="md"
                className="rounded-full px-6 py-2.5 h-[42px] shadow-sm hover:shadow-md transition-all group font-semibold text-sm inline-flex items-center gap-2 cursor-pointer bg-[#4F46E5] hover:bg-[#4338CA] text-white active:scale-95"
              >
                <span>{config.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none cursor-pointer"
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
          <div className="lg:hidden py-4 border-t border-slate-100 bg-white animate-in fade-in slide-in-from-top-2 duration-150">
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
                className="px-4 py-2.5 text-left text-sm font-semibold text-slate-800 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-200/80 mt-1"
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-slate-500" />
                  <span>Viewing as <strong className="text-slate-950 font-bold">{getModeLabel()}</strong></span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 px-2">
                <a href={config.ctaHref} className="w-full">
                  <Button
                    className="w-full justify-center bg-[#4F46E5] hover:bg-[#4338CA] text-white"
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
