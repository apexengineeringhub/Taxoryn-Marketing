"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  CheckSquare,
  FolderLock,
  BarChart3,
  Search,
  Bell,
  CheckCircle2,
  Calendar,
  FileText,
  Clock,
  Shield,
  ArrowRight,
  Filter,
} from "lucide-react";

export type ExperienceScreenId =
  | "dashboard"
  | "client-workspace"
  | "client-360"
  | "tasks"
  | "documents"
  | "overview";

export function ProductExperienceShowcase() {
  const [activeScreen, setActiveScreen] = useState<ExperienceScreenId>("dashboard");

  const screens = [
    {
      id: "dashboard" as const,
      label: "Practitioner Dashboard",
      icon: LayoutDashboard,
      description: "Central command center with live status on statutory filings, pending reviews, and daily firm activity.",
    },
    {
      id: "client-workspace" as const,
      label: "Client Workspace",
      icon: Users,
      description: "Searchable directory of individuals, LLPs, and companies with PAN, GSTINs, and assigned team members.",
    },
    {
      id: "client-360" as const,
      label: "Client 360",
      icon: UserCheck,
      description: "Full relationship context: active service agreements, historical returns, document vault, and communication history.",
    },
    {
      id: "tasks" as const,
      label: "Task Worklist",
      icon: CheckSquare,
      description: "Organized task execution by client, return category (GST/TDS/ITR), assignee, and due date.",
    },
    {
      id: "documents" as const,
      label: "Document Collaboration",
      icon: FolderLock,
      description: "Secure document requests, client upload portals, challan archives, and permanent practice files.",
    },
    {
      id: "overview" as const,
      label: "Practice Overview",
      icon: BarChart3,
      description: "Operational insights into workload distribution, completed filings, billing status, and firm capacity.",
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80" id="product-experience">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <Badge variant="navy" size="md">
            PRODUCT EXPERIENCE
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#07152B] tracking-tight">
            See How Taxoryn Powers Everyday Practice Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Designed specifically for Indian tax professionals. Explore actual application views that replace fragmented spreadsheets and scattered messaging.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {screens.map((screen) => {
            const Icon = screen.icon;
            const isActive = activeScreen === screen.id;
            return (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreen(screen.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 border ${
                  isActive
                    ? "bg-[#07152B] text-white border-slate-800 shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#00D1A3]" : "text-slate-400"}`} />
                <span>{screen.label}</span>
              </button>
            );
          })}
        </div>

        {/* Screen Showcase Display Window */}
        <div className="rounded-2xl border border-slate-700/90 bg-[#07152B] text-slate-100 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Chrome Top Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#050E1D] border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="font-mono text-[11px] text-slate-400 ml-2 hidden sm:inline-block">
                app.taxoryn.com/{activeScreen}
              </div>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D1A3]" />
              <span className="font-semibold text-slate-200">Taxoryn Practice Workspace</span>
            </div>
          </div>

          {/* Body Content based on active screen */}
          <div className="p-4 sm:p-6 lg:p-7 min-h-[420px] bg-gradient-to-b from-[#07152B] to-[#050E1D]">
            {/* View 1: Practitioner Dashboard */}
            {activeScreen === "dashboard" && (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Firm Operational Dashboard</h3>
                    <p className="text-xs text-slate-400">Sharma & Associates • Chartered Accountants</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#00D1A3]/15 text-[#00D1A3] font-bold text-xs">
                      FY 2026-27 Active
                    </span>
                  </div>
                </div>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-[11px] text-slate-400 font-medium">Active Clients</div>
                    <div className="text-xl font-bold text-white">142</div>
                    <div className="text-[10px] text-emerald-400">100% KYC verified</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-[11px] text-slate-400 font-medium">Pending GSTR-3B</div>
                    <div className="text-xl font-bold text-amber-300">14</div>
                    <div className="text-[10px] text-slate-400">Due in 5 days</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-[11px] text-slate-400 font-medium">Open Tasks</div>
                    <div className="text-xl font-bold text-white">38</div>
                    <div className="text-[10px] text-slate-400">Across 6 staff members</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-[11px] text-slate-400 font-medium">Document Requests</div>
                    <div className="text-xl font-bold text-sky-400">9</div>
                    <div className="text-[10px] text-slate-400">Pending client upload</div>
                  </div>
                </div>

                {/* Recent Task List */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Statutory Compliance Worklist (This Week)
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: "GSTR-3B October Filing", client: "Apex Logistics LLP", assignee: "Rahul M. (Article)", status: "Client Review", tag: "GST" },
                      { title: "Quarterly TDS 26Q Reconciliation", client: "Sterling Infotech Ltd", assignee: "Pooja S. (Associate)", status: "Draft Completed", tag: "TDS" },
                      { title: "Income Tax Scrutiny Response (Sec 143)", client: "K. R. Synthetics", assignee: "Amit Sharma (Partner)", status: "Documents Ready", tag: "Notice" },
                    ].map((row, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <div className="font-semibold text-white">{row.title}</div>
                          <div className="text-[11px] text-slate-400">{row.client} • Assignee: {row.assignee}</div>
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-800 text-slate-200 border border-slate-700">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* View 2: Client Workspace */}
            {activeScreen === "client-workspace" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Client Directory & Profiles</h3>
                    <p className="text-xs text-slate-400">Centralized client records with active PAN, GSTINs, and contact points.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400">142 Total Practice Clients</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { name: "Apex Logistics LLP", pan: "AABCA1234F", gstin: "27AABCA1234F1Z8 (Maharashtra)", type: "LLP", partner: "Amit Sharma", activeEngagements: "GST, TDS, Tax Audit" },
                    { name: "Sterling Infotech Pvt Ltd", pan: "AABCS5678G", gstin: "29AABCS5678G2Z1 (Karnataka)", type: "Private Limited", partner: "Amit Sharma", activeEngagements: "Statutory Audit, Retainer" },
                    { name: "Dr. K. S. Verma", pan: "ABCPV1234D", gstin: "Non-GST", type: "Individual Professional", partner: "Neha Verma", activeEngagements: "ITR-3, Advance Tax, Advisory" },
                    { name: "Navrang Textiles & Retail", pan: "AABFN9876M", gstin: "24AABFN9876M1Z5 (Gujarat)", type: "Partnership", partner: "Amit Sharma", activeEngagements: "GST Monthly, Payroll TDS" },
                  ].map((client, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="font-bold text-white text-sm flex items-center gap-2">
                          <span>{client.name}</span>
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                            {client.type}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          PAN: <span className="font-mono text-slate-300">{client.pan}</span> • GSTIN: <span className="font-mono text-slate-300">{client.gstin}</span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-[11px] font-semibold text-[#00D1A3]">{client.activeEngagements}</div>
                        <div className="text-[10px] text-slate-500">Managing Partner: {client.partner}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 3: Client 360 */}
            {activeScreen === "client-360" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00D1A3]">
                      CLIENT 360 PROFILE
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">Apex Logistics LLP</h3>
                    <p className="text-xs text-slate-400">PAN: AABCA1234F • Primary Contact: Rajesh Singhania (Managing Partner)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                      Client Portal Active
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="font-bold text-slate-200 border-b border-slate-800 pb-1.5">Active Engagements</div>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• GST Monthly Compliance (GSTR-1, 3B)</li>
                      <li>• TDS Returns (26Q Quarterly)</li>
                      <li>• Tax Audit under Sec 44AB</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="font-bold text-slate-200 border-b border-slate-800 pb-1.5">Compliance Health</div>
                    <ul className="space-y-1.5 text-slate-300">
                      <li className="flex justify-between"><span>GSTR-3B Sept:</span> <span className="text-emerald-400 font-bold">Filed on time</span></li>
                      <li className="flex justify-between"><span>GSTR-1 Sept:</span> <span className="text-emerald-400 font-bold">Filed on time</span></li>
                      <li className="flex justify-between"><span>TDS Q2:</span> <span className="text-amber-300 font-bold">Pending challan</span></li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="font-bold text-slate-200 border-b border-slate-800 pb-1.5">Document Vault</div>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• Certificate of Incorporation (PDF)</li>
                      <li>• Partnership Deed & PAN Copy</li>
                      <li>• Bank Statements FY 2025-26</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Task Worklist */}
            {activeScreen === "tasks" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Statutory Task Worklist</h3>
                    <p className="text-xs text-slate-400">Filter tasks by compliance type, assignees, client, and statutory due dates.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">Filter: All</span>
                    <span className="px-2 py-1 rounded bg-[#00D1A3]/20 text-[#00D1A3] font-bold">38 Active</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { task: "Prepare & reconcile GSTR-3B", client: "Apex Logistics LLP", staff: "Rahul M.", deadline: "20 Nov 2026", status: "Review Ready", urgency: "High" },
                    { task: "TDS 26Q return filing & FVU generation", client: "Sterling Infotech Pvt Ltd", staff: "Pooja S.", deadline: "30 Nov 2026", status: "Data Input", urgency: "Medium" },
                    { task: "Draft reply to Section 142(1) notice", client: "K. R. Synthetics", staff: "Amit Sharma", deadline: "22 Nov 2026", status: "In Progress", urgency: "High" },
                    { task: "Advance tax 3rd installment computation", client: "Dr. K. S. Verma", staff: "Rahul M.", deadline: "15 Dec 2026", status: "Scheduled", urgency: "Normal" },
                  ].map((t, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2 text-xs">
                      <div>
                        <div className="font-semibold text-white">{t.task}</div>
                        <div className="text-[11px] text-slate-400">{t.client} • Staff: {t.staff}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          t.urgency === "High" ? "bg-rose-500/20 text-rose-300 border border-rose-500/30" : "bg-slate-800 text-slate-300"
                        }`}>
                          Due: {t.deadline}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-1">{t.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 5: Document Collaboration */}
            {activeScreen === "documents" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Client Document Management</h3>
                    <p className="text-xs text-slate-400">Request, collect, and organize client records securely with audit trails.</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#00D1A3]/20 text-[#00D1A3] font-bold text-xs">
                    Encrypted Storage
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="font-bold text-slate-200 flex items-center justify-between">
                      <span>Document Collection Requests</span>
                      <span className="text-[10px] text-amber-300 font-mono">3 Pending</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2 rounded bg-slate-800/70 flex justify-between">
                        <span className="text-slate-200">Oct 2026 Bank Statements</span>
                        <span className="text-amber-400">Apex Logistics</span>
                      </div>
                      <div className="p-2 rounded bg-slate-800/70 flex justify-between">
                        <span className="text-slate-200">Form 26AS Confirmation</span>
                        <span className="text-amber-400">Dr. K. S. Verma</span>
                      </div>
                      <div className="p-2 rounded bg-slate-800/70 flex justify-between">
                        <span className="text-slate-200">Sales Register CSV</span>
                        <span className="text-emerald-400 font-bold">Uploaded ✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="font-bold text-slate-200 flex items-center justify-between">
                      <span>Recent Verified Files</span>
                      <span className="text-[10px] text-slate-400">Permanent Vault</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2 rounded bg-slate-800/70 flex justify-between">
                        <span className="text-slate-200">GSTR-3B_Oct2026_Ack.pdf</span>
                        <span className="text-slate-400">Generated</span>
                      </div>
                      <div className="p-2 rounded bg-slate-800/70 flex justify-between">
                        <span className="text-slate-200">TaxAuditReport_3CD_Signed.pdf</span>
                        <span className="text-slate-400">UDIN Linked</span>
                      </div>
                      <div className="p-2 rounded bg-slate-800/70 flex justify-between">
                        <span className="text-slate-200">TDS_Challan_281_Oct.pdf</span>
                        <span className="text-slate-400">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 6: Practice Overview */}
            {activeScreen === "overview" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Practice Operational Intelligence</h3>
                    <p className="text-xs text-slate-400">High-level operational transparency across compliance workloads and turnaround times.</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#00D1A3]/20 text-[#00D1A3] font-bold text-xs">
                    Real-time Metrics
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-xs text-slate-400">Compliance On-Time Rate</div>
                    <div className="text-2xl font-bold text-[#00D1A3]">98.2%</div>
                    <div className="text-[11px] text-slate-400">140 of 142 returns filed before statutory due date</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-xs text-slate-400">Average Turnaround</div>
                    <div className="text-2xl font-bold text-white">2.4 Days</div>
                    <div className="text-[11px] text-slate-400">From document receipt to return drafting</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="text-xs text-slate-400">Staff Workload Balance</div>
                    <div className="text-2xl font-bold text-sky-400">Optimal</div>
                    <div className="text-[11px] text-slate-400">Evenly distributed across 6 team members</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
