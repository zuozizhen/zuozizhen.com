import Link from 'next/link';
import Image from 'next/image';
import ExternalLink from '@/components/ExternalLink';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const SimpleItem = ({
  href,
  date,
  title,
  description,
  imgSrc,
  score,
  tag,
  type,
  className
}) => (
  <div className="flex gap-8 items-center">
    {score ? (
      <div className="w-24 h-36 relative flex-shrink-0">
        <Image
          src={imgSrc}
          alt="avatar"
          layout="fill"
          className="rounded-xl object-cover"
        />
      </div>
    ) : imgSrc ? (
      <div className="w-16 h-16 relative flex-shrink-0">
        <Image
          src={imgSrc}
          alt="avatar"
          layout="fill"
          className="rounded-xl object-cover"
        />
      </div>
    ) : null}

    <div className="space-y-1">
      <div className="space-y-1 mb-2">
        <h2 className="font-medium text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          <ExternalLink href="https://zhihu.com/people/ZiJen">
            {title}
          </ExternalLink>
        </h2>
        <div className="prose text-gray-500 max-w-none dark:text-gray-500">
          {description}
        </div>
      </div>
      {score ? (
        <span className="prose font-mono rounded px-3 py-0.5 text-sm font-semibold leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
          {score}
        </span>
      ) : null}
      {tag ? (
        <div className="flex gap-2">
          <div className="self-start rounded px-3 py-0.5 text-sm font-semibold leading-5 tracking-wide dark:text-purple-400 dark:border-purple-400 text-purple-600 bg-purple-500 bg-opacity-5 dark:bg-opacity-20">
            独立开发
          </div>
          <div className="self-start rounded px-3 py-0.5 text-sm font-semibold leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
            开源
          </div>
        </div>
      ) : null}
    </div>
  </div>
);

export default SimpleItem;
