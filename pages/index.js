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
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 border-pink-500 border-b border-dotted no-underline hover:opacity-50">
                产品设计师
              </a>
            </Link>
            &nbsp;和&nbsp;
            <Link href="https://github.com/zuozizhen">
              <a className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 border-b border-dotted no-underline border-cyan-500 hover:opacity-50">
                成长中的独立开发者
              </a>
            </Link>
            ，日常工作主要是与产品、设计和用户体验相关，也会为初创公司提供专业的设计咨询和建议。我曾在锤子科技和字节跳动负责设计系统的搭建维护，也曾是&nbsp;
            <Link href="https://mastergo.com">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 border-indigo-500 hover:opacity-50">
                MasterGo
              </a>
            </Link>
            &nbsp; 0-1 的产品设计负责人。业余曾独立开发了&nbsp;
            <Link href="https://figmachina.com">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 border-yellow-500 hover:opacity-50">
                FigmaChina
              </a>
            </Link>
            &nbsp;，是国内最早推广 Figma 的中文网之一。我会在&nbsp;
            <Link href="https://www.xiaohongshu.com/user/profile/5c5f7e25000000001000fc79?xhsshare=CopyLink&appuid=5c5f7e25000000001000fc79&apptime=1648820442">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 border-rose-500 hover:opacity-50">
                小红书
              </a>
            </Link>
            &nbsp;上分享一些产品设计的技巧和经验，也欢迎关注我的&nbsp;
            <Link href="https://twitter.com/zuozizhen">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 border-blue-500 hover:opacity-50">
                Twitter
              </a>
            </Link>
            &nbsp;或&nbsp;
            <Link href="/about/wechat">
              <a className="font-bold border-b border-dotted no-underline text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 border-emerald-500 hover:opacity-50">
                个人公众号
              </a>
            </Link>
            &nbsp;了解最近我在做什么。通过邮箱可随时联系我：
            <Link href="mailto:hjsfzzz@gmail.com?subject=你好，左子祯">
              <a className="font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-50 text-gray-500">
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
