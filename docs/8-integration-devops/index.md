## Integration & DevOps

This chapter combines **technical integration**, **CI/CD**, and **governance** concerns as the hand-over interface between technical and commercial teams.

### 1. System Alignment Overview

The commercial model framework integrates with three core systems:

1. **Odoo** — Commercial workflow, pricing, orders, subscriptions
2. **ABS (Asset Backoffice System)** — Smart asset management, entitlements, IoT
3. **OVApp** — Customer and agent interfaces

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

| Product-Unit Type       | Primary System      | Secondary System    | Sync Requirement |
|-------------------------|---------------------|---------------------|------------------|
| Physical Product        | Odoo (inventory)    | ABS (asset tracking)| Real-time        |
| Service                 | Odoo (subscription) | ABS (access rights) | Real-time        |
| Deposit-Based           | Odoo (payment)      | ABS (entitlement)   | Real-time        |
| Digital/Operational     | OVApp (UI)          | ABS (backend)       | Event-based      |
| Regulatory              | Odoo (documentation)| —                   | As-needed        |

#### Integration Principles

1. **Single Source of Truth**: Each data element has one authoritative system
2. **Real-Time Critical Path**: Commercial transactions sync immediately
3. **Event-Driven Updates**: Non-critical updates use async messaging
4. **Graceful Degradation**: Systems continue operating if integration temporarily fails
5. **Audit Trail**: All cross-system transactions logged

---

### 2. BSS Setup Data Types

See [BSS Setup Data Types](2-bss-setup-data-types.md) for service and bundle data structures used in ABS Platform.

---

### 3. Odoo Integration

See [Odoo Models](../5-transactional-models/6-odoo-models.md) for core data structures. This section documents integration responsibilities and patterns.

#### Odoo Responsibilities

Odoo serves as the **commercial transaction system** for OVES, handling:

- Customer master data (`res.partner`)
- Product catalog and pricing (`product.template`, `pricelist`)
- Sales orders and quotations (`sale.order`)
- Payment processing (`payment.transaction`)
- Invoicing and revenue recognition (`account.move`)
- Subscription management (recurring service products)
- Channel Partner, Sales Rep, and Outlet tracking

#### Integration Touch Points

- **OVApp → Odoo**: Create/update sales orders, initiate payments, query product availability
- **Odoo → ABS**: Trigger asset allocation on order confirmation, sync entitlements on deposit receipt
- **ABS → Odoo**: Update service records based on asset events (swap completion, battery lifecycle)

#### Example Integration Patterns

- Retail session flow (OVApp ↔ Odoo)
- Order → Asset handshake (Odoo → ABS)
- Asset event → Service update (ABS → Odoo)

#### Data Sync Requirements (Excerpt)

| Data Element        | Sync Direction   | Frequency | Critical Path |
|---------------------|------------------|-----------|---------------|
| Customer creation   | OVApp → Odoo     | Real-time | Yes           |
| Sales order         | OVApp ↔ Odoo     | Real-time | Yes           |
| Entitlement trigger | Odoo → ABS       | Real-time | Yes           |
| Asset event log     | ABS → Odoo       | Event-based | No          |


---

### 4. OVApp & IoT Integration (Stubs)

These sections will later capture OVApp-specific and IoT-specific integration patterns:

- **OVApp Integration** – API contracts between OVApp and DIRAC/Odoo, session handling, authentication.
- **IoT Integration** – Device telemetry flows, station status reporting, and how ABS exposes IoT events to commercial systems.

---
