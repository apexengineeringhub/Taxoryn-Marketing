import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Complete list of public indexable marketing routes
  const routes = [
    "",
    "/product",
    "/features",
    "/solutions",
    "/solutions/solo-practitioner",
    "/solutions/small-firm",
    "/solutions/growing-practice",
    "/marketplace",
    "/pricing",
    "/security",
    "/resources",
    "/about",
    "/early-access",
    "/book-demo",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/solutions") ? 0.8 : 0.7,
  }));
}
