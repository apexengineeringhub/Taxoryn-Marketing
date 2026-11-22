import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SmartProcessesSection } from "@/components/sections/SmartProcessesSection";
import { ProductExperienceShowcase } from "@/components/marketing/ProductExperienceShowcase";
import { ModernPracticeSection } from "@/components/sections/ModernPracticeSection";
import { AccessTaxorynSection } from "@/components/sections/AccessTaxorynSection";
import { OriginStorySection } from "@/components/sections/OriginStorySection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { CustomerStoriesSection } from "@/components/trust/CustomerStoriesSection";
import { DemoVideoSection } from "@/components/sections/DemoVideoSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Taxoryn — A Smarter Way to Manage Your Tax Practice",
  description:
    "One connected workspace to organize client relationships, work, documents and practice operations. Built for Indian Chartered Accountants, tax practitioners, and growing firms.",
  alternates: {
    canonical: "https://taxoryn.com",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ACT 1: HERO & PROMISE */}
      <HeroSection />

      {/* ACT 2: PRACTICE REALITY & FRICTION */}
      <ProblemSection />

      {/* ACT 3: FOUR SMART PROCESSES (CONNECTED OPERATING MODEL) */}
      <SmartProcessesSection />

      {/* ACT 4: PRODUCT EXPERIENCE (AUTHENTIC APPLICATION SCREENS) */}
      <ProductExperienceShowcase />

      {/* ACT 5: PRACTICE ARCHITECTURE & SEGMENTS */}
      <ModernPracticeSection />

      {/* ACT 6: DUAL ACCESS (WEB & ANDROID APPLICATION) */}
      <AccessTaxorynSection />

      {/* ACT 7: TRUST, SECURITY & ORIGIN */}
      <OriginStorySection />
      <SecuritySection />
      <CustomerStoriesSection />

      {/* ACT 8: VIDEO TOUR & FINAL CONVERSION CTA */}
      <DemoVideoSection />
      <FinalCTASection />
    </div>
  );
}
