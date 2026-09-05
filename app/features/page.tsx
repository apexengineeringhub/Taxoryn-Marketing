import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { siteConfig } from "@/lib/config/site";
import {
  Users,
  FileSpreadsheet,
  FileCheck2,
  FolderLock,
  Laptop,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  ShieldCheck,
  Building2,
  Receipt,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Tax Practice Software Features | GST, ITR, TDS & Client Portal",
  description:
    "Comprehensive feature breakdown of Taxoryn practice management modules for Indian tax compliance, team delegation, document vaults, and client portals.",
  path: "/features",
});

export default function FeaturesPage() {
  const featurePillars = [
    {
      id: "organize",
      category: "ORGANIZE",
      title: "Practice & Client Management",
      badge: "Team & Directory",
      problem: "Client contact records, PAN/GSTIN credentials, and staff assignments are scattered across separate files.",
      solution: "Taxoryn unifies your client directory, team roles, and practice-wide statutory calendars in a secure, tenant-isolated workspace.",
      highlights: [
        "Structured master records for Individuals, HUFs, LLPs, and Corporate Entities",
        "Role-based access permissions for Partners, Tax Managers, and Article Assistants",
        "Practice-wide compliance calendar with statutory deadlines automatically synced",
      ],
      icon: Users,
      badgeColor: "navy" as const,
    },
    {
      id: "control",
      category: "CONTROL",
      title: "GST, ITR & TDS Compliance Engines",
      badge: "Compliance Oversight",
      problem: "Return deadlines are tracked verbally, and last-minute computation rushes risk unnoticed errors.",
      solution: "Dedicated statutory pipelines with automated status tracking and mandatory partner sign-off queues before filing.",
      highlights: [
        "Monthly GSTR-1 & GSTR-3B preparation boards with GSTR-2B ITC reconciliation matching",
        "AY 2025-26 & AY 2024-25 Income Tax computation pipelines with AIS/TIS data organization",
        "Quarterly TDS return tracking for Forms 24Q, 26Q, and 27Q with challan balance checks",
      ],
      icon: FileSpreadsheet,
      badgeColor: "teal" as const,
    },
    {
      id: "serve",
      category: "SERVE",
      title: "Client Portal & Document Hub",
      badge: "Client Experience",
      problem: "Following up for bank statements and emailing computation PDFs back and forth consumes hours of non-billable time.",
      solution: "A branded self-service portal where clients fulfill upload checklists and download filed return acknowledgments 24/7.",
      highlights: [
        "Document request checklists with custom file specifications sent via email & portal",
        "Secure repository organized by Financial Year, Client, and statutory tax head",
        "Immediate delivery of ITR-V, GSTR-3B ARN receipts, and tax payment challans",
      ],
      icon: Laptop,
      badgeColor: "cyan" as const,
    },
    {
      id: "grow",
      category: "GROW",
      title: "Taxoryn Marketplace & Practice Expansion",
      badge: "Practice Discovery",
      problem: "Tax practices often rely on informal word-of-mouth without a dedicated online discovery profile.",
      solution: "Showcase practice credentials and specializations to receive structured service requests from prospective business clients.",
      highlights: [
        "Practice profile showcasing industry specializations, credentials, and jurisdictions",
        "Structured client intake inquiries with clear scope definitions",
        "Seamless conversion from incoming marketplace lead to active practice workspace",
      ],
      icon: ShoppingBag,
      badgeColor: "emerald" as const,
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        {/* Features Header */}
        <SectionHeading
          badge="Features Architecture"
          badgeVariant="teal"
          title="Engineered for Every Step of Tax Practice Operations"
          description="What can Taxoryn help you manage? Explore how our dedicated modules streamline practice workflows from client intake to partner sign-off."
        />

        {/* 4 Feature Pillars with Problem & Solution Visual Cards */}
        <div className="space-y-12 mb-20">
          {featurePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                        {pillar.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#07152B]">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <Badge variant={pillar.badgeColor} size="sm" className="self-start sm:self-auto">
                    {pillar.badge}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Problem & Solution Callouts */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="text-xs font-bold text-rose-600 uppercase tracking-wide">
                        The Operational Challenge:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {pillar.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                        How Taxoryn Solves It:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        {pillar.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="lg:col-span-6 space-y-3">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Key Module Capabilities
                    </h4>
                    <ul className="space-y-2.5">
                      {pillar.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete 16 Core Capabilities Grid */}
        <CapabilitiesSection />
      </Container>

      {/* Conversion CTA */}
      <FinalCTASection />
    </div>
  );
}
