import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "左子祯 — 设计师和创造者",
    template: "%s | 左子祯"
  },
  description: "左子祯 — 设计师和创造者",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased text-neutral-800">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SVF5XKEMWE" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SVF5XKEMWE');`}
        </Script>
        <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
