# Contracts

## Discovery Contract

- this repo should expose agent-readable context through `docs/agent` and `docs/context`
- repo-local manifest is authoritative when present

## Documentation Contract

- `docs/index.md` and `mkdocs.yml` define the current commercial-model section map
- repo-local pages under `docs/` are the source of truth for eMob commercial model documentation
- repo-local commercial model content should outrank broader framework inference when local material exists

## Cleanup Contract

- MCP provisioning should be idempotent
- existing repo-authored docs should be preserved unless overwrite is explicitly requested
- template normalization work and MCP provisioning work should avoid clobbering in-flight repo edits
