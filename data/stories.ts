export type StoryStatus = "published" | "scheduled" | "draft";

export interface Story {
  id: string;
  episode: number;
  title: string;
  slug: string;
  publishedAt: string; // ISO date. 未公開/予告はscheduled日時。
  status: StoryStatus;
  excerpt: string; // draft は空文字でよい(一覧で詳細を見せないため)
  theme: string;
  noteUrl: string | null;
  isPaid: boolean;
  series: string;
}

export const stories: Story[] = [
  {
    id: "ep01",
    episode: 1,
    title: "僕の筋肉を褒めない20歳",
    slug: "ep01",
    publishedAt: "2026-08-10T21:00:00+09:00",
    status: "published",
    excerpt:
      "腕を褒められることには慣れている。褒めない男が、いちばん気になる。",
    theme: "距離",
    noteUrl: "https://note.com/otoko_tariteru/n/n3d4c5c07a817",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep02",
    episode: 2,
    title: "位置情報に知らない男がいる",
    slug: "ep02",
    publishedAt: "2026-08-13T21:00:00+09:00",
    status: "published",
    excerpt:
      "地図の上の丸いアイコンが、知らない駅で止まっている。名前も知らない男の分だけ、心配は増える。",
    theme: "嫉妬",
    noteUrl: "https://note.com/otoko_tariteru/n/na84be7b4061d",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep03",
    episode: 3,
    title: "車の中では、あまり話すことがない",
    slug: "ep03",
    publishedAt: "2026-08-17T21:00:00+09:00",
    status: "published",
    excerpt:
      "赤信号のたびに、話すことを探すのをやめた。沈黙のほうが、まだ嘘がない。",
    theme: "沈黙",
    noteUrl: "https://note.com/otoko_tariteru/n/nc60e18b8db1c",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep04",
    episode: 4,
    title: "東京ばな奈を渡された夜",
    slug: "ep04",
    publishedAt: "2026-08-20T21:00:00+09:00",
    status: "published",
    excerpt:
      "旅行に行っていたことを、東京ばな奈で知った。土産話より先に、駐車場代の話をした。",
    theme: "すれ違い",
    noteUrl: "https://note.com/otoko_tariteru/n/n19f0284a9bca",
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep05",
    episode: 5,
    title: "深夜の添い寝募集",
    slug: "ep05",
    publishedAt: "2026-08-24T21:00:00+09:00",
    status: "published",
    excerpt:
      "誰かの隣で眠りたい夜に限って、誰も隣にいない。募集をかけるのは、いつも自分からだった。",
    theme: "孤独",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep06",
    episode: 6,
    title: "会えたのに、少し虚しかった",
    slug: "ep06",
    publishedAt: "2026-08-26T20:30:00+09:00",
    status: "scheduled",
    excerpt:
      "会いたかったはずの日に、会えたのに何かが足りなかった。足りないのは、多分、男の数ではない。",
    theme: "空虚",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep07",
    episode: 7,
    title: "名前を呼ばれたことがない",
    slug: "ep07",
    publishedAt: "2026-09-02T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "名前",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep08",
    episode: 8,
    title: "まつ毛が長い",
    slug: "ep08",
    publishedAt: "2026-09-06T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "身体",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep09",
    episode: 9,
    title: "7年暮らす男の隣で",
    slug: "ep09",
    publishedAt: "2026-09-10T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "家族",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep10",
    episode: 10,
    title: "大学1年生だった男",
    slug: "ep10",
    publishedAt: "2026-09-14T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "過去",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep11",
    episode: 11,
    title: "愛知にいない男",
    slug: "ep11",
    publishedAt: "2026-09-18T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "遠さ",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep12",
    episode: 12,
    title: "毎日会いたがった男",
    slug: "ep12",
    publishedAt: "2026-09-22T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "執着",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep13",
    episode: 13,
    title: "一度しか会っていない男たち",
    slug: "ep13",
    publishedAt: "2026-09-26T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "数",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep14",
    episode: 14,
    title: "猫を飼っている家の匂い",
    slug: "ep14",
    publishedAt: "2026-09-30T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "匂い",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep15",
    episode: 15,
    title: "男は何人いれば足りるのか",
    slug: "ep15",
    publishedAt: "2026-10-04T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "問い",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
  {
    id: "ep16",
    episode: 16,
    title: "それでも男は足りている",
    slug: "ep16",
    publishedAt: "2026-10-08T21:00:00+09:00",
    status: "draft",
    excerpt: "",
    theme: "答え",
    noteUrl: null,
    isPaid: false,
    series: "第1部",
  },
];

export function getPublishedStories(): Story[] {
  return stories
    .filter((s) => s.status === "published")
    .sort((a, b) => b.episode - a.episode);
}

export function getVisibleStories(): Story[] {
  // published と scheduled は目次に出す(scheduled は詳細を隠す)。draft はタイトルのみ。
  return [...stories].sort((a, b) => a.episode - b.episode);
}

export function getLatestStory(): Story {
  const published = stories.filter((s) => s.status === "published");
  return published.reduce((latest, s) =>
    s.episode > latest.episode ? s : latest
  );
}

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
