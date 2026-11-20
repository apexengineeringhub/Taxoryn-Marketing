"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
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
} from "lucide-react";

export function SmartProcessesSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: "smart-work",
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
        { label: "Advance Tax Q3 Computation", client: "Dr. K. S. Verma", due: "15th Dec", status: "In Progress", tag: "ITR" },
      ],
    },
    {
      id: "smart-client",
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
        { label: "Dr. K. S. Verma", client: "PAN: ABCPV1234D", due: "Annual Retainer", status: "KYC Verified", tag: "Individual" },
      ],
    },
    {
      id: "smart-document",
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
        { label: "Purchase Register Sept 2026", client: "Sterling Infotech Ltd", due: "Monthly Rec", status: "Processed", tag: "GST" },
      ],
    },
    {
      id: "practice-intelligence",
      title: "Practice Intelligence",
      badge: "Process 04",
      icon: BarChart3,
      headline: "Gain total visibility into team bandwidth, pending work, and practice health.",
      description:
        "Move from reactive fire-fighting to proactive practice leadership. Monitor turnaround times, identify filing bottlenecks before due dates, and understand client service health at a glance.",
      highlights: [
        "Operational overview of all open, in-progress, and completed tasks",
        "Team workload balance to prevent last-minute deadline stress",
        "Compliance health scores across the firm's entire client base",
        "Billing & receivables status tied directly to completed services",
      ],
      previewTitle: "Practice Operations Overview",
      previewItems: [
        { label: "Monthly GST Filings: 94% on-schedule", client: "48 of 51 clients filed", due: "Current Period", status: "Healthy", tag: "Operations" },
        { label: "Upcoming Due Dates: 12 statutory tasks", client: "Assigned across 4 staff", due: "Next 7 Days", status: "Under Control", tag: "Deadlines" },
        { label: "Client Health: 98% active retainers", client: "142 total practice clients", due: "FY 2026-27", status: "Growing", tag: "Practice" },
      ],
    },
  ];

  const current = pillars[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="smart-processes" className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
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

        {/* Tab Navigation Pill Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10 max-w-4xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isActive
                    ? "bg-[#07152B] text-white border-slate-800 shadow-lg ring-1 ring-[#00D1A3]/30"
                    : "bg-[#F8FAFC] text-slate-700 border-slate-200/90 hover:bg-slate-100/80 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isActive ? "bg-[#00D1A3]/20 text-[#00D1A3]" : "bg-white text-slate-600 border border-slate-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase ${
                      isActive ? "text-[#00D1A3]" : "text-slate-400"
                    }`}
                  >
                    {pillar.badge}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold ${isActive ? "text-white" : "text-slate-900"}`}>
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Card */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Value proposition & capabilities */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#07152B] text-[#00D1A3]">
                  {current.badge}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Core Platform Process
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#07152B] tracking-tight leading-snug">
                {current.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              <div className="pt-2 space-y-2.5">
                {current.highlights.map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#009E77] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#082E5B] hover:text-[#009E77] transition-colors"
                >
                  <span>Explore {current.title} details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Authentic product UI card representation */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-slate-700/80 bg-[#07152B] text-slate-100 shadow-xl overflow-hidden text-xs">
                {/* Header bar */}
                <div className="px-4 py-2.5 bg-[#050E1D] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                    <CurrentIcon className="w-3.5 h-3.5 text-[#00D1A3]" />
                    <span className="font-semibold text-white">{current.previewTitle}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00D1A3]/15 text-[#00D1A3]">
                    Live View
                  </span>
                </div>

                {/* Items list */}
                <div className="p-4 space-y-2.5">
                  {current.previewItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <div className="font-semibold text-white truncate text-xs">{item.label}</div>
                        <div className="text-[11px] text-slate-400 truncate">{item.client}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                          {item.status}
                        </span>
                        <div className="text-[10px] text-slate-500 mt-0.5">{item.due}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom hint */}
                <div className="px-4 py-2 border-t border-slate-800/80 bg-[#061224] flex items-center justify-between text-[11px] text-slate-400">
                  <span>Connected via Taxoryn Workspace</span>
                  <Link href="/platform" className="text-[#00D1A3] font-semibold hover:underline">
                    View in Platform →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
