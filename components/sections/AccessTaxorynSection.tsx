"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig, androidConfig } from "@/lib/config/site";
import {
  Globe,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Download,
  ShieldAlert,
  Info,
} from "lucide-react";

export function AccessTaxorynSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200/80" id="access">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
          <Badge variant="teal" size="md">
            PLATFORM ACCESS
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#07152B] tracking-tight">
            Access Taxoryn Anywhere Your Practice Operates
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Run your full office practice through the desktop web application, or stay connected on the move with the companion Android app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {/* Card 1: Web Application */}
          <div className="p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-slate-200/80 text-slate-700">
                  Browser-Based
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#07152B]">Web Application</h3>
                <p className="text-xs font-semibold text-[#009E77] mt-0.5">app.taxoryn.com</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full-featured desktop practice management. Access your entire client directory, generate compliance returns, manage tasks, and collaborate with staff directly in your browser.
              </p>

              <div className="pt-2 border-t border-slate-200/90 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Included Capabilities
                </div>
                {[
                  "No software installation or IT infrastructure needed",
                  "Accessible on Chrome, Edge, Safari, and Firefox",
                  "Complete Client 360, Document Vault, and Worklists",
                  "Secure Multi-Factor Authentication (MFA) enabled",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#009E77] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Web Practice Interface Frame */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-100 pb-1">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008766]" />
                    <span>app.taxoryn.com</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#008766]">Desktop Workspace</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 space-y-0.5">
                    <span className="text-slate-500 block">Worklists</span>
                    <span className="font-bold text-slate-800 block truncate">Multi-staff Queue</span>
                    <span className="text-[#008766] text-[9px]">Live Status</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 space-y-0.5">
                    <span className="text-slate-500 block">Directory</span>
                    <span className="font-bold text-slate-800 block truncate">Client 360 & PAN</span>
                    <span className="text-[#008766] text-[9px]">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <Button
                href={siteConfig.links.login}
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="w-full justify-center font-bold text-sm shadow-xs"
              >
                Sign In to Web App
              </Button>
              <div className="text-center">
                <Link
                  href={siteConfig.links.joinEarlyAccess}
                  className="text-xs font-semibold text-slate-500 hover:text-[#082E5B] transition-colors"
                >
                  Need practice credentials? Request Early Access →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Android Application */}
          <div className="p-5 sm:p-7 rounded-2xl bg-[#07152B] text-white border border-slate-800 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 text-[#00D1A3] flex items-center justify-center font-bold">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-[#00D1A3]/20 text-[#00D1A3] border border-[#00D1A3]/30">
                  Android APK v{androidConfig.version}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Android Application</h3>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">
                  Package: <span className="font-mono">{androidConfig.packageName}</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Stay updated while visiting clients, tax departments, or working remotely. Check statutory deadlines, review incoming client documents, and receive urgent task alerts.
              </p>

              <div className="pt-2 border-t border-slate-800 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Mobile Highlights
                </div>
                {[
                  "Compatible with Android 7.0+ (Android 8.0+ recommended)",
                  "Instant push notifications for client messages and deadlines",
                  "Document camera scanning for client invoices and receipts",
                  "Direct package download with step-by-step install guide",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1A3] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Mobile Companion Interface Frame (Consistent Device Ratio) */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-1">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                    <span>Taxoryn Mobile</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#00D1A3]">Android APK</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 space-y-0.5">
                    <span className="text-slate-400 block">Filing Alert</span>
                    <span className="font-bold text-white block truncate">GSTR-3B Today</span>
                    <span className="text-[#00D1A3] text-[9px]">Apex Logistics</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 space-y-0.5">
                    <span className="text-slate-400 block">Document Vault</span>
                    <span className="font-bold text-white block truncate">Invoice Uploaded</span>
                    <span className="text-[#00D1A3] text-[9px]">Sterling Infotech</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              {androidConfig.isAvailable ? (
                <Button
                  href={androidConfig.downloadUrl}
                  variant="primary"
                  size="md"
                  icon={Download}
                  className="w-full justify-center font-bold text-sm bg-[#00D1A3] text-[#07152B] hover:bg-[#00B388]"
                >
                  Download Android APK (v{androidConfig.version})
                </Button>
              ) : (
                <Button
                  href="/download"
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  className="w-full justify-center font-bold text-sm bg-[#00D1A3] text-[#07152B] hover:bg-[#00B388]"
                >
                  View Android App Release Details
                </Button>
              )}
              <div className="text-center">
                <Link
                  href="/download"
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  View installation guidance & system compatibility →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
