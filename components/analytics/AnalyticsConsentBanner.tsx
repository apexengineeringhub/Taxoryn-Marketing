"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X } from "lucide-react";
import { getConsentState, setAnalyticsConsent } from "@/lib/analytics";

export function AnalyticsConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only display banner if consent state is explicitly unknown
    if (getConsentState() === "unknown") {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setAnalyticsConsent(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    setAnalyticsConsent(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Privacy & Analytics Preferences"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 sm:p-5 rounded-2xl bg-[#07152B] text-white border border-slate-700/80 shadow-2xl space-y-3.5 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Shield className="w-4 h-4 text-[#00D1A3]" />
          <span>Privacy & Analytics</span>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close analytics banner"
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        We use privacy-conscious analytics to measure site traffic and improve practice workflows. We never track PAN, GSTIN, financial returns, passwords, or personal identity. Read our{" "}
        <Link
          href="/privacy"
          className="text-[#00D1A3] underline hover:text-[#00B388]"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <div className="flex items-center gap-2.5 pt-1">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-3.5 rounded-lg bg-[#00D1A3] text-[#07152B] font-bold text-xs hover:bg-[#00B388] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D1A3]"
        >
          Accept Analytics
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 py-2 px-3.5 rounded-lg bg-slate-800 text-slate-200 font-semibold text-xs hover:bg-slate-700 transition-colors border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        >
          Decline
        </button>
      </div>
    </aside>
  );
}
