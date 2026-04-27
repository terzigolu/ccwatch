---
description: Diagnose ccwatch plugin setup and statusline wiring
allowed-tools: Read, Bash
---

# Diagnose ccwatch

Check:
- whether `~/.claude/settings.json` exists
- whether `statusLine` is present
- whether the configured command resolves to a `ccwatch` plugin install
- whether a plugin install exists under `~/.claude/plugins/cache/*/ccwatch/*`
- whether `~/.claude/plugins/ccwatch/config.json` exists and is valid JSON

Report:
- current status
- anything missing or mismatched
- the exact fix needed if setup is broken
