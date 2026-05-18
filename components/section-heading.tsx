export function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">SafarDeals</span>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-ink sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}
