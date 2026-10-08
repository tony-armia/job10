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
      ? "h-7 sm:h-8"
      : size === "lg"
      ? "h-10 sm:h-11"
      : "h-8 sm:h-9";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/logo.svg"
        alt="Job10"
        width={140}
        height={49}
        priority
        className={`${heightClass} w-auto object-contain ${
          variant === "light" ? "brightness-0 invert opacity-95" : ""
        } transition-transform group-hover:scale-[1.02]`}
      />
    </div>
  );
}
