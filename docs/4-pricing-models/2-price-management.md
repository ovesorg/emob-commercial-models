# Price Governance

## Overview

Price governance ensures **pricing integrity**, **control**, and **consistent propagation** across Odoo and ABS.

Odoo is the **source of truth** for unit prices. ABS must derive its **service unit prices** (e.g., swap per-count price, kWh price) from Odoo-defined Product-Unit prices.

This section defines the basic governance areas; commercial and finance teams should expand with detailed policies and workflows.

## 1. Pricing Integrity & Control

Key principles:

- **Single Source of Truth**  All list prices and standard discounts are maintained in Odoo.
- **Role-Based Access**  Only authorized roles may change price lists or discount rules.
- **Approval Workflows**  Changes to key price points require documented approval (e.g., finance + commercial).

Commercial teams should define:

- Who can propose price changes.
- Who must approve them.
- Expected review cycles (e.g., quarterly price reviews).

## 2. Propagation Consistency (Odoo → ABS)

To keep ABS aligned with Odoo pricing:

- **Service PUs in ABS** must use unit prices derived from Odoo Product-Units.
- Any change to Odoo prices must trigger **synchronization** into ABS (manual or automated).
- Derived prices in ABS (e.g., effective per-swap rate from a pack) must be **traceable** back to Odoo.

Commercial and technical teams should define:

- Synchronization mechanisms (API, batch updates, configuration files).
- Frequency of updates (real-time vs. scheduled).
- Validation checks to detect inconsistencies.

## 3. Discounting & Promotions

Discounts and promotions must be controlled to avoid eroding margins or breaking channel agreements.

Principles:

- **Central Definition**  Core promotions are defined centrally in Odoo.
- **Channel Constraints**  Maximum discount levels or promotional leeway per channel are documented.
- **Auditability**  All discounts applied in Odoo must be audit-ready.

Commercial teams should document:

- Standard promotion types (e.g., introductory offers, seasonal campaigns).
- Who may grant additional discretionary discounts and within what limits.

## 4. Governance Checklist

Before rolling out or changing pricing for a major product or bundle:

- [ ] Odoo price lists updated and approved.
- [ ] Channel pricing (margins/commissions/revenue share) reviewed and agreed.
- [ ] ABS unit prices derived and synchronized from Odoo.
- [ ] Promotions and discounts configured and approved.
- [ ] Documentation updated (internal price books, market-specific models).
- [ ] Monitoring set up for revenue, margin, and anomaly detection.