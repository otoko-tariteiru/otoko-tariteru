import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

// 静的ページ(トップ以外)向けの共通metadataビルダー。
// canonical / openGraph / twitter を各ページで確実に固有化するための共通処理。
// child pageがopenGraph/alternatesを自前で持たないと親(root layout)のOG設定を
// そのまま継承してしまい、全ページのog:url等がトップページのままになる。
export function buildPageMetadata(opts: {
  path: string; // 例: "/stories"
  title: string; // ページ固有タイトル(サイト名は自動付与)
  description: string;
}): Metadata {
  const fullTitle = `${opts.title}｜${siteConfig.siteTitle}`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description: opts.description,
      url: opts.path,
      siteName: siteConfig.siteTitle,
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
    },
  };
}
