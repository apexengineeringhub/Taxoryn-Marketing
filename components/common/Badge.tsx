import React from "react";
import { cn } from "./Container";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "navy" | "teal" | "emerald" | "cyan" | "outline" | "subtle";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "teal",
  size = "md",
  className,
}: BadgeProps) {
  const variants = {
    teal: "bg-[#00D1A3]/10 text-[#009E77] border border-[#00D1A3]/30",
    navy: "bg-[#082E5B]/10 text-[#082E5B] border border-[#082E5B]/20",
    primary: "bg-[#082E5B] text-white border border-transparent",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    cyan: "bg-sky-50 text-sky-700 border border-sky-200",
    outline: "bg-transparent text-[#475569] border border-[#CBD5E1]",
    subtle: "bg-slate-100 text-[#475569] border border-slate-200",
  };

  const sizes = {
    sm: "text-[11px] font-semibold px-2 py-0.5 rounded tracking-wide",
    md: "text-xs font-semibold px-3 py-1 rounded-full tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 uppercase font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
