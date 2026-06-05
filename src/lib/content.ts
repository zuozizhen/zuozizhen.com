import contentData from "../data/content.json";

export type Blog = {
  slug: string;
  title: string;
  snippet: string;
  image: string;
  draft: boolean;
  publishedAt: string | null;
  formattedDate: string;
  year: number | null;
  content: string;
  renderedContent: string;
};

export type Project = Blog & {
  duty: string;
};

type ContentPayload = {
  blogs: Blog[];
  projects: Project[];
};

const payload = contentData as ContentPayload;

function isPublished(item: { draft: boolean; publishedAt: string | null }) {
  if (item.draft || !item.publishedAt) return false;
  return new Date(item.publishedAt).getTime() <= Date.now();
}

export function getAllBlogs() {
  return payload.blogs;
}

export function getPublishedBlogs() {
  return payload.blogs.filter(isPublished);
}

export function getRecentBlogs(limit?: number) {
  const items = getPublishedBlogs();
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getBlogBySlug(slug: string) {
  return payload.blogs.find((blog) => blog.slug === slug) || null;
}

export function getAllProjects() {
  return payload.projects;
}

export function getPublishedProjects() {
  return payload.projects.filter(isPublished);
}

export function getRecentProjects(limit?: number) {
  const items = getPublishedProjects();
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getProjectBySlug(slug: string) {
  return payload.projects.find((project) => project.slug === slug) || null;
}
