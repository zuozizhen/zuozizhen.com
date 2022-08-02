import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ArrowMotion from '@/components/ArrowMotion';

const Card = ({ title, summary, imgSrc, coverSrc, href, duty }) => (
  <Link href={href}>
    <a id="design-card" className="flex gap-6 items-center rounded-xl w-full">
      <div className="w-full aspect-[1.64/1] relative">
        <Image
          unoptimized
          src={coverSrc}
          alt="avatar"
          layout="fill"
          className="rounded-xl object-cover transition w-full"
        />
      </div>
    </a>
  </Link>
);

export default Card;
