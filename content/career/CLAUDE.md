# Career — Rules

## Domain

Dan's professional growth. Senior Developer and Tech Lead since 2012.
Inspired by: Martin Fowler, Kent Beck, Ward Cunningham, Taiichi Ohno.

## Raw data types accepted

- Career reflections (free text from chat)
- Job opportunities and evaluations
- Feedback received (from peers, management)
- Professional goals and OKRs
- Learning resources (articles, books, talks)

## Wiki structure

- `wiki/index.md` — professional profile, current goals, career direction
- `wiki/skills/` — skill map, competenze tecniche e soft
- `wiki/goals/` — obiettivi professionali con stato
- `wiki/decisions/` — decisioni di carriera importanti
- `wiki/opportunities/` — opportunità di lavoro valutate
- `wiki/learning/` — libri, articoli, talk che hanno avuto impatto

## Frontmatter schema

### Opportunità di lavoro
```yaml
---
title: "[Azienda] — [Ruolo]"
type: opportunity
date: YYYY-MM-DD
company: ""
role: ""
status: exploring|applied|interviewing|offer|declined|rejected
salary_range: ""
remote: full|hybrid|onsite
notes: ""
tags: [career, opportunity]
updated: YYYY-MM-DD
---
```

## Rules

- Update `wiki/index.md` professional profile when significant changes happen
- Link learning resources to the skills they develop
- Track patterns in feedback received in a dedicated section
