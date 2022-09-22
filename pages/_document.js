import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/JetBrainsMono-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link
            href="/static/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#4a9885"
            href="/static/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/static/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="14d2e73487fa6c71" name="yandex-verification" />
          <meta
            content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
            name="google-site-verification"
          />
          <script src="https://cdn.usefathom.com/script.js" data-site="VEGAJXXX" defer></script>
          <script type="text/javascript">
            function loadScript(url, apikey) { var script =
            document.createElement("script"); script.type = "text/javascript";
            script.src = url; script.setAttribute("uploadmethod","grpc");
            script.setAttribute("batchmax","20"); script.setAttribute("sendovertime",
            "20000"); script.setAttribute("storesize","100");
            script.setAttribute("id", "eaRecordScript");
            script.setAttribute("projectKey", apikey);
            document.head.appendChild(script); }
            loadScript('https://edge.userview.net/uv/1.1.6/record.js', '48f6b58917654801bb2b23dad61867f6')
          </script>
        </Head>
        <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
