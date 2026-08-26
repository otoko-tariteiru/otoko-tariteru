import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <p className="text-2xl leading-relaxed sm:text-3xl lg:text-4xl">
          それでも男は足りている。
        </p>
        <p className="mt-4 text-sm text-ink-soft">毎日更新。</p>

        <div className="mt-6 flex gap-5 text-[13px] tracking-wide text-ink-soft">
          <a
            href={siteConfig.xUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-line hover:text-ink"
          >
            X
          </a>
          <a
            href={siteConfig.noteUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-line hover:text-ink"
          >
            note
          </a>
        </div>

        <nav
          aria-label="フッターナビゲーション"
          className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-[12px] tracking-wide text-ink-soft"
        >
          <Link href="/stories" className="focus-line hover:text-ink">
            STORIES
          </Link>
          <Link href="/characters" className="focus-line hover:text-ink">
            CHARACTERS
          </Link>
          <Link href="/night" className="focus-line hover:text-ink">
            NIGHT STORIES
          </Link>
          <Link href="/about" className="focus-line hover:text-ink">
            ABOUT
          </Link>
          <Link href="/media" className="focus-line hover:text-ink">
            FOR MEDIA
          </Link>
        </nav>

        <p className="mt-12 text-[12px] text-ink-soft/70">
          &copy; {siteConfig.siteTitle}
        </p>
      </div>
    </footer>
  );
}
