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
      className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Story Card Container */}
          <div className="p-7 sm:p-11 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-7 relative">
            <div className="space-y-3 text-center">
              <div className="inline-flex items-center">
                <Badge variant="teal" size="md">
                  {t.story.badge}
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07152B] tracking-tight">
                {t.story.title}
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>{t.story.paragraph1}</p>
              <p>{t.story.paragraph2}</p>
              <p className="font-medium text-[#07152B]">{t.story.paragraph3}</p>

              {/* Highlighted Founder Question */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border-l-4 border-[#00D1A3] space-y-2 my-5 relative">
                <Quote className="w-8 h-8 text-[#00D1A3]/30 absolute top-4 right-4 pointer-events-none" />
                <p className="text-lg sm:text-xl font-bold text-[#082E5B] italic leading-snug">
                  &ldquo;{t.story.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[#00D1A3]">
                  {t.story.paragraph4}
                </p>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                {t.story.closing}
              </p>
            </div>

            {/* Bottom Footer Lockup */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-[#082E5B]">
                  <span className="text-[#082E5B]">TAXO</span>
                  <span className="text-[#00D1A3]">RYN</span>
                  <span className="text-slate-400 font-normal ml-2 text-xs">| Tax Organization. <span className="text-[#00D1A3] font-medium">Your Own Network.</span></span>
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.story.descriptor}
                </p>
              </div>

              <Link
                href="/our-story"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#082E5B] hover:text-[#00D1A3] transition-colors"
              >
                <span>{t.story.readFullStory}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
