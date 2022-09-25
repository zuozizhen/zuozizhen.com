import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ArrowMotion from '@/components/ArrowMotion';

const Card = ({ title, description, imgSrc, coverSrc, href, slug }) => (
  <Link href={`/projects/${slug}`}>
    <a id="design-card" className="space-y-4 items-center rounded-xl h-full">
      <div className="w-full h-48 relative flex-shrink-0">
        <Image
          src={coverSrc}
          alt="avatar"
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>
      <div>
        <div className="flex relative arrow-motion items-center mb-1 hover:text-gray-600 dark:hover:text-gray-500 transition">
          <h4 className="font-bold">{title}</h4>
          <ArrowMotion />
        </div>
        <p className="prose text-gray-600 dark:text-gray-500">{description}</p>
      </div>

    </a>
  </Link>
);

export default Card;
