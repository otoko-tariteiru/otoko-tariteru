# それでも男は足りている｜公式サイト

連載「それでも男は足りている」の公式特設サイト。
Next.js (App Router) + TypeScript + Tailwind CSS。

本文全文はnote側にあり、このサイトは話数・予告・世界観を管理するための「編集部」的な場所です。
話数やSNSリンクなどの更新は、`data/` 以下のファイルを書き換えるだけで反映されます(管理画面なし)。

---

## 1. ローカル起動方法

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。

本番相当のビルドを手元で確認したい場合:

```bash
npm run build
npm run start
```

---

## 2. Vercelへの公開方法

1. このプロジェクトをGitHubなどのリポジトリにpushする。
2. [Vercel](https://vercel.com) にログインし、「Add New... → Project」から該当リポジトリをImportする。
3. Framework Presetは自動で `Next.js` が検出されます。ビルドコマンド・出力設定は変更不要です。
4. 「Deploy」を押すとビルドが走り、`*.vercel.app` のURLが発行されます。
5. 独自ドメインを使う場合は下記「8. 独自ドメイン設定方法」を参照してください。

以降は `main` ブランチにpushするたびに自動で再デプロイされます。

---

## 3. 新しい話を追加する方法

`data/stories.ts` の配列に1件追加、または該当話の `status` を書き換えます。

```ts
{
  id: "ep07",
  episode: 7,
  title: "名前を呼ばれたことがない",
  slug: "ep07",
  publishedAt: "2026-09-02T21:00:00+09:00",
  status: "published", // draft → scheduled → published と進める
  excerpt: "ここに短い抜粋を書く。",
  theme: "名前",
  noteUrl: "https://note.com/otoko_tariteru/n/xxxxxxxx",
  isPaid: false,
  series: "第1部",
},
```

- `status` は `draft`(近日公開・詳細非表示) → `scheduled`(予告・NEXT EPISODEに使用可) → `published`(通常公開) の3段階。
- `published` にすると `/stories` の一覧と `/stories/[slug]` に自動で表示されます。
- 公開したら `data/siteConfig.ts` の `currentEpisode` も更新してください(進捗表示に反映されます)。

---

## 4. note URLを追加する方法

`data/stories.ts` の該当話の `noteUrl` を `null` から実際のURLに書き換えるだけです。

```ts
noteUrl: "https://note.com/otoko_tariteru/n/xxxxxxxx",
```

URLが `null` の間は、詳細ページに「noteのリンクは準備中です。」と表示され、リンク切れになりません。

夜の話(番外編)のURLは `data/nightStories.ts` の `noteUrl` を同様に更新してください。

---

## 5. NEXT EPISODEを更新する方法

`data/siteConfig.ts` の以下4項目を書き換えるとトップページの「NEXT EPISODE」表示に反映されます。

```ts
nextEpisodeNumber: 7,
nextEpisodeDate: "2026-09-02T21:00:00+09:00",
nextEpisodeTitle: "名前を呼ばれたことがない",
```

該当話を `data/stories.ts` 側で `status: "scheduled"` にしておくと、`/stories` 一覧にも「予告」として表示されます。
公開のタイミングで `status: "published"` に変更し、`noteUrl` を追加してください。

---

## 6. 夜の話を追加する方法

`data/nightStories.ts` の配列に追加、または既存項目を編集します。

```ts
{
  id: "night04",
  number: 4,
  title: "新しいタイトル",
  status: "published", // draft → published
  priceLabel: "¥500",
  noteUrl: "https://note.com/otoko_tariteru/n/xxxxxxxx",
},
```

`/night` ページに自動で反映されます。年齢確認の注意書きは固定文言として常に表示されるため、追加の対応は不要です。

---

## 7. X / noteリンクを変更する方法

`data/siteConfig.ts` の以下を書き換えてください。ヘッダー・フッター・各ページのリンクすべてに反映されます。

```ts
xHandle: "@otoko_tariteru",
xUrl: "https://x.com/otoko_tariteru",
noteUrl: "https://note.com/otoko_tariteru",
```

MEDIAページの問い合わせ先メールアドレスも同ファイルの `mediaEmail` で管理しています。

---

## 8. 独自ドメイン設定方法

1. Vercelのプロジェクト画面 → 「Settings」→「Domains」を開く。
2. 使用したいドメイン(例: `otoko-tariteru.com`)を入力して「Add」。
3. Vercelが指示するDNSレコード(通常は `A` レコードまたは `CNAME`)を、ドメインを取得したレジストラ側のDNS設定に追加する。
4. DNS反映後、Vercel側で自動的にHTTPS証明書が発行され、独自ドメインでアクセスできるようになる。
5. ドメイン反映後は `data/siteConfig.ts` の `siteUrl` を新しいドメインに更新し、OGP・サイトマップ・robots.txtに正しいURLが載るようにする。

```ts
siteUrl: "https://otoko-tariteru.com",
```

---

## ディレクトリ構成の要点

```
app/                 各ページ(App Router)
  page.tsx           トップページ
  stories/           STORIES一覧・詳細
  characters/        CHARACTERS
  night/             NIGHT STORIES(夜の話)
  about/             ABOUT
  media/             FOR MEDIA
  opengraph-image.tsx  OGP画像を動的生成
data/                コンテンツデータ(ここを編集すれば更新できる)
  siteConfig.ts      サイト全体設定・次回予告
  stories.ts         全話のデータ
  nightStories.ts    夜の話のデータ
  characters.ts      登場人物
  quotes.ts          差し込み用の短文・FEATURED STORY
components/          Header / Footer / StoryRow / Reveal(スクロールフェード)
lib/                 日付フォーマットなどの補助関数
```

## 注意事項

- 偽のPV数・レビュー・話題性の演出は実装していません(仕様上、意図的に入れていません)。
- Google Analyticsなどの計測タグは未導入です。追加する場合は `app/layout.tsx` に計測タグを差し込んでください。
- CMSは導入していません。更新は上記の通り `data/` 配下のファイル編集のみで完結します。
