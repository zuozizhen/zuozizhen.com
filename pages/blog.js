import Link from "next/link";
import { getDatabase } from "@/lib/notion.js";

import Container from '@/components/Container';
// import BlogPost from '@/components/BlogPost';
import PageTitle from '@/components/PageTitle';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <Container
      title="文章 – 左子祯"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-16 w-full">
        <PageTitle
          title="写作"
          textColor="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400"
        >
          自 2017
          年以来，我一直在网上写作，主要是关于产品设计和我感兴趣的一些方面。我总共在这个网站上写了
          {posts.length} 篇文章。可以使用下面的搜索按标题过滤。
        </PageTitle>
        <div className="mb-4 mt-4">
          {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.properties.slug.rich_text[0].text.content}`} passHref>
            <div className="border-none rounded cursor-pointer -mx-2 mb-2 p-2 hover:bg-light-200 hover:opacity-80 dark:hover:bg-dark-700">
              <h2 className="flex space-x-2 text-lg mb-2 justify-between heading-text">
                <span>{post.properties.title.title[0].text.content}</span>
                { post.icon ? <span>{post.icon.emoji}</span> : null }
              </h2>

              <p className="text-sm primary-text">{post.properties.summary.rich_text[0].text.content}</p>

              <div className="flex flex-wrap space-x-2 text-sm secondary-text items-center">
                <span>{post.properties.date.date.start}</span>
                <span>·</span>
                <span>·</span>
                {post.properties.tags.multi_select.map((tag) => (
                  <span>{tag.name.toLowerCase()}</span>
                ))}

              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </Container>
  );

}

export const getStaticProps = async () => {
  const database = await getBlogDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};