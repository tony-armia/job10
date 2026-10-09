"use client";

import React from "react";
import Image from "next/image";
import { FeatureItem } from "@/data/landing";
import { Sparkles, ArrowRight, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  // Exact palette tokens mapped from the reference structure
  const cardPalettes = [
    {
      bg: "bg-[#F8F9FE]",
      border: "border-[#E0E4FC]",
      iconBg: "bg-[#ECEEFE]",
      tagText: "text-[#4F46E5]",
      actionText: "text-[#4F46E5] hover:text-[#4338CA]",
      actionCircle: "bg-[#ECEEFE] text-[#4F46E5] hover:bg-[#E0E4FC]",
      icon: <Sparkles className="w-5 h-5 text-[#4F46E5]" />,
    },
    {
      bg: "bg-[#FFF9F5]",
      border: "border-[#FCE6D8]",
      iconBg: "bg-[#FEECE0]",
      tagText: "text-[#EA580C]",
      actionText: "text-[#EA580C] hover:text-[#C2410C]",
      actionCircle: "bg-[#FEECE0] text-[#EA580C] hover:bg-[#FCDDC8]",
      icon: <Zap className="w-5 h-5 text-[#EA580C]" />,
    },
    {
      bg: "bg-[#F4FBF7]",
      border: "border-[#D7F3E3]",
      iconBg: "bg-[#DCFCE7]",
      tagText: "text-[#059669]",
      actionText: "text-[#059669] hover:text-[#047857]",
      actionCircle: "bg-[#DCFCE7] text-[#059669] hover:bg-[#BBF7D0]",
      icon: <Shield className="w-5 h-5 text-[#059669]" />,
    },
  ];

  const palette = cardPalettes[index % cardPalettes.length];

  return (
    <div
      className={cn(
        "rounded-[28px] border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 relative overflow-hidden group cursor-default",
        palette.bg,
        palette.border
      )}
    >
      <div>
        {/* Top Header: Squircle Icon + Category Name */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-110",
              palette.iconBg
            )}
          >
            {palette.icon}
          </div>
          <span className={cn("text-sm sm:text-[15px] font-semibold tracking-tight", palette.tagText)}>
            {feature.tag}
          </span>
        </div>

        {/* Feature Illustration Frame */}
        <div className="relative w-full aspect-[4/3] mt-5 mb-6 rounded-2xl overflow-hidden bg-white/60 border border-slate-100 shadow-xs flex items-center justify-center">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Title & Copy */}
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-snug mb-2.5">
          {feature.title}
        </h3>
        <p className="text-[13.5px] sm:text-sm text-slate-600 leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>

      {/* Bottom Action Row: Refined Single Text Action with Arrow */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <a
          href="#talent"
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-semibold transition-all group/link",
            palette.actionText
          )}
        >
          <span>Explore feature</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
        </a>
      </div>
    </div>
  );
}
