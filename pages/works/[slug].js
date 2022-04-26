import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Container';
import Link from 'next/link';
import { Client } from '@notionhq/client';
import { getFeaturedProjectData, getArticlePage } from "@/lib/notion";

import Image from 'next/image';
import slugify from 'slugify';
import { renderBlocks } from '@/lib/renderBlocks';

export default function BooksPage({
  content,
  title,
  blocks,
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
        <motion.div
          animate={{ y: -20, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 0.6 }}
          className="opacity-0"
        >
          <div className="prose dark:prose-dark max-w-none w-full pt-16">
            {content.map((block) => (
              <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
            ))}
            {console.log(blocks) }
            {/* <pre>{JSON.stringify(content,null,2)}</pre> */}
          </div>
        </motion.div>
      </article>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const paths = [];
  const data = await getFeaturedProjectData(process.env.PROJECT_DATABASE_ID);

  data.forEach((result) => {
    if (result.object === 'page') {
      paths.push({
        params: {
          slug: slugify(result.properties.Slug.rich_text[0].text.content).toLowerCase()
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
  // let thumbnailsUrl = null;
  let url = '';

  const notion = new Client({
    auth: process.env.NOTION_SECRET
  });

  const data = await getFeaturedProjectData(process.env.PROJECT_DATABASE_ID);

  const page = getArticlePage(data, slug);

  title = page.properties.Name.title[0].plain_text;
  // thumbnailsUrl = page.properties.Cover.files[0].file.url;
  url = page.properties.Link.url;


  let blocks = await notion.blocks.children.list({
    block_id: page.id
  });


  content = [...blocks.results];

  while (blocks.has_more) {
    blocks = await notion.blocks.children.list({
      block_id: page.id,
      start_cursor: blocks.next_cursor
    });

    content = [...content, ...blocks.results];
  }

  return {
    props: {
      content,
      title,
      slug,
      blocks,
      // thumbnailsUrl,
      url,
    }
  };
};
