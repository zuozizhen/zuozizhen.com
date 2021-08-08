import projects from '@/data/projects';
import openSource from '@/data/openSource';
import workHistoryData from '@/data/workHistoryData';
import Container from '@/components/Container';
import Card from '@/components/Card';
import PageTitle from '@/components/PageTitle';
import SimpleItem from '@/components/SimpleItem';


export default function NotFound() {
  return (
    <Container title="Project">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <PageTitle
          title="项目"
          description="这里是我独立开发的项目和一些工作项目"
        />
        <div className="container">
          <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            精选项目
          </h3>
          <div className="space-y-8 mb-16">
            {projects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
              />
            ))}
          </div>
          <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            开源项目
          </h3>
          <div className="space-y-8 mb-16">
            {openSource.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
              />
            ))}
          </div>
          <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            工作经历
          </h3>
          <div className="space-y-8 mb-16">
            {workHistoryData.map((d) => (
              <SimpleItem
                key={d.company}
                title={`${d.company} · ${d.position}`}
                description={d.time}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
