import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Taxoryn Features | GST, ITR, TDS, Tasks & Client Portal",
  description:
    "Comprehensive feature breakdown of Taxoryn practice management modules for Indian tax compliance and client workflows.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          badge="Features Architecture"
          badgeVariant="teal"
          title="Engineered For Every Step of Tax Practice Operations"
          description="From initial client onboarding and KYC collection to multi-return statutory filings and portal delivery."
        />
      </Container>
      <CapabilitiesSection />
      <FinalCTASection />
    </div>
  );
}
