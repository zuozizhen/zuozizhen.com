import React from 'react';
import { getPersonalWebsiteBookmarksData } from "@/lib/notion";

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

import SimpleItem from '@/components/SimpleItem';
import Tabs from '@/components/Tabs';

export const bookmarksId = process.env.BOOKMARKS_DATABASE_ID;

export default function Home({ bookmarks }) {
  return (
    <Container title="书签 – 左子祯">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle title="书签" description="" />
        {/* <pre>{ JSON.stringify(books, null, 2) }</pre> */}
        <Tabs />
        <div className="space-y-8">
          {bookmarks.map((bookmark) => (
            <SimpleItem
              key={bookmark.properties.Name?.title[0].text.content}
              title={bookmark.properties.Name?.title[0].text.content}
              summary={bookmark.properties.Summary?.rich_text[0]?.plain_text}
              href={bookmark.properties.Link?.url}
            />
          ))}
        </div>
      </div>
    </Container>
  );

}

export const getStaticProps = async () => {
  const database = await getPersonalWebsiteBookmarksData(bookmarksId);

  return {
    props: {
      bookmarks: database,
    },
    revalidate: 1,
  };
};
