# Product-Unit Library

## Purpose

This library is a **curated showcase** of Product-Unit types and variety, designed to:

- **Inspire** commercial and technical teams with examples of products we have created and will create.
- **Demonstrate** logical structures and commercial meaning for Product-Units.
- **Organize** Product-Units by category for easy reference and understanding.

**This is NOT a complete product list** — that is the domain of Odoo and ABS. Rather, it is a living reference that collates and organizes Product-Unit types to give them purpose and context.

## Library Organization

Product-Units are organized into **five categories**:

### 1. Physical Product-Units
Tangible assets (batteries, vehicles, chargers, accessories) that can be serialized, tracked, and physically delivered.

### 2. Service Product-Units
Recurring or one-time services (access-type and gage-type services) delivered through infrastructure and asset interactions.

### 3. Contract Product-Units
Long-duration commitments and entitlements (Privilege, Warranty, Rental, Maintenance) that govern customer-business relationships.

### 4. Digital Product-Units
Media-type products (apps, digital content, IoT dashboards). Reserved for future use; not currently active.

### 5. Composite Product-Units
Odoo BoM-style combinations of **orthogonal elements** (e.g., motorbike + charger + helmet kit). 

**Critical Distinction:**

- **Composite (Odoo context)**: Arbitrary combinations of orthogonal elements via Bill-of-Materials (BoM). Elements are independent and can be combined flexibly.
- **Bundle (ABS context)**: Coherent groupings of **parallel service elements** that must work in tandem (e.g., Battery Circulation + Swap Network Access with matched durations). Bundles require functional coherence and synchronized operation.

Composites are structurally flexible; bundles must make operational sense as integrated offerings.

## Product-Unit Definition Framework

Each Product-Unit in this library is defined across five dimensions:

1. **Identity** — What it is (name, category, unique ID)
2. **Value** — Why it exists commercially (customer value, business value, risk exposure)
3. **Context** — Dependencies and prerequisites (customer state, asset availability, geographic coverage)
4. **Obligations** — What we must deliver (SLAs, guarantees, support commitments)
5. **Costs** — Financial implications (capital, operating, support costs)

## Reference

For the conceptual foundation of Product-Units, see:

- [Product-Unit Model](../1-product-unit-model/1-concepts.md) — Atomic commercial construct and five-dimensional framework
- [Taxonomy](../1-product-unit-model/2-taxonomy.md) — Category definitions and classification rules
- [Odoo System](../1-product-unit-model/4-odoo-system.md) — How Product-Units map to Odoo constructs
