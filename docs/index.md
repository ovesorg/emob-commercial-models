# eMob Commercial Models

## Overview

This repository documents the commercial modeling framework for eMob asset-based services, structured around three core pillars:

1. **Business Model Concepts** – Product-Units (PUs) as the atomic commercial construct, bundling logic, and service plans.
2. **Implementation** – Dual-pillar architecture: **Odoo** for mainstream commercial transactions (CRM, orders, payments) and **ABS** for asset-based services and asset relationship management (ARM).
3. **Integration** – The **DIRAC framework** ensures coordinated workflows, roles, and responsibilities between Odoo and ABS. The Odoo↔ABS interplay is critical to the value proposition.

## Documentation Structure & Audience

### 0. Overview
**Audience:** All stakeholders (executive, product, commercial, technical)  
**Purpose:** High-level orientation to the framework and documentation structure.

### 1. Product-Unit Model
**Audience:** Product designers, commercial teams, technical architects  
**Purpose:** Define the foundational Product-Unit taxonomy (Physical, Service, Contract), prototypes, and how they map to Odoo and ABS systems.

### 2. Product-Unit Library
**Audience:** Product managers, commercial operations  
**Purpose:** Curated catalog of concrete Product-Units (physical assets, services, contracts) ready for use in bundles and offerings.

### 3. Product Bundle Library
**Audience:** Product managers, sales teams, market-specific teams  
**Purpose:** Pre-designed bundles and service templates combining Product-Units into customer-facing offers.

### 4. Pricing Models
**Audience:** Pricing teams, finance, commercial operations  
**Purpose:** Pricing strategies, channel-specific pricing, and governance rules.

### 5. Transactional Models
**Audience:** Sales operations, Odoo administrators, integration developers  
**Purpose:** Sales orders, channel structures, payment flows, and Odoo/ABS model implementation details.

### 6. Commercial Operations SOPs
**Audience:** Operations teams, customer support, service delivery  
**Purpose:** Standard operating procedures for onboarding, sales fulfillment, subscription services, and aftersales support.

### 7. Market-Specific Models
**Audience:** Market-specific teams (e.g., Togo, Kenya), local sales and operations  
**Purpose:** Localized commercial models, regulatory adaptations, and market-specific bundles.

### 8. Integration & DevOps
**Audience:** Technical teams, integration engineers, DevOps  
**Purpose:** Odoo-ABS integration details, setup data types, CI/CD, and governance workflows.

### 9. Appendix
**Audience:** All teams (reference)  
**Purpose:** Glossary, templates, sample products, regulatory notes, and reference flows.

## Key Principles

- **Product-Unit (PU)** is the atomic commercial construct with a clear metric (Piece, day, count, kWh, etc.).
- **Bundles** are customer-facing combinations of Product-Units, defined in ABS and expanded into Odoo order lines.
- **Odoo** handles mature commercial transactions; **ABS** manages smart devices, asset lifecycle, and entitlements.
- **DIRAC integration** ensures synchronized, traceable workflows between Odoo CRM and ABS ARM.
