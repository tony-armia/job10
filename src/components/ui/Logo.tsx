import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const heightClass =
    size === "sm"
      ? "h-8 sm:h-9"
      : size === "lg"
      ? "h-14 sm:h-16"
      : "h-[46px] sm:h-[54px]";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/logo.svg"
        alt="Job10"
        width={154}
        height={54}
        priority
        className={`${heightClass} w-auto object-contain ${
          variant === "light" ? "brightness-0 invert opacity-95" : ""
        } transition-transform group-hover:scale-[1.02]`}
      />
    </div>
  );
}
