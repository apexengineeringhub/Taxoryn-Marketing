import React from "react";
import { Container } from "./Container";
import { cn } from "./Container";

export type SectionSpacing = "compact" | "default" | "large" | "feature" | "hero" | "cta" | "none";
export type SectionBackground = "white" | "light" | "navy" | "transparent";
export type ContainerSize = "default" | "narrow" | "wide" | "full" | "none";

export interface MarketingSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  background?: SectionBackground;
  containerSize?: ContainerSize;
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "header" | "footer";
}

export function MarketingSection({
  children,
  spacing = "default",
  background = "transparent",
  containerSize = "default",
  borderTop = false,
  borderBottom = false,
  className,
  containerClassName,
  as: Component = "section",
  ...props
}: MarketingSectionProps) {
  const spacingClasses: Record<SectionSpacing, string> = {
    compact: "py-8 sm:py-10 lg:py-12",
    default: "py-10 sm:py-12 lg:py-14",
    large: "py-12 sm:py-16 lg:py-20",
    feature: "py-12 sm:py-16 lg:py-20",
    hero: "pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20",
    cta: "pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-12",
    none: "",
  };

  const backgroundClasses: Record<SectionBackground, string> = {
    white: "bg-white",
    light: "bg-[#F8FAFC]",
    navy: "bg-[#07152B] text-white",
    transparent: "",
  };

  const borderClasses = cn(
    borderTop && "border-t border-slate-200/80",
    borderBottom && "border-b border-slate-200/80"
  );

  return (
    <Component
      className={cn(
        "relative w-full",
        backgroundClasses[background],
        spacingClasses[spacing],
        borderClasses,
        className
      )}
      {...props}
    >
      {containerSize === "none" ? (
        children
      ) : (
        <Container size={containerSize} className={containerClassName}>
          {children}
        </Container>
      )}
    </Component>
  );
}
