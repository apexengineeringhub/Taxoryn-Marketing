import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Breadcrumbs } from "@/components/resources/Breadcrumbs";
import { ArticleContentRenderer } from "@/components/resources/ArticleContentRenderer";
import { TaxDisclaimer } from "@/components/resources/TaxDisclaimer";
import { ArticleFAQ } from "@/components/resources/ArticleFAQ";
import { ArticleCTA } from "@/components/resources/ArticleCTA";
import { ArticleCard } from "@/components/resources/ArticleCard";
import {
  RESOURCE_ARTICLES,
  getArticleBySlug,
  getCategoryBySlug,
  getRelatedArticles,
} from "@/lib/content/resources";
import {
  Clock,
  Calendar,
  User,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return RESOURCE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return constructMetadata({
      title: "Resource Not Found | Taxoryn",
      path: "/resources",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: article.seoTitle || `${article.title} | Taxoryn`,
    description: article.seoDescription || article.description,
    path: `/resources/${article.slug}`,
  });
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = getCategoryBySlug(article.category);
  const relatedArticles = getRelatedArticles(article);

  // Article Schema.org JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: article.author,
      url: "https://taxoryn.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Taxoryn",
      url: "https://taxoryn.com",
      logo: {
        "@type": "ImageObject",
        url: "https://taxoryn.com/brand/logo.svg",
      },
    },
    datePublished: "2026-09-01T00:00:00+05:30",
    dateModified: "2026-09-05T00:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://taxoryn.com/resources/${article.slug}`,
    },
  };

  const breadcrumbItems = [
    { label: "Resources", href: "/resources" },
    {
      label: category ? category.name : "Guides",
      href: `/resources#${article.category}`,
    },
    { label: article.title },
  ];

  return (
    <article className="py-10 sm:py-16 bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Container size="narrow">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Article Header */}
        <header className="space-y-4 pb-8 mb-8 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Badge variant="teal" size="sm">
              {category ? category.badge : article.category.toUpperCase()}
            </Badge>
            <span className="text-xs text-slate-400 font-medium">
              {article.type}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#07152B] tracking-tight leading-tight text-balance">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty">
            {article.description}
          </p>

          {/* Metadata Strip */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Updated {article.updatedDate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{article.readingTime}</span>
            </span>
          </div>
        </header>

        {/* Main Article Content */}
        <ArticleContentRenderer
          sections={article.sections}
          keyTakeaways={article.keyTakeaways}
        />

        {/* Official Sources Section */}
        {article.officialSources && article.officialSources.length > 0 && (
          <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3 my-8 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Official Government & Statutory References
            </h3>
            <ul className="space-y-2 text-xs">
              {article.officialSources.map((src, i) => (
                <li key={i}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#082E5B] hover:text-[#00D1A3] font-semibold underline underline-offset-2"
                  >
                    <span>{src.title}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <span className="text-slate-400 ml-2">({src.authority})</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Statutory Tax Disclaimer */}
        <TaxDisclaimer />

        {/* Contextual FAQs */}
        {article.faqs && article.faqs.length > 0 && (
          <ArticleFAQ faqs={article.faqs} />
        )}

        {/* Contextual Conversion CTA */}
        <ArticleCTA
          ctaType={article.ctaType}
          title={article.ctaTitle}
          description={article.ctaDescription}
        />

        {/* Related Resources */}
        {relatedArticles.length > 0 && (
          <section className="pt-10 border-t border-slate-200 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#07152B]">
                Related Practice Resources
              </h2>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#082E5B] hover:text-[#00D1A3]"
              >
                <span>View All Resources</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}
