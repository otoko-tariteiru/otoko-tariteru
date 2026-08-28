// /night と /media のindex可否をここで一元判定する。
// generateMetadata()のnoindex判定とsitemap.tsの掲載判定は、必ずこの2関数だけを参照する。
// 判定基準を増やす/変える場合はここだけを直せば、metadataとsitemapが常に同期する。

import { nightStories } from "@/data/nightStories";
import { siteConfig } from "@/data/siteConfig";

export function isNightIndexable(): boolean {
  return nightStories.some((n) => n.status === "published");
}

export function isMediaIndexable(): boolean {
  return siteConfig.mediaEmail !== null;
}
