import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HERO_DATA } from "@/data/landing";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-6 flex flex-col items-start max-w-xl">
            {/* Metric Callout Card */}
            <div className="inline-block p-4 sm:p-5 rounded-2xl border border-indigo-100 bg-indigo-50/40 mb-6">
              <span className="text-4xl sm:text-5xl font-black text-[#4F46E5] tracking-tight block">
                {HERO_DATA.metricNumber}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              {HERO_DATA.title}
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              {HERO_DATA.description}
            </p>

            {/* Jobs counter link */}
            <div className="mb-8">
              <a
                href="#jobs"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#4F46E5] transition-colors"
              >
                <span>{HERO_DATA.jobsCountText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#4F46E5]" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="rounded-full px-6 gap-2.5 shadow-sm group"
              >
                <span>{HERO_DATA.ctaSeeker}</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-6 gap-2.5 text-slate-700 border-slate-300 hover:border-slate-400 group"
              >
                <span>{HERO_DATA.ctaRecruiter}</span>
                <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </span>
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual with Pagination Indicator */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100/70 border border-slate-100">
              <Image
                src={HERO_DATA.image}
                alt="Two professionals in a job interview and collaboration meeting"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Side pagination indicator dots pill matching screenshot */}
            <div className="hidden lg:flex flex-col items-center gap-2 absolute -right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-2 py-3 rounded-full shadow-md border border-slate-200/80">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
