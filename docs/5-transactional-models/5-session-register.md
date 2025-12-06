# Session Register

## Purpose

A sales session records a customer interaction from start to finish. It must be persistent and resumable across interruptions, locations, and agents.

---

## Session Lifecycle

- Start: Initiate session; transaction enters Draft
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
