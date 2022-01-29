import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import workHistoryData from '@/data/workHistoryData';
import SimpleItem from '@/components/SimpleItem';
import CheckList from '@/components/CheckList';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { getBucketListData } from "@/lib/notion";


import bucketList from '@/data/bucketList';

import { motion } from 'framer-motion';

export const bucketListId = process.env.BUCKET_LIST_DATABASE_ID;

export default function About({ bucketList }) {
  return (
    <Container title="遗愿清单 – 左子祯" key="about">
      <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16 space-y-6">
        <div className="prose dark:prose-dark mx-auto w-full">
          <div className="space-y-6 mb-16">
            {/* <pre>{JSON.stringify(bucketList,null, 2) }</pre> */}
            {bucketList.map((item, index) => (
              <CheckList
                key={item.properties.Name.title[0].text.content}
                title={item.properties.Name.title[0].text.content}
                summary={item.properties.Summary?.rich_text[0]?.plain_text}
                index={index + 1}
                checked={item.properties.Done.checkbox}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const database = await getBucketListData(bucketListId);

  return {
    props: {
      bucketList: database,
    },
    revalidate: 1,
  };
};