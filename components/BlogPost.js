import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import ArrowMotion from '@/components/ArrowMotion';
import slugify from 'slugify';
import PageViews from '@/components/PageViews';

const BlogPost = ({ title, summary, slug }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex justify-between relative arrow-motion items-center mb-1 hover:text-gray-600 dark:hover:text-gray-500 transition">
            <div className="flex items-center">
              <h4 className="font-bold">{title}</h4>
              <ArrowMotion />
            </div>
            <PageViews slug={slug} />
          </div>
          <p className="prose text-gray-600 dark:text-gray-500">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
