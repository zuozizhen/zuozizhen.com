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
        <div className="space-y-4 mb-16">
          <h1 className="font-bold text-2xl md:text-3xl leading-9">
            Hey，我是左子祯
          </h1>
          <p className="leading-9">
            我是一名&nbsp;
            <Link href="/project">
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 border-b border-dotted no-underline border-pink-500 hover:opacity-50">
                产品设计师
              </a>
            </Link>
            、
            <Link href="https://github.com/zuozizhen">
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400  to-blue-500 border-b border-dotted no-underline border-cyan-500 hover:opacity-50">
                独立开发者
              </a>
            </Link>
            ，偶尔会&nbsp;
            <Link href="/blog">
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400 border-b border-dotted no-underline border-lime-500 hover:opacity-50">
                写一点东西
              </a>
            </Link>
            ，目前是&nbsp;
            <Link href="https://mastergo.com/">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                MasterGo
              </a>
            </Link>
            &nbsp;的产品设计负责人，曾在锤子科技和字节跳动就职，你可以在&nbsp;
            <Link href="https://zhihu.com/people/ZiJen">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                知乎
              </a>
            </Link>
            &nbsp;或&nbsp;
            <Link href="https://www.linkedin.com/in/zuozizhen">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                领英
              </a>
            </Link>
            &nbsp;上找到我，或者关注我的&nbsp;
            <Link href="/about/wechat">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                个人公众号
              </a>
            </Link>
            &nbsp;，想要随便聊一聊？通过邮箱联系我：
            <Link href="mailto:hjsfzzz@gmail.com?subject=你好，左子祯">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50">
                hjsfzzz@gmail.com
              </a>
            </Link>
          </p>
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          文章
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
          项目
        </h3>
        <div className="space-y-8 mb-16">
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