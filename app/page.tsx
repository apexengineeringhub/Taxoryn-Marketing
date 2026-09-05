import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { MarketplaceSection } from "@/components/sections/MarketplaceSection";
import { ClientExperienceSection } from "@/components/sections/ClientExperienceSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { SolutionsSegmentSection } from "@/components/sections/SolutionsSegmentSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust / Positioning Strip */}
      <TrustStrip />

      {/* 3. Problem Section */}
      <ProblemSection />

      {/* 4. Taxoryn Solution Story: Organize, Control, Serve, Grow */}
      <SolutionSection />

      {/* 5. Product Capabilities (16 Core Capabilities) */}
      <CapabilitiesSection />

      {/* 6. Product Screenshot / Showcase Section */}
      <ShowcaseSection />

      {/* 7. Marketplace Section */}
      <MarketplaceSection />

      {/* 8. Client Experience Section */}
      <ClientExperienceSection />

      {/* 9. Security Section */}
      <SecuritySection />

      {/* 10. Solutions by Practice Scale */}
      <SolutionsSegmentSection />

      {/* 11. Final Conversion CTA */}
      <FinalCTASection />
    </div>
  );
}
