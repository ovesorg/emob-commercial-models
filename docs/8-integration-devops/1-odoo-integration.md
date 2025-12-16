# 1. Odoo Integration

## Overview

Odoo serves as the **commercial transaction system** for OVES, handling customer relationships, product catalogs, pricing, sales orders, payments, and subscriptions.

For detailed Odoo model specifications, see **[Section 5: Transactional Models - Odoo Models](../5-transactional-models/6-odoo-models.md)**. For how these models are used in sales orders, sessions, and channels, see **[Section 5: Transactional Models](../5-transactional-models/index.md)**.

For BSS service and bundle data structures in ABS Platform, see **[BSS Setup Data Types](2-bss-setup-data-types.md)**.

## System Alignment Overview

The commercial model framework integrates three core systems:

1. **Odoo** — Commercial workflow, pricing, orders, subscriptions
2. **ABS (Asset Backoffice System)** — Smart asset management, entitlements, IoT
3. **OVApp** — Customer and agent interfaces

Odoo and ABS form the two backend pillars (commercial vs. asset). OVApp is the client that orchestrates user flows via their APIs; it is never a system of record.

#### Architecture Consensus

**"Odoo handles commercial workflow. ABS handles smart assets. They handshake to deliver customer satisfaction."**

#### Odoo Responsibilities
- Customer-facing logic
- Product catalog and pricelists
- Sales orders and quotations
- Payment processing
- Subscription management
- Invoice generation

#### ABS Responsibilities
- Asset + entitlement logic
- Battery lifecycle tracking
- Swap station inventory
- IoT device management
- Asset pool allocation
- Deposit tracking

#### Odoo ↔ ABS Handshake
- Order placed in Odoo → triggers asset allocation in ABS
- Deposit received in Odoo → creates entitlement in ABS
- Subscription active in Odoo → enables swap access in ABS
- Asset event in ABS → updates service record in Odoo

#### DIRAC Role
- Flexible future-proofing layer
- Advanced analytics and ML capabilities
- Cross-system orchestration
- Emerging workflow support

#### Product-Unit Mapping

How Product-Units map into digital systems:

| Product-Unit Type       | Primary System      | Secondary System          | Sync Requirement |
|-------------------------|---------------------|---------------------------|------------------|
| Physical Product-Unit   | Odoo (inventory)    | ABS (asset tracking)      | Real-time        |
| Service Product-Unit    | Odoo (subscription) | ABS (access/usage rights) | Real-time        |
| Contract Product-Unit   | Odoo (contract)     | ABS (entitlement)         | Real-time        |
| Digital Product-Unit    | OVApp/Odoo (UI)     | ABS (operational state)   | Event-based      |
| Regulatory/Documentary  | Odoo (documentation)| —                         | As-needed        |

**Note:** ABS bundles never appear as products in Odoo. ABS expands bundles into their constituent Product-Units, which Odoo records as `sale.order` line items.

#### Integration Principles

1. **Single Source of Truth**: Each data element has one authoritative system
2. **Real-Time Critical Path**: Commercial transactions sync immediately
3. **Event-Driven Updates**: Non-critical updates use async messaging
4. **Graceful Degradation**: Systems continue operating if integration temporarily fails
5. **Audit Trail**: All cross-system transactions logged

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

## Odoo ↔ ABS Object Correspondence

