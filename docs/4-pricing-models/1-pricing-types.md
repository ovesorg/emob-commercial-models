# Pricing Types & Channel Models

## Overview

This section outlines **how pricing types and channel models are expressed in Odoo** for different Product-Units, and how they relate to basic order flows. It is intentionally light; commercial managers are expected to expand it with concrete price lists, channel terms, and examples.

We distinguish:

- **Retail Pricing** – List prices and standard discounts for end customers.
- **B2B Pricing** – Pricing for organizations, fleets, and partners.
- **Channel Pricing Models** – Trade margin, commission, and revenue share.
- **Future Models (Placeholders)** – Energy generation, charging, and pay-as-you-go.

## 1. Retail Pricing (Odoo → Customer)

Retail pricing is the **baseline list price** for each Product-Unit.

- Maintained in Odoo price lists.
- Supports market-specific price lists (e.g., Togo vs. other markets).
- Standard discounts can be configured by customer or segment.

**Typical order flow (Retail):**

1. Customer places order (via agent or app).
2. Odoo uses retail price list to price Product-Units on the order.
3. Any permitted discounts are applied (e.g., promotion, negotiated discount within limits).
4. Order is confirmed; invoicing and payment follow standard Odoo flows.

Commercial teams should document:

- Key retail price points for anchor products (e.g., E3-Pro, MotBat 45Ah).
- Typical discount bands by segment.

## 2. B2B Pricing (Odoo → Fleet / Partner)

B2B pricing applies when the **customer is an organization** (fleet operator, SME, franchisee, partner).

- Often uses **dedicated price lists** per account or segment.
- May combine **volume discounts**, **contracted rates**, or **custom bundles**.

**Typical order flow (B2B):**

1. B2B agreement defines price list, discounts, and channel model (margin/commission/revenue share).
2. Orders are placed in Odoo against the agreed price list.
3. Billing may be consolidated (e.g., monthly fleet invoice) rather than per transaction.

Commercial teams should document:

- Standard B2B tiers (small fleet vs. SME vs. enterprise).
- Which bundles and Product-Units are B2B-only.

## 3. Channel Pricing Models

Channel pricing defines **how retail or B2B prices translate into channel economics** (agents, outlets, partners, fleets).

Common strategies:

### 3.1 Trade Margin

- Odoo price lists define **wholesale/net** prices per channel.
- Channel sets final retail price within agreed bands, or uses recommended retail price (RRP).

**Use Cases:**

- Physical product sales (motorbikes, batteries, chargers).
- Channels with inventory risk and working capital exposure.

### 3.2 Commission

- Retail price is centrally owned (Odoo retail price list).
- Channel earns a **commission** per transaction.

**Use Cases:**

- Service-heavy offerings (BSS bundles, subscriptions).
- Agent networks where inventory remains centrally owned.

Commission structures:

- Flat percentage of revenue.
- Tiered based on volume or performance.
- Hybrid: fixed fee + variable component.

### 3.3 Revenue Share

- Net revenue from services is split between central entity and partners.
- Relevant when partners provide **infrastructure** (swap stations, charging sites) or operating capacity.

**Use Cases:**

- Co-invested Swap Network or Charging Network.
- Fleet partnerships where partners supply vehicles or riders.

Commercial teams should document for each channel type:

- Chosen model (margin, commission, revenue share, or mix).
- Default percentages/ranges and performance tiers.

## 4. Order Flow Context

### 4.1 Retail Flow (Agent / App)

- Customer-facing price = retail price (from Odoo) +/- allowed discounts.
- Channel earnings come from:
  - Trade margin (if channel buys and resells), or
  - Commission/revenue share (if inventory stays central).

### 4.2 B2B / Fleet Flow

- Contract defines price list, bundles, and channel model.
- Orders may be raised per vehicle, per bundle, or per billing period.
- Invoices can aggregate many underlying ABS events (swaps, kWh, etc.).

Details of exact order-to-cash flows belong in **Transactional Models**; here we only mark the pricing touchpoints.

## 5. Future Pricing Models (Placeholders)

The following models are expected but not yet fully designed. Placeholders are provided so commercial teams can append details later.

### 5.1 Energy Generation Pricing (Placeholder)

- Pricing for energy generated (e.g., solar, local microgeneration feeding charging infrastructure).
- May involve:
  - Feed-in tariffs or buy-back rates.
  - Revenue sharing with energy partners or site owners.

### 5.2 Charging Service Pricing (Placeholder)

- Pricing for **charging sessions** independent of swap (e.g., plug-in charging).
- Likely combines:
  - Access fees (per session or subscription).
  - Energy usage fees (per kWh).

### 5.3 Pay-As-You-Go (PAYG) Pricing (Placeholder)

- Fine-grained pricing for low-commitment users.
- Could include:
  - Per-swap PAYG without subscription.
  - Per-day or per-hour PAYG access to vehicles or batteries.
  - Microtop-ups for small energy amounts.

Commercial teams should extend these sections as new business models are defined.