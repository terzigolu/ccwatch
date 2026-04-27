---
description: Interactive wizard — choose which claudewatch statusline fields are visible
allowed-tools: Read, Write, AskUserQuestion
---

# claudewatch — Visibility Wizard

Walk the user through choosing which statusline cells they want visible, then write the result to `~/.claude/plugins/claudewatch/config.json`.

## Available cells

| key | what it shows |
|-----|---------------|
| `5h` | 5h quota bar + countdown to reset |
| `7d` | 7d quota bar + countdown to reset |
| `today` | tokens spent + cost today (global and per-project) |
| `history` | this week + this month cost summary |
| `session` | session cost, burn rate `$/h`, projection, duration, ctx%, lines changed |
| `total` | all-time cost + per-project total + cwd path |
| `model` | ctx% + model name + clock |
| `ctxbar` | dedicated context-window progress bar (0%→100%) |

## Procedure

1. **Read the current config** at `~/.claude/plugins/claudewatch/config.json` (if it exists). Show the user the cells that are currently visible across `rows` and `compactRows` so they know the starting state.
2. **Ask which cells the user wants visible** using AskUserQuestion. Use a single multi-select question listing all 8 cells with short labels. Note that on narrow terminals the layout collapses, so picking 3–4 cells is usually enough.
3. **Ask layout shape** using AskUserQuestion with these options:
   - "two rows of two" → wide `[[a, b], [c, d]]`, compact `[[a, b], [c, d]]`
   - "two rows of three" → wide `[[a, b, c], [d, e, f]]`, compact `[[a, b], [c, d]]` (drop trailing two)
   - "single row" → wide `[[a, b, c, d]]`, compact stacks them one per row
   - "let me arrange manually" → ask the user to type the row layout as JSON
4. **Build `rows` and `compactRows`** from selections. Drop unselected cells. If user picks fewer cells than the layout shape needs, shrink the layout to fit.
5. **Preview** the resulting config in a fenced JSON block and ask the user to confirm with AskUserQuestion ("save", "edit again", "cancel").
6. **On save**:
   - Ensure directory `~/.claude/plugins/claudewatch/` exists.
   - If `config.json` exists, copy it to `config.json.bak.<timestamp>` first.
   - Write the new config with 2-space indentation and a trailing newline.
   - Preserve any keys we didn't touch (e.g. `compactBreakpoint`, `columns`).
   - Tell the user: "saved — the statusline will reflect changes on the next render. If it doesn't, restart Claude Code."

## Defaults

If the user can't decide, suggest this minimal layout (matches the maintainer's setup):

```json
{
  "rows": [["5h", "7d"], ["session", "ctxbar"]],
  "compactRows": [["5h", "7d"], ["session"], ["ctxbar"]]
}
```

It shows quota bars, the live session burn rate, and a dedicated context window bar — and hides today/history/total/model.

## Constraints

- Never write invalid JSON.
- Never silently overwrite `config.json` without backing it up first.
- If the user cancels at the confirmation step, do not write anything; just say "no changes made".
