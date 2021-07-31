import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import LogoBlack from '../public/logo-black.svg';
import LogoWhite from '../public/logo-white.svg';

import Footer from '@/components/Footer';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: '左子祯 - 产品设计师，独立开发者',
    description: `我是一名 产品设计师、独立开发者，我喜欢 写文章，目前是 Master 的产品设计负责人`,
    image: 'https://zuozizhen.com/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://zuozizhen.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://zuozizhen.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="左子祯" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zuozizhen" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="w-full py-8 px-8 my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-70 dark:bg-opacity-80 dark:text-gray-100">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <Link href="/">
            <a className="sm:block hidden font-medium dark:text-gray-100">
              <LogoBlack className="mr-3 dark:hidden w-6 h-6" />
              <LogoWhite className="mr-3 hidden dark:block w-6 h-6" />
            </a>
          </Link>
          <div className="sm:space-x-10 space-x-4 flex items-center">
            <Link href="/">
              <a className="sm:hidden block text-sm sm:text-base text-gray-700 font-medium dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                首页
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-700 font-medium text-sm sm:text-base dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                文章
              </a>
            </Link>
            <Link href="/project">
              <a className="text-gray-700 font-medium text-sm sm:text-base dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                项目
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="text-gray-700 font-medium text-sm sm:text-base dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                仪表盘
              </a>
            </Link>

            <Link href="/about">
              <a className="text-gray-700 font-medium text-sm sm:text-base dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                关于我
              </a>
            </Link>
          </div>
          <div
            aria-label="Toggle Dark Mode"
            className="w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </div>
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-white dark:bg-black"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
