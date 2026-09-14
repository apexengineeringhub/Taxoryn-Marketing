import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { ResourcesClientContent } from "@/components/resources/ResourcesClientContent";

export const metadata = constructMetadata({
  title: "Tax Practice Resources, GST & ITR Compliance Guides | Taxoryn",
  description:
    "Free actionable tax compliance checklists, GST reconciliation guides, TDS calendars, and practice management SOPs for Indian CAs and tax consultants.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <ResourcesClientContent />;
}
