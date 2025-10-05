# Operational Workflows & Buylist Strategy

## Inventory Balancing Workflow
1. **Data Refresh**: Nightly job synchronizes actual counts from POS/web sales and updates reservation quantities.
2. **Threshold Evaluation**:
   - Define target shelf minimum/maximum per card per location (e.g., Brea Min 2 / Max 8).
   - When Brea exceeds Max, create transfer suggestion to Franks until Franks hits its Max; remaining overflow is allocated to Online.
   - When Brea drops below Min, pull from Franks stock first, then Online.
3. **Task Generation**: System opens Transfer Tasks with pick lists, bin locations, and barcode labels.
4. **Execution & Audit**: Staff complete transfer via mobile device; quantities decrement/increment atomically with audit log entries.

## Intake & Grading Workflow
1. **Batch Creation**: Clerk selects game, source, and expected volume; system issues batch ID and printable cover sheet.
2. **Scanning**: Use camera or handheld scanner to capture card and set; fallback to search/autocomplete with fuzzy matching.
3. **Condition Capture**: Default NM with one-tap toggles for LP/HP; optional custom price override per card.
4. **Destination Suggestion**: Intake UI displays recommended distribution (Brea / Franks / Online) with reasoning ("Franks below target by 3").
5. **Price Confirmation**: Display base buy price, active adjustments (velocity, scarcity), final offer. Allow manual override with reason code.
6. **Payment & Receipt**: Summarize total payout, print/email receipt, and store vendor info for compliance.
7. **Quality Control**: Supervisor audits random batches; discrepancies flagged in dashboard.

## Pricing Governance
- **Rule Profiles**: Preset combinations of base rarity prices, condition adjustments, and velocity multipliers per game.
- **Protection Toggles**: Option to disable automation per card for manual pricing (event mode); show countdown reminder to re-enable.
- **Trend Monitoring**: Pricing page shows 7/30/90-day charts, competitor price comparison, and recommended adjustments.
- **Alerts**: Notify Pricing Manager when card demand surges (sales velocity spike) or supply falls below buffer.

## Buylist Generation Process
1. **Select Profile**: Choose game (MTG/Pokémon), location demand (storewide or location-specific), rarity filters, and threshold type (base-only, base+premium).
2. **Apply Filters**: Additional options—min price, format legality, card type, foil/alternate art.
3. **Preview Screen**: Grouped by set (newest to oldest) with set symbol, card name, condition offers, target quantity, last updated timestamp.
4. **List Types**:
   - **Hot Buys Poster**: Large type, top 50 cards, highlight percent premium above base.
   - **Counter Reference**: Two-column, medium font, includes NM/LP/HP pricing.
   - **Comprehensive Binder**: Four-column, small font, includes card number, format legality, price, target quantity.
5. **Export & Distribution**: Generate PDF/CSV; publish to staff portal and optionally email to vendors.
6. **Versioning**: Each buylist run stores parameters, generated file URLs, and approval status for compliance tracking.

## Reporting & KPIs
- **Intake Performance**: Average processing time per batch, discrepancies per staff member.
- **Buylist ROI**: Track payout vs. subsequent sales revenue for each card cohort.
- **Inventory Health**: Percent of cards within target range per location; highlight chronic overstock/understock.
- **Customer Experience**: Site analytics (conversion, average order value) and wait times for in-store intake.

## Implementation Considerations
- Automate data ingestion from Scryfall/TCGplayer daily to keep set metadata current.
- Build migration scripts to import legacy Access data and existing spreadsheets into PostgreSQL.
- Provide public API endpoints for buylist access and webhook support for partner marketplaces.
- Implement feature flags for gradual rollout (e.g., new intake workflow beta at Brea only).
