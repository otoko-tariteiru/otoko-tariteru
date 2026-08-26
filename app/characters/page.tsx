import type { Metadata } from "next";
import { characters } from "@/data/characters";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "CHARACTERS",
  description:
    "実名は出てこない。役割だけで語られる人物たち。「それでも男は足りている」登場人物紹介。",
};

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-[12px] tracking-[0.2em] text-ink-soft">CHARACTERS</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">登場人物</h1>
      <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">
        名前は出てこない。実在の人物を特定できる情報も、ここには置かない。
        <br />
        役割だけが、この話の中で人物を形づくっている。
      </p>

      <div className="mt-16 space-y-16">
        {characters.map((c) => (
          <Reveal key={c.id}>
            <h2 className="text-2xl">{c.role}</h2>
            <div className="mt-4 space-y-1 text-[15px] leading-loose text-ink-soft">
              {c.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
