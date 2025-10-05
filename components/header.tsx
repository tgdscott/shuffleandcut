'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/lib/navigation';
import clsx from 'clsx';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-midnight/10 bg-cloud/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="font-display text-3xl uppercase tracking-wide text-crimson"
        >
          Shuffle & Cut Platform
        </Link>
        <nav className="flex flex-wrap gap-2 text-sm font-medium md:justify-end">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'rounded-full border border-transparent px-4 py-2 transition-colors duration-150',
                pathname === item.href
                  ? 'border-crimson bg-crimson text-cloud shadow-sm'
                  : 'bg-white/70 text-midnight hover:border-midnight/20 hover:bg-white'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
