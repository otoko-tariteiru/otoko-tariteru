import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { getLatestStory, stories } from "@/data/stories";
import { featuredStory, quotes } from "@/data/quotes";
import { formatMonthDay, formatTime, padEpisode } from "@/lib/format";
import Reveal from "@/components/Reveal";

export default function Home() {
  const latest = getLatestStory();
  const firstEpisode = stories.find((s) => s.episode === 1)!;
  const progressPercent = Math.round(
    (siteConfig.currentEpisode / siteConfig.totalEpisodes) * 100
  );

  return (
    <>
      {/* HERO */}
      <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <p className="text-[9vw] font-bold leading-[1.3] tracking-wide sm:text-6xl lg:text-7xl">
            男には
            <br className="sm:hidden" />
            困っていない。
          </p>
        </Reveal>
      </section>

      {/* SUB COPY on scroll */}
      <section className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <p className="text-[8vw] font-bold leading-[1.3] tracking-wide sm:text-5xl lg:text-6xl">
            20歳の男には
            <br className="sm:hidden" />
            困っている。
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="mx-auto max-w-md text-[15px] leading-loose text-ink-soft">
            <p>36歳、バイ。</p>
            <p className="mt-4">
              7年暮らす男がいる。
              <br />
              それでも20歳からのLINEを待っている。
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-col items-center gap-4 text-[14px] tracking-wide">
          <Link
            href={`/stories/${firstEpisode.slug}`}
            className="focus-line border-b border-ink pb-1 hover:opacity-60"
          >
            第1話から読む →
          </Link>
          <Link
            href={`/stories/${latest.slug}`}
            className="focus-line text-ink-soft hover:text-ink"
          >
            最新話を読む
          </Link>
        </Reveal>
      </section>

      {/* FEATURED STORY */}
      <section className="border-t border-line px-6 py-28 sm:py-36">
        <Reveal className="mx-auto max-w-xl">
          <p className="mb-8 text-center text-[12px] tracking-[0.2em] text-ink-soft">
            FEATURED STORY
          </p>
          {featuredStory.href ? (
            <Link
              href={featuredStory.href}
              className="focus-line block text-center text-[6.5vw] leading-[1.9] sm:text-2xl"
            >
              {featuredStory.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </Link>
          ) : (
            <p className="text-center text-[6.5vw] leading-[1.9] sm:text-2xl">
              {featuredStory.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          )}
        </Reveal>
      </section>

      {/* SERIAL STATUS */}
      <section className="border-t border-line px-6 py-24 sm:py-32">
        <Reveal className="mx-auto max-w-xl">
          <p className="text-[12px] tracking-[0.2em] text-ink-soft">SERIAL</p>
          <p className="mt-3 text-2xl sm:text-3xl">
            {siteConfig.seriesPart} {siteConfig.seriesStatus}
          </p>

          <div className="mt-10">
            <div className="flex items-baseline justify-between text-[12px] tracking-wide text-ink-soft">
              <span>
                EPISODE {padEpisode(siteConfig.currentEpisode)} /{" "}
                {padEpisode(siteConfig.totalEpisodes)}
              </span>
              <span>{progressPercent}%</span>
            </div>
            <div className="mt-3 h-px w-full bg-line">
              <div
                className="h-px bg-ink"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <p className="text-[12px] tracking-[0.2em] text-ink-soft">
              NEXT EPISODE
            </p>
            <p className="mt-4 text-xl sm:text-2xl">
              {formatMonthDay(siteConfig.nextEpisodeDate)}{" "}
              {formatTime(siteConfig.nextEpisodeDate)}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed">
              第{siteConfig.nextEpisodeNumber}話「{siteConfig.nextEpisodeTitle}
              」
            </p>
          </div>

          <div className="mt-14">
            <Link
              href="/stories"
              className="focus-line text-[13px] tracking-wide text-ink-soft hover:text-ink"
            >
              全話一覧を見る →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* QUOTE INTERLUDE */}
      <section className="border-t border-line px-6 py-24 sm:py-32">
        <Reveal className="mx-auto max-w-md text-center text-[15px] leading-loose text-ink-soft">
          {quotes[1].lines.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </Reveal>
      </section>

      {/* CHARACTERS TEASER */}
      <section className="border-t border-line px-6 py-24 sm:py-32">
        <Reveal className="mx-auto max-w-xl">
          <p className="text-[12px] tracking-[0.2em] text-ink-soft">
            CHARACTERS
          </p>
          <p className="mt-4 text-[15px] leading-loose text-ink-soft">
            名前は出てこない。
            <br />
            役割だけが、そこにいる。
          </p>
          <div className="mt-8">
            <Link
              href="/characters"
              className="focus-line border-b border-ink pb-1 text-[14px] hover:opacity-60"
            >
              人物紹介を見る →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* QUOTE INTERLUDE 2 */}
      <section className="border-t border-line px-6 py-24 sm:py-32">
        <Reveal className="mx-auto max-w-md text-center text-[15px] leading-loose text-ink-soft">
          {quotes[3].lines.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </Reveal>
      </section>
    </>
  );
}
