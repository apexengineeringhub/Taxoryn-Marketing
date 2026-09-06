"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import {
  User,
  Users,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function SolutionsSegmentSection() {
  const { t } = useLanguage();
  const s = t.solutionsSegment;

  const segments = [
    {
      title: s.solo.title,
      badge: s.solo.badge,
      description: s.solo.description,
      benefits: s.solo.benefits,
      ctaText: s.solo.ctaText,
      ctaHref: "/solutions/solo-practitioner",
      icon: User,
    },
    {
      title: s.smallFirm.title,
      badge: s.smallFirm.badge,
      description: s.smallFirm.description,
      benefits: s.smallFirm.benefits,
      ctaText: s.smallFirm.ctaText,
      ctaHref: "/solutions/small-tax-firm",
      icon: Users,
      featured: true,
      featuredBadge: s.smallFirm.teamBadge,
    },
    {
      title: s.growing.title,
      badge: s.growing.badge,
      description: s.growing.description,
      benefits: s.growing.benefits,
      ctaText: s.growing.ctaText,
      ctaHref: "/solutions/growing-practice",
      icon: Building2,
    },
    {
      title: s.business.title,
      badge: s.business.badge,
      description: s.business.description,
      benefits: s.business.benefits,
      ctaText: s.business.ctaText,
      ctaHref: "/solutions/businesses",
      icon: Building2,
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge={s.badge}
          badgeVariant="navy"
          title={s.title}
          description={s.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        {seg.featuredBadge || "Team Focused"}
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
                      {s.keyCapabilities}
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
