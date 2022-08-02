import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
import Subscribe from '@/components/Subscribe';
import PageTitle from '@/components/PageTitle';

export default function NewsletterLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – 左子祯`}
      description={frontMatter.summary}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle
          title={frontMatter.title}
        />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              unoptimized={true}
              alt="左子祯"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'左子祯 / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="prose dark:prose-dark w-full">{children}</div>
        <div className="mt-8">
          <Subscribe />
        </div>
      </article>
    </Container>
  );
}
