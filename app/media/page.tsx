import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { buildPageMetadata } from "@/lib/seo";
import { isMediaIndexable } from "@/lib/indexability";

export function generateMetadata(): Metadata {
  const base = buildPageMetadata({
    path: "/media",
    title: "FOR MEDIA",
    description: "出版・映像化・取材・その他、作品に関するお問い合わせ。",
  });
  // 実際の問い合わせ先が確定するまでは「準備中」の空ページとしてインデックスさせない
  return isMediaIndexable()
    ? base
    : { ...base, robots: { index: false, follow: true } };
}

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-lg px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-[12px] tracking-[0.2em] text-ink-soft">FOR MEDIA</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">
        出版・映像化・取材のお問い合わせ
      </h1>

      <p className="mt-10 text-[15px] leading-loose text-ink-soft">
        出版・映像化・取材、その他
        <br />
        作品に関するお問い合わせはこちらまで。
      </p>

      <div className="mt-12 border-t border-line pt-10">
        {siteConfig.mediaEmail ? (
          <a
            href={`mailto:${siteConfig.mediaEmail}`}
            className="focus-line border-b border-ink pb-1 text-lg hover:opacity-60"
          >
            {siteConfig.mediaEmail}
          </a>
        ) : (
          <p className="text-[15px] leading-loose text-ink-soft">
            お問い合わせ窓口は準備中です。
          </p>
        )}
      </div>
    </div>
  );
}
