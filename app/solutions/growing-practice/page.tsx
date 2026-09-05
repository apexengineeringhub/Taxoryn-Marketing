import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Tax Practice Software for Growing Practices | Taxoryn",
  description:
    "Multi-location practice management, consolidated firm reporting, and client discovery on Taxoryn Marketplace.",
  path: "/solutions/growing-practice",
});

export default function GrowingPracticePage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Growing Practice"
          badgeVariant="emerald"
          title="Scale Your Tax Practice Across Multiple Locations and Client Portfolios"
          description="Consolidate practice operations across branch locations, corporate client entities, and specialized tax divisions."
        />

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-16">
          <h3 className="text-xl font-bold text-[#07152B]">Practice Scale Capabilities</h3>
          <ul className="space-y-3">
            {[
              "Multi-office hierarchy and consolidated firm-level reporting",
              "Taxoryn Marketplace integration for client discovery",
              "Team workload distribution and filing progress analytics",
              "Tenant-aware data partitioning and immutable audit logging",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href={siteConfig.links.joinEarlyAccess} variant="primary" size="lg" icon={ArrowRight}>
              Join Early Access
            </Button>
            <Button href={siteConfig.links.bookDemo} variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
