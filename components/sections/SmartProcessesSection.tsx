"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import {
  CheckSquare,
  Users,
  FolderLock,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Shield,
  Clock,
  Sparkles,
  ArrowRightLeft,
} from "lucide-react";

export function SmartProcessesSection() {
  const pillars = [
    {
      id: "smart-work",
      number: "01",
      title: "Smart Work Management",
      badge: "Process 01",
      icon: CheckSquare,
      headline: "Keep engagements, compliance tasks, and team deadlines on track.",
      description:
        "Replace messy spreadsheets and forgotten sticky notes. Taxoryn gives your team a structured work operating board with pre-built statutory checklists for GST, TDS, and ITR.",
      highlights: [
        "Structured task worklists with assigned staff and due dates",
        "Statutory compliance calendar tied to client GSTINs & PANs",
        "Recurring compliance workflows for monthly and quarterly filings",
        "Real-time status tracking across drafts, reviews, and client sign-offs",
      ],
      previewTitle: "Task Worklist & Compliance Workbench",
      previewItems: [
        { label: "GSTR-3B Monthly Filing", client: "Apex Logistics LLP", due: "20th Nov", status: "In Review", tag: "GST" },
        { label: "TDS Q2 26Q Reconciliation", client: "Sterling Infotech Ltd", due: "30th Nov", status: "Documents Ready", tag: "TDS" },
      ],
    },
    {
      id: "smart-client",
      number: "02",
      title: "Smart Client Management",
      badge: "Process 02",
      icon: Users,
      headline: "A single, connected 360° view of every client relationship.",
      description:
        "No more hunting across emails or chat threads to find a client's filing status or contact person. Access comprehensive client histories, GST profiles, assigned staff, and past interactions in one place.",
      highlights: [
        "Unified Client 360 with PAN, GSTINs, and entity details",
        "Complete engagement history and service delivery records",
        "Designated primary contacts and multi-stakeholder directory",
        "Dedicated client portal access for document submission and status review",
      ],
      previewTitle: "Client 360 Workspace",
      previewItems: [
        { label: "Apex Logistics LLP", client: "GSTIN: 27AABCA1234F1Z8", due: "Active Engagement", status: "Client 360 Ready", tag: "Corporate" },
        { label: "Sterling Infotech Ltd", client: "GSTIN: 29AABCS5678G2Z1", due: "5 Active Services", status: "Portal Active", tag: "Tech" },
      ],
    },
    {
      id: "smart-document",
      number: "03",
      title: "Smart Document Management",
      badge: "Process 03",
      icon: FolderLock,
      headline: "Collect, organize, and retrieve client files without chaos.",
      description:
        "Eliminate lost email attachments and scattered WhatsApp PDFs. Request missing financial statements, store permanent files, and maintain clear audit trails per client and assessment year.",
      highlights: [
        "Structured folder organization by client, financial year, and service",
        "Document collection requests with direct upload links for clients",
        "Centralized repository for DSC details, notices, and challans",
        "Granular access controls ensuring confidential data stays secure",
      ],
      previewTitle: "Client Document Repository",
      previewItems: [
        { label: "Bank Statement FY 2025-26", client: "Apex Logistics LLP", due: "Uploaded by Client", status: "Verified", tag: "Banking" },
        { label: "Form 16 / 26AS Statement", client: "Dr. K. S. Verma", due: "Annual Filing", status: "Linked", tag: "Tax" },
      ],
    },
    {
      id: "practice-intelligence",
      number: "04",
      title: "Practice Intelligence",
      badge: "Process 04",
      icon: BarChart3,
      headline: "Gain total visibility into team bandwidth, pending work, and practice health.",
      description:
        "Move from reactive fire-fighting to proactive practice leadership. Monitor turnaround times, identify filing bottlenecks before due dates, and understand client service health at a glance.",
      highlights: [
        "Operational overview of all open, in-progress, and completed tasks",
        "Team workload balance to prevent last-minute deadline stress",
        "Compliance health indicators across the firm's client base",
        "Filing status visibility tied directly to statutory calendars",
      ],
      previewTitle: "Practice Operations Overview",
      previewItems: [
        { label: "Statutory Filings on Schedule", client: "Apex & Sterling active", due: "Current Period", status: "On Track", tag: "Operations" },
        { label: "Upcoming Statutory Due Dates", client: "Assigned across team", due: "Next 7 Days", status: "Under Control", tag: "Deadlines" },
      ],
    },
  ];

  return (
    <section id="smart-processes" className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
          <Badge variant="teal" size="md">
            THE TAXORYN ARCHITECTURE
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#07152B] tracking-tight">
            Four Smart Processes. One Connected Workspace.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Taxoryn connects work, clients, documents, and practice intelligence so your firm operates with calm precision instead of fragmented tools.
          </p>
        </div>

        {/* Operating Model Cohesion Ribbon */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold text-[10px]">1</span>
            <span>Client 360</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold text-[10px]">2</span>
            <span>Compliance Worklists</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold text-[10px]">3</span>
            <span>Document Vault</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold text-[10px]">4</span>
            <span>Firm Intelligence</span>
          </div>
        </div>

        {/* 4-Pillar Grid (All 4 Processes Visible Simultaneously) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 transition-all duration-200 shadow-xs"
              >
                <div className="space-y-3.5">
                  {/* Top Bar: Badge, Icon, Title */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500">
                          {pillar.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#07152B] tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Headline & Description */}
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-semibold text-[#07152B] leading-snug">
                      {pillar.headline}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Key Capabilities Checklist */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                    {pillar.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008766] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mini Interface Preview */}
                  <div className="pt-2.5">
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3 shadow-xs space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 border-b border-slate-100 pb-1">
                        <span className="text-[#07152B] font-bold">{pillar.previewTitle}</span>
                        <span className="text-[10px] font-mono text-[#008766]">Live Sync</span>
                      </div>
                      <div className="space-y-1">
                        {pillar.previewItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[11px]"
                          >
                            <div className="min-w-0 pr-2">
                              <div className="font-semibold text-slate-800 truncate">{item.label}</div>
                              <div className="text-[10px] text-slate-500 truncate">{item.client}</div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-bold text-[10px] shrink-0">
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 mt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Part of Taxoryn Practice OS</span>
                  <Link
                    href="/platform"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#082E5B] hover:text-[#008766] transition-colors"
                  >
                    <span>Explore details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
