import Link from 'next/link';
import { Plane, Hotel, TicketPercent, BookOpen, Sparkles } from 'lucide-react';
import { DealCard } from '@/components/deal-card';
import { SectionHeading } from '@/components/section-heading';
import { NewsletterForm } from '@/components/newsletter-form';
import { BlogCard } from '@/components/blog-card';
import { flightDeals, hotelDeals, destinations } from '@/lib/data';
import { getAllPosts } from '@/lib/blog';
export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.15),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-black text-sky-700">منصة السفر العربية الأسرع لاكتشاف العروض</span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">اعثر على أرخص الرحلات والفنادق وكوبونات السفر في مكان واحد</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">SafarDeals يساعدك على مقارنة عروض السفر للمستخدم العربي مع ترشيحات عملية لوجهات اقتصادية وعروض متجددة من منصات الحجز الكبرى.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/flights" className="rounded-full bg-ink px-6 py-3 text-sm font-black text-white transition hover:bg-sky-600">ابدأ بعروض الرحلات</Link>
              <Link href="/hotels" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-ink transition hover:border-sky-500 hover:text-sky-600">تصفح الفنادق</Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[['+20','عرض طيران يومي'],['+10','عرض فندقي جاهز'],['+10','كوبونات حجز حقيقية']].map(([value,label]) => <div key={label} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft"><div className="text-2xl font-black text-ink">{value}</div><div className="text-sm text-slate-500">{label}</div></div>)}
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:grid-cols-2">
            {[['رحلات رخيصة','إلى دبي وتركيا وأوروبا',Plane],['فنادق موصى بها','للرحلات السريعة وشهر العسل',Hotel],['كوبونات سفر','خصومات على Booking وAgoda',TicketPercent],['نصائح عملية','محتوى عربي للمسافر الاقتصادي',BookOpen]].map(([title,subtitle,Icon]: any) => <div key={title} className="rounded-3xl bg-slate-50 p-5"><Icon className="h-8 w-8 text-sky-500" /><h2 className="mt-4 text-lg font-black text-ink">{title}</h2><p className="mt-2 text-sm leading-7 text-slate-600">{subtitle}</p></div>)}
            <div className="sm:col-span-2 rounded-3xl bg-ink p-5 text-white"><div className="flex items-center gap-2 text-sm text-sky-300"><Sparkles className="h-4 w-4" />بحث سريع</div><div className="mt-3 grid gap-3 sm:grid-cols-3"><input placeholder="من أين؟" className="h-12 rounded-2xl bg-white/10 px-4 text-sm outline-none placeholder:text-slate-300" /><input placeholder="إلى أين؟" className="h-12 rounded-2xl bg-white/10 px-4 text-sm outline-none placeholder:text-slate-300" /><button className="h-12 rounded-2xl bg-sky-500 px-4 text-sm font-black">ابحث عن عرض</button></div></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><SectionHeading title="عروض الرحلات المميزة" description="أسعار منتقاة للمستخدم العربي على أشهر المسارات من القاهرة والرياض وجدة وأبوظبي إلى الوجهات الأعلى طلباً." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{flightDeals.slice(0, 6).map((deal) => <DealCard key={deal.id} deal={deal} />)}</div></section>
      <section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><SectionHeading title="أفضل عروض الفنادق" description="إقامات مناسبة للميزانية والعائلات والرحلات الرومانسية مع روابط حجز مباشرة وشروط مرنة." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{hotelDeals.slice(0, 6).map((deal) => <DealCard key={deal.id} deal={deal} />)}</div></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><SectionHeading title="وجهات شعبية للمسافر العربي" description="صفحات مختصرة تساعدك على فهم التكلفة وأفضل المواسم ونصائح خفض المصاريف قبل الحجز." /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">{destinations.map((destination) => <Link key={destination.slug} href={`/destinations/${destination.slug}`} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1"><div className="text-sm font-bold text-sky-600">{destination.bestTime}</div><h3 className="mt-3 text-xl font-black text-ink">{destination.name}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{destination.averageCost}</p></Link>)}</div></section>
      <section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><SectionHeading title="أحدث نصائح السفر" description="مقالات عربية حول تقليل التكلفة والبحث عن التوقيت الأفضل للحجز والتعامل مع العروض الذكية." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><NewsletterForm /></section>
    </>
  );
}
