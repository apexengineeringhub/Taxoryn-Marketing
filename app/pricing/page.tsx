import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { Check, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Taxoryn Pricing | Transparent Practice Management Plans",
  description:
    "Simple, predictable pricing built for solo practitioners, small tax firms, and growing practices.",
  path: "/pricing",
});

export default function PricingPage() {
  const plans = [
    {
      name: "Starter / Solo",
      tagline: "For individual tax practitioners & independent CAs",
      priceDescription: "Free tier available to get started",
      features: [
        "Up to 50 active clients",
        "GST, ITR & TDS tracking pipelines",
        "Document repository & upload links",
        "Standard client portal access",
        "Email & community support",
      ],
      ctaText: "Start Free",
      ctaHref: siteConfig.links.startFree,
      featured: false,
    },
    {
      name: "Practice Pro",
      tagline: "For growing firms needing team coordination & review queues",
      priceDescription: "Designed for 3–15 team members",
      features: [
        "Unlimited client profiles",
        "Role-based staff & article assistant access",
        "Partner sign-off & computation review queues",
        "Automated WhatsApp & Email notifications",
        "Taxoryn Marketplace verified practice listing",
        "Priority technical support",
      ],
      ctaText: "Start Pro Trial",
      ctaHref: siteConfig.links.startFree,
      featured: true,
    },
    {
      name: "Enterprise Firm",
      tagline: "For multi-branch practices & large tax consultancies",
      priceDescription: "Custom practice scoping",
      features: [
        "Multi-branch practice consolidation",
        "Dedicated account manager & SLA",
        "Custom data migration from legacy software",
        "Advanced team productivity analytics",
        "Custom integrations & compliance hooks",
      ],
      ctaText: "Contact Practice Advisory",
      ctaHref: siteConfig.links.contact,
      featured: false,
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Simple & Transparent"
          badgeVariant="teal"
          title="Predictable Plans for Practices of Every Size"
          description="Start for free with no credit card required. Upgrade as your client roster and practice team expand."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.featured ? "elevated" : "default"}
              padding="lg"
              className={`flex flex-col justify-between relative ${
                plan.featured
                  ? "border-[#00D1A3] ring-2 ring-[#00D1A3]/20 shadow-xl bg-white"
                  : "bg-white border-[#E2E8F0]"
              }`}
            >
              <div>
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="teal" size="sm">
                      Recommended for Firms
                    </Badge>
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#07152B] mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#64748B] mb-4 min-h-[32px]">
                  {plan.tagline}
                </p>

                <div className="py-3 px-4 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-sm font-semibold text-[#082E5B]">
                  {plan.priceDescription}
                </div>

                <div className="space-y-3 pt-2 mb-8">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Included Features:
                  </p>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#0F172A]">
                      <Check className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                href={plan.ctaHref}
                variant={plan.featured ? "primary" : "outline"}
                size="md"
                icon={ArrowRight}
                className="w-full justify-center font-bold"
                external={plan.ctaHref.startsWith("http")}
              >
                {plan.ctaText}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
      <FinalCTASection />
    </div>
  );
}
