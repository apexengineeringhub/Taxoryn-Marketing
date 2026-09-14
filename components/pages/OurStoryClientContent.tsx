"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, Quote, CheckCircle2, MessageSquare } from "lucide-react";

export function OurStoryClientContent() {
  const { t } = useLanguage();
  const page = t.pages.ourStory;

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center">
              <Badge variant="teal" size="md">
                {page.badge}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07152B] tracking-tight">
              {page.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              {page.subtitle}
            </p>
          </div>

          {/* Narrative Body */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07152B]">
                {page.hometownTitle}
              </h2>
              <p>{page.hometownP1}</p>
              <p>{page.hometownP2}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07152B]">
                {page.struggleTitle}
              </h2>
              <p>{page.struggleP1}</p>
              <ul className="space-y-2 text-slate-600 text-base pl-2">
                {page.struggleItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00D1A3] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-[#07152B] pt-2">
                {page.struggleConclusion}
              </p>
            </div>

            {/* The Question Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-[#00D1A3] space-y-3 my-6 relative">
              <Quote className="w-10 h-10 text-[#00D1A3]/30 absolute top-4 right-4 pointer-events-none" />
              <p className="text-xl sm:text-2xl font-bold text-[#082E5B] italic leading-snug">
                &ldquo;{page.quote}&rdquo;
              </p>
              <p className="text-sm font-semibold text-[#00D1A3]">
                {page.quoteSub}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#07152B]">
                {page.buildingTitle}
              </h2>
              <p>{page.buildingP1}</p>
              <p>{page.buildingP2}</p>
            </div>

            {/* CTA inside card */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#082E5B]">
                  {page.footerBrand}
                </p>
                <p className="text-xs text-slate-500">
                  {page.footerTagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  href={siteConfig.links.joinEarlyAccess}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                >
                  {page.getStarted}
                </Button>
                <Button
                  href={siteConfig.links.contact}
                  variant="outline"
                  size="md"
                  icon={MessageSquare}
                  iconPosition="left"
                >
                  {page.talkToUs}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-12">
        <FinalCTASection />
      </div>
    </div>
  );
}
