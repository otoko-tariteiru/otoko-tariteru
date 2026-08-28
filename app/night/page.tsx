import type { Metadata } from "next";
import { nightStories } from "@/data/nightStories";
import { siteConfig } from "@/data/siteConfig";
import { buildPageMetadata } from "@/lib/seo";
import { isNightIndexable } from "@/lib/indexability";

export function generateMetadata(): Metadata {
  const base = buildPageMetadata({
    path: "/night",
    title: "夜の話",
    description: "無料の本編では閉じたドアの内側。夜の話は有料の番外編です。",
  });
  // 公開作品が1つもない間は、near-empty pageとしてインデックスさせない
  return isNightIndexable()
    ? base
    : { ...base, robots: { index: false, follow: true } };
}

export default function NightPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-[12px] tracking-[0.2em] text-ink-soft">
        NIGHT STORIES
      </p>
      <h1 className="mt-4 text-3xl sm:text-4xl">夜の話</h1>
      <p className="mt-6 text-[15px] leading-loose text-ink-soft">
        無料の本編では、閉じたドアの内側。
        <br />
        近日公開の番外編です。
      </p>

      <p className="mt-8 border border-line bg-mist px-5 py-4 text-[13px] leading-relaxed text-ink-soft">
        性的描写を含みます。18歳未満の方は閲覧できません。
      </p>

      <div className="mt-14 border-t border-line">
        {nightStories.map((n) => (
          <div
            key={n.id}
            className="flex items-baseline gap-6 border-b border-line py-8"
          >
            <span className="w-10 shrink-0 text-2xl tabular-nums sm:text-3xl">
              {String(n.number).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-lg sm:text-xl">{n.title}</p>
                <p className="shrink-0 text-[12px] tracking-wide text-ink-soft">
                  夜の話{n.status === "published" ? ` · ${n.priceLabel}` : ""}
                </p>
              </div>
              <p className="mt-3 text-[12px] tracking-wide text-ink-soft">
                {n.status === "published" && n.noteUrl ? (
                  <a
                    href={n.noteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-line border-b border-ink pb-px hover:opacity-60"
                  >
                    noteで読む →
                  </a>
                ) : (
                  "近日公開"
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-16 text-[12px] tracking-wide text-ink-soft">
        公開・販売は<span className="mx-1">note</span>(
        <a
          href={siteConfig.noteUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-line hover:text-ink"
        >
          {siteConfig.noteUrl.replace("https://", "")}
        </a>
        )で行います。決済はnote上で完結します。
      </p>
    </div>
  );
}
