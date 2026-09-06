"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-[#07152B] relative overflow-hidden text-white border-t border-slate-800">
      {/* Background glow & subtle patterns */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00D1A3]/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3] uppercase inline-block">
            {t.finalCTA.badge}
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
            {t.finalCTA.title}
          </h2>

          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
              {t.finalCTA.subtitle}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={siteConfig.links.joinEarlyAccess}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto px-8 py-3.5 font-bold shadow-lg shadow-[#00D1A3]/25"
            >
              {t.finalCTA.getStarted}
            </Button>

            <Button
              href="#demo-video"
              variant="dark"
              size="lg"
              icon={Calendar}
              iconPosition="left"
              className="w-full sm:w-auto px-8 py-3.5 font-semibold"
            >
              {t.finalCTA.bookDemo}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
