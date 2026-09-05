import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WorkflowDiagram } from "@/components/marketing/WorkflowDiagram";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, ShieldCheck, Sparkles, Building } from "lucide-react";

export function MarketplaceSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Taxoryn Marketplace"
          badgeVariant="emerald"
          title="Grow your practice beyond your existing client base."
          description="A structured ecosystem connecting businesses needing specialized tax expertise with verified tax practitioners and consultancy practices."
        />

        {/* Workflow Diagram */}
        <div className="mb-12">
          <WorkflowDiagram />
        </div>

        {/* Value Proposition Box */}
        <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#07152B]">
              Ready to list your practice on Taxoryn Marketplace?
            </h3>
            <p className="text-sm text-[#475569] max-w-xl">
              Highlight your jurisdictional expertise, firm credentials, and practice specializations directly to businesses seeking trusted tax advisors.
            </p>
          </div>

          <Button
            href={siteConfig.links.marketplace}
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            className="shrink-0 font-bold"
          >
            Explore Taxoryn Marketplace
          </Button>
        </div>
      </Container>
    </section>
  );
}
