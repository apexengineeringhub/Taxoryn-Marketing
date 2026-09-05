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
  Percent,
  Receipt,
  Bell,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ExternalLink,
  Laptop,
  Check,
  UploadCloud,
  Send,
  UserCheck,
} from "lucide-react";
import { cn } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";

export type ProductTabKey =
  | "overview"
  | "clients"
  | "compliance"
  | "documents"
  | "portal"
  | "marketplace";

interface ProductPreviewProps {
  initialTab?: ProductTabKey;
  showTabSelector?: boolean;
}

export function ProductPreview({
  initialTab = "overview",
  showTabSelector = true,
}: ProductPreviewProps) {
  const [activeTab, setActiveTab] = useState<ProductTabKey>(initialTab);

  const tabs = [
    { id: "overview" as const, label: "Dashboard", badge: "Command Center" },
    { id: "clients" as const, label: "Clients", badge: "360° Directory" },
    { id: "compliance" as const, label: "Compliance", badge: "GST • ITR • TDS" },
    { id: "documents" as const, label: "Documents", badge: "Secure Storage" },
    { id: "portal" as const, label: "Client Portal", badge: "Client View" },
    { id: "marketplace" as const, label: "Marketplace", badge: "Practice Growth" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl border border-slate-700/60 bg-[#07152B] shadow-2xl shadow-[#082E5B]/20 overflow-hidden text-slate-100">
      {/* 1. Window Browser Chrome Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-slate-800 bg-[#070C1A] text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
            https://app.taxoryn.com/{activeTab}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="font-semibold text-[#00D1A3]">Sample Taxoryn Workspace</span>
          <span className="hidden md:inline text-slate-500">• Illustrative interface with sample data</span>
        </div>
      </div>

      {/* 2. Authentic Taxoryn Product Header & Navigation Bar */}
      <div className="px-4 sm:px-6 py-3 border-b border-slate-800/90 bg-[#07152B]/95 backdrop-blur-sm flex flex-wrap items-center justify-between gap-3">
        {/* Left: Global Search Bar */}
        <div className="relative w-44 sm:w-52 min-w-0">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            placeholder="Search... (Ctrl+K)"
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-900/90 border border-slate-700/70 rounded-lg text-slate-200 placeholder:text-slate-400 cursor-default focus:outline-none"
          />
          <kbd className="hidden sm:inline-block absolute right-2 top-1/2 -translate-y-1/2 px-1 py-0.5 text-[9px] font-semibold text-slate-400 bg-slate-800 border border-slate-700 rounded">
            ⌘K
          </kbd>
        </div>

        {/* Center: Module Switcher Tabs */}
        {showTabSelector && (
          <div
            role="tablist"
            aria-label="Product Preview Modules"
            className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 scrollbar-none"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3]",
                  activeTab === tab.id
                    ? "bg-[#00D1A3] text-[#07152B] shadow-sm font-bold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Right: User Avatar & Role Badge */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <div className="relative p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <Bell className="w-4 h-4" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3] absolute top-1 right-1" />
          </div>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#00D1A3] text-[#07152B] font-black text-xs flex items-center justify-center shadow-sm">
              CA
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/70 rounded-full px-2.5 py-1 text-[11px] font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D1A3]" />
              <span>Practice Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Workspace Area */}
      <div className="p-4 sm:p-6 space-y-6 bg-gradient-to-b from-[#07152B] to-[#070C1A]">
        {/* ========================================================= */}
        {/* TAB 1: EXECUTIVE PRACTICE DASHBOARD */}
        {/* ========================================================= */}
        {activeTab === "overview" && (
          <div
            id="tabpanel-overview"
            role="tabpanel"
            aria-labelledby="tab-overview"
            className="space-y-6"
          >
            {/* Dashboard Sub-Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">
                  Executive Practice Dashboard
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Unified compliance health, client workload allocation, and action items.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 self-start sm:self-auto bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Statutory Calendar Active</span>
              </div>
            </div>

            {/* Metric KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1.5">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-semibold">Active Clients</span>
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-black text-white">142</div>
                <div className="text-[11px] text-emerald-400 font-medium">100% Onboarded</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1.5">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-semibold">GST Compliance</span>
                  <FileSpreadsheet className="w-4 h-4 text-[#00D1A3]" />
                </div>
                <div className="text-2xl font-black text-white">96.4%</div>
                <div className="text-[11px] text-slate-400">Monthly 3B/1 Cycle</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1.5">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-semibold">ITR Pipelines</span>
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white">78</div>
                <div className="text-[11px] text-emerald-400 font-medium">AY 2025-26 Active</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1.5">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-semibold">Review Gates</span>
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-black text-white">8 Pending</div>
                <div className="text-[11px] text-amber-300 font-medium">Partner Sign-off Needed</div>
              </div>
            </div>

            {/* Operational Task Load & Compliance Due Dates */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#00D1A3]" />
                    <span>Upcoming Statutory Due Dates</span>
                  </h4>
                  <span className="text-[11px] text-slate-400">September 2026</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { date: "11 Sep", return: "GSTR-1 Outward Supplies", scope: "Monthly Taxpayers", status: "82 / 85 Prepared", color: "text-emerald-400", badge: "On Track" },
                    { date: "20 Sep", return: "GSTR-3B Summary Return", scope: "Regular Taxpayers", status: "Drafting in Progress", color: "text-blue-400", badge: "Active" },
                    { date: "07 Oct", return: "TDS Deposit (Challan 281)", scope: "Corporate & Non-Salaries", status: "Challans Generated", color: "text-[#00D1A3]", badge: "Ready" },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className="px-2.5 py-1 rounded bg-[#082E5B] text-[#00D1A3] font-bold text-[11px]">
                          {item.date}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.return}</div>
                          <div className="text-[11px] text-slate-400">{item.scope}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`font-semibold ${item.color}`}>{item.status}</span>
                        <div className="text-[10px] text-slate-400">{item.badge}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-400" />
                    <span>Team Workload Allocation</span>
                  </h4>
                  <span className="text-[11px] text-slate-400">3 Roles</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Senior Partners</div>
                      <div className="text-[11px] text-slate-400">Final sign-off & notice reviews</div>
                    </div>
                    <span className="font-bold text-amber-400">8 Sign-offs</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Tax Managers</div>
                      <div className="text-[11px] text-slate-400">Computation verification</div>
                    </div>
                    <span className="font-bold text-sky-400">24 Reviews</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Article Assistants</div>
                      <div className="text-[11px] text-slate-400">Data ingestion & drafting</div>
                    </div>
                    <span className="font-bold text-[#00D1A3]">52 Tasks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: CLIENT MANAGEMENT DIRECTORY */}
        {/* ========================================================= */}
        {activeTab === "clients" && (
          <div
            id="tabpanel-clients"
            role="tabpanel"
            aria-labelledby="tab-clients"
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>360° Client Practice Directory</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Organized by entity type, assigned manager, compliance status, and document vault.
                </p>
              </div>
              <span className="text-xs text-blue-300 font-medium bg-blue-500/10 px-3 py-1 rounded border border-blue-500/30 self-start sm:self-auto">
                142 Active Client Entities
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60">
                <thead className="bg-[#070C1A] text-slate-300 border-b border-slate-800">
                  <tr>
                    <th className="p-3 font-semibold">Client / Entity Name</th>
                    <th className="p-3 font-semibold">Entity Type</th>
                    <th className="p-3 font-semibold">Assigned Manager</th>
                    <th className="p-3 font-semibold">Active Services</th>
                    <th className="p-3 font-semibold">Compliance Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {[
                    { name: "Apex Technologies LLP", type: "LLP", manager: "CA Priya M.", services: "GST, TDS, Audit", status: "Pending Sign-off", statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
                    { name: "Vardhan Logistics Pvt Ltd", type: "Private Ltd", manager: "Amit K.", services: "GST, ITR", status: "Compliant (All Filed)", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
                    { name: "Rathi & Sons Textiles", type: "Partnership", manager: "Sneha P.", services: "GST, Presumptive ITR", status: "Doc Upload Pending", statusColor: "text-sky-400 bg-sky-500/10 border-sky-500/30" },
                    { name: "Dr. Ananya Roy", type: "Individual / Professional", manager: "Rahul S.", services: "ITR-3, Advance Tax", status: "Draft Approved", statusColor: "text-[#00D1A3] bg-[#00D1A3]/10 border-[#00D1A3]/30" },
                    { name: "Horizon Solar Infra Ltd", type: "Public Ltd", manager: "CA Priya M.", services: "Corporate ITR, GST, TDS", status: "Compliant (All Filed)", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
                  ].map((client, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-bold text-white flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{client.name}</span>
                      </td>
                      <td className="p-3 text-slate-400">{client.type}</td>
                      <td className="p-3 font-medium text-slate-300">{client.manager}</td>
                      <td className="p-3 text-slate-400">{client.services}</td>
                      <td className="p-3">
                        <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold border ${client.statusColor}`}>
                          {client.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: STATUTORY COMPLIANCE ENGINE */}
        {/* ========================================================= */}
        {activeTab === "compliance" && (
          <div
            id="tabpanel-compliance"
            role="tabpanel"
            aria-labelledby="tab-compliance"
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#00D1A3]" />
                  <span>GST 2B vs Purchase Register Reconciliation</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Auto-match purchase registers with GSTR-2B statements before filing GSTR-3B.
                </p>
              </div>
              <span className="text-xs text-emerald-300 font-medium bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/30">
                Tax Period: Aug 2026
              </span>
            </div>

            <div className="space-y-2">
              {[
                { gstin: "29AABCU9603R1ZM", vendor: "Cloud Hosting Services Ltd", inv: "INV-8491", books: "₹1,44,000", gstr2b: "₹1,44,000", itc: "₹25,920", reco: "Matched (100%)", statusColor: "text-emerald-400" },
                { gstin: "27AABCT2819Q1ZN", vendor: "Western Logistics Corp", inv: "WL-20412", books: "₹88,500", gstr2b: "₹88,500", itc: "₹15,930", reco: "Matched (100%)", statusColor: "text-emerald-400" },
                { gstin: "07AAACR4019K1ZS", vendor: "Delta Office Solutions", inv: "DS-9011", books: "₹42,000", gstr2b: "Missing in 2B", itc: "₹7,560 (On Hold)", reco: "Vendor Pending", statusColor: "text-amber-400" },
              ].map((row, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span>{row.vendor}</span>
                      <span className="text-[10px] font-mono text-slate-400">({row.gstin})</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Invoice: {row.inv} • Value: {row.books} • Eligible ITC: {row.itc}</div>
                  </div>
                  <div className="self-start sm:self-auto">
                    <span className={`font-semibold ${row.statusColor}`}>{row.reco}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: SECURE DOCUMENT REPOSITORY */}
        {/* ========================================================= */}
        {activeTab === "documents" && (
          <div
            id="tabpanel-documents"
            role="tabpanel"
            aria-labelledby="tab-documents"
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FolderLock className="w-5 h-5 text-[#00D1A3]" />
                  <span>Secure Client Document Repository</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Organized by Financial Year, Client, and Tax Category with structured upload requests.
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

        {/* ========================================================= */}
        {/* TAB 5: CLIENT PORTAL EXPERIENCE */}
        {/* ========================================================= */}
        {activeTab === "portal" && (
          <div
            id="tabpanel-portal"
            role="tabpanel"
            aria-labelledby="tab-portal"
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#082E5B] to-[#07152B] border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
                  CLIENT VIEW PERSPECTIVE
                </span>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-cyan-400" />
                  <span>Dedicated Client Self-Service Portal</span>
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Clients log in to see filed returns, download computation sheets, and fulfill document requests 24/7.
                </p>
              </div>
              <span className="text-xs text-cyan-300 font-medium bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/30 self-start sm:self-auto">
                Client: Apex Technologies LLP
              </span>
            </div>

            {/* Client Action Alert Banner */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-200">
              <div className="flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>1 Action Required:</strong> Please upload August bank statements for GSTR-3B reconciliation.</span>
              </div>
              <button className="px-3 py-1 rounded bg-amber-500 text-[#07152B] font-bold text-xs hover:bg-amber-400 transition-colors shrink-0">
                Upload Now
              </button>
            </div>

            {/* Client Available Downloads */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <FileText className="w-5 h-5 text-[#00D1A3]" />
                  <span className="text-[10px] text-emerald-400 font-semibold">Acknowledged</span>
                </div>
                <div className="font-bold text-white">GSTR-3B (July 2026)</div>
                <div className="text-[11px] text-slate-400">ARN: AA290726019281Z</div>
                <div className="text-[11px] text-[#00D1A3] font-semibold underline cursor-default">Download Return PDF</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <FileCheck2 className="w-5 h-5 text-sky-400" />
                  <span className="text-[10px] text-sky-400 font-semibold">AY 2025-26</span>
                </div>
                <div className="font-bold text-white">ITR-5 Computation</div>
                <div className="text-[11px] text-slate-400">Signed off by Partner</div>
                <div className="text-[11px] text-sky-400 font-semibold underline cursor-default">Download Computation</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <Receipt className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-semibold">Challan CIN</span>
                </div>
                <div className="font-bold text-white">TDS Challan ITNS 281</div>
                <div className="text-[11px] text-slate-400">Section 194C / 194J</div>
                <div className="text-[11px] text-emerald-400 font-semibold underline cursor-default">Download Challan</div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: TAXORYN MARKETPLACE */}
        {/* ========================================================= */}
        {activeTab === "marketplace" && (
          <div
            id="tabpanel-marketplace"
            role="tabpanel"
            aria-labelledby="tab-marketplace"
            className="space-y-4"
          >
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
                  PRACTICE EXPANSION HUB
                </span>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-emerald-400" />
                  <span>Taxoryn Marketplace Practice Profile & Inquiries</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Receive structured service requests from local and corporate businesses looking for tax advisory.
                </p>
              </div>
              <span className="text-xs text-emerald-300 font-medium bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/30 self-start sm:self-auto">
                Profile: Verified Practice
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
              <div className="lg:col-span-5 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3">
                <h4 className="font-bold text-white text-sm">Your Practice Profile</h4>
                <div className="space-y-1.5 text-slate-300">
                  <p className="font-semibold text-white">R. Kumar & Associates, Chartered Accountants</p>
                  <p className="text-[11px] text-slate-400">Bengaluru, Karnataka • Serving Pan-India</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Corporate GST", "Income Tax Audits", "TDS Compliance", "LLP Incorp"].map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <h4 className="font-bold text-white text-sm">Incoming Service Enquiries</h4>
                  <span className="text-[11px] text-emerald-400 font-semibold">2 New Requests</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Fintech Startup (Private Ltd)</div>
                      <div className="text-[11px] text-slate-400">Requires Monthly GSTR-1/3B & Advance Tax Advisory</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#00D1A3]/20 text-[#00D1A3] font-semibold text-[11px] border border-[#00D1A3]/30">
                      Review & Accept
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Retail Chain Partner (Proprietorship)</div>
                      <div className="text-[11px] text-slate-400">Requires GSTR-9 Annual Return & Reconciliation</div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#00D1A3]/20 text-[#00D1A3] font-semibold text-[11px] border border-[#00D1A3]/30">
                      Review & Accept
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. Footer Bar */}
      <div className="px-6 py-3 bg-[#070C1A] border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#00D1A3]" />
          <span>Tenant-Aware Practice Isolation</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <span>Role-Based Permissions</span>
          <span>•</span>
          <span>Illustrative interface with sample data</span>
        </div>
      </div>
    </div>
  );
}
