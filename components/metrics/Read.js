import MetricCard from '@/components/metrics/Card';
import React from 'react';
import { getBooksData } from "@/lib/notion";

export const booksId = process.env.BOOKS_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getBooksData(booksId);

  console.log(Object.keys(database));

  return {
    props: {
      books: Object.keys(database).length,
    },
    revalidate: 1,
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
