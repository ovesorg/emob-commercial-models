## Togo Models

### 1. Context

- **Country**: Togo
- **City/Region**: Lomé metro area
- **Currency**: XOF (CFA franc)
- **Scope**: Battery Swap Service (BSS) for 2-wheelers and 3-wheelers in Lomé.

> **Responsibility Reminder (Togo Team)**: The Togo commercial team is responsible for creating and maintaining **pricelists for all Product-Unit categories** (Physical, Digital, Service, and Contract), ensuring that every PU and bundle defined here has a corresponding, up-to-date price configuration in Odoo.

This document maps Togo team inputs into **Product-Units (PUs)** and **bundles**, following the global Product-Unit model.

---

### 2. Togo Service Product-Units

#### 2.1 45Ah Battery Circulation Access (Swap Network) (Service PU)

- **Type**: Service Product-Unit
- **Name**: 45Ah Battery Circulation Access – Swap Network
- **Original Togo label**: "45Ah Battery Network Access"
- **Metric**: Number of swaps
- **Description**: Access to the Lomé Swap Network using the 45Ah Battery Circulation pool for 2- and 3-wheelers.

#### 2.2 100Ah Battery Circulation Access (Swap Network) (Service PU)

- **Type**: Service Product-Unit
- **Name**: 100Ah Battery Circulation Access – Swap Network
- **Original Togo label**: "100Ah Battery Network Access"
- **Metric**: Number of swaps
- **Description**: Access to the Lomé Swap Network using the 100Ah Battery Circulation pool for 2- and 3-wheelers.

#### 2.3 Energy Service (Battery kWh Quota) (Service PU, Candidate)

- **Type**: Service Product-Unit (Energy consumption)
- **Name**: Energy Service (Battery kWh Quota)
- **Original Togo label**: "Energy Service"
- **Metric**: kWh
- **Description**: Battery electricity quota allocation to balance energy consumed vs. number of swaps.
- **Togo Input Note**: Togo team recommends *combining* swap and energy services into a single construct by generating a credit converted into swap entitlement.

---

### 3. Togo Physical Product-Units

#### 3.1 E3-Pro (Motorcycle)

- **Category**: Physical Product-Unit
- **Name**: E3-Pro Electric Motorcycle
- **Original Togo label**: "E3-Pro"
- **Metric**: Piece (1 unit)

#### 3.2 S6 (Motorcycle)

- **Category**: Physical Product-Unit
- **Name**: S6 Electric Motorcycle
- **Original Togo label**: "S6"
- **Metric**: Piece (1 unit)

#### 3.3 S6H (Motorcycle)

- **Category**: Physical Product-Unit
- **Name**: S6H Electric Motorcycle
- **Original Togo label**: "S6H"
- **Metric**: Piece (1 unit)

#### 3.4 MobBat 30Ah (Battery)

- **Category**: Physical Product-Unit
- **Name**: MobBat 30Ah Battery
- **Original Togo label**: "MobBat 30Ah"
- **Metric**: Piece (1 unit)

#### 3.5 MobBat 45Ah (Battery)

- **Category**: Physical Product-Unit
- **Name**: MobBat 45Ah Battery
- **Original Togo label**: "MobBat 45Ah"
- **Metric**: Piece (1 unit)

#### 3.6 MobBat 100Ah (Battery)

- **Category**: Physical Product-Unit
- **Name**: MobBat 100Ah Battery
- **Original Togo label**: "MobBat 100Ah"
- **Metric**: Piece (1 unit)

---

### 4. Togo Bundles (from `togo-lome-inputs.md`)

The Togo team defines six bundles combining **Battery Circulation Access – Swap Network** with **duration** and **price**. As of initial Togo launch, only these six bundles are live; long-duration contract Product-Units in this document are design patterns for future offerings, not yet in production.

#### 3.1 B45 Bundles (45Ah Access)

- **B45-1**
  - Duration: 1 day / 24 hours
  - Included Service: 45Ah Battery Circulation Access – Swap Network
  - Quota: 1 swap
  - Price: 1,200 XOF

- **B45-7**
  - Duration: 7 days
  - Included Service: 45Ah Battery Circulation Access – Swap Network
  - Quota: 15 swaps
  - Price: 17,250 XOF

- **B45-30**
  - Duration: 30 days
  - Included Service: 45Ah Battery Circulation Access – Swap Network
  - Quota: 60 swaps
  - Price: 66,000 XOF

#### 3.2 B100 Bundles (100Ah Access)

- **B100-1**
  - Duration: 1 day / 24 hours
  - Included Service: 100Ah Battery Circulation Access – Swap Network
  - Quota: 1 swap
  - Price: 2,400 XOF

- **B100-7**
  - Duration: 7 days
  - Included Service: 100Ah Battery Circulation Access – Swap Network
  - Quota: 15 swaps
  - Price: 34,500 XOF

