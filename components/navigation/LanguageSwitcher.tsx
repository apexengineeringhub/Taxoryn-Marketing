"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SupportedLanguage } from "@/lib/i18n/types";
import { cn } from "@/components/common/Container";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "header" | "mobile" | "footer";
}

export function LanguageSwitcher({
  className = "",
  variant = "header",
}: LanguageSwitcherProps) {
  const { language, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const currentOption =
    availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  // Mobile drawer variant: inline segment toggle or clean list
  if (variant === "mobile") {
    return (
      <div className={cn("flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg", className)}>
        {availableLanguages.map((opt) => {
          const isActive = opt.code === language;
          return (
            <button
              key={opt.code}
              type="button"
              onClick={() => setLanguage(opt.code)}
              aria-pressed={isActive}
              className={cn(
                "flex-1 py-1.5 px-3 text-xs font-semibold rounded-md transition-all text-center",
                isActive
                  ? "bg-white text-[#07152B] shadow-2xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {opt.nativeLabel}
            </button>
          );
        })}
      </div>
    );
  }

  // Header desktop dropdown variant
  return (
    <div ref={containerRef} className={cn("relative inline-block text-left", className)}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Current language: ${currentOption.label}. Select language`}
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3]",
          isOpen
            ? "bg-slate-100 text-[#07152B] border-slate-300"
            : "text-slate-700 hover:text-[#07152B] hover:bg-slate-100/70 border-slate-200"
        )}
      >
        <Globe className="w-3.5 h-3.5 text-slate-500" />
        <span className="uppercase font-bold tracking-wide">
          {currentOption.code}
        </span>
        <ChevronDown
          className={cn(
            "w-3 h-3 text-slate-400 transition-transform duration-150",
            isOpen && "rotate-180 text-slate-600"
          )}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 mt-1.5 w-36 rounded-xl bg-white shadow-xl border border-slate-200/90 py-1.5 z-50 focus:outline-none animate-in fade-in zoom-in-95 duration-100"
        >
          {availableLanguages.map((opt) => {
            const isSelected = opt.code === language;
            return (
              <button
                key={opt.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.code)}
                className={cn(
                  "w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold transition-colors text-left",
                  isSelected
                    ? "bg-[#082E5B]/5 text-[#082E5B] font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#07152B]"
                )}
              >
                <span>{opt.nativeLabel}</span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#00D1A3] font-bold stroke-[2.5]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
