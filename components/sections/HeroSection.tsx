"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ProductPreview } from "@/components/marketing/ProductPreview";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/config/site";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
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
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-[#082E5B]">
              <span className="w-2 h-2 rounded-full bg-[#00D1A3]" />
              <span>TAX PRACTICE MANAGEMENT PLATFORM</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.45rem] xl:text-[2.75rem] font-bold text-[#07152B] tracking-tight leading-[1.14] text-balance">
              <span>Your Tax Practice. </span>
              <span className="text-[#008766]">Better Organized.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
              Manage clients, compliance work, documents and practice operations in one connected workspace built for modern tax professionals.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                href={siteConfig.links.joinEarlyAccess}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="justify-center shadow-md shadow-[#00D1A3]/20 font-bold"
              >
                {t.hero.getStarted}
              </Button>

              <Button
                href="#demo-video"
                variant="outline"
                size="lg"
                icon={Play}
                iconPosition="left"
                className="justify-center font-semibold"
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
                <span>Practice Management</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                <span>Statutory Compliance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                <span>Client Document Hub</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean, Prominent Taxoryn Product Dashboard Preview (7 cols) */}
          <div className="lg:col-span-7 relative min-w-0">
            {/* Supporting Workflow Strip Integrated with Product Preview */}
            <div className="flex items-center gap-1.5 mb-2.5 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">Workspaces:</span>
              {["Clients", "Compliance", "Documents", "Operations"].map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-0.5 rounded-full bg-slate-100/90 border border-slate-200 text-[11px] font-bold text-[#07152B] flex items-center gap-1.5 whitespace-nowrap shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#009E77]" />
                  {pill}
                </span>
              ))}
            </div>
            <ProductPreview />
          </div>
        </div>

        {/* Compact Trust Strip Below Hero */}
        <div className="mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span className="font-semibold text-slate-700 uppercase tracking-wider text-[11px]">
              PURPOSE-BUILT FOR INDIAN PRACTICES
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                Independent Practitioners
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                Chartered Accountant (CA) Firms
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                Tax Advocates & Consultants
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
