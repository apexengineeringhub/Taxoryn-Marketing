import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import { Check, ArrowRight, Info, Calendar } from "lucide-react";
import { FAQSection } from "@/components/trust/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Taxoryn Pricing | Plans Designed for Practice Growth",
  description:
    "Explore Taxoryn practice tiers designed for solo practitioners, small tax firms, and growing practices. Join Taxoryn early access.",
  path: "/pricing",
});

export default function PricingPage() {
  const practiceTiers = [
    {
      name: "Solo Practitioner",
      tagline: "For independent tax consultants and Chartered Accountants",
      status: "Early Access",
      features: [
        "Consolidated client management directory",
        "GST, ITR & TDS tracking pipelines",
        "Document collection checklists",
        "Client portal self-service access",
        "Statutory compliance calendar",
      ],
      ctaText: "Join Early Access",
      ctaHref: siteConfig.links.joinEarlyAccess,
      featured: false,
    },
    {
      name: "Small Tax Firm",
      tagline: "For boutique firms needing team coordination and partner review queues",
      status: "Early Access",
      features: [
        "Structured client and entity management",
        "Role permissions for staff and article assistants",
        "Partner sign-off and computation review queues",
        "Filing acknowledgement and status tracking",
        "Taxoryn Marketplace practice profile",
      ],
      ctaText: "Join Early Access",
      ctaHref: siteConfig.links.joinEarlyAccess,
      featured: true,
    },
    {
      name: "Growing Practice",
      tagline: "For multi-branch practices and corporate tax advisory firms",
      status: "Early Access / Custom",
      features: [
        "Multi-branch practice consolidation",
        "Comprehensive firm productivity visibility",
        "Practice-wide workload coordination",
        "Multi-entity corporate compliance workflows",
        "Dedicated onboarding assistance",
      ],
      ctaText: "Book a Demo",
      ctaHref: siteConfig.links.bookDemo,
      featured: false,
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Practice Tiers"
          badgeVariant="teal"
          title="Plans Designed for Practices of Different Sizes"
          description="Pricing plans are being finalized. Explore the planned practice tiers below and join Taxoryn early access."
        />

        {/* Informative Status Banner */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-xs sm:text-sm text-slate-700 text-center flex items-center justify-center gap-2 mb-12">
          <Info className="w-4 h-4 text-[#00D1A3] shrink-0" />
          <span>
            Early Access is intended for selected practices that want to evaluate Taxoryn and provide product feedback. Availability and commercial terms will be communicated separately.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {practiceTiers.map((tier) => (
            <Card
              key={tier.name}
              variant={tier.featured ? "elevated" : "default"}
              padding="lg"
              className={`flex flex-col justify-between relative ${
                tier.featured
                  ? "border-[#00D1A3] ring-2 ring-[#00D1A3]/20 shadow-xl bg-white"
                  : "bg-white border-[#E2E8F0]"
              }`}
            >
              <div>
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="teal" size="sm">
                      Recommended for Firms
                    </Badge>
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#07152B] mb-1">
                  {tier.name}
                </h3>
                <p className="text-xs text-[#64748B] mb-4 min-h-[32px]">
                  {tier.tagline}
                </p>

                <div className="py-2.5 px-3.5 rounded-lg bg-slate-50 border border-slate-200/80 mb-6 text-xs font-semibold text-[#082E5B] flex items-center justify-between">
                  <span>Status:</span>
                  <span className="text-[#009E77]">{tier.status}</span>
                </div>

                <div className="space-y-3 pt-2 mb-8">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Core Capabilities:
                  </p>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#0F172A]">
                      <Check className="w-4 h-4 text-[#00D1A3] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                href={tier.ctaHref}
                variant={tier.featured ? "primary" : "outline"}
                size="md"
                icon={tier.ctaHref.includes("contact") ? Calendar : ArrowRight}
                className="w-full justify-center font-bold"
              >
                {tier.ctaText}
              </Button>
            </Card>
          ))}
        </div>
      </Container>

      {/* Pricing & Early Access FAQs */}
      <FAQSection
        initialCategory="pricing"
        title="Pricing & Early Access FAQs"
        description="Everything you need to know about practice tiers, early access onboarding, and firm customization."
      />

      <FinalCTASection />
    </div>
  );
}
