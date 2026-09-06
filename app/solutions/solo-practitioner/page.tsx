import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { SolutionSoloClientContent } from "@/components/pages/SolutionSoloClientContent";

export const metadata = constructMetadata({
  title: "Tax Practice Software for Solo Practitioners & Independent CAs | Taxoryn",
  description:
    "A clean, single-pane command center for individual tax consultants and Chartered Accountants to manage clients, GST, ITR, and TDS filings.",
  path: "/solutions/solo-practitioner",
});

export default function SoloPractitionerPage() {
  return <SolutionSoloClientContent />;
}
