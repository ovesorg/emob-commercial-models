# Services and Bundles in Odoo

**Purpose:** Define the two-level binding model for ABS services tied to product models and individual serial numbers.

**Audience:** Developers, system architects, operations teams implementing service contract management.

---

## Design Rationale

ABS services and bundles operate with two key levels of binding:

1. **Level 1**: **Service Products** tied to **Product Models** (defining the type of service available for a product).
2. **Level 2**: **ABS Contracts** as instances of **service products**, tied to specific **serial numbers** (tracking individual products/assets and their associated service contracts).

This approach ensures flexibility, avoids redundancy and potential conflicts, and allows for clean separation between **product models** and **individual asset tracking**.

## Operating Workflow

1. **Select Serial Number**:
   * User selects a **serial number** of a physical product from inventory or location (e.g., **E3Pro Serial 12345**).

2. **Determine Product Model**:
   * System automatically identifies the associated **product model** (e.g., **E3Pro**) based on the serial number.

3. **Available Service Type Filtering**:
   * System **filters** and presents only valid **ABS service types** (e.g., **E3Pro-Warranty**) that can be applied to that product model.

4. **Create ABS Contract**:
   * User selects appropriate **service product template** (e.g., **E3Pro-Warranty**) and creates the **ABS contract**, tied to the selected serial number.

5. **Service Contract Management**:
   * The **ABS service contract** is tied to the **specific asset** (via serial number) and the **service product template**. It includes **start** and **end date**, and can be marked as **active** or **expired**.

## Two-Level Modeling

| **Level**                                   | **Description**                                                                                                                                                                                                                         | **Example**                                                                   |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Level 1: ABS Service as Service Product** | **ABS services** are modeled as **service products** (e.g., **E3Pro-Warranty**) that are tied to **product models** (e.g., **E3Pro**). A **service product** defines the type of service (e.g., warranty, maintenance).                 | **Service Product**: E3Pro-Warranty <br> **Target Product**: E3Pro (model)    |
| **Level 2: ABS Contract as Instance**       | **ABS contracts** are **instances** of the service products, tied to a **specific serial number**. The **contract** links a **specific asset** (serial number) to a service (e.g., **E3Pro Serial 12345** gets the **E3Pro-Warranty**). | **Contract**: E3Pro Warranty 12345 <br> **Serial Number**: E3Pro Serial 12345 |

## Model Extension: ABSContract

1. **service_contract_id**: A unique identifier for each **ABS service contract**.
2. **service_serial_number**: The **serial number** of the specific product being serviced (e.g., **E3Pro Serial 12345**).
3. **service_template_id**: The **service product template** (e.g., **E3Pro-Warranty**) that defines the type of service, linked to the **product model** (e.g., **E3Pro**).
4. **active**: Status of the service contract (active or expired).
5. **start_date** & **end_date**: The lifecycle of the service contract, defining its duration.

The **ABS service contract** links to a service template (tied to a product model) and is itemized by serial number.

## Key Design Principles

* **Service Products** (Level 1) are tied to **product models** and represent the **type** of service (e.g., **E3Pro-Warranty** for **E3Pro**). They define what services are available for specific product types.

* **ABS Contracts** (Level 2) are **specific instances** of service products, tied to a **serial number** of a physical asset (e.g., **E3Pro Serial 12345**), representing a **service contract** for a particular asset.

* **Filtering Valid Service Types**: Once the **serial number** is selected, the system filters available **ABS service types** to ensure only valid contracts (e.g., **E3Pro-Warranty**) can be created for the correct **product model**.

* The **ABS contract** represents the **service contract** applied to an asset, bound to the service template (service type) rather than directly to the product model, ensuring proper separation of concerns.