| Commercial Concepts | Odoo Model Object | ABS Model Object | Is this a PU? (Yes/No, Odoo–ABS Coupling ID) |
|---------------------|-------------------|------------------|------------------------------------------------|
| Physical Product-Unit (e.g., E3H motorbike) | `product.template` (type = product, PU category = Physical) | Physical asset model + concrete ITEMs in THING/ARM (referenced via `asset_reference`, e.g. `vehicle-e3h`) | Yes – Odoo Physical PU key ↔ ABS `asset_reference` for the asset class; concrete assets coupled via ITEM ID from THING. |
| Service Product-Unit (Battery Circulation, Swap Network, Swap Count, Electricity) | `product.template` (type = service, PU category = Service) | BSS `service` objects (`bss-...-service-*.json`, e.g. `service-swap-network-*`, `service-battery-fleet-*`, `service-swap-count-*`, `service-electricity-*`) | Yes – Service PU key in Odoo ↔ ABS `service.id`. Service PUs on `sale.order.line` are the commercial face of ABS services. |
| Contract Product-Unit (Privilege, Warranty, Rental, Lease, Asset-Assignment contracts) | `product.template` (type = service, PU category = Contract) | BSS `plan` definitions and resulting `entitlement` records; plus ABS asset-assignment `service` objects (e.g. `service-asset-assignment-e3h-12month`) where a concrete vehicle ITEM is bound | Yes – Contract PU key ↔ ABS `plan.id` (for entitlements) and, where vehicle binding is required, ↔ ABS `service-asset-assignment-*` id. |
| Bundle (ABS service bundle, e.g., 12M swap bundle) | Not modeled as a product; appears in Odoo only as exploded `sale.order.line` items (Physical + Service + Contract PUs) | BSS `bundle` objects (`bss-...-bundle-*.json`) which group services into a coherent offer | No – ABS `bundle.id` → list of ABS `service.id` → mapped to Odoo PUs (`product_id`s) on the Sales Order. No bundle PU in Odoo. |
| Service Plan Template (ABS plan definition, “Barebone 30-day Swap Plan”) | Subscription/Contract PU in `product.template` that represents “subscribe to this plan” (PU category = Contract/Service) | BSS `plan` + `terms` objects (bundle + terms + period; no customer yet) | ABS plan: No; Odoo product: Yes – ABS is authoritative for `plan.id`. ABS provides `plan.id` → Odoo stores that on the Subscription PU as the coupling key. |
| Service Plan Instance (per-customer subscription) | `sale.order` + its `sale.order.line` using Subscription PUs and/or a subscription/contract object (e.g. `sale.subscription`) created from that order | ABS `plan_instance` + `entitlement` records per customer | No – One Odoo subscription instance ↔ one ABS `plan_instance`. Coupling via Odoo subscription/order id (`origin_ref`) ↔ ABS `plan_instance_id`, with user id and sales channel passed from Odoo as references (no commercial compute in ABS). |
| Sales Session (OVApp / ABS retail session) | `sale.order` (state = draft/sale) backing the OVApp session; OVApp session id wraps that order | OVApp/ABS session record plus resulting ABS `plan_instance` and `entitlement` records triggered when the order is confirmed | No – Session is not a PU. Coupling via `sale.order.id` (and OVApp session id) ↔ ABS session / `plan_instance_id` / `entitlement_id`. |
| User / Rider (Customer) | `res.partner` (customer) | ABS customer/account object referenced on plans, entitlements, and usage events | No – Coupled via partner id / external customer key stored in ABS. |
| Channel (Channel Partner) | `res.partner` tagged as Channel Partner (`is_company = True`, channel flags) | Channel/organisation reference on ABS plans/entitlements (e.g., `channel_partner_id` / `channel_ref`) | No – Coupled via partner id / external channel key from Odoo; reference only, no pricing compute in ABS. |
| Outlet (Retail Location) | `ov.outlet` linked to site `res.partner` (address SoR); referenced on `sale.order.x_outlet_id` | ABS site/station entity where swaps occur (e.g., `site_id` / `station_id`) | No – Outlet/site ids carried as refs on events/entitlements; no PU. |
| Sales Reps | `res.partner` referenced from `sale.order.x_sales_rep_id` | Typically not modeled as a first-class ABS object; rep info may appear only in metadata/logs | No – Identity lives mainly in Odoo; ABS may store a passive `sales_rep_ref` only. |
| Service Personnel (station operators, technicians) | Possibly `res.users` / `hr.employee` / `res.partner` (implementation detail; not central to commercial model) | ABS operator/user accounts attached to stations and maintenance workflows | No – Staff ids are coupled for ops/audit only; unrelated to PUs. |
| Odoo Product Packs / Composites (e.g., “E3H Vehicle + Service Package”) | Pack/composite PUs in `product.template` using BoM/pack mechanisms (PU category = Composite) | None directly; ABS sees only the decomposed child PUs (Physical/Service/Contract) and, separately, any ABS `bundle` modeling the coherent service combination | Yes (Odoo side) – Composite has its own PU in Odoo; ABS coupling is via the underlying child PUs’ keys that map to ABS `service.id` or asset models. No composite/bundle mirror in ABS. |
| Odoo Swap Privilege Contracts (long-term swap privilege) | Contract Product-Units in `product.template` (e.g., “Swap Privilege – MotBat 45Ah – 12 Months”) | BSS `plan`/`bundle` that defines swap rights, plus asset-assignment services (`service-asset-assignment-*`) where a specific vehicle ITEM must be bound | Yes (Odoo side) – Swap Privilege PU key ↔ ABS `plan.id` for swap entitlements, and when vehicle binding is required, ↔ specific ABS `service-asset-assignment-*` ids implementing long-term pairing. |

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

### Pattern 2: Order → Entitlement Handshake (Odoo → ABS)

This is the dual-pillar handshake: money and deposits stay in Odoo; ABS creates entitlements and allocates assets.

```
Odoo Event: sale.order confirmed
→ Webhook to ABS: /api/v1/entitlements/create
→ Payload: customer_id, product_units, deposit_amount, outlet_id

ABS Response: entitlement_id, asset_pool_allocation
→ Odoo stores in sale.order custom field (future)
```

### Pattern 3: Asset Event → Service Update (ABS → Odoo)

ABS reports usage events; Odoo applies billing logic via Service Product-Units and subscriptions.

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

