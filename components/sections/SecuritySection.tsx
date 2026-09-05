import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  ShieldCheck,
  KeyRound,
  FileLock2,
  History,
  UserCheck2,
  DatabaseZap,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export function SecuritySection() {
  const securityPillars = [
    {
      icon: DatabaseZap,
      title: "Tenant-Aware Data Isolation",
      description:
        "Every tax practice operates within dedicated logical data boundaries. Client records and practice files are strictly partitioned by practice account.",
    },
    {
      icon: KeyRound,
      title: "Role-Based Access Control (RBAC)",
      description:
        "Define granular access policies for Partners, Managers, and Staff to ensure team members only access their assigned client records.",
    },
    {
      icon: FileLock2,
      title: "Secure Document Storage",
      description:
        "Client files and tax computation sheets are stored in secure cloud infrastructure with strict access verification.",
    },
    {
      icon: History,
      title: "Audit Logging",
      description:
        "Audit trails record document views, computation revisions, return approvals, and user session activity across the practice.",
    },
    {
      icon: UserCheck2,
      title: "Authentication & Session Controls",
      description:
        "Secure session tokens, password policies, and credential protection help safeguard practice accounts against unauthorized access.",
    },
    {
      icon: ShieldCheck,
      title: "Controlled Client Access",
      description:
        "Clients can only access specific tax returns, acknowledgments, and upload requests explicitly shared through the verified client portal.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#07152B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Security Architecture"
          badgeVariant="teal"
          theme="dark"
          title="Built with security in mind."
          description="Your practice handles confidential client finances and tax credentials. Taxoryn is architected with security and controlled access at the core."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#00D1A3]/40 transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00D1A3]/10 border border-[#00D1A3]/30 flex items-center justify-center text-[#00FFC2]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Informative Disclaimer */}
        <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Security capabilities described here reflect the current Taxoryn architecture and may evolve as the platform develops.
        </p>

        <div className="text-center">
          <Button
            href={siteConfig.links.security}
            variant="teal-outline"
            size="lg"
            icon={ArrowRight}
          >
            Explore Taxoryn Security
          </Button>
        </div>
      </Container>
    </section>
  );
}
