"""
MkDocs hook to automatically update editorial date on build.
Imports from mkdocs-oves-template package.
"""

from __future__ import annotations

from datetime import datetime, timezone


def on_config(config, **kwargs):
    extra = config.get("extra") or {}
    revision_date = extra.get("oves_revision_date")

    if revision_date in (None, "", "auto", "AUTO"):
        extra["oves_revision_date"] = datetime.now(timezone.utc).date().isoformat()
        config["extra"] = extra

    return config
