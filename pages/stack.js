import React, { Component } from 'react';

import Link from "next/link";
import { getStackData } from "@/lib/notion";

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

import SimpleItem from '@/components/SimpleItem';

export const stackId = process.env.STACK_DATABASE_ID;

export default function Home({ stacks }) {
  return (
    <Container title="我的工具栈 – 左子祯">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle title="我的工具栈" description="" />
        {/* <pre>{ JSON.stringify(books, null, 2) }</pre> */}
        <div className="space-y-8">
          {stacks.map((stack) => (
            // <SimpleItem {...stack.fields} />
            <SimpleItem
              key={stack.properties.Name.title[0].text.content}
              title={stack.properties.Name.title[0].text.content}
              summary={stack.properties.Summary?.rich_text[0]?.plain_text}
              imgSrc={stack.properties.Logo.files[0].file.url}
              href={stack.properties.Link.url}
            />
          ))}
        </div>
      </div>
    </Container>
  );

}

export const getStaticProps = async () => {
  const database = await getStackData(stackId);

  return {
    props: {
      stacks: database,
    },
    revalidate: 1,
  };
};