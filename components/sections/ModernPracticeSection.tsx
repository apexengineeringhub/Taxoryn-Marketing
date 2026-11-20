"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  User,
  Users,
  Building,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function ModernPracticeSection() {
  const segments = [
    {
      id: "solo",
      title: "Independent Practitioners",
      subtitle: "Solo CAs, Tax Advocates & Consultants",
      icon: User,
      badge: "Solo & Small Office",
      description:
        "Run an organized practice without spending your evenings sorting paper files, answering repetitive WhatsApp messages, or manually tracking due dates.",
      benefits: [
        "Single dashboard for all client PANs, GSTINs, and filings",
        "Statutory compliance reminders so no due date is overlooked",
        "Direct client document request links without email back-and-forth",
        "Clean, professional client experience that builds trust",
      ],
      ctaText: "Explore for Independent Practice",
      ctaHref: siteConfig.links.joinEarlyAccess,
    },
    {
      id: "small-firm",
      title: "Small CA Firms",
      subtitle: "Firms with 2 to 10 Team Members",
      icon: Users,
      badge: "Partners & Articles",
      description:
        "Coordinate partner reviews, article assistants, and client assignments in one place. Keep everyone aligned on deadlines without daily manual status calls.",
      benefits: [
        "Assign tasks to articles and associates with clear due dates",
        "Partner review workflows before returns or tax audits are filed",
        "Shared client document repository with role-based permissions",
        "Audit trail of team actions and document modifications",
      ],
      ctaText: "Explore for CA Firms",
      ctaHref: siteConfig.links.joinEarlyAccess,
    },
    {
      id: "growing",
      title: "Growing Tax Practices",
      subtitle: "Multi-Partner & Multi-Branch Practices",
      icon: Building,
      badge: "Scaling Practices",
      description:
        "Scale your practice operations across multiple service verticals—GST, Corporate Tax, TDS, and Audit—with unified visibility and operational discipline.",
      benefits: [
        "Firm-wide visibility into workload and pending return bottlenecks",
        "Multi-stakeholder client directories with designated relationship managers",
        "Client portal management for standardized client self-service",
        "Centralized practice governance and secure tenant isolation",
      ],
      ctaText: "Explore for Growing Firms",
      ctaHref: siteConfig.links.joinEarlyAccess,
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80" id="solutions">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <Badge variant="navy" size="md">
            PRACTICE ARCHITECTURE
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#07152B] tracking-tight">
            Designed for the Way Indian Tax Practices Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are managing a solo advisory desk or co-managing a growing multi-partner CA firm, Taxoryn adapts to your practice workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#082E5B] text-[#00D1A3] flex items-center justify-center font-bold shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500">
                      {seg.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#07152B]">{seg.title}</h3>
                    <p className="text-xs font-semibold text-[#009E77] mt-0.5">{seg.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {seg.description}
                  </p>

                  <div className="pt-2 border-t border-slate-200/90 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Practice Capabilities
                    </div>
                    {seg.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#009E77] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <Button
                    href={seg.ctaHref}
                    variant="outline"
                    size="sm"
                    icon={ArrowRight}
                    className="w-full justify-center text-xs font-bold border-slate-300 hover:border-[#082E5B]"
                  >
                    {seg.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
