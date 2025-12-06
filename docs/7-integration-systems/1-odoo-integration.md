# Odoo Integration

## Overview

Odoo serves as the **commercial transaction system** for OVES, handling customer relationships, product catalogs, pricing, sales orders, payments, and subscriptions.

For detailed Odoo model specifications, see **[Section 5: Transactional Models - Odoo Models](../5-transactional-models/6-odoo-models.md)**.

---

## Integration Architecture

### System Responsibilities

**Odoo owns:**

- Customer master data (`res.partner`)
- Product catalog and pricing (`product.template`, `pricelist`)
- Sales orders and quotations (`sale.order`)
- Payment processing (`payment.transaction`)
- Invoicing and revenue recognition (`account.move`)
- Subscription management (recurring service products)
- Channel Partner, Sales Rep, and Outlet tracking

**Integration touch points:**

- **OVApp → Odoo**: Create/update sales orders, initiate payments, query product availability
- **Odoo → ABS**: Trigger asset allocation on order confirmation, sync entitlements on deposit receipt
- **ABS → Odoo**: Update service records based on asset events (swap completion, battery lifecycle)

---

## Core Models (Reference)

See **[6-odoo-models.md](../5-transactional-models/6-odoo-models.md)** for complete specifications.

### Custom Extensions

**`sale.order` extensions:**

- `x_channel_partner_id` → Channel Partner (dealer/franchisee)
- `x_sales_rep_id` → Sales Representative (external, not Odoo user)
- `x_outlet_id` → Sales Outlet location

**New model:**

- `ov.outlet` → Retail sales outlet (commercial concept)

---

## Integration Patterns

### Pattern 1: Retail Session Flow (OVApp ↔ Odoo)

```
1. OVApp initiates session
   → POST /api/sale.order (state='draft')
   → Returns order_id

2. Customer adds products
   → PATCH /api/sale.order/{order_id}/lines
   → Updates order_line records

3. Payment attempt
   → POST /api/payment.transaction
   → Links to sale.order

4. Payment success
   → Odoo transitions sale.order to 'sale'
   → Triggers ABS entitlement creation
```

### Pattern 2: Order → Asset Handshake (Odoo → ABS)

```
Odoo Event: sale.order confirmed
→ Webhook to ABS: /api/v1/entitlements/create
→ Payload: customer_id, product_units, deposit_amount, outlet_id

ABS Response: entitlement_id, asset_pool_allocation
→ Odoo stores in sale.order custom field (future)
```

### Pattern 3: Asset Event → Service Update (ABS → Odoo)

```
ABS Event: Battery swap completed
→ API call to Odoo: /api/subscription/usage_log
→ Updates service product usage counter

Odoo Action: Generate invoice line if usage exceeds subscription allowance
```

---

## Data Sync Requirements

| Data Element | Sync Direction | Frequency | Critical Path |
|--------------|----------------|-----------|---------------|
| Customer creation | OVApp → Odoo | Real-time | Yes |
| Product catalog | Odoo → OVApp | On-change | No |
| Sales order | OVApp ↔ Odoo | Real-time | Yes |
| Payment transaction | OVApp → Odoo | Real-time | Yes |
| Entitlement trigger | Odoo → ABS | Real-time | Yes |
| Asset event log | ABS → Odoo | Event-based | No |
| Invoice generation | Odoo → OVApp | Async | No |

---

## API Endpoints (Odoo)

### Sales Order Management

```
POST   /api/sale.order              Create draft order
GET    /api/sale.order/{id}         Retrieve order
PATCH  /api/sale.order/{id}         Update order fields
POST   /api/sale.order/{id}/lines   Add/update order lines
POST   /api/sale.order/{id}/confirm Transition to 'sale'
```

### Partner & Outlet

```
GET    /api/res.partner             Query customers/channel partners
POST   /api/res.partner             Create customer/rep/site
GET    /api/ov.outlet               List outlets
GET    /api/ov.outlet/{id}          Outlet details (includes site address)
```

### Payment

