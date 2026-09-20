import React from "react";
import { Container } from "@/components/common/Container";
import { cn } from "@/components/common/Container";

export type CTAVariant = "compact" | "primary";

export interface MarketingCTAProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: CTAVariant;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  cardClassName?: string;
  maxWidth?: string;
}

export function MarketingCTA({
  variant = "primary",
  eyebrow,
  title,
  description,
  children,
  footer,
  className,
  cardClassName,
  maxWidth = "max-w-[1200px]",
  ...props
}: MarketingCTAProps) {
  const isCompact = variant === "compact";

  return (
    <div className={cn("relative mx-auto w-full", maxWidth, className)} {...props}>
      <div
        className={cn(
          "relative mx-auto w-full rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#07152B] via-[#082042] to-[#050F1E] border border-slate-700/80 shadow-2xl shadow-[#07152B]/10 overflow-hidden text-center text-white",
          isCompact
            ? "px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-11"
            : "px-6 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-12",
          cardClassName
        )}
      >
        {/* Shared subtle decorative shapes & background pattern */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none rounded-[inherit]" />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00D1A3]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#38BDF8]/10 blur-3xl pointer-events-none" />

        {/* Card Content Container */}
        <div className={cn("relative z-10 mx-auto", isCompact ? "max-w-2xl" : "max-w-2xl")}>
          {/* Eyebrow */}
          {eyebrow && (
            <div className="mb-2.5 sm:mb-3">
              <span className="text-xs sm:text-[13px] font-mono font-bold tracking-widest text-[#00D1A3] bg-[#00D1A3]/10 border border-[#00D1A3]/20 px-3 py-1 rounded-full uppercase inline-block">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2
            className={cn(
              "font-extrabold tracking-tight text-white leading-snug sm:leading-[1.16] text-balance mx-auto",
              isCompact
                ? "text-2xl sm:text-3xl lg:text-[34px] max-w-[680px]"
                : "text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] max-w-[760px]"
            )}
          >
            {title}
          </h2>

          {/* Supporting Description */}
          {description && (
            <div
              className={cn(
                "mt-3 sm:mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed text-pretty mx-auto",
                isCompact ? "max-w-xl text-slate-300 space-y-2" : "max-w-xl"
              )}
            >
              {description}
            </div>
          )}

          {/* Actions / Buttons */}
          {children && (
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5">
              {children}
            </div>
          )}

          {/* Footer / Benefit Row */}
          {footer && (
            <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-slate-800/80">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
