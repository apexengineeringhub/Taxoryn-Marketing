import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Tax Practice Software for Small Tax Firms | Taxoryn",
  description:
    "Task delegation, partner review gates, and workload coordination for boutique Indian tax consultancies.",
  path: "/solutions/small-firm",
});

export default function SmallFirmPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Small Tax Firm"
          badgeVariant="teal"
          title="Team Coordination and Partner Oversight Made Simple"
          description="Empower your managers and article assistants while maintaining partner-level quality control across client filings."
        />

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-16">
          <h3 className="text-xl font-bold text-[#07152B]">Key Advantages for Growing Firms</h3>
          <ul className="space-y-3">
            {[
              "Granular role permissions for Partners, Tax Managers, and Article Assistants",
              "Client assignment scoping so staff access their designated files",
              "Review queues and partner sign-off stages before filing completions",
              "Practice-wide statutory deadline dashboard to track filing progress",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#0F172A]">
                <CheckCircle2 className="w-5 h-5 text-[#00D1A3] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 flex gap-4">
            <Button href={siteConfig.links.startFree} variant="primary" size="lg" icon={ArrowRight}>
              Get Started
            </Button>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
