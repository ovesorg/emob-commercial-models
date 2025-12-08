# Odoo Product-Unit Set

This document defines the reference set of **Physical**, **Service**, and **Contract** Product-Units as they are implemented in Odoo. It is the concrete counterpart to the conceptual Product-Unit model and is the source of truth for Odoo product definitions.

## 1. Physical Product-Units

Physical Product-Units are tangible assets tracked in inventory and managed over their lifecycle by ABS.

Representative models:

- **E3-Pro**
- **S7**
- **S6H**
- **MotBat 30Ah**
- **MotBat 45Ah**
- **MotBat 100Ah**

Configuration:

- **PU Category**: Physical  
- **Odoo Type**: `product` (stockable)  
- **Metric**: Piece (or local equivalent)  
- **ABS Link**: Motorbike and battery asset types (e.g., `Motorbike_E3Pro`, `Battery_45Ah`)

## 2. Service Product-Units

Service Product-Units represent the **actual services** that riders purchase and consume. They are defined natively by ABS (no bundles in Odoo) and are exposed as Odoo `service` products.

Services are strictly classified into:

- **Access-type services** – grant time-bounded access to infrastructure (Battery Circulation, Swap Network, Charging Network).  
- **Gage-type services** – monetize a usage metric (swap count, kWh, etc.).

### 2.1 Access-Type Services (Access to Infrastructure)

All access-type services must explicitly express **duration**.

Representative PUs:

- **Battery Swap Access – 45Ah – Weekly**
- **Battery Swap Access – 45Ah – Monthly**
- **Swap Network Access – City – 12 Months**
- **Charging Network Access – City – 12 Months**

Configuration:

- **PU Category**: Service  
- **Service Type**: Access  
- **Odoo Type**: `service`  
- **Metric**: Time-based or piece-based, with a **duration field** at contract/order level  
- **ABS Role**: Grants access to infrastructure (Battery Circulation, Swap Network, Charging Network)

### 2.2 Gage-Type Services (Usage-Based)

Gage-type services track and monetize usage, not access.

Representative PUs:

- **Battery Swap Usage – 45Ah – Per Swap**
- **Battery Swap Usage – 45Ah – Pack of 50**
- **Energy Usage – kWh**

Configuration:

- **PU Category**: Service  
- **Service Type**: Gage  
- **Odoo Type**: `service`  
- **Metric**:  
  - Swap usage: count (per swap) or prepaid pack count  
  - Energy usage: kWh  
- **ABS Role**: Measures and charges for actual consumption

## 3. Contract Product-Units

Contract Product-Units represent **long-duration commercial commitments** between seller and buyer, typically anchored on one or more Physical Product-Units. In the OVES model, **Contract** is a fundamental Product-Unit category, alongside Physical and Service.

All Contracts are implemented as Odoo `service` products with contract/subscription behavior, but they are conceptually grouped into several **contract types**:

- **Privilege Contracts** – determine whether a rider is allowed to purchase/consume certain services.  
- **Warranty Contracts** – describe replacement/repair commitments.  
- **Rental Contracts** – describe time-bounded usage rights without ownership.  
- **Maintenance Contracts** – describe maintenance/servicing commitments.

### 3.1 Privilege Contracts (Per Product Model)

A **Privilege** is a **Contract-type Product-Unit**. It is defined **per physical product model** and acts as a prerequisite for purchasing specific Service Product-Units (for example, swap services).

Representative Privilege Contracts:

- **Swap Privilege – E3-Pro**
- **Swap Privilege – S7**
- **Swap Privilege – S6H**
- **Swap Privilege – MotBat 30Ah**
- **Swap Privilege – MotBat 45Ah**
- **Swap Privilege – MotBat 100Ah**

Configuration:

- **PU Category**: Contract (Privilege)  
- **Associated Physical Product-Unit**: the corresponding motorbike or battery model  
- **Role**: Long-duration entitlement; without an active Privilege Contract, the rider cannot purchase or consume the related swap Service Product-Units  
- **Economic Behavior**: often deposit-like, potentially mapped to liability + entitlement in accounting and ABS

### 3.2 Warranty Contracts

Warranty Contracts describe long-term commitments to repair or replace physical Product-Units under specified conditions.

Representative Warranty Contracts:

- **Replacement Warranty – MotBat 45Ah – 24 Months**
- **Limited Warranty – E3-Pro – 24 Months**

Configuration:

