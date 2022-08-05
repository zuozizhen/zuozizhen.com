import React, { Fragment } from 'react';
import Container from '@/components/Container';
import { getPage } from '@/lib/notion';
import { renderBlocks } from '@/lib/renderBlocks';

export default function Uses({ content }) {
  return (
    <Container title="装备 – 左子祯" key="">
      <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16 space-y-6">
        <div className="prose dark:prose-dark mx-auto">
          {content.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const data = await getPage(process.env.USES_DATABASE_ID);

  return {
    props: {
      content: data
    },
    revalidate: 1800
  };
};
