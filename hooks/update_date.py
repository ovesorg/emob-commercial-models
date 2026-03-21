"""
MkDocs hook to automatically update editorial date on build.
This repo keeps build-critical hooks local so deployment stays self-contained.
"""
from datetime import datetime


def on_config(config):
    """Update oves_revision_date to current date on every build."""
    current_date = datetime.now().strftime("%Y-%m-%d")
    config["extra"]["oves_revision_date"] = current_date
    return config
