import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { RESOURCE_ARTICLES } from "@/lib/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Complete list of public static marketing routes
  const staticRoutes = [
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

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/solutions") ? 0.8 : 0.7,
  }));

  // Dynamic public content articles
  const articleEntries: MetadataRoute.Sitemap = RESOURCE_ARTICLES.map(
    (article) => ({
      url: `${baseUrl}/resources/${article.slug}`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [...staticEntries, ...articleEntries];
}
