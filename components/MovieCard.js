import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import ArrowMotion from '@/components/ArrowMotion';

const Card = ({ title, star, author, thumbnailsUrl, href, slug }) => (
  <Link href={`/`}>
    <a id="design-card" className="space-y-4 items-center rounded-xl h-full">
      <div className="w-full h-72 relative flex-shrink-0">
        <Image
          src={thumbnailsUrl}
          alt="avatar"
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>
      <div className='items-center space-y-2'>
        <div className="flex relative arrow-motion items-center hover:text-gray-600 dark:hover:text-gray-500 transition">
          <h4 className="font-bold">{title}</h4>
          <ArrowMotion />
        </div>
        <div className='flex text-xs font-semibold  max-w-none text-gray-600 dark:text-gray-500'>
          我的推荐程度：
          <div className='flex items-center'>
            {
              Array(star).fill('0').map((index) => (
                // <SimpleItem {...book.fields} />
                <i key={Math.random()} className="ri-star-s-fill text-yellow-400"></i>
              ))}
            {
              Array(5 - star).fill('0').map((index) => (
                // <SimpleItem {...book.fields} />
                <i key={Math.random()} className="ri-star-s-fill text-gray-700"></i>
              ))}
          </div>
        </div>
      </div>
    </a>
  </Link>
);

export default Card;
