import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WorkflowDiagram } from "@/components/marketing/WorkflowDiagram";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { ArrowRight, CheckCircle2, ShieldCheck, ShoppingBag } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Taxoryn Marketplace | Practice Growth & Client Matching",
  description:
    "Grow your tax practice beyond your existing network. Connect with businesses and individuals seeking verified Indian tax advisors.",
  path: "/marketplace",
});

export default function MarketplacePage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Taxoryn Marketplace"
          badgeVariant="emerald"
          title="Connect with Businesses Needing Verified Tax Advisory"
          description="A structured matching platform that connects business tax requirements with specialized tax consultants and Chartered Accountants across India."
        />

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
                How Practice Listing Works
              </h2>
              <p className="text-xs text-slate-500">
                Verified practice credentials • Geographical jurisdiction • Industry specialization
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            When you register your practice on Taxoryn, you can create a public verified profile highlighting your certifications, expertise (e.g. GST litigation, Transfer Pricing, Corporate Income Tax, Start-up Compliances), and service location. Businesses searching for specialized advisors can submit structured inquiries directly into your practice inbox.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              "Structured enquiries with preliminary business context",
              "Direct conversion into active client in one click",
              "No cold calls or unstructured leads",
              "Integrated onboarding and document checklist",
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Listing is available for all registered Taxoryn practices.
            </span>
            <Button
              href={siteConfig.links.startFree}
              variant="primary"
              size="md"
              icon={ArrowRight}
              external
            >
              List Your Practice
            </Button>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
