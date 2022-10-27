import '@/styles/global.css';
import 'remixicon/fonts/remixicon.css';

import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { useAnalytics } from '@/lib/analytics';
import MDXComponents from '@/components/MDXComponents';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Script from 'next/script'

import { useEffect } from 'react';

import { init } from 'utils/ga';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useAnalytics();
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);
  return (
    <ThemeProvider attribute="class">
      <Script src="https://cdn.usefathom.com/script.js" data-site="VEGAJXXX" defer />
      <MDXProvider components={MDXComponents}>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps}/>
        </AnimatePresence>
      </MDXProvider>
    </ThemeProvider>
  );
}
