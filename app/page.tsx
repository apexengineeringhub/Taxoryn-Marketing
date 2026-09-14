import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OriginStorySection } from "@/components/sections/OriginStorySection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { CoreProductSection } from "@/components/sections/CoreProductSection";
import { DemoVideoSection } from "@/components/sections/DemoVideoSection";
import { MarketplaceSection } from "@/components/sections/MarketplaceSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { SolutionsSegmentSection } from "@/components/sections/SolutionsSegmentSection";
import { CustomerStoriesSection } from "@/components/trust/CustomerStoriesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. PROBLEMS TAX PRACTICES FACE */}
      <ProblemSection />

      {/* 3. ORIGIN STORY: BUILT FROM A REAL PRACTICE PROBLEM */}
      <OriginStorySection />

      {/* 4. TAXORYN FRAMEWORK: ORGANIZE -> COMPLY -> SERVE -> CONNECT -> GROW */}
      <EcosystemSection />

      {/* 4. CORE PRODUCT MODULES */}
      <CoreProductSection />

      {/* 5. PRODUCT WALKTHROUGH & DEMO */}
      <DemoVideoSection />

      {/* 6. TAXORYN MARKETPLACE & PROFESSIONAL NETWORK */}
      <MarketplaceSection />

      {/* 7. SECURITY & PRACTITIONER CONTROL */}
      <SecuritySection />

      {/* 8. PRACTICE SOLUTIONS */}
      <SolutionsSegmentSection />

      {/* 9. DEVELOPMENT JOURNEY / INVITATION */}
      <CustomerStoriesSection />

      {/* 10. FINAL CALL TO ACTION */}
      <FinalCTASection />
    </div>
  );
}
