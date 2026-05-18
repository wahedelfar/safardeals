import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/blog';
export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="relative h-52"><Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-slate-500"><span>{post.category}</span><span>•</span><span>{post.readingMinutes}</span></div>
        <h3 className="mt-3 text-xl font-black text-ink"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-bold text-sky-600">قراءة المقال</Link>
      </div>
    </article>
  );
}
