import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Link from 'next/link';
import { Client } from '@notionhq/client';
import { getBooksData, getSlugPage } from "@/lib/notion";

import Image from 'next/image';
import slugify from 'slugify';
import { renderBlocks } from '@/lib/renderBlocks';

export default function BooksPage({
  content,
  title,
  thumbnailsUrl,
  href,
  author,
  star
}) {
  return (
     <Container
      title={title}
     >
      <article className="flex flex-col justify-center items-start mx-auto mb-16">
        <h1 className="font-bold text-2xl md:text-4xl mb-4 text-gray-900 dark:text-gray-100 md:leading-snug w-full mx-auto">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center  mt-2 w-full mx-auto">
          <div className="flex gap-8 dark:bg-gray-800 p-6 rounded-xl w-full items-start">
            <div className="w-48 aspect-[7/10] relative rounded-lg shadow-xl">
              <Image
                src={thumbnailsUrl}
                alt="avatar"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-1">
              <h2 className="mt-4 mb-2 text-2xl font-bold text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                <Link href={href} passHref>{title}</Link>
              </h2>
              <div className="text-sm font-semibold text-gray-600 max-w-none dark:text-gray-500">
                {author}
              </div>
              <div>
                {
                  Array(star).fill('0').map((index) => (
                    <i key={index} className="ri-star-s-fill text-yellow-400"></i>
                  ))}
                {
                  Array(5 - star).fill('0').map((index) => (
                    <i key={index} className="ri-star-s-fill text-gray-700"></i>
                  ))}
              </div>
              <div className="text-sm font-semibold text-gray-600 max-w-none dark:text-gray-500">
                {author}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ y: -20, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 0.6 }}
          className="opacity-0"
        >
          <div className="prose dark:prose-dark max-w-none w-full pt-16">
            {content.map((block) => (
              <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
            ))}
            {/* <pre>{JSON.stringify(content,null,2)}</pre> */}
          </div>
        </motion.div>
      </article>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const paths = [];
  const data = await getBooksData(process.env.BOOKS_DATABASE_ID);

  data.forEach((result) => {
    if (result.object === 'page') {
      paths.push({
        params: {
          slug: slugify(result.id)
        }
      });
    }
  });

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  let content = [];
  let title = '';
  let thumbnailsUrl = null;
  let href = '';
  let author = '';
  let star = null;

  const notion = new Client({
    auth: process.env.NOTION_SECRET
  });

  const data = await getBooksData(process.env.BOOKS_DATABASE_ID);

  const page = getSlugPage(data, slug);

  title = page.properties.Name.title[0].plain_text;
  thumbnailsUrl = page.properties.Cover.files[0].file.url;
  href = page.properties.Link.url;
  author = page.properties.Author.rich_text[0].text.content;
  star = page.properties.Star.number;

  let blocks = await notion.blocks.children.list({
    block_id: page.id
  });

  content = [...blocks.results];

  return {
    props: {
      content,
      title,
      slug,
      thumbnailsUrl,
      href,
      author,
      star
    }
  };
};
