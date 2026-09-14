"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  Users,
  ShieldCheck,
  CheckSquare,
  FolderLock,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function CoreProductSection() {
  const { t } = useLanguage();

  const modules = [
    {
      id: "client-management",
      category: t.coreProduct.category1,
      title: t.coreProduct.feature1Title,
      icon: Users,
      description: t.coreProduct.feature1Desc,
      points: t.coreProduct.points1,
    },
    {
      id: "compliance",
      category: t.coreProduct.category2,
      title: t.coreProduct.feature2Title,
      icon: ShieldCheck,
      description: t.coreProduct.feature2Desc,
      points: t.coreProduct.points2,
    },
    {
      id: "tasks-workflow",
      category: t.coreProduct.category3,
      title: t.coreProduct.feature4Title,
      icon: CheckSquare,
      description: t.coreProduct.feature4Desc,
      points: t.coreProduct.points3,
    },
    {
      id: "documents-portal",
      category: t.coreProduct.category4,
      title: t.coreProduct.feature3Title,
      icon: FolderLock,
      description: t.coreProduct.feature3Desc,
      points: t.coreProduct.points4,
    },
    {
      id: "practice-growth",
      category: t.coreProduct.category5,
      title: t.coreProduct.feature6Title,
      icon: TrendingUp,
      description: t.coreProduct.feature6Desc,
      points: t.coreProduct.points5,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge={t.coreProduct.badge}
          badgeVariant="navy"
          title={t.coreProduct.title}
          description={t.coreProduct.subtitle}
        />

        {/* Editorial Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-[#00D1A3] transition-all duration-200 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                      {mod.category}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#07152B]">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 space-y-1.5">
                  {mod.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#0F172A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1A3] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#082E5B] hover:text-[#00D1A3] transition-colors"
          >
            <span>{t.coreProduct.exploreProduct}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
