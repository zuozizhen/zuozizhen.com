import Link from 'next/link';
// import { google } from 'googleapis';

// import googleAuth from '@/lib/google/auth';
import Timeline from '../components/Timeline';
import Container from '../components/Container';
import projects from '@/data/projects';
import Card from '@/components/Card';
import BlogPost from '../components/BlogPost';
import { getPublishedArticles } from "@/lib/notion";
// import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
import Countdown from 'react-countdown';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

// import { getAllFilesFrontMatter } from '@/lib/mdx';

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

export const databaseId = process.env.BLOG_DATABASE_ID;

export default function Home({ posts }) {
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
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 border-b border-dotted no-underline border-pink-500 hover:opacity-50">
                产品设计师
              </a>
            </Link>
            &nbsp;和&nbsp;
            <Link href="https://github.com/zuozizhen">
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 border-b border-dotted no-underline border-cyan-500 hover:opacity-50">
                独立开发者
              </a>
            </Link>
            ，也乐于分享和 &nbsp;
            <Link href="/blog">
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400 border-b border-dotted no-underline border-lime-500 hover:opacity-50">
                写一点东西
              </a>
            </Link>
            。我曾在锤子科技和字节跳动就职，独立开发了&nbsp;
            <Link href="https://figmachina.com">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                FigmaChina
              </a>
            </Link>
            。日常会在&nbsp;
            <Link href="https://www.xiaohongshu.com/user/profile/5c5f7e25000000001000fc79?xhsshare=CopyLink&appuid=5c5f7e25000000001000fc79&apptime=1648820442">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                小红书
              </a>
            </Link>
            &nbsp;上分享我关于产品设计积累的技巧和经验，你也可以关注我的&nbsp;
            <Link href="/about/wechat">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                个人公众号
              </a>
            </Link>
            &nbsp;，会有一些更系统的经验分享。想要随便聊一聊？随时通过邮箱联系我：
            <Link href="mailto:hjsfzzz@gmail.com?subject=你好，左子祯">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                hjsfzzz@gmail.com
              </a>
            </Link>
          </p>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          最近文章
        </h3>
        <div className="mb-20">
          <div className="mb-4 mt-4">
            {!posts.length && (
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                没有找到文章
              </p>
            )}
            {posts.slice(0, 4).map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          项目
        </h3>
        <div className="space-y-8 mb-16">
          {projects.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              summary={d.description}
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

export const getStaticProps = async () => {
  const database = await getPublishedArticles(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
