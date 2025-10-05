import type { ReactNode } from 'react';
import clsx from 'clsx';

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
  emphasis?: 'primary' | 'secondary';
}

export function FeatureCard({ title, subtitle, icon, children, emphasis = 'secondary' }: FeatureCardProps) {
  return (
    <div
      className={clsx(
        'rounded-3xl border px-6 py-6 shadow-sm transition-transform duration-150 hover:-translate-y-1',
        emphasis === 'primary'
          ? 'border-crimson bg-white'
          : 'border-midnight/10 bg-white/80'
      )}
    >
      <div className="flex items-start gap-4">
        {icon && <div className="mt-1 text-3xl text-crimson">{icon}</div>}
        <div className="space-y-2">
          <div>
            <h3 className="font-display text-2xl uppercase text-midnight">{title}</h3>
            {subtitle && <p className="text-sm uppercase tracking-wide text-midnight/70">{subtitle}</p>}
          </div>
          <div className="space-y-3 text-sm text-midnight/80">{children}</div>
        </div>
      </div>
    </div>
  );
}
