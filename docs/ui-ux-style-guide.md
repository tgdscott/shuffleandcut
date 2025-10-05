# UI & UX Style Guide

## Brand Alignment
- **Inspiration**: Blend the energetic retail vibe of retail.shuffleandcut.com with a clean, modern card marketplace aesthetic.
- **Tone**: Bold, confident, and collector-focused. Highlight rarity, condition, and pricing information with clarity.
- **Visual Hierarchy**: Use strong typography and contrasting accent colors to spotlight actionable items (buy, sell, transfer).

## Color Palette (Accessible WCAG AA)
- **Primary Crimson** `#C8102E`: Headlines, primary buttons, progress indicators.
- **Midnight Slate** `#1F1F2B`: Backgrounds for dashboards, card detail panels.
- **Cloud White** `#F7F7FB`: Page background, modals, cards.
- **Gold Accent** `#F5B041`: Highlights for premium offers, high-demand alerts.
- **Teal Support** `#3AC7B7`: Success states, stock levels, positive movements.
- Ensure 4.5:1 contrast for text on backgrounds; provide dark mode via token swap.

## Typography
- **Display**: "Bebas Neue" for set headers and hero statements.
- **Body**: "Inter" or "Roboto" for readability across devices.
- **Numerics**: Use tabular lining numerals via `font-feature-settings: "tnum"` for price columns.

## Layout Principles
- **Responsive Grid**: 12-column fluid grid with breakpoints at 480, 768, 1024, and 1440px.
- **Card Explorer**: Left filter rail, center grid/list toggle, right-side quick cart or buylist queue.
- **Operational Dashboards**: KPI band across top, tabbed navigation for Intake, Pricing, Transfers, Buylists, Reports.
- **Sticky Actions**: Keep primary CTAs ("Add to Buylist", "Transfer", "Save Pricing") persistent on mobile.

## Component Concepts
- **Inventory Card Tile**: Card art thumbnail, name, set icon, condition pills, location stock chips, inline price editing.
- **Pricing Rule Editor**: Stepper modal that shows base price, current adjustments, historical trend chart.
- **Buylist Table**: Grouped by set accordion; each row features card info, target quantity, offer price, and toggle for NM/LP/HP.
- **Intake Checklist**: Kanban-style columns for Pending Review → Sorted → Audited → Shelved with drag-and-drop.
- **Transfer Modal**: Auto-suggest target quantities, show current stock vs. target capacity at each location.

## Interaction Patterns
- Multi-select with keyboard shortcuts for power users (e.g., select multiple cards, bulk adjust prices).
- Toast notifications for quick confirmation; detailed logs appear in a collapsible activity feed.
- Inline validation with plain language guidance ("Offer exceeds configured maximum by $2.00").
- Utilize skeleton loaders and optimistic UI updates during batch operations.

## Accessibility & Inclusion
- Support screen readers with semantic HTML and ARIA labels on card metadata.
- Provide high-contrast mode toggle and respect reduced motion preferences.
- Ensure tab order matches visual layout; provide shortcuts for scanning workflows.

## Media & Asset Strategy
- Curated background art featuring MTG and Pokémon scenes with 15–25% opacity overlays.
- Vector set symbols stored as SVG, normalized to 24×24px; served from CDN.
- Dynamic hero sections featuring weekly "Hot Buys" or "Freshly Listed" items with optional embedded video loops.

## Sample Page Concepts
1. **Home / Storefront**: Hero carousel with promotional banners, featured sets, and quick links to buylists.
2. **Card Detail**: Full art, pricing trend sparkline, location availability chips, condition dropdown with auto-calculated pricing.
3. **Buylist Builder**: Filter chips for rarity, format, price tier; real-time summary of total payout and estimated processing time.
4. **Intake Dashboard**: Batch list with SLA timers, staff assignment avatars, and direct link to print labels.
5. **Mobile POS**: Simplified UI for event booths—scan card, confirm condition, assign to location, print receipt.
