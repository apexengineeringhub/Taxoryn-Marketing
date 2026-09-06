import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { LearnClientContent } from "@/components/pages/LearnClientContent";

export const metadata = constructMetadata({
  title: "Taxoryn Learn | Tax Guides, Videos & Practice Updates",
  description:
    "Learn, stay informed, and grow your practice with curated Indian tax guides, product walkthroughs, statutory compliance checklists, and tax practice SOPs.",
  path: "/learn",
});

export default function LearnPage() {
  return <LearnClientContent />;
}
