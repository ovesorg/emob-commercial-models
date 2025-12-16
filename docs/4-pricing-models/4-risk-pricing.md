## Risk-Based Pricing Patterns in Odoo

### 1. The Central Dilemma

Pricing for Asset-Based Services must do two things at once: make offers feel attractive and simple to customers, and quietly price-in very real risks around asset loss, overstay, and collateral erosion. If we over-index on risk, products feel punitive and adoption suffers; if we under-index, the business carries hidden liabilities that show up later as write-offs, disputes, or unscalable economics.

This section does not define a single tariff. Instead, it describes patterns that commercial teams can combine with the basic pricing types in `1-pricing-types.md` and the risk mechanics in `3-risks-and controls.md`.

### 2. Mapping Risk Drivers to Price Components

Use the risk dimensions from `3-risks-and controls.md` to decide **which price components to expose in Odoo**:

- **Time in custody** → overstay fees or extended custody surcharges.
- **Asset value exposure** → deposit levels and non-refundable risk fees.
- **System resource occupancy** → quotas or block pricing for swap counts or kWh.
- **Behavioural and credit risk** → different plan variants or required deposits by segment.

All of these should appear as normal Odoo products, fees, or price list rules so that they remain transparent and auditable.

### 3. Guardrails for Commercial Teams

When designing risk-based pricing:

- Start from customer-facing simplicity; keep the number of visible fees low.
- Prefer **bundled plans** (where risk premium is baked into a simple monthly price) over long lists of penalties.
- Use deposits and overstay fees primarily as **behaviour-shaping tools**, not as profit centers.
- Document patterns explicitly so that different markets do not invent incompatible one-off hacks.

### 4. Where to Document Details

- Use `1-pricing-types.md` for **who pays what via which channel** (retail, B2B, agent, partner).
- Use `2-price-management.md` for **how prices and fees are maintained** in Odoo.
- Use `3-risks-and controls.md` for the **underlying risk narrative and control mechanisms**.
- Use this file to capture the evolving **catalogue of risk-pricing patterns** that link those concepts together.
