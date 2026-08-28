import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/about",
  title: "この連載について",
  description:
    "36歳、バイ。男には困っていない。それでも、1人の20歳からのLINEを待っている。",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-lg px-6 py-20 sm:px-8 sm:py-28">
      <p className="text-[12px] tracking-[0.2em] text-ink-soft">ABOUT</p>

      <div className="mt-10 space-y-8 text-[17px] leading-loose">
        <p>36歳、バイ。</p>
        <p>男には困っていない。</p>
        <p>
          7年一緒に暮らす男がいる。
          <br />
          ほかにも会う男がいる。
        </p>
        <p>セックスも、足りている。</p>
        <p>
          なのに、
          <br />
          1人の20歳からのLINEを待っている。
        </p>
        <p className="pt-6 text-ink-soft">
          これは、男が足りている男が、
          <br />
          なぜ1人だけ足りないのかを、
          <br />
          考え続ける話。
        </p>
      </div>
    </div>
  );
}
