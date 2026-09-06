import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Tax Practice Software for Small CA & Tax Firms (2-10 Members) | Taxoryn",
  description:
    "End-to-end tax practice management software built for small CA & tax firms with 2-10 staff members. Master GST, ITR, TDS workflows and partner sign-offs.",
  path: "/solutions/small-tax-firm",
});

export default function SmallFirmRedirect() {
  redirect("/solutions/small-tax-firm");
}

