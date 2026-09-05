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
} from "lucide-react";
import { cn } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";

type TabKey = "overview" | "gst" | "itr" | "tasks" | "documents";

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl border border-slate-700/60 bg-[#07152B] shadow-2xl shadow-[#082E5B]/20 overflow-hidden text-slate-100">
      {/* 1. Window Browser Chrome Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-slate-800 bg-[#070C1A] text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
            https://app.taxoryn.com/dashboard
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="font-semibold text-slate-300">Sample Taxoryn Workspace</span>
          <span className="hidden md:inline text-slate-500">• Illustrative interface with sample data</span>
        </div>
      </div>

      {/* 2. Authentic Taxoryn Product Header & Navigation Bar */}
      <div className="px-4 sm:px-6 py-3 border-b border-slate-800/90 bg-[#07152B]/95 backdrop-blur-sm flex flex-wrap items-center justify-between gap-3">
        {/* Left: Global Search Bar */}
        <div className="relative w-44 sm:w-56 min-w-0">
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
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5">
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
                "px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-[#00D1A3] text-[#07152B] shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Quick Action, Notification Bell, User Avatar & Role Badge */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button className="hidden xl:inline-flex items-center gap-1 text-[11px] font-bold bg-[#00D1A3]/15 text-[#00D1A3] border border-[#00D1A3]/30 px-2.5 py-1.5 rounded-lg">
            <Plus className="w-3.5 h-3.5" />
            <span>New Action</span>
          </button>

          <div className="relative p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <Bell className="w-4 h-4" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3] absolute top-1 right-1" />
          </div>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#00D1A3] text-[#07152B] font-black text-xs flex items-center justify-center shadow-sm">
              RS
            </div>
            <div className="hidden md:flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/70 rounded-full px-2.5 py-1 text-[11px] font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D1A3]" />
              <span>Practice Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace Frame */}
      <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#07152B] to-[#040C1A]">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Dashboard Sub-Header matching actual Taxoryn product */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
              <div>
                <h2 className="text-lg font-black text-white tracking-tight">
                  Executive Practice Dashboard
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time compliance health, client workload allocation, and billing realization metrics.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 self-start sm:self-auto bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Sync Active</span>
              </div>
            </div>

            {/* Top Row: Core Practice KPI Cards (5 Cards matching actual Taxoryn product) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {/* 1. Active Clients */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Active Clients
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-2xl font-black text-white">248</span>
                  <span className="text-[10px] font-medium text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                    of 260 total
                  </span>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Inactive:</span>
                  <span className="font-semibold text-slate-300">12</span>
                </div>
              </div>

              {/* 2. GST Compliance */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    GST Compliance
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-2xl font-black text-emerald-400">128</span>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    GST Clients
                  </span>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                  <span className="text-emerald-400 font-medium">Filed: 98</span>
                  <span className="text-amber-400 font-medium">Due: 24</span>
                  <span className="text-rose-400 font-bold">Overdue: 6</span>
                </div>
              </div>

              {/* 3. ITR Compliance */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    ITR Compliance
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-2xl font-black text-purple-400">192</span>
                  <span className="text-[10px] font-bold text-purple-300 bg-purple-500/15 px-1.5 py-0.5 rounded border border-purple-500/30">
                    ITR Clients
                  </span>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                  <span className="text-purple-400 font-medium">Filed: 142</span>
                  <span className="text-amber-400 font-medium">Pending: 42</span>
                  <span className="text-rose-400 font-bold">Overdue: 8</span>
                </div>
              </div>

              {/* 4. TDS Compliance */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    TDS Compliance
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                    <Percent className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-2xl font-black text-indigo-400">84</span>
                  <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/15 px-1.5 py-0.5 rounded border border-indigo-500/30">
                    TAN Clients
                  </span>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                  <span className="text-indigo-400 font-medium">Filed: 64</span>
                  <span className="text-amber-400 font-medium">Pending: 16</span>
                  <span className="text-rose-400 font-bold">Overdue: 4</span>
                </div>
              </div>

              {/* 5. Fee Realization */}
              <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Fee Realization
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <Receipt className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-xl font-black text-white truncate">₹18,40,000</span>
                  <span className="text-[10px] font-medium text-slate-400">Collected</span>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Outstanding:</span>
                  <span className="font-bold text-rose-400">₹3,20,000</span>
                </div>
              </div>
            </div>

            {/* Middle Row: Workflow Task Overview + CA Team Workload Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Task Velocity Widget */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Workflow & Task Overview
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Real-time operational task load across organization
                  </p>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-xs">
                      86
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Total Active Tasks</p>
                      <p className="text-[10px] text-slate-400">Across all practice assignments</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    <p className="text-[10px] font-semibold text-amber-300">Pending</p>
                    <p className="text-lg font-black text-amber-200 mt-0.5">28</p>
                  </div>
                  <div className="p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                    <p className="text-[10px] font-semibold text-rose-300">Overdue</p>
                    <p className="text-lg font-black text-rose-200 mt-0.5">6</p>
                  </div>
                  <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <p className="text-[10px] font-semibold text-emerald-300">Completed</p>
                    <p className="text-lg font-black text-emerald-200 mt-0.5">52</p>
                  </div>
                </div>
              </div>

              {/* CA Team & Staff Workload Allocation Table */}
              <div className="lg:col-span-2 p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      CA Team & Staff Workload Allocation
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Assigned vs pending tasks per practice staff member
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    4 Active Staff
                  </span>
                </div>

                <div className="overflow-x-auto rounded-lg border border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-950/70 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                        <th className="px-3.5 py-2.5">Employee</th>
                        <th className="px-3 py-2.5">Department</th>
                        <th className="px-3 py-2.5 text-center">Assigned</th>
                        <th className="px-3 py-2.5 text-center">Pending</th>
                        <th className="px-3 py-2.5 text-center">Overdue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 bg-slate-900/40 text-slate-200">
                      {[
                        {
                          name: "CA Rajesh Sharma",
                          code: "EMP001",
                          role: "Managing Partner",
                          dept: "Direct Tax",
                          assigned: 24,
                          pending: 6,
                          overdue: 1,
                        },
                        {
                          name: "Priya Sundaram",
                          code: "EMP004",
                          role: "Sr. Tax Associate",
                          dept: "GST & Indirect Tax",
                          assigned: 32,
                          pending: 11,
                          overdue: 2,
                        },
                        {
                          name: "Amit Verma",
                          code: "EMP007",
                          role: "Article Assistant",
                          dept: "TDS & Audit",
                          assigned: 18,
                          pending: 7,
                          overdue: 2,
                        },
                        {
                          name: "Sneha Patel",
                          code: "EMP009",
                          role: "Tax Associate",
                          dept: "Corporate Tax",
                          assigned: 12,
                          pending: 4,
                          overdue: 1,
                        },
                      ].map((emp, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40">
                          <td className="px-3.5 py-2.5 font-semibold text-white">
                            <div>{emp.name}</div>
                            <span className="text-[10px] font-normal text-slate-400">
                              {emp.code} • {emp.role}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 text-slate-300 text-[11px]">
                            {emp.dept}
                          </td>
                          <td className="px-3 py-2.5 text-center font-bold text-white">
                            {emp.assigned}
                          </td>
                          <td className="px-3 py-2.5 text-center">
                            <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 font-semibold text-[10px] border border-amber-500/30">
                              {emp.pending}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 text-center">
                            <span className="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 font-semibold text-[10px] border border-rose-500/30">
                              {emp.overdue}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
