import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

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
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
