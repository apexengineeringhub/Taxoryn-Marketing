import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { OurStoryClientContent } from "@/components/pages/OurStoryClientContent";

export const metadata = constructMetadata({
  title: "Our Story | Taxoryn",
  description:
    "How observing the daily reality of a tax practice led to the creation of Taxoryn.",
  path: "/our-story",
});

export default function OurStoryPage() {
  return <OurStoryClientContent />;
}
