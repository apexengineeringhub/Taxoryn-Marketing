import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  CheckCircle2,
  ArrowRight,
  FolderSync,
  ShieldCheck,
  Users,
  TrendingUp,
  Calendar,
  FileCheck,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Taxoryn Works — The Modern Tax Practice Operating Model",
  description:
    "Learn how Taxoryn helps CA firms and tax professionals organize clients, automate compliance tracking, collaborate on documents, and grow their practice.",
  alternates: {
    canonical: "https://taxoryn.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Organize Client Records",
      subtitle: "Unify scattered contacts and tax credentials",
      icon: FolderSync,
      description:
        "Import your existing client roster from spreadsheets, Tally, or direct entry. Taxoryn builds a single Client 360 profile with PAN, state-wise GSTINs, corporate identifiers, and key stakeholders.",
      points: [
        "Structured client directory with verified PAN and GST records",
        "Assigned relationship partners and handling staff",
        "Permanent document repository for registration certificates and deeds",
      ],
      microVisual: (
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-[#07152B]">Client 360 Profile</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-[#008766] border border-emerald-100">
              Verified Profile
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#07152B]">Apex Logistics LLP</span>
            <span className="text-slate-500 font-mono text-[11px]">LLPIN: AAB-1234</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-[10px] font-medium">PAN Identifier</span>
              <span className="font-mono font-semibold text-[#082E5B]">AABCA1234L</span>
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-[10px] font-medium">State GSTINs</span>
              <span className="font-mono font-semibold text-[#082E5B]">3 (MH, GJ, DL)</span>
            </div>
          </div>
          <div className="pt-0.5 flex items-center justify-between text-[11px] text-slate-500">
            <span>Relationship Partner: <strong className="text-slate-700 font-medium">Rajesh S.</strong></span>
            <span className="text-[#008766] font-semibold">Active Retainer</span>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "Track Statutory Compliance",
      subtitle: "Never let a filing deadline slip by unnoticed",
      icon: ShieldCheck,
      description:
        "Taxoryn automatically maps filing requirements based on client registrations. Your team works from pre-configured worklists for monthly GST, quarterly TDS, advance tax, and annual returns.",
      points: [
        "Automated compliance calendar reflecting entity-specific due dates",
        "Standardized Kanban statuses: To Do, In Progress, Under Review, Ready for Filing, Completed",
        "Clear visibility into approaching statutory deadlines across all clients",
      ],
      microVisual: (
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#082E5B]" />
              <span className="text-xs font-bold text-[#07152B]">Statutory Compliance Calendar</span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500">FY 2026-27</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="font-semibold text-[#07152B] block">GSTR-3B (Oct 2026)</span>
                <span className="text-[10px] text-slate-400">Due: 20 Nov 2026 • Assignee: Priya S.</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                Under Review
              </span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="font-semibold text-[#07152B] block">TDS 26Q (Quarter 2)</span>
                <span className="text-[10px] text-slate-400">Due: 31 Oct 2026 • Assignee: Amit K.</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#008766] border border-emerald-200">
                Ready for Filing
              </span>
            </div>
          </div>
          <div className="pt-0.5 flex items-center justify-between text-[11px] text-slate-500">
            <span>Next: Advance Tax Q3 (15 Dec)</span>
            <span className="font-semibold text-slate-700">6 Days to Deadline</span>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Serve Clients Seamlessly",
      subtitle: "Frictionless document collection and communication",
      icon: Users,
      description:
        "Request missing statements and invoices with one-click collection links. Clients can upload files securely without creating complicated accounts or hunting through email threads.",
      points: [
        "Direct document request links with instant status tracking",
        "Centralized audit trail of received and verified client files",
        "Optional client portal for real-time filing acknowledgment access",
      ],
      microVisual: (
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <FileCheck className="w-3.5 h-3.5 text-[#009E77]" />
              <span className="text-xs font-bold text-[#07152B]">Document Collection Link</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-[#008766] border border-emerald-100">
              Direct Upload
            </span>
          </div>
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <span className="font-semibold text-[#07152B] block">Bank Statement (Apr–Sep 2026)</span>
              <span className="text-[10px] text-slate-500 font-mono">HDFC_Current_6M.pdf (4.2 MB)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-[#008766] border border-emerald-100">
              Verified
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
            <span>Permanent Vault Storage</span>
            <span className="font-semibold text-[#082E5B]">0 WhatsApp / Email Chasing</span>
          </div>
        </div>
      ),
    },
    {
      num: "04",
      title: "Operate with Intelligence",
      subtitle: "Manage staff capacity and optimize firm turnaround times",
      icon: TrendingUp,
      description:
        "Partners and managers gain real-time visibility into workload distribution, open task counts, and turnaround times. Rebalance work across team members before peak filing periods arrive.",
      points: [
        "Firm-wide operational dashboards showing live task progress",
        "Team workload balancing preventing last-minute filing bottlenecks",
        "Audit logs capturing all client record edits and task completions",
      ],
      microVisual: (
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-[#082E5B]" />
              <span className="text-xs font-bold text-[#07152B]">Firm Operational Health</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
              Live Benchmarks
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-sm sm:text-base font-extrabold text-[#07152B] block">98.4%</span>
              <span className="text-[10px] text-slate-500">On-Time Filing</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-sm sm:text-base font-extrabold text-[#009E77] block">3.2 d</span>
              <span className="text-[10px] text-slate-500">Turnaround</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-sm sm:text-base font-extrabold text-[#082E5B] block">0</span>
              <span className="text-[10px] text-slate-500">Overdue</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
            <span>Capacity: 8 Team Members</span>
            <span className="font-semibold text-[#008766]">Balanced Workload</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-10 pb-12 sm:pt-12 sm:pb-14 bg-[#F8FAFC] border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3.5">
            <div className="inline-flex items-center">
              <Badge variant="teal" size="md">
                PRACTICE WORKFLOW
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07152B] tracking-tight leading-tight">
              A Simpler, Smarter Way to Run Your Practice
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From client onboarding to compliance filing and document archiving—see how Taxoryn replaces fragmented tools with one calm, connected workspace.
            </p>
          </div>
        </Container>
      </section>

      {/* Connected Steps Section */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Connector Spine (Desktop & Tablet) */}
            <div
              className="hidden md:block absolute left-[2.25rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#00D1A3] via-[#082E5B] to-[#009E77] opacity-30"
              aria-hidden="true"
            />
            {/* Timeline Connector Spine (Mobile) */}
            <div
              className="md:hidden absolute left-[1.625rem] top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#00D1A3] via-[#082E5B] to-[#009E77] opacity-30"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="relative grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-start p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    {/* Step Milestone Marker */}
                    <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-3 md:gap-1.5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#082E5B] text-[#00D1A3] border border-[#082E5B]/20 shadow-sm flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block pt-0.5">
                          Step {step.num}
                        </span>
                        <span className="text-[11px] font-semibold text-[#008766] block">
                          Phase Milestone
                        </span>
                      </div>
                    </div>

                    {/* Step Details & Micro-Visual */}
                    <div className="md:col-span-9 space-y-4">
                      <div className="space-y-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#07152B]">
                          {step.title}
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-[#009E77]">
                          {step.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Authentic Micro-Visual Preview */}
                      <div className="pt-1">
                        {step.microVisual}
                      </div>

                      {/* Verified Capability Checkpoints */}
                      <div className="pt-2 border-t border-slate-200/90 space-y-1.5">
                        {step.points.map((pt) => (
                          <div key={pt} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#009E77] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 bg-[#F8FAFC]">
        <Container>
          <div className="relative p-6 sm:p-8 lg:p-9 rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#07152B] via-[#082042] to-[#050F1E] border border-slate-700/80 text-white text-center space-y-4 max-w-4xl mx-auto shadow-2xl shadow-[#07152B]/10 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none rounded-[inherit]" />
            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Modernize Your Tax Practice?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                Get started with Taxoryn today. Request early access or sign in to your practice workspace.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Button
                  href={siteConfig.links.joinEarlyAccess}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="font-bold"
                >
                  Request Early Access
                </Button>
                <Button
                  href={siteConfig.links.login}
                  variant="secondary-dark"
                  size="lg"
                  className="font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border-slate-700 hover:border-slate-600 opacity-100 shadow-xs focus-visible:ring-offset-[#07152B]"
                >
                  Sign In to Web App
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
