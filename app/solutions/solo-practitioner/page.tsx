import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { siteConfig } from "@/lib/config/site";
import {
  CheckCircle2,
  ArrowRight,
  User,
  FileSpreadsheet,
  FileCheck2,
  FolderLock,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Tax Practice Software for Solo Practitioners & Independent CAs | Taxoryn",
  description:
    "A clean, single-pane command center for individual tax consultants and Chartered Accountants to manage clients, GST, ITR, and TDS filings.",
  path: "/solutions/solo-practitioner",
});

export default function SoloPractitionerPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Solo Practitioner"
          badgeVariant="navy"
          title="Run Your Independent Tax Practice with Enterprise Precision"
          description="Reduce administrative friction, automate deadline tracking, and organize client filing schedules in one focused workspace."
        />

        {/* Solo Workflow Visual Snippet Card */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#07152B] border border-slate-700 shadow-xl text-white space-y-4 mb-12">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#00D1A3]" />
              <span className="font-bold text-sm">Solo Practitioner Workspace View</span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#00D1A3]/20 text-[#00D1A3] font-mono">
              Single-Pane Focus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Direct Clients</div>
              <div className="text-xl font-bold text-white">45 Profiles</div>
              <div className="text-emerald-400 text-[10px]">KYC Uploads Organized</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Monthly GST Returns</div>
              <div className="text-xl font-bold text-white">28 Active</div>
              <div className="text-sky-400 text-[10px]">2B Auto-Reconciled</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Client Uploads</div>
              <div className="text-xl font-bold text-white">12 Pending</div>
              <div className="text-[#00D1A3] text-[10px]">Checklists Sent</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-16">
          <h3 className="text-xl font-bold text-[#07152B]">Why Solo Practitioners Choose Taxoryn</h3>
          <ul className="space-y-3">
            {[
              "Single unified dashboard for GST, ITR, TDS and statutory filings without complex IT overhead",
              "Document collection checklists that clients can review and upload securely via mobile or web",
              "Direct client portal where clients can access approved returns and computation sheets 24/7",
              "No server maintenance or complex installation required — fully cloud-native and accessible anywhere",
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
