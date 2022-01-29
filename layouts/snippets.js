import Image from 'next/image';

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

export default function SnippetLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} - Code Snippet`}
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <PageTitle
            title={frontMatter.title}
            description={frontMatter.description}
          />
          <div className="mt-2 sm:mt-0">
            <Image
              alt={frontMatter.title}
              height={48}
              width={48}
              src={`/logos/${frontMatter.logo}`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
