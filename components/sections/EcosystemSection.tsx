"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  FolderTree,
  ShieldCheck,
  HeartHandshake,
  Network,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export function EcosystemSection() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      pillar: "ORGANIZE",
      title: t.solution.step1Title.replace(/^\d+\.\s*/, ""),
      icon: FolderTree,
      color: "text-blue-600",
      description: t.solution.step1Desc,
    },
    {
      num: "02",
      pillar: "COMPLY",
      title: t.solution.step2Title.replace(/^\d+\.\s*/, ""),
      icon: ShieldCheck,
      color: "text-[#009E77]",
      description: t.solution.step2Desc,
    },
    {
      num: "03",
      pillar: "SERVE",
      title: t.solution.step3Title.replace(/^\d+\.\s*/, ""),
      icon: HeartHandshake,
      color: "text-sky-600",
      description: t.solution.step3Desc,
    },
    {
      num: "04",
      pillar: "CONNECT",
      title: t.solution.step4Title.replace(/^\d+\.\s*/, ""),
      icon: Network,
      color: "text-indigo-600",
      description: t.solution.step4Desc,
    },
    {
      num: "05",
      pillar: "GROW",
      title: t.solution.step5Title.replace(/^\d+\.\s*/, ""),
      icon: TrendingUp,
      color: "text-emerald-600",
      description: t.solution.step5Desc,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] border-b border-slate-200/80">
      <Container>
        <SectionHeading
          badge={t.solution.badge}
          badgeVariant="navy"
          title={t.solution.title}
          description={t.solution.subtitle}
        />

        {/* Connected Horizontal Flow on Desktop, Clean Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-3.5 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.pillar}
                className="relative p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 hover:border-[#00D1A3] transition-all duration-200 shadow-xs flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#009E77] transition-colors">
                      {step.num}
                    </span>
                    <Icon className={`w-4 h-4 ${step.color}`} />
                  </div>

                  <div>
                    <h3 className="text-xs font-mono font-extrabold tracking-widest text-[#07152B]">
                      {step.pillar}
                    </h3>
                    <span className="text-[11px] text-[#009E77] font-semibold block">
                      {step.title}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Subtle Arrow connector on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-white border border-slate-300 items-center justify-center text-slate-400 pointer-events-none shadow-xs">
                    <ArrowRight className="w-2.5 h-2.5 text-[#009E77]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}



