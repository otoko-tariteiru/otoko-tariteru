export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // データは自サイトのCANON準拠コンテンツのみから組み立てる(外部/ユーザー入力なし)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
