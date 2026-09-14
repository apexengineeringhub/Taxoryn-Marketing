import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { PricingClientContent } from "@/components/pages/PricingClientContent";

export const metadata = constructMetadata({
  title: "Taxoryn Pricing | Plans Designed for Practice Growth",
  description:
    "Explore Taxoryn practice tiers designed for solo practitioners, small tax firms, and growing practices.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingClientContent />;
}
