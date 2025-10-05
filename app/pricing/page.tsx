import type { Metadata } from 'next';
import { FeatureCard } from '@/components/feature-card';
import { Section } from '@/components/section';
import { TabbedPanel } from '@/components/tabbed-panel';
import { pricingTabs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pricing & Buylist Engine | Shuffle & Cut Platform'
};

const buylistExports = [
  {
    title: 'Hot Buys Poster',
    details: [
      'Large-format top 50 list for counter visibility.',
      'Highlight premium percentage over base rarity price.',
      'Auto-refresh weekly per game with approval workflow.'
    ]
  },
  {
    title: 'Counter Reference',
    details: [
      'Two-column layout optimized for quick lookups.',
      'Includes NM/LP/HP pricing with condition multipliers applied.',
      'Displays last updated timestamp and responsible manager.'
    ]
  },
  {
    title: 'Comprehensive Binder',
    details: [
      'Four-column condensed grid for binder stations.',
      'Shows card number, legality, target quantity, and offer price.',
      'Exports to CSV/PDF and feeds vendor portal API endpoints.'
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="space-y-12 pb-20">
      <Section
        eyebrow="Pricing Governance"
        title="Rule-driven automation with manual guardrails"
        description="Implements the rule profiles, automation triggers, and monitoring described in the pricing governance brief."
      >
        <TabbedPanel
          items={pricingTabs.map((tab) => ({
            value: tab.value,
            label: tab.label,
            description: tab.description,
            content: (
              <ul className="list-disc space-y-2 pl-5">
                {tab.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )
          }))}
        />
      </Section>

      <Section
        eyebrow="Dynamic Adjustments"
        title="Signals informing automated price movements"
        description="Blend velocity, stock thresholds, and event overrides to safely adjust buy/sell pricing across locations."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard title="Velocity Tracking" subtitle="7/30/90-day horizons">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Compare sales to configured guardrails before enabling adjustments.</li>
              <li>Clamp adjustments with percent or absolute limits per rarity tier.</li>
              <li>Surface recommended overrides with approval queue for Pricing Managers.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Inventory Health" subtitle="Location-aware thresholds">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Trigger transfer suggestions when Brea exceeds configured max.</li>
              <li>Boost buy offers when stock falls below buffer in Franks or Online.</li>
              <li>Notify teams via Slack/Teams when chronic overstock or understock persists.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Event Overrides" subtitle="Manual precision">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Enable event profiles with expiration reminders to re-enable automation.</li>
              <li>Lock sell price overrides for marquee releases or on-site events.</li>
              <li>Log justification notes for compliance and audit trail.</li>
            </ul>
          </FeatureCard>
        </div>
      </Section>

      <Section
        eyebrow="Buylist Publishing"
        title="Multi-format exports for staff and vendors"
        description="Generate the Hot Buys, Counter Reference, and Comprehensive Binder templates described in the workflows brief."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {buylistExports.map((exportType) => (
            <FeatureCard key={exportType.title} title={exportType.title}>
              <ul className="list-disc space-y-2 pl-5 text-sm">
                {exportType.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
