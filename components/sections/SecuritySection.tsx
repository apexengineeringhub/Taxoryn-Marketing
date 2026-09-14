"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/config/site";
import {
  ShieldCheck,
  KeyRound,
  FileLock2,
  History,
  UserCheck2,
  DatabaseZap,
  ArrowRight,
} from "lucide-react";

export function SecuritySection() {
  const { t } = useLanguage();

  const securityPillars = [
    {
      icon: DatabaseZap,
      title: t.securitySection.point1Title,
      description: t.securitySection.point1Desc,
    },
    {
      icon: KeyRound,
      title: t.securitySection.point2Title,
      description: t.securitySection.point2Desc,
    },
    {
      icon: FileLock2,
      title: t.securitySection.point3Title,
      description: t.securitySection.point3Desc,
    },
    {
      icon: History,
      title: t.securitySection.point4Title,
      description: t.securitySection.point4Desc,
    },
    {
      icon: UserCheck2,
      title: t.securitySection.point5Title,
      description: t.securitySection.point5Desc,
    },
    {
      icon: ShieldCheck,
      title: t.securitySection.point6Title,
      description: t.securitySection.point6Desc,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80">
      <Container>
        <SectionHeading
          badge={t.securitySection.badge}
          badgeVariant="navy"
          title={t.securitySection.title}
          description={t.securitySection.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-slate-50/60 border border-slate-200/90 hover:bg-white hover:border-[#00D1A3] transition-all duration-200 shadow-xs space-y-2.5"
              >
                <div className="w-9 h-9 rounded-lg bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                  <Icon className="w-4 h-4 text-[#009E77]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#07152B]">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Informative Disclaimer */}
        <p className="text-center text-xs text-slate-500 max-w-2xl mx-auto mb-6 leading-relaxed">
          {t.securitySection.disclaimer}
        </p>

        <div className="text-center">
          <Button
            href={siteConfig.links.security}
            variant="outline"
            size="md"
            icon={ArrowRight}
            className="font-semibold"
          >
            {t.securitySection.exploreSecurity}
          </Button>
        </div>
      </Container>
    </section>
  );
}


