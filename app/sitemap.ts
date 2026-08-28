import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { stories } from "@/data/stories";
import { isNightIndexable, isMediaIndexable } from "@/lib/indexability";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  // noindexのページ(/night, /media)はsitemapにも載せない。
  // 判定はlib/indexability.tsを共有しているため、metadataのnoindexと常に一致する。
  const staticPaths = ["", "/stories", "/characters", "/about"];
  if (isNightIndexable()) staticPaths.push("/night");
  if (isMediaIndexable()) staticPaths.push("/media");

  const staticRoutes = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const storyRoutes = stories
    .filter((s) => s.publicationStatus === "published")
    .map((s) => ({
      url: `${base}/stories/${s.slug}`,
      lastModified: s.publishedAt ? new Date(s.publishedAt) : new Date(),
    }));

  return [...staticRoutes, ...storyRoutes];
}
