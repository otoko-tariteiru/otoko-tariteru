import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { stories, getStoryBySlug } from "@/data/stories";
import { formatDateDots, padEpisode } from "@/lib/format";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};

  return {
    title: `第${story.episode}話「${story.title}」`,
    description: story.excerpt || `第${story.episode}話「${story.title}」`,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const isDraft = story.status === "draft";

  return (
    <div className="mx-auto max-w-xl px-6 py-20 sm:px-8 sm:py-28">
      <Link
        href="/stories"
        className="focus-line text-[12px] tracking-wide text-ink-soft hover:text-ink"
      >
        ← STORIES
      </Link>

      <p className="mt-10 text-[12px] tracking-[0.2em] text-ink-soft">
        EPISODE {padEpisode(story.episode)} / {stories.length}
      </p>

      <h1 className="mt-4 text-3xl leading-snug sm:text-4xl">
        {story.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] tracking-wide text-ink-soft">
        {story.status === "scheduled" ? (
          <span>予告 {formatDateDots(story.publishedAt)}</span>
        ) : story.status === "published" ? (
          <span>{formatDateDots(story.publishedAt)}</span>
        ) : (
          <span>近日公開</span>
        )}
        {!isDraft && <span>{story.theme}</span>}
        {story.isPaid && <span>PAID</span>}
      </div>

      {isDraft ? (
        <p className="mt-14 text-[15px] leading-loose text-ink-soft">
          まだここにはない話。
          <br />
          公開まで、もう少し。
        </p>
      ) : (
        <>
          {story.excerpt && (
            <p className="mt-14 text-[17px] leading-loose">
              「{story.excerpt}」
            </p>
          )}

          <div className="mt-16 border-t border-line pt-10">
            {story.noteUrl ? (
              <a
                href={story.noteUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-line border-b border-ink pb-1 text-[14px] hover:opacity-60"
              >
                noteで続きを読む →
              </a>
            ) : (
              <p className="text-[13px] tracking-wide text-ink-soft">
                {story.status === "scheduled"
                  ? "公開時にnoteのリンクが追加されます。"
                  : "noteのリンクは準備中です。"}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
