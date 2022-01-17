import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import LogoBlack from '../public/logo-black.svg';
import LogoWhite from '../public/logo-white.svg';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import siteMetadata from '@/data/siteMetadata';

import Footer from '@/components/Footer';
import NavLink from '@/components/NavLink';


export default function Container(props) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -10 }
  };
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: siteMetadata.socialBanner,
    twitterHandle: siteMetadata.twitterHandle,
    canonicalUrl: customMeta.sponsoredArticle
      ? customMeta.sponsoredUrl
      : `${siteMetadata.siteUrl}${router.asPath}`,
    date: null,
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Braydon Coyer" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="w-full py-8 px-6 my-4 text-gray-900 sticky-nav sm:px-8 md:my-8 bg-opacity-70 dark:bg-opacity-80 dark:text-gray-100 border-b border-white dark:border-gray-900 bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between max-w-xl mx-auto">
          <div className="flex items-center">
            <Link href="/">
              <a className="sm:block hidden font-medium dark:text-gray-100">
                <LogoBlack className="mr-1 dark:hidden w-6 h-6" />
                <LogoWhite className="mr-1 hidden dark:block w-6 h-6" />
              </a>
            </Link>
              <div
                className="font-medium sm:space-x-10 space-x-4 flex items-center text-gray-600 dark:text-gray-500"
            >
              <NavLink
                title="文章"
                pathUrl="/blog"
              />
               <NavLink
                title="项目"
                pathUrl="/project"
              />
               <NavLink
                title="仪表盘"
                pathUrl="/dashboard"
              />
               <NavLink
                title="遗愿清单"
                pathUrl="/bucket-list"
              />
               <NavLink
                title="关于我"
                pathUrl="/about"
              />
              </div>
          </div>
          <div
            aria-label="Toggle Dark Mode"
            className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-2xl"
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
      <motion.main
        id="skip"
        className="flex flex-col justify-center px-6"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.2, type: 'easeOut' }}
      >
        {children}

        <Footer />
      </motion.main>
    </div>
  );
}
