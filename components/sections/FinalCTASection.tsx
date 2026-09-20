"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { MarketingCTA } from "@/components/common/MarketingCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, Calendar, Check } from "lucide-react";

export function FinalCTASection() {
  const { t, language } = useLanguage();

  const titleContent =
    language === "en" ? (
      <>
        Help Us Build Better <span className="text-[#00D1A3]">Tax Practice</span> Management.
      </>
    ) : (
      t.finalCTA.title
    );

  const benefitRow = (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-slate-300 font-medium">
      <div className="flex items-center gap-1.5">
        <Check className="w-3.5 h-3.5 text-[#00D1A3] shrink-0" />
        <span>{t.finalCTA.benefitShapeProduct || "Shape the product"}</span>
      </div>
      <span className="hidden sm:inline text-slate-700 select-none" aria-hidden="true">|</span>
      <div className="flex items-center gap-1.5">
        <Check className="w-3.5 h-3.5 text-[#00D1A3] shrink-0" />
        <span>{t.finalCTA.benefitBuiltForIndia || "Built for Indian tax practitioners"}</span>
      </div>
      <span className="hidden sm:inline text-slate-700 select-none" aria-hidden="true">|</span>
      <div className="flex items-center gap-1.5">
        <Check className="w-3.5 h-3.5 text-[#00D1A3] shrink-0" />
        <span>{t.finalCTA.benefitDirectFeedback || "Direct founder feedback"}</span>
      </div>
    </div>
  );

  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-12 bg-[#F8FAFC] relative overflow-hidden" id="get-started">
      <Container className="relative">
        <MarketingCTA
          variant="primary"
          eyebrow={t.finalCTA.badge}
          title={titleContent}
          description={t.finalCTA.subtitle}
          footer={benefitRow}
        >
          <Button
            href={siteConfig.links.joinEarlyAccess}
            variant="primary"
            size="md"
            icon={ArrowRight}
            className="w-full sm:w-auto px-6 sm:px-7 min-h-[46px] sm:min-h-[48px] font-bold shadow-md shadow-[#00D1A3]/15 text-sm sm:text-base"
          >
            {t.finalCTA.getStarted}
          </Button>

          <Button
            href={siteConfig.links.bookDemo}
            variant="dark"
            size="md"
            icon={Calendar}
            iconPosition="left"
            className="w-full sm:w-auto px-6 sm:px-7 min-h-[46px] sm:min-h-[48px] font-semibold text-sm sm:text-base border-slate-700 hover:bg-slate-800"
          >
            {t.finalCTA.bookDemo}
          </Button>
        </MarketingCTA>
      </Container>
    </section>
  );
}

