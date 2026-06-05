import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const root = process.cwd();
const outputDir = path.join(root, "src", "data");
const outputFile = path.join(outputDir, "content.json");

marked.setOptions({
  gfm: true,
  breaks: true,
});

function parseDate(value) {
  if (!value) return null;
  if (value instanceof Date) return value;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDateCN(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}年${month}月${day}日`;
}

function readEntries(type) {
  const dir = path.join(root, "content", type);
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  return files.map((fileName) => {
    const slug = fileName.slice(0, -3);
    const fullPath = path.join(dir, fileName);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const publishedAtDate = parseDate(data.published_at);

    return {
      slug,
      title: String(data.title || ""),
      snippet: String(data.snippet || ""),
      image: String(data.image || ""),
      duty: String(data.duty || ""),
      draft: Boolean(data.draft),
      publishedAt: publishedAtDate ? publishedAtDate.toISOString() : null,
      formattedDate: publishedAtDate ? formatDateCN(publishedAtDate) : "",
      year: publishedAtDate ? publishedAtDate.getUTCFullYear() : null,
      content,
      renderedContent: marked.parse(content),
    };
  });
}

function sortByPublishedAtDesc(entries) {
  return [...entries].sort((a, b) => {
    const ta = a.publishedAt ? new Date(a.publishedAt).getTime() : -Infinity;
    const tb = b.publishedAt ? new Date(b.publishedAt).getTime() : -Infinity;
    return tb - ta;
  });
}

const blogs = sortByPublishedAtDesc(readEntries("blog"));
const projects = sortByPublishedAtDesc(readEntries("project"));

const payload = {
  generatedAt: new Date().toISOString(),
  blogs,
  projects,
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(payload, null, 2));
console.log(`Generated ${outputFile}`);
