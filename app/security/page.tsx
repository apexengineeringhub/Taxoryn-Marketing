import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import {
  ShieldCheck,
  Lock,
  Database,
  FileCheck,
  Key,
  HardDrive,
  Server,
  FileLock2,
  Info,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Security Architecture & Data Protection | Taxoryn",
  description:
    "Explore Taxoryn's security architecture: tenant-aware access controls, role-based permissions, secure storage, and practice audit logging.",
  path: "/security",
});

export default function SecurityPage() {
  const securitySections = [
    {
      title: "Tenant Isolation",
      description:
        "Every practice environment operates within logical tenant boundaries. Data queries and storage keys are partitioned to maintain practice separation.",
      icon: Database,
    },
    {
      title: "Role-Based Access",
      description:
        "Granular access control policies allow practice administrators to configure roles for Partners, Managers, and Staff based on active client assignments.",
      icon: Key,
    },
    {
      title: "Authentication",
      description:
        "Secure authentication mechanisms, password hashing protocols, and session timeout controls protect practice accounts from unauthorized access.",
      icon: Lock,
    },
    {
      title: "Document Security",
      description:
        "Client files and tax computation sheets are accessed through verified authorization tokens, preventing public or unauthenticated access.",
      icon: FileLock2,
    },
    {
      title: "Secure Storage",
      description:
        "Practice documents, returns, and computation records are housed in secure cloud storage facilities with access control enforcement.",
      icon: HardDrive,
    },
    {
      title: "Auditability",
      description:
        "Comprehensive event logs track document uploads, computation updates, client record modifications, and user sign-in events.",
      icon: FileCheck,
    },
    {
      title: "Production Security",
      description:
        "Web traffic is protected in transit using standard HTTPS encryption. Platform services follow least-privilege principles and environment separation.",
      icon: Server,
    },
    {
      title: "Data Protection",
      description:
        "Practice data remains the exclusive property of the firm. Client records and compliance files are not monetized or shared with third parties.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Security at Taxoryn"
          badgeVariant="teal"
          title="Designed with Security and Controlled Access at the Core"
          description="We understand the importance of safeguarding confidential tax documents, PAN records, and financial statements. Security is foundational to our platform architecture."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {securitySections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#07152B]">{sec.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sec.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Informative Disclaimer */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 text-center flex items-center justify-center gap-2 mb-16">
          <Info className="w-4 h-4 text-slate-500 shrink-0" />
          <span>
            Security capabilities described here reflect the current Taxoryn architecture and may evolve as the platform develops.
          </span>
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
