import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/lib/config/site";
import {
  BookOpen,
  Video,
  BellRing,
  ArrowRight,
  FileSpreadsheet,
  FileCheck2,
  Receipt,
  Play,
  Calendar,
} from "lucide-react";

export function TaxorynLearnSection() {
  const categories = [
    {
      id: "tax-guides",
      title: "Tax Guides & SOPs",
      badge: "Knowledge Hub",
      icon: BookOpen,
      iconColor: "text-sky-600 bg-sky-50 border-sky-100",
      description:
        "Actionable checklists and operational standard procedures for GST, ITR, TDS, and practice compliance management.",
      highlights: [
        "Monthly GST & 2B reconciliation guides",
        "New vs Old ITR regime comparison",
        "TDS return timelines & TRACES corrections",
        "Tax notice preparation checklists",
      ],
      linkText: "Browse Tax Guides",
      href: "/learn#guides",
    },
    {
      id: "videos",
      title: "Videos & Walkthroughs",
      badge: "YouTube Content",
      icon: Video,
      iconColor: "text-rose-600 bg-rose-50 border-rose-100",
      description:
        "Visual product walkthroughs, practice management masterclasses, and tax technology tutorials from the Taxoryn channel.",
      highlights: [
        "End-to-end platform workflows",
        "Client portal onboarding tutorials",
        "Filing pipeline configuration demos",
        "Expert practice management talks",
      ],
      linkText: "Watch Taxoryn Videos",
      href: "/videos",
    },
    {
      id: "tax-updates",
      title: "Tax Updates & Deadlines",
      badge: "Compliance Timelines",
      icon: BellRing,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
      description:
        "Important statutory due date notifications, circular summaries, and rate changes across direct and indirect taxes.",
      highlights: [
        "Monthly statutory due-date calendar",
        "CBDT & CBIC notification summaries",
        "Threshold and rate revisions",
        "Filing extension alerts",
      ],
      linkText: "View Tax Updates",
      href: "/learn#updates",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <Container>
        <SectionHeading
          badge="Taxoryn Learn"
          badgeVariant="teal"
          title="Learn. Stay Updated. Work Smarter."
          description="Curated educational resources, video walkthroughs, and statutory tax updates to help Indian tax practitioners operate at peak efficiency."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card
                key={cat.id}
                variant="interactive"
                padding="lg"
                className="bg-slate-50/60 border-slate-200/90 hover:bg-white hover:border-[#00D1A3] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${cat.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="navy" size="sm">
                      {cat.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#07152B] mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 space-y-2 border-t border-slate-200/80">
                    {cat.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#0F172A]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D1A3]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#082E5B] hover:text-[#00D1A3] transition-colors pt-2"
                >
                  <span>{cat.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            href="/learn"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            className="font-bold shadow-md shadow-[#00D1A3]/20"
          >
            Explore Taxoryn Learn
          </Button>
        </div>
      </Container>
    </section>
  );
}
