import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { FeaturesClientContent } from "@/components/pages/FeaturesClientContent";

export const metadata = constructMetadata({
  title: "Tax Practice Software Features | GST, ITR, TDS & Client Portal",
  description:
    "Comprehensive feature breakdown of Taxoryn practice management modules for Indian tax compliance, team delegation, document vaults, and client portals.",
  path: "/features",
});

export default function FeaturesPage() {
  return <FeaturesClientContent />;
}
