import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata = constructMetadata({
  title: "Terms of Service | Taxoryn",
  description: "Terms and conditions governing the use of Taxoryn software and marketing services.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsContent />;
}
