import design from '@/data/design';
import otherProjects from '@/data/otherProjects';
;
import Container from '@/components/Container';
import Card from '@/components/Card';
import PageTitle from '@/components/PageTitle';

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
            工作
          </h3>
          <div className="space-y-8 mb-16">
            {design.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                coverSrc={d.coverSrc}
              />
            ))}
          </div>
          <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            其它
          </h3>
          <div className="space-y-8 mb-16">
            {otherProjects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                coverSrc={d.coverSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
