---
description: Diagnose claudewatch plugin setup and statusline wiring
allowed-tools: Read, Bash
---

# Diagnose claudewatch

Check:
- whether `~/.claude/settings.json` exists
- whether `statusLine` is present
- whether the configured command resolves to a `claudewatch` plugin install
- whether a plugin install exists under `~/.claude/plugins/cache/*/claudewatch/*`
- whether `~/.claude/plugins/claudewatch/config.json` exists and is valid JSON

Report:
- current status
- anything missing or mismatched
- the exact fix needed if setup is broken
