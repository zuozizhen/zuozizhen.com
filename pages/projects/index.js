import Container from '@/components/Container';
import FunctionCard from '@/components/FunctionCard';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import PageTitle from '@/components/PageTitle';

import otherProjects from '@/data/otherProjects';
import openSource from '@/data/openSource';
import Card from '@/components/Card';
import DesignCard from '@/components/DesignCard';

export default function projects({ projects }) {
  const filteredProjectPosts = projects
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return (
    <Container title="Project">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <PageTitle
          title="工作项目"
          textColor="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
        >
          这里主要是展示了我的一些工作项目和一些业余项目
        </PageTitle>
        <div className="container">
          <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            设计项目
          </h3>
          <div className="mb-8 mt-4 gap-8 grid grid-cols-2">
            {!filteredProjectPosts.length && (
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                没有找到项目
              </p>
            )}
            {filteredProjectPosts.map((frontMatter) => (
              <DesignCard key={frontMatter.title} {...frontMatter} />
            ))}
          </div>

          <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            其它设计案例
          </h3>
          <div className="space-y-8 mb-16">
            {otherProjects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                coverSrc={d.coverSrc}
              />
            ))}
          </div>
          <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            开源项目
          </h3>
          <div className="space-y-8 mb-16">
            {openSource.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects');

  return { props: { projects } };
}
