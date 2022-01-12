import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="我的生产力装备 – 左子祯"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="flex flex-col justify-center items-start max-w-xl mx-auto mb-16 w-full">
        <PageTitle
          title="我的生产力装备"
          description="这是我目前用于设计、Coding、音乐的装备。其中大部分是在近几年积累的。"
        />
        <div className="prose dark:prose-dark w-full mb-16">{children}</div>
      </article>
    </Container>
  );
}
