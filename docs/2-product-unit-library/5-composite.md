# Composite Product-Units

## Overview

Composite Product-Units are Odoo BoM-style combinations of orthogonal Product-Units. They package independent elements into a single sales product.

**Distinction from Bundles:**

- **Composite (Odoo):** BoM-based packaging of independent elements (e.g., vehicle + charger + contract PUs).
- **Bundle (ABS):** Logical grouping of services that must operate together (e.g., Battery Circulation + Swap Network Access with aligned durations).

## Product Examples

### E3-Pro with Limited Warranty – 24 Months

**Components:**
- LEV E3-Pro (1 unit)
- Limited Warranty – E3-Pro – 24 Months (1 contract)

**Composite Logic:**
- **Category:** Composite Product-Unit
- **Metric:** Package (1 per customer)
- **Description:** E3-Pro motorbike with comprehensive 24-month warranty coverage
- **Value Proposition:** Simplified purchase (motorbike + warranty in one transaction), peace of mind

**Odoo Implementation:**
- Parent Product: "E3-Pro with Warranty – 24M"
- BoM Components: E3-Pro (Physical PU), Limited Warranty – E3-Pro – 24M (Contract PU)
- Pricing: Bundled price or itemized (motorbike + warranty fee)

---

### E3-Pro with Swap Privilege

**Components:**
- LEV E3-Pro (1 unit)
- Swap Privilege – E3-Pro (1 contract)

**Composite Logic:**
- **Category:** Composite Product-Unit
- **Metric:** Package (1 per customer)
- **Description:** E3-Pro motorbike with entitlement to purchase battery swap services
- **Value Proposition:** Turnkey solution for riders who plan to use swap services; deposit collected upfront

**Odoo Implementation:**
- Parent Product: "E3-Pro with Swap Privilege"
- BoM Components: E3-Pro (Physical PU), Swap Privilege – E3-Pro (Contract PU)
- Pricing: Motorbike price + privilege deposit (refundable)

---

### MotBat 45Ah with Replacement Warranty – 24 Months

**Components:**
- MotBat 45Ah (1 unit)
- Replacement Warranty – MotBat 45Ah – 24 Months (1 contract)

**Composite Logic:**
- **Category:** Composite Product-Unit
- **Metric:** Package (1 per customer)
- **Description:** 45Ah battery with full replacement warranty for defects or premature degradation
- **Value Proposition:** Risk mitigation for battery purchasers; guaranteed replacement if SoH drops below threshold

**Odoo Implementation:**
- Parent Product: "MotBat 45Ah with Warranty – 24M"
- BoM Components: MotBat 45Ah (Physical PU), Replacement Warranty – MotBat 45Ah – 24M (Contract PU)
- Pricing: Battery price + warranty fee

---

### MotBat 45Ah with Swap Privilege

**Components:**
- MotBat 45Ah (1 unit)
- Swap Privilege – MotBat 45Ah (1 contract)

**Composite Logic:**
- **Category:** Composite Product-Unit
- **Metric:** Package (1 per customer)
- **Description:** 45Ah battery with entitlement to swap services (for customers purchasing battery independently)
- **Value Proposition:** Enables swap access for battery-only purchasers (no motorbike)

**Odoo Implementation:**
- Parent Product: "MotBat 45Ah with Swap Privilege"
- BoM Components: MotBat 45Ah (Physical PU), Swap Privilege – MotBat 45Ah (Contract PU)
- Pricing: Battery price + privilege deposit (refundable)

---

### E3H Vehicle + Service Privilege Package – 12 Months

**Components:**
- LEV E3H (1 unit)
- Swap Privilege – MotBat 45Ah – 12 Months (1 contract)
- Asset-Assignment – E3H – 12 Months (1 contract)

**Composite Logic:**
- **Category:** Composite Product-Unit
- **Metric:** Package (1 per customer)
- **Description:** E3H motorbike with 12-month swap service privilege and vehicle-to-service binding
- **Value Proposition:** Complete vehicle sale + contractual entitlements package; enables subsequent service subscription purchases
- **Sales Order Structure:** Single line item representing vehicle + contracts; services sold as separate line items

