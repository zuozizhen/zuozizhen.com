import React, { Component } from 'react';

import Link from "next/link";
import { getBooksData } from "@/lib/notion";

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

import BookItem from '@/components/BookItem';

export const booksId = process.env.BOOKS_DATABASE_ID;

export default function Home({ books }) {
  return (
    <Container title="书单 – 左子祯">
      <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-16 w-full">
        <PageTitle title="书单" description="这里记录了我曾经看过的书" />
        {/* <pre>{ JSON.stringify(books, null, 2) }</pre> */}
        <div className="space-y-8">
          {books.map((book) => (
            // <SimpleItem {...book.fields} />
            <BookItem
              key={book.properties.title.title[0].text.content}
              title={`《${book.properties.title.title[0].text.content}》`}
              author={book.properties.author.rich_text[0].text.content}
              thumbnailsUrl={book.properties.cover.files[0].file.url}
              href={book.properties.link.url}
              star={book.properties.star.number}
            />
          ))}
        </div>
      </div>
    </Container>
  );

}

export const getStaticProps = async () => {
  const database = await getBooksData(booksId);

  return {
    props: {
      books: database,
    },
    revalidate: 1,
  };
};