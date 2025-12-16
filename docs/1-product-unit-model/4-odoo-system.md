## Odoo Native Product Models

### Motivating Questions

### A. Why Rely on Odoo's Native Product Models?

Odoo has several built-in product constructs. Before introducing ABS logic or custom bundling frameworks, we must understand:

* What Odoo already supports natively
* Which product structures are stable, traceable, and safe to use
* How Odoo expects products to behave in sales, pricing, and fulfillment

This foundational clarity prevents:

* Unnecessary customization
* Misalignment between commercial and technical teams
* Uncontrolled "bundle explosion"

### B. Commercial Requirements

We need to design:

1. **Channel-specific product offerings**: Products differ by country, distributor, franchise, or sales agent
2. **Configurable bundles**: Define which Product-Units can be combined (e.g., Subscription ↔ Swap Credits ↔ Deposit)
3. **Long-lived commercial assets**: Deposits, service privileges, warranties, entitlement to swap programs
4. **Avoid combinatorial explosion**: Structured, rule-based bundles without creating 500 SKUs per market

### C. Example

Customer purchases:

* **"45Ah Battery Swap Option"**: Long-term entitlement (deposit or privilege)
* **"45Ah Battery Weekly Swap"**: Recurring service product (requires above entitlement)

Requires:

* Meaningfully related product structures
* Controlled bundling
* Traceable sales records
* Channel-specific pricing
* Compatibility with Odoo's subscription and service models

### D. What We Need from Odoo

* Product Categories
* Product Bundles / BoM Kits
* Company-specific and channel-specific products
* Pricelists
* Sales order behaviors
* Warranty / returns / deposits handling
* Service products and subscription models

### Odoo Native Product Constructs

We distinguish three fundamental Product-Unit categories in Odoo:

- **Physical Product-Units**: Tangible assets (e.g., MobBat batteries, bikes) modeled as stockable products.
- **Service Product-Units**: Intangible services and entitlements (e.g., Battery Circulation Access – Swap Network) modeled as service products.
- **Contract Product-Units**: Long-duration commercial commitments (e.g., 1-Year 45Ah Swap Entitlement) modeled as service products with contract/recurring behavior.

| Odoo Construct | What It Is | Purpose in Odoo | Relevance to OVES/ABS |
|----------------|------------|-----------------|----------------------|
| **Product Template** | Product family definition | Base object for sellable items | Where Physical, Service, and Contract Product-Units live; defines type |
| **Product Variant** | Specific variation | Attribute-based variations | Avoid for commercial packaging |
| **Product Category** | Classification tree | Accounting, reporting, segmentation | Group: Physical, Service, Contract, and Deposit Product-Units |
| **BoM (Kit/Set)** | Predefined bundle | Sales bundle (delivered as components) | Good for fixed bundles only |
| **Pricelist** | Price rules per channel | Channel/customer/market-specific pricing | Critical for channel differentiation |
| **Company-specific Products** | Products visible only in selected companies | Multi-company separation | Country/franchise-specific offerings |
| **Sales Order** | Commercial transaction record | Drives fulfillment, revenue recognition | Anchor for deposits, privileges, subscriptions, and contracts |
| **Service Product** | Product with no stock movement | Subscriptions, entitlements, swap credits | Swap subscription, access privilege, and contract Product-Units |
| **Subscription Model** | Recurring invoicing | Subscriptions, memberships | Weekly swap fees, recurring commitments, long-duration contracts |
| **Deposit Product** | Service + Liability Account | Returns/refunds, warranties | Battery swap privilege deposits |
| **Warranty/Return Rules** | After-sale processes | Standard RMA flow | Deposit recovery, entitlement cancellation |

### Architecture Alignment

**Odoo provides:**

* Product Templates for units
* Service Products + Liability Accounting for deposits/entitlements
* Pricelists for channel specialization
* BoM Kits for fixed bundles
* Subscription Models for recurring services
* Sales Orders for binding commercial logic

**ABS provides:**

* Dynamic bundling rules
* Entitlement logic
* Asset lifecycle management
* Usage tracking
