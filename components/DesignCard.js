import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ArrowMotion from '@/components/ArrowMotion';

const Card = ({ title, summary, imgSrc, coverSrc, href, duty }) => (
  <Link href={href}>
    <a id="design-card" className="flex gap-6 items-center rounded-xl">
      <div className="w-full h-80 relative">
        <Image
          src={coverSrc}
          alt="avatar"
          layout="fill"
          className="rounded-xl object-cover transition"
        />
        <div
          id="design-card-title"
          className="absolute left-9 bottom-0 opacity-0"
        >
          <p className="font-bold text-2xl leading-9 text-gray-50">{title}</p>
          <p className="leading-9 text-gray-100">
            {summary}
          </p>
        </div>
      </div>
    </a>
  </Link>
);

export default Card;
