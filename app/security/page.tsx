import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { FAQSection } from "@/components/trust/FAQSection";
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
  CheckCircle2,
  AlertCircle,
  EyeOff,
  UserCheck,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Security Architecture & Data Protection | Taxoryn",
  description:
    "Explore Taxoryn's security architecture: tenant-aware access controls, role-based permissions, secure storage, and practice audit logging.",
  path: "/security",
});

export default function SecurityPage() {
  const securityPillars = [
    {
      title: "Tenant-Level Data Partitioning",
      description:
        "Every tax practice operates within isolated logical data boundaries. Database queries, storage keys, and caching layers are scoped strictly by practice identifier to prevent cross-tenant access.",
      icon: Database,
    },
    {
      title: "Granular Role-Based Access (RBAC)",
      description:
        "Define custom permissions for Partners, Senior Managers, Article Assistants, and External Reviewers. Team members only view client files and computation records explicitly assigned to them.",
      icon: Key,
    },
    {
      title: "Encrypted Data Transmission",
      description:
        "All data transferred between your browser, client portal, and Taxoryn servers is encrypted using modern TLS (HTTPS) protocols, safeguarding confidential communications.",
      icon: Lock,
    },
    {
      title: "Authenticated Document Access",
      description:
        "Document access can be controlled through authenticated and time-limited access mechanisms rather than public URLs.",
      icon: FileLock2,
    },
    {
      title: "Controlled Cloud Storage Infrastructure",
      description:
        "Taxoryn is designed around private document storage, authenticated access and controlled document permissions.",
      icon: HardDrive,
    },
    {
      title: "Auditable Activity Logging",
      description:
        "Auditable activity logs track document uploads, computation updates, partner review sign-offs, and user session activity across the practice.",
      icon: FileCheck,
    },
    {
      title: "Practice Data Ownership & Privacy",
      description:
        "Your practice retains ownership of the data you provide to Taxoryn, subject to the applicable terms and agreements. Client financial records, PAN details, and compliance workpapers are never sold, analyzed for ads, or shared with third parties.",
      icon: ShieldCheck,
    },
    {
      title: "Controlled Client Portal Access",
      description:
        "Clients access their private portal through authenticated sessions, restricted strictly to their own entity's filed returns, pending checklist requests, and tax computation summaries.",
      icon: UserCheck,
    },
  ];

  const operationalBoundaries = [
    {
      title: "What Taxoryn Secures & Manages",
      icon: CheckCircle2,
      color: "text-[#00D1A3]",
      points: [
        "Internal team workflow coordination and task delegation",
        "Role-scoped document collection checklists and file storage",
        "Computation draft review queues and partner sign-off logs",
        "Self-service client portal access for acknowledgments and summaries",
        "Practice-wide compliance calendar and statutory milestone tracking",
      ],
    },
    {
      title: "Practitioner Statutory Oversight",
      icon: AlertCircle,
      color: "text-[#082E5B]",
      points: [
        "Official return filing is executed by the authorized tax practitioner",
        "Statutory digital signatures (DSC) and portal credentials remain in practitioner control",
        "Final computation verification and statutory liability advisory is provided by the CA/Tax Consultant",
        "Practitioners retain full authority over team member permissions and client access grants",
        "Data backup exports remain available to practice administrators at all times",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Security & Trust"
          badgeVariant="teal"
          title="Designed with Security and Controlled Access at the Core"
          description="We understand the utmost importance of safeguarding confidential tax documents, PAN records, and financial statements. Security and privacy are foundational to our platform architecture."
        />

        {/* Security Pillars Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {securityPillars.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-[#00D1A3]/60 transition-colors"
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

        {/* Clear Security & Operational Boundaries */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="navy" size="md">
                TRANSPARENCY & BOUNDARIES
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152B]">
                Clear Operational & Statutory Boundaries
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Taxoryn acts as your practice operating system while preserving full statutory control in the hands of the practitioner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {operationalBoundaries.map((boundary, i) => {
                const Icon = boundary.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${boundary.color}`} />
                      <h3 className="font-bold text-[#07152B] text-base">
                        {boundary.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {boundary.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                        >
                          <span className="text-[#00D1A3] font-bold mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Informative Disclaimer */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 text-center flex items-center justify-center gap-2 mb-16">
          <Info className="w-4 h-4 text-slate-500 shrink-0" />
          <span>
            Security capabilities described here reflect the current Taxoryn platform architecture. We continuously review and reinforce our technical controls.
          </span>
        </div>
      </Container>

      {/* Security FAQs */}
      <FAQSection
        initialCategory="security"
        title="Security & Privacy FAQs"
        description="Detailed answers to questions regarding data storage, confidentiality, team permissions, and client portal security."
        showCategories={false}
      />

      <FinalCTASection />
    </div>
  );
}
