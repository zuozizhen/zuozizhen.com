import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

import ArrowMotion from '@/components/ArrowMotion';
import slugify from 'slugify';
import PageViews from '@/components/PageViews';

const BlogPost = ({ ...post }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);

  return (
    <Link href={`/blog/${slugify(post.properties.Slug.rich_text[0].text.content)}`} passHref>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex justify-between arrow-motion items-center mb-1 hover:text-gray-600 dark:hover:text-gray-500 transition">
            <div className="flex items-center">
              <div>{post.icon ? <span>{post.icon.emoji}</span> : null}</div>
              <h4 className="font-bold">{post.properties.Name.title[0].text.content}</h4>
              <ArrowMotion />
            </div>
            <PageViews slug={post.properties.Slug.rich_text[0].text.content} />
          </div>
          <p className="prose text-gray-600 dark:text-gray-500">{post.properties.Summary.rich_text[0].text.content}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
