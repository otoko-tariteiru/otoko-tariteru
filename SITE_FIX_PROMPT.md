# SITE_FIX_PROMPT.md
# Claude Codeへそのまま渡す一括修正指示

既存の特設サイト「それでも男は足りている」を修正してください。

## 最初に必ずやること

1. `CANON.md` を全文読む
2. `CLAUDE.md` を全文読む
3. stories / siteConfig / characters / night stories / media関連データを確認
4. 既存デザインは原則維持
5. 今回は主に **事実関係の修正と再発防止** を行う

## A. Episode 02
現在の「知らない駅」設定を削除。

正史:
- 20歳の自宅付近の表示位置に、知らない男性が表示された
- 主人公は会っている可能性を想像した
- 実際に会っていた証拠はない

新しいexcerptを勝手に作文しない。
`excerptApproved: false` とし、一覧ではexcerptを非表示でよい。

## B. Episode 04
現在の
- 「東京ばな奈を渡された夜」
- 「旅行に行っていたことを、東京ばな奈で知った」

を削除。

主人公は東京ばな奈を受け取っていない。

公開済みタイトルは確認できていないため:
- `title: null`
- `titleStatus: "unknown"`

とし、UIでは「第4話」と表示。

CANONの working title candidate
「お土産は、東京ばな奈1個でいい」
を公開済みタイトルとして勝手に採用しない。

excerptは非表示。

## C. Episode 05
この夜を主人公発の募集と読めるコピーを削除。

正史:
20歳側から「久しぶりに添い寝募集です」とLINEが来た。

この夜:
- キスなし
- ハグなし
- セックスなし
- 本当に添い寝だけ

excerptは新規生成せず非表示。

## D. FEATURED STORY
現在の

「その日は2人の男に会った。
帰宅して、3人目のログインを確認した。」

は削除。

「帰宅して3人目のログインを確認した」は未確認。

代わりにCANONで使用可能な:

「最初は、会えればよかった。
会えるようになった。
すると今度は、向こうから会いたがられたくなった。」

を使用可。

## E. SERIAL STATUS / NEXT EPISODE
「NEXT EPISODE 08.26 20:30」が過去日時のまま残らないようにする。

実装:
- nextEpisodeDate === null → 非表示
- nextEpisodeDate < now → 非表示
- AIが次回日時を推測しない

CANON作成時点:
`latest_confirmed_published_episode = 5`

Episode 06は `unverified`。
ユーザーから公開確認が入るまで、確認済み値は EPISODE 05 / 16。

## F. Story data構造

```ts
type StoryStatus = "published" | "scheduled" | "draft" | "unverified";
type TitleStatus = "confirmed" | "working" | "unknown";

type Story = {
  episode: number;
  title: string | null;
  titleStatus: TitleStatus;
  slug: string;
  publicationStatus: StoryStatus;
  publishedAt: string | null;
  noteUrl: string | null;
  excerpt: string | null;
  excerptApproved: boolean;
  isPaid: boolean;
  series: "main" | "night";
};
```

UIルール:
- excerptApproved === false → excerpt非表示
- noteUrl === null → 「noteで読む」非表示
- titleStatus === "unknown" → 「第N話」
- publicationStatus !== "published" → 公開済み扱いしない

## G. NIGHT STORIES
現在の
「番外編として、noteで個別に販売しています。」
を削除。

現時点では全て企画/近日公開。

変更後例:
「無料の本編では、閉じたドアの内側。近日公開。」

3作品は `publicationStatus: "draft"`。
価格¥500は公開開始まで非表示でもよい。

## H. MEDIA
仮メールアドレス
`media@otoko-tariteru.jp`
を公開画面から削除。

実アドレス設定まで:
「出版・映像化・取材・その他、作品に関するお問い合わせ窓口は準備中です。」

存在しないmailtoリンクを作らない。

## I. CHARACTERS
以下は維持可。

20歳:
- 大学生
- LINEは短い
- 車ではあまり話さない
- 僕の筋肉を褒めない
- まつ毛が長い

7年暮らす男:
- 恋人というより家族に近い
- 家を出る時はいまもキスをする

大学生:
- 若くてイケメン
- 気持ちを言葉にする

近所の男:
- 目的が分かりやすい
- だから考え込まなくて済む

本名・学校・住所等は追加しない。

## J. TOP / ABOUT
以下は維持:

「男には困っていない。」
「20歳の男には困っている。」

「36歳、バイ。
7年暮らす男がいる。
それでも20歳からのLINEを待っている。」

ABOUTもCANONに一致しているため原則維持。

## K. excerpt事故の再発防止
全episodeのexcerptをレビューし、ユーザー承認が確認できないものは
`excerptApproved: false`
にする。

一覧カードはexcerptなしでも成立するように調整。

例:

05
深夜の添い寝募集
2026.08.24
READ →

新しい文学的コピーを勝手に作らない。

## L. README
READMEに追加:

「作品内容の変更前にCANON.mdを確認すること。
CANON.mdにない事実をAIで補完しないこと。」

## M. 検証
修正後:
1. `npm run build`
2. lintがあればlint
3. TypeScript errors確認
4. /, /stories, /characters, /night, /about, /media を確認
5. 375px / 390px / 430px / 1440pxで表示確認
6. 既存の白黒エディトリアルデザインが崩れていないことを確認

## N. 完了報告
以下だけ報告:
1. CANONに基づいて修正した誤情報
2. 非表示にした未確認情報
3. 変更したデータ構造
4. build結果
5. ユーザーが次に入力すべき情報
   - Episode 04の実際の公開タイトル
   - Episode 05のnote URL
   - Episode 06が公開済みかどうか / note URL
   - 次回公開日時
   - 実際に使うMEDIA問い合わせ先

この作業中、作品の出来事や文章を推測で追加しないこと。
