import React from "react";
import { cn } from "./Container";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "flat" | "dark" | "interactive";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  padding = "md",
  className,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white border border-[#E2E8F0] shadow-sm rounded-xl",
    elevated: "bg-white border border-[#E2E8F0] shadow-card hover:shadow-elevated transition-all duration-200 rounded-xl",
    interactive:
      "bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#00D1A3]/60 transition-all duration-200 rounded-xl group",
    flat: "bg-slate-50 border border-[#E2E8F0] rounded-xl",
    dark: "bg-[#07152B] border border-slate-700/60 shadow-elevated rounded-xl text-white",
  };

  const paddings = {
    none: "",
    sm: "p-3 sm:p-4",
    md: "p-5 sm:p-6",
    lg: "p-6 sm:p-8",
    xl: "p-6 sm:p-10",
  };

  return (
    <div
      className={cn(variants[variant], paddings[padding], className)}
      {...props}
    >
      {children}
    </div>
  );
}
