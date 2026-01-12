# Services and Bundles in Odoo

**Purpose:** User guide for selling service products alongside physical products, with contracts automatically linked to specific assets.

**Audience:** Sales operations, commercial teams, order entry staff.

---

## Overview

Service products in Odoo work like any other product, but represent services (warranties, swap privileges, maintenance plans) rather than physical goods. When sold alongside a physical product, service contracts are automatically created and linked to the specific asset's serial number.

**Two-Level Structure**:

1. **Service Products** (templates): Define what services are available for each product type (e.g., "E3Pro Warranty" for E3Pro motorcycles)
2. **Service Contracts** (instances): Individual contracts created when sold, linked to a specific serial number

## How to Sell Service Contracts

### Step 1: Create Sales Order

Create a standard Sales Order with:
- Customer information
- At least one physical product line (e.g., E3Pro motorcycle)
- One or more service product lines (e.g., E3Pro Warranty, E3Pro Swap Privilege)

### Step 2: Assign Serial Number to Physical Product

When confirming the order:
1. Select the specific serial number for the physical product being sold
2. The system automatically identifies which service products are compatible with this product type

### Step 3: Service Auto-Linking

The system automatically:
- Links all service products in the order to the physical product's serial number
- Creates individual service contracts for each service
- Sets start date (typically order confirmation date)
- Calculates end date based on service duration

### Step 4: Contract Activation

Once the order is confirmed:
- Service contracts become **Active**
- Customer gains access to the services
- Contracts appear in the Service Contracts view

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

### One Physical Product Per Order

Each Sales Order with service products must contain **exactly one** physical product serial number. All service products in that order will link to this serial.

**Why**: Ensures clear contract ownership and prevents ambiguity about which asset a service covers.

### Compatible Services Only

The system automatically filters service products based on the physical product type. You can only sell services that are compatible with the product model.

**Example**: "E3Pro Warranty" only appears as an option when selling an E3Pro motorcycle, not an E5Pro.

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
