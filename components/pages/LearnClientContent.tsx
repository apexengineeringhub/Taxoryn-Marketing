"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ResourceSearchFilter } from "@/components/resources/ResourceSearchFilter";
import { ArticleCard } from "@/components/resources/ArticleCard";
import { YouTubeEmbed } from "@/components/common/YouTubeEmbed";
import {
  RESOURCE_CATEGORIES,
  RESOURCE_ARTICLES,
} from "@/lib/content/resources";
import { DEFAULT_DEMO_YOUTUBE_ID } from "@/lib/config/videos";
import { siteConfig } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  BookOpen,
  Video,
  Play,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ClipboardList,
  Users2,
  FolderLock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function LearnClientContent() {
  const { t } = useLanguage();
  const l = t.pages.learn;
  const featuredArticles = RESOURCE_ARTICLES.filter((a) => a.featured);

  return (
    <div className="w-full bg-[#F8FAFC]">
      <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <Container>
        {/* 1. Learn Hub Header */}
        <SectionHeading
          badge={l.badge}
          badgeVariant="teal"
          title={l.title}
          description={l.description}
        />

        {/* 2. Quick Navigation Anchor Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-4xl mx-auto">
          <a
            href="#product-demo"
            className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#00D1A3] transition-colors flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#07152B]">{l.demoNavTitle}</h3>
              <p className="text-[11px] text-slate-500 hidden sm:block">{l.demoNavSub}</p>
            </div>
          </a>

          <a
            href="#featured-guides"
            className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#00D1A3] transition-colors flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#07152B]">{l.guidesNavTitle}</h3>
              <p className="text-[11px] text-slate-500 hidden sm:block">{l.guidesNavSub}</p>
            </div>
          </a>

          <a
            href="#compliance-calendar"
            className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#00D1A3] transition-colors flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#07152B]">{l.calendarNavTitle}</h3>
              <p className="text-[11px] text-slate-500 hidden sm:block">{l.calendarNavSub}</p>
            </div>
          </a>

          <a
            href="#practice-tips"
            className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#00D1A3] transition-colors flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <ClipboardList className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#07152B]">{l.tipsNavTitle}</h3>
              <p className="text-[11px] text-slate-500 hidden sm:block">{l.tipsNavSub}</p>
            </div>
          </a>
        </div>

        {/* 3. DEDICATED PRODUCT DEMO SECTION */}
        <div id="product-demo" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-5 space-y-1">
              <div className="inline-flex items-center gap-2">
                <Badge variant="navy" size="sm">
                  {l.demoBadge}
                </Badge>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#07152B] tracking-tight">
                {l.demoTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
                {l.demoDesc}
              </p>
            </div>

            <YouTubeEmbed
              videoId={DEFAULT_DEMO_YOUTUBE_ID}
              title="Taxoryn Practice Management Platform Walkthrough"
              description="See how Taxoryn helps Indian tax practitioners manage clients, track GST/ITR compliance, and collaborate with team members."
              showYouTubeLink={Boolean(DEFAULT_DEMO_YOUTUBE_ID)}
            />
          </div>
        </div>

        {/* 4. FEATURED LEARNING CONTENT */}
        <div id="featured-guides" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="flex items-center justify-between mb-6 pb-2.5 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#009E77]" />
                <h2 className="text-lg sm:text-xl font-bold text-[#07152B]">
                  {l.featuredTitle}
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {l.featuredDesc}
              </p>
            </div>
            <span className="text-xs font-semibold text-[#082E5B] hidden sm:inline-block">
              {l.curatedTag}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* 5. SEARCHABLE TAX GUIDES LIBRARY */}
        <div className="mb-12 sm:mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <h3 className="text-lg sm:text-xl font-bold text-[#07152B]">
                  {l.searchTitle}
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                {l.searchDesc}
              </p>
            </div>

            <ResourceSearchFilter
              categories={RESOURCE_CATEGORIES}
              articles={RESOURCE_ARTICLES}
            />
          </div>
        </div>

        {/* 6. STATUTORY COMPLIANCE CALENDAR & DEADLINES */}
        <div id="compliance-calendar" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-5">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#07152B]">
                  {l.calendarTitle}
                </h2>
                <p className="text-xs text-slate-500">
                  {l.calendarDesc}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-sky-600 uppercase">
                    MONTHLY GST
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">11th & 20th</span>
                </div>
                <p className="font-bold text-slate-900 text-xs sm:text-sm">GSTR-1 & GSTR-3B</p>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  GSTR-1 outward supplies by 11th; GSTR-3B summary return and net tax settlement by 20th.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase">
                    QUARTERLY TDS
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">End of Month</span>
                </div>
                <p className="font-bold text-slate-900 text-xs sm:text-sm">Form 24Q, 26Q, 27Q</p>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Quarterly returns by 31st July (Q1), 31st Oct (Q2), 31st Jan (Q3), and 31st May (Q4).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase">
                    ADVANCE TAX
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">15th Quarterly</span>
                </div>
                <p className="font-bold text-slate-900 text-xs sm:text-sm">Installment Schedule</p>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  15% by 15 June, 45% by 15 Sept, 75% by 15 Dec, and 100% by 15 March.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-rose-600 uppercase">
                    ANNUAL ITR
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">July & October</span>
                </div>
                <p className="font-bold text-slate-900 text-xs sm:text-sm">Income Tax Returns</p>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  31st July for non-audit individual filers; 31st October for corporate and audit cases.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. PRACTICE MANAGEMENT TIPS & SOPS */}
        <div id="practice-tips" className="mb-12 sm:mb-16 scroll-mt-24">
          <div className="flex items-center justify-between mb-6 pb-2.5 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-indigo-600" />
                <h2 className="text-lg sm:text-xl font-bold text-[#07152B]">
                  {l.tipsTitle}
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {l.tipsDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card variant="default" padding="md" className="bg-white border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#082E5B] flex items-center justify-center">
                <Users2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#07152B]">
                  {l.tip1Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {l.tip1Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1A3]" />
                <span>{l.tip1Badge}</span>
              </div>
            </Card>

            <Card variant="default" padding="md" className="bg-white border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FolderLock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#07152B]">
                  {l.tip2Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {l.tip2Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1A3]" />
                <span>{l.tip2Badge}</span>
              </div>
            </Card>

            <Card variant="default" padding="md" className="bg-white border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#07152B]">
                  {l.tip3Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {l.tip3Desc}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1A3]" />
                <span>{l.tip3Badge}</span>
              </div>
            </Card>
          </div>
        </div>

        {/* 8. YOUTUBE LEARNING HUB BANNER */}
        <div className="mb-10 sm:mb-14">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1.5 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[#009E77] text-[11px] font-semibold">
                <Video className="w-3 h-3" />
                <span>{l.youtubeBadge}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#07152B] tracking-tight">
                {l.youtubeTitle}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {l.youtubeDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <a
                href={siteConfig.links.youtube || "https://www.youtube.com/@taxoryn"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00D1A3] text-[#07152B] font-bold text-xs hover:bg-[#00D1A3]/90 shadow-sm transition-all duration-200"
              >
                <span>{l.youtubeCta}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/videos"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 font-semibold text-xs border border-slate-200/90 transition-all duration-200"
              >
                <span>{l.browseVideos}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
        </Container>
      </div>

      {/* 9. Final CTA */}
      <FinalCTASection />
    </div>
  );
}
