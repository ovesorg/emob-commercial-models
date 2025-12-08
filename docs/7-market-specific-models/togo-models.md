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

---

## 7. ABS Platform Setup Data (JSON)

The following JSON records implement the canonical BSS services and X-day swap bundles so they can be copied directly by developers.

**Reference**: See [BSS Setup Data Types](../8-integration-devops/2-bss-setup-data-types.md) for complete schema documentation.

### 7.1 Service Records

This subsection defines the actual ABS BSS service setup data for Togo (Lomé). These records are the implementation reality, not placeholders.

#### Service: MobBat 30Ah Battery Circulation Access – 1 Day (Access Type)

**Filename**: `bss-lome-service-mobbat-30ah-battery-circulation-access-1day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-30ah-battery-circulation-access-1day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-30ah-1day",
  "name": "MobBat 30Ah Battery Circulation Access – 1 Day",
  "description": "Grants 1-day access to the MobBat 30Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-30ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-30AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 1
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: MobBat 30Ah Battery Circulation Access – 7 Days (Access Type)

**Filename**: `bss-lome-service-mobbat-30ah-battery-circulation-access-7day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-30ah-battery-circulation-access-7day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-30ah-7day",
  "name": "MobBat 30Ah Battery Circulation Access – 7 Days",
  "description": "Grants 7-day access to the MobBat 30Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-30ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-30AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 7
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: MobBat 30Ah Battery Circulation Access – 30 Days (Access Type)

**Filename**: `bss-lome-service-mobbat-30ah-battery-circulation-access-30day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-30ah-battery-circulation-access-30day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-30ah-30day",
  "name": "MobBat 30Ah Battery Circulation Access – 30 Days",
  "description": "Grants 30-day access to the MobBat 30Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-30ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-30AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 30
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: MobBat 45Ah Battery Circulation Access – 1 Day (Access Type)

**Filename**: `bss-lome-service-mobbat-45ah-battery-circulation-access-1day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-45ah-battery-circulation-access-1day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-45ah-1day",
  "name": "MobBat 45Ah Battery Circulation Access – 1 Day",
  "description": "Grants 1-day access to the MobBat 45Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-45ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-45AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 1
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: MobBat 45Ah Battery Circulation Access – 7 Days (Access Type)

**Filename**: `bss-lome-service-mobbat-45ah-battery-circulation-access-7day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-45ah-battery-circulation-access-7day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-45ah-7day",
  "name": "MobBat 45Ah Battery Circulation Access – 7 Days",
  "description": "Grants 7-day access to the MobBat 45Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-45ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-45AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 7
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: MobBat 45Ah Battery Circulation Access – 30 Days (Access Type)

**Filename**: `bss-lome-service-mobbat-45ah-battery-circulation-access-30day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-45ah-battery-circulation-access-30day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-45ah-30day",
  "name": "MobBat 45Ah Battery Circulation Access – 30 Days",
  "description": "Grants 30-day access to the MobBat 45Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-45ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-45AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 30
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: MobBat 100Ah Battery Circulation Access – 1 Day (Access Type)

**Filename**: `bss-lome-service-mobbat-100ah-battery-circulation-access-1day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-100ah-battery-circulation-access-1day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-100ah-1day",
  "name": "MobBat 100Ah Battery Circulation Access – 1 Day",
  "description": "Grants 1-day access to the MobBat 100Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-100ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-100AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 1
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: MobBat 100Ah Battery Circulation Access – 7 Days (Access Type)

**Filename**: `bss-lome-service-mobbat-100ah-battery-circulation-access-7day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-100ah-battery-circulation-access-7day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-100ah-7day",
  "name": "MobBat 100Ah Battery Circulation Access – 7 Days",
  "description": "Grants 7-day access to the MobBat 100Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-100ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-100AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 7
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: MobBat 100Ah Battery Circulation Access – 30 Days (Access Type)

**Filename**: `bss-lome-service-mobbat-100ah-battery-circulation-access-30day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "mobbat-100ah-battery-circulation-access-30day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-circulation-access-mobbat-100ah-30day",
  "name": "MobBat 100Ah Battery Circulation Access – 30 Days",
  "description": "Grants 30-day access to the MobBat 100Ah Battery Circulation Fleet in Lomé.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-battery-circulation-mobbat-100ah-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_family_code": "MOBBAT-100AH",
    "geography_code": "TG-LOME",
    "access_duration_days": 30
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: Lomé Swap Network Access – 1 Day (Access Type)

**Filename**: `bss-lome-service-swap-network-access-1day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "swap-network-access-1day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-swap-network-access-1day",
  "name": "Lomé Swap Network Access – 1 Day",
  "description": "Grants 1-day access to the Lomé Swap Network.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-swap-network-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "network_code": "SWAP-NETWORK-TG-LOME",
    "geography_code": "TG-LOME",
    "access_duration_days": 1
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: Lomé Swap Network Access – 7 Days (Access Type)

**Filename**: `bss-lome-service-swap-network-access-7day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "swap-network-access-7day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-swap-network-access-7day",
  "name": "Lomé Swap Network Access – 7 Days",
  "description": "Grants 7-day access to the Lomé Swap Network.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-swap-network-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "network_code": "SWAP-NETWORK-TG-LOME",
    "geography_code": "TG-LOME",
    "access_duration_days": 7
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: Lomé Swap Network Access – 30 Days (Access Type)

**Filename**: `bss-lome-service-swap-network-access-30day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "swap-network-access-30day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-swap-network-access-30day",
  "name": "Lomé Swap Network Access – 30 Days",
  "description": "Grants 30-day access to the Lomé Swap Network.",
  "asset_type": "FLEET",
  "asset_reference": "fleet-swap-network-tg-lome",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "network_code": "SWAP-NETWORK-TG-LOME",
    "geography_code": "TG-LOME",
    "access_duration_days": 30
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: Energy Gage (Gage Type)

