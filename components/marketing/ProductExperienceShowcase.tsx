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
  Search,
  Bell,
  CheckCircle2,
  Calendar,
  FileText,
  Clock,
  Shield,
  ArrowRight,
  Filter,
  Lock,
} from "lucide-react";

export type ExperienceScreenId =
  | "dashboard"
  | "client-360"
  | "tasks"
  | "documents";

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
      id: "client-360" as const,
      label: "Client 360 & Directory",
      icon: Users,
      description: "Searchable directory and complete relationship context: active service agreements, PAN, GSTINs, and assigned team members.",
    },
    {
      id: "tasks" as const,
      label: "Task & Compliance Worklist",
      icon: CheckSquare,
      description: "Organized task execution by client, return category (GST/TDS/ITR), assignee, and due date.",
    },
    {
      id: "documents" as const,
      label: "Document Vault & Requests",
      icon: FolderLock,
      description: "Secure document requests, client upload portals, challan archives, and permanent practice files.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200/80" id="product-experience">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
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
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 mb-4 sm:mb-5 no-scrollbar">
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
                    ? "bg-[#07152B] text-white border-[#07152B] shadow-md ring-1 ring-[#00D1A3]/30"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#00D1A3]" : "text-slate-400"}`} />
                <span>{screen.label}</span>
              </button>
            );
          })}
        </div>

        {/* Screen Showcase Display Window (Authentic Light Mode) */}
        <div className="rounded-2xl border border-slate-200/90 bg-white text-slate-800 shadow-xl shadow-slate-900/5 overflow-hidden max-w-5xl mx-auto">
          {/* Chrome Top Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-100/80 border-b border-slate-200 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200 ml-2 shadow-2xs">
                <Lock className="w-2.5 h-2.5 text-slate-400" />
                <span>app.taxoryn.com/{activeScreen}</span>
              </div>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D1A3]" />
              <span className="font-semibold text-slate-700">Taxoryn Practice Workspace</span>
            </div>
          </div>

          {/* Body Content based on active screen */}
          <div className="p-4 sm:p-5 lg:p-6 min-h-[400px] bg-[#F8FAFC]">
            {/* View 1: Practitioner Dashboard */}
            {activeScreen === "dashboard" && (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#07152B]">Firm Operational Dashboard</h3>
                    <p className="text-xs text-slate-500">Sharma & Associates • Chartered Accountants</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-emerald-50 text-[#008766] font-bold text-xs border border-emerald-200">
                      FY 2026-27 Active
                    </span>
                  </div>
                </div>

                {/* 4 Practice Overview Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                    <div className="text-[11px] text-slate-500 font-medium">Practice Entities</div>
                    <div className="text-xl font-bold text-[#07152B]">Active Firm</div>
                    <div className="text-[10px] text-[#008766] font-medium">100% KYC verified records</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                    <div className="text-[11px] text-slate-500 font-medium">Pending GSTR-3B</div>
                    <div className="text-xl font-bold text-amber-700">Scheduled</div>
                    <div className="text-[10px] text-slate-500">Due next week</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                    <div className="text-[11px] text-slate-500 font-medium">Open Firm Tasks</div>
                    <div className="text-xl font-bold text-[#07152B]">Organized</div>
                    <div className="text-[10px] text-slate-500">Assigned across staff</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                    <div className="text-[11px] text-slate-500 font-medium">Document Requests</div>
                    <div className="text-xl font-bold text-sky-700">In Progress</div>
                    <div className="text-[10px] text-slate-500">Client portal sync</div>
                  </div>
                </div>

                {/* Statutory Compliance Worklist */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Statutory Compliance Worklist (This Week)
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: "GSTR-3B Monthly Return Filing", client: "Apex Logistics LLP", assignee: "Rahul M. (Article)", status: "Client Review", tag: "GST" },
                      { title: "Quarterly TDS 26Q Reconciliation", client: "Sterling Infotech Ltd", assignee: "Pooja S. (Associate)", status: "Draft Completed", tag: "TDS" },
                      { title: "Income Tax Scrutiny Response (Sec 143)", client: "K. R. Synthetics", assignee: "Amit Sharma (Partner)", status: "Documents Ready", tag: "Notice" },
                    ].map((row, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between text-xs">
                        <div className="space-y-0.5">
                          <div className="font-semibold text-slate-900">{row.title}</div>
                          <div className="text-[11px] text-slate-500">{row.client} • Assignee: {row.assignee}</div>
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-50 text-slate-700 border border-slate-200">
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* View 2: Client 360 & Directory */}
            {activeScreen === "client-360" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#008766]">
                      CLIENT 360 PROFILE
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#07152B]">Apex Logistics LLP</h3>
                    <p className="text-xs text-slate-500">PAN: AABCA1234F • Primary Contact: Rajesh Singhania (Managing Partner)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-emerald-50 text-[#008766] font-bold text-xs border border-emerald-200">
                      Client Portal Active
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-2">
                    <div className="font-bold text-slate-800 border-b border-slate-100 pb-1.5">Active Engagements</div>
                    <ul className="space-y-1.5 text-slate-600">
                      <li>• GST Monthly Compliance (GSTR-1, 3B)</li>
                      <li>• TDS Returns (26Q Quarterly)</li>
                      <li>• Tax Audit under Sec 44AB</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-2">
                    <div className="font-bold text-slate-800 border-b border-slate-100 pb-1.5">Compliance Health</div>
                    <ul className="space-y-1.5 text-slate-600">
                      <li className="flex justify-between"><span>GSTR-3B Previous:</span> <span className="text-[#008766] font-bold">Filed on time</span></li>
                      <li className="flex justify-between"><span>GSTR-1 Previous:</span> <span className="text-[#008766] font-bold">Filed on time</span></li>
                      <li className="flex justify-between"><span>TDS Q2:</span> <span className="text-amber-700 font-bold">Pending challan</span></li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-2">
                    <div className="font-bold text-slate-800 border-b border-slate-100 pb-1.5">Document Vault</div>
                    <ul className="space-y-1.5 text-slate-600">
                      <li>• Certificate of Incorporation (PDF)</li>
                      <li>• Partnership Deed & PAN Copy</li>
                      <li>• Bank Statements FY 2025-26</li>
                    </ul>
                  </div>
                </div>

                {/* Client List Rows */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Associated Client Entities
                  </div>
                  {[
                    { name: "Sterling Infotech Pvt Ltd", pan: "AABCS5678G", gstin: "29AABCS5678G2Z1 (Karnataka)", type: "Private Limited", partner: "Amit Sharma", services: "Statutory Audit, Retainer" },
                    { name: "Dr. K. S. Verma", pan: "ABCPV1234D", gstin: "Non-GST", type: "Individual Professional", partner: "Neha Verma", services: "ITR-3, Advance Tax" },
                  ].map((client, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div>
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          <span>{client.name}</span>
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
                            {client.type}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          PAN: <span className="font-mono text-slate-700">{client.pan}</span> • GSTIN: <span className="font-mono text-slate-700">{client.gstin}</span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-[11px] font-semibold text-[#008766]">{client.services}</div>
                        <div className="text-[10px] text-slate-500">Partner: {client.partner}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 3: Task & Compliance Worklist */}
            {activeScreen === "tasks" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#07152B]">Statutory Task Worklist</h3>
                    <p className="text-xs text-slate-500">Filter tasks by compliance type, assignees, client, and statutory due dates.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-white text-slate-600 border border-slate-200 shadow-xs">Filter: Active</span>
                    <span className="px-2 py-1 rounded bg-emerald-50 text-[#008766] font-bold border border-emerald-200">Worklist Live</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { task: "Prepare & reconcile GSTR-3B", client: "Apex Logistics LLP", staff: "Rahul M.", deadline: "20 Nov 2026", status: "Review Ready", urgency: "High" },
                    { task: "TDS 26Q return filing & FVU generation", client: "Sterling Infotech Pvt Ltd", staff: "Pooja S.", deadline: "30 Nov 2026", status: "Data Input", urgency: "Medium" },
                    { task: "Draft reply to Section 142(1) notice", client: "K. R. Synthetics", staff: "Amit Sharma", deadline: "22 Nov 2026", status: "In Progress", urgency: "High" },
                    { task: "Advance tax 3rd installment computation", client: "Dr. K. S. Verma", staff: "Rahul M.", deadline: "15 Dec 2026", status: "Scheduled", urgency: "Normal" },
                  ].map((t, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between gap-2 text-xs">
                      <div>
                        <div className="font-semibold text-slate-900">{t.task}</div>
                        <div className="text-[11px] text-slate-500">{t.client} • Staff: {t.staff}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          t.urgency === "High" ? "bg-rose-50 text-rose-700 border border-rose-200" : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}>
                          Due: {t.deadline}
                        </span>
                        <div className="text-[10px] text-slate-500 mt-1">{t.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 4: Document Vault & Requests */}
            {activeScreen === "documents" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#07152B]">Client Document Management</h3>
                    <p className="text-xs text-slate-500">Request, collect, and organize client records securely with audit trails.</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-50 text-[#008766] font-bold text-xs border border-emerald-200">
                    Encrypted Storage
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-2">
                    <div className="font-bold text-slate-800 flex items-center justify-between">
                      <span>Document Collection Requests</span>
                      <span className="text-[10px] text-amber-700 font-mono font-bold">Active</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between">
                        <span className="text-slate-800">Oct 2026 Bank Statements</span>
                        <span className="text-amber-700 font-medium">Apex Logistics</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between">
                        <span className="text-slate-800">Form 26AS Confirmation</span>
                        <span className="text-amber-700 font-medium">Dr. K. S. Verma</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between">
                        <span className="text-slate-800">Sales Register CSV</span>
                        <span className="text-[#008766] font-bold">Uploaded ✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-2">
                    <div className="font-bold text-slate-800 flex items-center justify-between">
                      <span>Recent Verified Files</span>
                      <span className="text-[10px] text-slate-500">Permanent Vault</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between">
                        <span className="text-slate-800">GSTR-3B_Oct2026_Ack.pdf</span>
                        <span className="text-slate-500">Generated</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between">
                        <span className="text-slate-800">TaxAuditReport_3CD_Signed.pdf</span>
                        <span className="text-slate-500">UDIN Linked</span>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-100 flex justify-between">
                        <span className="text-slate-800">TDS_Challan_281_Oct.pdf</span>
                        <span className="text-slate-500">Verified</span>
                      </div>
                    </div>
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
