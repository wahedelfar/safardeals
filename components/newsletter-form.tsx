'use client';
import { useState } from 'react';
export function NewsletterForm() {
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');
  async function submit(formData: FormData) {
    setState('loading');
    await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email: formData.get('email') }), headers: { 'Content-Type': 'application/json' } });
    setState('done');
  }
  return (
    <form action={submit} className="rounded-[2rem] bg-ink p-6 text-white shadow-soft sm:p-8">
      <h3 className="text-2xl font-black">اشترك في نشرة العروض</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">تنبيه أسبوعي بأرخص الرحلات والفنادق وكوبونات السفر في الخليج ومصر.</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input name="email" type="email" required placeholder="البريد الإلكتروني" className="h-12 flex-1 rounded-full border border-white/10 bg-white/10 px-5 text-sm outline-none placeholder:text-slate-400 focus:border-sky-400" />
        <button type="submit" className="h-12 rounded-full bg-sky-500 px-6 text-sm font-black transition hover:bg-sky-400 disabled:opacity-70" disabled={state === 'loading'}>{state === 'loading' ? 'جارٍ الإرسال...' : state === 'done' ? 'تم الاشتراك' : 'اشترك الآن'}</button>
      </div>
      <p className="mt-3 text-xs text-slate-400">تكامل Resend جاهز عبر /api/newsletter.</p>
    </form>
  );
}
