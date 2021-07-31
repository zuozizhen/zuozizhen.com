import Link from 'next/link';
// import { google } from 'googleapis';

// import googleAuth from '@/lib/google/auth';
import Timeline from '../components/Timeline';
import Container from '../components/Container';
import projects from '@/data/projects';
import Card from '@/components/Card';
import BlogPost from '../components/BlogPost';
// import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
import Countdown from 'react-countdown';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import { getAllFilesFrontMatter } from '@/lib/mdx';

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


export default function Home({ posts }) {
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4 mb-20">
          <p className="font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-100 sm:leading-9">
            Hey，我是左子祯。我是一名&nbsp;
            <a href="/project" className="text-gray-500 hover:text-gray-800 hover:border-b-2 border-gray-800">
              产品设计师
            </a>
            、
            <a
              href="https://github.com/zuozizhen"
              className="text-gray-500 hover:text-gray-800 hover:border-b-2 border-gray-800"
            >
              独立开发者
            </a>
            ，我喜欢&nbsp;
            <a href="/blog" className="text-gray-500 hover:text-gray-800 hover:border-b-2 border-gray-800">
              写文章
            </a>
            ，目前是&nbsp;
            <a
              href="https://mastergo.com/"
              className="text-gray-500 hover:text-gray-800 hover:border-b-2 border-gray-800"
            >
              Master 的产品设计负责人
            </a>
          </p>
          <p className="font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-100 sm:leading-9">
            之前我曾在锤子科技和字节跳动就职，专注协作工具类产品的竞争力提升与极致的用户体验。
            &nbsp;
          </p>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          最近更新
        </h3>
        <div className="mb-20">
          <div className="mb-4 mt-4">
            {!filteredBlogPosts.length && (
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                没有找到文章
              </p>
            )}
            {filteredBlogPosts.slice(0, 4).map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </div>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          精选项目
        </h3>
        <div className="space-y-8 mb-20">
          {projects.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              href={d.href}
            />
          ))}
        </div>

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

  return { props: { posts } };
}