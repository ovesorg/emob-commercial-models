# ABS System

## Core Principle

**Product Unit** is the *shared atomic concept* between ABS and Odoo.
**Bundle** is an *ABS-only construct*, not an Odoo construct.

Odoo never needs to know "what a bundle is."
Odoo only needs to receive and process **Product Units**, each with its own commercial meaning.

---

## 1. ABS Creates and Owns Bundles

ABS is the **business logic engine** that:

* defines allowed combinations of Product Units
* enforces entitlement logic
* prevents invalid combinations (removes bundle explosion)
* applies market/tier/channel rules
* maps bundle selections to Odoo-ready Product Units
* drives the sales frontend with meaningful offerings

This keeps the bundling system:

* dynamic
* rule-based
* channel-aware
* market-aware
* entitlement-aware

And **not polluted by Odoo limitations**.

---

## 2. Odoo Should NOT Mirror Bundles

Odoo bundles (BoMs, kits, variants) should NOT be used for:

* commercial bundles
* entitlement bundles
* swap subscription bundles
* deposit + subscription + entitlement packages
* multi-tier subscription logic

Because Odoo's bundle mechanisms:

* are static
* are physical/inventory-oriented
* cannot express long-term entitlement logic
* explode into many SKUs if used naively
* confuse accounting and audit if services/deposits are hidden inside

So yes:
**Do not recreate ABS bundles in Odoo.**

---

## 3. How Bundles Appear in Odoo → as **sale.order lines**

When a customer selects a bundle in the frontend (OVApp):

### ➜ ABS expands the bundle → list of Product Units

### ➜ OVApp submits those unit products → sale.order in Odoo

Example:

**Bundle selected in ABS:**
"45Ah Premium Swap Start Pack"

**ABS internally maps to Product Units:**

* PU: Swap Deposit (45Ah)
* PU: Swap Entitlement (45Ah)
* PU: Weekly Swap Subscription
* PU: Helmet
* PU: Installation Service

**Odoo sees only:**

```
Line 1: Swap Deposit (45Ah)
Line 2: Swap Entitlement (45Ah)
Line 3: Weekly Swap Subscription
Line 4: Helmet
Line 5: Installation Service
```

This is **exactly how commercial systems are supposed to behave**.

Odoo does the commercial job:

* pricing
* invoicing
* subscription creation
* deposit accounting
* customer communication
* CRM
* reporting

ABS does the operational logic:

* entitlement
* swap rules
* asset management
* access control

---

## 4. This enforces the design principle clearly

### **Odoo handles all customer-facing commercial logic.**

* Sales orders
* Pricing
* Deposits
* Refundability
* Recurring billing
* Warranty
* Customer portal visibility

### **ABS handles all smart asset logic.**

* Swap usage
* Asset identity
* Eligibility
* Tier logic
* Validation
* Telemetry

**Bundles belong to ABS**
because bundling is actually *business-logic composition*, not "product composition."

---

## 5. Why this architecture is strategically correct

### ✔ No SKU explosion

Every combination becomes dynamic, not static.

### ✔ Clear commercial audit trail

Odoo sale.order lines represent each Product Unit transparently.

### ✔ Pricing remains channel-specific

Different channels can have different pricelists for the same PU.

### ✔ Entitlement remains ABS-driven

Because entitlement logic is not an Odoo feature.

### ✔ Bundles are market-flexible

ABS can change bundles without migrations in Odoo.

### ✔ Scalable internationally

Odoo stays clean and simple across all countries.

### ✔ Continuous deployment

ABS can add new bundle types without reconfiguring Odoo.

---

## 6. The final model in one sentence

**ABS decides what bundle a customer can buy.
Odoo decides how each product unit is commercially executed.**

That's it.