```
POST   /api/payment.transaction     Initiate payment
GET    /api/payment.transaction/{id} Check payment status
```

---

## Address Single Source of Truth

All physical addresses live on `res.partner` (site records).

**Pattern:**

- `ov.outlet.site_partner_id` → `res.partner` (address fields)
- `stock.warehouse.partner_id` → `res.partner` (same site if co-located)
- Never duplicate address fields on `ov.outlet` or `stock.warehouse`

**API behavior:**

When fetching outlet details, API should expand `site_partner_id` to include address:

```json
{
  "id": 123,
  "name": "Lome Central Outlet",
  "code": "TG-LM-001",
  "channel_partner_id": {"id": 45, "name": "Togo Distributors Ltd"},
  "site_partner_id": {
    "id": 78,
    "name": "Lome Central Site",
    "street": "Avenue de la Liberation",
    "city": "Lome",
    "country_id": {"id": 228, "name": "Togo"}
  }
}
```

---

## Analytics & Reporting

### Sales Performance by Channel Partner

```sql
SELECT 
  rp.name AS channel_partner,
  COUNT(so.id) AS order_count,
  SUM(so.amount_total) AS revenue
FROM sale_order so
JOIN res_partner rp ON so.x_channel_partner_id = rp.id
WHERE so.state IN ('sale', 'done')
GROUP BY rp.name
```

### Sales Performance by Outlet

```sql
SELECT 
  outlet.name AS outlet,
  site.city AS location,
  COUNT(so.id) AS order_count
FROM sale_order so
JOIN ov_outlet outlet ON so.x_outlet_id = outlet.id
JOIN res_partner site ON outlet.site_partner_id = site.id
GROUP BY outlet.name, site.city
```

### Sales Rep Performance

```sql
SELECT 
  rep.name AS sales_rep,
  COUNT(so.id) AS orders_handled,
  AVG(so.amount_total) AS avg_order_value
FROM sale_order so
JOIN res_partner rep ON so.x_sales_rep_id = rep.id
GROUP BY rep.name
```

---

## Error Handling

### Scenario: Payment fails mid-transaction

- `payment.transaction` record created with `state='error'`
- `sale.order` remains in `state='draft'`
- OVApp can retry payment or allow customer to resume later
- All context (rep, outlet, channel) preserved on order

### Scenario: ABS unavailable during order confirmation

- Odoo confirms `sale.order` normally
- Queues entitlement creation webhook for retry
- ABS processes when available
- Manual fallback: Odoo admin can view pending entitlements and trigger sync

### Scenario: Outlet address change

- Update `res.partner` (site) record only
- All outlets linked via `site_partner_id` reflect change immediately
- No data migration needed

---

## Security & Access Control

### OVApp API User

- Single technical `res.users` account for all OVApp traffic
- Limited to:
  - Create/update `sale.order` (draft only)
  - Create `res.partner` (customers)
  - Read `product.template`, `pricelist`, `ov.outlet`
  - Create `payment.transaction`
- Cannot access accounting, inventory management, or admin functions

### Sales Rep Access (Future)

If reps need direct Odoo portal access:

- Create portal users linked to `res.partner` (sales rep)
- Grant read-only access to their own orders (`x_sales_rep_id = current_user.partner_id`)
- No modification rights

---

## Implementation Checklist

- [ ] Implement `ov.outlet` model with all fields
- [ ] Extend `sale.order` with `x_channel_partner_id`, `x_sales_rep_id`, `x_outlet_id`
- [ ] Create API endpoints for order CRUD
- [ ] Configure OVApp technical user and permissions
- [ ] Implement webhook for Odoo → ABS entitlement creation
- [ ] Set up ABS → Odoo usage logging endpoint
- [ ] Create analytics views for channel/outlet/rep reporting
- [ ] Document address SoT pattern for developers
- [ ] Test payment failure recovery flow
- [ ] Test order resume after interruption

---

For model implementation details, see **[5-transactional-models/6-odoo-models.md](../5-transactional-models/6-odoo-models.md)**.
