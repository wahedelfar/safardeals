'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Coupon } from '@/lib/data';
export function CouponCard({ coupon }: { coupon: Coupon }) {
  const [copied, setCopied] = useState(false);
  async function handleCopy() { await navigator.clipboard.writeText(coupon.code); setCopied(true); setTimeout(() => setCopied(false), 1800); }
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-sky-600">{coupon.store}</div>
          <h3 className="mt-2 text-lg font-black text-ink">{coupon.discount}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{coupon.description}</p>
        </div>
        <div className="rounded-2xl bg-sky-50 px-3 py-2 text-sm font-black text-sky-700">{coupon.code}</div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="text-xs text-slate-500">ينتهي في {coupon.expiresAt}</span>
        <button onClick={handleCopy} className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-sky-600">{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}{copied ? 'تم النسخ' : 'نسخ الكود'}</button>
      </div>
    </article>
  );
}
