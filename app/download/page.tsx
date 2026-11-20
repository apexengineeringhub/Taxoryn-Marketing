import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig, androidConfig } from "@/lib/config/site";
import {
  Download,
  Smartphone,
  Globe,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Mail,
  HelpCircle,
  ExternalLink,
  Info,
  Hash,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Download Taxoryn Mobile App — Android APK & Web App Access",
  description:
    "Download the official Taxoryn Android application (v1.0.0) or sign in to the web application. Simple APK installation guide for Indian tax practitioners.",
  alternates: {
    canonical: "https://taxoryn.com/download",
  },
  openGraph: {
    title: "Download Taxoryn Mobile App (Android APK v1.0.0)",
    description:
      "One connected workspace for Indian CA firms and tax professionals. Download the Android APK or sign in to the web app.",
    url: "https://taxoryn.com/download",
    siteName: "Taxoryn",
    type: "website",
    images: [
      {
        url: "/brand/logo.svg",
        width: 1200,
        height: 630,
        alt: "Taxoryn Mobile App Download",
      },
    ],
  },
};

export default function DownloadPage() {
  const isAvailable = androidConfig.isAvailable;

  const steps = [
    {
      step: "01",
      title: "Download the APK",
      desc: `Tap the 'Download Android APK' button below. The package file (${androidConfig.fileSizeEstimate}) will begin downloading to your device.`,
    },
    {
      step: "02",
      title: "Allow Browser Installation",
      desc: `If prompted by Chrome or your mobile browser with a security prompt ('File might be harmful' or 'Install unknown apps'), tap 'Download anyway' and grant permission under Android Settings → Allow from this source.`,
    },
    {
      step: "03",
      title: "Tap to Install",
      desc: `Open your Downloads notification or File Manager, tap the downloaded Taxoryn APK file, and select 'Install'.`,
    },
    {
      step: "04",
      title: "Sign In to Your Practice",
      desc: `Open Taxoryn Mobile and log in with your practice account credentials, or use biometric fingerprint authentication.`,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header Banner */}
      <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3.5">
            <div className="inline-flex items-center">
              <Badge variant="teal" size="md">
                OFFICIAL APPLICATION ACCESS
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07152B] tracking-tight leading-tight">
              Get Taxoryn for Android & Web
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Manage client relationships, track pending statutory compliance, and review urgent tasks from anywhere. Available via modern web browser and companion Android APK.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Download Options Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 1. Android App Download Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#07152B] text-white border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 text-[#00D1A3] flex items-center justify-center font-bold">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#00D1A3]/20 text-[#00D1A3] border border-[#00D1A3]/30">
                    v{androidConfig.version} Release
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">Taxoryn for Android</h2>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Package: {androidConfig.packageName}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Companion mobile app designed for practitioners on the move. Monitor filing deadlines, check client GST profiles, and receive instant push updates.
                </p>

                {/* Compatibility Specs */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between border-b border-slate-800 pb-1 text-[11px] text-slate-400">
                    <span>System Requirement:</span>
                    <span className="font-semibold text-slate-200">{androidConfig.minAndroidVersion}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1 text-[11px] text-slate-400">
                    <span>File Size:</span>
                    <span className="font-semibold text-slate-200">{androidConfig.fileSizeEstimate} (80.8 MB)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1 text-[11px] text-slate-400">
                    <span>Distribution:</span>
                    <span className="font-semibold text-slate-200">Direct Verified APK (Scheme v2)</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 pt-0.5">
                    <span>Package SHA-256:</span>
                    <span className="font-mono text-[10px] text-slate-300 truncate max-w-[170px]" title={androidConfig.sha256}>
                      {androidConfig.sha256.slice(0, 16)}...
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                    <span>Statutory deadline alerts & notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                    <span>Camera document scanning for receipts & invoices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00D1A3] shrink-0" />
                    <span>Biometric fingerprint / face unlock</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-800 space-y-3">
                {isAvailable ? (
                  <Button
                    href={androidConfig.downloadUrl}
                    variant="primary"
                    size="lg"
                    icon={Download}
                    className="w-full justify-center font-bold text-sm bg-[#00D1A3] text-[#07152B] hover:bg-[#00B388] shadow-md shadow-[#00D1A3]/20"
                  >
                    Download Android APK (v{androidConfig.version})
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                      <span>
                        Direct APK download is currently being prepared for official release. Please access the web app or request early access below.
                      </span>
                    </div>
                    <Button
                      href={siteConfig.links.joinEarlyAccess}
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      className="w-full justify-center font-bold text-sm bg-[#00D1A3] text-[#07152B] hover:bg-[#00B388]"
                    >
                      Request Mobile Early Access
                    </Button>
                  </div>
                )}
                <p className="text-[11px] text-center text-slate-400">
                  Direct APK download from official Taxoryn servers. No Google Play account required.
                </p>
              </div>
            </div>

            {/* 2. Web Application Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold shadow-xs">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-slate-200 text-slate-700">
                    Instant Browser Access
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#07152B]">Taxoryn Web App</h2>
                  <p className="text-xs font-mono text-[#009E77] mt-1 font-semibold">
                    app.taxoryn.com
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Full practice management experience on your computer. Create client profiles, bulk-generate tasks, manage staff assignments, and oversee operations.
                </p>

                {/* Web Specs */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between border-b border-slate-100 pb-1 text-[11px] text-slate-500">
                    <span>Browser Compatibility:</span>
                    <span className="font-semibold text-slate-800">Chrome, Edge, Safari, Firefox</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1 text-[11px] text-slate-500">
                    <span>Installation Required:</span>
                    <span className="font-semibold text-slate-800">None (Cloud-native)</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>Security:</span>
                    <span className="font-semibold text-slate-800">MFA & Tenant Data Isolation</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#009E77] shrink-0" />
                    <span>Complete Client 360 & Statutory Compliance Hub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#009E77] shrink-0" />
                    <span>Multi-staff work allocation and review workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#009E77] shrink-0" />
                    <span>Bulk data import from Tally, Excel, and CSV</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-200 space-y-3">
                <Button
                  href={siteConfig.links.login}
                  variant="primary"
                  size="lg"
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
                    New practice? Request Early Access credentials →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Step-by-Step Android Installation Guidance */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#07152B]">
                How to Install the Android APK
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Because Taxoryn Mobile is provided directly as an APK, your phone may ask you to confirm before installing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-xl bg-white border border-slate-200 space-y-2.5 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-[#082E5B] text-[#00D1A3] font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      Guide Step
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#07152B]">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Note on Direct Distribution */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200/90 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Info className="w-4 h-4 text-[#082E5B] shrink-0" />
                <span>Notice Regarding Direct APK Releases</span>
              </div>
              <p>
                Taxoryn distributes its mobile application directly to verified accounting practices and chartered accountants. We do not use third-party app stores for this release, ensuring you receive genuine software directly signed by ORYN Technology.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Need Help Section */}
      <section className="py-10 bg-white">
        <Container>
          <div className="max-w-xl mx-auto text-center space-y-3">
            <h3 className="text-lg font-bold text-[#07152B]">Need Help with Installation?</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Our support team is happy to assist you in setting up Taxoryn for your practice devices.
            </p>
            <div className="pt-1 flex items-center justify-center gap-4 text-xs font-semibold text-[#082E5B]">
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="hover:text-[#009E77] transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.supportEmail}</span>
              </a>
              <span>•</span>
              <Link href="/privacy" className="hover:text-[#009E77] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#009E77] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
