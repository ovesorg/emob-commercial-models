# Contract Product-Units

## Overview

Contract Product-Units represent long-duration commitments and entitlements that govern the relationship between the customer and the business. They are modeled as Odoo `service` products but conceptually distinct from Service Product-Units.

**Contract Types:**

1. **Privilege** — Prerequisite entitlement to purchase or consume services
2. **Warranty** — Repair or replacement commitments for physical products
3. **Rental** — Time-bounded usage rights without ownership transfer
4. **Maintenance** — Scheduled servicing and upkeep commitments

## Privilege Contracts

**Definition:** Prerequisite entitlement to purchase swap services. Typically deposit-backed. One Privilege per product model.

### Swap Privilege – E3-Pro
- **Category:** Contract Product-Unit (Privilege)
- **Metric:** Contract (1 per customer)
- **Description:** Entitlement to purchase battery swap services for E3-Pro motorbike
- **Deposit:** Refundable deposit tied to battery value
- **Prerequisites:** Verified customer account, active E3-Pro ownership or lease

### Swap Privilege – S7
- **Category:** Contract Product-Unit (Privilege)
- **Metric:** Contract (1 per customer)
- **Description:** Entitlement to purchase battery swap services for S7 motorbike
- **Deposit:** Refundable deposit tied to battery value
- **Prerequisites:** Verified customer account, active S7 ownership or lease

### Swap Privilege – S6H
- **Category:** Contract Product-Unit (Privilege)
- **Metric:** Contract (1 per customer)
- **Description:** Entitlement to purchase battery swap services for S6H motorbike
- **Deposit:** Refundable deposit tied to battery value
- **Prerequisites:** Verified customer account, active S6H ownership or lease

### Swap Privilege – MotBat 30Ah
- **Category:** Contract Product-Unit (Privilege)
- **Metric:** Contract (1 per customer)
- **Description:** Entitlement to purchase battery swap services for 30Ah battery users
- **Deposit:** Refundable deposit tied to battery value

### Swap Privilege – MotBat 45Ah
- **Category:** Contract Product-Unit (Privilege)
- **Metric:** Contract (1 per customer)
- **Description:** Entitlement to purchase battery swap services for 45Ah battery users
- **Deposit:** Refundable deposit tied to battery value

### Swap Privilege – MotBat 100Ah
- **Category:** Contract Product-Unit (Privilege)
- **Metric:** Contract (1 per customer)
- **Description:** Entitlement to purchase battery swap services for 100Ah battery users (commercial/fleet)
- **Deposit:** Refundable deposit tied to battery value

**Privilege Obligations:**

- **Deposit Refund** — Return deposit upon contract termination (subject to asset condition)
- **Service Access** — Enable purchase of associated swap Service Product-Units
- **End-of-Service Options** — Refund, convert to product value, or liquidate per terms

## Warranty Contracts

**Definition:** Repair or replacement commitments for physical products over a specified duration.

### Replacement Warranty – MotBat 45Ah – 24 Months
- **Category:** Contract Product-Unit (Warranty)
- **Metric:** Contract (1 per battery)
- **Duration:** 24 months
- **Description:** Full replacement guarantee for defective batteries within warranty period
- **Coverage:** Manufacturing defects, premature SoH degradation

### Limited Warranty – E3-Pro – 24 Months
- **Category:** Contract Product-Unit (Warranty)
- **Metric:** Contract (1 per vehicle)
- **Duration:** 24 months
- **Description:** Repair or replacement for specified vehicle components
- **Coverage:** Motor, controller, frame (excludes wear-and-tear items)

**Warranty Obligations:**

- **Repair or Replace** — Fix or replace defective products per warranty terms
- **Parts Availability** — Maintain spare parts inventory for warranty repairs
- **Service Turnaround** — Defined repair/replacement timelines (e.g., 7-day SLA)

## Rental Contracts

**Definition:** Time-bounded usage rights without ownership transfer.

### Motorbike Rental – E3-Pro – 12 Months
- **Category:** Contract Product-Unit (Rental)
- **Metric:** Contract (1 per rental period)
- **Duration:** 12 months
- **Description:** Rental agreement for E3-Pro motorbike with usage rights but no ownership
- **Includes:** Maintenance, insurance coordination, end-of-term return or purchase option

**Rental Obligations:**

- **Asset Provision** — Deliver functional asset at contract start
- **Maintenance** — Regular servicing and repairs during rental period
- **End-of-Term Options** — Return, extend rental, or purchase at residual value

## Maintenance Contracts

**Definition:** Scheduled servicing and upkeep commitments for physical assets.

### Maintenance Contract – E3-Pro – 12 Months
- **Category:** Contract Product-Unit (Maintenance)
- **Metric:** Contract (1 per vehicle)
- **Duration:** 12 months
- **Description:** Scheduled maintenance services for E3-Pro motorbike
- **Includes:** Quarterly inspections, brake servicing, tire replacement, software updates

**Maintenance Obligations:**

- **Service Schedule** — Execute maintenance per defined intervals (e.g., quarterly)
- **Parts & Labor** — Included in contract price; customer pays only for exclusions
- **Priority Support** — Fast-track service appointments for contract holders

## Common Characteristics

**All Contract Product-Units share:**

- **Long Duration** — Typically 12-36 months, unlike transactional Service PUs
- **Odoo Modeling** — Implemented as `service` product type with recurring/contractual invoice policy
- **Customer Binding** — Tied to customer account, not transferable without approval
- **Termination Rules** — Defined early termination penalties, refund policies, or asset return requirements

## Obligations Summary

**When issuing Contract Product-Units, we commit to:**

- **Contractual Performance** — Deliver entitlements, warranties, or services per agreement
- **Transparent Terms** — Clear documentation of rights, obligations, and exit options
- **Dispute Resolution** — Defined escalation and arbitration procedures
- **Regulatory Compliance** — Adherence to consumer protection laws, deposit regulations, warranty standards
