import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductPreview } from "@/components/marketing/ProductPreview";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Tax Practice Management Platform",
  description:
    "Explore the Taxoryn product suite: clients, teams, compliance, GST, ITR, TDS, document requests, and client portal in one unified workspace.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          badge="Product Overview"
          badgeVariant="navy"
          title="The Complete Tax Practice Management Operating System"
          description="Designed ground-up for Indian Chartered Accountants, Tax Consultants, and Corporate Tax Teams."
        />
        <div className="mb-16">
          <ProductPreview />
        </div>
      </Container>
      <CapabilitiesSection />
      <FinalCTASection />
    </div>
  );
}
