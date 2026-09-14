"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { ProductPreview } from "@/components/marketing/ProductPreview";
import { FAQSection } from "@/components/trust/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  Users,
  FileCheck2,
  FolderLock,
  ShoppingBag,
  History,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Laptop,
  CheckSquare,
  BarChart3,
} from "lucide-react";

export function ProductClientContent() {
  const { t } = useLanguage();
  const p = t.pages.product;

  const stageIcons = [Users, FileCheck2, Laptop, ShoppingBag, History];
  const stageBadges: Array<"navy" | "teal" | "cyan" | "emerald" | "navy"> = [
    "navy",
    "teal",
    "cyan",
    "emerald",
    "navy",
  ];

  const moduleIcons = [
    Users,
    FileCheck2,
    CheckSquare,
    FolderLock,
    ShoppingBag,
    BarChart3,
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container>
        {/* Product Page Hero */}
        <SectionHeading
          badge={p.badge}
          badgeVariant="navy"
          title={p.title}
          description={p.description}
        />

        {/* 1. Interactive Product Preview */}
        <div className="mb-14 sm:mb-16">
          <ProductPreview />
        </div>

        {/* 2. The 5-Stage Practice Lifecycle */}
        <div className="mb-14 sm:mb-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <Badge variant="teal" size="md">
              {p.lifecycleBadge}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152B] tracking-tight">
              {p.lifecycleTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {p.lifecycleDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.stages.map((stg, index) => {
              const Icon = stageIcons[index] || Users;
              const badgeVariant = stageBadges[index] || "navy";
              return (
                <Card
                  key={stg.stage}
                  variant="interactive"
                  padding="md"
                  className="bg-white border-slate-200 hover:border-[#00D1A3] flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {stg.stage}
                      </span>
                      <Badge variant={badgeVariant} size="sm">
                        {stg.name}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#07152B]">
                        {stg.tagline}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {stg.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 3. The Transformation: Traditional vs Taxoryn */}
        <div className="mb-14 sm:mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#07152B]">
              {p.transformTitle}
            </h2>
            <p className="text-xs text-slate-500">
              {p.transformDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Fragmented Approach */}
            <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-100 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-xs sm:text-sm">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>{p.traditionalTitle}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {p.traditionalPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Taxoryn Connected Workspace */}
            <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{p.connectedTitle}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {p.connectedPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1A3] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Core Module Architecture Overview */}
        <div className="mb-14 sm:mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                {p.archBadge}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#07152B]">
                {p.archTitle}
              </h2>
            </div>
            <Button
              href="/features"
              variant="outline"
              size="sm"
              icon={ArrowRight}
              className="self-start sm:self-auto font-bold"
            >
              {p.exploreAllFeatures}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.modules.map((mod, i) => {
              const Icon = moduleIcons[i] || Users;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-[#00D1A3] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#082E5B]/5 text-[#082E5B] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#07152B]">
                      {mod.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* 5. Product & Workflow FAQs */}
      <FAQSection
        initialCategory="features"
        title={p.faqTitle}
        description={p.faqDesc}
      />

      {/* 6. Final Conversion CTA */}
      <FinalCTASection />
    </div>
  );
}
