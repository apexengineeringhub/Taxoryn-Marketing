import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export const metadata = constructMetadata({
  title: "Privacy Policy | Taxoryn",
  description: "Taxoryn's commitment to practice data privacy, security, confidentiality, and privacy-conscious measurement.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyContent />;
}
