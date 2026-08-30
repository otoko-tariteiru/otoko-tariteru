// このファイルの内容は CANON.md (作品正史) と矛盾してはいけない。
// 事実を編集する前に必ず CANON.md を確認すること。不明な点は null / false のままにする。

export type PublicationStatus =
  | "published"
  | "scheduled"
  | "draft"
  | "unverified";

export type TitleStatus = "confirmed" | "working" | "unknown";

export interface Story {
  id: string;
  episode: number;
  title: string | null;
  titleStatus: TitleStatus;
  slug: string;
  publishedAt: string | null; // ISO date。未確定はnull
  publicationStatus: PublicationStatus;
  excerpt: string | null;
  excerptApproved: boolean; // falseの場合、一覧・詳細どちらにもexcerptを出さない
  noteUrl: string | null;
  isPaid: boolean;
  series: string;
}

export const stories: Story[] = [
  {
    id: "ep01",
    episode: 1,
    title: "僕の筋肉を褒めない20歳",
    titleStatus: "confirmed",
    slug: "ep01",
    publishedAt: "2026-08-10T21:00:00+09:00",
    publicationStatus: "published",
    excerpt:
      "腕を褒められることには慣れている。褒めない男が、いちばん気になる。",
    excerptApproved: true,
    noteUrl: "https://note.com/otoko_tariteru/n/n3d4c5c07a817",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep02",
    episode: 2,
    title: "位置情報に知らない男がいる",
    titleStatus: "confirmed",
    slug: "ep02",
    publishedAt: "2026-08-13T21:00:00+09:00",
    publicationStatus: "published",
    excerpt:
      "位置情報は、それほど正確ではない。でも僕の頭は、知らない男だけを正確に彼の部屋へ運んだ。",
    excerptApproved: true,
    noteUrl: "https://note.com/otoko_tariteru/n/na84be7b4061d",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep03",
    episode: 3,
    title: "車の中では、あまり話すことがない",
    titleStatus: "confirmed",
    slug: "ep03",
    publishedAt: "2026-08-17T21:00:00+09:00",
    publicationStatus: "published",
    excerpt:
      "赤信号のたびに、話すことを探すのをやめた。沈黙のほうが、まだ嘘がない。",
    excerptApproved: true,
    noteUrl: "https://note.com/otoko_tariteru/n/nc60e18b8db1c",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep04",
    episode: 4,
    // HP作品タイトルとして確定(CANON.md §4 Episode 04, 2026-08-29 ユーザー承認)。
    // note記事側の実タイトルが何であれ、サイト表示はこのタイトルを使う。
    // 「東京ばな奈を実際にもらった」等の誤情報は本文にもexcerptにも入れない。
    title: "お土産は、東京ばな奈1個でいい",
    titleStatus: "confirmed",
    slug: "ep04",
    publishedAt: "2026-08-20T21:00:00+09:00",
    publicationStatus: "published",
    excerpt:
      "新宿にいることは分かった。東京で僕を思い出したかは、分からなかった。",
    excerptApproved: true,
    noteUrl: "https://note.com/otoko_tariteru/n/n19f0284a9bca",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep05",
    episode: 5,
    title: "深夜の添い寝募集",
    titleStatus: "confirmed",
    slug: "ep05",
    publishedAt: "2026-08-24T21:00:00+09:00",
    publicationStatus: "published",
    excerpt:
      "向こうから誘われることは、ほとんどない。その夜、20歳から「添い寝募集」とLINEが来た。",
    excerptApproved: true,
    // note URL未確認
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep06",
    episode: 6,
    // note公開を確認済み(CANON.md §4 Episode 06 / §11)
    title: "会えたのに、少し虚しかった",
    titleStatus: "confirmed",
    slug: "ep06",
    publishedAt: "2026-08-26T22:13:00+09:00",
    publicationStatus: "published",
    excerpt: "会えた。それでも、呼ばれた夜の方が満たされていた。",
    excerptApproved: true,
    noteUrl: "https://note.com/otoko_tariteru/n/n6d886a37ad58",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep07",
    episode: 7,
    // note公開を確認済み(CANON.md §4 Episode 07)。excerptは公開済み本文末尾からの抜粋(ユーザー提供)。
    title: "名前を呼ばれたことがない",
    titleStatus: "confirmed",
    slug: "ep07",
    publishedAt: "2026-08-28T18:56:00+09:00",
    publicationStatus: "published",
    excerpt: "同じベッドでは寝る。裸にもなる。名前だけは、まだ他人のままだ。",
    excerptApproved: true,
    noteUrl: "https://note.com/otoko_tariteru/n/n0d1f1cf4c8d4",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep08",
    episode: 8,
    // タイトルは確定(CANON.md §4 Episode 08)。note公開URL/日時が未確認のため draft を維持する。
    title: "まつ毛が長い",
    titleStatus: "confirmed",
    slug: "ep08",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep09",
    episode: 9,
    title: "7年暮らす男の隣で",
    titleStatus: "working",
    slug: "ep09",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep10",
    episode: 10,
    title: "大学1年生だった男",
    titleStatus: "working",
    slug: "ep10",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep11",
    episode: 11,
    title: "愛知にいない男",
    titleStatus: "working",
    slug: "ep11",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep12",
    episode: 12,
    title: "毎日会いたがった男",
    titleStatus: "working",
    slug: "ep12",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep13",
    episode: 13,
    title: "一度しか会っていない男たち",
    titleStatus: "working",
    slug: "ep13",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep14",
    episode: 14,
    title: "猫を飼っている家の匂い",
    titleStatus: "working",
    slug: "ep14",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep15",
    episode: 15,
    title: "男は何人いれば足りるのか",
    titleStatus: "working",
    slug: "ep15",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep16",
    episode: 16,
    title: "それでも男は足りている",
    titleStatus: "working",
    slug: "ep16",
    publishedAt: null,
    publicationStatus: "draft",
    excerpt: null,
    excerptApproved: false,
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
];

export function displayTitle(story: Story): string {
  if (story.titleStatus === "unknown" || !story.title) {
    return `第${story.episode}話`;
  }
  return story.title;
}

// タイトル未確認話は「第4話」、確認済みは「第4話「タイトル」」の形にする。
// displayTitle()の結果をそのまま「」で囲むと未確認話が「第4話「第4話」」と二重になるため分岐する。
export function displayHeading(story: Story): string {
  if (story.titleStatus === "unknown" || !story.title) {
    return `第${story.episode}話`;
  }
  return `第${story.episode}話「${story.title}」`;
}

export function getPublishedStories(): Story[] {
  return stories
    .filter((s) => s.publicationStatus === "published")
    .sort((a, b) => b.episode - a.episode);
}

export function getVisibleStories(): Story[] {
  return [...stories].sort((a, b) => a.episode - b.episode);
}

export function getLatestStory(): Story {
  const published = stories.filter((s) => s.publicationStatus === "published");
  return published.reduce((latest, s) =>
    s.episode > latest.episode ? s : latest
  );
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

// トップページのEPISODE表示・進捗%はここから自動算出する。手入力しない。
export function getLatestPublishedEpisode(): number {
  const published = stories.filter((s) => s.publicationStatus === "published");
  if (published.length === 0) return 0;
  return Math.max(...published.map((s) => s.episode));
}

export function getTotalEpisodes(): number {
  return stories.length;
}

export function getAdjacentPublishedStories(episode: number): {
  prev: Story | null;
  next: Story | null;
} {
  const published = stories
    .filter((s) => s.publicationStatus === "published")
    .sort((a, b) => a.episode - b.episode);
  const idx = published.findIndex((s) => s.episode === episode);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? published[idx - 1] : null,
    next: idx < published.length - 1 ? published[idx + 1] : null,
  };
}
