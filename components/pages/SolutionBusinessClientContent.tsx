"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  Building2,
  ShoppingBag,
  FolderLock,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export function SolutionBusinessClientContent() {
  const { t, language } = useLanguage();
  const page = t.pages.solutionsPages.business;

  const benefitIcons = [Globe, FolderLock, Clock, ShoppingBag];

  const benefitTitles = language === "hi"
    ? [
        "Client Portal Access",
        "Structured Document Checklists",
        "Compliance Status Tracking",
        "Marketplace Practice Discovery",
      ]
    : [
        "Client Portal Access",
        "Structured Document Requests",
        "Compliance Status Tracking",
        "Marketplace Practice Discovery",
      ];

  return (
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge={page.badge}
          badgeVariant="teal"
          title={page.title}
          description={page.description}
        />

        {/* Visual Preview Box */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#07152B] border border-slate-700 shadow-xl text-white space-y-4 mb-8 sm:mb-10">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#00D1A3]" />
              <div>
                <span className="font-bold text-sm block">{page.visualTitle}</span>
                <span className="text-xs text-slate-400">{page.visualSub}</span>
              </div>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#00D1A3]/20 text-[#00D1A3] font-mono">
              {page.visualTag}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
              <div className="text-slate-400 text-[11px]">{page.stat1Label}</div>
              <div className="text-lg font-bold text-white">{page.stat1Val}</div>
              <div className="text-emerald-400 text-[10px]">{page.stat1Sub}</div>
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-8 sm:mb-10">
          {page.whyPoints.map((desc, idx) => {
            const Icon = benefitIcons[idx % benefitIcons.length];
            const title = benefitTitles[idx] || page.whyTitle;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5 hover:border-[#00D1A3] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#07152B]">{title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-3 mb-10 sm:mb-14">
          <h3 className="text-lg sm:text-xl font-bold text-[#07152B]">
            {language === "hi"
              ? "क्या आपके Business को Tax Professional की आवश्यकता है?"
              : "Need a Tax Professional for Your Business?"}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto">
            {language === "hi"
              ? "Corporate tax, GST compliance और audit advisory में specialized Chartered Accountants और tax consultants खोजें।"
              : "Discover Chartered Accountants and tax consultants specialized in corporate tax, GST compliance, and audit advisory."}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={siteConfig.links.marketplace}
              variant="primary"
              size="md"
              icon={ArrowRight}
              className="font-bold shadow-md shadow-[#00D1A3]/20"
            >
              {language === "hi" ? "Tax Professional खोजें" : "Find a Tax Professional"}
            </Button>
            <Button
              href={siteConfig.links.contact}
              variant="outline"
              size="md"
            >
              {language === "hi" ? "हमसे संपर्क करें" : "Contact Us"}
            </Button>
          </div>
        </div>
      </Container>

      <FinalCTASection />
    </div>
  );
}
