"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Audience } from "@/types/audience";
import { HERO_CONFIG } from "@/config/landingConfig";
import { useAudience } from "@/context/AudienceContext";
import { ArrowRight, Briefcase, Users } from "lucide-react";

interface HeroSectionProps {
  forcedAudience?: Audience;
}

export function HeroSection({ forcedAudience }: HeroSectionProps) {
  const { audience: currentAudience } = useAudience();
  const audience = forcedAudience || currentAudience;
  const config = HERO_CONFIG[audience] || HERO_CONFIG.guest;

  const isRecruiter = audience === "recruiter";
  const isJobseeker = audience === "jobseeker";

  return (
    <section className="relative pt-6 sm:pt-8 pb-16 lg:pb-24 bg-white overflow-hidden">
      <Container>
        {/* Top Centered Headline Block */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          {/* Large Expressive Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.06] mb-3 sm:mb-4">
            {config.headline}
          </h1>

          {/* Subtitle with signature organic highlight brush */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-5 sm:mb-6">
            {config.tagline}{" "}
            <span className="relative inline-block font-bold text-slate-900 px-2 py-0.5">
              <span className="relative z-10">{config.highlightWord}</span>
              <span
                className={`absolute inset-0 rounded-full -rotate-1 scale-105 -z-0 opacity-90 ${
                  isJobseeker ? "bg-[#FFE8DE]" : "bg-[#FCE0E7]"
                }`}
                aria-hidden="true"
              />
            </span>
            .
          </p>

          {/* Centered CTAs with SAME visual styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6 sm:mb-8">
            <a href={config.primaryCtaHref}>
              <Button
                size="lg"
                className="rounded-full px-7 py-3.5 text-base font-semibold shadow-md transition-all group w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-indigo-500/20"
              >
                {isRecruiter ? (
                  <Users className="w-4 h-4 mr-1 text-indigo-200" />
                ) : (
                  <Briefcase className="w-4 h-4 mr-1 text-white/80" />
                )}
                <span>{config.primaryCtaText}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center ml-1 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Button>
            </a>

            {config.secondaryCtaText && config.secondaryCtaHref && (
              <a href={config.secondaryCtaHref}>
                <Button
                  size="lg"
                  className="rounded-full px-7 py-3.5 text-base font-semibold shadow-md transition-all group w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-indigo-500/20"
                >
                  {isRecruiter ? (
                    <Briefcase className="w-4 h-4 mr-1 text-indigo-200" />
                  ) : (
                    <Users className="w-4 h-4 mr-1 text-indigo-200" />
                  )}
                  <span>{config.secondaryCtaText}</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center ml-1 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Centerpiece: Authentic Tablet Showcase with ambient pastel arches (herobg.png) */}
        <div className="relative max-w-5xl mx-auto mt-8 sm:mt-12 lg:mt-16 pb-6 flex items-center justify-center">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden drop-shadow-2xl group">
            <Image
              src="/images/herobg.png"
              alt="Hands holding a tablet displaying Job10 recruitment pipeline"
              width={1672}
              height={941}
              priority
              unoptimized
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="pt-10 sm:pt-14 pb-4 border-t border-slate-100/90 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-500 mb-6 tracking-wide">
            Trusted by modern engineering teams and ambitious companies worldwide.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 hover:opacity-100 transition-opacity">
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-slate-800 lowercase">
              bugaboo
            </span>
            <span className="text-lg sm:text-xl font-black tracking-wider text-slate-800 uppercase">
              FOOTASYLUM.
            </span>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800 uppercase">
              GREENPEACE
            </span>
            <span className="text-base sm:text-lg font-black tracking-widest text-slate-800 uppercase">
              PORSCHE
            </span>
            <span className="text-lg sm:text-xl font-black tracking-tight text-slate-800 uppercase">
              FIVE GUYS
            </span>
            <span className="text-base sm:text-lg font-black tracking-wider text-slate-800 uppercase">
              BRAVISSIMO
            </span>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-800">
              Huel<sup>®</sup>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
