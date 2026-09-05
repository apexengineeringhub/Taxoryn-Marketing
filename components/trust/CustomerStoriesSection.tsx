import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { siteConfig } from "@/lib/config/site";
import { Users, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

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
  // Strict W5 Trust Principle: Zero fake social proof.
  // If no verified case studies are provided, display an honest early-access invitation.
  if (stories.length === 0) {
    return (
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#07152B] to-[#082E5B] text-white shadow-xl relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D1A3]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 text-center max-w-2xl mx-auto">
              <Badge variant="teal" size="md">
                EARLY ACCESS COHORT
              </Badge>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Be Part of the First Cohort of Taxoryn Practices
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We believe in genuine transparency. Rather than displaying placeholder reviews or unverified quotes, we invite forward-thinking Chartered Accountants and tax consultants to shape the platform with us during early access.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={siteConfig.links.joinEarlyAccess}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00D1A3] text-[#07152B] font-bold text-sm hover:bg-[#00B388] transition-colors shadow-lg shadow-[#00D1A3]/20"
                >
                  <span>Apply for Early Access</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={siteConfig.links.bookDemo}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors border border-white/20"
                >
                  <span>Schedule Practice Walkthrough</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
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
