import projects from '@/data/projects';
import Container from '@/components/Container';
import Card from '@/components/Card';
import PageTitle from '@/components/PageTitle';
import Link from 'next/link';


export default function NotFound() {
  return (
    <Container title="Project" key="project">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <PageTitle
          title="项目"
          textColor="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
        >
          这里是我的一些工作案例、开源项目、独立开发作品和有关个人的一些收集和记录
        </PageTitle>
        <div className="container">
          {/* <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            项目
          </h3> */}
          <div className="space-y-8 mb-16">
            {projects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                summary={d.description}
                href={d.href}
              />
            ))}
          </div>
          {/* <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            开源项目
          </h3>
          <div className="space-y-8 mb-16">
            {openSource.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                summary={d.description}
                href={d.href}
              />
            ))}
          </div> */}
        </div>
      </div>
    </Container>
  );
}