import React, { Fragment } from 'react';


import NowPlaying from '@/components/NowPlaying';
// import Buttondown from '@/components/metrics/Buttondown';
import { renderBlocks } from '@/lib/renderBlocks';

import Container from '@/components/Container';
import GitHub from '@/components/metrics/Github';
import YouTube from '@/components/metrics/Youtube';
import TopTracks from '@/components/TopTracks';
import PageTitle from '@/components/PageTitle';
import { getPage } from '@/lib/notion';

export default function Dashboard({ content }) {
  return (
    <Container
      title="此刻 – 左子祯"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle
          title="我现在在做什么"
          description="这里是我正在做的事情和一些近期的计划"
        />

        <div className="prose dark:prose-dark max-w-none mx-auto w-full">
          {content.map((block) => (
            <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
          ))}
        </div>

      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const data = await getPage(process.env.NOW_PAGE_ID);

  return {
    props: {
      content: data
    },
    revalidate: 1
  };
};
