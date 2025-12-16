## Service Templates

### 1. Basic Asset-Based Services for BSS

Bundles in ABS are built from simple, one-dimensional services. For Battery Swap Service (BSS), the core building blocks are:

- **Access-Type Services** (grant time-bounded access; require duration alignment):
  - Battery Circulation Access (FLEET, `usage_metric: DURATION`, `usage_unit: DAY`)
  - Swap Network Access (FLEET, `usage_metric: DURATION`, `usage_unit: DAY`)
  - Asset-Assignment (ITEM, `usage_metric: DURATION`, `usage_unit: DAY`, binds vehicle ITEM ID from THING)
- **Gage-Type Services** (monetize usage; no duration field):
  - Energy Gage (`usage_metric: ENERGY`, `usage_unit: kWh`)
  - Swap Count (`usage_metric: COUNT`, `usage_unit: 1`)
- **Contract Product-Units** (long-duration entitlements):
  - Privilege, Rental, Warranty, Asset-Assignment contracts

These services and contracts are defined in the Product-Unit Library and BSS setup data; ABS bundles them into meaningful offerings.

### 2. Bundle Design Principles (ABS / BSS)

When designing bundles in ABS, apply these principles:

- **Build from 1D services**: each component has a single clear metric and unit.
- **Align durations for access-type services**: Battery Circulation Access and Swap Network Access in the same bundle must share the same duration.
- **Separate entitlement from usage**: Contract PUs (Privilege, Rental, Warranty, Asset-Assignment) express long-lived rights; gage-type services express actual consumption.
- **Keep Odoo composites separate**: Odoo composites (BoM kits) package PUs for sales; ABS bundles define how services work together operationally.

The templates below focus on **Battery Swap Service (BSS)** as the first major business model.

---

### 3. Standard Bundle Template

Use this template to define any bundle:

```markdown
# Bundle: [Name]

## Bundle Classification
- **Type**: [Logical Grouping / Value Proposition / Channel-Specific / Mission]
- **Target Segment**: [Customer segment or use case]
- **Sales Channels**: [Where this bundle can be sold]

## Components

### Physical Product-Units
- [Component 1]: [Quantity]
- [Component 2]: [Quantity]

### Service Product-Units
- [Service 1]: [Duration / Terms]
- [Service 2]: [Duration / Terms]

### Contract Product-Units
- [Contract 1]: [Type / Duration / Terms]

### Digital Product-Units
- [Digital component 1]
- [Digital component 2]

## Value Proposition

### Customer Value
- [Benefit 1]
- [Benefit 2]
- [Economic advantage vs. individual purchase]

### Use Case Addressed
[Description of complete customer workflow or mission this bundle solves]

## Pricing

### Individual Component Pricing
- [Component 1]: [Price]
- [Component 2]: [Price]
- **Total if purchased separately**: [Sum]

### Bundle Pricing
- **Bundle Price**: [Price]
- **Customer Savings**: [Discount amount or %]
- **Bundle Margin**: [Target margin %]

## Combined Obligations

### Service Levels
- [Aggregated SLA across all components]

### Warranty Coverage
- [Physical products]: [Terms]
- [Services]: [Terms]

### Support Requirements
- [What company must deliver across all components]

## Fulfillment Workflow

### Sequence
1. [Step 1: e.g., Process payment]
2. [Step 2: e.g., Activate contracts and privileges]
3. [Step 3: e.g., Deliver physical goods]
4. [Step 4: e.g., Activate services in ABS and Odoo]
5. [Step 5: e.g., Complete app onboarding]

### Dependencies
- [System requirements]
- [Asset availability]
- [Customer prerequisites]

### Completion Criteria
- [How we know bundle is fully delivered and active]

## System Configuration

### Odoo Setup
- Product template ID: [ID]
- Pricelist rules: [Reference]
- Subscription configuration: [Details]

### OVApp / ABS Workflow
- Agent sales flow: [Workflow name/ID]
- Customer activation flow: [Workflow name/ID]

## Contract Terms

### Inclusions
- [Explicitly listed components and services]

### Exclusions
- [What is NOT included to manage expectations]

### Renewal/Cancellation
- [Terms for ongoing services within bundle]
- [Refund policy for deposits]
- [What happens to physical components]

## Agent Guidance

### Sales Narrative
[Simple 2-3 sentence pitch agents can use]

### Eligibility
- [Customer qualifications or prerequisites]

### Common Questions
1. Q: [Question]
   A: [Answer]
2. Q: [Question]
   A: [Answer]
```

