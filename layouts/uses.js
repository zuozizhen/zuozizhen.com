import Container from '@/components/Container';
import toolData from '@/data/toolData';
import SimpleItem from '@/components/SimpleItem';
import PageTitle from '@/components/PageTitle';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="我的生产力装备 – 左子祯"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle
          title="我的生产力装备"
          description="这是我目前用于设计、Coding、音乐的装备。其中大部分是在近几年积累的。"
        />
        <div className="prose dark:prose-dark w-full mb-16">{children}</div>
        {/* <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          最近更新
        </h3>
        <div className="space-y-6">
          {toolData.map((d) => (
            <SimpleItem
              key={d.title}
              title={`《${d.title}》`}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              score={d.score}
            />
          ))}
        </div> */}
      </article>
    </Container>
  );
}
