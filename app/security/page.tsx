import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ShieldCheck, Lock, Database, FileCheck, Key } from "lucide-react";

export const metadata = constructMetadata({
  title: "Taxoryn Security & Data Protection Architecture",
  description:
    "Learn about Taxoryn's security-first design: tenant data isolation, role-based access control, cryptographic session handling, and audit trails.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container>
        <SectionHeading
          badge="Security & Compliance"
          badgeVariant="teal"
          title="Security Engineered for Confidential Tax Practice Data"
          description="We understand the sensitivity of your clients' financial statements, PAN details, and tax filings. Security is built into every layer of our platform."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <Database className="w-8 h-8 text-[#082E5B]" />
            <h3 className="text-lg font-bold text-[#07152B]">Multi-Tenant Isolation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every practice operates in a logically isolated tenancy with database row-level boundaries ensuring zero cross-practice data exposure.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <Lock className="w-8 h-8 text-[#00D1A3]" />
            <h3 className="text-lg font-bold text-[#07152B]">Data Encryption</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              All communications are protected via TLS 1.3 encryption in transit, and stored documents are encrypted using AES-256 standards at rest.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <Key className="w-8 h-8 text-sky-600" />
            <h3 className="text-lg font-bold text-[#07152B]">Granular Role Access</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Practice owners can customize granular permissions across partners, managers, and article assistants to ensure need-to-know access.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <FileCheck className="w-8 h-8 text-emerald-600" />
            <h3 className="text-lg font-bold text-[#07152B]">Comprehensive Audit Trails</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every document view, export, computation update, and filing confirmation is immutably logged with timestamp and user attribution.
            </p>
          </div>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
