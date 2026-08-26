// 実名・写真は一切使用しない。作品上の役割のみで人物を表現する。

export interface Character {
  id: string;
  role: string;
  description: string[];
}

export const characters: Character[] = [
  {
    id: "20",
    role: "20歳",
    description: [
      "大学生。",
      "LINEは短い。",
      "車ではあまり話さない。",
      "僕の筋肉を褒めない。",
      "まつ毛が長い。",
    ],
  },
  {
    id: "7years",
    role: "7年暮らす男",
    description: [
      "恋人というより、もう家族に近い。",
      "家を出る時はいまもキスをする。",
    ],
  },
  {
    id: "far",
    role: "遠くに住む男",
    description: ["話していて楽な男。"],
  },
  {
    id: "occasional",
    role: "年に1、2回会う男",
    description: ["会う頻度は少ない。", "それでも関係は終わらない。"],
  },
  {
    id: "student",
    role: "大学生",
    description: ["若くてイケメン。", "気持ちを言葉にする。"],
  },
  {
    id: "neighbor",
    role: "近所の男",
    description: ["目的が分かりやすい。", "だから考え込まなくて済む。"],
  },
];
