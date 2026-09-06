import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  FileSpreadsheet,
  Users,
} from "lucide-react";

export function ShowcaseSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="See Taxoryn in Action"
          badgeVariant="teal"
          title="See Taxoryn in action"
          description="A purpose-built interface designed around how Indian tax practitioners review computations, track compliance, and coordinate teams."
        />

        {/* Highlight 1: Unified Filing & Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          <div className="lg:col-span-5 space-y-5">
            <Badge variant="teal">Control & Compliance</Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07152B]">
              Compliance Tracking Without the Chaos
            </h3>
            <p className="text-base text-[#475569] leading-relaxed">
              Never wonder if a client&apos;s GSTR-3B was submitted or an ITR computation was signed off. Taxoryn gives you a consolidated view of pending returns with organized status tracking.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "Due-date tracking for monthly GST and quarterly TDS",
                "Visibility into ITC mismatches and return delays",
                "Filing acknowledgment records attached directly to client files",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <Button
                href={siteConfig.links.joinEarlyAccess}
                variant="secondary"
                size="md"
                icon={ArrowRight}
              >
                Join Early Access
              </Button>
            </div>
          </div>

          {/* Screenshot Container */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#082E5B] to-[#07152B] border border-slate-700 shadow-xl text-white space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#00D1A3]" />
                  <div>
                    <span className="font-bold text-sm block">GST Practice Command</span>
                    <span className="text-[11px] text-slate-400">Illustrative interface — fictional demo data</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                  Statutory Tracking
                </span>
              </div>

              {/* Mock table snippet */}
              <div className="space-y-2 text-xs">
                {[
                  { name: "Apex Technologies LLP", period: "Jan 2025", type: "GSTR-1", status: "Filed (ARN Rec.)", color: "text-emerald-400" },
                  { name: "Global Logistics Ltd", period: "Jan 2025", type: "GSTR-3B", status: "Draft Approved", color: "text-sky-400" },
                  { name: "Rathi Textiles", period: "Dec 2024", type: "GSTR-9", status: "In Audit Review", color: "text-amber-400" },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <div>
                      <div className="font-semibold text-white">{row.name}</div>
                      <div className="text-[11px] text-slate-400">{row.period} • {row.type}</div>
                    </div>
                    <span className={`font-semibold ${row.color}`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlight 2: Team Collaboration & Client Engagement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="p-4 sm:p-6 rounded-2xl bg-[#07152B] border border-slate-700 shadow-xl text-white space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-sky-400" />
                  <div>
                    <span className="font-bold text-sm block">Practice Workload Matrix</span>
                    <span className="text-[11px] text-slate-400">Illustrative interface — fictional demo data</span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono">Role Partitioned</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700">
                  <div className="text-slate-400 text-[11px]">Senior Partners</div>
                  <div className="text-lg font-bold text-white mt-1">12 Signoffs</div>
                  <div className="text-emerald-400 text-[10px] mt-0.5">High Priority</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700">
                  <div className="text-slate-400 text-[11px]">Tax Managers</div>
                  <div className="text-lg font-bold text-white mt-1">48 Reviews</div>
                  <div className="text-sky-400 text-[10px] mt-0.5">In Progress</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700">
                  <div className="text-slate-400 text-[11px]">Article Assistants</div>
                  <div className="text-lg font-bold text-white mt-1">86 Computations</div>
                  <div className="text-[#00D1A3] text-[10px] mt-0.5">Active</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
            <Badge variant="navy">Organize & Collaborate</Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07152B]">
              Empower Your Team Without Losing Oversight
            </h3>
            <p className="text-base text-[#475569] leading-relaxed">
              Assign returns, audits, and notice responses to specific team members. Maintain internal audit logs of who reviewed computations, checked documents, and approved filings.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "Strict role permissions protect unauthorized data access",
                "Internal audit trails for client record changes",
                "Structured task assignments across partner and associate scopes",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0F172A] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#00D1A3] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
