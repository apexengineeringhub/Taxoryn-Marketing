import React from "react";
import { ContentFAQ } from "@/types/content";
import { HelpCircle } from "lucide-react";

interface ArticleFAQProps {
  faqs: ContentFAQ[];
}

export function ArticleFAQ({ faqs }: ArticleFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="space-y-4 pt-6 border-t border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex items-center gap-2">
        <HelpCircle className="w-5 h-5 text-[#009E77]" />
        <h2 className="text-xl sm:text-2xl font-bold text-[#07152B]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3 pt-2">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2"
          >
            <h3 className="text-sm sm:text-base font-bold text-[#07152B]">
              {faq.question}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
