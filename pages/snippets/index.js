import Container from '@/components/Container';
import FunctionCard from '@/components/FunctionCard';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import PageTitle from '@/components/PageTitle';

export default function Snippets({ snippets }) {
  return (
    <Container
      title="Code Snippets – 左子祯"
      description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
    >
      <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-16">
        <PageTitle
          title="Code Snippets"
          description="These are a collection of code snippets I've used in the past and
          saved. Some are Serverless Functions, which include set up
          instructions. Others are anything from random CSS snippets to Node.js
          scripts."
        />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets');

  return { props: { snippets } };
}
