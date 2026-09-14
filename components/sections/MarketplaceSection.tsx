"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WorkflowDiagram } from "@/components/marketing/WorkflowDiagram";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight } from "lucide-react";

export function MarketplaceSection() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge={t.marketplaceSection.badge}
          badgeVariant="emerald"
          title={t.marketplaceSection.title}
          description={t.marketplaceSection.subtitle}
        />

        {/* Workflow Diagram */}
        <div className="mb-12">
          <WorkflowDiagram />
        </div>

        {/* Two Journeys: For Businesses & For Tax Professionals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Journey 1: For Businesses */}
          <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-6 hover:border-[#0EA5E9] transition-colors">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase inline-block">
                {t.marketplaceSection.journeyBusinessTag}
              </span>
              <h3 className="text-xl font-bold text-[#07152B]">
                {t.marketplaceSection.journeyBusinessTitle}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {t.marketplaceSection.journeyBusinessDesc}
              </p>
            </div>

            <Button
              href={siteConfig.links.marketplace}
              variant="outline"
              size="lg"
              icon={ArrowRight}
              className="w-full justify-center font-bold"
            >
              {t.marketplaceSection.journeyBusinessCta}
            </Button>
          </div>

          {/* Journey 2: For Tax Professionals */}
          <div className="p-8 rounded-2xl bg-white border border-[#00D1A3]/50 ring-1 ring-[#00D1A3]/20 shadow-sm flex flex-col justify-between space-y-6 hover:border-[#00D1A3] transition-colors">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#009E77] bg-emerald-50 px-3 py-1 rounded-full uppercase inline-block">
                {t.marketplaceSection.journeyTaxProfTag}
              </span>
              <h3 className="text-xl font-bold text-[#07152B]">
                {t.marketplaceSection.journeyTaxProfTitle}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {t.marketplaceSection.journeyTaxProfDesc}
              </p>
            </div>

            <Button
              href={siteConfig.links.joinEarlyAccess}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full justify-center font-bold shadow-md shadow-[#00D1A3]/20"
            >
              {t.marketplaceSection.journeyTaxProfCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
