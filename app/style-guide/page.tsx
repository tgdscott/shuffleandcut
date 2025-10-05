import type { Metadata } from 'next';
import { FeatureCard } from '@/components/feature-card';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'UI Style Guide | Shuffle & Cut Platform'
};

const colorTokens = [
  { name: 'Primary Crimson', hex: '#C8102E', usage: 'Headlines, primary CTAs, progress indicators.' },
  { name: 'Midnight Slate', hex: '#1F1F2B', usage: 'Dashboard backgrounds, card panels, typography.' },
  { name: 'Cloud White', hex: '#F7F7FB', usage: 'Page background, cards, modals.' },
  { name: 'Gold Accent', hex: '#F5B041', usage: 'Premium offers, alert banners, KPI highlights.' },
  { name: 'Teal Support', hex: '#3AC7B7', usage: 'Positive deltas, success states, stock levels.' }
];

const componentConcepts = [
  {
    title: 'Inventory Card Tile',
    description: [
      'Card art thumbnail with condition pills and location stock chips.',
      'Inline price editing with keyboard shortcuts for power users.',
      'Sticky action bar for &ldquo;Add to Buylist&rdquo; on mobile.'
    ]
  },
  {
    title: 'Pricing Rule Editor',
    description: [
      'Stepper modal presenting base price, current adjustments, and trend sparkline.',
      'Manual override toggles with countdown reminders.',
      'Audit feed showing historical changes.'
    ]
  },
  {
    title: 'Buylist Table',
    description: [
      'Grouped by set with accordion interactions and set icon preview.',
      'Condition toggles (NM/LP/HP) with tabular numerals for pricing clarity.',
      'Inline export controls for poster/counter/binder templates.'
    ]
  }
];

export default function StyleGuidePage() {
  return (
    <div className="space-y-12 pb-20">
      <Section
        eyebrow="Brand System"
        title="Visual language inspired by the UI brief"
        description="Tailwind tokens match the recommended palette, typography, and layout guidance from the style guide document."
      >
        <div className="grid gap-4 md:grid-cols-5">
          {colorTokens.map((token) => (
            <div
              key={token.name}
              className="rounded-3xl border border-midnight/10 bg-white p-4 text-center shadow-sm"
            >
              <div
                className="mx-auto mb-3 h-20 w-20 rounded-full border border-midnight/10"
                style={{ backgroundColor: token.hex }}
              />
              <p className="font-display text-lg uppercase text-midnight">{token.name}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-midnight/60">{token.hex}</p>
              <p className="mt-2 text-xs text-midnight/70">{token.usage}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Typography"
        title="Bebas Neue headlines & Inter body copy"
        description="Display type emphasizes collector energy while Inter supports dense operational tables and dashboards."
      >
        <div className="rounded-3xl border border-midnight/10 bg-white p-10 shadow-sm">
          <h2 className="font-display text-5xl uppercase text-crimson">Hero Headline Example</h2>
          <p className="mt-4 text-base text-midnight/80">
            Body copy leverages Inter with generous line-height for readability. Tabular numerals are enabled through Tailwind
            utilities to keep price columns aligned. Sticky action bars ensure key CTAs like &ldquo;Save Pricing&rdquo; remain visible on
            mobile.
          </p>
          <p className="mt-4 text-base text-midnight/70">
            Accessibility is prioritized through WCAG AA contrast ratios and support for reduced motion preferences. Skeleton loaders
            and optimistic UI updates provide responsive feedback during batch operations.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Component Concepts"
        title="Blueprinting critical UI interactions"
        description="Each component concept captures layout, interaction patterns, and accessibility guardrails described in the brief."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {componentConcepts.map((concept) => (
            <FeatureCard key={concept.title} title={concept.title}>
              <ul className="list-disc space-y-2 pl-5 text-sm">
                {concept.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
