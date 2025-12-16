## BSS Setup Data Types

### Overview

This document defines the setup data types for Battery Swap Service (BSS) **services** (Product-Units) and **bundles** as implemented in the ABS Platform. These types bridge the commercial model definitions with the operational platform configuration.

Each BSS service must map to a Service Product-Unit in Odoo (see `../2-product-unit-library/2-service.md`). Market-specific instances (for example Togo – Lomé) are cataloged in `../7-market-specific-models/togo-models.md` and use the schemas defined here.

**Source**: ABS Platform (`abs-platform/docs/models/bss/setup-data`)

---

## Entity Hierarchy

BSS setup data follows a strict hierarchy from atomic services to customer instances:

```
Service (atomic offering)
  ↓
Bundle (service collection by tier)
  ↓
Terms (contract terms with period)
  ↓
Plan (Bundle + Terms)
  ↓
Plan Instance (customer-specific)
```

**Key Principle**: Bundles represent **tier-based service collections** (e.g., barebone, lux, premium). Subscription periods are modeled at the **Terms** and **Plan** levels, even when some markets (such as the initial Togo setup) choose to use period-specific bundle IDs for simplicity.

---

## Naming Convention

All setup data files follow the pattern:

**`{model}-{market}-{entity_type}-{entity_name}-{version}.json`**

| Component | Description | Examples |
|-----------|-------------|----------|
| **model** | Service model prefix | `bss` |
| **market** | Market identifier | `lome`, `nairobi` |
| **entity_type** | Type of entity | `service`, `bundle`, `terms`, `plan` |
| **entity_name** | Specific identifier | `swap-network`, `barebone`, `30day-standard` |
| **version** | Version identifier (optional for base entities) | `v1`, `v2` |

### Examples by Entity Type

**Services** (atomic):
- `bss-lome-service-swap-network.json`
- `bss-lome-service-electricity.json`
- `bss-lome-service-swap-count.json`
- `bss-lome-service-battery-fleet.json`

**Bundles** (tier-based, NO period):
- `bss-lome-bundle-barebone.json`
- `bss-lome-bundle-lux.json`
- `bss-nairobi-bundle-swap-freedom-v2.json`

**Terms** (contract terms, MAY include period):
- `bss-lome-terms-7day-standard.json`
- `bss-lome-terms-30day-standard.json`

**Plans** (bundle + terms + period):
- `bss-lome-plan-barebone-7day-v1.json`
- `bss-lome-plan-lux-30day-v1.json`

---

## Service Data Type

Services are atomic offerings - the foundational building blocks.

### Schema

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service",
    "market": "lome",
    "entity_name": "swap-network",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "service-{name}-{market}",
  "name": "Service Display Name",
  "description": "Service description for commercial team",
  "asset_type": "FLEET | ITEM",
  "asset_reference": "fleet-{asset-type}-{market}",
  "usage_metric": "DURATION | COUNT | ENERGY | DISTANCE",
  "usage_unit": "HOUR | DAY | 1 | 1K | 1M | kWh | KM",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Commercial team pricing input required",
  "access_control": {
    // Service-specific access control properties
  },
  "created_at": "2025-11-19T12:00:00Z",
  "updated_at": "2025-11-19T12:00:00Z"
}
```

### Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_meta` | Object | Yes | Metadata block documenting naming pattern |
| `id` | String | Yes | Unique service identifier |
| `name` | String | Yes | Display name for service |
| `description` | String | Yes | Commercial description |
| `asset_type` | Enum | Yes | `FLEET` (network/pool) or `ITEM` (countable resource) |
| `asset_reference` | String | Yes | Reference to underlying asset pool |
| `usage_metric` | Enum | Yes | `DURATION` (time elapsed), `COUNT` (dimensionless count), `ENERGY` (e.g. kWh), `DISTANCE` (e.g. km) |
| `usage_unit` | String | Yes | Unit of measurement: `HOUR`, `DAY`, `1`, `1K`, `1M`, `kWh`, `KM` |
| `usage_unit_price` | Number | Yes | Price per unit (pending commercial input) |
| `access_control` | Object | No | Service-specific access constraints |
| `created_at` | DateTime | Yes | Creation timestamp |
| `updated_at` | DateTime | Yes | Last update timestamp |

