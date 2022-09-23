import Link from 'next/link';
import useSWR from 'swr';

import ArrowMotion from '@/components/ArrowMotion';

const BlogPost = ({ title, summary, slug }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex relative arrow-motion items-center mb-1 hover:text-gray-600 dark:hover:text-gray-500 transition">
            <h4 className="font-bold">{title}</h4>
            <ArrowMotion />
            {/* <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </p> */}
          </div>
          <p className="prose text-gray-600 dark:text-gray-500">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
