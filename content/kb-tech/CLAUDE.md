# KB Tecnica — Rules

## Domain

Technical knowledge base. Replaces Recall. Covers software engineering,
architecture, XP, Lean, DevOps, Agile, AI/ML, tools and languages.

## Raw data types accepted

- Articles (URLs or exported markdown from Recall)
- Book notes and summaries
- Talk/conference notes
- Code patterns and snippets
- Tool evaluations

## Wiki structure

- `wiki/index.md` — map of knowledge, link alle sezioni principali
- `wiki/patterns/` — design patterns, architectural patterns
- `wiki/practices/` — XP, TDD, CI/CD, refactoring, pair programming
- `wiki/tools/` — tool valuations and how-to
- `wiki/concepts/` — theoretical concepts (DDD, CQRS, event sourcing, ecc.)
- `wiki/ai/` — AI/ML, LLM, agents, Claude-specific knowledge
- `wiki/books/` — sintesi di libri letti

## Frontmatter schema

### Concetto / Pattern
```yaml
---
title: ""
type: concept|pattern|practice|tool|book
source: ""
tags: [xp, tdd, agile, architecture, ai, ...]
related: [[other-concept]]
updated: YYYY-MM-DD
---
```

## Rules

- Always cross-link related concepts aggressively
- When ingesting a new source, check existing pages for contradictions or updates
- Prefer synthesis over transcription — extract the actionable insight
- Tag with the technology/paradigm for easy filtering
- English language preferred for technical content
