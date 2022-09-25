import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

export default function UsesLayout({ frontMatter, children }) {
  return (
    <Container
      title={frontMatter.title}
      description={frontMatter.description}
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle
          title={frontMatter.title}
          description={frontMatter.description}
        />
        <div className="prose dark:prose-dark w-full mb-16">{children}</div>
      </article>
    </Container>
  );
}
