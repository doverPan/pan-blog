import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { isPublished, sortPosts } from '../utils/blog';

export async function GET(context) {
  const posts = sortPosts((await getCollection('blog')).filter(isPublished));

  return rss({
    title: 'Panjie 技术随笔',
    description: '技术文章、项目记录与长期工程思考。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`
    }))
  });
}
