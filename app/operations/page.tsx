import type { Metadata } from 'next';
import { FeatureCard } from '@/components/feature-card';
import { Section } from '@/components/section';
import { TabbedPanel } from '@/components/tabbed-panel';
import { intakeKanban, workflowPlaybooks } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Operational Workflows | Shuffle & Cut Platform'
};

const workflowTabs = [
  {
    value: 'intake',
    label: 'Intake & Grading',
    description: 'Tablet-first workflow orchestrating vendor intake, condition capture, and payout.',
    bullets: workflowPlaybooks.intake
  },
  {
    value: 'balancing',
    label: 'Inventory Balancing',
    description: 'Nightly evaluation of min/max thresholds with automated transfer tasks.',
    bullets: workflowPlaybooks.balancing
  },
  {
    value: 'buylist',
    label: 'Buylist Generation',
    description: 'Scheduled buylists tuned per game, rarity, and velocity filters.',
    bullets: workflowPlaybooks.buylist
  }
];

export default function OperationsPage() {
  return (
    <div className="space-y-12 pb-20">
      <Section
        eyebrow="Operational Excellence"
        title="Workflow orchestration across locations"
        description="Codifying intake, balancing, and buylist processes ensures consistency and auditability from walk-in collections to online demand."
      >
        <TabbedPanel
          items={workflowTabs.map((tab) => ({
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
        eyebrow="Intake Control Tower"
        title="Kanban progression & staff accountability"
        description="Mirror the recommended Pending → Sorted → Audited → Shelved stages with visibility for pricing and leadership teams."
      >
        <div className="grid gap-6 md:grid-cols-4">
          {intakeKanban.map((column) => (
            <FeatureCard key={column.column} title={column.column}>
              <ul className="list-disc space-y-2 pl-5 text-sm">
                {column.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Task Automation"
        title="Guardrails for transfers & audits"
        description="Background workers generate transfer tasks, track exceptions, and provide receipts for compliance."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard title="Transfer Tasks" subtitle="Brea → Franks → Online">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Auto-generate pick lists when Brea exceeds max capacity, prioritizing Franks overflow.</li>
              <li>Barcode labels and QR codes tie to InventoryItem records for scanning validation.</li>
              <li>Audit trail logs adjustments and prompts secondary review on discrepancies.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Quality Control" subtitle="Two-person integrity">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Supervisor approvals required to close intake batches.</li>
              <li>Exception reports flag manual pricing overrides and missing audits.</li>
              <li>Dashboard metrics show average processing time and variance per staff member.</li>
            </ul>
          </FeatureCard>
          <FeatureCard title="Vendor Experience" subtitle="Receipts & Compliance">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Email or print receipts with vendor signatures captured digitally.</li>
              <li>Store seller identification details for regulatory reporting.</li>
              <li>Buylist exports feed staff portal and optional vendor API endpoints.</li>
            </ul>
          </FeatureCard>
        </div>
      </Section>
    </div>
  );
}
