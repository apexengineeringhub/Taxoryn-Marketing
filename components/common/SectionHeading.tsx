import React from "react";
import { cn } from "./Container";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "primary" | "navy" | "teal" | "emerald" | "cyan" | "outline" | "subtle";
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "teal",
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-8 sm:mb-10",
        alignClasses[align],
        className
      )}
    >
      {badge && (
        <div className="mb-2 sm:mb-2.5">
          <Badge
            variant={isDark && badgeVariant === "teal" ? "teal" : badgeVariant}
            className={isDark ? "bg-[#00D1A3]/15 text-[#00FFC2] border-[#00D1A3]/30" : ""}
          >
            {badge}
          </Badge>
        </div>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.5rem] font-bold tracking-tight text-balance leading-[1.16]",
          isDark ? "text-white" : "text-[#07152B]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-[17px] leading-relaxed text-pretty max-w-2xl",
            isDark ? "text-slate-300" : "text-[#475569]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
