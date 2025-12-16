# Sales Channels

## Channel Partner

Company entity (dealer, franchisee, distributor) authorized to sell.

Attributes:

- Odoo model: `res.partner` (`is_company = True`, tagged as "Channel Partner")
- Territory & market
- Product access rights
- Channel-specific pricing rules
- Commission structure

---

## Sales Outlet

Commercial sales location (physical, mobile, or virtual).

Attributes:

- Odoo model: `ov.outlet` (retail sales outlet)
- Name, external code
- Owned/operated by a Channel Partner
- Physical site address (single source of truth via linked Site partner)
- Optional co-located warehouse

Location hint:

- Site address tracked via a shared Site record
- Region and city analytics derived from Site

---

## Location & Analytics

- Performance by Outlet and Site
- Region/city grouping via Site attributes
- Channel partner rollups

---

References:

- Sales Order Attribution: `./1-sales-order.md`
- Session: `./5-session-register.md`
- Implementation: `./6-odoo-models.md`
