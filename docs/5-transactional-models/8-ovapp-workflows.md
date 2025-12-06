# OVApp Workflows

## Overview

Frontend app brings together ABS and Odoo backend functionality to create a coherent user experience.

### Core principles
- ABS defines bundles and asset-based-service business logic, data models, and object behavior.
- Odoo deals with Product Units; no bundle mirroring in Odoo.
- ABS and Odoo must be in sync on Product Unit definition.
- ABS defines logical bundles; Odoo records Product Units as `sale.order` line items.

References: `../3-bundling-framework/1-types.md`, `../3-bundling-framework/2-pitfalls.md`, `../3-bundling-framework/3-bundle-templates.md`.

---

## Typical Steps (Shell)

1. Start session
2. Select bundle (ABS) → expand to Product-Units
3. Create transaction with Product-Units
4. Attempt payment (record attempts)
5. On success: confirm, fulfill, invoice
6. Trigger entitlements and subscriptions

Details to be documented per channel workflow.
