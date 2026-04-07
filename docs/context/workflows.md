# Workflows

## Edit Commercial Model Documentation

1. Update the relevant domain pages under `docs/`
2. Confirm the section structure and navigation in `mkdocs.yml`
3. Update `docs/9-appendix/7-repo-boundaries.md` if the change affects repo ownership between commercial, Odoo, and ABS documentation
4. Preview locally with `mkdocs serve` or `mkdocs-oves-krr`
5. Rebuild before wrap or publish

## Refresh MCP Repo Context

1. Run `python D:\github\workspace-mcp\scripts\mcp_provision.py emob-commercial-models`
2. Preserve existing MCP files unless an explicit reset is intended
3. Refine `docs/context/*` if the repo scope or section structure changed
4. Let the provisioner refresh the workspace registry

## Validate Repo Structure

1. Check that `mkdocs.yml` reflects the active content structure
2. Keep numbered section folders and nav labels aligned
3. Avoid stale references to sections or pages that no longer exist
