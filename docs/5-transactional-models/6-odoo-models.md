# Odoo Models

<!-- This file mirrors the content from 5-odoo-models.md to align with the new section order. -->

Here’s a single, developer-facing **Odoo Model SUMMARY**, with the **model changes first**, then the explanatory context.

---

## 1. Core Model Changes (DO THESE FIRST)

You only have **one new model** and **three new fields** on `sale.order`.

### 1.1 Extend `sale.order`

File: `models/sale_order.py`

```python
from odoo import models, fields

class SaleOrder(models.Model):
    _inherit = 'sale.order'

    x_channel_partner_id = fields.Many2one(
        'res.partner',
        string='Channel Partner',
        help='Partner company (dealer/merchant/franchisee) responsible for this sale.'
    )

    x_sales_rep_id = fields.Many2one(
        'res.partner',
        string='Sales Representative',
        help='External retail sales rep handling this order; stored as a partner, not an Odoo user.'
    )

    x_outlet_id = fields.Many2one(
        'ov.outlet',
        string='Sales Outlet',
        help='Outlet where this sales interaction took place.'
    )
```

> **Developer main job #1:** correctly add and expose these three fields on `sale.order`
> (and wire them to OVApp APIs).

---

### 1.2 Create new model `ov.outlet`

File: `models/ov_outlet.py`

```python
from odoo import models, fields

class OvOutlet(models.Model):
    _name = 'ov.outlet'
    _description = 'Retail Sales Outlet'

    name = fields.Char(required=True)

    code = fields.Char(
        string='Outlet Code',
        help='Short external identifier for this outlet (from OVApp/ABS or internal coding).'
    )

    channel_partner_id = fields.Many2one(
        'res.partner',
        string='Channel Partner',
        help='Channel Partner company (dealer/franchisee) that owns or operates this outlet.'
    )

    site_partner_id = fields.Many2one(
        'res.partner',
        string='Site / Address',
        help='Physical site record providing the canonical address for this outlet.'
    )

    warehouse_id = fields.Many2one(
        'stock.warehouse',
        string='Linked Warehouse',
        help='Optional warehouse/logistics site co-located with this outlet.'
    )

    active = fields.Boolean(default=True)
```

> **Developer main job #2:** implement `ov.outlet` and ensure outlets always use `site_partner_id` for address (no address lines on `ov.outlet` itself).

---

### 1.3 (Optional / Future) – Link PoS configs to Outlet

**Not required now**, but reserved:

```python
from odoo import models, fields

class PosConfig(models.Model):
    _inherit = 'pos.config'

    x_outlet_id = fields.Many2one(
        'ov.outlet',
        string='Sales Outlet',
        help='Outlet where this PoS configuration is normally used.'
    )
```

---

## 2. Conceptual Model – How We Use Existing Odoo Objects

We **reuse native Odoo models** and only add one new model:

* `sale.order` – the persistent **service event / retail session**.
* `res.partner` – polymorphic:

  * Customer
  * Channel Partner (company)
  * Sales Representative (person)
  * Site / physical address
* `stock.warehouse` – logistics warehouse (optional).
* `res.users` – internal users (e.g. generic OVApp connector), not reps.
* `ov.outlet` – **new** retail outlet model (commercial location concept).

### 2.1 Roles in `res.partner` (no schema changes, only conventions)

**Channel Partner (company)**

* `is_company = True`
* tagged as `"Channel Partner"`
* used by:

  * `sale.order.x_channel_partner_id`
  * `ov.outlet.channel_partner_id`

**Sales Representative (person)**

* `is_company = False`
* tagged as `"Sales Representative"`
* optionally `parent_id = Channel Partner`
* used by:

  * `sale.order.x_sales_rep_id`

**Physical Site (Address SoT)**

* `res.partner` record representing a **physical location**
* holds address, region, GPS
* used as SoT by:

  * `ov.outlet.site_partner_id`
  * `stock.warehouse.partner_id` (if co-located)

> **Single Point of Truth:** physical address always lives on `res.partner`, never duplicated on `ov.outlet`.

---

## 3. `sale.order` as the Service Event / Retail Session

From OVApp’s perspective:

* When a retail interaction begins, **create a `sale.order` immediately** in `state = 'draft'`.
* This order:

  * persists through interruptions,
  * can be resumed later,
  * tracks products, prices, and payment attempts,
  * anchors rep/channel/outlet attribution.

**Key native fields:**

* `partner_id` – customer.
* `company_id` – OVES legal entity.
* `user_id` – internal Odoo user (e.g. generic OVApp connector).
* `state` – `draft`, `sent`, `sale`, `done`, `cancel`.
* `order_line` – products (**Product-Units**: Physical, Digital, Service, Contract, Deposit).
* `payment_transaction_ids` – online/offline payment attempts.
* `invoice_ids` / `invoice_status` – accounting linkage.

