import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import { notFound } from "next/navigation";
import Link from "next/link";

import FAQ from "@/components/faq";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { createMetadata, faqSchema, postSchema } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return createMetadata({
      title: "المقال غير موجود",
      description: "تعذر العثور على المقال المطلوب.",
      path: "/blog",
    });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });
}

function buildToc(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => ({
      id: line.replace("## ", "").trim().toLowerCase().replace(/\s+/g, "-"),
      text: line.replace("## ", "").trim(),
    }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, post.category);
  const toc = buildToc(post.content);

  return (
    <div className="bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(post.faqs)),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-6 lg:p-10">
              <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readingMinutes}</span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none px-6 py-8 lg:px-10">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkSlug]}>
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="border-t border-slate-100 px-6 py-8 lg:px-10">
              <FAQ items={post.faqs} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">محتويات المقال</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="transition hover:text-cyan-700">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">مقالات مرتبطة</h2>
              <div className="mt-4 space-y-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="block rounded-2xl border border-slate-100 p-4 transition hover:border-cyan-200 hover:bg-cyan-50"
                  >
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}