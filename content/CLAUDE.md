# Dan's Second Brain — Global Rules

## What this vault is

A personal LLM Wiki following the Karpathy pattern. Sources are ingested once into `raw/`,
compiled by Claude into structured wiki pages in `wiki/`. Knowledge compounds over time.

## Vault structure

```
vault/
├── CLAUDE.md          ← you are here (global rules)
├── _index.md          ← wiki homepage
├── .quartzignore      ← excludes raw/ folders from publishing
└── career-coach/      ← AI Career Coach (journal, esperienze, crescita professionale)
```

Each project folder has its own `CLAUDE.md` with domain-specific rules.
Defer to the project-level `CLAUDE.md` for all project-specific decisions.

## Global rules

- `raw/` folders contain immutable source material — never modify files after ingestion
- `wiki/` folders contain compiled knowledge — always maintained by Claude
- Use YAML frontmatter for structured data in all wiki pages
- All wiki pages must have at least: `title`, `updated`, `tags`
- Cross-link aggressively between wiki pages using `[[wikilinks]]`
- Flag contradictions explicitly rather than silently overwriting
- Language: Italian for personal content, English for technical content

## Shared rules (to be expanded over time)

_No shared rules yet. They will emerge and be added here._
