## Structure

### Product-Unit: Core Commercial Construct

A **Product-Unit** is the basic commercial construct from which all other exchanges are built.

At its core, a Product-Unit represents a **quid pro quo**: *this for that*.

- "This" = a clearly defined entitlement, capability, or resource
- "That" = consideration received (typically payment, but may also be points, credits, or other value)

A Product-Unit is intentionally **separate** from the underlying physical asset or operational activity. It is the **contracted commercial layer** sitting on top of physical goods, services, or rights.

Examples:

- A battery pack (physical asset) vs. a "Battery Ownership" Product-Unit
- A swap action (operational activity) vs. a "Swap Credit" Product-Unit
- A library facility (infrastructure) vs. a "Monthly Membership" Product-Unit

---

### Product-Unit Dimensions

Every Product-Unit must be defined across five dimensions:

#### 1. Product-Unit (Identity)

A discrete commercial object that can be referenced in pricing, contracts, channel activities, and customer interactions.

**Characteristics:**

- Clearly identified and uniquely named
- Can appear alone or as part of a composition (bundle/offer)
- Must be traceable through the operational workflow
- Distinct from the underlying physical asset or activity it governs

#### 2. Product-Unit Value

Defines *why this unit exists commercially*.

**Includes:**

- Customer-perceived value
- Business commitments
- Risk exposure
- Expected lifecycle contribution (revenue / cost / retention)

#### 3. Product-Unit Context

Defines the **dependencies** required for a Product-Unit to function.

**Examples:**

- A swap credit only has meaning if a valid battery subscription exists
- An installation service requires a physical device as context
- A subscription requires an app onboarding context

#### 4. Product-Unit Obligations

Defines operational duties the company must fulfill when the Product-Unit is sold.

**Examples:**

- Warranty terms
- Service response time
- Charger maintenance
- App support
- Battery replacement guarantees

#### 5. Product-Unit Costs

Defines all costs directly mapped to obligations and value delivery.

**Categories:**

- Capital cost
- Operating cost
- Logistics & deployment
- Customer support
- Depreciation & lifecycle management

---

### Product-Unit Types

We classify Product-Units into four commercial categories (see detailed taxonomy in `2-taxonomy.md`):

- **Physical Product-Units** – Tangible assets (e.g., batteries, vehicles, chargers).
- **Digital Product-Units** – Access, data, and software-defined capabilities.
- **Service Product-Units** – Operational value (e.g., swap services, maintenance, **subscription services**).
- **Contract Product-Units** – Entitlements and obligations (e.g., deposits, long-duration swap rights, rental/lease rights, membership contracts).

At the Product-Unit level, what matters is **how the entitlement is measured and exchanged**, not the underlying implementation.

---

### Metrics: How Product-Units Are Measured

In our commercial models, every Product-Unit must have a clear **metric** that describes "how much" is being granted, consumed, or owned, and a **unit** that specifies how that metric is measured.

Common metric patterns:

- **Piece / Unit** – fungible, discrete items
  - Example: 1 motorcycle, 1 charger, 1 helmet
- **Time (DURATION)** – how long something is valid or assigned
  - Example: `DURATION` measured in `DAY` or `HOUR` (subscription period, asset-assignment period)
- **Count (COUNT)** – dimensionless usage events
  - Example: number of swaps, number of rentals, number of activations; unit `1`, `1K`, or `1M`
- **Energy (ENERGY)** – consumption of electric energy
  - Example: `ENERGY` measured in `kWh` for battery charging and swap energy
- **Distance (DISTANCE)** – optional distance-based metrics
  - Example: `DISTANCE` measured in `KM`

Each Product-Unit must:

- Declare its primary **metric** (e.g., DURATION, COUNT, ENERGY)
- Declare the corresponding **unit** (e.g., DAY, 1, kWh, KM)
- Define what **one unit** of that metric entitles the customer to

---

### Product-Unit vs Underlying Asset/Activity

We explicitly distinguish a **Product-Unit** from the underlying physical asset or activity it controls.

- Physical asset: battery pack, motorcycle, charger, server
- Activity: swap operation, installation visit, inspection
- Product-Unit: the commercial wrapper defining rights and obligations around those assets/activities

Example (library analogy):

- Underlying service: operating a library
- Product-Units:
  - Membership validity (e.g., 30 days of access)
  - Borrowing quota (e.g., 5 books at a time)
  - Digital download quota (e.g., 10 e-books per month)

In our framework, **each of these is treated as a distinct Product-Unit**, each with its own metric and value. A concrete offering is a **composition** of multiple Product-Units.

---

### Composition: Building Offers from Product-Units

An actual commercial offering is constructed by combining one or more Product-Units into a coherent proposition.

- Simple offer: 1 Physical Product-Unit (vehicle) + 1 Service Product-Unit (installation)
- Complex offer (battery swap):
  - Contract Product-Unit (deposit or long-duration swap entitlement)
  - Service Product-Unit (weekly swap subscription service)
  - Service Product-Unit (per-swap credit, if needed)

By keeping Product-Units **small, unambiguous, and metric-based**, we gain:

- Maximum flexibility in how complex offers are constructed
- Clear tracing of which parts of the offer generate which obligations and costs
- Clean mapping into ABS and Odoo systems (ABS for bundle logic; Odoo for Product-Unit line items)

This is especially powerful for **service products** such as battery swap and charging, where:

- Access rights, time validity, and usage counts can all be separated into distinct Product-Units
- Business logic (eligibility, limits, bundles) is handled in ABS
- Commercial execution (pricing, invoicing, subscriptions) is handled at the Product-Unit level in Odoo.
