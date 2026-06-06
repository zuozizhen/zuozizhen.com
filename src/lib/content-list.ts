import contentListData from "../data/content-list.json";

export type ContentListEntry = {
  slug: string;
  title: string;
  snippet: string;
  image: string;
  duty: string;
  draft: boolean;
  publishedAt: string | null;
  formattedDate: string;
  year: number | null;
};

export type BlogListEntry = ContentListEntry;

export type ProjectListEntry = ContentListEntry;

type ContentListPayload = {
  blogs: BlogListEntry[];
  projects: ProjectListEntry[];
};

const payload = contentListData as ContentListPayload;

function isPublished(item: { draft: boolean; publishedAt: string | null }) {
  if (item.draft || !item.publishedAt) return false;
  return new Date(item.publishedAt).getTime() <= Date.now();
}

export function getPublishedBlogList() {
  return payload.blogs.filter(isPublished);
}

export function getRecentBlogList(limit?: number) {
  const items = getPublishedBlogList();
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getPublishedProjectList() {
  return payload.projects.filter(isPublished);
}

export function getRecentProjectList(limit?: number) {
  const items = getPublishedProjectList();
  return typeof limit === "number" ? items.slice(0, limit) : items;
}
