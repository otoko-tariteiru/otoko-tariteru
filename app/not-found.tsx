import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60svh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="text-[12px] tracking-[0.2em] text-ink-soft">404</p>
      <p className="mt-6 text-xl leading-loose">
        ここには、まだ何もない。
      </p>
      <Link
        href="/"
        className="focus-line mt-10 border-b border-ink pb-1 text-[14px] hover:opacity-60"
      >
        トップに戻る →
      </Link>
    </div>
  );
}
