# Shuffle & Cut Platform Blueprint

This repository implements a reference Next.js + Tailwind platform derived directly from the modernization briefs in [`docs/`](docs/). It translates the system architecture, operational workflows, and UI style guide into a working application scaffold that mirrors the recommended technology stack (Next.js, Radix UI, Tailwind, NestJS back-end interfaces, PostgreSQL domain model).

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the concept app.

### Available Screens

- `/` — Overview of platform pillars, pricing intelligence, and experience strategy.
- `/architecture` — Technology stack, domain model table, integration touchpoints, and security posture.
- `/operations` — Intake, inventory balancing, and buylist workflows with kanban and automation guardrails.
- `/pricing` — Pricing governance, dynamic adjustment levers, and buylist export formats.
- `/style-guide` — Tailwind tokens, typography samples, and component concept blueprints inspired by the UI brief.

Each screen is constructed with TypeScript, Tailwind tokens, and Radix UI tabs per the guidelines in the planning documents.

## Alignment with Planning Artifacts

- **System Architecture** — The `architecture` view enumerates the Next.js/NestJS/Typesense stack, RBAC, SSO, and integration strategy from [`docs/system-architecture.md`](docs/system-architecture.md).
- **Operational Workflows** — The `operations` view captures intake, inventory balancing, and buylist tasks outlined in [`docs/workflows-and-buylist.md`](docs/workflows-and-buylist.md).
- **UI & UX Style Guide** — The `style-guide` view implements the color palette, typography, and component concepts described in [`docs/ui-ux-style-guide.md`](docs/ui-ux-style-guide.md).

## Next Steps

1. Extend the Next.js frontend with authenticated routes backed by the NestJS/GraphQL services described in the architecture brief.
2. Implement PostgreSQL schemas and Redis-backed workers to operationalize pricing rules, transfers, and buylists.
3. Integrate Typesense for real-time card search and connect to Scryfall/TCGplayer ingestion jobs.
4. Layer in observability, CI/CD, and infrastructure automation per the deployment guidance.
