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
  Building2,
  Clock,
  FileText,
  KeyRound,
  FileCheck,
  TrendingUp,
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
        "Standardized Kanban statuses: To Do, In Progress, Under Review, Ready for Filing, Completed",
        "Statutory due date alerts based on entity type and turnover thresholds",
        "Recurring engagement schedules preventing missed return deadlines",
      ],
      practicalImpact:
        "Partners never have to ask 'What is the status of this client's return?' Staff log into clear, prioritized daily work queues.",
      workbench: (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-[#082E5B]" />
              <span className="text-xs font-bold text-[#07152B]">Work Operating Board</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#008766] border border-emerald-100">
              Live Queue
            </span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#07152B]">GSTR-3B Filing (Oct 2026)</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  Under Review
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Apex Logistics LLP</span>
                <span>Due: 20 Nov 2026</span>
              </div>
              <div className="pt-0.5 text-[10px] text-slate-400 flex items-center justify-between">
                <span>Assignee: Priya S. (Senior)</span>
                <span className="text-[#082E5B] font-semibold">Priority: High</span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#07152B]">TDS 26Q Salary Filing</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#008766] border border-emerald-200">
                  Ready for Filing
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Shree Krishna Steels Pvt Ltd</span>
                <span>Due: 31 Oct 2026</span>
              </div>
              <div className="pt-0.5 text-[10px] text-slate-400 flex items-center justify-between">
                <span>Assignee: Amit K. (Article)</span>
                <span className="text-[#008766] font-semibold">Challans Verified</span>
              </div>
            </div>
          </div>
          <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200/80">
            <span>Role Permissions: Partner, Manager, Staff</span>
            <span className="font-semibold text-[#082E5B]">4 Return Queues</span>
          </div>
        </div>
      ),
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
      workbench: (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#009E77]" />
              <span className="text-xs font-bold text-[#07152B]">Client 360 Profile</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#008766] border border-emerald-100">
              Verified Entity
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-[#07152B] block">Apex Logistics LLP</span>
                <span className="text-[10px] text-slate-400 font-mono">LLPIN: AAB-1234 • Incorp: 2019</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                Corporate LLP
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[10px]">Income Tax PAN</span>
                <span className="font-mono font-semibold text-[#082E5B]">AABCA1234L</span>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[10px]">Active Retainers</span>
                <span className="font-semibold text-[#008766]">GST + TDS + Audit</span>
              </div>
            </div>
            <div className="space-y-1 pt-1 border-t border-slate-100 text-[11px]">
              <span className="text-slate-400 block text-[10px]">Multi-Branch GSTIN Registrations:</span>
              <div className="space-y-1 font-mono text-[10px] text-slate-700">
                <div className="flex justify-between">
                  <span>27AABCA1234L1Z5</span>
                  <span className="text-slate-400">Maharashtra (Principal)</span>
                </div>
                <div className="flex justify-between">
                  <span>24AABCA1234L1Z1</span>
                  <span className="text-slate-400">Gujarat (Branch)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200/80">
            <span>Authorized Signatory: Vikram Patel</span>
            <span className="font-semibold text-[#008766]">Portal Active</span>
          </div>
        </div>
      ),
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
      workbench: (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
            <div className="flex items-center gap-2">
              <FolderLock className="w-4 h-4 text-[#082E5B]" />
              <span className="text-xs font-bold text-[#07152B]">Client Document Vault</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-100">
              Encrypted
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2 text-xs">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#07152B]">Structured Folder Structure</span>
              <span className="text-slate-400 text-[10px]">AY 2026-27</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-1.5 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span className="font-medium text-slate-700">📁 Income Tax / FY 2025-26</span>
                <span className="text-[10px] text-slate-400 font-mono">4 Documents</span>
              </div>
              <div className="p-1.5 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span className="font-medium text-slate-700">📁 GST Returns & Challans</span>
                <span className="text-[10px] text-slate-400 font-mono">12 Documents</span>
              </div>
              <div className="p-1.5 rounded bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span className="font-medium text-slate-700">📁 Permanent Registration & Deeds</span>
                <span className="text-[10px] text-slate-400 font-mono">6 Documents</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 space-y-1 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#082E5B]">Class 3 DSC Token Status</span>
                <span className="font-bold text-[#008766]">Valid</span>
              </div>
              <div className="text-[10px] text-slate-600 flex justify-between">
                <span>Signatory: Rajesh Sharma</span>
                <span>Expires in 42 Days</span>
              </div>
            </div>
          </div>
          <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200/80">
            <span>Direct Client Upload Link</span>
            <span className="font-semibold text-[#008766]">UDIN Register Linked</span>
          </div>
        </div>
      ),
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
      workbench: (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#009E77]" />
              <span className="text-xs font-bold text-[#07152B]">Practice Intelligence Dashboard</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#008766] border border-emerald-100">
              Live Practice Metrics
            </span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2.5 text-xs">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <span className="text-base font-extrabold text-[#07152B] block">142</span>
                <span className="text-[10px] text-slate-400">Filed On-Time</span>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <span className="text-base font-extrabold text-[#009E77] block">98.4%</span>
                <span className="text-[10px] text-slate-400">Compliance Rate</span>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-100">
                <span className="text-base font-extrabold text-[#082E5B] block">3.2 d</span>
                <span className="text-[10px] text-slate-400">Avg Turnaround</span>
              </div>
            </div>
            <div className="space-y-1.5 pt-1 text-[11px]">
              <span className="text-slate-400 block text-[10px] font-medium">Team Capacity Distribution:</span>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span>Priya S. (Senior Associate)</span>
                  <span className="font-semibold text-slate-700">82% Load (34 Tasks)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-[#009E77] h-1.5 rounded-full" style={{ width: "82%" }} />
                </div>
              </div>
              <div className="space-y-1 pt-0.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span>Amit K. (Article Assistant)</span>
                  <span className="font-semibold text-slate-700">70% Load (28 Tasks)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-[#082E5B] h-1.5 rounded-full" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-200/80">
            <span>Bottlenecks Detected: 0</span>
            <span className="font-semibold text-[#008766]">Balanced Practice</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Platform Hero */}
      <section className="pt-10 pb-12 sm:pt-12 sm:pb-14 bg-[#F8FAFC] border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3.5">
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
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
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

      {/* Connected Architecture Narrative (Light Mode SaaS) */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200/80">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
            <div className="text-center space-y-2 sm:space-y-2.5">
              <Badge variant="teal" size="sm">
                CONNECTED ARCHITECTURE
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#07152B]">
                How the Four Dimensions Work Together
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                In a typical practice, changing a client's status requires updating multiple spreadsheets. In Taxoryn, an action in one process immediately updates the others.
              </p>
            </div>

            {/* Light-Mode Flow Illustration */}
            <div className="p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2 hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#008766] border border-emerald-100 flex items-center justify-center font-bold text-xs font-mono">
                    01
                  </div>
                  <div className="font-bold text-[#07152B] text-sm">Client 360</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A client is onboarded with PAN and GSTINs. Services and active retainers are defined.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2 hover:border-sky-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center font-bold text-xs font-mono">
                    02
                  </div>
                  <div className="font-bold text-[#07152B] text-sm">Work Schedules</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Monthly GST, quarterly TDS, and statutory tasks auto-generate on the team's work operating board.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2 hover:border-amber-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center font-bold text-xs font-mono">
                    03
                  </div>
                  <div className="font-bold text-[#07152B] text-sm">Document Vault</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Missing statements are requested from the client. Files link directly to the return task.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2 hover:border-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#008766] border border-emerald-100 flex items-center justify-center font-bold text-xs font-mono">
                    04
                  </div>
                  <div className="font-bold text-[#07152B] text-sm">Intelligence</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Filing completions update practice health metrics and trigger billing readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Deep-Dive into Each Process (Alternating Text and Authentic Product-Preview Layout) */}
      <section className="py-10 sm:py-14 lg:py-18 bg-[#F8FAFC]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
            {processes.map((proc, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={proc.id}
                  id={proc.id}
                  className="p-6 sm:p-8 lg:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9 items-center">
                    {/* Text Column */}
                    <div className={`space-y-4 ${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#07152B] text-[#00D1A3]">
                          {proc.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">Core Platform Dimension</span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#07152B] tracking-tight">
                          {proc.title}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-[#009E77] mt-0.5">
                          {proc.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {proc.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Verified Capabilities
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {proc.capabilities.map((cap) => (
                            <div key={cap} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-[#009E77] shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 space-y-1">
                        <span className="font-bold text-[#082E5B] block">Practical Value for Practitioners:</span>
                        <p className="text-slate-600">{proc.practicalImpact}</p>
                      </div>
                    </div>

                    {/* Preview / Workbench Column */}
                    <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                      {proc.workbench}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Box */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-200">
        <Container>
          <div className="relative p-6 sm:p-8 lg:p-9 rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#07152B] via-[#082042] to-[#050F1E] border border-slate-700/80 text-white text-center space-y-4 max-w-4xl mx-auto shadow-2xl shadow-[#07152B]/10 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none rounded-[inherit]" />
            <div className="relative z-10 space-y-4">
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
          </div>
        </Container>
      </section>
    </div>
  );
}
