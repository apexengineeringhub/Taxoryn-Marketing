import React from "react";
import Link from "next/link";
import { cn } from "./Container";
import { LucideIcon } from "lucide-react";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "teal-outline";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    className,
    icon: Icon,
    iconPosition = "right",
    children,
    ...props
  },
  ref
) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-[#00D1A3] text-[#07152B] font-semibold hover:bg-[#00B388] shadow-sm hover:shadow active:scale-[0.98]",
    secondary:
      "bg-[#082E5B] text-white font-semibold hover:bg-[#07152B] shadow-sm hover:shadow active:scale-[0.98]",
    dark:
      "bg-[#07152B] text-white font-semibold hover:bg-[#070C1A] border border-white/10 active:scale-[0.98]",
    outline:
      "bg-white text-[#0F172A] border border-[#CBD5E1] hover:bg-slate-50 hover:border-[#082E5B] active:scale-[0.98]",
    "teal-outline":
      "bg-transparent text-[#00D1A3] border border-[#00D1A3]/40 hover:bg-[#00D1A3]/10 hover:border-[#00D1A3] active:scale-[0.98]",
    ghost:
      "text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5 font-medium",
    xl: "text-lg px-8 py-3.5 gap-3 font-semibold",
  };

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...linkProps } = props;
    const isExternal =
      external || href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});
