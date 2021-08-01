import '@/styles/global.css';

import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { useAnalytics } from '@/lib/analytics';
import MDXComponents from '@/components/MDXComponents';

import { useEffect } from 'react';

import { init } from 'utils/ga';

export default function App({ Component, pageProps }) {
  useAnalytics();
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}