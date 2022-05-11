import React, { Fragment } from 'react';
import Container from '@/components/Container';
import workHistoryData from '@/data/workHistoryData';
import SimpleItem from '@/components/SimpleItem';

import { getPage } from '@/lib/notion';
import { renderBlocks } from '@/lib/renderBlocks';

export default function About({ content }) {
  return (
    <Container title="关于我 – 左子祯" key="about">
      <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16 space-y-6">
        <div className="prose dark:prose-dark mx-auto">
          {content.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
          {/* <pre>{JSON.stringify(content,null,2)}</pre> */}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const data = await getPage(process.env.ABOUT_ME_PAGE_ID);

  return {
    props: {
      content: data
    },
    revalidate: 1800
  };
};
