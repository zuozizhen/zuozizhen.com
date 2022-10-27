import Link from 'next/link';
import Image from 'next/image';

import ArrowMotion from '@/components/ArrowMotion';

const Card = ({ title, description, imgSrc, coverSrc, href }) => (
  <Link href={href} className="h-full block flex gap-6 items-center">
      {coverSrc ? (
        <div className="w-72 h-48 relative flex-shrink-0">
          <Image
            src={coverSrc}
            alt="avatar"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      ) : null}
      {imgSrc ? (
        <div className="w-16 h-16 relative flex-shrink-0">
          <Image
            src={imgSrc}
            alt="avatar"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      ) : null}

      <div>
        <div className="flex relative arrow-motion items-center mb-1 hover:text-gray-600 dark:hover:text-gray-500 transition">
          <h4 className="font-bold">{title}</h4>
          <ArrowMotion/>
        </div>
        <p className="prose text-gray-600 dark:text-gray-500">{description}</p>
      </div>
  </Link>
);

export default Card;
