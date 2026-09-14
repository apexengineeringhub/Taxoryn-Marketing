"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  FolderTree,
  SlidersHorizontal,
  HeartHandshake,
  TrendingUp,
  Check,
} from "lucide-react";

export function SolutionSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      pillar: "ORGANIZE",
      tagline: "Structure & Visibility",
      title: t.solution.step1Title,
      description: t.solution.step1Desc,
      icon: FolderTree,
      highlights: [
        "Master client records & GSTIN/PAN directory",
        "Role-based staff & article assistant permissions",
        "Multi-branch and multi-location practice hierarchy",
      ],
    },
    {
      pillar: "COMPLY",
      tagline: "Filing & Deadlines",
      title: t.solution.step2Title,
      description: t.solution.step2Desc,
      icon: SlidersHorizontal,
      highlights: [
        "Compliance calendar & due-date tracking",
        "GST, ITR & TDS preparation-to-filing pipelines",
        "Practice-wide productivity & workload reports",
      ],
    },
    {
      pillar: "SERVE",
      tagline: "Client Delight",
      title: t.solution.step3Title,
      description: t.solution.step3Desc,
      icon: HeartHandshake,
      highlights: [
        "Dedicated client portal with protected access",
        "Structured document collection requests via email and portal",
        "Filing acknowledgement tracking & status updates",
      ],
    },
    {
      pillar: "GROW",
      tagline: "Expansion Engine",
      title: t.solution.step5Title,
      description: t.solution.step5Desc,
      icon: TrendingUp,
      highlights: [
        "Taxoryn Marketplace practice matching",
        "Structured client intake & KYC onboarding",
        "Structured transition from lead to client",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#07152B] text-white relative overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge={t.solution.badge}
          badgeVariant="teal"
          theme="dark"
          title={t.solution.title}
          description={t.solution.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 max-w-6xl mx-auto">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.pillar}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#00D1A3]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3]">
                      {item.pillar}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {item.tagline}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00D1A3]/10 border border-[#00D1A3]/30 flex items-center justify-center text-[#00FFC2]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-[#00D1A3]/20 flex items-center justify-center text-[#00D1A3] shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
