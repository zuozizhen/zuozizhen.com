import TerminalClient from "@/components/TerminalClient";
import { getRecentBlogs } from "@/lib/content";
import "./terminal.css";

export const metadata = {
  title: "Terminal"
};

export default function TerminalPage() {
  const blogs = getRecentBlogs(2).map((blog) => ({
    title: blog.title,
    slug: blog.slug,
    url: `/blog/${blog.slug}`,
    date: blog.formattedDate,
    snippet: blog.snippet,
    image: blog.image,
    content: blog.renderedContent
  }));

  const allBlogs = getRecentBlogs().map((blog) => ({
    title: blog.title,
    slug: blog.slug,
    url: `/blog/${blog.slug}`,
    date: blog.formattedDate,
    snippet: blog.snippet,
    image: blog.image,
    content: blog.renderedContent
  }));

  const projects = [
    { name: "NotionChina", url: "https://notionchina.co", year: 2021, desc: "Notion 中文站" },
    { name: "FigmaChina", url: "https://figmachina.com", year: 2019, desc: "Figma 中文站" }
  ];

  return (
    <TerminalClient
      blogs={blogs}
      allBlogs={allBlogs}
      projects={projects}
      aboutPath="/about"
      homePath="/"
      chatPath="/api/chat"
    />
  );
}
