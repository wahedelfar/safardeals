import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Link from "next/link";

import FAQ from "@/components/faq";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { createMetadata, faqSchema } from "@/lib/seo";

type BlogPageParams = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageParams) {
  const post = getPostBySlug(params.slug);

  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `blog/${post.slug}`,
    keywords: post.tags,
  });
}

function buildToc(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      const slug = text
        .toLowerCase()
        .replace(/[^a-z0-9\u0600-\u06FF\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      return { text, slug };
    });
}

export default function BlogPostPage({ params }: BlogPageParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, post.category);
  const toc = buildToc(post.content);
  const schema = faqSchema(post.faqs);

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <aside className="h-max rounded-2xl border border-slate-200 bg-white p-5 shadow-soft lg:sticky lg:top-24">
        <div className="text-sm font-black text-ink">محتوى المقال</div>
        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
          {toc.map((item) => (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              className="transition hover:text-sky-600"
            >
              {item.text}
            </a>
          ))}
        </div>
      </aside>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <div className="text-sm font-bold text-sky-600">{post.category}</div>

        <h1 className="mt-4 text-4xl font-black leading-tight text-ink">
          {post.title}
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-3 text-xs text-slate-500">
          {post.date} • {post.readingMinutes} دقيقة قراءة
        </div>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-black prose-a:text-sky-600 prose-p:leading-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-black text-ink">الأسئلة الشائعة</h2>
            <div className="mt-5">
              <FAQ items={post.faqs} />
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-black text-ink">مقالات ذات صلة</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-3xl bg-slate-50 p-4 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </section>
  );
}