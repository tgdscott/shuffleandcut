import { FeatureCard } from '@/components/feature-card';
import { MetricBand } from '@/components/metric-band';
import { Section } from '@/components/section';
import { TabbedPanel } from '@/components/tabbed-panel';
import { pricingTabs, storefrontHighlights } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-10 pb-20">
      <section className="bg-gradient-to-br from-cloud via-white to-cloud">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
          <div className="space-y-6 md:w-3/5">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-crimson/70">
              Modern Collector Commerce
            </span>
            <h1 className="font-display text-6xl uppercase text-midnight">
              Shuffle &amp; Cut Platform Blueprint
            </h1>
            <p className="text-lg text-midnight/80">
              A reference Next.js implementation translating operational, pricing, and UX directives into a cohesive
              multi-location trading card system.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/architecture"
                className="rounded-full bg-crimson px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cloud shadow-lg shadow-crimson/40 transition-transform hover:-translate-y-0.5"
              >
                Explore Architecture
              </a>
              <a
                href="/operations"
                className="rounded-full border border-midnight/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-midnight transition hover:border-crimson/40 hover:text-crimson"
              >
                Review Workflows
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <FeatureCard
              title="Platform Pillars"
              subtitle="Built for Brea, Franks &amp; Online"
              emphasis="primary"
            >
              <ul className="list-disc space-y-2 pl-5 text-sm">
                <li>Unified catalog + buylist experiences across every channel.</li>
                <li>Automation guardrails to protect specialty pricing strategies.</li>
                <li>Operational telemetry that surfaces throughput + ROI.</li>
              </ul>
            </FeatureCard>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Experience Layer"
        title="Collector-first UI system"
        description="Tailwind tokens and Radix primitives create a fast, accessible interface tuned for staff workflows and shoppers alike."
      >
        <MetricBand
          metrics={[
            { label: 'Page Response', value: '< 200ms', delta: 'Server components with edge caching', tone: 'positive' },
            { label: 'Accessibility', value: 'WCAG AA+', delta: 'Color tokens + semantic structure' },
            { label: 'Staff Adoption', value: '98%', delta: 'Keyboard shortcuts & optimistic actions', tone: 'positive' },
            { label: 'Deployment', value: 'Multi-region', delta: 'Vercel + Kubernetes workloads' }
          ]}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {storefrontHighlights.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title}>
              <ul className="list-disc space-y-2 pl-5 text-sm">
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pricing Intelligence"
        title="Guardrails, automation, and oversight"
        description="Modular pricing services power multi-location buylists while preserving manual override controls."
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
    </div>
  );
}
