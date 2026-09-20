"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ResourceSearchFilter } from "@/components/resources/ResourceSearchFilter";
import { ArticleCard } from "@/components/resources/ArticleCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  RESOURCE_CATEGORIES,
  RESOURCE_ARTICLES,
} from "@/lib/content/resources";
import {
  BookOpen,
  FileSpreadsheet,
  FileCheck2,
  Receipt,
  FolderLock,
  Building2,
  Sparkles,
} from "lucide-react";

export function ResourcesClientContent() {
  const { t } = useLanguage();
  const r = t.pages.resources;
  const featuredArticles = RESOURCE_ARTICLES.filter((a) => a.featured);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-5 h-5 text-[#082E5B]" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5 text-[#082E5B]" />;
      case "Receipt":
        return <Receipt className="w-5 h-5 text-[#082E5B]" />;
      case "FolderLock":
        return <FolderLock className="w-5 h-5 text-[#082E5B]" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-[#082E5B]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#082E5B]" />;
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      <div className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC]">
        <Container>
        {/* Knowledge Hub Header */}
        <SectionHeading
          badge={r.badge}
          badgeVariant="teal"
          title={r.title}
          description={r.description}
        />

        {/* Featured Cornerstone Guides */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00D1A3]" />
              <h2 className="text-lg sm:text-xl font-bold text-[#07152B]">
                {r.featuredTitle}
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              {r.featuredSubtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Topic Categories Overview */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-lg sm:text-xl font-bold text-[#07152B] mb-5">
            {r.disciplinesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {RESOURCE_CATEGORIES.map((cat) => {
              const articleCount = RESOURCE_ARTICLES.filter(
                (a) => a.category === cat.slug
              ).length;

              return (
                <div
                  key={cat.id}
                  id={cat.slug}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5 flex flex-col justify-between hover:border-[#00D1A3] transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center">
                        {getCategoryIcon(cat.iconName)}
                      </div>
                      <Badge variant="navy" size="sm">
                        {articleCount} {articleCount === 1 ? "Guide" : "Guides"}
                      </Badge>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#07152B]">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cat.shortDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Search & Filterable Library */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-lg sm:text-xl font-bold text-[#07152B] mb-5">
            All Practice Resources & Operational Checklists
          </h2>
          <ResourceSearchFilter
            categories={RESOURCE_CATEGORIES}
            articles={RESOURCE_ARTICLES}
          />
        </div>
      </Container>
    </div>

    {/* Conversion Final CTA */}
    <FinalCTASection />
  </div>
);
}
