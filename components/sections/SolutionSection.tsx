import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import {
  FolderTree,
  SlidersHorizontal,
  HeartHandshake,
  TrendingUp,
  Check,
  ArrowRight,
} from "lucide-react";

export function SolutionSection() {
  const pillars = [
    {
      pillar: "ORGANIZE",
      tagline: "Structure & Visibility",
      title: "Clients, teams, locations and practice information.",
      description:
        "Centralize client profiles, multiple branch locations, employee roles, and contact directories into a unified relational database.",
      icon: FolderTree,
      badgeColor: "navy" as const,
      highlights: [
        "Master client records & GSTIN/PAN directory",
        "Role-based staff & article assistant permissions",
        "Multi-branch and multi-location practice hierarchy",
      ],
    },
    {
      pillar: "CONTROL",
      tagline: "Filing & Deadlines",
      title: "GST, ITR, TDS, compliance, tasks and reporting.",
      description:
        "Stay ahead of statutory deadlines with dedicated tax engines, automated task boards, and partner-level compliance oversight.",
      icon: SlidersHorizontal,
      badgeColor: "teal" as const,
      highlights: [
        "Automated compliance calendar & due-date tracking",
        "GST, ITR & TDS preparation-to-filing pipelines",
        "Practice-wide productivity & workload reports",
      ],
    },
    {
      pillar: "SERVE",
      tagline: "Client Delight",
      title: "Documents, document requests, client portal and notifications.",
      description:
        "Deliver a modern, digital experience to clients with self-service access to tax acknowledgments, secure uploads, and automated reminders.",
      icon: HeartHandshake,
      badgeColor: "cyan" as const,
      highlights: [
        "Dedicated client portal with protected access",
        "Structured document collection requests via email and client portal",
        "Filing acknowledgement tracking & status updates",
      ],
    },
    {
      pillar: "GROW",
      tagline: "Expansion Engine",
      title: "Marketplace, enquiries, onboarding and practice growth.",
      description:
        "Attract new business clients seeking professional tax expertise in your geography, and onboard them smoothly into your practice workflow.",
      icon: TrendingUp,
      badgeColor: "emerald" as const,
      highlights: [
        "Taxoryn Marketplace practice matching",
        "Structured client intake & KYC onboarding",
        "Seamless transition from lead to retained client",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#07152B] text-white relative overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="The Taxoryn Architecture"
          badgeVariant="teal"
          theme="dark"
          title="Everything your practice needs. Connected in one workspace."
          description="Designed to systematically organize your practice, control your compliance obligations, serve your clients with excellence, and grow your firm."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.pillar}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#00D1A3]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#00D1A3]">
                      {item.pillar}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {item.tagline}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00D1A3]/10 border border-[#00D1A3]/30 flex items-center justify-center text-[#00FFC2]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-[#00D1A3]/20 flex items-center justify-center text-[#00D1A3] shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
