## 0. Overview

### Purpose

Define a commercially coherent, operationally actionable framework for Product-Units, bundling, and field operations. Lead to ready-to-use Commercial Standard Operating Procedures (SoPs) aligned with sales channels, app workflows, and customer interactions.

### Who should read this

- **Product / Commercial design, pricing, and strategy** – focus on Chapters 1–4 for concepts, libraries, bundles, and pricing.
- **Technical / Integration engineers (Odoo, ABS, OVApp, DevOps)** – focus on Chapters 5 and 8, with Chapter 1 as conceptual background.
- **Operations / SoP owners and trainers** – focus on Chapter 6, with supporting context from Chapters 1–5.
- **Country / market rollout teams** – focus on Chapter 7 for local model instances and configuration.
- **Everyone** – use Chapter 9 Appendix (especially Glossary and Templates) as shared reference.

### How to navigate the chapters

1. **Chapter 1 – Product-Unit Model** – defines the core Product-Unit concepts and modeling language.
2. **Chapter 2 – Product-Unit Library** – catalogs concrete Product-Unit types used across offers.
3. **Chapter 3 – Product-Bundle Library** – describes how services and Product-Units are combined into bundles.
4. **Chapter 4 – Pricing Models** – explains commercial pricing, risk-based patterns, and controls.
5. **Chapter 5 – Transactional Models** – shows how the model is implemented in Odoo/ABS/OVApp transactions.
6. **Chapter 6 – Commercial Operations SoPs** – provides operational playbooks aligned to the model.
7. **Chapter 7 – Market-Specific Models** – captures market-specific implementations (e.g., first BSS launches).
8. **Chapter 8 – Integration & DevOps** – documents technical integrations, CI/CD, and governance handover.
9. **Chapter 9 – Appendix** – holds glossary, templates, and sample definitions.

### Twin Pillars

**1. Odoo - Commercial Transaction Management**
- Customer relationship management (CRM)
- Product definition and catalog
- Sales orders and payment processing
- Commercial workflow orchestration

**2. ABS - Asset-Based Services (Asset Backoffice System)**
- Asset lifecycle management
- Asset-to-customer interaction logic
- Smart asset operations and entitlements

OVApp provides the customer and agent interfaces on top of these two pillars; it orchestrates user flows via their APIs but is never a system of record.

**Value Proposition:** Integration of CRM and Asset Relationship Management (ARM).

### Architecture Consensus

"Odoo handles commercial workflow. ABS handles smart assets. They handshake to deliver customer satisfaction."