- **B100-30**
  - Duration: 30 days
  - Included Service: 100Ah Battery Circulation Access – Swap Network
  - Quota: 60 swaps
  - Price: 132,000 XOF

---

### 4. Mapping Togo Inputs → PUs and Bundles

#### 4.1 Service PUs Mapping

| Togo Input Label                         | PU Type  | PU Name                                    | Notes |
|-----------------------------------------|---------|--------------------------------------------|-------|
| "45Ah Battery Network Access"          | Service | 45Ah Battery Circulation Access – Swap Network    | Renamed to reflect Battery Circulation and Swap Network |
| "100Ah Battery Network Access"         | Service | 100Ah Battery Circulation Access – Swap Network   | Renamed to reflect Battery Circulation and Swap Network |
| "Energy Service" (kWh-based)           | Service | Energy Service (Battery kWh Quota)         | Name kept close to Togo input; clarified as kWh quota |

#### 4.2 Bundle Mapping

| Togo Bundle | Togo Input Product Label         | Bundle Type              | Component Service PU                               | Duration | Swap Quota | Price (XOF) |
|------------|----------------------------------|--------------------------|----------------------------------------------------|----------|-----------|-------------|
| B45-1      | 45Ah Battery Network Access      | Value Proposition Bundle | 45Ah Battery Circulation Access – Swap Network    | 1 day    | 1         | 1,200       |
| B45-7      | 45Ah Battery Network Access      | Value Proposition Bundle | 45Ah Battery Circulation Access – Swap Network    | 7 days   | 15        | 17,250      |
| B45-30     | 45Ah Battery Network Access      | Value Proposition Bundle | 45Ah Battery Circulation Access – Swap Network    | 30 days  | 60        | 66,000      |
| B100-1     | 100Ah Battery Network Access     | Value Proposition Bundle | 100Ah Battery Circulation Access – Swap Network   | 1 day    | 1         | 2,400       |
| B100-7     | 100Ah Battery Network Access     | Value Proposition Bundle | 100Ah Battery Circulation Access – Swap Network   | 7 days   | 15        | 34,500      |
| B100-30    | 100Ah Battery Network Access     | Value Proposition Bundle | 100Ah Battery Circulation Access – Swap Network   | 30 days  | 60        | 132,000     |

---

### 5. Togo Contract Product-Units (Long-Duration)

Togo long-duration contracts can be seen as permutations of:

- **Years**: \(Y \in \{1, 2, 3\}\)
- **Product**: Physical PUs (E3-Pro, S6, S6H, MobBat 30Ah, MobBat 45Ah, MobBat 100Ah)
- **Entitlement Type**: Swap \| Warranty \| Rental \| Lease

At this stage we define **generic contract PU forms**, keeping names close to Togo usage while remaining implementable in Odoo and ABS.

#### 5.1 Swap Entitlement Contracts (No Physical Warranty)

In swap contracts, the customer buys **access to swaps**, not ownership or warranty on a specific battery. The physical battery is abstracted away and governed by deposit and usage terms.

- **Type**: Contract Product-Unit
- **Generic Name**: Y-Year XXAh Battery Swap Entitlement
- **Metric**: Number of swaps over contract duration (or equivalent kWh quota)
- **Applicability**: Battery sizes (e.g., 45Ah, 100Ah), mapped to service PUs:
  - 45Ah → 45Ah Battery Circulation Access – Swap Network (Service PU)
  - 100Ah → 100Ah Battery Circulation Access – Swap Network (Service PU)
- **Key Characteristics**:
  - No product warranty on a specific physical battery
  - Customer receives swap rights (e.g., N swaps over Y years)
  - Backed by a **deposit** and contractual terms (loss, damage, misuse)

**Concrete Example: 1-Year 45Ah Swap Entitlement for MobBat 45Ah**

- **Identity**:
  - **PU Name**: 1-Year 45Ah Swap Entitlement – MobBat 45Ah
  - **Category**: Contract Product-Unit
  - **Original Togo context**: Based on B45-30 bundle logic extended to a 1-year horizon

- **Value**:
  - **For Customer**:
    - Predictable access to 45Ah swap energy for 12 months
    - No need to own or maintain a specific battery
    - Flexibility to swap at participating Lomé stations
  - **For Business**:
    - Recurring revenue over a 1-year term
    - Better utilization of MobBat 45Ah pool
    - Clear demand signal for 45Ah capacity planning

- **Context**:
  - **Prerequisites**:
    - Customer registered in Lomé BSS system
    - Access to stations that support 45Ah batteries
  - **Linked PUs**:
    - Physical: *MobBat 45Ah Battery* (asset pool)
    - Service: *45Ah Battery Network Access* (swap entitlement per swap)

- **Obligations**:
  - **OVES / Operator**:
    - Maintain sufficient pool of MobBat 45Ah batteries in Lomé
    - Provide functioning swap stations during agreed service hours
    - Track swaps against the contract entitlement
  - **Customer**:
    - Use batteries according to usage and safety guidelines
    - Accept that individual batteries are interchangeable (no specific-unit warranty)

