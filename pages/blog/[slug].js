// import { ButtonType, PageType, SubscribeSize } from '@/lib/types';
import { Fragment, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { motion } from 'framer-motion';
import {
  getArticlePage,
  getMoreArticlesToSuggest,
  getPublishedArticles
} from '@/lib/notion';

import { Ad } from '@/components/Ad';
import Container from '@/components/Container';
import { Callout } from '@/components/blocks/Callout';
import { Client } from '@notionhq/client';
import { CodeBlock } from '@/components/blocks/Codeblock';
// import Image from 'next/image';
import PageViews from '@/components/PageViews';
import Reactions from '@/components/Reactions';
import { ShareArticle } from '@/components/ShareArticle';
// import { Subscribe } from '@/components/Subscribe';
import generateSocialImage from '@/lib/generateSocialImage';
// import { getTwitterProfilePicture } from '@/lib/twitter';
import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';
import { renderBlocks } from '@/lib/renderBlocks';

import { useRouter } from 'next/router';

const ArticlePage = ({
  content,
  title,
  coverImage,
  slug,
  publishedDate,
  lastEditedAt,
  sponsoredArticleUrl,
  summary,
  moreArticles
}) => {
  const { push } = useRouter();

  // const socialImageConf = generateSocialImage({
  //   title,
  //   underlayImage: coverImage.slice(coverImage.lastIndexOf('/') + 1),
  //   cloudName: 'zuozizhen',
  //   imagePublicID: 'og_social_large.png'
  // });

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    });
  }, [slug]);

  return (
     <Container
      title={`${title} - 左子祯`}
      description={summary}
      // imageUrl={socialImageConf}
      date={new Date(publishedDate).toISOString()}
      sponsoredArticle={sponsoredArticleUrl !== null}
      sponsoredUrl={sponsoredArticleUrl}
     >
      <article className="flex flex-col justify-center items-start mx-auto mb-16 max-w-2xl">
        <h1 className="font-bold text-2xl md:text-4xl mb-4 text-gray-900 dark:text-gray-100 md:leading-snug w-full mx-auto">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center  mt-2 w-full mx-auto">
          <div className="flex items-center">
            <img src="https://imagedelivery.net/8B08sdLvw783CQcaKhUoYw/b84f94b6-f181-46a3-14ea-105697359800/public" alt="左子祯" className="rounded-full h-6 w-6" />
            {/* <Image
              alt="左子祯"
              height={24}
              width={24}
              src="https://imagedelivery.net/8B08sdLvw783CQcaKhUoYw/b84f94b6-f181-46a3-14ea-105697359800/public"
              className="rounded-full"
            /> */}
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {'左子祯 / '}
              {format(parseISO(publishedDate), 'yyyy.MM.dd')}
            </p>
          </div>

            <div className="md:hidden">
              <Reactions slug={slug} />
            </div>
            {/* <Subscribe size={SubscribeSize.LARGE} /> */}
            {/* Link to sponsor if applicable */}
            {sponsoredArticleUrl && (
              <Callout>
                <span>📣</span>
                <div>
                  <span>
                    此文章由{' '}
                    <a
                      target="_blank"
                      href={sponsoredArticleUrl}
                      rel="noreferrer"
                    >
                      赞助
                    </a>
                    .
                  </span>
                </div>
              </Callout>
            )}
            {/* <div className="flex items-center justify-between space-x-4">
                <ShareArticle title={title} slug={slug} />
            </div> */}
        </div>
        <motion.div
          animate={{ y: -20, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, duration: 0.6 }}
          className="opacity-0"
        >
          <div className="prose dark:prose-dark max-w-none w-full pt-16">
            {coverImage ? (
              //  <img src="https://imagedelivery.net/8B08sdLvw783CQcaKhUoYw/b84f94b6-f181-46a3-14ea-105697359800/public" alt="左子祯" className="rounded-full h-6 w-6" />
              // <Image
              //   alt={'article cover'}
              //   src={coverImage}
              //   width={1501 / 2}
              //   height={712 / 2}
              //   className=""
              //   priority
              // />
            ) : null}

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
  const data  = await getPublishedArticles(process.env.BLOG_DATABASE_ID);

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
  let articleTitle = '';
  let publishedDate = null;
  let lastEditedAt = null;
  let coverImage = null;
  let sponsoredArticleUrl = null;
  let summary = null;

  // const profilePicture = await getTwitterProfilePicture();

  const notion = new Client({
    auth: process.env.NOTION_SECRET
  });

  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);

  const page = getArticlePage(data, slug);

  articleTitle = page.properties.Name.title[0].plain_text;
  publishedDate = page.properties.Published.date.start;
  // lastEditedAt = page.properties.LastEdited.last_edited_time;
  // sponsoredArticleUrl = page.properties.canonicalUrl?.url;
  summary = page.properties.Summary?.rich_text[0]?.plain_text;
  coverImage =
    page.properties.Cover?.files[0]?.file?.url ||
    page.properties.Cover?.files[0]?.external?.url ||
    null;

  const moreArticles = await getMoreArticlesToSuggest(
    process.env.BLOG_DATABASE_ID,
    articleTitle
  );

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
      title: articleTitle,
      publishedDate,
      // lastEditedAt,
      slug,
      // profilePicture,last_edited_time
      coverImage,
      summary,
      moreArticles,
      // sponsoredArticleUrl
    },
    revalidate: 30
  };
};

export default ArticlePage;
