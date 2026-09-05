import React from "react";
import Link from "next/link";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { ResourceArticle } from "@/types/content";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface ArticleCardProps {
  article: ResourceArticle;
  badgeVariant?: "navy" | "teal" | "emerald" | "cyan";
}

export function ArticleCard({
  article,
  badgeVariant = "teal",
}: ArticleCardProps) {
  return (
    <Card
      variant="interactive"
      padding="lg"
      className="bg-white border-slate-200 hover:border-[#00D1A3] flex flex-col justify-between transition-all duration-200"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant={badgeVariant} size="sm">
            {article.category.toUpperCase()}
          </Badge>
          <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
            <Clock className="w-3 h-3" />
            {article.readingTime}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#07152B] hover:text-[#082E5B] transition-colors leading-snug">
          <Link
            href={`/resources/${article.slug}`}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {article.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {article.description}
        </p>
      </div>

      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          Updated {article.updatedDate}
        </span>
        <Link
          href={`/resources/${article.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#082E5B] hover:text-[#00D1A3] transition-colors"
        >
          <span>Read Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Card>
  );
}