### Service Types

#### 1. Network Access Service

**Purpose**: Grant access to swap network infrastructure

**Example**: `bss-lome-service-swap-network.json`

```json
{
  "id": "service-swap-network-togo-lome",
  "name": "Swap Network Access (Lome Metro)",
  "description": "Access to battery swap network fleet across Lome metropolitan area",
  "asset_type": "FLEET",
  "asset_reference": "fleet-swap-stations-lome",
  "usage_metric": "DURATION",
  "usage_unit": "DAY",
  "usage_unit_price": 0.00,
  "access_control": {
    "geographic_boundary": "Lome Metro Area",
    "service_hours": "24/7",
    "requires_subscription": true
  }
}
```

**Commercial Mapping**: Maps to "Network Access" Service Product-Unit

#### 2. Battery Fleet Access Service

**Purpose**: Grant access to battery circulation pool

**Example**: `bss-lome-service-battery-fleet.json`

```json
{
  "id": "service-battery-fleet-togo-lome",
  "name": "Battery Fleet Access (Togo)",
  "description": "Access to battery inventory pool for swap operations",
  "asset_type": "FLEET",
  "asset_reference": "fleet-batteries-togo",
  "usage_metric": "DURATION",
  "usage_unit": "DAY",
  "usage_unit_price": 0.00,
  "access_control": {
    "battery_types": ["standard-48v", "standard-60v"],
    "quality_tier": "standard",
    "warranty_coverage": true
  }
}
```

**Commercial Mapping**: Maps to "Battery Circulation Access" Service Product-Unit

#### 3. Swap Count Service

**Purpose**: Track and meter battery swap transactions

**Example**: `bss-lome-service-swap-count.json`

```json
{
  "id": "service-swap-count-togo",
  "name": "Swap-Count Service (Togo)",
  "description": "Battery swap transaction quota based on number of swaps performed",
  "asset_type": "ITEM",
  "asset_reference": "swap-transactions-togo",
  "usage_metric": "COUNT",
  "usage_unit": "1",
  "usage_unit_price": 0.00,
  "access_control": {
    "requires_active_subscription": true,
    "network_access_required": true
  }
}
```

**Commercial Mapping**: Maps to "Swap Transactions" Service Product-Unit

#### 4. Electricity Service

**Purpose**: Track and meter electricity consumption

**Example**: `bss-lome-service-electricity.json`

```json
{
  "id": "service-electricity-togo",
  "name": "Electricity Service (Togo)",
  "description": "Battery electricity quota allocation based on kilowatt-hour consumption",
  "asset_type": "ITEM",
  "asset_reference": "electricity-pool-togo",
  "usage_metric": "ENERGY",
  "usage_unit": "kWh",
  "usage_unit_price": 0.00,
  "access_control": {
    "metering_enabled": true,
    "real_time_tracking": true
  }
}
```

**Commercial Mapping**: Maps to "Electricity Allocation" Service Product-Unit

#### 5. Asset-Assignment Service

**Purpose**: Bind specific vehicle ITEM ID to service plan for contract duration

**Example**: `bss-lome-service-asset-assignment-e3h-12month.json`

```json
{
  "id": "service-asset-assignment-e3h-12month",
  "name": "Asset Assignment – E3H – 12 Months",
  "description": "12-month (365-day) time-bounded assignment of E3H vehicle to swap service plan, binding vehicle ITEM ID from THING to service entitlements",
  "asset_type": "ITEM",
  "asset_reference": "vehicle-e3h",
  "usage_metric": "DURATION",
  "usage_unit": "DAY",
  "usage_unit_price": 0.00,
  "_comment_usage_unit_price": "Asset assignment is priced at plan level, not per day",
  "access_control": {
    "assignment_duration_days": 365,
    "vehicle_model": "E3H",
    "requires_concrete_item_id": true,
    "binding_time": "SALES_ORDER_CREATION"
  },
  "created_at": "2025-12-16T00:00:00Z",
  "updated_at": "2025-12-16T00:00:00Z"
}
```

