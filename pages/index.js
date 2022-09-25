import Link from 'next/link';
// import { google } from 'googleapis';

// import googleAuth from '@/lib/google/auth';
import Timeline from '../components/Timeline';
import Container from '../components/Container';
// import projects from '@/data/projects';
import Card from '@/components/Card';
import DesignCard from '@/components/DesignCard';
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


export default function Home({ posts, projects }) {
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
        <div className='flex items-center justify-between mb-8'>
          <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100">
            最新文章
          </h3>
          <Link href="/blog">
            <a className='font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-70 text-gray-500'>
              查看全部
            </a>
          </Link>
        </div>
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
          项目
        </h3>
        <div className="mb-20">
          <div className="mb-4 mt-4">
            {!filteredProjectPosts.length && (
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                没有找到文章
              </p>
            )}
            {filteredProjectPosts.slice(0, 4).map((frontMatter) => (
              <DesignCard key={frontMatter.title} {...frontMatter} />
            ))}
          </div>
        </div>
        <div className="space-y-8 mb-16">
          {/* {projects.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              href={d.href}
            />
          ))} */}
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
  const projects = await getAllFilesFrontMatter('projects');

  return { props: { posts, projects } };
}
