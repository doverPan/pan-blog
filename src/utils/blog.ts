import type { CollectionEntry } from 'astro:content';

type PublishableEntry = CollectionEntry<'blog'> | CollectionEntry<'stones'>;

export function isPublished(post: PublishableEntry) {
  return !post.data.draft;
}

export function sortPosts<T extends PublishableEntry>(posts: T[]) {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getAllTags<T extends PublishableEntry>(posts: T[]) {
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));
}

export function slugifyTag(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
