import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { siteConfig } from "@/lib/config/site";
import { Target, Users, Shield } from "lucide-react";

export const metadata = constructMetadata({
  title: "About Taxoryn | Empowering Indian Tax Practices",
  description:
    "Taxoryn is on a mission to simplify tax practice management for Indian Chartered Accountants and Tax Consultants.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        <SectionHeading
          badge="Our Mission"
          badgeVariant="navy"
          title="Empowering India's Tax Professionals with Purpose-Built Technology"
          description="We believe tax professionals should spend their valuable time advising clients and growing their practices, not wrestling with disjointed spreadsheets and communication tools."
        />

        <div className="max-w-3xl mx-auto space-y-8 mb-16 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#07152B]">
              Why We Built Taxoryn
            </h3>
            <p>
              India&apos;s tax landscape is dynamic and compliance-heavy. Between GST monthly filings, quarterly TDS reconciliations, Advance Tax schedules, and annual Income Tax return surges, tax practitioners carry enormous responsibility with rigid deadlines.
            </p>
            <p>
              Traditional generic software failed to bridge the gap between team task coordination, document collection, and actual tax computation workflows. Taxoryn was created to bring everything into one unified, secure, and beautiful operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center space-y-2">
              <Target className="w-6 h-6 text-[#082E5B] mx-auto" />
              <h4 className="font-bold text-[#07152B]">Accuracy</h4>
              <p className="text-xs text-slate-500">Built for precision across Indian tax statutes.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center space-y-2">
              <Users className="w-6 h-6 text-[#00D1A3] mx-auto" />
              <h4 className="font-bold text-[#07152B]">Practitioner First</h4>
              <p className="text-xs text-slate-500">Designed around real CA firm workflows.</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-slate-200 text-center space-y-2">
              <Shield className="w-6 h-6 text-sky-600 mx-auto" />
              <h4 className="font-bold text-[#07152B]">Security</h4>
              <p className="text-xs text-slate-500">End-to-end data isolation and privacy.</p>
            </div>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
