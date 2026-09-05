import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SolutionsSegmentSection } from "@/components/sections/SolutionsSegmentSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = constructMetadata({
  title: "Tax Practice Solutions | Solo, Small Firm & Growing Practice",
  description:
    "Tailored tax practice management workflows designed for solo practitioners, boutique firms, and growing multi-partner practices.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          badge="Practice Scale Solutions"
          badgeVariant="navy"
          title="Solutions Tailored To Your Firm's Growth Stage"
          description="Whether you are an independent CA or a 30-person tax practice, Taxoryn fits your operational model."
        />
      </Container>
      <SolutionsSegmentSection />
      <FinalCTASection />
    </div>
  );
}
