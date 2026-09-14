import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { MarketplaceClientContent } from "@/components/pages/MarketplaceClientContent";

export const metadata = constructMetadata({
  title: "Taxoryn Marketplace | Practice Discovery & Matching",
  description:
    "Taxoryn Marketplace is designed to help businesses and individuals discover relevant Indian tax professionals and practices.",
  path: "/marketplace",
});

export default function MarketplacePage() {
  return <MarketplaceClientContent />;
}
