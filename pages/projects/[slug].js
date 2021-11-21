import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';

import BlogLayout from '@/layouts/blog';
import MDXComponents from '@/components/MDXComponents';

export default function Projects({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents
          // StaticTweet
        }}
      />
    </BlogLayout>
  );
}


export async function getStaticPaths() {
  const projects = await getFiles('projects');

  return {
    paths: projects.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const projects = await getFileBySlug('projects', params.slug);
  // const tweets = await getTweets(post.tweetIDs);

  // return { props: { ...post, tweets } };
  return { props: { ...projects } };
}
