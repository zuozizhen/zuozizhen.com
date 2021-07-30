import Link from 'next/link';

// import fetcher from '@/lib/fetcher';

const BlogPost = ({ title, summary, slug }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex relative arrow-motion items-center mb-1">
            <h4 className="font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <div id="cta">
              <span className="arrow primera next">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8129 6.58315L5.05355 1.19991C4.9346 1.08872 4.74867 1.09272 4.6346 1.20892L4.21535 1.63604C4.09728 1.75633 4.10145 1.95026 4.22459 2.06536L9.51469 7.01L4.2259 11.9334C4.10253 12.0483 4.09796 12.2422 4.21579 12.3627L4.63414 12.7907C4.74797 12.9071 4.93389 12.9115 5.05307 12.8005L10.812 7.43941C10.9319 7.32779 10.9998 7.17318 11 7.01147C11.0002 6.84975 10.9326 6.69501 10.8129 6.58315Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="arrow segunda next">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8129 6.58315L5.05355 1.19991C4.9346 1.08872 4.74867 1.09272 4.6346 1.20892L4.21535 1.63604C4.09728 1.75633 4.10145 1.95026 4.22459 2.06536L9.51469 7.01L4.2259 11.9334C4.10253 12.0483 4.09796 12.2422 4.21579 12.3627L4.63414 12.7907C4.74797 12.9071 4.93389 12.9115 5.05307 12.8005L10.812 7.43941C10.9319 7.32779 10.9998 7.17318 11 7.01147C11.0002 6.84975 10.9326 6.69501 10.8129 6.58315Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
            {/* <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </p> */}
          </div>
          <p className="prose text-gray-500 dark:text-gray-500">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
