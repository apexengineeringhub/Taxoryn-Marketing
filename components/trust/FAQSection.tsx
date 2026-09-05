"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { faqsData, FAQItem } from "@/lib/content/faqs";
import { ChevronDown, HelpCircle, Shield, Sparkles, Layers, DollarSign } from "lucide-react";

interface FAQSectionProps {
  initialCategory?: "all" | "general" | "security" | "features" | "pricing";
  title?: string;
  description?: string;
  limit?: number;
  showCategories?: boolean;
}

export function FAQSection({
  initialCategory = "all",
  title = "Frequently Asked Questions",
  description = "Transparent answers to common questions about Taxoryn's architecture, security, practice workflows, and early access program.",
  limit,
  showCategories = true,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "solo-vs-firm": true, // open first item by default for preview
  });

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "general", label: "General & Suitability", icon: Sparkles },
    { id: "security", label: "Security & Privacy", icon: Shield },
    { id: "features", label: "Workflows & Features", icon: Layers },
    { id: "pricing", label: "Pricing & Early Access", icon: DollarSign },
  ];

  const filteredFaqs = faqsData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Generate Schema.org FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: displayedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80" id="faqs">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        <SectionHeading
          badge="Clear Answers"
          badgeVariant="teal"
          title={title}
          description={description}
        />

        {/* Category Filters */}
        {showCategories && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#082E5B] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-[#082E5B]"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#00D1A3]" : "text-slate-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {displayedFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isOpen
                    ? "border-[#00D1A3]/60 ring-1 ring-[#00D1A3]/20 shadow-sm"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3] rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#07152B] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#082E5B]/5 text-[#082E5B]" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
