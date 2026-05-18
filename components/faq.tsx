export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="space-y-4">{items.map((item) => <details key={item.question} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft"><summary className="cursor-pointer list-none text-base font-black text-ink">{item.question}</summary><p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p></details>)}</div>;
}
