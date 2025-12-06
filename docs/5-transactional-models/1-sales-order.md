# Sales Order

## Lifecycle States

Draft → Sale → Done / Cancel

- Draft: order created at session start; fully editable
- Sale: payment confirmed; order is binding
- Done: fulfillment complete; invoiced and accounted
- Cancel: aborted before fulfillment

---

## Native Fields (core)

- partner_id: customer
- order_line: product-unit lines
- payment_transaction_ids: payment attempts
- invoice_ids / invoice_status: invoicing linkage
- user_id: internal system user (technical)
- state: lifecycle

---

## Extended Fields (attribution)

- x_channel_partner_id → Channel Partner (company)
- x_sales_rep_id → Sales Representative (person)
- x_outlet_id → Sales Outlet (commercial location)

Purpose:

- QC & commission (rep/channel)
- Outlet & site analytics
- Persistent context across the session

---

## Persistence & Resumability

- Order created immediately at session start
- Survives interruptions and handoffs
- Can resume later, including at different outlet (if allowed)
- All payment attempts retained for audit

---

References:

- Implementation: `./6-odoo-models.md`
- Channels & Reps: `./3-sales-channel.md`, `./2-sale-reps.md`
- Session: `./5-session-register.md`
