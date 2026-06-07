# 🧠 Dan's Second Brain

Personal LLM Wiki following the [Karpathy pattern](https://gist.github.com/karpathy) — maintained by Claude.

Sources are ingested once into `raw/`, compiled by Claude into structured wiki pages in `wiki/`. Knowledge compounds over time.

## Structure

```
vault/
├── CLAUDE.md          # global rules for Claude
├── _index.md          # wiki homepage
├── .quartzignore      # excludes raw/ from publishing
├── football/          # Allenatore calcio — Ardor Juniores
├── journal/           # Daily journal — personal & work
├── career/            # Professional growth & opportunities
└── kb-tech/           # Technical knowledge base (ex Recall)
```

Each project folder contains:
- `CLAUDE.md` — domain-specific rules for Claude
- `raw/` — immutable source material (not published)
- `wiki/` — compiled knowledge pages (published via Quartz)

## Stack

| Tool | Role |
|---|---|
| Obsidian + Git plugin | Local editor + sync |
| GitHub (this repo) | Source of truth |
| Quartz → GitHub Pages | Published wiki |
| n8n (VPS) | Nightly automation: frontmatter → HTML dashboard |
| Claude Code | Writes and maintains the vault |

## How to use

Open `~/Documents/dan-the-dev-second-brain` as an Obsidian vault.
Claude handles all writes — just send dumps in chat.

## Related

- [📖 Architecture & Roadmap (Notion)](https://app.notion.com/p/37891dd7ceba81c88c32db99c90e5529)
