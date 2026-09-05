import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Taxoryn for Growing & Multi-Branch Practices",
  description:
    "Multi-location practice management, advanced firm analytics, and client acquisition on Taxoryn Marketplace.",
  path: "/solutions/growing-practice",
});

export default function GrowingPracticePage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        <SectionHeading
          badge="Growing Practice"
          badgeVariant="emerald"
          title="Scale Your Tax Practice Across Multiple Locations and High-Volume Clients"
          description="Consolidate practice operations across branch offices, corporate client groups, and specialized tax divisions."
        />

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-16">
          <h3 className="text-xl font-bold text-[#07152B]">Enterprise Practice Capabilities</h3>
          <ul className="space-y-3">
            {[
              "Multi-office hierarchy and consolidated firm-level reporting",
              "Taxoryn Marketplace integration for targeted client acquisition",
              "Custom SLA monitoring and team utilization metrics",
              "Enterprise-grade multi-tenant data isolation and audit trails",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#0F172A]">
                <CheckCircle2 className="w-5 h-5 text-[#00D1A3] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 flex gap-4">
            <Button href={siteConfig.links.startFree} variant="primary" size="lg" icon={ArrowRight} external>
              Start Practice Scale Trial
            </Button>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
