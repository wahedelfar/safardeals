import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
const postsDirectory = path.join(process.cwd(), 'content/blog');
export type Post = { slug: string; title: string; excerpt: string; date: string; category: string; tags: string[]; image: string; faqs: { question: string; answer: string }[]; content: string; readingMinutes: string; };
export function getAllPosts(): Post[] {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md')).map((file) => {
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug, title: data.title, excerpt: data.excerpt, date: data.date, category: data.category, tags: data.tags || [], image: data.image, faqs: data.faqs || [], content, readingMinutes: readingTime(content).text };
  }).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
export function getPostBySlug(slug: string) { return getAllPosts().find((post) => post.slug === slug); }
export function getRelatedPosts(slug: string, category: string) { return getAllPosts().filter((post) => post.slug !== slug && post.category === category).slice(0, 3); }
