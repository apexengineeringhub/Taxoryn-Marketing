"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { YouTubeEmbed } from "@/components/common/YouTubeEmbed";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import {
  TAXORYN_VIDEOS,
  getVideosByCategory,
  DEFAULT_DEMO_YOUTUBE_ID,
} from "@/lib/config/videos";
import { siteConfig } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  BookOpen,
  BellRing,
  Play,
  Layers,
  ExternalLink,
  Clock,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function VideosClientContent() {
  const { t } = useLanguage();
  const v = t.pages.videos;

  const [activeTab, setActiveTab] = useState<
    "all" | "product" | "tax-learn" | "tax-updates"
  >("all");

  const categories = [
    { id: "all", label: v.allTab, icon: Layers },
    { id: "product", label: v.productTab, icon: Play },
    { id: "tax-learn", label: v.tutorialsTab, icon: BookOpen },
    { id: "tax-updates", label: v.updatesTab, icon: BellRing },
  ] as const;

  const displayedVideos = getVideosByCategory(activeTab);

  const benefits = [
    {
      icon: Users,
      title: "Manage Clients",
      desc: "Keep client details, documents and communication organized.",
    },
    {
      icon: ShieldCheck,
      title: "Stay Compliant",
      desc: "Track GST, TDS, ITR and important compliance requirements.",
    },
    {
      icon: Layers,
      title: "Connected Workflows",
      desc: "Bring documents, tasks and workflows together.",
    },
    {
      icon: Sparkles,
      title: "Built for Indian Tax Practitioners",
      desc: "Designed around real tax-practice workflows.",
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <Container>
        {/* Header */}
        <SectionHeading
          badge={v.badge || "Product Demo"}
          badgeVariant="teal"
          title="Taxoryn Practice Management Platform Walkthrough"
          description="Explore how Taxoryn helps tax practitioners manage clients, compliance, documents, tasks and more — all in one place."
        />

        {/* Featured Two-Column Section: Video + Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-14 sm:mb-18">
          {/* Left Column: 16:9 Video Player */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            <div className="w-full max-w-[760px] mx-auto lg:max-w-none">
              <YouTubeEmbed
                videoId={DEFAULT_DEMO_YOUTUBE_ID}
                title={v.featuredTitle}
                description={v.featuredDesc}
                showYouTubeLink={Boolean(DEFAULT_DEMO_YOUTUBE_ID)}
              />
            </div>
          </div>

          {/* Right Column: Value Proposition & Dual CTA */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#009E77] bg-emerald-50 px-2.5 py-0.5 rounded uppercase border border-emerald-100">
                  {v.featuredBadge || "Key Capabilities"}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#07152B]">
                  {v.featuredTitle || "Connected Tax Practice Platform"}
                </h3>
              </div>

              {/* 4 Benefits List */}
              <div className="space-y-3.5 pt-1">
                {benefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#009E77] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#07152B] leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dual Actions */}
            <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2.5">
              <Button
                variant="primary"
                size="md"
                href="/early-access"
                icon={ArrowRight}
                className="flex-1 justify-center shadow-sm"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/book-demo"
                className="flex-1 justify-center"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>

        {/* More Videos Section Header & Category Filter Tabs */}
        <div className="pt-4 pb-8 space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <Play className="w-3 h-3 text-[#009E77]" />
            <span>MORE DEMO VIDEOS & TUTORIALS</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#082E5B] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-[#082E5B]"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#00D1A3]" : "text-slate-400"
                    }`}
                  />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-18">
          {displayedVideos.map((video) => {
            const hasVideo = Boolean(video.youtubeId && video.youtubeId.trim() !== "");

            return (
              <div
                key={video.id}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between hover:border-[#00D1A3] transition-colors"
              >
                <div className="space-y-3">
                  {hasVideo ? (
                    <YouTubeEmbed
                      videoId={video.youtubeId}
                      title={video.title}
                      description={video.description}
                      showYouTubeLink={true}
                    />
                  ) : (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-700 font-semibold">
                        <div className="w-7 h-7 rounded-lg bg-[#082E5B] text-[#00D1A3] flex items-center justify-center shrink-0">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                        <span className="text-xs truncate max-w-[110px] sm:max-w-none">{v.educationalSeries}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
                        {v.inProduction}
                      </span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#009E77] bg-emerald-50 px-2 py-0.5 rounded">
                        {video.category.toUpperCase().replace("-", " ")}
                      </span>
                      {video.duration && (
                        <span className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-[#07152B] leading-snug line-clamp-2">
                      {video.title}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-400">
                    {v.educationalSeries}
                  </span>
                  <a
                    href={siteConfig.links.youtube || "https://www.youtube.com/@taxoryn"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#082E5B] hover:text-[#00D1A3] transition-colors text-xs"
                  >
                    <span>{v.youtubeChannel}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>

    <FinalCTASection />
  </div>
);
}
