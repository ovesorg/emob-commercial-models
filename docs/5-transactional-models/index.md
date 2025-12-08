## Transactional Models

This chapter describes how **commercial activity is transacted in Odoo**, and how those transactions relate to Product-Units, bundles, and ABS.

It is organized into eight sections, each owning a distinct part of the transactional story:

1. **Sales Order** (`1-sales-order.md`)
   - Defines the `sale.order` as the persistent **service event / retail session**.
   - Explains lifecycle, key fields, and how Product-Units appear as order lines.

2. **Sales Representatives** (`2-sale-reps.md`)
   - Describes how external sales reps are modeled using `res.partner`.
   - Covers conventions for tagging and attribution for analytics and commission.

3. **Sales Channel** (`3-sales-channel.md`)
   - Defines Channel Partners and Outlets, and how they map to Odoo models.
   - Explains how location and channel attribution are attached to each order.

4. **Order to Sales** (`4-order-to-sales.md`)
   - Focuses on payments, invoicing, and the order-to-cash flow.
   - Explains how payment attempts, invoices, and accounting link to `sale.order`.

5. **Session Register** (`5-session-register.md`)
   - Describes how sessions are opened, used, and closed from OVApp’s perspective.
   - Ties sessions to orders, outlets, and payment attempts for reconciliation.

6. **Odoo Models** (`6-odoo-models.md`)
   - Developer-facing summary of model changes and conventions in Odoo.
   - Includes the reference **Product-Unit configuration table** for Odoo.

7. **ABS Models** (`7-abs-models.md`)
   - Summarizes how ABS bundles and asset-based services relate back to orders.
   - Provides a bridge from transactional Odoo records to ABS bundle logic.

8. **OVApp Workflows** (`8-ovapp-workflows.md`)
   - Describes typical OVApp → Odoo workflows at the transactional level.
   - Shows how front-end flows create and complete orders using the models above.

Use this chapter when you need to understand **how real-world sales sessions, payments, and channel activity are represented in Odoo**, and how they connect to ABS bundles and Product-Units defined elsewhere in the documentation.
