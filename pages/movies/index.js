import React from 'react';

import { getBooksData } from "@/lib/notion";

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

import MovieCard from '@/components/MovieCard';
import slugify from 'slugify';

export const movieId = process.env.MOVIE_DATABASE_ID;

export const getStaticProps = async () => {
  const database = await getBooksData(movieId);

  return {
    props: {
      movies: database,
    },
    revalidate: 1,
  };
};

export default function Home({ movies }) {
  return (
    <Container title="电影 – 左子祯">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle title="我看过的影视" description="这里会不断更新我看的电影。" />
        {/* <pre>{ JSON.stringify(books, null, 2) }</pre> */}
        <div className="mb-16 grid grid-cols-3 gap-8">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.properties.Name.title[0].text.content}
              introduction={movie.properties.Introduction.rich_text[0]?.text.content}
              author={movie.properties.Author.rich_text[0]?.text.content}
              star={movie.properties.Star.number}
              thumbnailsUrl={movie.properties.Cover.files[0].file.url}
            />
          ))}
        </div>
      </div>
    </Container>
  );

}
