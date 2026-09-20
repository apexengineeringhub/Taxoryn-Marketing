"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  FileSpreadsheet,
  MessageSquareWarning,
  Mail,
  FolderSync,
  Calendar,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

export function ProblemSection() {
  const { t } = useLanguage();

  const fragmentedTools = [
    { name: "Spreadsheets", icon: FileSpreadsheet, detail: t.problem.item1Title },
    { name: "WhatsApp", icon: MessageSquareWarning, detail: t.problem.item4Title },
    { name: "Email Threads", icon: Mail, detail: t.problem.item3Title },
    { name: "Local Folders", icon: FolderSync, detail: t.problem.item1Desc },
    { name: "Calendars", icon: Calendar, detail: t.problem.item2Title },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Problem Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center">
              <Badge variant="navy" size="md">
                {t.problem.badge.toUpperCase()}
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#07152B] tracking-tight leading-tight">
              {t.problem.title}
            </h2>

            <div className="space-y-3 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal">
              <p>{t.problem.subtitle}</p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#082E5B]">
              <span className="w-2 h-2 rounded-full bg-[#00D1A3]" />
              <span>{t.problem.replaceNote}</span>
            </div>
          </div>

          {/* RIGHT: Visual Transformation Diagram (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#07152B] border border-slate-800 text-white space-y-4 shadow-xl">
              {/* Fragmented Stack */}
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-rose-400 uppercase">
                    {t.problem.stackHeader}
                  </span>
                  <span className="text-[10px] text-slate-400">{t.problem.disconnectedTools}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {fragmentedTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <div
                        key={tool.name}
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2"
                      >
                        <Icon className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <div className="truncate">
                          <div className="text-xs font-semibold text-slate-200 truncate">{tool.name}</div>
                          <div className="text-[9px] text-slate-500 truncate">{tool.detail}</div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-center">
                    <span className="text-[10px] font-bold text-rose-300">{t.problem.dailyFriction}</span>
                  </div>
                </div>
              </div>

              {/* Transformation Indicator */}
              <div className="flex items-center justify-center gap-2 py-1 text-slate-400">
                <ArrowDown className="w-4 h-4 text-[#00D1A3]" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#00D1A3]">
                  {t.problem.transformHeader}
                </span>
                <ArrowDown className="w-4 h-4 text-[#00D1A3]" />
              </div>

              {/* Connected Solution Block */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#082E5B] to-[#0A3D78] border border-[#00D1A3]/40 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-[#00D1A3] flex items-center justify-center text-[#07152B] font-black text-[10px]">
                      TR
                    </div>
                    <span className="font-extrabold text-xs sm:text-sm text-white">
                      {t.problem.solutionHeader}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#00D1A3]/20 text-[#00D1A3] font-bold text-[10px] border border-[#00D1A3]/30">
                    {t.problem.connectedBadge}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] text-slate-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#00D1A3] shrink-0" />
                    <span>{t.problem.pillDirectory}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#00D1A3] shrink-0" />
                    <span>{t.problem.pillGstItr}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#00D1A3] shrink-0" />
                    <span>{t.problem.pillPortal}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#00D1A3] shrink-0" />
                    <span>{t.problem.pillGrowth}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
