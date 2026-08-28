import type { Metadata } from "next";
import {
  getVisibleStories,
  getTotalEpisodes,
  displayHeading,
} from "@/data/stories";
import { siteConfig } from "@/data/siteConfig";
import { buildPageMetadata } from "@/lib/seo";
import StoryRow from "@/components/StoryRow";
import JsonLd from "@/components/JsonLd";

const totalEpisodes = getTotalEpisodes();

export const metadata: Metadata = buildPageMetadata({
  path: "/stories",
  title: "全話一覧",
  description: `${siteConfig.seriesPart} ${siteConfig.seriesStatus}。全${totalEpisodes}話の目次。`,
});

export default function StoriesPage() {
  const list = getVisibleStories();
  const published = list.filter((s) => s.publicationStatus === "published");

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `全話一覧｜${siteConfig.siteTitle}`,
    url: `${siteConfig.siteUrl}/stories`,
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: siteConfig.siteTitle,
      url: siteConfig.siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: published.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteConfig.siteUrl}/stories/${s.slug}`,
        name: displayHeading(s),
      })),
    },
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:px-8 sm:py-28">
      <JsonLd data={collectionJsonLd} />
      <p className="text-[12px] tracking-[0.2em] text-ink-soft">STORIES</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">
        {siteConfig.seriesPart} {siteConfig.seriesStatus}
      </h1>
      <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">
        全{totalEpisodes}話。本文はnoteで公開しています。
      </p>

      <div className="mt-14 border-t border-line">
        {list.map((story) => (
          <StoryRow key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
