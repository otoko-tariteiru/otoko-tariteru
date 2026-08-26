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

  // 次回予告。日時が確定するまでは null のままにする(AIが日時を推測しないこと)。
  // nextEpisodeDate が null の間、トップページの NEXT EPISODE セクションは非表示になる。
  // 過去日時のまま放置しない — 公開が確認できたら published 側のデータ(stories.ts)を更新すること。
  nextEpisodeNumber: null as number | null,
  nextEpisodeDate: null as string | null,
  nextEpisodeTitle: null as string | null,

  // 外部リンク
  xHandle: "@otoko_tariteru",
  xUrl: "https://x.com/otoko_tariteru",
  noteUrl: "https://note.com/otoko_tariteru",

  // MEDIA ページの問い合わせ先。実在し受信可能なアドレスを確認できるまでは null のままにする。
  mediaEmail: null as string | null,

  // SEO
  siteUrl: "https://otoko-tariteru.vercel.app",
  description:
    "36歳、バイ。男には困っていない。それでも、1人の20歳からのLINEを待っている。X・noteで連載中。",
} as const;
