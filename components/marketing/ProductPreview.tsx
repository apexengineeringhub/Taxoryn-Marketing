"use client";

import React, { useState } from "react";
import {
  Users,
  FileCheck2,
  Calendar,
  AlertCircle,
  Clock,
  ArrowUpRight,
  TrendingUp,
  FolderLock,
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Layers,
  FileText,
  Shield,
  Search,
} from "lucide-react";
import { cn } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";

type TabKey = "overview" | "gst" | "itr" | "tasks" | "documents";

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl border border-slate-700/60 bg-[#07152B] shadow-2xl shadow-[#082E5B]/20 overflow-hidden text-slate-100">
      {/* Window Mockup Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-[#070C1A]/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline-block">
            app.taxoryn.com/dashboard
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 sm:gap-2">
          {(
            [
              { id: "overview", label: "Dashboard" },
              { id: "gst", label: "GST Engine" },
              { id: "itr", label: "ITR Tracker" },
              { id: "tasks", label: "Compliance Tasks" },
              { id: "documents", label: "Client Docs" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-2.5 sm:px-3 py-1 text-xs font-medium rounded-md transition-all",
                activeTab === tab.id
                  ? "bg-[#00D1A3] text-[#07152B] font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#07152B] to-[#040C1A]">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-medium">Active Clients</span>
                  <Users className="w-4 h-4 text-[#00D1A3]" />
                </div>
                <div className="text-2xl font-bold text-white">248</div>
                <div className="text-[11px] text-[#00D1A3] mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18 onboarding this month</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-medium">GST Due This Week</span>
                  <FileSpreadsheet className="w-4 h-4 text-sky-400" />
                </div>
                <div className="text-2xl font-bold text-white">64</div>
                <div className="text-[11px] text-sky-300 mt-1">
                  <span>52 Filed • 12 In-Progress</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-medium">ITR Computations</span>
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white">192</div>
                <div className="text-[11px] text-emerald-300 mt-1">
                  <span>AY 2025-26 Pipeline</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-medium">Pending Requests</span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-white">14</div>
                <div className="text-[11px] text-amber-300 mt-1">
                  <span>Awaiting client documents</span>
                </div>
              </div>
            </div>

            {/* Main Content Split: Compliance Schedule & Active Filings */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Compliance Pipeline */}
              <div className="lg:col-span-2 p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00D1A3]" />
                    <h3 className="text-sm font-semibold text-white">
                      Upcoming Statutory Deadlines
                    </h3>
                  </div>
                  <span className="text-xs text-[#00D1A3] font-mono">
                    Updated Live
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      form: "GSTR-1 (Monthly)",
                      period: "Jan 2025",
                      due: "11th Feb",
                      progress: "94% Filed",
                      status: "On Track",
                      statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                    },
                    {
                      form: "GSTR-3B (Regular)",
                      period: "Jan 2025",
                      due: "20th Feb",
                      progress: "68% Filed",
                      status: "Active Workload",
                      statusColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
                    },
                    {
                      form: "TDS Form 26Q (Quarterly)",
                      period: "Q3 (Oct-Dec)",
                      due: "31st Jan",
                      progress: "100% Completed",
                      status: "Reconciled",
                      statusColor: "bg-[#00D1A3]/20 text-[#00FFC2] border-[#00D1A3]/30",
                    },
                    {
                      form: "Advance Tax Installment 4",
                      period: "FY 2024-25",
                      due: "15th Mar",
                      progress: "42 Prepared",
                      status: "Calculating",
                      statusColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
                    },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-between text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="font-semibold text-slate-100 flex items-center gap-2">
                          <span>{row.form}</span>
                          <span className="text-slate-400 font-normal">
                            ({row.period})
                          </span>
                        </div>
                        <div className="text-slate-400 text-[11px]">
                          Due: <strong className="text-white">{row.due}</strong> • {row.progress}
                        </div>
                      </div>
                      <span
                        className={cn(
                          "px-2.5 py-1 rounded-full text-[10px] font-semibold border",
                          row.statusColor
                        )}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Portal & Tasks Side Panel */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                    <FolderLock className="w-4 h-4 text-sky-400" />
                    Document Requests
                  </h3>
                  <span className="text-[11px] text-slate-400">Portal Sync</span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      client: "Aditya Logistics Pvt Ltd",
                      doc: "Bank Statement Q3 + Sales Invoices",
                      status: "Uploaded",
                      time: "10m ago",
                      icon: CheckCircle2,
                      iconColor: "text-emerald-400",
                    },
                    {
                      client: "Vardhman Infotech LLP",
                      doc: "Form 16 Part A & B",
                      status: "Awaiting Client",
                      time: "Reminder sent",
                      icon: Clock,
                      iconColor: "text-amber-400",
                    },
                    {
                      client: "Kaveri Enterprises",
                      doc: "GST Purchase Register Dec",
                      status: "Review Required",
                      time: "1h ago",
                      icon: AlertCircle,
                      iconColor: "text-sky-400",
                    },
                  ].map((req, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-xs space-y-1"
                    >
                      <div className="font-medium text-white flex items-center justify-between">
                        <span className="truncate max-w-[150px]">{req.client}</span>
                        <span className="text-[10px] text-slate-400">{req.time}</span>
                      </div>
                      <div className="text-[11px] text-slate-300 truncate">
                        {req.doc}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-medium pt-0.5">
                        <req.icon className={cn("w-3 h-3", req.iconColor)} />
                        <span className="text-slate-300">{req.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "gst" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#00D1A3]" />
                  GST Compliance Manager
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Unified GSTR-1, GSTR-3B reconciliation, 2B matching & return filing status
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded bg-[#00D1A3]/10 text-[#00FFC2] font-semibold border border-[#00D1A3]/30">
                  Active Month: Jan 2025
                </span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-slate-300 uppercase tracking-wider font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-3">Client Name / GSTIN</th>
                    <th className="p-3">GSTR-1</th>
                    <th className="p-3">GSTR-2B Reco</th>
                    <th className="p-3">GSTR-3B</th>
                    <th className="p-3">Assigned CA/Team</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/60 text-slate-200">
                  {[
                    {
                      name: "Sharma Steel Industries",
                      gstin: "27AAACS1234F1Z5",
                      gstr1: "Filed (ARN: AA270125)",
                      reco: "Matched (100%)",
                      gstr3b: "Ready for Filing",
                      team: "Priya S. (Sr. Associate)",
                    },
                    {
                      name: "Zenith Digital Media LLP",
                      gstin: "29AADCP9876K1Z2",
                      gstr1: "Filed",
                      reco: "ITC Mismatch (₹14,200)",
                      gstr3b: "Pending Verification",
                      team: "Amit Verma (CA)",
                    },
                    {
                      name: "Hindustan Agro Exports",
                      gstin: "07AAACH5544R1ZY",
                      gstr1: "In Preparation",
                      reco: "2B Downloaded",
                      gstr3b: "Draft Created",
                      team: "Priya S. (Sr. Associate)",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-800/50">
                      <td className="p-3 font-medium text-white">
                        <div>{row.name}</div>
                        <div className="font-mono text-[10px] text-slate-400">
                          {row.gstin}
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {row.gstr1}
                        </span>
                      </td>
                      <td className="p-3">
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded text-[11px] font-medium",
                            row.reco.includes("Matched")
                              ? "bg-emerald-500/15 text-emerald-300"
                              : "bg-amber-500/15 text-amber-300"
                          )}
                        >
                          {row.reco}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 text-[11px] font-medium">
                          {row.gstr3b}
                        </span>
                      </td>
                      <td className="p-3 text-slate-400">{row.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "itr" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-emerald-400" />
                  Income Tax Return (ITR) Command Center
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  AY 2025-26 & AY 2024-25 computation pipelines, AIS/TIS ingestion, and e-filing
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                192 Active Computations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Data Ingestion & AIS</span>
                  <span className="text-[#00D1A3]">38</span>
                </div>
                <p className="text-xs text-slate-400">
                  Auto-mapped Form 26AS, AIS/TIS data, and client expense sheets.
                </p>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#00D1A3] h-full w-4/5" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Computation & Review</span>
                  <span className="text-sky-400">84</span>
                </div>
                <p className="text-xs text-slate-400">
                  Tax regime comparison (New vs Old), deductions & CA sign-off.
                </p>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-sky-400 h-full w-3/5" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Filed & Verified</span>
                  <span className="text-emerald-400">70</span>
                </div>
                <p className="text-xs text-slate-400">
                  Acknowledgment generated, e-verification completed, client notified.
                </p>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tasks" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-400" />
                Team Workload & Compliance Tasks
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Assign tasks across partners, managers, and article assistants with real-time audit trail
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  column: "To Do (12)",
                  tasks: [
                    { title: "GSTR-9 Annual Return Audit", client: "Apex Retail", due: "Tomorrow", tag: "GST" },
                    { title: "TDS 24Q Salary Challans", client: "TechCorp India", due: "In 3 days", tag: "TDS" },
                  ],
                },
                {
                  column: "In Review (8)",
                  tasks: [
                    { title: "ITR-6 Corporate Computation", client: "Nexis Pharma", due: "Today", tag: "ITR" },
                    { title: "Tax Audit Report 3CD Signoff", client: "Bansal Mills", due: "Today", tag: "Audit" },
                  ],
                },
                {
                  column: "Completed (34)",
                  tasks: [
                    { title: "GST Notice Response drafting", client: "Star Traders", due: "Done", tag: "Notice" },
                    { title: "Advance Tax Calculation Q4", client: "Dr. RK Clinic", due: "Done", tag: "Tax" },
                  ],
                },
              ].map((col, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-300 border-b border-slate-800 pb-2">
                    {col.column}
                  </div>
                  {col.tasks.map((task, tIdx) => (
                    <div key={tIdx} className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs space-y-1.5">
                      <div className="font-semibold text-white">{task.title}</div>
                      <div className="text-[11px] text-slate-400">{task.client}</div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="px-1.5 py-0.5 rounded bg-slate-700 text-[10px] text-slate-300 font-mono">
                          {task.tag}
                        </span>
                        <span className="text-[10px] text-slate-400">{task.due}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FolderLock className="w-5 h-5 text-[#00D1A3]" />
                  Encrypted Client Document Repository
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Organized by Financial Year, Client, and Tax Category with automated client upload requests
                </p>
              </div>
              <span className="text-xs text-[#00D1A3] font-medium bg-[#00D1A3]/10 px-3 py-1 rounded border border-[#00D1A3]/30">
                Tenant-Aware Practice Isolation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { name: "FY 2024-25 / GST Returns", count: "128 Files", size: "48 MB", updated: "Today" },
                { name: "AY 2025-26 / ITR Computations", count: "94 Files", size: "112 MB", updated: "Yesterday" },
                { name: "Audit Reports & Form 3CD", count: "26 Files", size: "85 MB", updated: "3 days ago" },
                { name: "Client KYC & Incorporation", count: "310 Files", size: "240 MB", updated: "Active" },
              ].map((folder, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#00D1A3]/40 transition-colors text-xs space-y-2">
                  <FolderLock className="w-6 h-6 text-[#00D1A3]" />
                  <div className="font-semibold text-white leading-snug">{folder.name}</div>
                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>{folder.count}</span>
                    <span>{folder.updated}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Bar */}
      <div className="px-6 py-3 bg-[#070C1A] border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#00D1A3]" />
          <span>Tenant Isolated Practice Data</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Role-Based Access Control</span>
          <span>•</span>
          <span>Instant Client Portal Sync</span>
        </div>
      </div>
    </div>
  );
}
