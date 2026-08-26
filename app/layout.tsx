import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.siteTitle}｜公式サイト`,
    template: `%s｜${siteConfig.siteTitle}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.siteTitle}｜公式サイト`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteTitle,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteTitle}｜公式サイト`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
