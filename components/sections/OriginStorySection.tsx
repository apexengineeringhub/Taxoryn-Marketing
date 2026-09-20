"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowRight, Quote } from "lucide-react";

export function OriginStorySection() {
  const { t } = useLanguage();

  return (
    <section
      id="origin-story"
      className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Story Card Container */}
          <div className="p-6 sm:p-9 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-6 relative">
            <div className="space-y-2.5 text-center">
              <div className="inline-flex items-center">
                <Badge variant="teal" size="md">
                  {t.story.badge}
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#07152B] tracking-tight leading-tight">
                {t.story.title}
              </h2>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal">
              <p>{t.story.paragraph1}</p>
              <p>{t.story.paragraph2}</p>
              <p className="font-medium text-[#07152B]">{t.story.paragraph3}</p>

              {/* Highlighted Founder Question */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border-l-4 border-[#00D1A3] shadow-xs space-y-1.5 my-4 relative">
                <Quote className="w-7 h-7 text-[#00D1A3]/25 absolute top-3.5 right-3.5 pointer-events-none" />
                <p className="text-base sm:text-lg font-bold text-[#082E5B] italic leading-snug">
                  &ldquo;{t.story.quote}&rdquo;
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#008766]">
                  {t.story.paragraph4}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {t.story.closing}
              </p>
            </div>

            {/* Bottom Footer Lockup */}
            <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm font-bold text-[#082E5B]">
                  <span className="text-[#082E5B]">TAXO</span>
                  <span className="text-[#00D1A3]">RYN</span>
                  <span className="text-slate-400 font-normal ml-2 text-xs">| Tax Organization. <span className="text-[#008766] font-medium">Your Own Network.</span></span>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t.story.descriptor}
                </p>
              </div>

              <Link
                href="/our-story"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082E5B] hover:text-[#00D1A3] transition-colors"
              >
                <span>{t.story.readFullStory}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