---

### 4. BSS Bundle Templates

The following templates focus on **Battery Swap Service (BSS)**, combining Privilege, Access-Type services, Gage-Type services, and supporting Physical PUs.

#### 4.1 BSS Starter Bundle – Commuter

**Intent:** Enable daily commuters to adopt battery swap with predictable monthly cost.

```markdown
# Bundle: BSS Starter – Commuter (45Ah)

## Bundle Classification
- **Type:** Value Proposition / Mission
- **Target Segment:** Daily commuters (urban riders)
- **Sales Channels:** Agent network, retail outlets

## Components

### Physical Product-Units
- MotBat 45Ah: 1 unit (initial battery issuance)

### Service Product-Units
- Battery Swap Access – 45Ah – Monthly: 1 (access-type)
- Swap Network Access – City – 12 Months: 1 (access-type)
- Battery Swap Usage – 45Ah – Pack of 50: 1 (gage-type)

### Contract Product-Units
- Swap Privilege – MotBat 45Ah: 1 (privilege contract)

### Value Proposition

#### Customer Value
- Predictable monthly cost for swap access
- Enough swap credits for typical commuting patterns
- No need to own or maintain multiple batteries

#### Use Case Addressed
- Urban commuter who rides daily and needs reliable energy without downtime.

## Fulfillment Workflow
1. Process payment and register customer
2. Activate Swap Privilege – MotBat 45Ah
3. Issue MotBat 45Ah battery
4. Activate Swap Access and Network Access services
5. Load 50 swap credits in ABS
```

#### 4.2 BSS Professional Bundle – Delivery Rider

**Intent:** Support high-usage delivery riders with extended swap capacity and network coverage.

```markdown
# Bundle: BSS Pro – Delivery Rider (45Ah)

## Bundle Classification
- **Type:** Mission / Channel-Specific
- **Target Segment:** Professional delivery riders
- **Sales Channels:** Agent network, B2B contracts

## Components

### Physical Product-Units
- MotBat 45Ah: 2 units (rotation for high usage)

### Service Product-Units
- Battery Swap Access – 45Ah – Monthly: 1 (access-type)
- Swap Network Access – City – 12 Months: 1 (access-type)
- Battery Swap Usage – 45Ah – Pack of 150: 1 (gage-type)

### Contract Product-Units
- Swap Privilege – MotBat 45Ah: 1 (privilege contract)

### Value Proposition

#### Customer Value
- Higher swap capacity for intensive daily use
- Reduced downtime via second battery
- Preferential pricing vs. buying services separately

#### Use Case Addressed
- Full-time delivery rider requiring continuous operation throughout the day.
```

#### 4.3 BSS Fleet Bundle – SME Fleet (10 Bikes)

**Intent:** Provide a complete BSS solution for small fleets.

```markdown
# Bundle: BSS Fleet – SME (10 Vehicles)

## Bundle Classification
- **Type:** Mission / Channel-Specific
- **Target Segment:** Small fleets (SMEs)
- **Sales Channels:** Direct sales, B2B

## Components

### Physical Product-Units
- LEV S7: 10 units
- MotBat 45Ah: 20 units (2 per vehicle)

### Service Product-Units
- Battery Swap Access – 45Ah – Monthly: 10 (access-type)
- Swap Network Access – City – 12 Months: 10 (access-type)
- Battery Swap Usage – 45Ah – Pack of 300: 1 (shared gage-type)

### Contract Product-Units
- Swap Privilege – MotBat 45Ah: 10 (one per vehicle/user)

### Value Proposition

#### Customer Value
- Turnkey solution for launching an electric delivery fleet
- Consolidated pricing for vehicles, batteries, and swap services
- Simplified operations via shared swap pool

#### Use Case Addressed
- SME launching or electrifying a delivery or logistics fleet.
```

---

### Composite Offerings

Composite commercial offerings are modeled as **ABS bundles**, not as single Product-Units.

For bundle types, templates, and design principles, see:

- [Bundle Design](1-bundle-design.md)
