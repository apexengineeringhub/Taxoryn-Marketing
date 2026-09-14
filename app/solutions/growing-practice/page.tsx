import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { SolutionGrowingClientContent } from "@/components/pages/SolutionGrowingClientContent";

export const metadata = constructMetadata({
  title: "Tax Practice Software for Growing Practices | Taxoryn",
  description:
    "Multi-location practice management, consolidated firm reporting, and client discovery on Taxoryn Marketplace.",
  path: "/solutions/growing-practice",
});

export default function GrowingPracticePage() {
  return <SolutionGrowingClientContent />;
}
