import Link from 'next/link';
import Image from 'next/image';

import ArrowMotion from '@/components/ArrowMotion';

const Card = ({ title, description, imgSrc, coverSrc, href }) => (
  <Link href={href} className="rounded-xl h-full block">
    <a className="flex gap-6 items-center">
      {coverSrc ? (
        <div className="w-52 h-36 relative flex-shrink-0">
          <Image
            src={coverSrc}
            alt="avatar"
            layout="fill"
            className="rounded-xl object-cover"
          />
        </div>
      ) : null}
      {imgSrc ? (
        <div className="w-16 h-16 relative flex-shrink-0">
          <Image
            src={imgSrc}
            alt="avatar"
            layout="fill"
            className="rounded-xl object-cover"
          />
        </div>
      ) : null}

      <div>
        <div className="flex relative arrow-motion items-center mb-1">
          <h4 className="font-medium text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            {title}
          </h4>
          <ArrowMotion />
        </div>
        <p className="prose text-gray-500 dark:text-gray-500">{description}</p>
      </div>
    </a>
  </Link>
);

export default Card;
