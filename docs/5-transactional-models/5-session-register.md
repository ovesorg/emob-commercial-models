# Session Register

## Purpose

A sales session records a customer interaction from start to finish in OVApp. Each session is backed by a draft `sale.order` in Odoo, which carries products, pricing, and payment attempts until completion.

---

## Session Lifecycle

- Start: Initiate session; underlying Sales Order enters Draft
- Pause: Session can pause without losing context
- Resume: Continue later, optionally at another outlet if allowed
- Handoff: Transfer to another sales representative when necessary
- Complete: Payment success → Confirmed → Fulfilled → Completed

Context preserved throughout:

- Customer, products, pricing
- Channel Partner, Sales Rep, Outlet
- Payment attempts and timestamps

---

## Constraints

- Define session timeout policies (business decision)
- Ensure audit trail across pauses and resumes
- Prevent data loss on network failure

---

## Analytics

- Performance by Sales Rep
- Performance by Outlet and location
- Session completion rates and payment reliability

References:

- Channels and Actors: `./3-sales-channel.md`
- Implementation: `./6-odoo-models.md`
