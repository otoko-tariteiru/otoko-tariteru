// サイト全体の設定。話数や次回予告はここと data/stories.ts を書き換えるだけで更新できる。

export const siteConfig = {
  siteTitle: "それでも男は足りている",
  tagline: "男には困っていない。",
  subTagline: "20歳の男には困っている。",

  // 連載進捗
  currentEpisode: 5,
  totalEpisodes: 16,
  seriesPart: "第1部",
  seriesStatus: "連載中",

  // 次回予告(この4項目を書き換えれば トップページの NEXT EPISODE が更新される)
  nextEpisodeNumber: 6,
  nextEpisodeDate: "2026-08-26T20:30:00+09:00",
  nextEpisodeTitle: "会えたのに、少し虚しかった",
  nextEpisodeNote: "",

  // 外部リンク
  xHandle: "@otoko_tariteru",
  xUrl: "https://x.com/otoko_tariteru",
  noteUrl: "https://note.com/otoko_tariteru",

  // MEDIA ページの問い合わせ先(将来フォームに差し替え可能)
  mediaEmail: "media@otoko-tariteru.jp",

  // SEO
  siteUrl: "https://otoko-tariteru.example",
  description:
    "36歳、バイ。男には困っていない。それでも、1人の20歳からのLINEを待っている。X・noteで連載中。",
} as const;
