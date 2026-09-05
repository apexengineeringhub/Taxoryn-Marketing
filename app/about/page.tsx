import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { siteConfig } from "@/lib/config/site";
import {
  Target,
  Users,
  Shield,
  Layers,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Clock,
  HeartHandshake,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About Taxoryn | Empowering Indian Tax Practices",
  description:
    "Taxoryn is on a mission to simplify tax practice management for Indian Chartered Accountants, Tax Consultants, and corporate advisory firms.",
  path: "/about",
});

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Practitioner-First Engineering",
      description:
        "We build for the actual realities of Indian tax compliance—not generic task boards. Every workflow reflects the rhythm of monthly GST filings, quarterly TDS schedules, and annual ITR peak seasons.",
    },
    {
      icon: Shield,
      title: "Data Sovereignty & Privacy",
      description:
        "Your practice records and client financials are your firm's exclusive property. We enforce strict logical tenant isolation and never monetize or share your client intelligence.",
    },
    {
      icon: Target,
      title: "Accuracy & Quality Control",
      description:
        "Filing errors carry statutory penalties. We build mandatory partner sign-off queues, computation workpaper checks, and audit trails directly into the core workflow.",
    },
    {
      icon: HeartHandshake,
      title: "Honest, Transparent Partnership",
      description:
        "We avoid fabricated claims, fake metrics, and misleading feature promises. We partner directly with practicing CAs and consultants to solve real operational bottlenecks.",
    },
  ];

  const boundaries = [
    {
      type: "What Taxoryn Is",
      icon: CheckCircle2,
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-200",
      badgeColor: "teal" as const,
      items: [
        "A unified practice operating system for client records, compliance pipelines, and team tasks",
        "A structured document collection portal that eliminates messy WhatsApp chats and email attachments",
        "An internal review and sign-off engine ensuring multi-tier quality control before filings",
        "A multi-year compliance repository that preserves institutional memory despite staff turnover",
        "A discovery marketplace for tax practitioners to connect with quality business clients",
      ],
    },
    {
      type: "What Taxoryn Does Not Replace",
      icon: XCircle,
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      badgeColor: "navy" as const,
      items: [
        "Does not replace the professional statutory judgment and advisory of the Chartered Accountant",
        "Does not bypass official government portals (Income Tax, GSTN, TRACES)",
        "Does not hold or manage practitioner DSC tokens without direct practitioner authorization",
        "Does not provide automated legal/tax advice without practitioner oversight",
        "Does not lock practice data in proprietary silos—full data export remains available",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        {/* Mission Hero */}
        <SectionHeading
          badge="Our Mission"
          badgeVariant="navy"
          title="Empowering India's Tax Professionals with Purpose-Built Technology"
          description="We believe tax professionals should spend their valuable time advising clients and growing their practices, not wrestling with disjointed spreadsheets, missing documents, and chaotic chat threads."
        />

        {/* Why We Built Taxoryn */}
        <div className="max-w-4xl mx-auto space-y-12 mb-20 text-slate-700 leading-relaxed">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <Badge variant="teal" size="sm">
              THE STORY BEHIND TAXORYN
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152B] tracking-tight">
              Why We Built Taxoryn
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              India&apos;s tax landscape is among the most dynamic and compliance-intensive in the world. Between monthly GSTR-1 and GSTR-3B filings, quarterly TDS reconciliations, Advance Tax schedules, and high-volume annual Income Tax return surges, tax practitioners carry immense operational responsibility with unforgiving statutory deadlines.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Yet most firms are forced to manage their practice across a disconnected patchwork of spreadsheets, desktop filing software, generic task tools, and endless WhatsApp messages. Important client documents get lost, team handovers cause bottlenecks, and partners spend late nights chasing status updates instead of reviewing quality.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium text-[#082E5B]">
              Taxoryn was created to solve this fragmentation. We built a unified, secure operating system designed specifically for the statutory rhythms of Indian tax practices.
            </p>
          </div>

          {/* Core Principles */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="teal" size="sm">
                OUR PRINCIPLES
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152B]">
                How We Build for the Profession
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Card
                    key={i}
                    variant="interactive"
                    padding="lg"
                    className="bg-white border-slate-200 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#07152B]">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {v.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* What Taxoryn Is vs What It Does Not Replace */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="navy" size="md">
                PRODUCT BOUNDARIES
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152B]">
                Clear Product Boundaries
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Understanding what Taxoryn provides and how it complements your professional expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boundaries.map((b, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl ${b.bgColor} border ${b.borderColor} space-y-4`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#07152B] text-base">
                      {b.type}
                    </h3>
                    <Badge variant={b.badgeColor} size="sm">
                      {b.type.includes("Not") ? "Respecting the CA" : "Core Platform"}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {b.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                      >
                        <span className="text-[#00D1A3] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
