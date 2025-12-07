# OVES Product Architecture: Source of Truth, Synchronization, and Meaning Exchange

## 1. Odoo = Source of Truth (SoT) for Product Units

Odoo owns and defines the **commercial representation** of a Product Unit (PU):

* product name & description
* category (physical, digital, service, contract)
* pricing rules
* channel visibility
* customer-facing attributes
* commercial obligations (deposits, subscription terms, billing logic)

### **Principle**

> "Odoo defines what a Product Unit *is* in the commercial sense."

ABS never invents or modifies PUs; it only **consumes** them.

---

## 2. ABS = Source of Truth for Asset Semantics, Entitlement, and Service Delivery

ABS interprets Product Units into **operational meaning**:

* physical asset identity & lifecycle
* entitlement state (active / inactive / restricted)
* swaps, charges, usage metrics
* service events and field activity
* smart-asset interactions
* technician or station interactions

### **Principle**

> "ABS defines what a Product Unit *means* in the real world — to smart assets, devices, and service personnel."

ABS's ORM schema exists only to support operational rules and historical record-keeping.

---

## 3. Synchronization: Odoo → ABS (Product Definition)

Although technical implementation (API, webhooks, ORM sync) is a detail, the **conceptual rule** is simple:

### **Odoo publishes Product Units; ABS subscribes to them.**

Odoo initiates:

* new PU creation
* updates to descriptions
* deprecation or archiving
* pricing and market definition

ABS receives these updates and attaches **operational semantics**:

* PU → physical asset type
* PU → entitlement rule
* PU → service workflow
* PU → deposit or contract behavior

ABS never alters core PU definitions — it **extends** PU meaning into the physical domain.

---

## 4. Synchronization: ABS → Odoo (Service State & Operational Feedback)

Odoo needs to know:

* whether the customer's entitlement is active
* whether subscriptions are valid
* whether deposits are refundable
* whether a swap or service has occurred
* asset performance or exception states
* service completions for billing validation

ABS reports back **state**, not definition.

### **Principle**

> "ABS informs Odoo about what happened; Odoo decides billing, refunds, renewals, and commercial consequences."

This maintains:

* commercial compliance
* accounting correctness
* customer transparency

---

## 5. Meaning Exchange Model (Simple but Powerful)

### **Odoo → ABS**

> "Here are the products.
> Here is how they are marketed, priced, described, and sold."

### **ABS → Odoo**

> "Here is what those products *actually triggered* in the field —
> involving assets, entitlements, and service interactions."

This creates a **closed semantic loop**:

* Odoo defines *intent*
* ABS executes *meaning*
* Odoo evaluates *outcome*

Exactly how modern service-driven ecosystems operate.

---

## 6. DIRAC = The Unifying Layer

DIRAC standardizes and formalizes:

* Product Unit mappings
* Bundle logic
* Entitlement consistency
* Odoo ↔ ABS synchronization
* State transitions
* External API exposure (UXI)
* Contract- and service-state lifecycle

DIRAC makes Odoo and ABS act as a **single coherent platform**, even though they are different engines:

### **DIRAC roles**

* Normalizes product definitions
* Applies bundling/eligibility rules
* Enforces protocol consistency
* Provides integration semantics
* Presents unified interfaces to frontend UXI
* Ensures bidirectional truth alignment

### **Principle**

> "DIRAC ensures that Odoo speaks commercially, ABS speaks operationally, and the outside world sees a single consistent ecosystem."

---

## 7. Final Summary (One Paragraph)

Odoo is the **source of truth** for Product Units — defining what products are, how they are marketed, priced, and sold. ABS consumes these units and adds **operational meaning**, translating commercial products into physical-asset activities, smart-device interactions, and service workflows. Odoo receives service state back from ABS to drive billing, refund, contract, and customer lifecycle logic. DIRAC harmonizes this exchange, ensuring that Odoo and ABS act as a single platform while UXI presents a unified experience to partners, agents, and customers.
