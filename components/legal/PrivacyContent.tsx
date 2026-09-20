"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Shield, EyeOff, Lock, CheckCircle2 } from "lucide-react";

export function PrivacyContent() {
  const { t } = useLanguage();
  const p = t.pages.privacy;

  return (
    <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
      <Container size="narrow">
        <SectionHeading
          badge={p.badge}
          badgeVariant="navy"
          title={p.title}
          description={p.description}
          align="left"
        />

        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* 1. Overview */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <Shield className="w-5 h-5 text-[#00D1A3]" />
              <h2>{p.sec1Title}</h2>
            </div>
            <p>{p.sec1P}</p>
          </section>

          {/* 2. Practice Data Ownership */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <Lock className="w-5 h-5 text-[#00D1A3]" />
              <h2>{p.sec2Title}</h2>
            </div>
            <p>{p.sec2P}</p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-4 border-l-2 border-[#00D1A3]">
              {p.sec2Bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </section>

          {/* 3. Privacy-Conscious Marketing Analytics */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <EyeOff className="w-5 h-5 text-[#00D1A3]" />
              <h2>{p.sec3Title}</h2>
            </div>
            <p>{p.sec3P}</p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
              <p className="font-semibold text-[#07152B]">
                {p.sec3BoxTitle}
              </p>
              <ul className="space-y-1.5 text-slate-600">
                {p.sec3Bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                    <span>
                      <strong>{bullet.label}</strong> {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Information Security */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <Shield className="w-5 h-5 text-[#00D1A3]" />
              <h2>{p.sec4Title}</h2>
            </div>
            <p>{p.sec4P}</p>
          </section>

          {/* 5. Contact Information */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#082E5B] font-bold text-base sm:text-lg">
              <Shield className="w-5 h-5 text-[#00D1A3]" />
              <h2>{p.sec5Title}</h2>
            </div>
            <p>{p.sec5P}</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
