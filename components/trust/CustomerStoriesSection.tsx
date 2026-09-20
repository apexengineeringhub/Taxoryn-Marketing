"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { MarketingCTA } from "@/components/common/MarketingCTA";
import { siteConfig } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

export interface VerifiedCustomerStory {
  id: string;
  practitionerName: string;
  practiceName: string;
  location: string;
  role: string;
  quote: string;
  practiceType: "Solo Practitioner" | "CA Firm" | "Tax Consultant";
}

interface CustomerStoriesSectionProps {
  stories?: VerifiedCustomerStory[];
}

export function CustomerStoriesSection({ stories = [] }: CustomerStoriesSectionProps) {
  const { t } = useLanguage();

  // Strict W5 Trust Principle: Zero fake social proof.
  // When no verified case studies exist, display honest early-stage invitation to help shape the product.
  if (stories.length === 0) {
    return (
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-slate-200/80">
        <Container className="relative">
          <MarketingCTA
            variant="compact"
            eyebrow={t.helpShape.badge}
            title={t.helpShape.title}
            description={
              <>
                <p>{t.helpShape.paragraph1}</p>
                <p>{t.helpShape.paragraph2}</p>
                <p className="pt-0.5 font-semibold text-[#00D1A3]">{t.helpShape.paragraph3}</p>
              </>
            }
          >
            <Button
              href={siteConfig.links.contact}
              variant="primary"
              size="md"
              icon={ArrowRight}
              className="w-full sm:w-auto px-6 sm:px-7 min-h-[46px] font-bold shadow-md shadow-[#00D1A3]/20"
            >
              {t.helpShape.shareFeedback}
            </Button>
          </MarketingCTA>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-12 bg-white border-t border-slate-200/80">
      <Container>
        <SectionHeading
          badge="Practitioner Stories"
          badgeVariant="teal"
          title="Practitioner Experiences from Indian Tax Firms"
          description="Read how tax consultants and Chartered Accountants streamline compliance and client service with Taxoryn."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stories.map((story) => (
            <Card
              key={story.id}
              variant="default"
              padding="lg"
              className="bg-[#F8FAFC] border-slate-200 flex flex-col justify-between space-y-4"
            >
              <p className="text-sm text-slate-700 italic leading-relaxed">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#07152B]">
                    {story.practitionerName}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {story.role}, {story.practiceName}
                  </p>
                </div>
                <Badge variant="navy" size="sm">
                  {story.practiceType}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
