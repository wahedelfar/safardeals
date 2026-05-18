import { clsx, type ClassValue } from 'clsx';
export function cn(...inputs: ClassValue[]) { return clsx(inputs); }
export function formatCurrency(value: number, currency = 'USD') {
  return new Intl.NumberFormat('ar-EG', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value);
}
export function absoluteUrl(path = '') {
  return `${path.startsWith('http') ? path : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://safardeals.pages.dev'}${path}`}`;
}
