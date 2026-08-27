// 実名・内部呼称は一切使用しない。作品上の役割のみで人物を表現する。
// 内容は CANON.md「2. 公開用人物」と一致していること。事実を推測で追加・変更しない。

export type CharacterCategory = "main" | "other";
export type CharacterStatus = "visible" | "hidden";

export interface Character {
  id: string;
  publicName: string;
  category: CharacterCategory;
  order: number;
  lines: string[];
  status: CharacterStatus;
}

export const characters: Character[] = [
  {
    id: "20",
    publicName: "20歳",
    category: "main",
    order: 1,
    lines: [
      "大学生。",
      "LINEは短い。",
      "車ではあまり話さない。",
      "僕の筋肉を褒めない。",
      "まつ毛が長い。",
    ],
    status: "visible",
  },
  {
    id: "7years",
    publicName: "7年暮らす男",
    category: "main",
    order: 2,
    lines: [
      "恋人というより、もう家族に近い。",
      "家を出る時はいまもキスをする。",
      "猫と生活を共有している。",
    ],
    status: "visible",
  },
  {
    id: "far",
    publicName: "遠くに住む男",
    category: "other",
    order: 3,
    lines: [
      "話していて楽な男。",
      "食べ物や仕事の話が自然に続く。",
      "LINEを送る前に考え込まなくて済む。",
    ],
    status: "visible",
  },
  {
    id: "hug",
    publicName: "抱きしめてくれる男",
    category: "other",
    order: 4,
    lines: [
      "身体の相性がいい。",
      "会いたいことを言葉にする。",
      "抱きしめることに、あまり迷いがない。",
    ],
    status: "visible",
  },
  {
    id: "occasional",
    publicName: "年に1、2回会う男",
    category: "other",
    order: 5,
    lines: [
      "会う頻度は少ない。",
      "それでも関係は終わらない。",
      "次に会えることを、あまり疑わなくて済む。",
    ],
    status: "visible",
  },
  {
    id: "long-tie",
    publicName: "何年も切れない男",
    category: "other",
    order: 6,
    lines: [
      "何年も前から知っている。",
      "会わない時期があっても、また会う。",
      "一度お気に入りに入った男は、なかなか消えない。",
    ],
    status: "visible",
  },
  {
    id: "inviter",
    publicName: "よく誘ってくる男",
    category: "other",
    order: 7,
    lines: [
      "向こうから会いたいと言う。",
      "日程も合わせようとする。",
      "求められることに慣れると、安心する。",
    ],
    status: "visible",
  },
  {
    id: "freshman",
    publicName: "大学1年生だった男",
    category: "other",
    order: 8,
    lines: [
      "出会った頃は大学1年生だった。",
      "昔は僕からよく誘った。",
      "今は向こうから連絡が来れば会う。",
      "僕からは、ほとんど連絡しない。",
    ],
    status: "visible",
  },
  {
    id: "type-face",
    publicName: "顔がどタイプの男",
    category: "other",
    order: 9,
    lines: [
      "顔がどタイプだった。",
      "会えなくなっても、顔が好きだったことは残る。",
      "欲望は、曖昧さだけで生まれるわけではない。",
    ],
    status: "visible",
  },
  {
    id: "everyday",
    publicName: "毎日会いたがった男",
    category: "other",
    order: 10,
    lines: [
      "最初は、たくさん会えるのが嬉しかった。",
      "会う回数が増えすぎると、少しずつ重くなった。",
      "会いたい男が、対応しなければならない男になることがある。",
    ],
    status: "visible",
  },
  {
    id: "new-student",
    publicName: "新しい大学生",
    category: "other",
    order: 11,
    lines: [
      "若くてイケメン。",
      "初回から気持ちを言葉にする。",
      "セックスのあと、30分ほど添い寝した。",
      "「また会いたい」が分かりやすい。",
    ],
    status: "visible",
  },
  {
    id: "neighbor",
    publicName: "近所の男",
    category: "other",
    order: 12,
    lines: [
      "近所にいる。",
      "すでに何度か会っている。",
      "目的が分かりやすい。",
      "だから考え込まなくて済む。",
    ],
    status: "visible",
  },
  {
    id: "one-time",
    publicName: "一度しか会っていない男たち",
    category: "other",
    order: 13,
    lines: [
      "1回だけ会った男は複数いる。",
      "人数は作品上、正確に数えない。",
      "セックスをしたから好きになるわけではないことを示す存在。",
    ],
    status: "visible",
  },
];

export function getVisibleCharacters(): Character[] {
  return characters
    .filter((c) => c.status === "visible")
    .sort((a, b) => a.order - b.order);
}
