import React from 'react';

import { getBooksData } from "@/lib/notion";

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

import BookItem from '@/components/BookItem';
import slugify from 'slugify';

export const booksId = process.env.BOOKS_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getBooksData(booksId);

  return {
    props: {
      books: database,
    }
  };
};

export default function Home({ books }) {
  return (
    <Container title="书单 – 左子祯">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle title="书单" description="这里记录了我曾经看过的书" />
        {/* <pre>{ JSON.stringify(books, null, 2) }</pre> */}
        <div className="grid grid-cols-3 gap-10">
          {books.map((book) => (
            <BookItem
              key={book.properties.Name.title[0].text.content}
              title={book.properties.Name.title[0].text.content}
              author={book.properties.Author.rich_text[0]?.text.content}
              thumbnailsUrl={book.properties.Cover.files[0].file.url}
              // href={`/books/${slugify(book.id)}`}
              href={book.properties.Link.url}
              star={book.properties.Star.number}
            />
          ))}
        </div>
      </div>
    </Container>
  );

}