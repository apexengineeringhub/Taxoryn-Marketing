"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TermsContent() {
  const { t } = useLanguage();
  const tr = t.pages.terms;

  return (
    <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
      <Container size="narrow">
        <SectionHeading
          badge={tr.badge}
          badgeVariant="navy"
          title={tr.title}
          description={tr.description}
          align="left"
        />

        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">{tr.sec1Title}</h2>
            <p>{tr.sec1P}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">{tr.sec2Title}</h2>
            <p>{tr.sec2P}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#07152B]">{tr.sec3Title}</h2>
            <p>{tr.sec3P}</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
