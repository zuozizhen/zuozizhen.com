import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import UsesLayout from '@/layouts/uses';

export default function Uses({ mdxSource, frontMatter }) {
  return (
    <UsesLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </UsesLayout>
  );
}

export async function getStaticProps() {
  const about = await getFileBySlug('about');

  return { props: about };
}
