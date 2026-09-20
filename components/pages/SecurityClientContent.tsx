"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { FAQSection } from "@/components/trust/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  ShieldCheck,
  Lock,
  Database,
  FileCheck,
  Key,
  FileLock2,
  Info,
  CheckCircle2,
  AlertCircle,
  UserCheck,
} from "lucide-react";

export function SecurityClientContent() {
  const { t } = useLanguage();
  const s = t.pages.security;

  const pillarIcons = [
    Database,
    Key,
    Lock,
    FileLock2,
    FileCheck,
    ShieldCheck,
    UserCheck,
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge={s.badge}
            badgeVariant="teal"
            title={s.title}
            description={s.description}
          />

          {/* Security Pillars Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 sm:mb-14">
            {s.pillars.map((sec, idx) => {
              const Icon = pillarIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2.5 hover:border-[#00D1A3] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#07152B]">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Clear Security & Operational Boundaries */}
          <div className="max-w-5xl mx-auto mb-10 sm:mb-14">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-1.5">
                <Badge variant="navy" size="md">
                  {s.boundariesBadge}
                </Badge>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#07152B]">
                  {s.boundariesTitle}
                </h2>
                <p className="text-xs text-slate-500">
                  {s.boundariesDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Manage */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D1A3]" />
                    <h3 className="font-bold text-[#07152B] text-sm sm:text-base">
                      {s.manageTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {s.managePoints.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs text-slate-700 flex items-start gap-2"
                      >
                        <span className="text-[#00D1A3] font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Oversight */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#082E5B]" />
                    <h3 className="font-bold text-[#07152B] text-sm sm:text-base">
                      {s.oversightTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {s.oversightPoints.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs text-slate-700 flex items-start gap-2"
                      >
                        <span className="text-[#00D1A3] font-bold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Informative Disclaimer */}
          <div className="max-w-3xl mx-auto p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 text-center flex items-center justify-center gap-2 mb-10 sm:mb-14">
            <Info className="w-4 h-4 text-slate-500 shrink-0" />
            <span>
              {s.disclaimer}
            </span>
          </div>
        </Container>

        {/* Security FAQs */}
        <FAQSection
          initialCategory="security"
          title={s.faqTitle}
          description={s.faqDesc}
          showCategories={false}
        />
      </div>

      <FinalCTASection />
    </div>
  );
}
