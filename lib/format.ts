// 日時は常に "YYYY-MM-DDTHH:mm:ss+09:00" 形式で保存する。
// Date のローカルタイムゾーン変換に頼るとサーバー(UTC)とブラウザ(JST)で
// 表示がずれてhydration errorの原因になるため、文字列から直接パースする。

const ISO_RE = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/;

function parseIso(iso: string) {
  const m = ISO_RE.exec(iso);
  if (!m) {
    throw new Error(`Invalid ISO date: ${iso}`);
  }
  const [, y, mo, d, h, mi] = m;
  return { y, mo, d, h, mi };
}

export function formatDateDots(iso: string): string {
  const { y, mo, d } = parseIso(iso);
  return `${y}.${mo}.${d}`;
}

export function formatMonthDay(iso: string): string {
  const { mo, d } = parseIso(iso);
  return `${mo}.${d}`;
}

export function formatTime(iso: string): string {
  const { h, mi } = parseIso(iso);
  return `${h}:${mi}`;
}

export function padEpisode(n: number): string {
  return String(n).padStart(2, "0");
}
