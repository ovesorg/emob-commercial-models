# Bundle Design

## Overview

Bundles belong to the **ABS domain**.

- **Odoo** handles **Product-Units (PUs)** as atomic line items in sales orders.
- **ABS** designs and manages **bundles** as logical commercial constructs, then expands them into PUs before pushing to Odoo.

A bundle is a **coherent set of services (and supporting PUs)** that must work together to deliver a specific business outcome. It is built on top of Service Product-Units but usually spans **multiple dimensions of the same physical assets**.

### Multi-Dimensional Services on the Same Asset

The same physical asset (e.g., a MotBat battery) can support several distinct service dimensions:

- **Swap Count**  service metered by number of swaps
- **Cycle Count**  service metered by full/partial charge-discharge cycles
- **Rental Time**  service granting time-based usage rights
- **Charging Service**  service providing energy and charging sessions
- **Energy Metering**  service metering kWh dispensed

Each of these is modeled as a **separate Service Product-Unit**, so that different business models (pricing, channels, obligations) can be engineered independently.

### Parallel Infrastructure Services

Depending on what the bundle is supposed to offer, **other parallel services must be present** and correctly bundled. Examples:

- A **Swap Service** must be paired with:
  - **Swap Network Access** (service PU)
  - **Battery Circulation** (service PU)
  - **Operational Readiness** (swap stations, attendants, logistics)
- A **Battery Rental** must be paired with:
  - **Charging Service** (service PU)
  - Optionally **Energy Metering** (service PU) if energy dispensed needs to be gaged

Behind the scenes, this implies:

- Battery circulation is physically available from the prescribed Swap Network.
- Swap Network is deployed at the right locations.
- Attendant crew and operational staff are on duty.
- Commercial and operational deals have been set up between parties.

Bundles therefore encode not just **commercial packaging**, but also **infrastructure assumptions and dependencies**.

## BSS (Battery Swap Service) as Primary Use Case

The first major business model is **Battery Swap Service (BSS)**. BSS bundles typically combine:

- **Privilege Contracts** (Swap Privilege for specific motorbike/battery models)
- **Access-Type Services** (Battery Swap Access, Swap Network Access, Charging Network Access, Asset Assignment)
- **Gage-Type Services** (Swap Usage, Energy Usage)
- **Supporting Physical PUs** (MotBat batteries, chargers, motorbikes)

BSS bundles must ensure that:

- Swap infrastructure is deployed and available.
- Battery circulation pool is sized appropriately for demand.
- Swap Network and Charging Network are coordinated.
- Privilege, access, and usage services are aligned in duration and scope.
- Asset Assignment service binds specific vehicle ITEM ID (from THING/DIRAC) at purchase/activation time.

The design of BSS bundles should always start from:

1. **Business intent** — what mission or use case we are enabling (e.g., last-mile delivery, ride-hailing, commuter use).
2. **Required services** — which service dimensions on the same assets are needed (swap, rental, charging, energy metering, asset assignment).
3. **Infrastructure prerequisites** — what networks and circulation services must be active.

---

## Bundle Classification

Bundles are classified by their primary design intent:

### 1. Logical Grouping Bundles

Product-Units that naturally belong together for functional or operational reasons.

**Examples:**
- Battery + Charger + Installation
- Motorcycle + Registration Service
- Vehicle + Basic Accessories Kit

**Characteristics:**
- Components have strong interdependencies
- Rarely sold separately in practice
- Simplifies inventory and fulfillment

### 2. Value Proposition Bundles

Created to address specific customer use cases or economic incentives.

**Examples:**
- Starter Kit Bundle (complete new customer setup)
- Delivery Driver Pack (commercial use optimization)
- Multi-Battery Efficiency Bundle (high-usage customer)

**Characteristics:**
- Tailored to customer segment needs
- Provides economic discount vs. individual purchase
- Addresses complete workflow or use case

### 3. Channel-Specific Bundles

Optimized for specific sales channels or distribution models.

