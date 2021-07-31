import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import workHistoryData from '@/data/workHistoryData';
import SimpleItem from '@/components/SimpleItem';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';


const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-semibold mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100 space-x-1"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <span>{title}</span>
        <div>
          <ArrowTopRightIcon />
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container title="关于我 – 左子祯">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="w-full h-48 sm:h-96 relative mb-6">
          <Image
            src="https://cdn.jsdelivr.net/gh/zuozizhen/oss@master/img/20210406230547.jpg"
            alt="avatar"
            layout="fill"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="mb-16 prose text-gray-700 dark:text-gray-400">
          <p>
            嗨,
            我是左子祯。我是一名产品设计师，独立开发者，同时爱好写作，目前在&nbsp;
            <a
              href="https://mastergo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MasterGo
            </a>
            &nbsp;担任产品设计负责人。
          </p>
          <p>
            日常工作主要是关于产品策划、界面设计、设计系统和团队管理，偶尔也写一些文章和为初创公司提供建议。业余时间会投入在学习
            Coding 和独立开发中。
          </p>
          <p>
            作为设计师，我热衷于通过结合对产品的研究，极致的设计和对技术的理解来解决和平衡问题。
          </p>
          <p>
            我热爱世界的缤纷多彩，更喜欢自己无尽的可能性，所以我会涉猎尽可能多的领域和学习感兴趣的一切。我也相信数字化生活会让我们更加了解自己，所以我致力通过数字产品优化工作流，科学的提高自己的工作效率和生活品质。
          </p>
          <p>
            2018 年，我创立了&nbsp;
            <a
              href="https://figmachina.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              FigmaChina
            </a>
            ，这是一个以中文内容介绍 Figma
            的网站，我希望可以帮助中国设计师了解学习好的工具来提升生产力，目前月均
            5w+ 访问量。
          </p>
          <p>
            同一时期，我在锤子科技时为&nbsp;
            <a
              href="https://www.smartisan.com/jianguopro3/os"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smartisan OS 7.0
            </a>
            &nbsp;搭建了基于 Figma
            的大型设计系统，也同时推动改变了整个团队的工作方式。
          </p>
          <p>
            目前我担任&nbsp;
            <a
              href="https://mastergo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MasterGo&nbsp;
            </a>
            的产品设计负责人，打造下一代设计工具，专注产品的设计品质与竞争力提升。
          </p>
        </div>

        <h2 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
          工作经历
        </h2>
        <div className="space-y-8">
          {workHistoryData.map((d) => (
            <SimpleItem
              key={d.company}
              title={`${d.company} · ${d.position}`}
              description={d.time}
              href={d.href}
            />
          ))}
        </div>

        {/* <h2 className="font-bold text-3xl mb-4 text-gray-900 dark:text-gray-100">
          公共演讲
        </h2>

        <Talk
          title="How Core Web Vitals Will Impact Google Rankings in 2021"
          link="https://vercel.com/blog/core-web-vitals"
        >
          Landing a top spot on Google can have a multi-million dollar impact on
          your business. Starting in June 2021, the performance of your site
          (determined by Core Web Vitals) will be critical to your search
          ranking. Learn how Next.js can help you optimize your site’s
          performance, user experience, and SEO.
        </Talk>
        <Talk
          title="Data Fetching with Next.js"
          link="https://www.youtube.com/watch?v=f1rF9YKm1Ms"
        >
          Next.js is a hybrid React framework allowing you to choose your data
          fetching strategy on a per-page basis. In this talk, you’ll learn more
          about CSR (Client-Side Rendering), SSR (Server-Side Rendering), SSG
          (Static-Site Generation), ISR (Incremental Static Regeneration), and
          when to use each one. I’ll also give a quick introduction to Next.js
          and share some of the main features of the framework.
        </Talk> */}
      </div>
    </Container>
  );
}
