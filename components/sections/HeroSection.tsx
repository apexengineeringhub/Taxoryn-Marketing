"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ProductPreview } from "@/components/marketing/ProductPreview";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/config/site";
import {
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-white border-b border-slate-200/80">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* LEFT COLUMN: Headline, Narrative, CTAs & Value Proof (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left pt-1 min-w-0">
            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.45rem] xl:text-[2.75rem] font-bold text-[#07152B] tracking-tight leading-[1.12] text-balance">
              <span>{t.hero.headlinePrefix} </span>
              <span className="text-[#008766]">{t.hero.headlineSuffix}</span>
            </h1>

            {/* Visual Workflow Highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              {["Clients", "Compliance", "Documents", "Workflows"].map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-[#07152B] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                  {pill}
                </span>
              ))}
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              {t.hero.description}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                href={siteConfig.links.joinEarlyAccess}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="justify-center shadow-md shadow-[#00D1A3]/20"
              >
                {t.hero.getStarted}
              </Button>

              <Button
                href="#demo-video"
                variant="outline"
                size="lg"
                icon={Play}
                iconPosition="left"
                className="justify-center"
              >
                {t.hero.watchDemo}
              </Button>
            </div>

            {/* Active Development Grounded Notice */}
            <p className="text-xs text-slate-500 pt-1 leading-relaxed">
              <a
                href="#origin-story"
                className="hover:text-[#008766] transition-colors inline-flex items-center gap-1 font-medium text-slate-600 hover:underline underline-offset-2"
              >
                <span>{t.hero.devNote || "Built from a real tax-practice problem."}</span>
                <ArrowRight className="w-3 h-3 text-[#00D1A3]" />
              </a>
            </p>

            {/* 3 Concise Proof Points Below CTA */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#334155] font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                <span>{t.hero.proofPractice}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                <span>{t.hero.proofCompliance}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                <span>{t.hero.proofNetwork}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean, Prominent Taxoryn Product Dashboard Preview (7 cols) */}
          <div className="lg:col-span-7 relative min-w-0">
            <ProductPreview />
          </div>
        </div>

        {/* Compact Trust Strip Below Hero */}
        <div className="mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              {t.hero.trustTitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                {t.hero.trustSolo}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                {t.hero.trustSmallFirm}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                {t.hero.trustGrowing}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                {t.hero.trustBusiness}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
