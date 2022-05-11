import Life from '@/components/metrics/Life';
import NowPlaying from '@/components/NowPlaying';
// import Buttondown from '@/components/metrics/Buttondown';

import Container from '@/components/Container';
import GitHub from '@/components/metrics/Github';
import YouTube from '@/components/metrics/Youtube';
import TopTracks from '@/components/TopTracks';
import PageTitle from '@/components/PageTitle';
import Read from '@/components/metrics/Read';
import Mark from '@/components/metrics/Mark';

export default function Dashboard() {
  return (
    <Container
      title="此刻 – 左子祯"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <PageTitle
          title="此刻"
          description="这里是我正在做的事情"
        />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Life />
          {/* <GitHub /> */}
          <Read />
          <Mark />
        </div>
        <h2 className="mt-16 font-bold text-lg sm:text-xl mb-3 text-gray-900 dark:text-gray-100">
          正在听什么：
        </h2>
        <NowPlaying />
        <h2 className="mt-16 font-bold text-lg sm:text-xl mb-3 text-gray-900 dark:text-gray-100">
          正在学什么：
        </h2>
        <ul>
          <li></li>
          <li>dasd1</li>
          <li>dasd1</li>
          <li>dasd1</li>
        </ul>

        <h2 className="mt-16 font-bold text-lg sm:text-xl mb-3 text-gray-900 dark:text-gray-100">
          我最近喜欢听的歌
        </h2>
        <p className="text-gray-500 dark:text-gray-500 mb-4">
          这里是我最近听的比较多的歌曲，在底部还能看到我当前正在听什么。
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
