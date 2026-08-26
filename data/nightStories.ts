export interface NightStory {
  id: string;
  number: number;
  title: string;
  status: "published" | "draft";
  priceLabel: string;
  noteUrl: string | null;
}

export const nightStories: NightStory[] = [
  {
    id: "night01",
    number: 1,
    title: "僕ではない僕に嫉妬した",
    status: "draft",
    priceLabel: "¥500",
    noteUrl: null,
  },
  {
    id: "night02",
    number: 2,
    title: "名前を呼ばない男の身体",
    status: "draft",
    priceLabel: "¥500",
    noteUrl: null,
  },
  {
    id: "night03",
    number: 3,
    title: "添い寝の次に欲しかったもの",
    status: "draft",
    priceLabel: "¥500",
    noteUrl: null,
  },
];
