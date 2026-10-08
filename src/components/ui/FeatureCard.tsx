import React from "react";
import Image from "next/image";
import { FeatureItem } from "@/data/landing";

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-all duration-200">
      {/* Visual illustration */}
      <div className="relative w-full aspect-square max-h-64 sm:max-h-72 mb-6 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
          className="object-cover transition-transform duration-300 hover:scale-102"
        />
      </div>

      {/* Content */}
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2.5">
          {feature.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
