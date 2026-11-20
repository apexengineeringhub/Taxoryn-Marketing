import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  CheckSquare,
  Users,
  FolderLock,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Layers,
  Sparkles,
  Smartphone,
  Globe,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Taxoryn Platform — Four Connected Smart Processes for Tax Practices",
  description:
    "Explore the four core dimensions of Taxoryn: Smart Work Management, Smart Client Management, Smart Document Management, and Practice Intelligence.",
  alternates: {
    canonical: "https://taxoryn.com/platform",
  },
};

export default function PlatformPage() {
  const processes = [
    {
      id: "smart-work",
      badge: "Pillar 01",
      title: "Smart Work Management",
      subtitle: "Organized execution across tasks, engagements, compliance, and deadlines.",
      description:
        "Tax practice management requires tracking hundreds of statutory deadlines across multiple clients every month. Smart Work Management brings work into one structured board with standardized task templates, assignment tracking, and automated statutory calendar mapping.",
      capabilities: [
        "Pre-built checklists for monthly GSTR-1, GSTR-3B, quarterly TDS (24Q, 26Q), and annual ITR filings",
        "Role-based task assignment between partners, managers, and article assistants",
        "Clear task statuses: Not Started, In Data Gathering, Drafting, Partner Review, and Client Sign-off",
        "Statutory due date alerts based on entity type and turnover thresholds",
        "Recurring engagement schedules preventing missed return deadlines",
      ],
      practicalImpact:
        "Partners never have to ask 'What is the status of this client's return?' Staff log into clear, prioritized daily work queues.",
    },
    {
      id: "smart-client",
      badge: "Pillar 02",
      title: "Smart Client Management",
      subtitle: "A connected, complete 360° record of every client and stakeholder.",
      description:
        "Client details shouldn't be scattered between old physical files, multiple Excel sheets, and email contacts. Smart Client Management creates a single source of truth for every individual, partnership, LLP, and corporate client your practice serves.",
      capabilities: [
        "Unified Client 360 profile with verified PAN, state-wise GSTINs, and CIN details",
        "Stakeholder directory: managing directors, partners, accountants, and authorized signatories",
        "Complete historical log of active and completed engagements across all financial years",
        "Direct client portal enablement allowing clients to view filing receipts and upload documents",
        "Multi-branch GST tracking for clients operating across several Indian states",
      ],
      practicalImpact:
        "Any team member with proper permissions can instantly pull up a client's entire tax profile and compliance history in seconds.",
    },
    {
      id: "smart-document",
      badge: "Pillar 03",
      title: "Smart Document Management",
      subtitle: "Frictionless document collection, organized storage, and audit trails.",
      description:
        "Tax professionals spend up to 30% of their time chasing missing invoices, bank statements, and challans. Smart Document Management introduces structured client collection requests and organized cloud storage tied directly to client files.",
      capabilities: [
        "Client document collection requests with direct upload links (no login required for clients)",
        "Structured folder categorization by Assessment Year, Financial Year, and statutory return type",
        "Permanent document repository for registration certificates, deeds, and MOA/AOA",
        "Digital signature (DSC) expiry tracking and UDIN register integration",
        "Access logging to ensure confidential financial data remains protected",
      ],
      practicalImpact:
        "Files arrive organized into the correct client folder ready for preparation, ending the scramble through email inboxes.",
    },
    {
      id: "practice-intelligence",
      badge: "Pillar 04",
      title: "Practice Intelligence",
      subtitle: "Operational visibility into team workload, bottlenecks, and firm capacity.",
      description:
        "Modern CA firms require real-time visibility into practice operations to maintain profitability and service quality. Practice Intelligence aggregates firm activity into actionable dashboards without requiring manual data compilation.",
      capabilities: [
        "Real-time overview of pending, in-progress, and filed returns across the practice",
        "Team workload distribution analytics to identify overburdened staff before deadlines",
        "Turnaround time benchmarks from initial client document receipt to filing completion",
        "Client service tracking to ensure retainers and ad-hoc advisory services are delivered as agreed",
        "Exportable compliance summary reports for partner review meetings",
      ],
      practicalImpact:
        "Partners make staffing and practice decisions based on verified operational data rather than guesswork.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Platform Hero */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-[#F8FAFC] border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center">
              <Badge variant="navy" size="md">
                THE TAXORYN PLATFORM
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07152B] tracking-tight leading-tight">
              Four Connected Smart Processes.
              <br />
              <span className="text-[#009E77]">One Cohesive Workspace.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Taxoryn is not a disconnected set of utilities. It is a unified tax practice management platform where clients, work, documents, and intelligence continuously reinforce each other.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={siteConfig.links.joinEarlyAccess}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-sm font-bold"
              >
                Request Early Access
              </Button>
              <Button
                href={siteConfig.links.login}
                variant="outline"
                size="lg"
                className="font-semibold"
              >
                Sign In to Web App
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Connected Architecture Narrative */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#07152B]">
                How the Four Dimensions Work Together
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                In a typical practice, changing a client's status requires updating multiple spreadsheets. In Taxoryn, an action in one process immediately updates the others.
              </p>
            </div>

            {/* Interactive Flow Illustration */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#07152B] text-white border border-slate-800 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00D1A3]/20 text-[#00D1A3] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <div className="font-bold text-white text-sm">Client 360</div>
                  <p className="text-xs text-slate-400">
                    A client is onboarded with PAN and GSTINs. Services and active retainers are defined.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <div className="font-bold text-white text-sm">Work Schedules</div>
                  <p className="text-xs text-slate-400">
                    Monthly GST, quarterly TDS, and statutory tasks auto-generate on the team's work operating board.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <div className="font-bold text-white text-sm">Document Vault</div>
                  <p className="text-xs text-slate-400">
                    Missing statements are requested from the client. Files link directly to the return task.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <div className="font-bold text-white text-sm">Intelligence</div>
                  <p className="text-xs text-slate-400">
                    Filing completions update practice health metrics and trigger billing readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Deep-Dive into Each Process */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {processes.map((proc, index) => (
              <div
                key={proc.id}
                id={proc.id}
                className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#07152B] text-[#00D1A3]">
                    {proc.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Core Platform Dimension</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#07152B] tracking-tight">
                    {proc.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#009E77] mt-1">
                    {proc.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {proc.description}
                </p>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Verified Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {proc.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#009E77] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 space-y-1">
                  <span className="font-bold text-[#082E5B] block">Practical Value for Practitioners:</span>
                  <p className="text-slate-600">{proc.practicalImpact}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Box */}
      <section className="py-12 bg-white border-t border-slate-200">
        <Container>
          <div className="p-8 sm:p-10 rounded-2xl bg-[#07152B] text-white text-center space-y-5 max-w-3xl mx-auto shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Experience the Four Smart Processes in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Join Indian CA firms and independent practitioners who are modernizing their practice operations with Taxoryn.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={siteConfig.links.joinEarlyAccess}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="font-bold"
              >
                Get Early Access
              </Button>
              <Button
                href="/download"
                variant="secondary-dark"
                size="lg"
                className="font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border-slate-700 hover:border-slate-600 opacity-100 shadow-xs focus-visible:ring-offset-[#07152B]"
              >
                Download Android App
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
