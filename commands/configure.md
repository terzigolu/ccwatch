---
description: Edit claudewatch plugin config (advanced — for the interactive wizard use /claudewatch)
allowed-tools: Read, Write
---

# Configure claudewatch (advanced)

Edit `~/.claude/plugins/claudewatch/config.json` directly.

For the recommended interactive flow that asks the user which fields they want visible, run `/claudewatch` instead.

Rules:
- If the file does not exist, create it.
- Keep valid JSON formatting.
- Preserve unknown fields already present.
- If the user did not specify exact changes, ask what they want to change before editing.

Default shape:

```json
{
  "rows": [["5h", "today", "history"], ["7d", "session", "total"]],
  "compactRows": [["5h", "today"], ["7d", "session"]],
  "compactBreakpoint": 113,
  "columns": null
}
```

Available cell types: `5h`, `7d`, `today`, `history`, `session`, `total`, `model`, `ctxbar`.
