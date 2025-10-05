export const technologyStack = {
  frontend: ['Next.js 14 with App Router', 'TypeScript + strict mode', 'Tailwind CSS design tokens', 'Radix UI primitives'],
  backend: ['NestJS API layer with GraphQL + REST gateways', 'BullMQ workers backed by Redis', 'Background schedulers for buylists'],
  data: ['PostgreSQL with RLS + JSONB', 'Redis cache & queues', 'Typesense search cluster'],
  operations: ['Dockerized services deployed to Kubernetes or Fly.io', 'Vercel-hosted frontend', 'Telemetry via OpenTelemetry + Grafana']
};

export const domainEntities = [
  {
    entity: 'Game',
    fields: 'id, name, default_buy_rules',
    notes: 'Supports MTG and Pokémon with configurable pricing baselines.'
  },
  {
    entity: 'Set',
    fields: 'id, game_id, name, release_date, icon_asset_url',
    notes: 'Linked to Scryfall/TCGplayer metadata sync jobs.'
  },
  {
    entity: 'Card',
    fields: 'id, set_id, name, collector_number, rarity, color_identity, mana_value, card_type',
    notes: 'Primary searchable object indexed in Typesense.'
  },
  {
    entity: 'InventoryItem',
    fields: 'id, card_id, condition, quantity_on_hand, reserved, location_id, price_sell, price_buy_override, metadata',
    notes: 'Row-level security enforces location permissions.'
  },
  {
    entity: 'PriceRule',
    fields: 'id, game_id, rarity, base_buy_price, base_sell_multiplier, condition_adjustments',
    notes: 'Drives base pricing with condition multipliers.'
  },
  {
    entity: 'BuylistRun',
    fields: 'id, created_at, game_id, rule_profile_id, filter_thresholds',
    notes: 'Versioned buylists with export manifests.'
  },
  {
    entity: 'IntakeBatch',
    fields: 'id, source, received_at, processed_by',
    notes: 'Workflow state machine for intake and QC.'
  }
];

export const workflowPlaybooks = {
  intake: [
    'Open batch with game, source, and expected volume metadata.',
    'Scan or search cards, applying live pricing and condition toggles.',
    'Recommend distribution by location based on priority rules and capacity.',
    'Confirm payout, capture vendor info, and print QR-coded labels.',
    'Route to supervisor audit before closing the batch.'
  ],
  balancing: [
    'Nightly sync updates sell/reserve quantities from POS + online.',
    'Threshold engine evaluates min/max per location per card.',
    'Generate transfer tasks with bin picks and barcode labels.',
    'Mobile execution confirms moves with audit logs.',
    'Exceptions flagged for pricing team review.'
  ],
  buylist: [
    'Select rule profile + game and rarity filters.',
    'Layer on velocity, price, and legality filters.',
    'Preview grouped by set with card-level offers.',
    'Export poster, counter, and binder formats.',
    'Version and distribute to staff + vendors.'
  ]
};

export const intakeKanban = [
  {
    column: 'Pending Review',
    details: ['New walk-in or event haul', 'Auto-tagged with source + staff owner']
  },
  {
    column: 'Sorted',
    details: ['Condition captured', 'Distribution targets staged']
  },
  {
    column: 'Audited',
    details: ['Supervisor spot-check complete', 'Discrepancies resolved']
  },
  {
    column: 'Shelved',
    details: ['Inventory committed', 'Labels printed & scanned']
  }
];

export const pricingTabs = [
  {
    value: 'profiles',
    label: 'Rule Profiles',
    description: 'Baseline rarity pricing + condition deltas per game.',
    bullets: [
      'Configure MTG and Pokémon ladders with NM/LP/HP adjustments.',
      'Store velocity multipliers and foil premiums per rarity.',
      'Attach protection toggles for manual override cards.'
    ]
  },
  {
    value: 'automation',
    label: 'Automation',
    description: 'Blend velocity, stock, and event signals.',
    bullets: [
      'Compare 7/30/90-day sales to guardrails with guardband clamps.',
      'Inventory imbalance detection triggers transfers + price nudges.',
      'Event overrides with countdown reminders to re-enable automation.'
    ]
  },
  {
    value: 'monitoring',
    label: 'Monitoring',
    description: 'Surfacing alerts and analytics for pricing teams.',
    bullets: [
      'Trend charts for margin and demand spikes.',
      'Competitor benchmarking via TCGplayer API ingestion.',
      'Slack/Teams notifications when supply dips below buffer.'
    ]
  }
];

export const storefrontHighlights = [
  {
    title: 'Unified Storefront',
    points: [
      'Responsive Next.js app with collector-grade merchandising.',
      'Real-time stock indicators per location with priority logic.',
      'Checkout flows integrate Stripe + TaxJar for compliance.'
    ]
  },
  {
    title: 'Operational Dashboards',
    points: [
      'Tabbed workspace for Intake, Pricing, Transfers, Buylists, Reports.',
      'KPI band showing throughput, transfer velocity, and ROI.',
      'Sticky primary actions for quick operations on mobile.'
    ]
  },
  {
    title: 'Extensible API Surface',
    points: [
      'GraphQL for card browsers and buylist frontends.',
      'REST webhooks for partner marketplaces and kiosks.',
      'Feature flags enabling phased rollout per location.'
    ]
  }
];
