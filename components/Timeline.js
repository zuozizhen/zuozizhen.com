import { useState } from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';


const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-900 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-6 list-none">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-3" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-7">{children}</p>
    </li>
  );
};

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-xl mb-8 text-gray-900 dark:text-gray-100">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul className='not-prose pl-0'>
        <Step title="Head of Developer Relations at Vercel 👨‍👩‍👧‍👦">
          I'm extremely excited about this new role helping grow the Next.js and
          Vercel community.
        </Step>
        <Step title="10,000 YouTube Subscribers 🎥">
          After many years on YouTube, I've started to figure this whole video
          thing out.
        </Step>
        <Step title="5,000 Newsletter Subscribers 💌">
          If you want to stay up-to-date on my latest work, it usually hits the
          newsletter first. I try to send an update once a month.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul className='not-prose pl-0'>
        <Step title="Joined ▲Vercel">
          I'm excited to help grow the Next.js community and continue building
          the optimal workflow for front-end developers.
        </Step>
        <Step title="Launched React 2025 💯">
          Building a real SaaS application, from zero to production.
        </Step>
        <Step title="Emerging Technology Leader of the Year 🏆">
          I was extremely honored to be one of five finalists nominated for this
          award at the 2020 Prometheus Awards.
        </Step>
        <Step title="Got Married 🥳">
          Great year for a wedding, huh? We had a small ceremony with family and
          it was better than I could have imagined.
        </Step>
        <Step title="Became a Tech Lead 👨🏻‍💻">
          Starting at the beginning of 2020, I moved into a tech leadership role
          on an e-commerce development team at Hy-Vee.
        </Step>
        <Step title="Mastering Next.js made $10K 📈">
          I taught hundreds of students from all over the world how to build web
          applications. Exceeded my wildest expectations.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul className='not-prose pl-0'>
        <Step title="Software Engineer III ✨">
          Led design system architecture at Hy-Vee, building new components with
          React, Storybook, and styled-components.
        </Step>
        <Step title="Mastering Next.js ⚛️">
          Launched a 50+ lesson video course for building apps with Next.js and
          React.
        </Step>
        <Step title="Bought a Townhome 🏡">
          Who wants to do yardwork? Not me. Plus, Allie and I love living
          downtown Des Moines.
        </Step>
        <Step title="Got Engaged 💍">
          I asked my now fiancée, Allie, to marry me. She said yes! September
          was a busy month, to say the least – I also spoke at three events and
          sold my condo.
        </Step>
        <Step title="Spoke at Talent42 🎤">
          I spoke to over 100 technical recruiting leaders from across the
          country at Talent42 in Seattle during a 45-minute keynote.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <CaretDownIcon className="ml-1"/>
        </button>
      )}
    </>
  );
}
