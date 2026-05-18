'use client';
import { useState } from 'react';
export function ContactForm() {
  const [sent, setSent] = useState(false);
  async function submit(formData: FormData) {
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(formData.entries())) });
    setSent(true);
  }
  return (
    <form action={submit} className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="الاسم" className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-500" />
        <input name="email" required type="email" placeholder="البريد الإلكتروني" className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-500" />
      </div>
      <input name="subject" required placeholder="الموضوع" className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-sky-500" />
      <textarea name="message" required rows={6} placeholder="اكتب رسالتك" className="rounded-3xl border border-slate-200 p-4 text-sm outline-none focus:border-sky-500" />
      <button type="submit" className="h-12 rounded-full bg-ink px-6 text-sm font-black text-white transition hover:bg-sky-600">{sent ? 'تم الإرسال' : 'إرسال الرسالة'}</button>
    </form>
  );
}