**Filename**: `bss-lome-service-energy-gage.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "energy-gage",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-energy-gage",
  "name": "Energy Gage",
  "description": "Measures and records energy consumption in kWh associated with Battery Circulation usage in Lomé.",
  "asset_type": "ITEM",
  "asset_reference": "energy-consumption-tg-lome",
  "usage_metric": "CONSUMPTION",
  "usage_unit": "kWh",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Price per kWh for overage charges, if applicable",
  "access_control": {
    "linked_infrastructure": "BATTERY_CIRCULATION",
    "metering_enabled": true,
    "real_time_tracking": true
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

#### Service: Swap Count (Gage Type)

**Filename**: `bss-lome-service-swap-count.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "swap-count",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-swap-count",
  "name": "Swap Count",
  "description": "Counts swap transactions and records usage against entitlements in Lomé.",
  "asset_type": "ITEM",
  "asset_reference": "swap-transactions-tg-lome",
  "usage_metric": "COUNT",
  "usage_unit": "swaps",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Price per swap for overage charges, if applicable",
  "access_control": {
    "linked_infrastructure": "BATTERY_CIRCULATION",
    "requires_active_access_service": true
  },
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z"
}
```

### 7.2 Bundle Records

Each X-day swap bundle for Togo is defined per Battery Circulation Fleet (30Ah, 45Ah, 100Ah) with aligned access durations for Battery Circulation and Swap Network, plus shared gage services.

#### Common Service IDs

The following service IDs are referenced by all bundles:

- `service-energy-gage`
- `service-swap-count`
- `service-swap-network-access-1day`
- `service-swap-network-access-7day`
- `service-swap-network-access-30day`
- `service-battery-circulation-access-mobbat-30ah-1day`
- `service-battery-circulation-access-mobbat-30ah-7day`
- `service-battery-circulation-access-mobbat-30ah-30day`
- `service-battery-circulation-access-mobbat-45ah-1day`
- `service-battery-circulation-access-mobbat-45ah-7day`
- `service-battery-circulation-access-mobbat-45ah-30day`
- `service-battery-circulation-access-mobbat-100ah-1day`
- `service-battery-circulation-access-mobbat-100ah-7day`
- `service-battery-circulation-access-mobbat-100ah-30day`

#### Bundle: MobBat 30Ah – 1-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-30ah-swap-1day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-30ah-swap-1day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-30ah-swap-1day",
  "name": "MobBat 30Ah – 1-Day Swap Bundle",
  "description": "1-day swap bundle for MobBat 30Ah including Battery Circulation Access (1 day), Swap Network Access (1 day), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-30ah-1day",
    "service-swap-network-access-1day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

#### Bundle: MobBat 30Ah – 7-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-30ah-swap-7day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-30ah-swap-7day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-30ah-swap-7day",
  "name": "MobBat 30Ah – 7-Day Swap Bundle",
  "description": "7-day swap bundle for MobBat 30Ah including Battery Circulation Access (7 days), Swap Network Access (7 days), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-30ah-7day",
    "service-swap-network-access-7day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

#### Bundle: MobBat 30Ah – 30-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-30ah-swap-30day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-30ah-swap-30day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-30ah-swap-30day",
  "name": "MobBat 30Ah – 30-Day Swap Bundle",
  "description": "30-day swap bundle for MobBat 30Ah including Battery Circulation Access (30 days), Swap Network Access (30 days), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-30ah-30day",
    "service-swap-network-access-30day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

#### Bundle: MobBat 45Ah – 1-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-45ah-swap-1day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-45ah-swap-1day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-45ah-swap-1day",
  "name": "MobBat 45Ah – 1-Day Swap Bundle",
  "description": "1-day swap bundle for MobBat 45Ah including Battery Circulation Access (1 day), Swap Network Access (1 day), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-45ah-1day",
    "service-swap-network-access-1day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

#### Bundle: MobBat 45Ah – 7-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-45ah-swap-7day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-45ah-swap-7day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-45ah-swap-7day",
  "name": "MobBat 45Ah – 7-Day Swap Bundle",
  "description": "7-day swap bundle for MobBat 45Ah including Battery Circulation Access (7 days), Swap Network Access (7 days), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-45ah-7day",
    "service-swap-network-access-7day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

#### Bundle: MobBat 45Ah – 30-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-45ah-swap-30day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-45ah-swap-30day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-45ah-swap-30day",
  "name": "MobBat 45Ah – 30-Day Swap Bundle",
  "description": "30-day swap bundle for MobBat 45Ah including Battery Circulation Access (30 days), Swap Network Access (30 days), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-45ah-30day",
    "service-swap-network-access-30day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

#### Bundle: MobBat 100Ah – 1-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-100ah-swap-1day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-100ah-swap-1day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-100ah-swap-1day",
  "name": "MobBat 100Ah – 1-Day Swap Bundle",
  "description": "1-day swap bundle for MobBat 100Ah including Battery Circulation Access (1 day), Swap Network Access (1 day), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-100ah-1day",
    "service-swap-network-access-1day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

#### Bundle: MobBat 100Ah – 7-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-100ah-swap-7day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-100ah-swap-7day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-100ah-swap-7day",
  "name": "MobBat 100Ah – 7-Day Swap Bundle",
  "description": "7-day swap bundle for MobBat 100Ah including Battery Circulation Access (7 days), Swap Network Access (7 days), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-100ah-7day",
    "service-swap-network-access-7day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

#### Bundle: MobBat 100Ah – 30-Day Swap Bundle

**Filename**: `bss-lome-bundle-mobbat-100ah-swap-30day.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "mobbat-100ah-swap-30day",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-mobbat-100ah-swap-30day",
  "name": "MobBat 100Ah – 30-Day Swap Bundle",
  "description": "30-day swap bundle for MobBat 100Ah including Battery Circulation Access (30 days), Swap Network Access (30 days), Energy Gage, and Swap Count services.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-battery-circulation-access-mobbat-100ah-30day",
    "service-swap-network-access-30day",
    "service-energy-gage",
    "service-swap-count"
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "system"
}
```

### 7.3 Contract Terms Records

Contract terms define the legal, financial, and operational rules for subscriptions. Each period (1, 7, 30 days) requires its own terms object.

#### Terms: 1-Day Standard

**Filename**: `bss-lome-terms-1day-standard.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "terms",
    "market": "lome",
    "entity_name": "1day-standard",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "terms-lome-1day-standard",
  "service_name": "Battery Swap Service - Togo Standard 1-Day",
  "service_description": "Standard 1-day battery swap subscription for electric vehicle riders in Lomé metro area with network and fleet access",
  "service_duration_days": 1,
  "billing_cycle": "DAILY",
  "monthly_fee": 0.00,
  "_comment_monthly_fee": "PENDING COMMERCIAL TEAM INPUT - Not applicable for 1-day terms",
  "deposit_amount": 0.00,
  "_comment_deposit_amount": "PENDING COMMERCIAL TEAM INPUT",
  "cancellation_notice_days": 0,
  "early_termination_fee": 0.00,
  "_comment_early_termination_fee": "Not applicable for 1-day subscription",
  "refund_policy": "No refund for 1-day subscription",
  "liability_limit": 500000.00,
  "_comment_liability_limit": "Amount in XOF - PENDING COMMERCIAL TEAM INPUT",
  "insurance_required": false,
  "damage_deposit": 0.00,
  "_comment_damage_deposit": "PENDING COMMERCIAL TEAM INPUT",
  "governing_law": "Laws of Togo",
  "dispute_resolution": "Arbitration in Lomé, Togo under Togolese Arbitration Law"
}
```

#### Terms: 7-Day Standard

**Filename**: `bss-lome-terms-7day-standard.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "terms",
    "market": "lome",
    "entity_name": "7day-standard",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "terms-lome-7day-standard",
  "service_name": "Battery Swap Service - Togo Standard 7-Day",
  "service_description": "Standard 7-day battery swap subscription for electric vehicle riders in Lomé metro area with network and fleet access",
  "service_duration_days": 7,
  "billing_cycle": "WEEKLY",
  "monthly_fee": 0.00,
  "_comment_monthly_fee": "PENDING COMMERCIAL TEAM INPUT - Not applicable for 7-day terms",
  "deposit_amount": 0.00,
  "_comment_deposit_amount": "PENDING COMMERCIAL TEAM INPUT",
  "cancellation_notice_days": 1,
  "early_termination_fee": 0.00,
  "_comment_early_termination_fee": "PENDING COMMERCIAL TEAM INPUT",
  "refund_policy": "Pro-rated refund within first 2 days; no refund after 2 days from subscription start",
  "liability_limit": 500000.00,
  "_comment_liability_limit": "Amount in XOF - PENDING COMMERCIAL TEAM INPUT",
  "insurance_required": false,
  "damage_deposit": 0.00,
  "_comment_damage_deposit": "PENDING COMMERCIAL TEAM INPUT",
  "governing_law": "Laws of Togo",
  "dispute_resolution": "Arbitration in Lomé, Togo under Togolese Arbitration Law"
}
```

#### Terms: 30-Day Standard

**Filename**: `bss-lome-terms-30day-standard.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "terms",
    "market": "lome",
    "entity_name": "30day-standard",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "terms-lome-30day-standard",
  "service_name": "Battery Swap Service - Togo Standard Monthly",
  "service_description": "Standard monthly battery swap subscription for electric vehicle riders in Lomé metro area with network and fleet access",
  "service_duration_days": 30,
  "billing_cycle": "MONTHLY",
  "monthly_fee": 0.00,
  "_comment_monthly_fee": "PENDING COMMERCIAL TEAM INPUT",
  "deposit_amount": 0.00,
  "_comment_deposit_amount": "PENDING COMMERCIAL TEAM INPUT",
  "cancellation_notice_days": 7,
  "early_termination_fee": 0.00,
  "_comment_early_termination_fee": "PENDING COMMERCIAL TEAM INPUT",
  "refund_policy": "Pro-rated refund within first 7 days; no refund after 7 days from subscription start",
  "liability_limit": 500000.00,
  "_comment_liability_limit": "Amount in XOF - PENDING COMMERCIAL TEAM INPUT",
  "insurance_required": false,
  "damage_deposit": 0.00,
  "_comment_damage_deposit": "PENDING COMMERCIAL TEAM INPUT",
  "governing_law": "Laws of Togo",
  "dispute_resolution": "Arbitration in Lomé, Togo under Togolese Arbitration Law"
}
```

### 7.4 ServicePlanTemplate (Plan) Records

Each ServicePlanTemplate references one of the 9 bundles defined above, plus contract terms, FSM configs, and service-level quotas/overage rules.

#### Plan: MobBat 30Ah – 1-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-30ah-swap-1day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-30ah",
    "period": "1day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-30ah-swap-1day-v1",
  "name": "MobBat 30Ah – 1-Day Swap Plan",
  "description": "1-day swap plan for MobBat 30Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-1day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-30ah-swap-1day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-30ah-1day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 1-day period"
    },
    {
      "service_id": "service-swap-network-access-1day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 1-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 30Ah 1-day swap plan",
      "changes": [
        "Created 1-day plan for MobBat 30Ah",
        "Linked bundle-mobbat-30ah-swap-1day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

#### Plan: MobBat 30Ah – 7-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-30ah-swap-7day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-30ah",
    "period": "7day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-30ah-swap-7day-v1",
  "name": "MobBat 30Ah – 7-Day Swap Plan",
  "description": "7-day swap plan for MobBat 30Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-7day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-30ah-swap-7day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-30ah-7day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 7-day period"
    },
    {
      "service_id": "service-swap-network-access-7day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 7-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 30Ah 7-day swap plan",
      "changes": [
        "Created 7-day plan for MobBat 30Ah",
        "Linked bundle-mobbat-30ah-swap-7day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

#### Plan: MobBat 30Ah – 30-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-30ah-swap-30day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-30ah",
    "period": "30day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-30ah-swap-30day-v1",
  "name": "MobBat 30Ah – 30-Day Swap Plan",
  "description": "30-day swap plan for MobBat 30Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-30day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-30ah-swap-30day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-30ah-30day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 30-day period"
    },
    {
      "service_id": "service-swap-network-access-30day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 30-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 30Ah 30-day swap plan",
      "changes": [
        "Created 30-day plan for MobBat 30Ah",
        "Linked bundle-mobbat-30ah-swap-30day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

#### Plan: MobBat 45Ah – 1-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-45ah-swap-1day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-45ah",
    "period": "1day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-45ah-swap-1day-v1",
  "name": "MobBat 45Ah – 1-Day Swap Plan",
  "description": "1-day swap plan for MobBat 45Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-1day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-45ah-swap-1day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-45ah-1day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 1-day period"
    },
    {
      "service_id": "service-swap-network-access-1day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 1-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 45Ah 1-day swap plan",
      "changes": [
        "Created 1-day plan for MobBat 45Ah",
        "Linked bundle-mobbat-45ah-swap-1day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

#### Plan: MobBat 45Ah – 7-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-45ah-swap-7day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-45ah",
    "period": "7day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-45ah-swap-7day-v1",
  "name": "MobBat 45Ah – 7-Day Swap Plan",
  "description": "7-day swap plan for MobBat 45Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-7day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-45ah-swap-7day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-45ah-7day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 7-day period"
    },
    {
      "service_id": "service-swap-network-access-7day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 7-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 45Ah 7-day swap plan",
      "changes": [
        "Created 7-day plan for MobBat 45Ah",
        "Linked bundle-mobbat-45ah-swap-7day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

#### Plan: MobBat 45Ah – 30-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-45ah-swap-30day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-45ah",
    "period": "30day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-45ah-swap-30day-v1",
  "name": "MobBat 45Ah – 30-Day Swap Plan",
  "description": "30-day swap plan for MobBat 45Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-30day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-45ah-swap-30day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-45ah-30day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 30-day period"
    },
    {
      "service_id": "service-swap-network-access-30day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 30-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 45Ah 30-day swap plan",
      "changes": [
        "Created 30-day plan for MobBat 45Ah",
        "Linked bundle-mobbat-45ah-swap-30day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

#### Plan: MobBat 100Ah – 1-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-100ah-swap-1day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-100ah",
    "period": "1day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-100ah-swap-1day-v1",
  "name": "MobBat 100Ah – 1-Day Swap Plan",
  "description": "1-day swap plan for MobBat 100Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-1day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-100ah-swap-1day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-100ah-1day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 1-day period"
    },
    {
      "service_id": "service-swap-network-access-1day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 1-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 100Ah 1-day swap plan",
      "changes": [
        "Created 1-day plan for MobBat 100Ah",
        "Linked bundle-mobbat-100ah-swap-1day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

#### Plan: MobBat 100Ah – 7-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-100ah-swap-7day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-100ah",
    "period": "7day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-100ah-swap-7day-v1",
  "name": "MobBat 100Ah – 7-Day Swap Plan",
  "description": "7-day swap plan for MobBat 100Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-7day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-100ah-swap-7day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-100ah-7day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 7-day period"
    },
    {
      "service_id": "service-swap-network-access-7day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 7-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 100Ah 7-day swap plan",
      "changes": [
        "Created 7-day plan for MobBat 100Ah",
        "Linked bundle-mobbat-100ah-swap-7day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

#### Plan: MobBat 100Ah – 30-Day Swap Plan

**Filename**: `bss-lome-plan-mobbat-100ah-swap-30day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "battery_family": "mobbat-100ah",
    "period": "30day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{battery_family}-swap-{period}-{version}.json"
  },
  "id": "plan-mobbat-100ah-swap-30day-v1",
  "name": "MobBat 100Ah – 30-Day Swap Plan",
  "description": "30-day swap plan for MobBat 100Ah with Battery Circulation and Swap Network access, plus energy and swap usage tracking.",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-lome-30day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-mobbat-100ah-swap-30day",
  "service_configurations": [
    {
      "service_id": "service-battery-circulation-access-mobbat-100ah-30day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Access service, boolean flag for 30-day period"
    },
    {
      "service_id": "service-swap-network-access-30day",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Swap Network access, boolean flag for 30-day period"
    },
    {
      "service_id": "service-energy-gage",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per kWh",
      "_comment": "Energy Gage, unlimited metering with overage charging if defined"
    },
    {
      "service_id": "service-swap-count",
      "initial_quota": -1.0,
      "max_quota": -1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment_overage_rate": "PENDING COMMERCIAL TEAM INPUT - Price per swap",
      "_comment": "Swap Count, unlimited metering with overage charging if defined"
    }
  ],
  "created_at": "2025-12-08T00:00:00Z",
  "updated_at": "2025-12-08T00:00:00Z",
  "created_by": "product-team",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Lomé MobBat 100Ah 30-day swap plan",
      "changes": [
        "Created 30-day plan for MobBat 100Ah",
        "Linked bundle-mobbat-100ah-swap-30day",
        "Configured access and gage services"
      ],
      "created_at": "2025-12-08T00:00:00Z",
      "created_by": "product-team"
    }
  ]
}
```

### 7.5 Summary

| Entity Type | Count | Notes |
|-------------|-------|-------|
| Services | 14 | 9 Battery Circulation access (3 fleets × 3 durations), 3 Swap Network access (1, 7, 30 days), 2 gage services (Energy Gage, Swap Count) |
| Bundles | 9 | 3 durations (1, 7, 30 days) × 3 Battery Circulation Fleets (30Ah, 45Ah, 100Ah) |
| Terms | 3 | 1-day, 7-day, 30-day contract terms (standard tier) |
| Plans (ServicePlanTemplate) | 9 | Each plan links to one bundle, one terms object, plus FSM configs and service quotas/overage rules |


#### Service: 45Ah Battery Circulation Access – Swap Network

**Filename**: `bss-lome-service-45ah-swap-network.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "45ah-swap-network",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-45ah-swap-network-togo-lome",
  "name": "45Ah Battery Circulation Access – Swap Network (Lomé)",
  "description": "Access to the Lomé Swap Network using the 45Ah Battery Circulation pool for 2- and 3-wheelers",
  "asset_type": "FLEET",
  "asset_reference": "fleet-swap-stations-lome-45ah",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "geographic_boundary": "Lomé Metro Area",
    "service_hours": "24/7",
    "requires_subscription": true,
    "battery_capacity": "45Ah"
  },
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z"
}
```

#### Service: 100Ah Battery Circulation Access – Swap Network

**Filename**: `bss-lome-service-100ah-swap-network.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "100ah-swap-network",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-100ah-swap-network-togo-lome",
  "name": "100Ah Battery Circulation Access – Swap Network (Lomé)",
  "description": "Access to the Lomé Swap Network using the 100Ah Battery Circulation pool for 2- and 3-wheelers",
  "asset_type": "FLEET",
  "asset_reference": "fleet-swap-stations-lome-100ah",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "geographic_boundary": "Lomé Metro Area",
    "service_hours": "24/7",
    "requires_subscription": true,
    "battery_capacity": "100Ah"
  },
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z"
}
```

#### Service: 45Ah Battery Fleet Access

**Filename**: `bss-lome-service-45ah-battery-fleet.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "45ah-battery-fleet",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-fleet-45ah-togo-lome",
  "name": "45Ah Battery Fleet Access (Togo)",
  "description": "Access to 45Ah battery circulation pool for swap operations",
  "asset_type": "FLEET",
  "asset_reference": "fleet-batteries-45ah-togo",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_types": ["mobbat-45ah"],
    "quality_tier": "standard",
    "warranty_coverage": true
  },
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z"
}
```

#### Service: 100Ah Battery Fleet Access

**Filename**: `bss-lome-service-100ah-battery-fleet.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "100ah-battery-fleet",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-battery-fleet-100ah-togo-lome",
  "name": "100Ah Battery Fleet Access (Togo)",
  "description": "Access to 100Ah battery circulation pool for swap operations",
  "asset_type": "FLEET",
  "asset_reference": "fleet-batteries-100ah-togo",
  "usage_metric": "ACCESS",
  "usage_unit": "boolean",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Access service, pricing handled at bundle/plan level",
  "access_control": {
    "battery_types": ["mobbat-100ah"],
    "quality_tier": "standard",
    "warranty_coverage": true
  },
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z"
}
```

#### Service: Swap Count (45Ah)

**Filename**: `bss-lome-service-swap-count-45ah.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "swap-count-45ah",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-swap-count-45ah-togo",
  "name": "Swap-Count Service 45Ah (Togo)",
  "description": "Battery swap transaction quota for 45Ah based on number of swaps performed",
  "asset_type": "ITEM",
  "asset_reference": "swap-transactions-45ah-togo",
  "usage_metric": "COUNT",
  "usage_unit": "swaps",
  "usage_unit_price": 1200.00,
  "_comment_usage_unit_price": "1,200 XOF per swap (overage rate, derived from B45-1 bundle)",
  "access_control": {
    "requires_active_subscription": true,
    "network_access_required": true,
    "battery_capacity": "45Ah"
  },
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z"
}
```

#### Service: Swap Count (100Ah)

**Filename**: `bss-lome-service-swap-count-100ah.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "swap-count-100ah",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-swap-count-100ah-togo",
  "name": "Swap-Count Service 100Ah (Togo)",
  "description": "Battery swap transaction quota for 100Ah based on number of swaps performed",
  "asset_type": "ITEM",
  "asset_reference": "swap-transactions-100ah-togo",
  "usage_metric": "COUNT",
  "usage_unit": "swaps",
  "usage_unit_price": 2400.00,
  "_comment_usage_unit_price": "2,400 XOF per swap (overage rate, derived from B100-1 bundle)",
  "access_control": {
    "requires_active_subscription": true,
    "network_access_required": true,
    "battery_capacity": "100Ah"
  },
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z"
}
```

#### Service: Electricity (45Ah)

**Filename**: `bss-lome-service-electricity-45ah.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "electricity-45ah",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-electricity-45ah-togo",
  "name": "Electricity Service 45Ah (Togo)",
  "description": "Battery electricity quota allocation for 45Ah based on kilowatt-hour consumption",
  "asset_type": "ITEM",
  "asset_reference": "electricity-pool-45ah-togo",
  "usage_metric": "CONSUMPTION",
  "usage_unit": "kWh",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "PENDING COMMERCIAL TEAM INPUT - Price per kWh for overage charges",
  "access_control": {
    "metering_enabled": true,
    "real_time_tracking": true,
    "battery_capacity": "45Ah"
  },
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z"
}
```

#### Service: Electricity (100Ah)

**Filename**: `bss-lome-service-electricity-100ah.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "electricity-100ah",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-electricity-100ah-togo",
  "name": "Electricity Service 100Ah (Togo)",
  "description": "Battery electricity quota allocation for 100Ah based on kilowatt-hour consumption",
  "asset_type": "ITEM",
  "asset_reference": "electricity-pool-100ah-togo",
  "usage_metric": "CONSUMPTION",
  "usage_unit": "kWh",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "PENDING COMMERCIAL TEAM INPUT - Price per kWh for overage charges",
  "access_control": {
    "metering_enabled": true,
    "real_time_tracking": true,
    "battery_capacity": "100Ah"
  },
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z"
}
```

### 7.2 Bundle Records

#### Bundle: B45 (45Ah All Services)

**Filename**: `bss-lome-bundle-b45.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "b45",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-togo-b45",
  "name": "Togo B45 Bundle (45Ah)",
  "description": "Complete 45Ah battery swap service bundle including network access, battery fleet access, swap quota, and electricity",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-45ah-swap-network-togo-lome",
    "service-battery-fleet-45ah-togo-lome",
    "service-swap-count-45ah-togo",
    "service-electricity-45ah-togo"
  ],
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z",
  "created_by": "commercial-team-togo"
}
```

#### Bundle: B100 (100Ah All Services)

**Filename**: `bss-lome-bundle-b100.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "b100",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-togo-b100",
  "name": "Togo B100 Bundle (100Ah)",
  "description": "Complete 100Ah battery swap service bundle including network access, battery fleet access, swap quota, and electricity",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-100ah-swap-network-togo-lome",
    "service-battery-fleet-100ah-togo-lome",
    "service-swap-count-100ah-togo",
    "service-electricity-100ah-togo"
  ],
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z",
  "created_by": "commercial-team-togo"
}
```

### 7.3 Terms Records

#### Terms: 1-Day Standard

**Filename**: `bss-lome-terms-1day-standard.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "terms",
    "market": "lome",
    "entity_name": "1day-standard",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "service_name": "Battery Swap Service - Togo Standard Daily",
  "service_description": "Standard daily battery swap subscription for electric vehicle riders in Lomé metro area with network and fleet access",
  "service_duration_days": 1,
  "billing_cycle": "DAILY",
  "monthly_fee": 0.00,
  "_comment_monthly_fee": "Not applicable for daily subscriptions",
  "deposit_amount": 0.00,
  "_comment_deposit_amount": "PENDING COMMERCIAL TEAM INPUT",
  "cancellation_notice_days": 0,
  "early_termination_fee": 0.00,
  "refund_policy": "No refund for daily subscriptions",
  "liability_limit": 500000.00,
  "_comment_liability_limit": "Amount in XOF - PENDING COMMERCIAL TEAM INPUT",
  "insurance_required": false,
  "damage_deposit": 0.00,
  "_comment_damage_deposit": "PENDING COMMERCIAL TEAM INPUT",
  "governing_law": "Laws of Togo",
  "dispute_resolution": "Arbitration in Lomé, Togo under Togolese Arbitration Law"
}
```

#### Terms: 7-Day Standard

**Filename**: `bss-lome-terms-7day-standard.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "terms",
    "market": "lome",
    "entity_name": "7day-standard",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "service_name": "Battery Swap Service - Togo Standard Weekly",
  "service_description": "Standard weekly battery swap subscription for electric vehicle riders in Lomé metro area with network and fleet access",
  "service_duration_days": 7,
  "billing_cycle": "WEEKLY",
  "monthly_fee": 0.00,
  "_comment_monthly_fee": "Not applicable for weekly subscriptions",
  "deposit_amount": 0.00,
  "_comment_deposit_amount": "PENDING COMMERCIAL TEAM INPUT",
  "cancellation_notice_days": 1,
  "early_termination_fee": 0.00,
  "_comment_early_termination_fee": "PENDING COMMERCIAL TEAM INPUT",
  "refund_policy": "Pro-rated refund within first 2 days; no refund after 2 days from subscription start",
  "liability_limit": 500000.00,
  "_comment_liability_limit": "Amount in XOF - PENDING COMMERCIAL TEAM INPUT",
  "insurance_required": false,
  "damage_deposit": 0.00,
  "_comment_damage_deposit": "PENDING COMMERCIAL TEAM INPUT",
  "governing_law": "Laws of Togo",
  "dispute_resolution": "Arbitration in Lomé, Togo under Togolese Arbitration Law"
}
```

#### Terms: 30-Day Standard

**Filename**: `bss-lome-terms-30day-standard.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "terms",
    "market": "lome",
    "entity_name": "30day-standard",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "service_name": "Battery Swap Service - Togo Standard Monthly",
  "service_description": "Standard monthly battery swap subscription for electric vehicle riders in Lomé metro area with network and fleet access",
  "service_duration_days": 30,
  "billing_cycle": "MONTHLY",
  "monthly_fee": 0.00,
  "_comment_monthly_fee": "Fee set at plan level based on bundle and quota",
  "deposit_amount": 0.00,
  "_comment_deposit_amount": "PENDING COMMERCIAL TEAM INPUT",
  "cancellation_notice_days": 7,
  "early_termination_fee": 0.00,
  "_comment_early_termination_fee": "PENDING COMMERCIAL TEAM INPUT",
  "refund_policy": "Pro-rated refund within first 7 days; no refund after 7 days from subscription start",
  "liability_limit": 500000.00,
  "_comment_liability_limit": "Amount in XOF - PENDING COMMERCIAL TEAM INPUT",
  "insurance_required": false,
  "damage_deposit": 0.00,
  "_comment_damage_deposit": "PENDING COMMERCIAL TEAM INPUT",
  "governing_law": "Laws of Togo",
  "dispute_resolution": "Arbitration in Lomé, Togo under Togolese Arbitration Law"
}
```

### 7.4 Plan Records

#### Plan: B45-1 (1-Day, 45Ah)

**Filename**: `bss-lome-plan-b45-1day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "tier": "b45",
    "period": "1day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{tier}-{period}-{version}.json"
  },
  "id": "plan-togo-lome-1day-b45-v1",
  "name": "Togo Lomé B45-1 (1-Day, 45Ah)",
  "description": "1-day subscription providing 45Ah network and battery fleet access with 1 swap quota - 1,200 XOF",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-togo-1day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-togo-b45",
  "base_price": 1200.00,
  "_comment_base_price": "1,200 XOF per day as per Togo pricing",
  "service_configurations": [
    {
      "service_id": "service-45ah-swap-network-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Network access is boolean - 1.0 means enabled for 1 day"
    },
    {
      "service_id": "service-battery-fleet-45ah-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Battery fleet access is boolean - 1.0 means enabled for 1 day"
    },
    {
      "service_id": "service-swap-count-45ah-togo",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": 1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": 1200.00,
      "_comment": "1 swap included in 1-day plan; overage at 1,200 XOF per swap"
    },
    {
      "service_id": "service-electricity-45ah-togo",
      "initial_quota": 2.16,
      "max_quota": 2.16,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment": "Estimated 2.16 kWh per 45Ah swap (48V * 45Ah); overage rate PENDING"
    }
  ],
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z",
  "created_by": "commercial-team-togo",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Togo market launch - B45-1 daily plan",
      "changes": [
        "Created 1-day 45Ah plan",
        "Price: 1,200 XOF",
        "Quota: 1 swap per day"
      ],
      "created_at": "2025-12-08T10:00:00Z",
      "created_by": "commercial-team-togo"
    }
  ]
}
```

#### Plan: B45-7 (7-Day, 45Ah)

**Filename**: `bss-lome-plan-b45-7day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "tier": "b45",
    "period": "7day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{tier}-{period}-{version}.json"
  },
  "id": "plan-togo-lome-7day-b45-v1",
  "name": "Togo Lomé B45-7 (7-Day, 45Ah)",
  "description": "7-day subscription providing 45Ah network and battery fleet access with 15 swap quota - 17,250 XOF",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-togo-7day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-togo-b45",
  "base_price": 17250.00,
  "_comment_base_price": "17,250 XOF per 7 days as per Togo pricing",
  "service_configurations": [
    {
      "service_id": "service-45ah-swap-network-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Network access is boolean - 1.0 means enabled for 7 days"
    },
    {
      "service_id": "service-battery-fleet-45ah-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Battery fleet access is boolean - 1.0 means enabled for 7 days"
    },
    {
      "service_id": "service-swap-count-45ah-togo",
      "initial_quota": 15.0,
      "max_quota": 15.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 1200.00,
      "_comment": "15 swaps included in 7-day plan; overage at 1,200 XOF per swap"
    },
    {
      "service_id": "service-electricity-45ah-togo",
      "initial_quota": 32.4,
      "max_quota": 32.4,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment": "Estimated 32.4 kWh for 15 swaps (15 * 2.16 kWh); overage rate PENDING"
    }
  ],
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z",
  "created_by": "commercial-team-togo",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Togo market launch - B45-7 weekly plan",
      "changes": [
        "Created 7-day 45Ah plan",
        "Price: 17,250 XOF",
        "Quota: 15 swaps per 7 days"
      ],
      "created_at": "2025-12-08T10:00:00Z",
      "created_by": "commercial-team-togo"
    }
  ]
}
```

#### Plan: B45-30 (30-Day, 45Ah)

**Filename**: `bss-lome-plan-b45-30day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "tier": "b45",
    "period": "30day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{tier}-{period}-{version}.json"
  },
  "id": "plan-togo-lome-30day-b45-v1",
  "name": "Togo Lomé B45-30 (30-Day, 45Ah)",
  "description": "30-day subscription providing 45Ah network and battery fleet access with 60 swap quota - 66,000 XOF",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-togo-30day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-togo-b45",
  "base_price": 66000.00,
  "_comment_base_price": "66,000 XOF per 30 days as per Togo pricing",
  "service_configurations": [
    {
      "service_id": "service-45ah-swap-network-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Network access is boolean - 1.0 means enabled for 30 days"
    },
    {
      "service_id": "service-battery-fleet-45ah-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Battery fleet access is boolean - 1.0 means enabled for 30 days"
    },
    {
      "service_id": "service-swap-count-45ah-togo",
      "initial_quota": 60.0,
      "max_quota": 60.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 1200.00,
      "_comment": "60 swaps included in 30-day plan; overage at 1,200 XOF per swap"
    },
    {
      "service_id": "service-electricity-45ah-togo",
      "initial_quota": 129.6,
      "max_quota": 129.6,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment": "Estimated 129.6 kWh for 60 swaps (60 * 2.16 kWh); overage rate PENDING"
    }
  ],
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z",
  "created_by": "commercial-team-togo",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Togo market launch - B45-30 monthly plan",
      "changes": [
        "Created 30-day 45Ah plan",
        "Price: 66,000 XOF",
        "Quota: 60 swaps per 30 days"
      ],
      "created_at": "2025-12-08T10:00:00Z",
      "created_by": "commercial-team-togo"
    }
  ]
}
```

#### Plan: B100-1 (1-Day, 100Ah)

**Filename**: `bss-lome-plan-b100-1day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "tier": "b100",
    "period": "1day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{tier}-{period}-{version}.json"
  },
  "id": "plan-togo-lome-1day-b100-v1",
  "name": "Togo Lomé B100-1 (1-Day, 100Ah)",
  "description": "1-day subscription providing 100Ah network and battery fleet access with 1 swap quota - 2,400 XOF",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-togo-1day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-togo-b100",
  "base_price": 2400.00,
  "_comment_base_price": "2,400 XOF per day as per Togo pricing",
  "service_configurations": [
    {
      "service_id": "service-100ah-swap-network-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Network access is boolean - 1.0 means enabled for 1 day"
    },
    {
      "service_id": "service-battery-fleet-100ah-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Battery fleet access is boolean - 1.0 means enabled for 1 day"
    },
    {
      "service_id": "service-swap-count-100ah-togo",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": 1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": 2400.00,
      "_comment": "1 swap included in 1-day plan; overage at 2,400 XOF per swap"
    },
    {
      "service_id": "service-electricity-100ah-togo",
      "initial_quota": 4.8,
      "max_quota": 4.8,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment": "Estimated 4.8 kWh per 100Ah swap (48V * 100Ah); overage rate PENDING"
    }
  ],
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z",
  "created_by": "commercial-team-togo",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Togo market launch - B100-1 daily plan",
      "changes": [
        "Created 1-day 100Ah plan",
        "Price: 2,400 XOF",
        "Quota: 1 swap per day"
      ],
      "created_at": "2025-12-08T10:00:00Z",
      "created_by": "commercial-team-togo"
    }
  ]
}
```

#### Plan: B100-7 (7-Day, 100Ah)

**Filename**: `bss-lome-plan-b100-7day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "tier": "b100",
    "period": "7day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{tier}-{period}-{version}.json"
  },
  "id": "plan-togo-lome-7day-b100-v1",
  "name": "Togo Lomé B100-7 (7-Day, 100Ah)",
  "description": "7-day subscription providing 100Ah network and battery fleet access with 15 swap quota - 34,500 XOF",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-togo-7day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-togo-b100",
  "base_price": 34500.00,
  "_comment_base_price": "34,500 XOF per 7 days as per Togo pricing",
  "service_configurations": [
    {
      "service_id": "service-100ah-swap-network-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Network access is boolean - 1.0 means enabled for 7 days"
    },
    {
      "service_id": "service-battery-fleet-100ah-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Battery fleet access is boolean - 1.0 means enabled for 7 days"
    },
    {
      "service_id": "service-swap-count-100ah-togo",
      "initial_quota": 15.0,
      "max_quota": 15.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 2400.00,
      "_comment": "15 swaps included in 7-day plan; overage at 2,400 XOF per swap"
    },
    {
      "service_id": "service-electricity-100ah-togo",
      "initial_quota": 72.0,
      "max_quota": 72.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment": "Estimated 72.0 kWh for 15 swaps (15 * 4.8 kWh); overage rate PENDING"
    }
  ],
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z",
  "created_by": "commercial-team-togo",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Togo market launch - B100-7 weekly plan",
      "changes": [
        "Created 7-day 100Ah plan",
        "Price: 34,500 XOF",
        "Quota: 15 swaps per 7 days"
      ],
      "created_at": "2025-12-08T10:00:00Z",
      "created_by": "commercial-team-togo"
    }
  ]
}
```

#### Plan: B100-30 (30-Day, 100Ah)

**Filename**: `bss-lome-plan-b100-30day-v1.json`

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "tier": "b100",
    "period": "30day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{tier}-{period}-{version}.json"
  },
  "id": "plan-togo-lome-30day-b100-v1",
  "name": "Togo Lomé B100-30 (30-Day, 100Ah)",
  "description": "30-day subscription providing 100Ah network and battery fleet access with 60 swap quota - 132,000 XOF",
  "version": "1.0.0",
  "status": "ACTIVE",
  "country_code": "TG",
  "legal_jurisdiction": "Lomé Metro Area, Togo",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-togo-30day-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-togo-b100",
  "base_price": 132000.00,
  "_comment_base_price": "132,000 XOF per 30 days as per Togo pricing",
  "service_configurations": [
    {
      "service_id": "service-100ah-swap-network-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Network access is boolean - 1.0 means enabled for 30 days"
    },
    {
      "service_id": "service-battery-fleet-100ah-togo-lome",
      "initial_quota": 1.0,
      "max_quota": 1.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": false,
      "overage_rate": null,
      "_comment": "Battery fleet access is boolean - 1.0 means enabled for 30 days"
    },
    {
      "service_id": "service-swap-count-100ah-togo",
      "initial_quota": 60.0,
      "max_quota": 60.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 2400.00,
      "_comment": "60 swaps included in 30-day plan; overage at 2,400 XOF per swap"
    },
    {
      "service_id": "service-electricity-100ah-togo",
      "initial_quota": 288.0,
      "max_quota": 288.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment": "Estimated 288.0 kWh for 60 swaps (60 * 4.8 kWh); overage rate PENDING"
    }
  ],
  "created_at": "2025-12-08T10:00:00Z",
  "updated_at": "2025-12-08T10:00:00Z",
  "created_by": "commercial-team-togo",
  "change_log": [
    {
      "version": "1.0.0",
      "description": "Initial Togo market launch - B100-30 monthly plan",
      "changes": [
        "Created 30-day 100Ah plan",
        "Price: 132,000 XOF",
        "Quota: 60 swaps per 30 days"
      ],
      "created_at": "2025-12-08T10:00:00Z",
      "created_by": "commercial-team-togo"
    }
  ]
}
```

### 7.5 Summary Table

| Entity Type | Count | Files |
|-------------|-------|-------|
| Services | 8 | 45Ah/100Ah: swap-network, battery-fleet, swap-count, electricity |
| Bundles | 2 | B45, B100 |
| Terms | 3 | 1-day, 7-day, 30-day standard |
| Plans | 6 | B45-1, B45-7, B45-30, B100-1, B100-7, B100-30 |
| **Total** | **19** | Ready for ABS Platform deployment |
