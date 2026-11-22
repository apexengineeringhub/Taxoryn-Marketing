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
  Layers,
  FileText,
  Shield,
  Search,
  Bell,
  CheckSquare,
  ShieldCheck,
  ShoppingBag,
  Laptop,
  Check,
  Sliders,
  BarChart3,
  UserCheck,
  LayoutDashboard,
  Lock,
} from "lucide-react";
import { cn } from "@/components/common/Container";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export type ProductTabKey =
  | "overview"
  | "clients"
  | "compliance"
  | "documents"
  | "tasks"
  | "portal"
  | "marketplace"
  | "reports";

interface ProductPreviewProps {
  initialTab?: ProductTabKey;
  showTabSelector?: boolean;
}

export function ProductPreview({
  initialTab = "overview",
}: ProductPreviewProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProductTabKey>(initialTab);

  const sidebarNav = [
    { id: "overview" as const, label: t.productPreview.sidebar.dashboard, icon: LayoutDashboard },
    { id: "clients" as const, label: t.productPreview.sidebar.clients, icon: Users },
    { id: "compliance" as const, label: t.productPreview.sidebar.compliance, icon: FileCheck2 },
    { id: "documents" as const, label: t.productPreview.sidebar.documents, icon: FolderLock },
    { id: "tasks" as const, label: t.productPreview.sidebar.tasks, icon: CheckSquare },
    { id: "portal" as const, label: t.productPreview.sidebar.portal, icon: Laptop },
    { id: "marketplace" as const, label: t.productPreview.sidebar.marketplace, icon: ShoppingBag },
    { id: "reports" as const, label: t.productPreview.sidebar.reports, icon: BarChart3 },
    { id: "settings" as const, label: t.productPreview.sidebar.settings, icon: Sliders },
  ];

  const handleTabChange = (tabId: ProductTabKey) => {
    setActiveTab(tabId);
    trackEvent("product_preview_select", { area: tabId });
  };

  return (
    <div className="relative mx-auto w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-hidden text-slate-800 select-none">
      {/* 1. Light Application Chrome Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-slate-200 bg-slate-100/80 text-xs">
        <div className="flex min-w-0 items-center gap-2">
          <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-rose-400/90 shrink-0" />
          <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-amber-400/90 shrink-0" />
          <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-emerald-400/90 shrink-0" />
          <div className="flex min-w-0 items-center gap-1 sm:ml-2 font-mono text-[10px] text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
            <Lock className="w-2.5 h-2.5 text-slate-400 shrink-0" />
            <span className="truncate">app.taxoryn.com/{activeTab}</span>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 hidden sm:inline-block">
          <span className="text-[#008766] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
            {t.productPreview.demoDisclaimer || "Sample interface — demonstration data"}
          </span>
        </div>
      </div>

      {/* 2. Main App Frame (Sidebar + Main Content View) */}
      <div className="flex min-h-[380px] sm:min-h-[400px] min-w-0 bg-[#F8FAFC]">
        {/* Left App Sidebar */}
        <aside className="w-32 sm:w-36 shrink-0 border-r border-slate-200/90 bg-slate-50/80 p-2.5 flex flex-col justify-between hidden md:flex">
          <div className="space-y-3">
            {/* Sidebar Logo Lockup */}
            <div className="flex items-center gap-1.5 px-1.5 py-0.5">
              <div className="w-5 h-5 rounded-md bg-[#07152B] flex items-center justify-center text-[#00D1A3] text-[10px] font-black shadow-2xs">
                TR
              </div>
              <div className="font-black text-[11px] tracking-wider">
                <span className="text-[#07152B]">TAXO</span>
                <span className="text-[#00D1A3]">RYN</span>
              </div>
            </div>

            {/* Sidebar Navigation Items */}
            <nav className="space-y-0.5">
              {sidebarNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleTabChange(item.id as ProductTabKey)}
                    className={cn(
                      "w-full flex items-center gap-2 px-2 py-1 rounded-md text-[11px] font-semibold transition-all text-left",
                      isActive
                        ? "bg-white text-[#07152B] font-bold shadow-2xs border border-slate-200/90 text-[#008766]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                    )}
                  >
                    <Icon className={cn("w-3 h-3 shrink-0", isActive ? "text-[#008766]" : "text-slate-400")} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* User Tenant Badge */}
          <div className="pt-2 border-t border-slate-200 px-1 flex items-center gap-1.5 text-[10px] text-slate-500">
            <ShieldCheck className="w-3 h-3 text-[#008766] shrink-0" />
            <span className="truncate font-medium">{t.productPreview.tenantBadge}</span>
          </div>
        </aside>

        {/* Main Content View Area */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
          {/* Top Search & Profile Bar */}
          <div className="px-3 sm:px-4 py-1.5 border-b border-slate-200 flex items-center justify-between gap-2 sm:gap-3 bg-white min-w-0">
            <div className="relative min-w-0 flex-1 max-w-xs">
              <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder={t.productPreview.searchPlaceholder}
                className="w-full pl-7 pr-6 py-0.5 text-[10px] bg-slate-50 border border-slate-200 rounded-md text-slate-800 placeholder:text-slate-400 focus:outline-none cursor-default"
              />
              <kbd className="hidden sm:inline-block absolute right-1.5 top-1/2 -translate-y-1/2 px-1 py-0.2 text-[8px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded">
                ⌘K
              </kbd>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="relative p-1 rounded text-slate-400">
                <Bell className="w-3 h-3 text-slate-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3] absolute top-0.5 right-0.5" />
              </div>
              <div className="w-5 h-5 rounded-full bg-[#07152B] text-white font-bold text-[9px] flex items-center justify-center shadow-2xs">
                CA
              </div>
            </div>
          </div>

          {/* Mobile Tab Selector (Visible on <md) */}
          <div className="flex md:hidden items-center gap-1.5 px-3 py-1.5 border-b border-slate-200 bg-slate-50 overflow-x-auto no-scrollbar">
            {sidebarNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleTabChange(item.id as ProductTabKey)}
                  className={cn(
                    "flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold whitespace-nowrap transition-colors shrink-0",
                    isActive
                      ? "bg-white text-[#07152B] border border-slate-200 shadow-2xs text-[#008766]"
                      : "text-slate-600 hover:text-slate-900 bg-slate-100/60"
                  )}
                >
                  <Icon className="w-3 h-3" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Module View Body */}
          <div className="p-3 sm:p-3.5 space-y-3 flex-1 overflow-hidden">
            {/* Dashboard Overview Panel (Default) */}
            {activeTab === "overview" && (
              <div className="space-y-2.5">
                {/* Greeting Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#07152B] tracking-tight">
                      {t.productPreview.workspaceTitle}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500">
                      {t.productPreview.workspaceSubtitle}
                    </p>
                  </div>
                </div>

                {/* 4 Neutral Sample Module Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[10px] font-semibold">{t.productPreview.modules.clientsTitle}</span>
                      <Users className="w-3.5 h-3.5 text-[#008766]" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#07152B]">{t.productPreview.modules.clientsSub}</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">{t.productPreview.modules.clientsDesc}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[10px] font-semibold">{t.productPreview.modules.complianceTitle}</span>
                      <FileCheck2 className="w-3.5 h-3.5 text-[#008766]" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#07152B]">{t.productPreview.modules.complianceSub}</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">{t.productPreview.modules.complianceDesc}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[10px] font-semibold">{t.productPreview.modules.documentsTitle}</span>
                      <FolderLock className="w-3.5 h-3.5 text-sky-600" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#07152B]">{t.productPreview.modules.documentsSub}</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">{t.productPreview.modules.documentsDesc}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-0.5">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[10px] font-semibold">{t.productPreview.modules.tasksTitle}</span>
                      <CheckSquare className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#07152B]">{t.productPreview.modules.tasksSub}</div>
                    <div className="text-[10px] text-slate-500 font-medium truncate">{t.productPreview.modules.tasksDesc}</div>
                  </div>
                </div>

                {/* 2 Bottom Content Panels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                  {/* Panel 1: Upcoming Compliance */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                      <h4 className="text-[11px] font-bold text-[#07152B]">{t.productPreview.upcoming.title}</h4>
                      <span className="text-[9px] font-semibold text-slate-500 hover:text-slate-800 cursor-pointer">
                        {t.productPreview.upcoming.viewAll}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px]">
                        <div>
                          <div className="font-semibold text-slate-900">{t.productPreview.upcoming.item1Title}</div>
                          <div className="text-[9px] text-slate-500">{t.productPreview.upcoming.item1Due}</div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 font-bold text-[9px] border border-sky-200">
                          {t.productPreview.upcoming.item1Tag}
                        </span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px]">
                        <div>
                          <div className="font-semibold text-slate-900">{t.productPreview.upcoming.item2Title}</div>
                          <div className="text-[9px] text-slate-500">{t.productPreview.upcoming.item2Due}</div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 font-bold text-[9px] border border-sky-200">
                          {t.productPreview.upcoming.item2Tag}
                        </span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px]">
                        <div>
                          <div className="font-semibold text-slate-900">{t.productPreview.upcoming.item3Title}</div>
                          <div className="text-[9px] text-slate-500">{t.productPreview.upcoming.item3Due}</div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 font-bold text-[9px] border border-amber-200">
                          {t.productPreview.upcoming.item3Tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Panel 2: Recent Activity */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                      <h4 className="text-[11px] font-bold text-[#07152B]">{t.productPreview.activity.title}</h4>
                      <span className="text-[9px] font-semibold text-slate-500 hover:text-slate-800 cursor-pointer">
                        {t.productPreview.activity.viewAll}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                            <FileText className="w-2.5 h-2.5" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{t.productPreview.activity.act1Title}</div>
                            <div className="text-[9px] text-slate-500">{t.productPreview.activity.act1Desc}</div>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[8px] font-mono border border-slate-200">
                          {t.productPreview.activity.act1Tag}
                        </span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{t.productPreview.activity.act2Title}</div>
                            <div className="text-[9px] text-slate-500">{t.productPreview.activity.act2Desc}</div>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[8px] font-mono border border-emerald-200">
                          {t.productPreview.activity.act2Tag}
                        </span>
                      </div>

                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded bg-teal-100 text-[#008766] flex items-center justify-center shrink-0">
                            <UserCheck className="w-2.5 h-2.5" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{t.productPreview.activity.act3Title}</div>
                            <div className="text-[9px] text-slate-500">{t.productPreview.activity.act3Desc}</div>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[8px] font-mono border border-slate-200">
                          {t.productPreview.activity.act3Tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other interactive module views (Clients, Compliance, Documents, etc.) */}
            {activeTab !== "overview" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                  <h4 className="text-xs sm:text-sm font-bold text-[#07152B] capitalize">
                    {activeTab} Management Workspace
                  </h4>
                  <button
                    onClick={() => setActiveTab("overview")}
                    className="text-[10px] text-[#008766] font-semibold hover:underline"
                  >
                    ← {t.productPreview.backToDashboard}
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs text-slate-700 space-y-1.5">
                  <p className="font-semibold text-[#07152B]">
                    {t.productPreview.liveModule}: <span className="capitalize text-[#008766]">{activeTab}</span>
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">
                    {t.productPreview.tenantDesc}
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
