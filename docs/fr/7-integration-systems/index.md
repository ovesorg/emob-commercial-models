## Integration Systems

### System Alignment Overview

The Commercial Model Framework integrates with three core systems:

1. **Odoo** — Commercial workflow, pricing, orders, subscriptions
2. **ABS (Asset Backoffice System)** — Smart asset management, entitlements, IoT
3. **OVApp** — Customer and agent interfaces

### Architecture Consensus

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

### Product-Unit Mapping

How Product-Units map into digital systems:

| Product-Unit Type | Primary System | Secondary System | Sync Requirement |
|-------------------|----------------|------------------|------------------|
| Physical Product | Odoo (inventory) | ABS (asset tracking) | Real-time |
| Service | Odoo (subscription) | ABS (access rights) | Real-time |
| Deposit-Based | Odoo (payment) | ABS (entitlement) | Real-time |
| Digital/Operational | OVApp (UI) | ABS (backend) | Event-based |
| Regulatory | Odoo (documentation) | — | As-needed |

### Integration Principles

1. **Single Source of Truth**: Each data element has one authoritative system
2. **Real-Time Critical Path**: Commercial transactions sync immediately
3. **Event-Driven Updates**: Non-critical updates use async messaging
4. **Graceful Degradation**: Systems continue operating if integration temporarily fails
5. **Audit Trail**: All cross-system transactions logged
