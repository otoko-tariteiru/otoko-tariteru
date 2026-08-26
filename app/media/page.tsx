import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "FOR MEDIA",
  description: "出版・映像化・取材・その他、作品に関するお問い合わせ。",
};

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
        <a
          href={`mailto:${siteConfig.mediaEmail}`}
          className="focus-line border-b border-ink pb-1 text-lg hover:opacity-60"
        >
          {siteConfig.mediaEmail}
        </a>
      </div>
    </div>
  );
}
