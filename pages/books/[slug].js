import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Link from 'next/link';
import { Client } from '@notionhq/client';
import { getBooksData, getArticlePage } from "@/lib/notion";

// import Image from 'next/image';
import slugify from 'slugify';
import { renderBlocks } from '@/lib/renderBlocks';

export default function BooksPage({
  content,
  title,
  thumbnailsUrl,
  href,
  author,
  star,
  introduction
}) {
  return (
     <Container
      title={title}
     >
      <article className="flex flex-col justify-center items-start mx-auto mb-16">
        <div className="flex gap-8 dark:bg-gray-800 p-6 rounded-xl w-full items-start max-w-2xl">
          <div className="h-56 aspect-[7/10] relative rounded-lg shadow-xl">
            <img src={thumbnailsUrl} alt="cover" className="rounded-lg object-cover" />
            {/* <Image
              src={thumbnailsUrl}
              alt="cover"
              layout="fill"
              className="rounded-lg object-cover"
            /> */}
          </div>
          <div className="flex flex-col justify-between py-1">
            <div className='space-y-1 mb-3'>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white dark:hover:text-gray-300">
                <Link href={href} passHref>{title}</Link>
              </h2>
              <div className='flex gap-2 items-center text-gray-600 dark:text-gray-500'>
                <div className="text-xs font-semibold  max-w-none ">
                  {author}
                </div>
                ·
                <div className='flex text-xs font-semibold  max-w-none'>
                  我的推荐程度：
                  <div className='flex items-center'>
                    {
                      Array(star).fill('0').map((index) => (
                        // <SimpleItem {...book.fields} />
                        <i key={index} className="ri-star-s-fill text-yellow-400"></i>
                      ))}
                    {
                      Array(5 - star).fill('0').map((index) => (
                        // <SimpleItem {...book.fields} />
                        <i key={index} className="ri-star-s-fill text-gray-700"></i>
                      ))}
                  </div>
                </div>
              </div>
              <div className='text-sm text-gray-900 dark:text-gray-200 leading-6 pt-1'>
                {introduction}
              </div>
            </div>
            <Link href={href} passHref>
              <a className='text-sm font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-70 text-gray-500' target="_blank" >
                豆瓣链接
              </a>
            </Link>
          </div>
        </div>
        <motion.div
          animate={{ y: -20, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 0.6 }}
          className="opacity-0"
        >
          <div className="prose dark:prose-dark max-w-none w-full pt-10">
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
          slug: slugify(
            result.properties.Slug.rich_text[0].text.content
          ).toLowerCase()
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
  let introduction = '';

  const notion = new Client({
    auth: process.env.NOTION_SECRET
  });

  const data = await getBooksData(process.env.BOOKS_DATABASE_ID);

  const page = getArticlePage(data, slug);

  title = page.properties.Name.title[0].plain_text;
  thumbnailsUrl = page.properties.Cover.files[0].file.url;
  href = page.properties.Link.url;
  author = page.properties.Author.rich_text[0].text.content;
  star = page.properties.Star.number;
  introduction = page.properties.Introduction.rich_text[0].text.content;

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
      star,
      introduction
    }
  };
};
