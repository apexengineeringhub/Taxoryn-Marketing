import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  CheckCircle2,
  ArrowRight,
  Users2,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
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

        {/* Small Firm Team Review Matrix Card */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#07152B] border border-slate-700 shadow-xl text-white space-y-4 mb-12">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <div className="flex items-center gap-2">
              <Users2 className="w-5 h-5 text-sky-400" />
              <div>
                <span className="font-bold text-sm block">Small Firm Team Workflow & Review Queue</span>
                <span className="text-[10px] text-slate-400">Illustrative interface with sample practice data</span>
              </div>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-mono">
              Role Scoped
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Senior Partners</div>
              <div className="text-xl font-bold text-white">6 Sign-offs Pending</div>
              <div className="text-amber-400 text-[10px]">Quality Gate Required</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Tax Managers</div>
              <div className="text-xl font-bold text-white">18 In Review</div>
              <div className="text-sky-400 text-[10px]">Reconciliation Reviewed</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Article Assistants</div>
              <div className="text-xl font-bold text-white">42 Drafting</div>
              <div className="text-[#00D1A3] text-[10px]">Active Pipelines</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-16">
          <h3 className="text-xl font-bold text-[#07152B]">Key Advantages for Growing Firms</h3>
          <ul className="space-y-3">
            {[
              "Granular role permissions for Partners, Tax Managers, and Article Assistants to protect client confidentiality",
              "Client assignment scoping so staff access only their designated files and compliance queues",
              "Mandatory partner sign-off stages before filing completions, preventing accidental submissions",
              "Practice-wide statutory deadline dashboard to track filing progress across all clients",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#0F172A]">
                <CheckCircle2 className="w-5 h-5 text-[#00D1A3] shrink-0 mt-0.5" />
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
