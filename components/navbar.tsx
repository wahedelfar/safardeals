import Link from 'next/link';
import { Logo } from './logo';
const links = [['/','الرئيسية'],['/flights','الرحلات'],['/hotels','الفنادق'],['/destinations','الوجهات'],['/blog','المدونة'],['/coupons','الكوبونات'],['/comparison','المقارنة'],['/about','من نحن'],['/contact','اتصل بنا']];
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="SafarDeals home"><Logo /></Link>
        <nav className="hidden flex-wrap items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
          {links.map(([href, label]) => <Link key={href} href={href} className="transition hover:text-sky-600">{label}</Link>)}
        </nav>
        <Link href="/contact" className="rounded-full bg-sky-500 px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:bg-sky-600">أعلن معنا</Link>
      </div>
    </header>
  );
}
