import Link from 'next/link';

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

export default function NotFound() {
  return (
    <Container title="404">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <PageTitle
          title="抱歉，页面没有找到"
          description="你似乎找到了曾经存在的东西，或者您拼写错误。我猜你拼写错了。你能仔细检查那个网址吗？"
        />
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-gray-900 dark:text-gray-100">
            回到首页
          </a>
        </Link>
      </div>
    </Container>
  );
}
