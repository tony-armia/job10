"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GUEST_HERO_CONFIG } from "@/config/landingConfig";
import { ArrowRight, Briefcase, Users } from "lucide-react";

export function GuestHero() {
  return (
    <section className="relative pt-6 sm:pt-8 pb-16 lg:pb-24 bg-white overflow-hidden">
      <Container>
        {/* Above-the-fold Centered Headline Block (Compact for immediate image visibility) */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          {/* Large Expressive Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-slate-900 tracking-tight leading-[1.06] mb-3 sm:mb-4">
            Better matches.{" "}
            <span className="relative inline-block">
              <span className="text-[#192CE7]">Bigger opportunities.</span>
              <svg
                className="absolute -bottom-1.5 left-0 w-full text-indigo-200/80 -z-10"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7C50 2 150 2 197 7"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            {GUEST_HERO_CONFIG.description}
          </p>

          {/* CTA Group: Primary Purple + Subordinate Outlined Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6 sm:mb-8">
            <a href={GUEST_HERO_CONFIG.primaryCtaHref}>
              <Button
                size="md"
                className="rounded-full px-7 py-3.5 h-12 text-sm sm:text-base font-semibold bg-[#192CE7] hover:bg-[#1324C7] text-white shadow-sm hover:shadow-md transition-all group w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-indigo-200" />
                <span>{GUEST_HERO_CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>

            <a href={GUEST_HERO_CONFIG.secondaryCtaHref}>
              <Button
                size="md"
                variant="outline"
                className="rounded-full px-7 py-3.5 h-12 text-sm sm:text-base font-semibold border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-all group w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                <span>{GUEST_HERO_CONFIG.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Centerpiece: Authentic Tablet Showcase with ambient pastel arches (herobg.png) */}
        <div className="relative max-w-5xl mx-auto mt-8 sm:mt-12 lg:mt-16 pb-6 flex items-center justify-center">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden drop-shadow-2xl group">
            <Image
              src="/images/herobg.png"
              alt="Hands holding a tablet displaying Job10 recruitment pipeline with candidate statuses: Suggested, Inbox, Interviewing, and Hired."
              width={1672}
              height={941}
              priority
              unoptimized
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Ecosystem Logos */}
        <div className="pt-10 sm:pt-14 pb-4 border-t border-slate-100/90 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-500 mb-6 tracking-wide">
            Trusted by modern engineering teams and ambitious professionals.
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
