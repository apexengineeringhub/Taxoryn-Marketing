"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
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

  return (
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container>
        {/* Header */}
        <SectionHeading
          badge={v.badge}
          badgeVariant="teal"
          title={v.title}
          description={v.description}
        />

        {/* Featured Platform Walkthrough */}
        <div className="mb-12 sm:mb-14 max-w-4xl mx-auto">
          <div className="text-center mb-5 space-y-1">
            <span className="text-[11px] font-mono font-bold tracking-wider text-[#009E77] bg-emerald-50 px-3 py-0.5 rounded-full uppercase border border-emerald-100">
              {v.featuredBadge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#07152B] pt-1">
              {v.featuredTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              {v.featuredDesc}
            </p>
          </div>

          <YouTubeEmbed
            videoId={DEFAULT_DEMO_YOUTUBE_ID}
            title={v.featuredTitle}
            description={v.featuredDesc}
            showYouTubeLink={Boolean(DEFAULT_DEMO_YOUTUBE_ID)}
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-2xl mx-auto">
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

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 sm:mb-16">
          {displayedVideos.map((video) => {
            const hasVideo = Boolean(video.youtubeId && video.youtubeId.trim() !== "");

            return (
              <div
                key={video.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between hover:border-[#00D1A3] transition-colors"
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
                        <span className="text-xs">{v.educationalSeries}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
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

                    <h3 className="text-sm font-bold text-[#07152B] leading-snug">
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

      <FinalCTASection />
    </div>
  );
}
