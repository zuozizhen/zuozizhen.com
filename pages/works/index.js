import React from 'react';

import { getFeaturedProjectData, getOtherProjectData, getOpenSourceProjectData } from "@/lib/notion";

import Container from '@/components/Container';
import PageTitle from '@/components/PageTitle';

import slugify from 'slugify';
import DesignCard from '@/components/DesignCard';
import Card from '@/components/Card';

export const projectId = process.env.PROJECT_DATABASE_ID;

export const getStaticProps = async () => {
  const featuredProject = await getFeaturedProjectData(projectId);
  const otherProject = await getOtherProjectData(projectId);
  const openSourceProject = await getOpenSourceProjectData(projectId);

  return {
    props: {
      featuredProject,
      otherProject,
      openSourceProject
    }
  };
};


export default function Home({ featuredProject, otherProject, openSourceProject }) {
  return (
    <Container title="Project">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        {/* <pre>{JSON.stringify(projects, null, 2) }</pre> */}
        <PageTitle
          title="工作项目"
          textColor="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"
        >
          这里主要是展示了我的一些工作项目和一些业余项目
        </PageTitle>
        <div className="container">
          <div className="space-y-8 mb-16">
            {featuredProject.map((project) => (
              <DesignCard
                key={project.properties.Name.title[0].text.content}
                title={project.properties.Name.title[0].text.content}
                href={`/projects/${slugify(project.id)}`}
                summary={project.properties.Summary.rich_text[0].text.content}
                coverSrc={project.properties?.Cover?.files[0]?.file?.url ||
                  project.properties.Cover?.files[0]?.external?.url}
                duty={project.properties.Duty.rich_text[0].text.content}
              />
            ))}
          </div>

          <h3 className="font-bold text-lg sm:text-xl mb-8 text-gray-900 dark:text-gray-100">
            其它
          </h3>
          <div className="space-y-8 mb-16">
            {otherProject.map((project) => (
              <Card
                key={project.properties.Name.title[0].text.content}
                title={project.properties.Name.title[0].text.content}
                href={`/projects/${slugify(project.id)}`}
                summary={project.properties.Summary.rich_text[0].text.content}
                coverSrc={project.properties?.Cover?.files[0]?.file?.url ||
                  project.properties.Cover?.files[0]?.external?.url}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );

}