import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { stories } from "@/data/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const staticRoutes = [
    "",
    "/stories",
    "/characters",
    "/night",
    "/about",
    "/media",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const storyRoutes = stories
    .filter((s) => s.status !== "draft")
    .map((s) => ({
      url: `${base}/stories/${s.slug}`,
      lastModified: new Date(s.publishedAt),
    }));

  return [...staticRoutes, ...storyRoutes];
}
