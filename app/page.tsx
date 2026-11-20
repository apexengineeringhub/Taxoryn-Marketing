import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SmartProcessesSection } from "@/components/sections/SmartProcessesSection";
import { ProductExperienceShowcase } from "@/components/marketing/ProductExperienceShowcase";
import { ModernPracticeSection } from "@/components/sections/ModernPracticeSection";
import { AccessTaxorynSection } from "@/components/sections/AccessTaxorynSection";
import { OriginStorySection } from "@/components/sections/OriginStorySection";
import { DemoVideoSection } from "@/components/sections/DemoVideoSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { CustomerStoriesSection } from "@/components/trust/CustomerStoriesSection";
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
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: THE PROBLEM */}
      <ProblemSection />

      {/* SECTION 3: THE TAXORYN APPROACH — FOUR SMART PROCESSES */}
      <SmartProcessesSection />

      {/* SECTION 4: PRODUCT EXPERIENCE (AUTHENTIC APPLICATION SCREENS) */}
      <ProductExperienceShowcase />

      {/* SECTION 5: DESIGNED FOR MODERN TAX PRACTICES */}
      <ModernPracticeSection />

      {/* SECTION 6: ACCESS TAXORYN (WEB & ANDROID APPLICATION) */}
      <AccessTaxorynSection />

      {/* VERIFIED ORIGIN STORY: BUILT FROM A REAL PRACTICE PROBLEM */}
      <OriginStorySection />

      {/* PRODUCT WALKTHROUGH & DEMO VIDEO */}
      <DemoVideoSection />

      {/* SECTION 7: TRUST AND SECURITY */}
      <SecuritySection />

      {/* COLLABORATIVE DEVELOPMENT JOURNEY */}
      <CustomerStoriesSection />

      {/* SECTION 8: FINAL CALL TO ACTION */}
      <FinalCTASection />
    </div>
  );
}
