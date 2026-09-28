# 🧠 Dan's Second Brain

Personal LLM Wiki following the [Karpathy pattern](https://gist.github.com/karpathy) — maintained by Claude.

Sources are ingested once into `raw/`, compiled by Claude into structured wiki pages in `wiki/`. Knowledge compounds over time.

## Current projects

| Folder | Project | Status |
|---|---|---|
| `career-coach/` | AI Career Coach — journal, experiences, growth | 🟢 Active |
| `goals/` | Goals & habits — whole-life tracking (H2 2026) | 🟢 Active |
| `football/` | Allenatore calcio — Ardor Bollate Juniores | 🟢 Active |
| `study/` | Professional Learning Plan & knowledge base | 🟢 Active |

## Structure

```
vault/
├── CLAUDE.md          # global rules for Claude (incl. git workflow)
├── README.md
├── _index.md          # wiki homepage
├── .quartzignore      # excludes raw/ folders from publishing
└── <sub-wiki>/        # career-coach/, goals/, football/, study/
    ├── CLAUDE.md      # domain-specific rules (extend the global ones)
    ├── raw/           # immutable source material (not published)
    └── wiki/          # compiled knowledge (published via Quartz)
```

## Stack

| Tool | Role |
|---|---|
| Claude Code (VPS) | Writes and maintains the vault, commits and pushes |
| GitHub (this repo) | Source of truth |
| Obsidian (Remote SSH) | Optional: manual editing of raw files |
| Quartz | Published wiki (GitHub Pages; football site on Coolify) |
| n8n (VPS) | Nightly automation: frontmatter → HTML dashboard |

## How to use

The vault lives on the VPS and is maintained by Claude Code there — just send dumps in chat.
When a raw file needs to be written by hand, open the vault in Obsidian via Remote SSH.

## Sync

Git is managed by Claude Code, not by the Obsidian Git plugin (which is at most a bonus):

- **Wiki changes** (compiled content, instructions) → commit + push automatically, as the last step of the operation.
- **Raw-only changes** → always committed; pushed on request (or with the next automatic push).

Full rules: see "Git workflow" in [`CLAUDE.md`](CLAUDE.md).

## Related

- [📖 Architecture & Roadmap (Notion)](https://app.notion.com/p/37891dd7ceba81c88c32db99c90e5529)
- [🌐 Wiki (Quartz)](https://dan-the-dev.github.io/dan-the-dev-second-brain-wiki)
