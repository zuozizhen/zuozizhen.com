import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import SnippetLayout from '@/layouts/snippets';

export default function Snippet({ mdxSource, frontMatter }) {
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </SnippetLayout>
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
  const snippet = await getFileBySlug('projects', params.slug);

  return { props: snippet };
}
