import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { ContactForm } from "@/components/marketing/ContactForm";

export const metadata = constructMetadata({
  title: "Contact Taxoryn | Tax Practice Management",
  description:
    "Contact Taxoryn to learn about practice management, Early Access, product demonstrations and tax practice workflows.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
