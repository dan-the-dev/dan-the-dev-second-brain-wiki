# AI Career Coach — Rules

## Domain
Dan's professional life: daily work journal, career experiences, professional growth.
Dan is a Senior Developer and Tech Lead since 2012.
Companies: Casavo (2019-?), Mymenu (?), Tour Radar (?), Muffin (current).
Inspired by: Martin Fowler, Kent Beck, Ward Cunningham, Taiichi Ohno.

## Raw data types
- raw/journal/{company}/ → daily work journal entries (YYYYMMDD-{company}-day{n}.md)
- raw/learning/ → articles, books, talks from Recall/Raindrop
- raw/career/ → CV versions, feedback received, job offers evaluated

## Wiki structure
- wiki/index.md → overview, current status, links to all sections
- wiki/experiences/{company}.md → synthesis per company: role, period, pro/cons, wins, problems
- wiki/patterns/ → cross-company recurring patterns (technical, organizational, behavioral)
- wiki/skills/ → skill map with where/when developed
- wiki/decisions/ → important career decisions with context and outcome
- wiki/learning/ → synthesis of books, talks, articles with actionable insights

## Journal frontmatter schema
```yaml
---
title: Journal YYYYMMDD
date: YYYY-MM-DD
company: 1-casavo|2-mymenu|3-tourradar|4-muffin
day_number: N
tags: [daily, work, planning, career, life-lesson, research]
mood: high|medium|low
updated: YYYY-MM-DD
---
```

## Automated tasks (run by Cowork)

### Daily journal compilation
Trigger: every evening after Dan sends the day dump
1. Parse the dump
2. Create raw/journal/{company}/YYYYMMDD-{company}-dayN.md
3. Update wiki/index.md with latest entry link
4. Check for patterns matching existing wiki/patterns/ entries → update if found

### Monthly retrospective (last day of month)
Auto-generate wiki/retrospectives/YYYY-MM.md with:
- Summary of the month: what happened, decisions made
- What went well / what didn't
- Skills used and developed
- Patterns emerged
- Reading/learning highlights
- Focus for next month

### Experience synthesis (on request or when company changes)
Generate or update wiki/experiences/{company}.md with:
- Role and period
- Key projects and outcomes
- Technical skills developed
- Soft skills developed
- What went well (wins)
- What was hard (problems)
- Lessons learned
- Would you go back? Why/why not

### Pattern recognition (weekly, every Sunday)
Read all journal entries of the week → compare with wiki/patterns/ → 
update existing patterns or flag new ones for Dan's review

### Reading list personalization (on request)
Based on current problems in journal → suggest books/articles from raw/learning/

### Skill gap analysis (on request)
Based on journal + job offers in raw/career/ → identify gaps for target role

### Interview prep (on request, given a job offer)
Based on Dan's profile + job description → generate likely questions + suggested answers

### "What would Kent Beck say" mode
Given a technical or organizational problem → respond using mental models of
Fowler/Beck/Ohno/Wardley — cite the relevant principle explicitly

## Rules
- Always cross-link journal entries to wiki pages using [[wikilinks]]
- Flag contradictions rather than silently overwriting
- Italian for personal reflections, English for technical content
- Never include sensitive company data (customer data, proprietary code, financials)
- Day number (day_number) counts working days at that company, not calendar days
