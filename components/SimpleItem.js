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
  tagGreen,
  tagBlue,
  tagPink,
  tagPurple,
  tagYellow,
  thumbnailsUrl,
  site,
  type,
  className
}) => (
  <div className="flex gap-6 items-center">
    {thumbnailsUrl ? (
      <div className="w-24 h-36 relative flex-shrink-0 rounded-lg shadow-xl">
        <Image
          src={thumbnailsUrl}
          alt="avatar"
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>
    ) : imgSrc ? (
      <div className="w-14 h-14 relative flex-shrink-0 rounded-xl">
        <Image
          src={imgSrc}
          alt="avatar"
          layout="fill"
          className="rounded-xl object-cover"
        />
      </div>
    ) : null}

    <div className="space-y-1">
      <div className="space-y-1">
        <h2 className="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          {site ? (
            <img
              src={`https://api.faviconkit.com/${site}/72`}
              className="w-5 h-5 rounded"
            ></img>
          ) : null}

          <ExternalLink href={href}>{title}</ExternalLink>
        </h2>
        <div className="prose text-gray-600 max-w-none dark:text-gray-500">
          {description}
        </div>
      </div>
      {tagGreen ? (
        <span className="prose font-mono rounded px-3 py-0.5 text-sm font-bold leading-5 tracking-wide dark:text-emerald-400 text-emerald-600 bg-emerald-500 bg-opacity-5 dark:bg-opacity-20 mt-2 inline-block">
          {tagGreen}
        </span>
      ) : null}
      {tagBlue ? (
        <span className="prose font-mono rounded px-3 py-0.5 text-sm font-bold leading-5 tracking-wide dark:text-blue-400 dark:border-blue-400 text-blue-600 bg-blue-500 bg-opacity-5 dark:bg-opacity-20 inline-block">
          {tagBlue}
        </span>
      ) : null}
      {tagPurple ? (
        <span className="prose font-mono rounded px-3 py-0.5 text-sm font-bold leading-5 tracking-wide dark:text-purple-400 dark:border-purple-400 text-purple-600 bg-purple-500 bg-opacity-5 dark:bg-opacity-20 inline-block">
          {tagPurple}
        </span>
      ) : null}
      {tagPink ? (
        <span className="prose font-mono rounded px-3 py-0.5 text-sm font-bold leading-5 tracking-wide dark:text-pink-400 dark:border-pink-400 text-pink-600 bg-pink-500 bg-opacity-5 dark:bg-opacity-20 inline-block">
          {tagPink}
        </span>
      ) : null}
      {tagYellow ? (
        <span className="prose font-mono rounded px-3 py-0.5 text-sm font-bold leading-5 tracking-wide dark:text-yellow-500 dark:border-yellow-400 text-yellow-600 bg-yellow-500 bg-opacity-5 dark:bg-opacity-20 inline-block">
          {tagYellow}
        </span>
      ) : null}
    </div>
  </div>
);

export default SimpleItem;
