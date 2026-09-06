import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { EarlyAccessForm } from "@/components/marketing/EarlyAccessForm";

export const metadata = constructMetadata({
  title: "Get Started | Taxoryn Tax Practice Software",
  description:
    "Get started with Taxoryn to experience a connected workspace for clients, compliance, documents, and tax practice operations.",
  path: "/early-access",
});

export default function EarlyAccessPage() {
  return <EarlyAccessForm />;
}
