import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function Tabs() {

  const tabs = [
    {
      title: '未分类',
      href: '/bookmarks'
    },
    {
      title: '好文',
      href: '/bookmarks/reading'
    },
    {
      title: '个人网站',
      href: '/bookmarks/personal-site'
    },
    {
      title: '小工具',
      href: '/bookmarks/tools'
    }
  ];

  const router = useRouter();
  return (
    <div className="hidden grid-cols-5 gap-2 overflow-x-auto md:grid tabbed-navigation md:justify-center md:-ml-0 md:-mr-0 flex-nowrap mb-8 w-full">
      {tabs.map((tab) => (
        <Link href={tab.href} key={tab.title}>
          <a
            className={clsx(
              'font-medium flex flex-none rounded-lg items-center justify-center space-x-3',
              {
                'text-gray-500': router.pathname !== tab.href
              },
              {
                'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800':
                  router.pathname === tab.href
              }
            )}
          >
            <span className="flex items-center px-4 py-2 space-x-2">
              {tab.title}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
}
