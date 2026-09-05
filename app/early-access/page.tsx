import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { EarlyAccessForm } from "@/components/marketing/EarlyAccessForm";

export const metadata = constructMetadata({
  title: "Join Early Access | Taxoryn Tax Practice Software",
  description:
    "Join Taxoryn Early Access to experience a connected workspace for clients, compliance, documents, and tax practice operations.",
  path: "/early-access",
});

export default function EarlyAccessPage() {
  return <EarlyAccessForm />;
}
