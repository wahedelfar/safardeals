import Link from 'next/link';
import { siteConfig } from '@/lib/site';
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-black text-ink">SafarDeals</h3>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">منصة عربية لمقارنة عروض السفر والفنادق والكوبونات مع محتوى عملي للمسافرين من مصر والسعودية والإمارات.</p>
        </div>
        <div>
          <h4 className="text-sm font-black text-ink">أقسام مهمة</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/flights">عروض الرحلات</Link>
            <Link href="/hotels">عروض الفنادق</Link>
            <Link href="/blog">مقالات السفر</Link>
            <Link href="/coupons">كوبونات السفر</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black text-ink">تابعنا</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <a href={siteConfig.social.x} target="_blank" rel="noreferrer">X</a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
