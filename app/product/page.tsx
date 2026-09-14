import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { ProductClientContent } from "@/components/pages/ProductClientContent";

export const metadata = constructMetadata({
  title: "Tax Practice Management Platform | Product Architecture",
  description:
    "Explore how Taxoryn helps Indian Chartered Accountants and tax consultancies manage clients, team review queues, GST, ITR, TDS, and client portals in one connected workspace.",
  path: "/product",
});

export default function ProductPage() {
  return <ProductClientContent />;
}
