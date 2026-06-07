# Journal — Rules

## Domain

Daily journal of personal and professional life. Dan sends free-text dumps during the day.
Claude compiles them into structured wiki entries.

## Raw data types accepted

- Daily dumps (free text from chat — work, personal, decisions, ideas)
- Retrospective notes
- Goals and intentions

## Wiki structure

- `wiki/index.md` — overview, link a entries recenti, pattern emersi
- `wiki/daily/` — una pagina per giorno
- `wiki/decisions/` — decisioni importanti estratte dai dump
- `wiki/patterns/` — pattern e insight emersi nel tempo

## Frontmatter schema

### Entry giornaliera
```yaml
---
title: Journal YYYY-MM-DD
type: daily
date: YYYY-MM-DD
mood: high|medium|low
topics: [work, personal, muffin, cinoradar, calcio, eleven-cult]
decisions: []
tags: [journal]
updated: YYYY-MM-DD
---
```

## Rules

- Extract decisions explicitly and add them to `wiki/decisions/`
- Note recurring patterns and update `wiki/patterns/` when a pattern appears 3+ times
- Keep entries concise — synthesize, don't transcribe
- Link to relevant pages in other vault sections when relevant