- **Costs**:
  - **Pricing Structure**:
    - Contract price derived from B45-30 patterns scaled to 12 months (exact pricing TBD)
  - **Deposit**:
    - Separate **deposit PU** governs loss/damage responsibility for physical batteries

> **To be completed by Togo Team (PU Pricing Split)**: The bundle prices provided in `togo-lome-inputs.md` (B45-1/7/30, B100-1/7/30) are **bundle-level** only. For Odoo, the commercial team MUST define explicit **PU-level prices** for all Product-Units (Physical, Digital, Service, and Contract) used in these bundles, even if the customer-facing offer “buries” contract value inside a physical sale price.

**Example Togo contract PUs (conceptual):**

- **1-Year 45Ah Swap Entitlement** – 1-year contract tied to 45Ah Battery Network Access.
- **2-Year 100Ah Swap Entitlement** – 2-year contract tied to 100Ah Battery Network Access.

#### 5.2 Warranty Contracts (Physical Product-Specific)

Warranty contracts apply to **specific physical PUs** and remain relevant for non-swap constructs.

- **Type**: Contract Product-Unit
- **Generic Name**: Y-Year Warranty – [Product]
- **Metric**: Contract term (years) covering a physical PU
- **Applicability**:
  - E3-Pro Electric Motorcycle
  - S6 / S6H Electric Motorcycle
  - MobBat batteries (30Ah, 45Ah, 100Ah) when sold or leased as assets
- **Key Characteristics**:
  - Tied to a specific serialised asset
  - Covers defects and specified failure modes
  - Excludes swap usage where asset is not customer-owned

#### 5.3 Rental Contracts (Physical Product-Linked)

Rental contracts give the customer **temporary use** of a specific asset.

- **Type**: Contract Product-Unit
- **Generic Name**: Y-Year Rental – [Product]
- **Metric**: Rental period (years) for a given asset
- **Applicability**:
  - Motorcycles (E3-Pro, S6, S6H)
  - Potentially batteries if rented directly
- **Key Characteristics**:
  - Asset remains OVES/partner property
  - May include basic maintenance obligations
  - Can coexist with swap entitlements if design requires

#### 5.4 Lease Contracts (Physical Product-Linked)

Lease contracts are similar to rental but often imply stronger financial/commercial commitment.

- **Type**: Contract Product-Unit
- **Generic Name**: Y-Year Lease – [Product]
- **Metric**: Lease term (years) for a given asset
- **Applicability**:
  - Motorcycles (E3-Pro, S6, S6H)
  - Batteries where long-term asset financing is required
- **Key Characteristics**:
  - Asset remains owned by OVES/partner during term
  - May include buy-out/end-of-term options
  - Includes asset-specific warranty clauses

---

### 6. Mapping Togo Inputs → PUs, Bundles, and Contracts

#### 6.1 Physical ↔ Service ↔ Contract Links

| Physical PU             | Service PU                                      | Contract PU Example                                  |
|-------------------------|-------------------------------------------------|------------------------------------------------------|
| MobBat 45Ah Battery     | 45Ah Battery Circulation Access – Swap Network  | 1-Year 45Ah Swap Entitlement – MobBat 45Ah          |
| MobBat 100Ah Battery    | 100Ah Battery Circulation Access – Swap Network | 2-Year 100Ah Swap Entitlement (conceptual)          |
| E3-Pro Electric Motorcycle | _TBD_: Rental/Lease/Warranty PUs             | Y-Year Rental / Lease / Warranty – E3-Pro (generic) |
| S6 Electric Motorcycle  | _TBD_: Rental/Lease/Warranty PUs                | Y-Year Rental / Lease / Warranty – S6 (generic)     |
| S6H Electric Motorcycle | _TBD_: Rental/Lease/Warranty PUs                | Y-Year Rental / Lease / Warranty – S6H (generic)    |

#### 6.2 Coverage Check vs. `togo-lome-inputs.md`

- **Covered as Service PUs**:
  - 45Ah Battery Circulation Access – Swap Network (original label: 45Ah Battery Network Access)
  - 100Ah Battery Circulation Access – Swap Network (original label: 100Ah Battery Network Access)
  - Energy Service (Battery kWh Quota) – candidate, combined with swap entitlements.
- **Covered as Bundles**:
  - B45-1, B45-7, B45-30
  - B100-1, B100-7, B100-30
- **Covered as Contract PUs (generic + example)**:
  - Y-Year XXAh Battery Swap Entitlement (generic pattern)
  - 1-Year 45Ah Swap Entitlement – MobBat 45Ah (concrete example)
  - Generic Y-Year Warranty / Rental / Lease for physical products.

Operational items from `togo-lome-inputs.md` (swap attendant accounts, payment flows, scan behavior) are treated as **system and process requirements**, not Product-Units, and will be handled in transactional and integration documentation.
