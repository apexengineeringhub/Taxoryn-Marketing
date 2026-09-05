"use client";

import React, { useState, useMemo } from "react";
import { ResourceArticle, ResourceCategory } from "@/types/content";
import { ArticleCard } from "./ArticleCard";
import { Search, Filter, BookOpen } from "lucide-react";

interface ResourceSearchFilterProps {
  categories: ResourceCategory[];
  articles: ResourceArticle[];
}

export function ResourceSearchFilter({
  categories,
  articles,
}: ResourceSearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [articles, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, compliance checklists, or keywords..."
              aria-label="Search resources"
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#00D1A3] focus:ring-2 focus:ring-[#00D1A3]/20 outline-none transition-all"
            />
          </div>

          {/* Category Dropdown (Mobile) / Pills (Desktop) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-[#082E5B] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Topics ({articles.length})
            </button>
            {categories.map((cat) => {
              const count = articles.filter((a) => a.category === cat.slug).length;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-[#082E5B] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.badge} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            No resources match your search
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search terms or select another category filter above.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-xs font-bold text-[#082E5B] hover:text-[#00D1A3] underline pt-2"
          >
            Clear Search & Filters
          </button>
        </div>
      )}
    </div>
  );
}
