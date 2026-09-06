"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import {
  Target,
  Users,
  Shield,
  CheckCircle2,
  XCircle,
  HeartHandshake,
} from "lucide-react";

export function AboutClientContent() {
  const { t } = useLanguage();
  const page = t.pages.about;

  const valueIcons = [Users, Shield, Target, HeartHandshake];

  const boundaries = [
    {
      type: page.isTitle,
      icon: CheckCircle2,
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-200",
      badgeColor: "teal" as const,
      badgeText: page.isBadge,
      items: page.isItems,
    },
    {
      type: page.notTitle,
      icon: XCircle,
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      badgeColor: "navy" as const,
      badgeText: page.notBadge,
      items: page.notItems,
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container>
        {/* Mission Hero */}
        <SectionHeading
          badge={page.missionBadge}
          badgeVariant="navy"
          title={page.missionTitle}
          description={page.missionDesc}
        />

        {/* Why We Built Taxoryn */}
        <div className="max-w-4xl mx-auto space-y-8 mb-10 sm:mb-14 text-slate-700 leading-relaxed">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <Badge variant="teal" size="sm">
              {page.storyBadge}
            </Badge>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#07152B] tracking-tight">
              {page.storyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {page.storyP1}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {page.storyP2}
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#00D1A3] my-3">
              <p className="text-sm sm:text-base font-bold text-[#082E5B] italic">
                &ldquo;{page.storyQuote}&rdquo;
              </p>
              <p className="text-xs text-[#00D1A3] font-semibold mt-1">
                {page.storyQuoteSub}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold text-[#082E5B]">
              {page.storyClosing}
            </p>
          </div>

          {/* Core Principles */}
          <div className="space-y-4">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <Badge variant="teal" size="sm">
                {page.principlesBadge}
              </Badge>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#07152B]">
                {page.principlesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {page.values.map((v, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <Card
                    key={i}
                    variant="interactive"
                    padding="md"
                    className="bg-white border-slate-200 space-y-2.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#07152B]">{v.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {v.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* What Taxoryn Is vs What It Does Not Replace */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <Badge variant="navy" size="md">
                {page.boundariesBadge}
              </Badge>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#07152B]">
                {page.boundariesTitle}
              </h2>
              <p className="text-xs text-slate-500">
                {page.boundariesDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {boundaries.map((b, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl ${b.bgColor} border ${b.borderColor} space-y-3`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#07152B] text-sm sm:text-base">
                      {b.type}
                    </h3>
                    <Badge variant={b.badgeColor} size="sm">
                      {b.badgeText}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {b.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-700 flex items-start gap-2"
                      >
                        <span className="text-[#00D1A3] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
