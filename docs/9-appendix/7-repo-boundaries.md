# 9.7 Repo Boundaries

This page defines how `emob-commercial-models` relates to the developer-facing
DIRAC repos.

## Primary Role

`emob-commercial-models` is the operations-facing and commercial-facing
repository in this three-repo set.

It should be the primary place to document:

- product-unit and bundle operating definitions
- pricing models and commercial controls
- SOPs for onboarding, fulfilment, and aftersales operations
- market rollout structure and business-facing process guidance
- cross-system commercial intent that must later be implemented in software

## What Belongs In Adjacent Repos

`dirac-odoo` should own:

- Odoo ERP semantics
- inventory, sales, CRM, people, and Odoo-side workflow behavior
- Odoo model-extension and synchronization design

`dirac-abs` should own:

- ABS asset, entitlement, and bundle execution semantics
- IoT/device workflows and field-service operational logic
- ABS-side service-state and asset-lifecycle behavior

## Handoff Rules

When a topic crosses repo boundaries, keep the split explicit:

- define the operating model here
- define Odoo implementation semantics in `dirac-odoo`
- define ABS implementation semantics in `dirac-abs`

This repo may reference implementation consequences, but it should not become
the primary source for detailed developer behavior inside Odoo or ABS.

## Shared Invariants

- `PA` is the correct current term for the portal application surface.
  `OVApp` is a legacy term and should only appear where historical reference is
  necessary.
- Product language in the commercial domain is sourced here, even when the same
  concepts are repeated in downstream technical repos for context-specific
  enforcement.
- Entitlement is authorized by Odoo business transactions and
  enforced/substantiated by ABS in physical and IoT operations.
- Pricing source of truth remains in Odoo.
- `service template` is reserved for commercial and operational packaging in
  this repo.
- `service model` is reserved for runtime ABS behavior in `dirac-abs`.
- Current asset anchoring should use Odoo stock and inventory constructs rather
  than a separate ABS-owned affiliation model.

## Conflict Resolution

When repos disagree, use this tie-break rule:

- functional intent conflicts are resolved by `emob-commercial-models`
- Odoo implementation conflicts are resolved by `dirac-odoo`
- ABS implementation conflicts are resolved by `dirac-abs`

## Short Form

- `emob-commercial-models` explains what the business and operations model is.
- `dirac-odoo` explains how the ERP side implements it.
- `dirac-abs` explains how the asset-service side implements it.
