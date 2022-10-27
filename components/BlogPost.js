import Link from 'next/link';

import ArrowMotion from '@/components/ArrowMotion';
import PageViews from '@/components/PageViews';

const BlogPost = ({ title, summary, slug }) => {

  return (
    <Link className="w-full" href={`/blog/${slug}`}>
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
    </Link>
  );
};

export default BlogPost;
