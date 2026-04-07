# Contracts

## Discovery Contract

- this repo should expose agent-readable context through `docs/agent` and `docs/context`
- repo-local manifest is authoritative when present

## Documentation Contract

- `docs/index.md` and `mkdocs.yml` define the current commercial-model section map
- repo-local pages under `docs/` are the source of truth for eMob commercial model documentation
- repo-local commercial model content should outrank broader framework inference when local material exists
- this repo should describe commercial intent, rollout structure, pricing, and
  SOPs rather than becoming the primary source for detailed Odoo or ABS
  implementation semantics

## Cross-Repo Contract

- `emob-commercial-models` owns operations-facing and commercial-facing model
  definitions
- `dirac-odoo` owns Odoo and ERP implementation semantics
- `dirac-abs` owns ABS asset, entitlement, bundle, and IoT/device implementation
  semantics
- Use `PA` as the current portal-app language. Treat `OVApp` as legacy wording
  unless historical reference is required.
- Product language in the commercial domain is sourced here even when repeated
  in `dirac-odoo` or `dirac-abs` for context-specific enforcement.
- Treat Odoo as the source of truth for entitlement authorization and pricing.
  ABS enforces and substantiates entitlement in physical and IoT operations.
- Reserve `service template` for commercial packaging here and `service model`
  for runtime ABS behavior in `dirac-abs`.
- `docs/9-appendix/7-repo-boundaries.md` is the stable reader-facing summary of
  that split
- If repos disagree:
  - `emob-commercial-models` wins on functional intent
  - `dirac-odoo` wins on Odoo implementation
  - `dirac-abs` wins on ABS implementation

## Cleanup Contract

- MCP provisioning should be idempotent
- existing repo-authored docs should be preserved unless overwrite is explicitly requested
- template normalization work and MCP provisioning work should avoid clobbering in-flight repo edits