**Extended fields:**

* `x_channel_partner_id` – which **Channel Partner** owns this sale.
* `x_sales_rep_id` – which **Sales Representative** handled it.
* `x_outlet_id` – at which **Sales Outlet** the interaction occurred.

This gives you:

* **QC & commission** → group by rep and channel partner.
* **Outlet analytics** → group by outlet and site.
* **Resumable flows** → order is persistent from the start.
* **Payment robustness** → failed attempts remain attached as `payment.transaction` records.

---

## 4. Outlet & Address Architecture

We **separate**:

* Outlet = commercial concept
* Warehouse = logistics concept
* Site = physical address (partner)

### 4.1 Outlet (`ov.outlet`)

* Identifies a **sales location**: shop, kiosk, van, pop-up, etc.
* Binds to:

  * `channel_partner_id` – “who runs this outlet”.
  * `site_partner_id` – “where is this outlet physically”.
  * `warehouse_id` – “does this outlet share a warehouse” (optional).

### 4.2 Address Single Source of Truth

Avoid duplicate addresses:

* Physical address is always on `res.partner` used as **Site**.
* If an outlet and a warehouse are co-located:

  * `ov.outlet.site_partner_id == stock.warehouse.partner_id`
* If an outlet has no warehouse:

  * `stock.warehouse` is empty
  * `site_partner_id` still points to the correct site partner.

---

## 5. Data Flow / Usage Pattern (OVApp ↔ Odoo)

1. **Start of session (OVApp):**

   * OVApp chooses:

     * Customer (or temp)
     * Channel Partner
     * Sales Rep
     * Outlet
   * OVApp calls Odoo to create `sale.order`:

     * `partner_id`
     * `x_channel_partner_id`
     * `x_sales_rep_id`
     * `x_outlet_id`
     * `state = 'draft'`

2. **During session:**

   * Add/update `order_line`.
   * Adjust prices/terms as allowed.
   * Order remains in `draft` as long as needed.

3. **Payment attempts:**

   * Odoo records `payment.transaction` entries for each attempt.
   * Failed attempts are **never lost**.
   * Outlet / rep / channel context stays attached through the order.

4. **Completion:**

   * On successful payment, OVApp/Odoo transition `sale.order` to `sale`.
   * Standard Odoo flow: invoicing, delivery, accounting.

5. **Analytics:**

   * Group/order by:

     * `x_sales_rep_id` (rep performance).
     * `x_channel_partner_id` (channel performance).
     * `x_outlet_id` (outlet performance).
     * `ov.outlet.site_partner_id` (site/region performance).
     * `payment_transaction_ids.state` (payment reliability).

---

## 6. Quick Reference Tables

### 6.1 Concepts → Models → Fields

| Concept                  | Model / Field(s)                                  | Purpose                                            |
| ------------------------ | ------------------------------------------------- | -------------------------------------------------- |
| Customer                 | `sale.order.partner_id`                           | End customer (native).                             |
| OVES Company             | `sale.order.company_id`                           | OVES legal entity issuing the order (native).      |
| Technical Odoo User      | `sale.order.user_id`                              | Generic OVApp connector user (native).             |
| Channel Partner          | `sale.order.x_channel_partner_id` → `res.partner` | Dealer / franchisee / merchant company.            |
| Sales Representative     | `sale.order.x_sales_rep_id` → `res.partner`       | External rep handling the order (not `res.users`). |
| Sales Outlet             | `sale.order.x_outlet_id` → `ov.outlet`            | Sales location (commercial concept).               |
| Outlet’s Channel Partner | `ov.outlet.channel_partner_id` → `res.partner`    | Which Channel Partner owns/operates the outlet.    |
| Outlet’s Site Address    | `ov.outlet.site_partner_id` → `res.partner`       | Canonical physical site / address.                 |
| Linked Warehouse         | `ov.outlet.warehouse_id` → `stock.warehouse`      | Optional logistics site linked to the outlet.      |
| Site Address SoT         | `res.partner` (as site)                           | Single point of truth for physical location data.  |
| Logistics Warehouse      | `stock.warehouse`                                 | Inventory / logistics (native).                    |

---

### 6.2 Custom Fields Summary

**On `sale.order`:**

| Field                  | Type                     | Description                                |
| ---------------------- | ------------------------ | ------------------------------------------ |
| `x_channel_partner_id` | Many2one → `res.partner` | Channel Partner company for this sale.     |
| `x_sales_rep_id`       | Many2one → `res.partner` | Sales Representative (partner, not user).  |
| `x_outlet_id`          | Many2one → `ov.outlet`   | Sales Outlet where interaction took place. |

