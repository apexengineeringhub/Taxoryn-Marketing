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
    default: "bg-white border border-slate-200/90 shadow-sm rounded-2xl",
    elevated: "bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-200 rounded-2xl",
    interactive:
      "bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#00D1A3]/60 transition-all duration-200 rounded-2xl group",
    flat: "bg-[#F8FAFC] border border-slate-200/80 rounded-2xl",
    dark: "bg-[#07152B] border border-slate-800 shadow-md rounded-2xl text-white",
  };

  const paddings = {
    none: "",
    sm: "p-3.5 sm:p-4",
    md: "p-5 sm:p-6",
    lg: "p-6 sm:p-8",
    xl: "p-7 sm:p-10",
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
