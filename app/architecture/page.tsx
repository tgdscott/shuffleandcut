import type { Metadata } from 'next';
import { DataTable } from '@/components/data-table';
import { FeatureCard } from '@/components/feature-card';
import { Section } from '@/components/section';
import { domainEntities, technologyStack } from '@/lib/data';

export const metadata: Metadata = {
  title: 'System Architecture | Shuffle & Cut Platform'
};

const stackEntries = [
  { category: 'Frontend', items: technologyStack.frontend },
  { category: 'Backend', items: technologyStack.backend },
  { category: 'Data', items: technologyStack.data },
  { category: 'Operations', items: technologyStack.operations }
];

export default function ArchitecturePage() {
  return (
    <div className="space-y-12 pb-20">
      <Section
        eyebrow="Technical Blueprint"
        title="Composable services powering multi-channel commerce"
        description="Adopting the recommended Next.js, NestJS, PostgreSQL, and Typesense stack with containerized deployment ensures scale for Brea, Frank & Son, and online channels."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {stackEntries.map((entry) => (
            <FeatureCard key={entry.category} title={entry.category} emphasis={entry.category === 'Frontend' ? 'primary' : 'secondary'}>
              <ul className="list-disc space-y-2 pl-5 text-sm">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </div>
        <FeatureCard title="Security & Permissions" subtitle="RBAC + SSO Enforcement">
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>Role definitions for Admin, Pricing Manager, Intake Specialist, and Sales Associate.</li>
            <li>PostgreSQL row-level security ensures location-bound inventory visibility.</li>
            <li>Single sign-on via Microsoft Entra ID or Google Workspace with audit logging.</li>
          </ul>
        </FeatureCard>
      </Section>

      <Section
        eyebrow="Domain Model"
        title="Entities orchestrating pricing, inventory, and buylists"
        description="Structured per the architecture brief to support automation, manual overrides, and reporting."
      >
        <DataTable
          data={domainEntities}
          columns={[
            { header: 'Entity', accessor: (row) => <span className="font-semibold text-midnight">{row.entity}</span> },
            { header: 'Fields', accessor: (row) => row.fields },
            { header: 'Notes', accessor: (row) => row.notes }
          ]}
        />
      </Section>

      <Section
        eyebrow="Integration Contracts"
        title="External services & automation touchpoints"
        description="Synchronize metadata, ingest pricing signals, and distribute buylists through automated workers."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard title="Data Ingestion">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Nightly Scryfall + TCGplayer sync to refresh sets, cards, and price anchors.</li>
              <li>Migration scripts port legacy Access and spreadsheet data into PostgreSQL.</li>
              <li>Redis-backed queues throttle API usage and alert on schema drifts.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Search & Discovery">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Typesense cluster enabling typo-tolerant card search with filter facets.</li>
              <li>Index rarity, condition, inventory levels, and velocity metrics for ranking.</li>
              <li>Edge caching ensures &lt;200ms response for storefront queries.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Deployment Pipeline">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Docker images built via CI with automated schema migrations.</li>
              <li>Kubernetes or Fly.io orchestrates API, workers, and Typesense nodes.</li>
              <li>Vercel hosts the Next.js frontend with preview deployments per branch.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Observability">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>OpenTelemetry tracing across API and worker spans.</li>
              <li>Grafana dashboards for intake SLA, pricing adjustments, and transfer velocity.</li>
              <li>Alerting to Slack/Teams when thresholds or job failures occur.</li>
            </ul>
          </FeatureCard>
        </div>
      </Section>
    </div>
  );
}
