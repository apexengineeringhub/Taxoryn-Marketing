"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { CheckCircle2, ArrowRight, Users2 } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export function SolutionSmallFirmClientContent() {
  const { t } = useLanguage();
  const page = t.pages.solutionsPages.smallFirm;

  return (
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge={page.badge}
          badgeVariant="teal"
          title={page.title}
          description={page.description}
        />

        {/* Small Firm Team Review Matrix Card */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#07152B] border border-slate-700 shadow-xl text-white space-y-4 mb-8 sm:mb-10">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <div className="flex items-center gap-2">
              <Users2 className="w-5 h-5 text-sky-400" />
              <div>
                <span className="font-bold text-sm block">{page.visualTitle}</span>
                <span className="text-xs text-slate-400">{page.visualSub}</span>
              </div>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-mono">
              {page.visualTag}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
              <div className="text-slate-400 text-[11px]">{page.stat1Label}</div>
              <div className="text-lg font-bold text-white">{page.stat1Val}</div>
              <div className="text-amber-400 text-[10px]">{page.stat1Sub}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
              <div className="text-slate-400 text-[11px]">{page.stat2Label}</div>
              <div className="text-lg font-bold text-white">{page.stat2Val}</div>
              <div className="text-sky-400 text-[10px]">{page.stat2Sub}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
              <div className="text-slate-400 text-[11px]">{page.stat3Label}</div>
              <div className="text-lg font-bold text-white">{page.stat3Val}</div>
              <div className="text-[#00D1A3] text-[10px]">{page.stat3Sub}</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-10 sm:mb-14">
          <h3 className="text-lg sm:text-xl font-bold text-[#07152B]">
            {page.whyTitle}
          </h3>
          <ul className="space-y-3">
            {page.whyPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href={siteConfig.links.joinEarlyAccess} variant="primary" size="md" icon={ArrowRight}>
              {t.common.getStarted}
            </Button>
            <Button href={siteConfig.links.bookDemo} variant="outline" size="md">
              {t.common.bookDemo}
            </Button>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
