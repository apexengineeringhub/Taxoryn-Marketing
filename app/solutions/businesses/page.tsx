import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { SolutionBusinessClientContent } from "@/components/pages/SolutionBusinessClientContent";

export const metadata = constructMetadata({
  title: "Tax Solutions for Businesses | Taxoryn",
  description:
    "Taxoryn helps businesses collaborate with their tax professionals, access approved filing records, submit compliance documents securely, and explore tax practices on the Marketplace.",
  path: "/solutions/businesses",
});

export default function BusinessesPage() {
  return <SolutionBusinessClientContent />;
}
