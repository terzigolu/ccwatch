---
description: Configure claudewatch as the active Claude Code statusline
allowed-tools: Read, Write
---

# Set Up claudewatch

Update `~/.claude/settings.json` so `statusLine` is exactly:

```json
{
  "type": "command",
  "command": "sh -lc 'PLUGIN_DIR=$(find \"$HOME/.claude/plugins/cache\" -mindepth 3 -maxdepth 3 -type d -path \"*/claudewatch/*\" 2>/dev/null | sort | tail -n 1); [ -n \"$PLUGIN_DIR\" ] || exit 0; exec node \"$PLUGIN_DIR/dist/cli.js\"'",
  "padding": 0
}
```

Rules:
- Preserve unrelated settings.
- If `~/.claude/settings.json` already exists, create a timestamped backup first.
- If the file is missing, create it with valid JSON.
- After saving, tell the user that `claudewatch` is now configured as the statusline and that they can run `/claudewatch` to choose which fields are visible.
