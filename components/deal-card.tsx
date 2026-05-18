import Image from 'next/image';
import { ArrowUpLeft, Plane, Hotel } from 'lucide-react';
import { Deal } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';
export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image src={deal.image} alt={deal.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-sky-700">{deal.badge}</div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{deal.type === 'flight' ? <Plane className="h-3.5 w-3.5" /> : <Hotel className="h-3.5 w-3.5" />}{deal.destination}</span>
          <span className="text-xs text-slate-500">{deal.provider}</span>
        </div>
        <div>
          <h3 className="text-lg font-black text-ink">{deal.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{deal.excerpt}</p>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs text-slate-400 line-through">{deal.oldPrice ? formatCurrency(deal.oldPrice, deal.currency) : ''}</div>
            <div className="text-2xl font-black text-ink">{formatCurrency(deal.price, deal.currency)}</div>
          </div>
          <a href={deal.affiliateUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-sky-600">احجز الآن<ArrowUpLeft className="h-4 w-4" /></a>
        </div>
      </div>
    </article>
  );
}
