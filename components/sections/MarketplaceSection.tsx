import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WorkflowDiagram } from "@/components/marketing/WorkflowDiagram";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight } from "lucide-react";

export function MarketplaceSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Taxoryn Marketplace"
          badgeVariant="emerald"
          title="Connect practices with customers looking for tax services."
          description="Taxoryn Marketplace is designed to help customers discover relevant tax professionals and practices based on expertise and location."
        />

        {/* Workflow Diagram */}
        <div className="mb-12">
          <WorkflowDiagram />
        </div>

        {/* Value Proposition Box */}
        <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#07152B]">
              Looking to list your practice on Taxoryn Marketplace?
            </h3>
            <p className="text-sm text-[#475569] max-w-xl">
              Create a practice profile highlighting your jurisdictional expertise, firm credentials, and practice specializations for businesses seeking professional tax advisory.
            </p>
          </div>

          <Button
            href={siteConfig.links.marketplace}
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            className="shrink-0 font-bold"
          >
            Explore Marketplace
          </Button>
        </div>
      </Container>
    </section>
  );
}
