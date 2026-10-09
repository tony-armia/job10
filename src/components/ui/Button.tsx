import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#192CE7] text-white hover:bg-[#1324C7] shadow-sm hover:shadow focus-visible:ring-[#192CE7]",
    secondary:
      "bg-indigo-50 text-[#192CE7] hover:bg-indigo-100 focus-visible:ring-[#192CE7]",
    outline:
      "border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 hover:border-slate-300 focus-visible:ring-slate-400",
    ghost:
      "text-slate-700 hover:text-slate-950 hover:bg-slate-100/60 focus-visible:ring-slate-400",
    white:
      "bg-white text-[#192CE7] hover:bg-slate-100 shadow-sm focus-visible:ring-white",
  };

  const sizes = {
    sm: "text-xs px-3.5 h-8 gap-1.5",
    md: "text-sm px-5 h-10 gap-2",
    lg: "text-base px-7 h-12 gap-2",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
