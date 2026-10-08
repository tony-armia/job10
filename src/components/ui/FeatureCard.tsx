import React from "react";
import Image from "next/image";
import { FeatureItem } from "@/data/landing";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  // Teamtailor-inspired distinct pastel palettes and card accents
  const cardPalettes = [
    {
      bg: "bg-[#F5F3FF]", // Soft Lavender
      border: "border-indigo-200/80",
      tagBg: "bg-indigo-100 text-indigo-700",
      accentText: "text-indigo-600",
      statBox: "bg-white/80 border-indigo-100",
      icon: <Sparkles className="w-3.5 h-3.5 text-indigo-600" />,
    },
    {
      bg: "bg-[#FFF5F1]", // Warm Blush Peach
      border: "border-orange-200/80",
      tagBg: "bg-orange-100 text-orange-800",
      accentText: "text-[#EA580C]",
      statBox: "bg-white/80 border-orange-100",
      icon: <Zap className="w-3.5 h-3.5 text-orange-600" />,
    },
    {
      bg: "bg-[#F0FDF4]", // Soft Mint Green
      border: "border-emerald-200/80",
      tagBg: "bg-emerald-100 text-emerald-800",
      accentText: "text-[#059669]",
      statBox: "bg-white/80 border-emerald-100",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />,
    },
  ];

  const palette = cardPalettes[index % cardPalettes.length];

  return (
    <div
      className={cn(
        "rounded-3xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 card-soft shadow-xs hover:shadow-lg relative overflow-hidden",
        palette.bg,
        palette.border
      )}
    >
      <div>
        {/* Top Tag & Stat Pill */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full",
              palette.tagBg
            )}
          >
            {palette.icon}
            <span>{feature.tag}</span>
          </span>

          <div
            className={cn(
              "px-3 py-1 rounded-xl text-right border backdrop-blur-xs",
              palette.statBox
            )}
          >
            <span className="text-xs font-black text-slate-900 block leading-tight">
              {feature.highlightStat}
            </span>
            <span className="text-[10px] text-slate-500 font-medium block">
              {feature.highlightLabel}
            </span>
          </div>
        </div>

        {/* Feature Illustration Frame */}
        <div className="relative w-full aspect-square max-h-64 sm:max-h-72 mb-7 rounded-2xl overflow-hidden bg-white/70 border border-black/5 shadow-inner flex items-center justify-center group">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
            className="object-cover transition-transform duration-300 group-hover:scale-103"
          />
        </div>

        {/* Title & Copy */}
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
          {feature.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
          {feature.description}
        </p>
      </div>

      {/* Feature Action Link */}
      <div className="pt-4 border-t border-black/5 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 group-hover:text-indigo-600 transition-colors">
          <span>Explore feature</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
        <CheckCircle2 className="w-4 h-4 text-slate-400" />
      </div>
    </div>
  );
}
