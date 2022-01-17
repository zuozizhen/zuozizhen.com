import Link from 'next/link';
import Image from 'next/image';
import ExternalLink from '@/components/ExternalLink';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import 'remixicon/fonts/remixicon.css'

const BookItem = ({
  href,
  title,
  author,
  imgSrc,
  star,
  thumbnailsUrl,
  site,
}) => (
  <div className="space-y-3 items-center">
    <div className="w-44 h-64 relative shrink-0 rounded-lg shadow-xl">
      <Image
        src={thumbnailsUrl}
        alt="avatar"
        layout="fill"
        className="rounded-lg object-cover"
      />
    </div>
    <div className="space-y-1">
      <div className="space-y-1">
        <h2 className="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
          {site ? (
            <img
              src={`https://www.google.com/s2/favicons?sz=128&domain_url=${site}`}
              className="w-5 h-5 rounded"
            ></img>
          ) : null}
          <ExternalLink href={href}>{title}</ExternalLink>
        </h2>
        <div className="prose text-gray-600 max-w-none dark:text-gray-500">
          {author}
        </div>
      </div>
      <div>
        {
          Array(star).fill('0').map((index) => (
          // <SimpleItem {...book.fields} />
            <i key={index} className="ri-star-s-fill text-yellow-400"></i>
        ))}
        {
          Array(5 - star).fill('0').map((index) => (
            // <SimpleItem {...book.fields} />
            <i key={index} className="ri-star-s-fill text-gray-700"></i>
        ))}
      </div>



    </div>
  </div>
);

export default BookItem;
