import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import {
  FileSpreadsheet,
  AlertTriangle,
  FolderSync,
  Users2,
  MessageSquareWarning,
  TrendingDown,
} from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Client info spread across spreadsheets",
      description:
        "Client GSTINs, PANs, portal credentials, and contact records scattered in multiple Excel files with no single source of truth.",
    },
    {
      icon: AlertTriangle,
      title: "Compliance work difficult to track",
      description:
        "Tracking monthly GST, quarterly TDS, and annual ITR deadlines across multiple clients leads to last-minute rushes and missed filings.",
    },
    {
      icon: FolderSync,
      title: "Documents scattered in folders & chats",
      description:
        "Bank statements, invoices, and KYC documents get buried in email threads, WhatsApp chats, and local hard drives.",
    },
    {
      icon: Users2,
      title: "Team tasks difficult to coordinate",
      description:
        "Hard to know which article assistant or team member is working on which client return without constant manual follow-ups.",
    },
    {
      icon: MessageSquareWarning,
      title: "Client communication fragmented",
      description:
        "Clients constantly message asking for status updates, acknowledgments, or tax computation sheets through informal channels.",
    },
    {
      icon: TrendingDown,
      title: "Practice growth disconnected from operations",
      description:
        "Acquiring new clients and onboarding them is manual, slowing down firm expansion and increasing administrative overhead.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="The Practice Bottleneck"
          badgeVariant="navy"
          title="Your practice shouldn't run across spreadsheets, WhatsApp and scattered files."
          description="Tax professionals spend valuable time managing administrative work instead of focusing on clients and advisory."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <Card
                key={idx}
                variant="default"
                padding="lg"
                className="bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-[#082E5B]/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#07152B] mb-2">
                  {prob.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {prob.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
