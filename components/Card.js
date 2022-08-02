import Link from 'next/link';
import Image from 'next/image';

import ArrowMotion from '@/components/ArrowMotion';

const Card = ({ title, summary, imgSrc, coverSrc, href }) => (
  <Link href={href} className="h-full block">
    <a className="flex gap-6 items-center">
      {coverSrc ? (
        <div className="w-72 h-48 relative shrink-0">
          <Image
            unoptimized
            src={coverSrc}
            alt="avatar"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>
      ) : null}
      {imgSrc ? (
        <div className="w-16 h-16 relative shrink-0">
          <Image
            unoptimized
            src={imgSrc}
            alt="avatar"
            layout="fill"
            className="rounded-xl object-cover"
          />
        </div>
      ) : null}

      <div>
        <div className="flex relative arrow-motion items-center mb-1 hover:text-gray-600 dark:hover:text-gray-500 transition">
          <h4 className="font-bold">{title}</h4>
          <ArrowMotion/>
        </div>
        <p className="prose text-gray-600 dark:text-gray-500">{summary}</p>
      </div>
    </a>
  </Link>
);

export default Card;
