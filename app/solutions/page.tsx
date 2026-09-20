import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
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
    <div className="w-full bg-[#F8FAFC]">
      <SolutionsSegmentSection />
      <FinalCTASection />
    </div>
  );
}
