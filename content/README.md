# 🧠 Dan's Second Brain

Personal LLM Wiki following the [Karpathy pattern](https://gist.github.com/karpathy) — maintained by Claude.

Sources are ingested once into `raw/`, compiled by Claude into structured wiki pages in `wiki/`. Knowledge compounds over time.

## Current projects

| Folder | Project | Status |
|---|---|---|
| `career-coach/` | AI Career Coach — journal, experiences, growth | 🟢 Active |
| `football/` | Allenatore calcio — Ardor Juniores | 🔜 Coming soon |

## Structure
vault/
├── CLAUDE.md          # global rules for Claude
├── _index.md          # wiki homepage
├── .quartzignore      # excludes raw/ folders from publishing
└── career-coach/      # first active project
├── CLAUDE.md      # domain-specific rules
├── raw/           # immutable source material (not published)
└── wiki/          # compiled knowledge (published via Quartz)

## Stack

| Tool | Role |
|---|---|
| Obsidian + Git plugin | Local editor + GitHub sync |
| GitHub (this repo) | Source of truth |
| Quartz → GitHub Pages | Published wiki |
| n8n (VPS) | Nightly automation: frontmatter → HTML dashboard |
| Claude Code | Writes and maintains the vault |

## How to use

Open `~/Documents/personal/dan-the-dev-second-brain` as an Obsidian vault.
Claude handles all writes — just send dumps in chat.

## Related

- [📖 Architecture & Roadmap (Notion)](https://app.notion.com/p/37891dd7ceba81c88c32db99c90e5529)
- [🌐 Wiki (Quartz)](https://m2bxysbjd3dhi3aist0hzooa.31.70.70.46.sslip.io)
