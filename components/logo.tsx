export function Logo() {
  return (
    <div className="flex items-center gap-3 text-ink">
      <svg viewBox="0 0 48 48" className="h-10 w-10 text-sky-500" aria-label="SafarDeals logo" fill="none">
        <path d="M10 30c7-16 24-18 28-8 3 8-6 15-16 15-7 0-12-3-12-7Z" fill="currentColor" opacity="0.18" />
        <path d="M8 28C16 14 31 11 38 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 18h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 18v15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="35" r="3" fill="currentColor" />
      </svg>
      <div>
        <div className="text-lg font-black tracking-tight">SafarDeals</div>
        <div className="text-xs text-slate-500">سفر أذكى بأقل تكلفة</div>
      </div>
    </div>
  );
}
