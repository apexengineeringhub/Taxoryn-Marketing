import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { SolutionSmallFirmClientContent } from "@/components/pages/SolutionSmallFirmClientContent";

export const metadata = constructMetadata({
  title: "Tax Practice Software for Small Tax Firms | Taxoryn",
  description:
    "Task delegation, partner review gates, and workload coordination for boutique Indian tax consultancies and CA firms.",
  path: "/solutions/small-tax-firm",
});

export default function SmallTaxFirmPage() {
  return <SolutionSmallFirmClientContent />;
}
