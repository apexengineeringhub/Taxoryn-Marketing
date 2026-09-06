"use client";

import React from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function TaxDisclaimer() {
  const { t } = useLanguage();
  const d = t.pages.disclaimer;

  return (
    <aside
      aria-label="Statutory Tax Information Disclaimer"
      className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 my-8"
    >
      <div className="flex items-center gap-2 font-bold text-slate-800">
        <Info className="w-4 h-4 text-[#009E77] shrink-0" aria-hidden="true" />
        <span>{d.title}</span>
      </div>
      <p className="leading-relaxed">
        {d.content}
      </p>
    </aside>
  );
}
