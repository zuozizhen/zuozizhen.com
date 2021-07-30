import Link from 'next/link';
import ExternalLink from '@/components/ExternalLink';
import NowPlaying from '@/components/NowPlaying';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">首页</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">文章</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              关于我
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/about/wechat">
            <a className="text-gray-500 hover:text-gray-600 transition">
              微信公众号
            </a>
          </Link>
          <ExternalLink href="https://zhihu.com/people/ZiJen">
            知乎
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/zuozizhen">
            领英
          </ExternalLink>
          <ExternalLink href="https://github.com/zuozizhen">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">
              我的工具栈
            </a>
          </Link>
          <Link href="/project">
            <a className="text-gray-500 hover:text-gray-600 transition">项目</a>
          </Link>
          <Link href="/book">
            <a className="text-gray-500 hover:text-gray-600 transition">书单</a>
          </Link>
          <Link href="/bookmark">
            <a className="text-gray-500 hover:text-gray-600 transition">书签</a>
          </Link>
          {/* <ExternalLink href="https://app.mailbrew.com/zuozizhen/daily-brew-P7rk2fDL93SA">
            <a className="text-gray-500 hover:text-gray-600 transition">
              我的信息源
            </a>
          </ExternalLink> */}
        </div>
      </div>
    </footer>
  );
}
