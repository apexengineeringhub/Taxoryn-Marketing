"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WorkflowDiagram } from "@/components/marketing/WorkflowDiagram";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, CheckCircle2, ShoppingBag, Info } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function MarketplaceClientContent() {
  const { t } = useLanguage();
  const m = t.pages.marketplace;

  return (
    <div className="w-full bg-[#F8FAFC]">
      <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge={m.badge}
            badgeVariant="emerald"
            title={m.title}
            description={m.description}
          />

          {/* Informative Status Banner */}
          <div className="max-w-3xl mx-auto p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-sm text-slate-700 text-center flex items-center justify-center gap-2 mb-8 sm:mb-10">
            <Info className="w-4 h-4 text-[#009E77] shrink-0" />
            <span>{m.statusBanner}</span>
          </div>

          {/* 6-Step Matching Flow */}
          <div className="mb-10 sm:mb-14">
            <WorkflowDiagram />
          </div>

          {/* Practice Profile & Intake Highlights */}
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-5 mb-10 sm:mb-14">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D1A3]/10 border border-[#00D1A3]/30 flex items-center justify-center text-[#009E77]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#07152B]">
                  {m.profileTitle}
                </h2>
                <p className="text-xs text-slate-500">
                  {m.profileSubtitle}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {m.profileDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {m.profilePoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                {m.footerNote}
              </span>
              <Button
                href={siteConfig.links.joinEarlyAccess}
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                {m.getStarted}
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <FinalCTASection />
    </div>
  );
}
