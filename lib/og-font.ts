// Edge runtime の ImageResponse (Satori) は woff2 を描画できないため、
// Google Fonts の CSS を「古いUAのふり」で取得しttf/otfのURLを抜き出して読み込む。
export async function loadGoogleFont(
  fontFamily: string,
  text: string
): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      fontFamily
    )}&text=${encodeURIComponent(text)}`;

    const cssRes = await fetch(cssUrl, {
      headers: {
        // 古いUAを名乗るとGoogle Fontsがwoff2ではなくttfを返す
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11",
      },
    });
    if (!cssRes.ok) return null;
    const css = await cssRes.text();

    const match = /src: url\(([^)]+)\)/.exec(css);
    if (!match) return null;

    const fontRes = await fetch(match[1]);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}
