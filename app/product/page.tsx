import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { ProductPreview } from "@/components/marketing/ProductPreview";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { siteConfig } from "@/lib/config/site";
import {
  Users,
  ShieldCheck,
  FileCheck2,
  FolderLock,
  ShoppingBag,
  History,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Layers,
  Calendar,
  Laptop,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Tax Practice Management Platform | Product Architecture",
  description:
    "Explore how Taxoryn helps Indian Chartered Accountants and tax consultancies manage clients, team review queues, GST, ITR, TDS, and client portals in one connected workspace.",
  path: "/product",
});

export default function ProductPage() {
  const lifecycleStages = [
    {
      stage: "01",
      name: "ORGANIZE",
      tagline: "Clients & Team Scoping",
      description: "Centralize your client master directory with entity structures, PAN/GSTIN profiles, and granular role assignments for partners, managers, and article assistants.",
      icon: Users,
      badgeColor: "navy" as const,
    },
    {
      stage: "02",
      name: "CONTROL",
      tagline: "Statutory Compliance Pipelines",
      description: "Track monthly GST, quarterly TDS, and annual ITR return stages with mandatory partner review gates before official government submission.",
      icon: FileCheck2,
      badgeColor: "teal" as const,
    },
    {
      stage: "03",
      name: "SERVE",
      tagline: "Client Portal & Documents",
      description: "Deliver a modern client experience with self-service access to filed acknowledgments, computation sheets, and structured document upload checklists.",
      icon: Laptop,
      badgeColor: "cyan" as const,
    },
    {
      stage: "04",
      name: "GROW",
      tagline: "Marketplace & Enquiries",
      description: "Publish your verified practice credentials on the Taxoryn Marketplace to connect with businesses seeking professional tax advisory in your jurisdiction.",
      icon: ShoppingBag,
      badgeColor: "emerald" as const,
    },
    {
      stage: "05",
      name: "RETAIN",
      tagline: "Audit History & Archives",
      description: "Maintain complete multi-year compliance histories, computation workpapers, and immutable activity logs that stay secure regardless of team turnover.",
      icon: History,
      badgeColor: "navy" as const,
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        {/* Product Page Hero */}
        <SectionHeading
          badge="Product Overview"
          badgeVariant="navy"
          title="The Connected Operating System for Indian Tax Practices"
          description="Taxoryn eliminates fragmented spreadsheets, chat groups, and lost documents by uniting your client directory, compliance pipelines, and client portal into one unified workspace."
        />

        {/* 1. Interactive Product Preview */}
        <div className="mb-20">
          <ProductPreview />
        </div>

        {/* 2. The 5-Stage Practice Lifecycle (How Taxoryn Works) */}
        <div className="mb-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="teal" size="md">
              END-TO-END PRACTICE LIFECYCLE
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#07152B] tracking-tight">
              How a Modern Tax Practice Operates on Taxoryn
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From initial client intake to final return acknowledgment and practice growth, every step follows a structured standard operating procedure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleStages.map((stg) => {
              const Icon = stg.icon;
              return (
                <Card
                  key={stg.stage}
                  variant="interactive"
                  padding="lg"
                  className="bg-white border-slate-200 hover:border-[#00D1A3] flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        STAGE {stg.stage}
                      </span>
                      <Badge variant={stg.badgeColor} size="sm">
                        {stg.name}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-[#07152B]">
                        {stg.tagline}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stg.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 3. The Transformation: Traditional vs Taxoryn */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152B]">
              Why Practices Switch to Taxoryn
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Comparing traditional ad-hoc tools with a purpose-built tax practice operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fragmented Approach */}
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-4">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                <XCircle className="w-5 h-5 text-rose-600" />
                <span>Traditional Fragmented Workflow</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Spreadsheets with version conflicts and missing update notes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Client bank statements and Form 16s lost in chat threads</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>No partner review gates before last-minute portal filings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Loss of filing history and client notes when staff or trainees leave</span>
                </li>
              </ul>
            </div>

            {/* Taxoryn Connected Workspace */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Taxoryn Connected Workspace</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Single-pane practice dashboard with unified compliance health</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Structured document upload checklists and dedicated client portal</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Mandatory partner sign-off queues to ensure quality control</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>Immutable audit logging and historical return archives preserved</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* 4. Complete Feature Capabilities Section */}
      <CapabilitiesSection />

      {/* 5. Final Conversion CTA */}
      <FinalCTASection />
    </div>
  );
}
