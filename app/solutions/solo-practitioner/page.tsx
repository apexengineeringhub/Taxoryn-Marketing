import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Taxoryn for Solo Practitioners & Independent CAs",
  description:
    "A clean, single-pane command center for individual tax consultants and Chartered Accountants.",
  path: "/solutions/solo-practitioner",
});

export default function SoloPractitionerPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        <SectionHeading
          badge="Solo Practitioner"
          badgeVariant="navy"
          title="Run Your Independent Tax Practice with Enterprise Precision"
          description="Eliminate administrative friction and manage 100+ clients effortlessly without hiring extra administrative staff."
        />

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-16">
          <h3 className="text-xl font-bold text-[#07152B]">Why Solo Practitioners Choose Taxoryn</h3>
          <ul className="space-y-3">
            {[
              "Single unified dashboard for GST, ITR, TDS and Advance Tax filings",
              "Automated document request checklists that clients can fulfill from their phone",
              "Direct client portal so clients can download their own computations & acknowledgments",
              "Zero IT complexity or software installation needed — fully cloud-native",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#0F172A]">
                <CheckCircle2 className="w-5 h-5 text-[#00D1A3] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 flex gap-4">
            <Button href={siteConfig.links.startFree} variant="primary" size="lg" icon={ArrowRight} external>
              Start Free as Solo Practitioner
            </Button>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
