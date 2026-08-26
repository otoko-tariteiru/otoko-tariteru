import type { Metadata } from "next";
import { getVisibleStories } from "@/data/stories";
import { siteConfig } from "@/data/siteConfig";
import StoryRow from "@/components/StoryRow";

export const metadata: Metadata = {
  title: "STORIES",
  description: `${siteConfig.seriesPart} ${siteConfig.seriesStatus}。全${siteConfig.totalEpisodes}話の目次。`,
};

export default function StoriesPage() {
  const list = getVisibleStories();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-[12px] tracking-[0.2em] text-ink-soft">STORIES</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">
        {siteConfig.seriesPart} {siteConfig.seriesStatus}
      </h1>
      <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">
        全{siteConfig.totalEpisodes}話。本文はnoteで公開しています。
      </p>

      <div className="mt-14 border-t border-line">
        {list.map((story) => (
          <StoryRow key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