**Odoo Implementation:**
- Parent Product: "E3H Vehicle + Service Privilege Package – 12M"
- BoM Components: E3H (Physical PU), Swap Privilege – MotBat 45Ah – 12M (Contract PU), Asset-Assignment – E3H – 12M (Contract PU)
- Pricing: Vehicle price + privilege deposit (refundable) + asset-assignment fee
- **Activation Flow:**
  - At sales order confirmation: E3H vehicle inventory allocated
  - At delivery: 45Ah Privilege activated (swap service entitlement)
  - At delivery: E3H Asset-Assignment binds vehicle ITEM ID to service plan in ABS

**Service Subscription (Separate Line Items):**
- 12-Month Battery Circulation Access (45Ah)
- 12-Month Swap Network Access
- Energy Gage (metered)

---

### Motorbike Starter Kit – E3-Pro

**Components:**
- LEV E3-Pro (1 unit)
- Home Charger – Standard (1 unit)
- Safety Equipment (1 set: helmet, reflective vest)
- Installation Kit (1 set: cables, mounting hardware)

**Composite Logic:**
- **Category:** Composite Product-Unit
- **Metric:** Kit (1 per customer)
- **Description:** Complete starter package for new E3-Pro owners
- **Value Proposition:** Convenience (one-click purchase), bundled pricing discount

**Odoo Implementation:**
- Parent Product: "E3-Pro Starter Kit" (BoM-enabled)
- BoM Components: E3-Pro, Home Charger, Safety Equipment, Installation Kit
- Pricing: Discounted from sum-of-parts (e.g., 10% off total component prices)

---

### Fleet Deployment Package – S7 (10 Units)

**Components:**
- LEV S7 (10 units)
- MotBat 45Ah (20 units — 2 batteries per motorbike for rotation)
- Fast Charger (2 units — shared charging infrastructure)
- Fleet Management Dashboard (1 license — platform access for 10 vehicles)

**Composite Logic:**
- **Category:** Composite Product-Unit
- **Metric:** Package (1 per fleet deployment)
- **Description:** Turn-key fleet deployment for commercial customers (delivery, logistics, ride-hailing)
- **Value Proposition:** Scalability, infrastructure setup, fleet management tools included

**Odoo Implementation:**
- Parent Product: "S7 Fleet Deployment Package (10 Units)"
- BoM Components: S7 (qty 10), MotBat 45Ah (qty 20), Fast Charger (qty 2), Fleet Dashboard (qty 1 license)
- Pricing: Volume discount + infrastructure setup fee

---

### Battery Swap Starter Pack

**Components:**
- Swap Privilege – MotBat 45Ah (1 contract — entitlement to swap services)
- Battery Swap Access – 45Ah – Monthly (1 month — first month prepaid)
- Battery Swap Usage – 45Ah – Pack of 50 (50 swaps — usage credit)
- MotBat 45Ah (1 unit — initial battery issuance)

**Composite Logic:**
- **Category:** Composite Product-Unit
- **Metric:** Starter Pack (1 per customer)
- **Description:** Complete onboarding package for battery swap service
- **Value Proposition:** Simplified onboarding (single transaction covers privilege, access, usage credits, initial battery)

**Odoo Implementation:**
- Parent Product: "Battery Swap Starter Pack – 45Ah"
- BoM Components: Swap Privilege (Contract PU), Swap Access (Service PU), Swap Usage Pack (Service PU), MotBat 45Ah (Physical PU)
- Pricing: Bundled onboarding discount (e.g., waived privilege deposit for first-time customers)

---

## Characteristics of Composite Product-Units

**Common Attributes:**

- **Component Independence** — Elements can function separately; composite is a convenience grouping.
- **BoM-Driven Structure** — Odoo BoM defines component list, quantities, and substitutions.
- **Flexible Pricing** — Can offer discounts, volume pricing, or promotional rates vs. sum-of-parts.

**Usage Notes:**

- Use composites for Odoo-side packaging of physical + contract PUs (e.g., vehicle + privileges + asset-assignment).
- Use ABS bundles when you need synchronized service behavior, entitlement logic, or asset-state-dependent rules.