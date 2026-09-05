import React from "react";
import Link from "next/link";
import { Info } from "lucide-react";

export function TaxDisclaimer() {
  return (
    <aside
      aria-label="Statutory Tax Information Disclaimer"
      className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 my-8"
    >
      <div className="flex items-center gap-2 font-bold text-slate-800">
        <Info className="w-4 h-4 text-[#009E77] shrink-0" aria-hidden="true" />
        <span>Important Tax & Statutory Notice</span>
      </div>
      <p className="leading-relaxed">
        Tax rules, filing procedures, and statutory deadlines in India are subject to periodic circulars and notifications issued by the Central Board of Direct Taxes (CBDT), Central Board of Indirect Taxes and Customs (CBIC), and the Ministry of Finance. Information provided on Taxoryn is for educational and practice-management operational guidance and should not be considered formal legal or tax advisory. Always verify current requirements with official government portals or a qualified Chartered Accountant / Tax Practitioner.
      </p>
    </aside>
  );
}
