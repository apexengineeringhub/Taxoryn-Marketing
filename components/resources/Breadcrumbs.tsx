import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.href ? `https://taxoryn.com${item.href}` : undefined,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-slate-500 hover:text-[#082E5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-[#082E5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-semibold text-slate-800 line-clamp-1 max-w-[240px] sm:max-w-none"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
