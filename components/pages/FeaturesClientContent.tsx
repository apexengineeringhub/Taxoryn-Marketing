"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { CapabilityCard } from "@/components/marketing/CapabilityCard";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  Users,
  FileSpreadsheet,
  CheckSquare,
  Laptop,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

export function FeaturesClientContent() {
  const { t } = useLanguage();
  const f = t.pages.features;

  const groupIcons: Record<string, React.ElementType> = {
    "practice-management": Users,
    "compliance-engines": FileSpreadsheet,
    "tasks-and-reviews": CheckSquare,
    "client-portal-vault": Laptop,
    "marketplace-growth": ShoppingBag,
  };

  const groupBadgeColors: Record<string, "navy" | "teal" | "cyan" | "emerald"> = {
    "practice-management": "navy",
    "compliance-engines": "teal",
    "tasks-and-reviews": "cyan",
    "client-portal-vault": "emerald",
    "marketplace-growth": "teal",
  };

  const capabilityIconMap: Record<string, string> = {
    "client-mgmt": "Users",
    "team-mgmt": "UserCheck",
    "gst-mgmt": "FileSpreadsheet",
    "itr-mgmt": "FileCheck2",
    "tds-mgmt": "Receipt",
    "task-mgmt": "CheckSquare",
    "compliance-calendar": "ShieldCheck",
    "doc-mgmt": "FolderLock",
    "doc-requests": "Send",
    "notifications": "Bell",
    "client-portal": "Globe",
    "billing": "CreditCard",
    "reports": "BarChart3",
    "marketplace-profile": "ShoppingBag",
    "onboarding": "UserPlus",
    "learn": "BookOpen",
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F8FAFC]">
      <Container>
        {/* Features Header */}
        <SectionHeading
          badge={f.badge}
          badgeVariant="teal"
          title={f.title}
          description={f.description}
        />

        {/* 5 Core Feature Pillar Cards */}
        <div className="space-y-6 mb-14 sm:mb-16">
          {f.groups.map((group) => {
            const Icon = groupIcons[group.id] || Users;
            const badgeColor = groupBadgeColors[group.id] || "teal";
            return (
              <div
                key={group.id}
                id={group.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-[#00D1A3] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#082E5B]/5 border border-[#082E5B]/10 flex items-center justify-center text-[#082E5B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                        {group.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#07152B]">
                        {group.title}
                      </h3>
                    </div>
                  </div>
                  <Badge variant={badgeColor} size="sm" className="self-start sm:self-auto">
                    {group.badge}
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {group.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {group.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1A3] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete 16 Core Capabilities Matrix */}
        <section className="py-12 sm:py-16 bg-[#F8FAFC]">
          <SectionHeading
            badge={f.capabilitiesBadge}
            badgeVariant="navy"
            title={f.capabilitiesTitle}
            description={f.capabilitiesDesc}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {f.capabilitiesList.map((cap) => (
              <CapabilityCard
                key={cap.id}
                capability={{
                  id: cap.id,
                  title: cap.title,
                  shortDescription: cap.shortDescription,
                  category: cap.category as any,
                  iconName: capabilityIconMap[cap.id] || "Layers",
                  badge: cap.badge,
                }}
              />
            ))}
          </div>
        </section>
      </Container>

      {/* Conversion CTA */}
      <FinalCTASection />
    </div>
  );
}
