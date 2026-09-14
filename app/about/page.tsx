import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { AboutClientContent } from "@/components/pages/AboutClientContent";

export const metadata = constructMetadata({
  title: "About Taxoryn | Empowering Indian Tax Practices",
  description:
    "Taxoryn is on a mission to simplify tax practice management for Indian Chartered Accountants, Tax Consultants, and corporate advisory firms.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutClientContent />;
}
