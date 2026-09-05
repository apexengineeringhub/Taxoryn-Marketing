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
} from "lucide-react";

export function SecuritySection() {
  const securityPillars = [
    {
      icon: DatabaseZap,
      title: "Strict Multi-Tenant Isolation",
      description:
        "Every tax practice operates within an isolated data boundary. Practice records, client files, and computation logs are strictly partitioned.",
    },
    {
      icon: KeyRound,
      title: "Role-Based Access Controls (RBAC)",
      description:
        "Define granular access policies for Partners, Managers, and Article Assistants. Restrict client visibility based on active assignments.",
    },
    {
      icon: FileLock2,
      title: "Encrypted Document Storage",
      description:
        "Sensitive client financial statements, ITR computations, and PAN/GST credentials are encrypted both in transit and at rest.",
    },
    {
      icon: History,
      title: "Tamper-Evident Audit Logging",
      description:
        "Comprehensive audit trails record all document views, computation revisions, return downloads, and user login activity.",
    },
    {
      icon: UserCheck2,
      title: "Secure Session Management",
      description:
        "Robust session expiration, cryptographic token validation, and multi-factor authentication protect practice accounts from unauthorized access.",
    },
    {
      icon: ShieldCheck,
      title: "Controlled Client Data Sharing",
      description:
        "Clients can only view authorized acknowledgments and computation sheets explicitly shared through the verified client portal.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#07152B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Enterprise-Grade Security"
          badgeVariant="teal"
          theme="dark"
          title="Built with security in mind."
          description="Your practice handles confidential client finances and tax credentials. Taxoryn is architected from day one to keep practice data strictly isolated and protected."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        <div className="text-center">
          <Button
            href={siteConfig.links.security}
            variant="teal-outline"
            size="lg"
            icon={ArrowRight}
          >
            Explore Taxoryn Security Architecture
          </Button>
        </div>
      </Container>
    </section>
  );
}
