# Pricing Models

Pricing in Odoo must balance two forces: **enticing offers that customers want to buy** and **pricing-in the real risks of Asset-Based Services** (batteries, vehicles, infrastructure). Risk-pricing is an art: it should quietly protect the business without making products feel punitive or antagonizing.

## Overview

Pricing is an **Odoo-domain responsibility**. Odoo is the system of record for:

- **Retail prices** and costing for all Product-Units (Physical, Service, Contract, Digital, Composite).
- **Channel pricing rules** (by agent, outlet, partner, or market).
- **Promotions and discounts** applied at product or bundle level.

This chapter is a **work-in-progress starting point** and provides a basic structure for commercial teams to expand. It does **not** attempt to fully define pricing strategy; instead, it sets out the key areas to document.

We focus on **retail pricing and costing** at a conceptual level only, since these are standard Odoo capabilities.

## Structure

- **Pricing Types** – How pricing dimensions (retail, B2B, and channel models) are expressed in Odoo.
- **Price Management** – Governance for pricing integrity, approvals, discount control, and Odoo → ABS price propagation.
- **Risks & Controls** – Risk highlights in swap-based models and the pricing, contract, and technical controls used to mitigate them.
- **Risk-Based Pricing Patterns** – How risk and controls are reflected in prices (deposits, surcharges, plan tiers).
