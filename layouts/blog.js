import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
// import Subscribe from '@/components/Subscribe';
import ViewCounter from '@/components/ViewCounter';

import { motion } from 'framer-motion';
import { Separator } from '@/components/Separator';

const editUrl = (slug) =>
  `https://github.com/zuozizhen.com/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://zuozizhen.com/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – 左子祯`}
      description={frontMatter.summary}
      image={`https://zuozizhen.com${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start mx-auto mb-16">
        <h1 className="font-bold text-2xl md:text-4xl mb-4 text-gray-900 dark:text-gray-100 md:leading-snug w-full max-w-screen-sm mx-auto">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center  mt-2 w-full max-w-screen-sm mx-auto">
          <div className="flex items-center">
            <Image
              alt="左子祯"
              height={24}
              width={24}
              src="https://cdn.jsdelivr.net/gh/zuozizhen/oss@master/img/20210706205657.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'左子祯 / '}
              {format(parseISO(frontMatter.publishedAt), 'yyyy.MM.dd')}
            </p>
          </div>
          {/* <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p> */}
        </div>
        <motion.div
          animate={{ y: -20, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 0.6 }}
          className="opacity-0"
        >
          <div className="prose dark:prose-dark max-w-none w-full pt-16">
            {frontMatter.image ? (
              <Image
                alt={`Norway`}
                src={frontMatter.image}
                width={1501 / 2}
                height={712 / 2}
                className=""
                priority
              />
            ) : null}

            {children}
          </div>
        </motion.div>

        {/* <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div> */}
      </article>
    </Container>
  );
}
