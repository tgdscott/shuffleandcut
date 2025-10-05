# System Architecture Blueprint

## Vision
Create a unified, modern web platform that centralizes Shuffle and Cut's trading card operations across retail locations (Brea, Frank & Son, and Online), while preserving the nuanced pricing controls that underpin the business.

The platform must provide:
- A responsive, retail-quality storefront experience for product discovery and checkout.
- Deep operational tooling for intake, grading, and multi-location inventory balancing.
- Automated pricing, buylist generation, and reporting tuned for Magic: The Gathering (MTG) and Pokémon TCG singles.

## Recommended Technology Stack
- **Frontend**: Next.js (React) with TypeScript, Tailwind CSS, and component primitives from Radix UI for accessible interactions.
- **Design System**: Custom Shuffle & Cut theme built on Tailwind CSS with reusable UI tokens (colors, spacing, typography).
- **Backend**: Node.js (NestJS) or .NET 8 API layer with GraphQL + REST endpoints to support web and future point-of-sale clients. Include background worker queues via BullMQ (Redis) or Hangfire.
- **Database**: PostgreSQL with row-level security and JSONB support for card metadata; Redis for caching and job queues.
- **Search**: Typesense or Elasticsearch for lightning-fast card search with typo tolerance, filtering by game, set, rarity, condition, and inventory.
- **Hosting**: Containerized deployment (Docker) orchestrated via Kubernetes or managed services (Fly.io, Render, Azure App Service). Use Vercel for the frontend if using Next.js.
- **Integrations**: TCGplayer or Scryfall APIs for set/card metadata; payment provider (Stripe) and tax automation (TaxJar or Avalara).

## Domain Model
```
Game
  id, name (MTG, Pokémon), default_buy_rules
Set
  id, game_id, name, release_date, icon_asset_url
Card
  id, set_id, name, collector_number, rarity, color_identity, mana_value, card_type
InventoryLocation
  id, name (Brea, Franks, Online), priority_order
InventoryItem
  id, card_id, condition (NM/LP/HP), quantity_on_hand, quantity_reserved,
  location_id, price_sell, price_buy_override, metadata
PriceRule
  id, game_id, rarity, base_buy_price, base_sell_multiplier, condition_adjustments
PricingAdjustment
  id, card_id or rarity scope, trigger (velocity, stock threshold, manual),
  adjustment_type (percent/absolute), applies_to (buy/sell/both)
Order
  id, channel (POS, web), status, total, tax, location_id, created_at
OrderLine
  id, order_id, card_id, condition, quantity, price_each
BuylistRun
  id, created_at, created_by, game_id, rule_profile_id, filter_thresholds
BuylistEntry
  id, buylist_run_id, card_id, condition, quantity_needed, offer_price
IntakeBatch
  id, source (walk-in, event), received_at, processed_by
IntakeLine
  id, intake_batch_id, card_id, condition, quantity_received, suggested_destination
```

## Pricing & Inventory Logic
1. **Base Pricing**: PriceRule defines floor buy price per rarity for each game. Condition adjustments apply globally (e.g., LP = -15%, HP = -35%).
2. **Dynamic Adjustments**:
   - Velocity-based: compare 7/30/90-day sales to thresholds, adjusting buy/sell prices within configured ranges.
   - Inventory Balancing: detect overstock at Brea to push cards downstream (Franks, Online) via automated tasks.
   - Event Overrides: ability to enable manual pricing profiles for events or hot lists.
3. **Manual Overrides**: Staff can set fixed buy/sell values per card/location that supersede automation until cleared.

## Intake & Sorting Workflow
1. Staff opens an **Intake Batch** on the tablet/desktop UI.
2. Search or scan cards; system pulls current pricing, condition multipliers, and target quantities by location.
3. The workflow recommends destination counts (e.g., “Brea: 4, Franks: 2, Online: 3”) based on priority rules and maximum caps.
4. Staff confirms, prints sorting labels with QR codes linking to the card record, and shelves accordingly.
5. Intake batches remain pending until a second staff member audits and closes the batch.

## Multi-Inventory Strategy
- **Priority**: Brea > Franks > Online. When Brea exceeds configured shelf quantity, overflow is split to Franks; additional overflow flows to Online.
- **Consistent Pricing**: Sell price is shared across locations but availability differs. System ensures price updates propagate across all InventoryItems for the card.
- **Transfer Orders**: Internal “transfer” documents move quantities between locations with audit trails.

## Buylist Generation
- Select game + rarity thresholds + velocity filters.
- Generate preview by newest sets first, listing set icon, card name, collector number, condition-specific offers, and demand quantity.
- Export templates: 
  - **Hot Buys**: 1–2 column large-print list for counter use.
  - **Comprehensive**: 4-column condensed layout for binder stations.
  - **Digital**: CSV/PDF with QR links for staff tablets.
- Scheduler auto-creates weekly buylists per game with notifications.

## Analytics & Reporting
- Sales velocity per card/set/location, with drill-downs for 7/30/90-day windows.
- Margin analysis per card and aggregated by rarity.
- Buylist performance (offers made vs. accepted, ROI).
- Inventory aging buckets and replenishment alerts.

## Security & Permissions
- Role-based access control (RBAC): Admin, Pricing Manager, Intake Specialist, Sales Associate.
- Audit logs for price changes, inventory transfers, and intake adjustments.
- Single sign-on (SSO) with Microsoft Entra ID or Google Workspace for staff management.

## Roadmap Phases
1. **Foundations**: Data model, authentication, inventory CRUD, pricing rules engine, manual overrides.
2. **Automation**: Intake workflow, dynamic adjustments, transfer orders, buylist generator.
3. **Experience**: Customer-facing storefront, responsive UI, loyalty integration, analytics dashboards.
4. **Optimization**: POS integration, kiosk mode, predictive replenishment, vendor APIs for sealed product.
