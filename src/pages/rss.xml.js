// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = await getCollection('blog');
  return rss({
    title: '左子祯',
    description: '左子祯的个人网站',
    site: site.origin, // 使用 site.origin 来确保我们获得完整的网站 URL
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.snippet,
      pubDate: post.data.publishDate,
      link: `${site.origin}/blog/${post.slug}/`, // 使用完整的 URL 作为 link
    })),
  });
}
