import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WorkflowDiagram } from "@/components/marketing/WorkflowDiagram";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, CheckCircle2, ShoppingBag, Info } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Taxoryn Marketplace | Practice Discovery & Matching",
  description:
    "Taxoryn Marketplace is designed to help businesses and individuals discover relevant Indian tax professionals and practices.",
  path: "/marketplace",
});

export default function MarketplacePage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Taxoryn Marketplace"
          badgeVariant="emerald"
          title="Connect Practices with Customers Looking for Tax Services"
          description="Taxoryn Marketplace is designed to facilitate discovery between businesses seeking tax advisory and qualified tax practices across India. Practice profiles can include professional credentials and verification information, where applicable."
        />

        {/* Informative Status Banner */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-xs sm:text-sm text-slate-700 text-center flex items-center justify-center gap-2 mb-12">
          <Info className="w-4 h-4 text-[#009E77] shrink-0" />
          <span>
            Taxoryn Marketplace is currently in early onboarding for registered tax practices and consultants.
          </span>
        </div>

        <div className="mb-16">
          <WorkflowDiagram />
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#00D1A3]/10 border border-[#00D1A3]/30 flex items-center justify-center text-[#009E77]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#07152B]">
                Practice Profile & Discovery
              </h2>
              <p className="text-xs text-slate-500">
                Professional credentials & specializations • Geographical jurisdiction • Industry expertise
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Registered practices can configure a profile highlighting their service capabilities (such as GST compliances, Corporate Income Tax, Audit support, TDS management) and operational jurisdictions. Prospective clients searching for qualified advisory can submit structured project inquiries directly to the practice.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              "Structured requirement context from prospective clients",
              "Practice-controlled engagement acceptance",
              "Streamlined client intake workflow",
              "Direct connection into practice management portal",
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Practice profile creation is included with Taxoryn registration.
            </span>
            <Button
              href={siteConfig.links.joinEarlyAccess}
              variant="primary"
              size="md"
              icon={ArrowRight}
            >
              Join Early Access
            </Button>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