- **PU Category**: Contract (Warranty)  
- **Associated Physical Product-Unit**: MotBat 45Ah, E3-Pro, etc.  
- **Role**: Replacement / repair rights over a fixed term (e.g. 24 months)  

### 3.3 Rental Contracts

Rental Contracts describe time-bounded rights to use a physical product without transferring ownership.

Representative Rental Contract:

- **Motorbike Rental – E3-Pro – 12 Months**

Configuration:

- **PU Category**: Contract (Rental)  
- **Associated Physical Product-Unit**: E3-Pro  
- **Role**: Right to use the motorbike for the specified duration  
- **Billing**: Recurring or prepaid, depending on pricing model

### 3.4 Maintenance Contracts

Maintenance Contracts describe commitments to provide servicing and maintenance for a physical product.

Representative Maintenance Contract:

- **Maintenance Contract – E3-Pro – 12 Months**

Configuration:

- **PU Category**: Contract (Maintenance)  
- **Associated Physical Product-Unit**: E3-Pro  
- **Role**: Periodic or on-demand maintenance obligations over the contract term  

## 4. Field Configuration Summary

The table below summarizes key Odoo configuration fields for the reference Product-Units.

| Product Name                                   | PU Category | Contract Type | Service Type | Odoo Type (`product.template.type`) | Invoice Policy               | Recurring? | Duration Handling                      |
|------------------------------------------------|------------|---------------|-------------|-------------------------------------|------------------------------|-----------|----------------------------------------|
| E3-Pro                                         | Physical   | n/a           | n/a         | `product` (stockable)               | Delivered quantities         | No        | n/a                                    |
| S7                                             | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
| S6H                                            | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
| MotBat 30Ah                                    | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
| MotBat 45Ah                                    | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
| MotBat 100Ah                                   | Physical   | n/a           | n/a         | `product`                           | Delivered quantities         | No        | n/a                                    |
| Battery Swap Access – 45Ah – Weekly            | Service    | n/a           | Access      | `service`                           | Prepaid / ordered quantities | Often Yes | Explicit duration (e.g. 7 days)        |
| Battery Swap Access – 45Ah – Monthly           | Service    | n/a           | Access      | `service`                           | Prepaid / ordered quantities | Yes       | Explicit duration (e.g. 1 month)       |
| Swap Network Access – City – 12 Months         | Service    | n/a           | Access      | `service`                           | Prepaid / ordered quantities | Yes       | Explicit duration (12 months)          |
| Charging Network Access – City – 12 Months     | Service    | n/a           | Access      | `service`                           | Prepaid / ordered quantities | Yes / No  | Explicit duration (12 months)          |
| Battery Swap Usage – 45Ah – Per Swap           | Service    | n/a           | Gage        | `service`                           | Delivered quantities         | No        | Per-usage; no fixed duration           |
| Battery Swap Usage – 45Ah – Pack of 50         | Service    | n/a           | Gage        | `service`                           | Delivered quantities         | No        | Consumed against prepaid balance       |
| Energy Usage – kWh                             | Service    | n/a           | Gage        | `service`                           | Delivered quantities         | No        | Measured by kWh usage                  |
| Swap Privilege – MotBat 45Ah                   | Contract   | Privilege     | n/a         | `service`                           | Prepaid / deposit-like       | Yes / No  | Contract term (e.g. 12/24/36 months)   |
| Swap Privilege – MotBat 30Ah                   | Contract   | Privilege     | n/a         | `service`                           | Prepaid / deposit-like       | Yes / No  | Contract term                          |
| Swap Privilege – MotBat 100Ah                  | Contract   | Privilege     | n/a         | `service`                           | Prepaid / deposit-like       | Yes / No  | Contract term                          |
| Replacement Warranty – MotBat 45Ah – 24 Months | Contract   | Warranty      | n/a         | `service`                           | Prepaid                      | No        | Fixed term (24 months)                 |
| Limited Warranty – E3-Pro – 24 Months          | Contract   | Warranty      | n/a         | `service`                           | Prepaid                      | No        | Fixed term (24 months)                 |
| Motorbike Rental – E3-Pro – 12 Months          | Contract   | Rental        | n/a         | `service`                           | Recurring or prepaid         | Yes       | Contract term (12 months)              |
| Maintenance Contract – E3-Pro – 12 Months      | Contract   | Maintenance   | n/a         | `service`                           | Recurring or prepaid         | Yes / No  | Contract term (12 months)              |
