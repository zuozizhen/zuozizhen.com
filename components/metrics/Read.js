import MetricCard from '@/components/metrics/Card';
import React, { Component } from 'react';
import BookItem from '@/components/BookItem';

export const booksId = process.env.BOOKS_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getBooksData(booksId);

  return {
    props: {
      books: Object.keys(database).length,
    }
  };
};

export default function Read({ books }) {
  return (
    <MetricCard
      header="读了多少本书"
      link={`/book`}
      metric={books}
    />
  );
}
