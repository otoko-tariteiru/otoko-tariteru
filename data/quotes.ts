// 差し込み用の短文。ランダム表示はせず、配置はコンポーネント側で固定する。

export interface Quote {
  id: string;
  lines: string[];
}

export const quotes: Quote[] = [
  {
    id: "q1",
    lines: ["LINEが来なかった。", "ナイモンは見た。"],
  },
  {
    id: "q2",
    lines: ["会いたい。", "会うと話すことがない。"],
  },
  {
    id: "q3",
    lines: ["名前より先に、", "身体の方が近くなった。"],
  },
  {
    id: "q4",
    lines: ["男は足りている。", "答えだけが足りない。"],
  },
];

export const featuredStory = {
  lines: ["その日は2人の男に会った。", "帰宅して、", "3人目のログインを確認した。"],
  href: null as string | null,
};
