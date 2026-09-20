"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { Check, ArrowRight, Info, Calendar } from "lucide-react";
import { FAQSection } from "@/components/trust/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function PricingClientContent() {
  const { t } = useLanguage();
  const pr = t.pages.pricing;

  const ctaHrefs = [
    siteConfig.links.joinEarlyAccess,
    siteConfig.links.joinEarlyAccess,
    siteConfig.links.bookDemo,
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge={pr.badge}
            badgeVariant="teal"
            title={pr.title}
            description={pr.description}
          />

          {/* Informative Status Banner */}
          <div className="max-w-3xl mx-auto p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-sm text-slate-700 text-center flex items-center justify-center gap-2 mb-8 sm:mb-10">
            <Info className="w-4 h-4 text-[#009E77] shrink-0" />
            <span>{pr.statusBanner}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 sm:mb-16">
            {pr.tiers.map((tier, index) => {
              const ctaHref = ctaHrefs[index] || siteConfig.links.joinEarlyAccess;
              return (
                <Card
                  key={tier.name}
                  variant={tier.featured ? "elevated" : "default"}
                  padding="lg"
                  className={`flex flex-col justify-between relative ${
                    tier.featured
                      ? "border-[#00D1A3] ring-2 ring-[#00D1A3]/20 shadow-lg bg-white"
                      : "bg-white border-slate-200/90 shadow-sm"
                  }`}
                >
                  <div>
                    {tier.featured && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <Badge variant="teal" size="sm">
                          {pr.recommendedBadge}
                        </Badge>
                      </div>
                    )}

                    <h3 className="text-lg sm:text-xl font-bold text-[#07152B] mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#64748B] mb-4 min-h-[32px]">
                      {tier.tagline}
                    </p>

                    <div className="py-2 px-3 rounded-lg bg-slate-50 border border-slate-200/80 mb-5 text-xs font-semibold text-[#082E5B] flex items-center justify-between">
                      <span>{pr.statusLabel}</span>
                      <span className="text-[#009E77]">{tier.status}</span>
                    </div>

                    <div className="space-y-2.5 pt-1 mb-6">
                      <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                        {pr.capabilitiesLabel}
                      </p>
                      {tier.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#0F172A]">
                          <Check className="w-3.5 h-3.5 text-[#00D1A3] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    href={ctaHref}
                    variant={tier.featured ? "primary" : "outline"}
                    size="md"
                    icon={ctaHref.includes("contact") || ctaHref.includes("demo") ? Calendar : ArrowRight}
                    className="w-full justify-center font-bold"
                  >
                    {tier.ctaText}
                  </Button>
                </Card>
              );
            })}
          </div>
        </Container>

        {/* Pricing & Practice Tier FAQs */}
        <FAQSection
          initialCategory="pricing"
          title={pr.faqTitle}
          description={pr.faqDesc}
        />
      </div>

      <FinalCTASection />
    </div>
  );
}
