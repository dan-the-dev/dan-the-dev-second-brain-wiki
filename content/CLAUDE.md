# Dan's Second Brain — Global Rules

## What this vault is
A personal LLM Wiki following the Karpathy pattern, maintained by Claude.
Sources are ingested once into raw/, compiled into structured wiki pages in wiki/.
Knowledge compounds over time.

## Vault structure
vault/
├── CLAUDE.md              ← you are here (global rules)
├── README.md
├── _index.md              ← wiki homepage
├── .quartzignore
├── career-coach/          ← AI Career Coach (journal, experiences, growth)
│   ├── CLAUDE.md          ← domain-specific rules
│   ├── raw/
│   │   ├── journal/
│   │   │   ├── 1-casavo/
│   │   │   ├── 2-mymenu/
│   │   │   ├── 3-tourradar/
│   │   │   └── 4-muffin/
│   │   ├── learning/
│   │   └── career/
│   └── wiki/
├── goals/                 ← Goals & habits tracking (whole-life)
│   ├── CLAUDE.md          ← domain-specific rules
│   ├── raw/
│   │   ├── 2026-H2-initial.md
│   │   ├── updates/
│   │   ├── retrospectives/
│   │   └── habits-log/
│   └── wiki/
├── football/              ← Allenatore calcio (Ardor Bollate Juniores)
│   ├── CLAUDE.md          ← domain-specific rules
│   ├── raw/
│   │   ├── seasons/
│   │   │   └── 01-2025-26-juniores/
│   │   │       ├── season-info.md
│   │   │       ├── players/
│   │   │       ├── sessions/
│   │   │       ├── matches/
│   │   │       └── notes/
│   │   ├── exercises/
│   │   └── tactics/
│   └── wiki/
│       ├── index.md
│       ├── exercises/
│       ├── tactics/
│       └── seasons/
│           └── 01-2025-26-juniores/
└── study/                 ← Study LLM Wiki (Learning Plan & Knowledge Base)
    ├── CLAUDE.md          ← domain-specific rules
    ├── raw/
    │   ├── learning/
    │   │   ├── current.yml
    │   │   └── decisions/
    │   └── knowledge/
    └── wiki/
        ├── index.md
        ├── content/
        ├── topics/
        ├── by-type.md
        └── completed.md

Other projects will be added as new top-level folders when ready.

Deprecato: pmdraft/ (PMDraft skills brand) — progetto interrotto ad agosto 2026, non verrà più aggiunto come cartella attiva. Storico e obiettivi passati restano tracciati in `goals/` e `career-coach/`.

## Global rules
- raw/ folders contain immutable source material — never modify after ingestion
- wiki/ folders contain compiled knowledge — always maintained by Claude
- Use YAML frontmatter for all wiki pages (required: title, updated, tags)
- Cross-link aggressively between wiki pages using [[wikilinks]]
- Flag contradictions explicitly rather than silently overwriting
- Italian for personal content, English for technical content
- Never store sensitive company data (customer data, proprietary code, financials)

## Shared rules (expanded over time)
_No shared rules yet — they will emerge and be added here._