**On `ov.outlet`:**

| Field                | Type                         | Description                           |
| -------------------- | ---------------------------- | ------------------------------------- |
| `name`               | Char                         | Outlet name.                          |
| `code`               | Char                         | External/technical outlet ID.         |
| `channel_partner_id` | Many2one → `res.partner`     | Channel Partner operating the outlet. |
| `site_partner_id`    | Many2one → `res.partner`     | Site / address (SoT).                 |
| `warehouse_id`       | Many2one → `stock.warehouse` | Optional linked warehouse.            |
| `active`             | Boolean                      | Standard active flag.                 |

---

That’s the **Odoo Model SUMMARY** in one place:

- Start with implementing the **one new model** and **three new fields**.
- Everything else (flows, analytics, future PoS integration) builds cleanly on top.

- Extending sale.order with _inherit = 'sale.order' means “take the original Sale Order model, keep all of its standard behavior exactly as is, and add our additional fields.”

  ## 6.3 Product-Unit Configuration in Odoo (Reference)

  This table summarizes key Odoo configuration fields for the reference Product-Units.  
  Canonical Product-Unit definitions live in `1-product-unit-model` and `2-product-unit-library`.  
  This is only the **Odoo configuration view**.

  | Product Name                                   | PU Category | Contract Type | Service Type | Odoo Type (`product.template.type`) | Invoice Policy               | Recurring? | Duration Handling                      |
  |------------------------------------------------|------------|---------------|-------------|-------------------------------------|------------------------------|-----------|----------------------------------------|
  | E3-Pro                                         | Physical   | n/a           | n/a         | `product` (stockable)               | Delivered quantities         | No        | n/a                                    |
  | S7                                             | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
  | S6H                                            | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
  | MotBat 30Ah                                    | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
  | MotBat 45Ah                                    | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
  | MotBat 100Ah                                   | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
  | Battery Swap Access – 45Ah – Weekly            | Service    | n/a           | Access      | `service`                           | Prepaid / ordered quantities | Often Yes | Explicit duration (e.g. 7 days)        |
  | Battery Swap Access – 45Ah – Monthly           | Service    | n/a           | Access      | `service`                           | Prepaid / ordered quantities | Yes       | Explicit duration (e.g. 1 month)       |
  | Swap Network Access – City – 12 Months         | Service    | n/a           | Access      | `service`                           | Prepaid / ordered quantities | Yes       | Explicit duration (12 months)          |
  | Charging Network Access – City – 12 Months     | Service    | n/a           | Access      | `service`                           | Prepaid / ordered quantities | Yes / No  | Explicit duration (12 months)          |
  | Battery Swap Usage – 45Ah – Per Swap           | Service    | n/a           | Gage        | `service`                           | Delivered quantities         | No        | Per-usage; no fixed duration           |
  | Battery Swap Usage – 45Ah – Pack of 50         | Service    | n/a           | Gage        | `service`                           | Delivered quantities         | No        | Consumed against prepaid balance       |
  | Energy Usage – kWh                             | Service    | n/a           | Gage        | `service`                           | Delivered quantities         | No        | Measured by kWh usage                  |
  | Swap Privilege – MotBat 45Ah                   | Contract   | Privilege     | n/a         | `service`                           | Prepaid / deposit-like       | Yes / No  | Contract term (e.g. 12/24/36 months)   |
  | Swap Privilege – MotBat 30Ah                   | Contract   | Privilege     | n/a         | `service`                           | Prepaid / deposit-like       | Yes / No  | Contract term                          |
  | Swap Privilege – MotBat 100Ah                  | Contract   | Privilege     | n/a         | `service`                           | Prepaid / deposit-like       | Yes / No  | Contract term                          |
  | Replacement Warranty – MotBat 45Ah – 24 Months | Contract   | Warranty      | n/a         | `service`                           | Prepaid                      | No        | Fixed term (24 months)                 |
  | Limited Warranty – E3-Pro – 24 Months          | Contract   | Warranty      | n/a         | `service`                           | Prepaid                      | No        | Fixed term (24 months)                 |
  | Motorbike Rental – E3-Pro – 12 Months          | Contract   | Rental        | n/a         | `service`                           | Recurring or prepaid         | Yes       | Contract term (12 months)              |
  | Maintenance Contract – E3-Pro – 12 Months      | Contract   | Maintenance   | n/a         | `service`                           | Recurring or prepaid         | Yes / No  | Contract term (12 months)              |