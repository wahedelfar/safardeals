import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site';
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'SafarDeals | عروض سفر عربية بأفضل الأسعار', template: '%s | SafarDeals' },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: siteConfig.url },
  openGraph: { title: 'SafarDeals', description: siteConfig.description, url: siteConfig.url, siteName: 'SafarDeals', locale: 'ar_EG', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'SafarDeals', description: siteConfig.description }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <a href="#content" className="sr-only focus:not-sr-only">تخطي إلى المحتوى</a>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
