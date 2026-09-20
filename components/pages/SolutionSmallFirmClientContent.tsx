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
    <div className="w-full bg-[#F8FAFC]">
      <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge={page.badge}
            badgeVariant="teal"
            title={page.title}
            description={page.description}
          />

          {/* Small Firm Team Review Matrix Card */}
          <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 mb-8 sm:mb-10">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                  <Users2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-sm text-[#07152B] block">{page.visualTitle}</span>
                  <span className="text-xs text-slate-500">{page.visualSub}</span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 font-mono font-bold border border-sky-100">
                {page.visualTag}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-slate-500 text-[11px] font-medium">{page.stat1Label}</div>
                <div className="text-lg font-bold text-[#07152B]">{page.stat1Val}</div>
                <div className="text-amber-600 text-[10px] font-semibold">{page.stat1Sub}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-slate-500 text-[11px] font-medium">{page.stat2Label}</div>
                <div className="text-lg font-bold text-[#07152B]">{page.stat2Val}</div>
                <div className="text-sky-600 text-[10px] font-semibold">{page.stat2Sub}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-slate-500 text-[11px] font-medium">{page.stat3Label}</div>
                <div className="text-lg font-bold text-[#07152B]">{page.stat3Val}</div>
                <div className="text-[#009E77] text-[10px] font-semibold">{page.stat3Sub}</div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6 mb-10 sm:mb-14">
            <h3 className="text-lg sm:text-xl font-bold text-[#07152B]">
              {page.whyTitle}
            </h3>
            <ul className="space-y-3">
              {page.whyPoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
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
      </div>
      <FinalCTASection />
    </div>
  );
}
