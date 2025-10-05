import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  title: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export function Section({
  title,
  eyebrow,
  description,
  className,
  actions,
  children
}: SectionProps) {
  return (
    <section className={clsx('mx-auto max-w-6xl px-6 py-16', className)}>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,280px)_1fr] md:items-start md:gap-10">
        <div className="space-y-3">
          {eyebrow && <span className="text-sm font-semibold uppercase tracking-widest text-crimson/80">{eyebrow}</span>}
          <h2 className="font-display text-4xl uppercase text-midnight">{title}</h2>
          {description && <p className="text-base text-midnight/80">{description}</p>}
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
        </div>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
