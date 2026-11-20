import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  CheckCircle2,
  ArrowRight,
  FolderSync,
  ShieldCheck,
  Users,
  Network,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Taxoryn Works — The Modern Tax Practice Operating Model",
  description:
    "Learn how Taxoryn helps CA firms and tax professionals organize clients, automate compliance tracking, collaborate on documents, and grow their practice.",
  alternates: {
    canonical: "https://taxoryn.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Organize Client Records",
      subtitle: "Unify scattered contacts and tax credentials",
      icon: FolderSync,
      description:
        "Import your existing client roster from spreadsheets, Tally, or direct entry. Taxoryn builds a single Client 360 profile with PAN, state-wise GSTINs, corporate identifiers, and key stakeholders.",
      points: [
        "Structured client directory with verified PAN and GST records",
        "Assigned relationship partners and handling staff",
        "Permanent document repository for registration certificates and deeds",
      ],
    },
    {
      num: "02",
      title: "Track Statutory Compliance",
      subtitle: "Never let a filing deadline slip by unnoticed",
      icon: ShieldCheck,
      description:
        "Taxoryn automatically maps filing requirements based on client registrations. Your team works from pre-configured worklists for monthly GST, quarterly TDS, advance tax, and annual returns.",
      points: [
        "Automated compliance calendar reflecting entity-specific due dates",
        "Task worklists with clear statuses: Data Gathering, Drafting, Review, Filed",
        "Clear visibility into approaching statutory deadlines across all clients",
      ],
    },
    {
      num: "03",
      title: "Serve Clients Seamlessly",
      subtitle: "Frictionless document collection and communication",
      icon: Users,
      description:
        "Request missing statements and invoices with one-click collection links. Clients can upload files securely without creating complicated accounts or hunting through email threads.",
      points: [
        "Direct document request links with instant status tracking",
        "Centralized audit trail of received and verified client files",
        "Optional client portal for real-time filing acknowledgment access",
      ],
    },
    {
      num: "04",
      title: "Operate with Intelligence",
      subtitle: "Manage staff capacity and optimize firm turnaround times",
      icon: TrendingUp,
      description:
        "Partners and managers gain real-time visibility into workload distribution, open task counts, and turnaround times. Rebalance work across team members before peak filing periods arrive.",
      points: [
        "Firm-wide operational dashboards showing live task progress",
        "Team workload balancing preventing last-minute filing bottlenecks",
        "Audit logs capturing all client record edits and task completions",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-[#F8FAFC] border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center">
              <Badge variant="teal" size="md">
                PRACTICE WORKFLOW
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07152B] tracking-tight leading-tight">
              A Simpler, Smarter Way to Run Your Practice
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From client onboarding to compliance filing and document archiving—see how Taxoryn replaces fragmented tools with one calm, connected workspace.
            </p>
          </div>
        </Container>
      </section>

      {/* Steps Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90"
                >
                  <div className="md:col-span-3 space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold text-lg">
                      {step.num}
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block pt-1">
                      Step {step.num}
                    </span>
                  </div>

                  <div className="md:col-span-9 space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#07152B]">
                      {step.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#009E77]">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2 border-t border-slate-200/90 space-y-2">
                      {step.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#009E77] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#F8FAFC]">
        <Container>
          <div className="p-8 sm:p-10 rounded-2xl bg-[#07152B] text-white text-center space-y-5 max-w-3xl mx-auto shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Modernize Your Tax Practice?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Get started with Taxoryn today. Request early access or sign in to your practice workspace.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={siteConfig.links.joinEarlyAccess}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="font-bold"
              >
                Request Early Access
              </Button>
              <Button
                href={siteConfig.links.login}
                variant="secondary-dark"
                size="lg"
                className="font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border-slate-700 hover:border-slate-600 opacity-100 shadow-xs focus-visible:ring-offset-[#07152B]"
              >
                Sign In to Web App
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