**Examples:**
- Agent Sales Starter Package
- Franchise Standard Inventory Bundle
- Self-Service App-Only Bundle

**Characteristics:**
- Matches channel capabilities and constraints
- Simplified for channel training
- Pre-configured for channel pricing rules

### 4. Mission/Use-Case Bundles

Designed around specific customer missions or operational scenarios.

**Examples:**
- Last-Mile Delivery Bundle
- Ride-Hailing Professional Bundle
- Rural Area Extended Range Bundle

**Characteristics:**
- Addresses complete operational need
- May include specialized configurations
- Higher value, longer decision cycle

## Bundle Hierarchy

Bundles can contain:
- **Base Product-Units** (atomic elements)
- **Other Bundles** (nested bundles for complex offerings)

**Caution**: Avoid excessive nesting (max 2 levels) to prevent:
- Obligation tracking complexity
- System performance issues
- Agent confusion
- Customer misunderstanding

---

## Complexity & Pitfalls of Bundling

This section must be part of every bundling design.

### 1. Hidden Obligations

**Risk:**
Bundling components may create unforeseen obligations or service-level requirements.

**Examples:**
- Bundling charger installation with vehicle sale creates warranty liability across both
- Combining physical product with subscription creates long-term support obligation
- Free training included in bundle becomes ongoing expectation

**Mitigation:**
- Document all obligations across all bundle components
- Validate operational capacity to deliver
- Include obligation limits in contract terms
- Train agents on scope boundaries

### 2. Misaligned Cost/Value

**Risk:**
Bundle pricing may not reflect true cost structure or value delivery.

**Examples:**
- Discount on bundle erodes margin on high-cost components
- Low-margin products subsidize high-margin products inappropriately
- Fulfillment cost of bundle exceeds individual component delivery

**Mitigation:**
- Perform full cost analysis before bundle pricing
- Validate margin targets across all components
- Monitor actual delivery costs post-launch
- Adjust pricing or composition based on data

### 3. Bundles That Break Automation Logic

**Risk:**
Bundle structure conflicts with Odoo/OVApp workflows or data models.

**Examples:**
- Subscription + physical product in single bundle confuses inventory tracking
- Deposit + service in bundle creates unclear refund logic
- Nested bundles exceed system hierarchy limits
- Bundle activates in wrong sequence in app

**Mitigation:**
- Test bundle in Odoo before commercial launch
- Validate OVApp workflows support bundle fulfillment
- Document system limitations
- Design bundles within known system constraints

### 4. Customer Misunderstandings

**Risk:**
Customers don't understand what's included, leading to dissatisfaction or disputes.

**Examples:**
- Customer expects unlimited service but bundle has usage caps
- Deposit refund conditions not clearly communicated
- Warranty coverage across bundle components unclear
- Renewal terms for bundled subscriptions confusing

**Mitigation:**
- Create clear, simple bundle descriptions
- Provide itemized component list
- Document what's included vs. what's optional
- Test customer comprehension before launch
- Include bundle details in contract and confirmation

### 5. Over-Complexity for Agents

**Risk:**
Agents struggle to explain, quote, or sell bundles effectively.

**Examples:**
- Too many bundle variations (SKU explosion)
- Unclear pricing rules or discount calculations
- Complex eligibility requirements
- Difficult to explain value proposition

**Mitigation:**
- Limit number of active bundles per segment
- Provide agent cheat sheets
- Build bundle quotation into app workflows
- Simplify eligibility rules
- Test agent comprehension during training

## Bundle Design Checklist

Before launching any bundle, validate:

- [ ] All obligations across components documented
- [ ] Cost/value alignment validated
- [ ] Odoo configuration tested
- [ ] OVApp workflows support fulfillment
- [ ] Customer-facing description created and tested
- [ ] Agent training materials prepared
- [ ] Contract terms include bundle specifics
- [ ] Refund/cancellation logic clear
- [ ] Pricing approved by finance
- [ ] Channel suitability confirmed
