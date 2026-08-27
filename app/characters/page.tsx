import type { Metadata } from "next";
import { getVisibleCharacters } from "@/data/characters";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "CHARACTERS",
  description:
    "名前は変えている。ここでは、僕との関係だけを書く。「それでも男は足りている」登場人物紹介。",
};

export default function CharactersPage() {
  const all = getVisibleCharacters();
  const main = all.filter((c) => c.category === "main");
  const other = all.filter((c) => c.category === "other");

  return (
    <div className="mx-auto max-w-xl px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-[12px] tracking-[0.2em] text-ink-soft">CHARACTERS</p>
      <h1 className="mt-4 text-3xl sm:text-4xl">登場人物</h1>

      <div className="mt-16">
        <p className="text-[12px] tracking-[0.2em] text-ink-soft">MAIN</p>
        <div className="mt-8 space-y-16">
          {main.map((c) => (
            <Reveal key={c.id}>
              <h2 className="text-2xl sm:text-3xl">{c.publicName}</h2>
              <div className="mt-4 space-y-1 text-[16px] leading-loose text-ink-soft">
                {c.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <p className="text-[12px] tracking-[0.2em] text-ink-soft">
          OTHER MEN
        </p>
        <div className="mt-8 border-t border-line">
          {other.map((c) => (
            <Reveal key={c.id} className="border-b border-line py-8">
              <div className="flex items-baseline gap-6">
                <span className="w-10 shrink-0 text-xl tabular-nums text-ink-soft sm:text-2xl">
                  {String(c.order).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-xl">{c.publicName}</h2>
                  <div className="mt-3 space-y-1 text-[14px] leading-loose text-ink-soft">
                    {c.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
