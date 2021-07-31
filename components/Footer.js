import Link from 'next/link';
import ExternalLink from '@/components/ExternalLink';
import NowPlaying from '@/components/NowPlaying';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4 items-start">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              首页
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              文章
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              关于我
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 items-start">
          <Link href="/about/wechat">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              微信公众号
            </a>
          </Link>
          <a
            className="text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://zhihu.com/people/ZiJen"
          >
            知乎
            <ArrowTopRightIcon className="ml-1 inline-block" />
          </a>
          <a
            className="text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/zuozizhen"
          >
            领英
            <ArrowTopRightIcon className="ml-1 inline-block" />
          </a>
          <a
            className="text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zuozizhen"
          >
            GitHub
            <ArrowTopRightIcon className="ml-1 inline-block" />
          </a>
        </div>
        <div className="flex flex-col space-y-4 items-start">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              我的工具栈
            </a>
          </Link>
          <Link href="/project">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              项目
            </a>
          </Link>
          <Link href="/book">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              书单
            </a>
          </Link>
          <Link href="/bookmark">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              书签
            </a>
          </Link>
          {/* <ExternalLink href="https://app.mailbrew.com/zuozizhen/daily-brew-P7rk2fDL93SA">
            <a className="text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-300">
              我的信息源
            </a>
          </ExternalLink> */}
        </div>
      </div>
    </footer>
  );
}
