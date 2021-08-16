import design from '@/data/design';
import otherProjects from '@/data/otherProjects';
import Container from '@/components/Container';
import Card from '@/components/Card';
import DesignCard from '@/components/DesignCard';
import PageTitle from '@/components/PageTitle';

export default function NotFound() {
  return (
    <Container title="Project">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <PageTitle
          title="项目"
          textColor="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
        >
          这里展示了我的一些工作项目
        </PageTitle>
        <div className="container">
          <div className="space-y-8 mb-16">
            {design.map((d) => (
              <DesignCard
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                coverSrc={d.coverSrc}
                duty={d.duty}
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
