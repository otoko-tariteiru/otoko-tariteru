"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { href: "/stories", label: "STORIES" },
  { href: "/characters", label: "CHARACTERS" },
  { href: "/night", label: "NIGHT STORIES" },
  { href: "/about", label: "ABOUT" },
  { href: "/media", label: "FOR MEDIA" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="focus-line text-[15px] tracking-wide"
          aria-label={`${siteConfig.siteTitle} トップページ`}
        >
          それでも男は足りている
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-line flex flex-col items-end gap-[5px] p-1 sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>

        <nav
          className="hidden items-center gap-6 text-[13px] tracking-wide text-ink-soft sm:flex"
          aria-label="サイト内ナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-line hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 h-3 w-px bg-line" aria-hidden="true" />
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
        </nav>
      </div>

      <nav
        id="mobile-nav"
        aria-label="サイト内ナビゲーション(モバイル)"
        className={`overflow-hidden border-t border-line transition-[max-height] duration-300 ease-out sm:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-5 py-6 text-[14px] tracking-wide text-ink-soft">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-line hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-5 border-t border-line pt-4">
            <a
              href={siteConfig.xUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="focus-line hover:text-ink"
            >
              X
            </a>
            <a
              href={siteConfig.noteUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="focus-line hover:text-ink"
            >
              note
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
