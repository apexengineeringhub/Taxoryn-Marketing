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
    <div className="relative mx-auto w-full rounded-2xl border border-slate-700/80 bg-[#07152B] shadow-2xl shadow-[#082E5B]/30 overflow-hidden text-slate-100 select-none">
      {/* 1. Mac Window Chrome Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-[#050E1D] text-xs">
        <div className="flex min-w-0 items-center gap-2">
          <div className="hidden sm:block w-3 h-3 rounded-full bg-rose-500/80 shrink-0" />
          <div className="hidden sm:block w-3 h-3 rounded-full bg-amber-500/80 shrink-0" />
          <div className="hidden sm:block w-3 h-3 rounded-full bg-emerald-500/80 shrink-0" />
          <div className="flex min-w-0 items-center gap-1 sm:ml-3 font-mono text-[10px] sm:text-[11px] text-slate-400">
            <Search className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">app.taxoryn.com/{activeTab}</span>
          </div>
        </div>
        <div className="text-[10px] text-slate-400 hidden sm:inline-block">
          <span className="text-[#00D1A3] font-semibold">{t.productPreview.demoDisclaimer || "Sample interface — demonstration data"}</span>
        </div>
      </div>

      {/* 2. Main App Frame (Sidebar + Main Content View) */}
      <div className="flex min-h-[460px] min-w-0 bg-[#07152B]">
        {/* Left App Sidebar */}
        <aside className="w-36 sm:w-44 shrink-0 border-r border-slate-800/80 bg-[#061224] p-3 flex flex-col justify-between hidden md:flex">
          <div className="space-y-4">
            {/* Sidebar Logo */}
            <div className="flex items-center gap-2 px-2 py-1">
              <div className="w-6 h-6 rounded-lg bg-[#07152B] border border-slate-700 flex items-center justify-center text-[#00D1A3] text-xs font-black">
                TR
              </div>
              <div className="font-black text-xs tracking-wider">
                <span className="text-white">TAXO</span>
                <span className="text-[#00D1A3]">RYN</span>
              </div>
            </div>

            {/* Sidebar Navigation Items */}
            <nav className="space-y-1">
              {sidebarNav.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleTabChange(item.id as ProductTabKey)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all text-left",
                      isActive
                        ? "bg-[#00D1A3]/20 text-[#00D1A3] border border-[#00D1A3]/30"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    )}
                  >
                    <Icon className={cn("w-3.5 h-3.5", isActive ? "text-[#00D1A3]" : "text-slate-400")} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* User Tenant Badge */}
          <div className="pt-3 border-t border-slate-800/80 px-1 flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00D1A3] shrink-0" />
            <span className="truncate">{t.productPreview.tenantBadge}</span>
          </div>
        </aside>

        {/* Main Content View Area */}
        <main className="flex-1 flex flex-col min-w-0 bg-gradient-to-b from-[#07152B] to-[#050E1D]">
          {/* Top Search & Profile Bar */}
          <div className="px-3 sm:px-6 py-2.5 border-b border-slate-800/80 flex items-center justify-between gap-2 sm:gap-3 bg-[#07152B]/60 min-w-0">
            <div className="relative min-w-0 flex-1 max-w-xs">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder={t.productPreview.searchPlaceholder}
                className="w-full pl-8 pr-7 py-1 text-[11px] bg-slate-900/80 border border-slate-800 rounded-lg text-slate-200 placeholder:text-slate-400 focus:outline-none cursor-default"
              />
              <kbd className="hidden sm:inline-block absolute right-2 top-1/2 -translate-y-1/2 px-1 py-0.2 text-[9px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
                ⌘K
              </kbd>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <div className="relative p-1 rounded text-slate-400">
                <Bell className="w-3.5 h-3.5" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3] absolute top-0.5 right-0.5" />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#00D1A3] text-[#07152B] font-bold text-[10px] flex items-center justify-center shadow-sm">
                CA
              </div>
            </div>
          </div>

          {/* Module View Body */}
          <div className="p-4 sm:p-5 space-y-4 flex-1 overflow-hidden">
            {/* Dashboard Overview Panel (Default) */}
            {activeTab === "overview" && (
              <div className="space-y-4">
                {/* Greeting Header */}
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                    {t.productPreview.workspaceTitle}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {t.productPreview.workspaceSubtitle}
                  </p>
                </div>

                {/* 4 Neutral Sample Module Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px] font-semibold">{t.productPreview.modules.clientsTitle}</span>
                      <Users className="w-3.5 h-3.5 text-[#00D1A3]" />
                    </div>
                    <div className="text-sm font-bold text-white">{t.productPreview.modules.clientsSub}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{t.productPreview.modules.clientsDesc}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px] font-semibold">{t.productPreview.modules.complianceTitle}</span>
                      <FileCheck2 className="w-3.5 h-3.5 text-[#00D1A3]" />
                    </div>
                    <div className="text-sm font-bold text-white">{t.productPreview.modules.complianceSub}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{t.productPreview.modules.complianceDesc}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px] font-semibold">{t.productPreview.modules.documentsTitle}</span>
                      <FolderLock className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <div className="text-sm font-bold text-white">{t.productPreview.modules.documentsSub}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{t.productPreview.modules.documentsDesc}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px] font-semibold">{t.productPreview.modules.tasksTitle}</span>
                      <CheckSquare className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-sm font-bold text-white">{t.productPreview.modules.tasksSub}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{t.productPreview.modules.tasksDesc}</div>
                  </div>
                </div>

                {/* 2 Bottom Content Panels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Panel 1: Upcoming Compliance */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-2.5">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                      <h4 className="text-xs font-bold text-white">{t.productPreview.upcoming.title}</h4>
                      <span className="text-[10px] font-semibold text-slate-400 hover:text-white cursor-pointer">
                        {t.productPreview.upcoming.viewAll}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded-lg bg-slate-800/60 flex items-center justify-between text-[11px]">
                        <div>
                          <div className="font-semibold text-white">{t.productPreview.upcoming.item1Title}</div>
                          <div className="text-[10px] text-slate-400">{t.productPreview.upcoming.item1Due}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold text-[10px] border border-sky-500/30">
                          {t.productPreview.upcoming.item1Tag}
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-800/60 flex items-center justify-between text-[11px]">
                        <div>
                          <div className="font-semibold text-white">{t.productPreview.upcoming.item2Title}</div>
                          <div className="text-[10px] text-slate-400">{t.productPreview.upcoming.item2Due}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold text-[10px] border border-sky-500/30">
                          {t.productPreview.upcoming.item2Tag}
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-800/60 flex items-center justify-between text-[11px]">
                        <div>
                          <div className="font-semibold text-white">{t.productPreview.upcoming.item3Title}</div>
                          <div className="text-[10px] text-slate-400">{t.productPreview.upcoming.item3Due}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px] border border-amber-500/30">
                          {t.productPreview.upcoming.item3Tag}
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-800/60 flex items-center justify-between text-[11px]">
                        <div>
                          <div className="font-semibold text-white">{t.productPreview.upcoming.item4Title}</div>
                          <div className="text-[10px] text-slate-400">{t.productPreview.upcoming.item4Due}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
                          {t.productPreview.upcoming.item4Tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Panel 2: Recent Activity */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-2.5">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                      <h4 className="text-xs font-bold text-white">{t.productPreview.activity.title}</h4>
                      <span className="text-[10px] font-semibold text-slate-400 hover:text-white cursor-pointer">
                        {t.productPreview.activity.viewAll}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded-lg bg-slate-800/60 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                            <FileText className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{t.productPreview.activity.act1Title}</div>
                            <div className="text-[10px] text-slate-400">{t.productPreview.activity.act1Desc}</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-slate-700/60 text-slate-300 text-[9px] font-mono">
                          {t.productPreview.activity.act1Tag}
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-800/60 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{t.productPreview.activity.act2Title}</div>
                            <div className="text-[10px] text-slate-400">{t.productPreview.activity.act2Desc}</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-mono">
                          {t.productPreview.activity.act2Tag}
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-800/60 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-[#00D1A3]/20 text-[#00D1A3] flex items-center justify-center shrink-0">
                            <UserCheck className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{t.productPreview.activity.act3Title}</div>
                            <div className="text-[10px] text-slate-400">{t.productPreview.activity.act3Desc}</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-slate-700/60 text-slate-300 text-[9px] font-mono">
                          {t.productPreview.activity.act3Tag}
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-800/60 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                            <AlertCircle className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{t.productPreview.activity.act4Title}</div>
                            <div className="text-[10px] text-slate-400">{t.productPreview.activity.act4Desc}</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono">
                          {t.productPreview.activity.act4Tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other interactive module views (Clients, Compliance, Documents, etc.) */}
            {activeTab !== "overview" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h4 className="text-sm font-bold text-white capitalize">
                    {activeTab} Management Workspace
                  </h4>
                  <button
                    onClick={() => setActiveTab("overview")}
                    className="text-[11px] text-[#00D1A3] hover:underline"
                  >
                    ← {t.productPreview.backToDashboard}
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <p className="font-semibold text-white">
                    {t.productPreview.liveModule}: <span className="capitalize text-[#00D1A3]">{activeTab}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">
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

