import { getPublishedArticles } from "@/lib/notion";

import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import PageTitle from '@/components/PageTitle';

export const databaseId = process.env.BLOG_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <Container
      title="文章 – 左子祯"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle
          title="写作"
          textColor="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400"
        >
          自 2017 年以来，我一直在网上写作，主要是关于产品设计和我感兴趣的一些方面。我总共在这个网站上写了
          {posts.length} 篇文章。可以使用下面的搜索按标题过滤。
        </PageTitle>

        <div className="mb-4 mt-4">
          {!posts.length && (
            <p className="text-gray-500 dark:text-gray-500 mb-4">
              没有找到文章
            </p>
          )}
          {posts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
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