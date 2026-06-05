import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@/styles/globals.css?url";
import terminalStyles from "@/styles/terminal.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "stylesheet", href: styles },
      { rel: "stylesheet", href: terminalStyles },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/icon.png" },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-SVF5XKEMWE",
        async: true,
      },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SVF5XKEMWE');",
      },
      {
        src: "https://app.lemonsqueezy.com/js/lemon.js",
        async: true,
      },
    ],
  }),
  component: RootDocument,
  errorComponent: ({ error }) => (
    <Document>
      <section className="max-w-screen-lg mx-auto w-full px-5 py-20">
        <h1 className="text-3xl font-semibold">出错了</h1>
        <p className="mt-3 text-neutral-500">
          {error instanceof Error ? error.message : "页面出错了"}
        </p>
      </section>
    </Document>
  ),
});

function RootDocument() {
  return (
    <Document>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Document>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased text-neutral-800">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
