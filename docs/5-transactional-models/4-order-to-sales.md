# Order to Sales

## Payment Flow

Transactions follow a clear payment path:

1. Session begins in Draft
2. Payment attempt recorded (success or failure)
3. On success, transaction becomes Confirmed
4. Fulfillment proceeds; recurring services activate when applicable
5. Completion with invoicing and accounting

Guidelines:

- Multiple payment attempts are allowed; each attempt is retained for audit
- Failed attempts do not lose context; transaction stays in Draft until success
- Deposits create service entitlements; recurring subscriptions start after confirmation

---

## Invoicing & Accounting

- Confirmed transactions generate invoices
- Deposits are recorded separately from service subscriptions
- Refund logic must be explicit in contract terms (see Contract Structures)

---

## Refunds & Cancellations

- Pre-fulfillment cancellations return transaction to Cancelled
- Deposit refunds occur per defined conditions (termination, entitlement return)
- Recurring services stop on cancellation; reactivation resumes billing

---

## Relationship to Product-Units and Bundles

- Product-Units are the atomic elements of transactions
- Bundles are designed in ABS, expanded into individual Product-Units for the order
- Pricing and invoicing apply per Product-Unit; bundle pricing is a commercial overlay

References:

- Product-Unit Structure: `../1-product-unit-model/1-structure.md`
- Product-Unit Taxonomy: `../1-product-unit-model/2-taxonomy.md`
- Bundling Types: `../3-bundling-framework/1-types.md`
- Bundle Templates: `../3-bundling-framework/3-bundle-templates.md`
- Implementation: `./6-odoo-models.md`
