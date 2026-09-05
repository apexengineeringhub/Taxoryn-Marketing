import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { BookDemoForm } from "@/components/marketing/BookDemoForm";

export const metadata = constructMetadata({
  title: "Book a Practice Demo | Taxoryn Tax Practice Software",
  description:
    "Schedule a 20-minute personalized product walkthrough of Taxoryn with our practice solutions team.",
  path: "/book-demo",
});

export default function BookDemoPage() {
  return <BookDemoForm />;
}
