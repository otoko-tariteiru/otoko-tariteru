import Link from "next/link";
import type { Story } from "@/data/stories";
import { formatDateDots, padEpisode } from "@/lib/format";

export default function StoryRow({ story }: { story: Story }) {
  const num = padEpisode(story.episode);

  if (story.status === "draft") {
    return (
      <div className="flex items-baseline gap-6 border-b border-line py-8 text-ink-soft/60">
        <span className="w-10 shrink-0 text-2xl tabular-nums sm:text-3xl">
          {num}
        </span>
        <div>
          <p className="text-[15px] sm:text-base">{story.title}</p>
          <p className="mt-2 text-[12px] tracking-wide">近日公開</p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/stories/${story.slug}`}
      className="focus-line flex items-baseline gap-6 border-b border-line py-8 transition-colors hover:bg-mist"
    >
      <span className="w-10 shrink-0 text-2xl tabular-nums sm:text-3xl">
        {num}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="text-lg sm:text-xl">{story.title}</p>
          <p className="shrink-0 text-[12px] tracking-wide text-ink-soft">
            {story.status === "scheduled"
              ? `予告 ${formatDateDots(story.publishedAt)}`
              : formatDateDots(story.publishedAt)}
          </p>
        </div>
        {story.excerpt && (
          <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
            「{story.excerpt}」
          </p>
        )}
        <p className="mt-3 text-[12px] tracking-wide text-ink-soft">
          READ →
        </p>
      </div>
    </Link>
  );
}
