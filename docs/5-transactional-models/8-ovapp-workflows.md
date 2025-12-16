# OVApp Workflows

## Overview

Frontend app brings together ABS and Odoo backend functionality to create a coherent user experience.

### Core principles
- ABS defines bundles and asset-based-service business logic, data models, and object behavior.
- Odoo deals with Product Units; no bundle mirroring in Odoo.
- ABS and Odoo must be in sync on Product Unit definition.
- ABS defines logical bundles; Odoo records Product Units as `sale.order` line items.

### Vehicle Scan and Asset Assignment
- When selling a vehicle that must be bound to a service plan, OVApp scans and identifies the specific motorbike (VIN/QR), turning it into a concrete asset.
- **In Odoo**, that scan selects the relevant Physical Product-Unit and/or Asset-Assignment Contract PU, which appear as `sale.order` lines.
- **In ABS**, the same vehicle identifier (ITEM ID from THING) is used to create or update the `asset-assignment` service instance, binding that ITEM to the bundle for the contract duration.
- This keeps the Sales Order as the commercial record, while ABS owns the operational asset binding.

---

## Typical Steps

1. Start session
2. Select bundle (ABS) → expand to Product-Units
3. Create transaction with Product-Units
4. Attempt payment (record attempts)
5. On success: confirm, fulfill, invoice
6. Trigger entitlements and subscriptions

Details to be documented per channel workflow.
