# Services and Bundles in Odoo

**Purpose:** User guide for selling service products alongside physical products, with contracts automatically linked to specific assets.

**Audience:** Sales operations, commercial teams, order entry staff.

**Technical Reference:** See `odoo-migration` repo → `docs/assets-serial-numbers/service-bundles-intents.md` for implementation details.

---

## Overview

Service products in Odoo work like any other product, but represent services (warranties, swap privileges, maintenance plans) rather than physical goods. When sold alongside a physical product, service contracts are automatically created and linked to the specific asset's serial number.

**Two Sales Order Types**:

1. **Bundle SO**: Physical product + service products sold together (new customer)
2. **Service-only SO**: Additional services purchased for an existing asset (post-delivery)

## How to Sell Service Contracts

### Option A: Bundle SO (New Purchase)

Use when selling a physical product with services.

#### Step 1: Create Sales Order

Create a standard Sales Order with:
- Customer information
- One physical product line (e.g., E3Pro motorcycle)
- One or more service product lines (e.g., E3Pro Warranty, E3Pro Swap Privilege)

#### Step 2: Confirm and Deliver

1. Confirm the order
2. Process the delivery picking
3. Assign the specific serial number during delivery

#### Step 3: Contract Auto-Creation

After delivery completion, the system automatically:
- Creates service contracts linked to the delivered serial
- Sets start date (delivery date)
- Calculates end date based on service duration
- Syncs to ABS as ServicePlans

---

### Option B: Service-only SO (Post-Delivery Purchase)

Use when a customer wants to add services to an asset they already own.

#### Step 1: Find Original Purchase

Search for the customer's original Bundle SO that sold the physical product.

#### Step 2: Create Service-only SO

1. Create new Sales Order
2. Select **Original Purchase Order** field → link to the Bundle SO
3. System auto-populates:
   - Customer (from original SO)
   - Target Serial (from original SO's delivery)

#### Step 3: Add Service Products

Add only service products. The system validates:
- **Ownership**: Must be same customer as original purchase
- **Compatibility**: Services must be compatible with the asset type
- **Temporal eligibility**: Some services have time limits (e.g., "Extended Warranty" only within 30 days of purchase)

#### Step 4: Confirm

On confirmation:
- Service contracts created immediately (no delivery needed)
- Linked to the target serial from original SO

## Managing Service Contracts

### Viewing Contracts

Navigate to: **Sales > Service Contracts**

Filters available:
- By customer
- By serial number
- By service type
- By status (Active, Expired, Fulfilled)

### Contract Lifecycle

**Draft**: Contract created but order not confirmed  
**Active**: Contract in force, services available  
**Fulfilled**: All service obligations completed  
**Expired**: Contract end date reached

## Service Products vs. Service Contracts

| **Concept**           | **What It Is**                                                                                      | **Example**                                              |
|-----------------------|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| **Service Product**   | Template defining a type of service available for purchase                                          | "E3Pro Warranty" (can be sold to any E3Pro customer)    |
| **Service Contract**  | Individual contract instance created when a service product is sold, linked to a specific serial    | "E3Pro Warranty for Serial 12345" (tied to one motorcycle) |

## Service Contract Fields

When viewing a service contract, you'll see:

**Contract Number**: Unique identifier (e.g., SVC-2024-001234)  
**Customer**: Who the contract is with  
**Service Type**: Which service product (e.g., E3Pro Warranty)  
**Serial Number**: Which specific asset is covered  
**Start Date**: When the contract begins  
**End Date**: When the contract expires  
**Status**: Current state (Draft/Active/Fulfilled/Expired)  
**Sales Order**: Original order that created this contract

## Important Rules

### Bundle SO: One Physical Product Per Order

Each Bundle SO with service products must contain **exactly one** physical product serial number. All service products in that order will link to this serial.

**Why**: Ensures clear contract ownership and prevents ambiguity about which asset a service covers.

### Service-only SO: Must Reference Original Purchase

Service-only SOs **must** link to the original Bundle SO via the "Original Purchase Order" field. This:
- Enforces ownership (same customer)
- Provides temporal anchor for eligibility rules
- Creates audit trail

### Compatible Services Only

The system automatically filters service products based on the physical product type. You can only sell services that are compatible with the product model.

**Example**: "E3Pro Warranty" only appears as an option when selling an E3Pro motorcycle, not an E5Pro.

### Service Purchase Modes

Some services can only be sold in specific contexts:

| Mode | Meaning | Example |
|------|---------|----------|
| **Bundle Only** | Can only be purchased with new physical product | "E3Pro Warranty (New)" |
| **Service-only** | Can only be purchased post-delivery | "E3Pro Extended Warranty" |
| **Both** | Available in either context | "E3Pro Swap Service" |

### Temporal Eligibility

Some services have time-based constraints:

| Service | Max Days After Purchase | Requires Prior Service |
|---------|------------------------|------------------------|
| E3Pro Extended Warranty | 30 days | E3Pro Warranty (New) |
| E3Pro Swap Renewal | No limit | E3Pro Swap Service |

### Service Transferability

Some services are **transferable** (follow the asset if sold), others are **non-transferable** (bound to original buyer):

- **Transferable**: Warranty (new owner inherits remaining coverage)
- **Non-transferable**: Swap privilege (tied to original customer account)

Transferability is defined in the service product configuration.

## Reporting

### Outstanding Service Liability

View all active contracts and their estimated service costs:

**Reports > Service Contracts > Liability Report**

Shows:
- Total active contracts by service type
- Estimated provision costs
- Geographic distribution
- Expiration timeline

### Contract Traceability

From any serial number, view:
- All service contracts (past and present)
- Service history
- Claims/fulfillment records

**Inventory > Serial Numbers > [Select Serial] > Service Contracts Tab**
