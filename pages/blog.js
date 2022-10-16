import { useState } from 'react';

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import PageTitle from '@/components/PageTitle';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="文章 – 左子祯"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle
          title="写作"
          textColor="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400"
        >
          自 2017
          年以来，我一直在网上写作，主要是关于产品设计和我感兴趣的一些方面。我总共在这个网站上写了
          {posts.length} 篇文章。可以使用下面的搜索按标题过滤。
        </PageTitle>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="搜索"
            className="px-4 py-2 border border-gray-300 dark:border-gray-800 focus:ring-blue-700 focus:border-blue-700 block w-full rounded-lg text-gray-900 dark:text-gray-100 dark:bg-gray-900"
          />
          <svg
            className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {/* {!searchValue && (
          <>
            <h3 className="font-bold text-xl mb-4 mt-8 text-gray-900 dark:text-gray-100">
              阅读最多
            </h3>
            <BlogPost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
              slug="style-guides-component-libraries-design-systems"
            />
            <BlogPost
              title="How Stripe Designs Beautiful Websites"
              summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
              slug="how-stripe-designs-beautiful-websites"
            />
            <BlogPost
              title="Creating a Monorepo with Lerna & Yarn Workspaces"
              summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
              slug="monorepo-lerna-yarn-workspaces"
            />
          </>
        )} */}
        <div className="mb-4 mt-4">
          {!filteredBlogPosts.length && (
            <p className="text-gray-500 dark:text-gray-500 mb-4">
              没有找到文章
            </p>
          )}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
