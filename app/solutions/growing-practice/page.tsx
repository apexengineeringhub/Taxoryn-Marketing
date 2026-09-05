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
  Building2,
  ShoppingBag,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
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

        {/* Growing Practice Multi-Branch Matrix Card */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#07152B] border border-slate-700 shadow-xl text-white space-y-4 mb-12">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-sm">Multi-Branch Practice Hierarchy & Marketplace Hub</span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
              Enterprise Scale
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Consolidated Offices</div>
              <div className="text-xl font-bold text-white">4 Locations</div>
              <div className="text-emerald-400 text-[10px]">Bengaluru • Mumbai • Pune • Delhi</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Corporate Clients</div>
              <div className="text-xl font-bold text-white">260 Entities</div>
              <div className="text-sky-400 text-[10px]">Multi-GSTIN Hierarchies</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1.5">
              <div className="text-slate-400 text-[11px]">Marketplace Inquiries</div>
              <div className="text-xl font-bold text-white">8 In Review</div>
              <div className="text-[#00D1A3] text-[10px]">Direct Practice Discovery</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 mb-16">
          <h3 className="text-xl font-bold text-[#07152B]">Practice Scale Capabilities</h3>
          <ul className="space-y-3">
            {[
              "Multi-office hierarchy and consolidated firm-level reporting across partners and regional branches",
              "Taxoryn Marketplace integration for qualified prospective client discovery and intake",
              "Team workload distribution, bottleneck monitoring, and compliance analytics across corporate portfolios",
              "Tenant-aware data partitioning, role-based access control, and immutable audit logging",
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
