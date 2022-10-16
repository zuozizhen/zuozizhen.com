import Link from 'next/link';
// import { google } from 'googleapis';

// import googleAuth from '@/lib/google/auth';
import Timeline from '../components/Timeline';
import Container from '../components/Container';
import itemprojects from '@/data/projects';
import Card from '@/components/Card';
import MovieCard from '@/components/MovieCard';
import DesignCard from '@/components/DesignCard';
import BlogPost from '../components/BlogPost';
// import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
import Countdown from 'react-countdown';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import BookItem from '@/components/BookItem';
import { getBooksData } from "@/lib/notion";


import { getAllFilesFrontMatter } from '@/lib/mdx';

export const booksId = process.env.BOOKS_DATABASE_ID;
export const moviesId = process.env.MOVIE_DATABASE_ID;

// const formatter = buildFormatter(frenchStrings);



// import VideoCard from '../components/VideoCard';

// export async function getStaticProps() {
//   const auth = await googleAuth.getClient();
//   const youtube = google.youtube({
//     auth,
//     version: 'v3'
//   });

//   const response = await youtube.videos.list({
//     id: 'nrfuN_Hyd3Y,FytxaSVQROc,u_o09PD_qAs',
//     part: 'snippet,statistics'
//   });

//   return {
//     props: {
//       videos: response.data.items
//     },
//     revalidate: 60 * 60 // 1 hour
//   };
// }


export default function Home({ posts, projects, books, movies }) {
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  const filteredProjectPosts = projects
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4 mb-16">
          <h1 className="font-bold text-2xl md:text-3xl leading-9">
            Hi，我是左子祯
          </h1>
          <p className="leading-9">
            我是一名&nbsp;
            <Link href="/works">
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 border-pink-500 border-b border-dotted no-underline hover:opacity-70">
                产品设计师
              </a>
            </Link>
            &nbsp;、&nbsp;
            <Link href="https://github.com/zuozizhen">
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 border-b border-dotted no-underline border-cyan-500 hover:opacity-70">
                独立开发者
              </a>
            </Link>
            ，曾负责&nbsp;
            <Link href="https://mastergo.com">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-70 text-gray-500">
                MasterGo
              </a>
            </Link>
            &nbsp; 0-1、
            <Link href="https://www.smartisan.com/jianguopro3/os">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-70 text-gray-500">
                Smartisan 7.0
              </a>
            </Link>
            &nbsp;设计系统搭建。你可以在&nbsp;
            <Link href="https://www.xiaohongshu.com/user/profile/5c5f7e25000000001000fc79?xhsshare=CopyLink&appuid=5c5f7e25000000001000fc79&apptime=1648820442">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 border-rose-500 hover:opacity-70">
                小红书
              </a>
            </Link>
            &nbsp;、
            <Link href="https://twitter.com/zuozizhen">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 border-blue-500 hover:opacity-70">
                Twitter
              </a>
            </Link>
            &nbsp;、&nbsp;
            <Link href="/about/wechat">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 border-emerald-500 hover:opacity-70">
                个人公众号
              </a>
            </Link>
            &nbsp;这些平台关注我。或者了解我现在&nbsp;
            <Link href="/now">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 border-indigo-500 hover:opacity-70">
                正在做的事情
              </a>
            </Link>
            &nbsp;和&nbsp;
            <Link href="/about">
              <a className='font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 border-yellow-500 hover:opacity-70'>
                关于我
              </a>
            </Link>
            &nbsp;的更多信息。
          </p>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          最新文章
        </h3>
        <div className="mb-20">
          <div className="mb-4 mt-4">
            {!filteredBlogPosts.length && (
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                没有找到文章
              </p>
            )}
            {filteredBlogPosts.slice(0, 3).map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </div>
          <Link href="/blog">
            <a className='flex gap-1 items-center w-fit font-bold no-underline hover:opacity-70 text-gray-500'>
              查看全部
              <i className="ri-arrow-right-line"></i>
            </a>
          </Link>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          项目
        </h3>
        <div className="mb-20">
          <div className="mb-8 mt-4 gap-8 grid grid-cols-1 sm:grid-cols-2">
            {!filteredProjectPosts.length && (
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                没有找到项目
              </p>
            )}
            {filteredProjectPosts.slice(0, 2).map((frontMatter) => (
              <DesignCard key={frontMatter.title} {...frontMatter} />
            ))}
          </div>
          <Link href="/projects">
            <a className='flex gap-1 items-center w-fit font-bold no-underline hover:opacity-70 text-gray-500'>
              查看全部
              <i className="ri-arrow-right-line"></i>
            </a>
          </Link>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          最近读的书
        </h3>
        <div className="space-y-8 mb-16">
          {/* <pre>{JSON.stringify(books,null, 2) }</pre> */}
          {books.slice(0, 3).map((book) => (
            <BookItem
              key={book.id}
              title={book.properties.Name.title[0].text.content}
              author={book.properties.Author.rich_text[0]?.text.content}
              thumbnailsUrl={book.properties.Cover.files[0]?.external.url}
              // href={`/books/${slugify(book.id)}`}
              href={book.properties.Link.url}
              star={book.properties.Star.number}
              introduction={book.properties.Introduction.rich_text[0]?.text.content}
              slug={book.id}
            />
          ))}
          <Link href="/books">
            <a className='flex gap-1 items-center w-fit font-bold no-underline hover:opacity-70 text-gray-500'>
              查看全部
              <i className="ri-arrow-right-line"></i>
            </a>
          </Link>
        </div>

        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          最近看的影视
        </h3>
        <div className='mb-16'>
          <div className="mb-8 grid grid-cols-1 gap-8">
            {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}
            {movies.slice(0, 3).map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.properties.Name.title[0].text.content}
                introduction={movie.properties.Introduction.rich_text[0]?.text.content}
                author={movie.properties.Author.rich_text[0]?.text.content}
                star={movie.properties.Star.number}
                thumbnailsUrl={movie.properties.Cover.files[0]?.external.url}
                slug={movie.id}
              />
            ))}
          </div>
          <Link href="/movies">
            <a className='flex gap-1 items-center w-fit font-bold no-underline hover:opacity-70 text-gray-500'>
              查看全部
              <i className="ri-arrow-right-line"></i>
            </a>
          </Link>
        </div>
        {/* <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          更多
        </h3>
        <div className="mb-8 mt-4 space-y-8">
          {itemprojects.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              href={d.href}
            />
          ))}
        </div> */}


        {/* <h3 className="font-bold text-2xl md:text-4xl mb-4 mt-12 text-gray-900 dark:text-gray-100">
          Recent Videos
        </h3>
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))} */}
        {/* <Timeline /> */}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  const projects = await getAllFilesFrontMatter('projects');
  const database = await getBooksData(booksId);
  const moviedatabase = await getBooksData(moviesId);

  return {
    props: {
      posts, projects, books: database, movies: moviedatabase
    },
    revalidate: 30,
  };
}
