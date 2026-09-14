"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { YouTubeEmbed } from "@/components/common/YouTubeEmbed";
import { DEFAULT_DEMO_YOUTUBE_ID } from "@/lib/config/videos";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export function DemoVideoSection() {
  const { t } = useLanguage();
  const videoId =
    process.env.NEXT_PUBLIC_TAXORYN_DEMO_YOUTUBE_ID || DEFAULT_DEMO_YOUTUBE_ID;

  return (
    <section id="demo-video" className="py-10 sm:py-14 bg-white border-b border-slate-200 scroll-mt-20">
      <Container>
        <SectionHeading
          badge={t.demoVideo.badge}
          badgeVariant="teal"
          title={t.demoVideo.title}
          description={t.demoVideo.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          {/* YouTube Video Player with Facade */}
          <YouTubeEmbed
            videoId={videoId}
            title={t.demoVideo.embedTitle}
            description={t.demoVideo.embedDesc}
            showYouTubeLink={true}
          />

          {/* Supporting Callout & Actions */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base font-bold text-[#07152B]">
                {t.demoVideo.walkthroughTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569]">
                {t.demoVideo.walkthroughDesc}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                href={siteConfig.links.bookDemo}
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="font-bold shadow-sm"
              >
                {t.demoVideo.scheduleWalkthrough}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
