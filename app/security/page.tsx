import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { SecurityClientContent } from "@/components/pages/SecurityClientContent";

export const metadata = constructMetadata({
  title: "Security Architecture & Data Protection | Taxoryn",
  description:
    "Explore Taxoryn's security architecture: tenant-aware access controls, role-based permissions, secure storage, and practice audit logging.",
  path: "/security",
});

export default function SecurityPage() {
  return <SecurityClientContent />;
}
