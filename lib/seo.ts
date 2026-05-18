import type { Metadata } from 'next';
import { siteConfig } from './site';
import { absoluteUrl } from './utils';
export function createMetadata({ title, description, path = '', keywords = [] }: { title: string; description: string; path?: string; keywords?: string[]; }): Metadata {
  const url = absoluteUrl(path);
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, locale: siteConfig.locale, type: 'website' },
    twitter: { card: 'summary_large_image', title, description }
  };
}
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };
}
