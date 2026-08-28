import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  stories,
  getStoryBySlug,
  displayTitle,
  displayHeading,
  getAdjacentPublishedStories,
} from "@/data/stories";
import { siteConfig } from "@/data/siteConfig";
import { formatDateDots, padEpisode } from "@/lib/format";
import JsonLd from "@/components/JsonLd";

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

  const heading = displayHeading(story);
  const description =
    story.excerptApproved && story.excerpt
      ? story.excerpt
      : `${heading}。${siteConfig.siteTitle}。`;
  const path = `/stories/${story.slug}`;

  return {
    title: heading,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: heading,
      description,
      url: path,
      publishedTime: story.publishedAt ?? undefined,
      siteName: siteConfig.siteTitle,
      locale: "ja_JP",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: heading,
      description,
      images: ["/opengraph-image"],
    },
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

  const title = displayTitle(story);
  const heading = displayHeading(story);
  const path = `/stories/${story.slug}`;
  const isReadable = story.publicationStatus === "published";
  const { prev, next } = getAdjacentPublishedStories(story.episode);

  const articleJsonLd =
    isReadable && story.publishedAt
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: heading,
          description:
            story.excerptApproved && story.excerpt
              ? story.excerpt
              : heading,
          datePublished: story.publishedAt,
          dateModified: story.publishedAt,
          inLanguage: "ja-JP",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteConfig.siteUrl}${path}`,
          },
          isPartOf: {
            "@type": "CreativeWorkSeries",
            name: siteConfig.siteTitle,
            url: siteConfig.siteUrl,
          },
        }
      : null;

  const breadcrumbJsonLd = isReadable
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "STORIES",
            item: `${siteConfig.siteUrl}/stories`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: heading,
            item: `${siteConfig.siteUrl}${path}`,
          },
        ],
      }
    : null;

  return (
    <div className="mx-auto max-w-xl px-6 py-20 sm:px-8 sm:py-28">
      {articleJsonLd && <JsonLd data={articleJsonLd} />}
      {breadcrumbJsonLd && <JsonLd data={breadcrumbJsonLd} />}

      <Link
        href="/stories"
        className="focus-line text-[12px] tracking-wide text-ink-soft hover:text-ink"
      >
        ← STORIES
      </Link>

      <p className="mt-10 text-[12px] tracking-[0.2em] text-ink-soft">
        EPISODE {padEpisode(story.episode)} / {stories.length}
      </p>

      <h1 className="mt-4 text-3xl leading-snug sm:text-4xl">{title}</h1>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] tracking-wide text-ink-soft">
        {story.publicationStatus === "scheduled" && story.publishedAt ? (
          <span>予告 {formatDateDots(story.publishedAt)}</span>
        ) : story.publicationStatus === "published" && story.publishedAt ? (
          <span>{formatDateDots(story.publishedAt)}</span>
        ) : story.publicationStatus === "unverified" ? (
          <span>確認中</span>
        ) : (
          <span>近日公開</span>
        )}
        {story.isPaid && <span>PAID</span>}
      </div>

      {!isReadable ? (
        <p className="mt-14 text-[15px] leading-loose text-ink-soft">
          まだここにはない話。
          <br />
          公開まで、もう少し。
        </p>
      ) : (
        <>
          {story.excerptApproved && story.excerpt && (
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
                noteのリンクは準備中です。
              </p>
            )}
          </div>

          {(prev || next) && (
            <div className="mt-16 flex flex-col gap-3 border-t border-line pt-10 text-[13px] tracking-wide text-ink-soft">
              {prev && (
                <Link
                  href={`/stories/${prev.slug}`}
                  className="focus-line hover:text-ink"
                >
                  ← {displayHeading(prev)}
                </Link>
              )}
              {next && (
                <Link
                  href={`/stories/${next.slug}`}
                  className="focus-line hover:text-ink"
                >
                  {displayHeading(next)} →
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
