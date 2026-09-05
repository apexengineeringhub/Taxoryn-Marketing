import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { BookOpen, FileSpreadsheet, FileCheck2, Receipt } from "lucide-react";

export const metadata = constructMetadata({
  title: "Tax Practice Resources & Compliance Guides | Taxoryn",
  description:
    "Educational guides, compliance calendars, and practice workflows for Indian tax professionals.",
  path: "/resources",
});

export default function ResourcesPage() {
  const categories = [
    {
      icon: FileSpreadsheet,
      title: "GST Practice Guides",
      description: "Step-by-step guides for GSTR-1, GSTR-3B reconciliation, 2B ITC matching, and annual GSTR-9 audits.",
    },
    {
      icon: FileCheck2,
      title: "Income Tax Computations",
      description: "Analysis of New vs Old tax regimes, deductions under Chapter VI-A, capital gains computations, and ITR schedules.",
    },
    {
      icon: Receipt,
      title: "TDS Compliance Handbook",
      description: "Quarterly return filing workflows for Forms 24Q, 26Q, and 27Q, plus Lower Deduction Certificate guidelines.",
    },
    {
      icon: BookOpen,
      title: "Practice Management Best Practices",
      description: "How modern Indian CA firms organize client document repositories, staff permissions, and client billing.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Knowledge Hub"
          badgeVariant="navy"
          title="Tax Practice Resources & Operational Guides"
          description="Actionable insights, statutory calendars, and management strategies curated for Indian tax practitioners."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Card
                key={idx}
                variant="interactive"
                padding="lg"
                className="bg-white border-slate-200 hover:border-[#00D1A3] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#07152B] mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {cat.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
