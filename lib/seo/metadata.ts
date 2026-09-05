import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = "/brand/logo.svg",
  noIndex = false,
}: GenerateMetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  const canonicalUrl = `${siteConfig.url}${path ? (path.startsWith("/") ? path : `/${path}`) : ""}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: [
        { url: "/brand/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/brand/favicon.svg",
      apple: "/brand/logo-symbol.svg",
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.motto}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    headline: siteConfig.tagline,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description: siteConfig.description,
    url: siteConfig.url,
  };
}
