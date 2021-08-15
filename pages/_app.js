import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { useAnalytics } from '@/lib/analytics';
import MDXComponents from '@/components/MDXComponents';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

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