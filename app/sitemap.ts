import type { MetadataRoute } from "next";
import { listings } from "@/lib/listings";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/listings", "/buyers", "/sellers", "/testimonials", "/contact"].map((path) => ({
    url: `${siteConfig.website}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const listingPages = listings.map((listing) => ({
    url: `${siteConfig.website}/listings/${listing.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  return [...staticPages, ...listingPages];
}
