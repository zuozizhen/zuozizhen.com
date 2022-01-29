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
    <div className="aspect-[7/10] relative rounded-lg shadow-xl">
      <Image
        src={thumbnailsUrl}
        alt="avatar"
        layout="fill"
        className="rounded-lg object-cover"
      />
    </div>
    <div className="space-y-1">
      <h2 className="font-bold text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
        <Link href={href} passHref>{title}</Link>
      </h2>
      <div className="text-xs font-semibold text-gray-600 max-w-none dark:text-gray-500">
        {author}
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
