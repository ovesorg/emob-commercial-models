# Sales Representatives

## Concept

Sales Representatives are external agents responsible for handling transactions. They are tracked as person records and may be associated with a Channel Partner.

---

## Characteristics

- Person (not a company)
- Tagged role: "Sales Representative"
- Optional parent relationship to Channel Partner
- Operates at one or more Outlets
- Not necessarily a system user; tracked independently

---

## Performance & QC

- Orders handled per rep
- Revenue and average order value
- Payment success rates
- Commission calculation inputs

---

## Relationships

- Rep → Channel Partner (parent)
- Rep → Outlet (operating location)
- Rep → Sales Order (attribution via extended field)

---

References:

- Channels & Outlets: `./3-sales-channel.md`
- Implementation: `./6-odoo-models.md`
