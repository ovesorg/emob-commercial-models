# ABS Models

## Core Principle

- Product-Unit is the shared atomic concept between ABS and commercial systems.
- Bundle is an ABS-only construct; it represents business-logic composition.

ABS determines valid combinations, eligibility, and entitlements. Commercial execution (pricing, invoicing) applies per Product-Unit.

---

## Bundles (ABS-Only)

- ABS expands a selected bundle into a list of Product-Units
- Frontend submits these Product-Units to the Sales Order
- No bundle mirroring required in the commercial system

Why:

- Avoids SKU explosion
- Keeps entitlement logic outside commercial configuration
- Supports dynamic, market-specific rules

---

## Entitlements

Deposit-based or contractual rights that grant access to services (e.g., battery swap privilege). Typical flow:

1. Deposit paid
2. Entitlement created
3. Recurring service (subscription) can start
4. Entitlement revoked on termination; deposit refund logic applies

---

## References

- Product-Unit Concepts: `../1-product-unit-model/1-concepts.md`
- Product-Unit Taxonomy: `../1-product-unit-model/2-taxonomy.md`
- ABS System Responsibilities: `../1-product-unit-model/5-abs-system.md`
- Product-Bundle Library: `../3-product-bundle-library/index.md`
