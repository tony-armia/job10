"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RECRUITER_HERO_CONFIG } from "@/config/landingConfig";
import { ArrowRight, Users } from "lucide-react";

export function RecruiterHero() {
  return (
    <section className="relative pt-4 sm:pt-6 bg-white overflow-hidden">
      {/* Full-bleed authentic herobg background containing ambient lilac/pink arches & tablet */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none flex justify-center items-start overflow-hidden -z-0 pt-6 sm:pt-10 md:pt-14">
        <div className="relative w-full h-full max-w-[1672px]">
          <Image
            src="/images/herobg.png"
            alt="Job10 talent matching platform"
            fill
            priority
            unoptimized
            className="object-cover sm:object-contain object-top"
          />
        </div>
      </div>

      <Container className="relative z-10">
        {/* Centered Header Block: Scaled with exact proportions from reference */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-slate-900 tracking-tight leading-[1.08] mb-3">
            Your next great hire is<br className="hidden sm:inline" />{" "}
            <span className="text-[#4F46E5]">closer than you think.</span>
          </h1>

          {/* Subtitle strictly 2 lines */}
          <p className="text-sm sm:text-base md:text-[17px] text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-5 sm:mb-6">
            The modern talent platform loved by recruiters and hiring teams — with{" "}
            <span className="relative inline-block font-bold text-slate-900 px-2 py-0.5">
              <span className="relative z-10">AI at the core.</span>
              <span
                className="absolute inset-0 rounded-full -rotate-1 scale-105 -z-0 opacity-90 bg-[#FCE0E7]"
                aria-hidden="true"
              />
            </span>
            <br className="hidden sm:inline" />{" "}
            Reduce manual screening and focus on people worth meeting.
          </p>

          {/* CTAs: Purple primary button with Users icon + inline 'See how it works' link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href={RECRUITER_HERO_CONFIG.primaryCtaHref}>
              <Button
                size="md"
                className="rounded-full px-6 py-3 text-sm sm:text-base font-semibold bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all group cursor-pointer inline-flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-white/90" />
                <span>{RECRUITER_HERO_CONFIG.primaryCtaText}</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center ml-0.5 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Button>
            </a>

            <a
              href={RECRUITER_HERO_CONFIG.secondaryCtaHref}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group"
            >
              <span>{RECRUITER_HERO_CONFIG.secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Proportional spacer that reveals the tablet interface in herobg.png with ample clearance */}
        <div
          className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Client Logos Marquee (Teamtailor pattern) */}
        <div className="pt-8 sm:pt-12 pb-4 border-t border-slate-100/90 text-center relative z-10 bg-white">
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
            <span className="text-base sm:text-lg font-serif font-black tracking-wider text-slate-800 uppercase">
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
