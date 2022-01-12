import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import workHistoryData from '@/data/workHistoryData';
import SimpleItem from '@/components/SimpleItem';
import CheckList from '@/components/CheckList';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import bucketList from '@/data/bucketList';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <Container title="遗愿清单 – 左子祯" key="about">
      <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16 space-y-6">
        <div className="prose dark:prose-dark mx-auto w-full">
          <div className="space-y-6 mb-16">
            {bucketList.map((d, index) => (
              <CheckList
                key={d.title}
                title={d.title}
                description={d.description}
                index={index + 1}
                checked={d.checked}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