**Commercial Mapping**: Maps to "Asset-Assignment – E3H – 12 Months" Contract Product-Unit

**Context**: Runtime realization of Contract PUs (WARRANTY, PRIVILEGE, RENTAL). Bridges fungible Contract PUs to non-fungible service subscriptions by binding concrete vehicle ITEM ID from THING (DIRAC/ARM) at sales order creation.

---

## Bundle Data Type

Bundles are tier-based collections of services. They define **what services** are included but NOT subscription periods or pricing.

### Schema

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "bundle",
    "market": "lome",
    "entity_name": "barebone",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  },
  "id": "bundle-{market}-{tier}",
  "name": "Bundle Display Name",
  "description": "Bundle description and value proposition",
  "version": "1.0.0",
  "status": "ACTIVE | DEPRECATED | ARCHIVED",
  "service_ids": [
    "service-id-1",
    "service-id-2"
  ],
  "created_at": "2025-11-19T12:00:00Z",
  "updated_at": "2025-11-19T12:00:00Z",
  "created_by": "system"
}
```

### Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `_meta` | Object | Yes | Metadata block documenting naming pattern |
| `id` | String | Yes | Unique bundle identifier |
| `name` | String | Yes | Display name for bundle |
| `description` | String | Yes | Value proposition and included services |
| `version` | String | Yes | Semantic version (1.0.0) |
| `status` | Enum | Yes | `ACTIVE`, `DEPRECATED`, or `ARCHIVED` |
| `service_ids` | Array[String] | Yes | List of service IDs included in bundle |
| `created_at` | DateTime | Yes | Creation timestamp |
| `updated_at` | DateTime | Yes | Last update timestamp |
| `created_by` | String | Yes | Creator identifier |

### Bundle Tiers

#### 1. Barebone Bundle

**Purpose**: Minimal service tier - network access only, zero quota allocation

**Example**: `bss-lome-bundle-barebone.json`

```json
{
  "id": "bundle-togo-barebone",
  "name": "Togo Bare-bone Bundle",
  "description": "Network and fleet access with zero quota allocation for electricity and swaps - pay-per-use model",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-swap-network-togo-lome",
    "service-battery-fleet-togo-lome",
    "service-electricity-togo",
    "service-swap-count-togo"
  ]
}
```

**Commercial Characteristics**:
- Access-only model
- Zero included quota for metered services
- All usage charged at pay-per-use rates
- Budget-conscious customer segment

#### 2. Lux Bundle

**Purpose**: Premium service tier - generous quota allocation

**Example**: `bss-lome-bundle-lux.json`

```json
{
  "id": "bundle-togo-lux",
  "name": "Togo Lux All-Inclusive Bundle",
  "description": "Full network access with generous quota allocation covering expected usage",
  "version": "1.0.0",
  "status": "ACTIVE",
  "service_ids": [
    "service-swap-network-togo-lome",
    "service-battery-fleet-togo-lome",
    "service-electricity-togo",
    "service-swap-count-togo"
  ]
}
```

**Commercial Characteristics**:
- Full-service model
- Generous quota allocations
- Predictable monthly cost
- High-usage customer segment

---

## Terms Data Type

Terms define contract conditions including subscription periods.

### Schema

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
  "service_name": "Service Legal Name",
  "service_description": "Legal service description",
  "service_duration_days": 30,
  "billing_cycle": "MONTHLY | WEEKLY",
  "monthly_fee": 0.00,
  "deposit_amount": 0.00,
  "cancellation_notice_days": 7,
  "early_termination_fee": 0.00,
  "refund_policy": "Policy description",
  "liability_limit": 500000.00,
  "insurance_required": false,
  "damage_deposit": 0.00,
  "governing_law": "Laws of [Country]",
  "dispute_resolution": "Arbitration process"
}
```

### Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `service_name` | String | Yes | Legal service name |
| `service_description` | String | Yes | Legal description |
| `service_duration_days` | Integer | Yes | Subscription period in days (7, 30, etc.) |
| `billing_cycle` | Enum | Yes | `MONTHLY`, `WEEKLY` |
| `monthly_fee` | Number | Yes | Base subscription fee |
| `deposit_amount` | Number | Yes | Required deposit |
| `cancellation_notice_days` | Integer | Yes | Cancellation notice period |
| `early_termination_fee` | Number | Yes | Penalty for early termination |
| `refund_policy` | String | Yes | Refund terms |
| `liability_limit` | Number | Yes | Maximum liability (in local currency) |
| `insurance_required` | Boolean | Yes | Whether insurance is mandatory |
| `damage_deposit` | Number | Yes | Damage protection deposit |
| `governing_law` | String | Yes | Legal jurisdiction |
| `dispute_resolution` | String | Yes | Dispute resolution process |

---

## Plan Data Type

Plans combine bundles with terms and quota configurations to create complete subscription offerings.

### Schema

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "plan",
    "market": "lome",
    "tier": "barebone",
    "period": "30day",
    "version": "v1",
    "filename_pattern": "{model}-{market}-{entity_type}-{tier}-{period}-{version}.json"
  },
  "id": "template-{market}-{period}-{tier}-{version}",
  "name": "Plan Display Name",
  "description": "Complete plan description",
  "version": "1.0.0",
  "status": "ACTIVE | DEPRECATED",
  "country_code": "TG",
  "legal_jurisdiction": "Jurisdiction description",
  "billing_currency": "XOF",
  "contract_terms_id": "terms-{market}-{period}-standard",
  "service_cycle_fsm_id": "fsm-bss-service-cycle",
  "payment_cycle_fsm_id": "fsm-bss-payment-cycle",
  "agent_config_id": "agent-config-bss-standard",
  "service_bundle_id": "bundle-{market}-{tier}",
  "service_configurations": [
    {
      "service_id": "service-id",
      "initial_quota": 0.0,
      "max_quota": 999999.0,
      "rate_limit_per_day": -1.0,
      "auto_renewal": false,
      "overage_allowed": true,
      "overage_rate": 0.00,
      "_comment": "Configuration notes"
    }
  ],
  "created_at": "2025-11-19T12:00:00Z",
  "updated_at": "2025-11-19T12:00:00Z",
  "created_by": "product-team",
  "change_log": []
}
```

### Service Configuration Schema

Each service in the plan has specific quota and usage rules:

```json
{
  "service_id": "service-identifier",
  "initial_quota": 0.0,
  "max_quota": 999999.0,
  "rate_limit_per_day": -1.0,
  "auto_renewal": false,
  "overage_allowed": true,
  "overage_rate": 0.00,
  "_comment": "Configuration notes"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `service_id` | String | Reference to service entity |
| `initial_quota` | Number | Starting quota allocation |
| `max_quota` | Number | Maximum allowed quota |
| `rate_limit_per_day` | Number | Daily usage limit (-1 = unlimited) |
| `auto_renewal` | Boolean | Whether quota auto-renews |
| `overage_allowed` | Boolean | Whether usage beyond quota is permitted |
| `overage_rate` | Number | Price per unit for overage consumption |

### Service Configuration Patterns

#### Access Services (Entitlement Flag)

Network and fleet access use a 0/1 entitlement flag in quota configuration:

```json
{
  "service_id": "service-swap-network-togo-lome",
  "initial_quota": 1.0,
  "max_quota": 1.0,
  "rate_limit_per_day": -1.0,
  "auto_renewal": true,
  "overage_allowed": false,
  "overage_rate": null,
  "_comment": "Network access entitlement flag - 1.0 means enabled for the contract period, no overage concept"
}
```

#### Metered Services - Zero Quota (Barebone)

Pay-per-use model with no included quota:

```json
{
  "service_id": "service-electricity-togo",
  "initial_quota": 0.0,
  "max_quota": 999999.0,
  "rate_limit_per_day": -1.0,
  "auto_renewal": false,
  "overage_allowed": true,
  "overage_rate": 0.00,
  "_comment": "Bare-bone tier has zero quota - all electricity charged at overage rate"
}
```

#### Metered Services - Generous Quota (Lux)

All-inclusive model with substantial quota:

```json
{
  "service_id": "service-electricity-togo",
  "initial_quota": 120.0,
  "max_quota": 150.0,
  "rate_limit_per_day": -1.0,
  "auto_renewal": true,
  "overage_allowed": true,
  "overage_rate": 0.00,
  "_comment": "Lux tier includes 120 kWh monthly quota with overage allowed"
}
```

---

## Metadata Block

All setup data files MUST include a `_meta` block documenting the filename-metadata binding:

```json
{
  "_meta": {
    "service_model": "bss",
    "entity_type": "service | bundle | terms | plan",
    "market": "lome | nairobi",
    "entity_name": "specific-identifier",
    "version": null,
    "filename_pattern": "{model}-{market}-{entity_type}-{entity_name}.json"
  }
}
```

**Purpose**:
- Self-documenting files
- Validation of filename conventions
- Git-friendly change tracking
- Clear versioning lineage

---

## Commercial Model Mapping

### Service → Product-Unit

Each **Service** in ABS Platform maps to a **Service Product-Unit** in the commercial model:

| ABS Service | Commercial Product-Unit | Category |
|-------------|-------------------------|----------|
| Swap Network Access | Network Access | Service PU |
| Battery Fleet Access | Battery Circulation Access | Service PU |
| Swap Count | Swap Transactions | Service PU |
| Electricity | Electricity Allocation | Service PU |
| Asset-Assignment – E3H – 12 Months | Asset-Assignment – E3H – 12 Months | Contract PU |

### Bundle → Product Bundle

Each **Bundle** in ABS Platform maps to a **Product Bundle** in the commercial model:

| ABS Bundle | Commercial Bundle | Target Segment |
|------------|-------------------|----------------|
| Barebone | Starter/Budget Bundle | Pay-per-use customers |
| Lux | Premium/All-Inclusive Bundle | High-usage customers |

### Plan → Sales Order Configuration

**Plans** define how bundles are instantiated as subscription offerings with:
- Contract terms (period, fees, deposits)
- Service quota allocations
- Pricing tiers

---

## Data Validation Requirements

All setup data files must:

1. **Include `_meta` blocks** with filename-metadata binding
2. **Schema compliance** verified against ABS Platform GraphQL schema
3. **No hard-coded values** - all data derives from configuration templates
4. **Consistent naming** following the defined convention
5. **Proper versioning** for plans and updated entities
6. **Complete documentation** with `_comment` fields for pending inputs

---

## File Organization

Setup data is organized by market in separate folders:

```
setup-data/
├── README.md
├── Kenya_Nairobi/
│   ├── bss-nairobi-service-*.json
│   ├── bss-nairobi-bundle-*.json
│   ├── bss-nairobi-terms-*.json
│   └── bss-nairobi-plan-*.json
├── Togo_Lome/
│   ├── bss-lome-service-*.json
│   ├── bss-lome-bundle-*.json
│   ├── bss-lome-terms-*.json
│   └── bss-lome-plan-*.json
```

**Benefits**:
- **Modularity**: Individual files for each entity
- **Git-friendly**: Changes isolated to specific entities
- **Clarity**: Self-documenting with metadata
- **Reusability**: Easy to reference across markets

---

## Related Documentation

- [Product-Unit Model](../1-product-unit-model/index.md) - Core commercial model
- [Product-Unit Library](../2-product-unit-library/index.md) - Service Product-Units
- [Product-Bundle Library](../3-product-bundle-library/index.md) - Bundle design patterns
- [ABS Platform Documentation](C:\Users\Huashan_Wang\Documents\GitHub\OVES\abs-platform\docs\models\bss\) - Technical implementation
