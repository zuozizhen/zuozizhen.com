import Link from 'next/link';
import Image from 'next/image';
import ExternalLink from '@/components/ExternalLink';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import slugify from 'slugify';
import 'remixicon/fonts/remixicon.css'

const BookItem = ({
  href,
  title,
  author,
  imgSrc,
  star,
  thumbnailsUrl,
  site,
  introduction,
  slug
}) => (
  <div className="flex gap-6">
    <div className="h-56 aspect-[7/10] relative rounded-lg shadow-xl">
      <Link href={`/books/${slugify(slug)}`} passHref>
        <a>
          <Image
            src={thumbnailsUrl}
            alt="cover"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </a>
      </Link>
    </div>
    <div className="flex flex-col justify-between py-1">
      <div className='space-y-1 mb-3'>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white dark:hover:text-gray-300">
          <Link href={`/books/${slugify(slug)}`} passHref>{title}</Link>
        </h2>
        <div className='flex gap-2 items-center text-gray-600 dark:text-gray-500'>
            <div className="text-xs font-semibold  max-w-none ">
              {author}
            </div>
            ·
            <div className='flex text-xs font-semibold  max-w-none'>
              我的推荐程度：
              <div className='flex items-center'>
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
        <div className='text-sm text-gray-900 dark:text-gray-200 leading-6 pt-1'>
          {introduction}
        </div>
      </div>
      <div className='flex gap-6'>
        {/* <Link href={`/books/${slugify(slug)}`} passHref>
          <a className='text-sm font-bold text-gray-600 dark:text-gray-500'>
            阅读我的笔记
          </a>
        </Link> */}
        <Link href={href} passHref>
          <a className='text-sm font-bold border-b border-dotted no-underline border-gray-500 hover:opacity-70 text-gray-500' target="_blank" >
            豆瓣链接
          </a>
        </Link>
      </div>



    </div>
  </div>
);

export default BookItem;
