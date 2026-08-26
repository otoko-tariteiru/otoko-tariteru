import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";

export const alt = "それでも男は足りている";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE_LINE1 = "それでも";
const TITLE_LINE2 = "男は足りている";
const SUBTEXT = "男には困っていない。20歳の男には困っている。";

export default async function Image() {
  const fontData = await loadGoogleFont(
    "Noto Sans JP:wght@400;700",
    TITLE_LINE1 + TITLE_LINE2 + SUBTEXT
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#111111",
          fontFamily: fontData ? "Noto Sans JP" : "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 30, letterSpacing: 4, color: "#3a3a3a" }}>
            {TITLE_LINE1}
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: 2 }}>
            {TITLE_LINE2}
          </div>
        </div>
        <div style={{ marginTop: 56, fontSize: 26, color: "#3a3a3a" }}>
          {SUBTEXT}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "Noto Sans JP",
              data: fontData,
              style: "normal",
              weight: 700,
            },
          ]
        : undefined,
    }
  );
}
