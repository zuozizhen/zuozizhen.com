import React, { Component } from 'react';
import Container from '@/components/Container';
import SimpleItem from '@/components/SimpleItem';
import PageTitle from '@/components/PageTitle';

import { Client } from "@notionhq/client"

const Books = ({ books }) => {
  return (
    <Container title="书单 – 左子祯">
      <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-16 w-full">
        <PageTitle title="书单" description="这里记录了我曾经看过的书" />
        <div className="space-y-8">
          {books.map((book) => (
            // <SimpleItem {...book.fields} />
            <SimpleItem
              key={book.title}
              title={`《${book.title}》`}
              description={book.description}
              thumbnailsUrl={book.coverUrl}
              href={book.url}
              tagGreen={book.score}
            />
          ))}
        </div>
      </div>
    </Container>
  )
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });
  const data = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
    filter: {
      property: "Read",
      checkbox: {
        equals: false,
      },
    },
  });

  const books = data.results.map((movie) => ({
    id: movie.id,
    title: movie.properties.Title.title[0].plain_text,
    description: movie.properties.Description.rich_text[0].plain_text,
    score: movie.properties.Score.number,
    url: movie.properties.Url.rich_text[0].plain_text,
    coverUrl: movie.properties.Cover.files[0].file.url,
  }));

  return {
    props: {
      books,
    }
  }
}

export default Books;