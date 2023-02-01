import React, { Fragment } from 'react';

import { renderBlocks } from '@/lib/renderBlocks';

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';
import { getPage } from '@/lib/notion';

export default function Dashboard({ content }) {
  return (
    <Container
      title="微信公众号"
      description="扫码添加我的微信公众号"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">

        <div className="prose dark:prose-dark max-w-none mx-auto w-full">
          <img src="https://imagedelivery.net/8B08sdLvw783CQcaKhUoYw/7ea8e596-ee1f-42cd-2c3e-60748825b500/public" alt="wechat" className='w-36 h-36' />
        </div>

      </div>
    </Container>
  );
}
