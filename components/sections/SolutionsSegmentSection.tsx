import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import {
  User,
  Users2,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";

export function SolutionsSegmentSection() {
  const segments = [
    {
      title: "Solo Practitioner",
      badge: "Individual CA & Tax Advisor",
      description:
        "For independent tax consultants who want a focused, single-pane command center without complex IT overhead.",
      benefits: [
        "Consolidated GST, ITR & TDS tracking",
        "Structured document collection checklists",
        "Self-service client portal access",
        "Fully managed cloud-native workspace",
      ],
      ctaText: "Solo Practitioner Solution",
      ctaHref: "/solutions/solo-practitioner",
      icon: User,
    },
    {
      title: "Small Tax Firm",
      badge: "Practice Teams",
      description:
        "For boutique firms needing structured task delegation, partner review gates, and team workload coordination.",
      benefits: [
        "Role permissions for staff & article assistants",
        "Workload coordination across client assignments",
        "Partner sign-off & computation review queues",
        "Practice-wide statutory deadline calendar",
      ],
      ctaText: "Small Firm Solution",
      ctaHref: "/solutions/small-firm",
      icon: Users2,
      featured: true,
    },
    {
      title: "Growing Tax Practice",
      badge: "Multi-Branch / Corporate Advisory",
      description:
        "For expanding advisory practices managing multi-entity corporate clients, multiple offices, and firm expansion.",
      benefits: [
        "Multi-location practice management",
        "Taxoryn Marketplace practice discovery",
        "Consolidated firm productivity reporting",
        "Multi-entity corporate compliance workflows",
      ],
      ctaText: "Growing Practice Solution",
      ctaHref: "/solutions/growing-practice",
      icon: Building2,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Practice Solutions"
          badgeVariant="navy"
          title="Built for the way tax practices grow."
          description="Whether you are an independent practitioner or running a growing multi-partner tax advisory, Taxoryn scales with your operational complexity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <Card
                key={seg.title}
                variant={seg.featured ? "elevated" : "default"}
                padding="lg"
                className={`flex flex-col justify-between relative ${
                  seg.featured
                    ? "border-[#00D1A3] ring-2 ring-[#00D1A3]/20 shadow-lg bg-white"
                    : "bg-white border-[#E2E8F0]"
                }`}
              >
                <div>
                  {seg.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge variant="teal" size="sm">
                        Team Focused
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#07152B]">
                        {seg.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#009E77]">
                        {seg.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {seg.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Key Practice Capabilities:
                    </p>
                    {seg.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#0F172A]">
                        <Check className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  href={seg.ctaHref}
                  variant={seg.featured ? "primary" : "outline"}
                  size="md"
                  icon={ArrowRight}
                  className="w-full justify-center"
                >
                  {seg.ctaText}
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
