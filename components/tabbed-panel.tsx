'use client';

import * as Tabs from '@radix-ui/react-tabs';
import type { ReactNode } from 'react';
import clsx from 'clsx';

export interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
  description?: string;
}

export function TabbedPanel({
  items,
  defaultValue
}: {
  items: TabItem[];
  defaultValue?: string;
}) {
  return (
    <Tabs.Root
      defaultValue={defaultValue ?? items[0]?.value}
      className="w-full"
    >
      <Tabs.List className="flex flex-wrap gap-2 rounded-2xl bg-midnight/5 p-2">
        {items.map((item) => (
          <Tabs.Trigger
            key={item.value}
            value={item.value}
            className={clsx(
              'rounded-xl px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all data-[state=active]:bg-crimson data-[state=active]:text-cloud data-[state=inactive]:text-midnight/70'
            )}
          >
            {item.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Content
          key={item.value}
          value={item.value}
          className="mt-6 rounded-3xl border border-midnight/10 bg-white/90 p-6 shadow-sm"
        >
          {item.description && (
            <p className="mb-4 text-sm text-midnight/70">{item.description}</p>
          )}
          <div className="space-y-4 text-sm text-midnight/80">{item.content}</div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
