import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import {
  Globe,
  FolderUp,
  Lock,
  BellRing,
  Eye,
  UserCheck,
  CheckCircle2,
  Mail,
  FileCheck2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function ClientExperienceSection() {
  const clientJourneySteps = [
    { step: "01", title: "Practice Invite", desc: "Client receives a secure portal invitation from your firm." },
    { step: "02", title: "Digital Onboard", desc: "Client fulfills basic profile, PAN, and KYC details." },
    { step: "03", title: "Submit Documents", desc: "Uploads requested bank statements and invoices to checklists." },
    { step: "04", title: "Review Requests", desc: "Clarifies queries and approves computation summaries." },
    { step: "05", title: "Track Actions", desc: "Monitors upcoming GST, ITR, and TDS statutory deadlines." },
    { step: "06", title: "Stay Connected", desc: "Downloads official filing acknowledgments and challans 24/7." },
  ];

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
      title: "Status & Compliance Alerts",
      description:
        "Clients receive status updates through email and the client portal when returns are acknowledged, challans generated, or queries resolved.",
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

        {/* Visual Client Journey Step Bar */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#07152B] to-[#082E5B] text-white shadow-lg space-y-6 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/80 pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#00D1A3] uppercase">
                THE 6-STEP DIGITAL CLIENT EXPERIENCE
              </span>
              <h3 className="text-lg font-bold text-white">
                How Your Clients Experience Taxoryn
              </h3>
            </div>
            <span className="text-xs text-slate-300 font-medium bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 self-start sm:self-auto">
              Self-Service & Protected
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientJourneySteps.map((stg, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#00D1A3]">
                    {stg.step}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <h4 className="text-xs font-bold text-white leading-snug">{stg.title}</h4>
                <p className="text-[11px] text-slate-400 leading-tight">{stg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
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
