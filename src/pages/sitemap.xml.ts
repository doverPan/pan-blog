import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { getAllTags, isPublished, slugifyTag, sortPosts } from '../utils/blog';

function createUrl(loc: string, lastmod?: Date) {
  const lastmodTag = lastmod ? `<lastmod>${lastmod.toISOString()}</lastmod>` : '';
  return `<url><loc>${loc}</loc>${lastmodTag}</url>`;
}

export async function GET(context: APIContext) {
  const posts = sortPosts((await getCollection('blog')).filter(isPublished));
  const stones = sortPosts((await getCollection('stones')).filter(isPublished));
  const tags = getAllTags(posts);
  const site = context.site?.toString().replace(/\/$/, '') ?? 'https://example.com';

  const staticPages = ['/', '/blog/', '/stones/', '/projects/', '/about/', '/tags/'];

  const urls = [
    ...staticPages.map((path) => createUrl(`${site}${path}`)),
    ...posts.map((post) => createUrl(`${site}/blog/${post.slug}/`, post.data.updatedDate ?? post.data.pubDate)),
    ...stones.map((stone) => createUrl(`${site}/stones/${stone.slug}/`, stone.data.updatedDate ?? stone.data.pubDate)),
    ...tags.map((tag) => createUrl(`${site}/tags/${slugifyTag(tag)}/`))
  ].join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
