import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import {
  Globe,
  FolderUp,
  Lock,
  BellRing,
  Eye,
  UserCheck,
  CheckCircle,
} from "lucide-react";

export function ClientExperienceSection() {
  const features = [
    {
      icon: Globe,
      title: "Self-Service Client Portal",
      description:
        "Give your corporate and individual clients a dedicated login to view their tax profile, filed returns, and acknowledgments 24/7.",
    },
    {
      icon: FolderUp,
      title: "Structured Document Requests",
      description:
        "Request bank statements, purchase registers, or Form 16s with custom checklists that clients can fulfill in seconds.",
    },
    {
      icon: Lock,
      title: "Secure Document Access",
      description:
        "Protected document storage with tenant-aware authorization ensures sensitive financial records and computations are never transmitted through insecure channels.",
    },
    {
      icon: BellRing,
      title: "Automated Status Alerts",
      description:
        "Clients receive automated WhatsApp & Email notifications when returns are filed, challans generated, or queries resolved.",
    },
    {
      icon: Eye,
      title: "Full Compliance Visibility",
      description:
        "Clients can see exactly which statutory filings are upcoming, in progress, or completed, building total confidence in your firm.",
    },
    {
      icon: UserCheck,
      title: "Frictionless Onboarding",
      description:
        "Collect client KYC, prior year returns, and entity credentials through a guided digital onboarding workflow.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="Client Relationship Experience"
          badgeVariant="cyan"
          title="Give your clients a better way to work with your practice."
          description="Upgrade client interactions from chaotic email chains to a modern, branded client portal that builds lasting professional trust."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <Card
                key={idx}
                variant="interactive"
                padding="lg"
                className="bg-white border-slate-200 hover:border-[#0EA5E9] transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-100 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#07152B] mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {feat.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
