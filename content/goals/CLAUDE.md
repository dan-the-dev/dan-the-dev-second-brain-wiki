# Goals & Habits — Rules

## Domain
Dan's personal and professional goals and habits tracking.
Covers all life areas: professional, health, personal, financial, relationships.
NOT limited to career — this is a whole-life section.

## Raw data types
- raw/2026-H2-initial.md → goal list as defined at the start of H2 2026 (immutable)
- raw/updates/ → periodic updates, one file per month: YYYY-MM-update.md
- raw/retrospectives/ → monthly goal retrospectives: YYYY-MM-retro.md
- raw/habits-log/ → weekly habits check-in: YYYY-WNN-habits.md

## Wiki structure
- wiki/index.md → all periods, links to each semester file
- wiki/2026-H2.md → live status of H2 2026 goals (updated monthly)
- wiki/habits.md → all active habits with status and linked goal

## Goal status values
- 🟢 On track
- 🟡 At risk
- 🔴 Off track
- ✅ Completed
- ⏸️ Paused
- ❌ Abandoned

## Frontmatter schema

### Goal update file (raw/updates/YYYY-MM-update.md)
---
title: Goals Update YYYY-MM
date: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [goals, update]
---

### Retrospective file (raw/retrospectives/YYYY-MM-retro.md)
---
title: Goals Retrospective YYYY-MM
date: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [goals, retrospective]
---

### Habits check-in (raw/habits-log/YYYY-WNN-habits.md)
---
title: Habits Check-in YYYY WNN
date: YYYY-MM-DD
week: NN
updated: YYYY-MM-DD
tags: [habits, weekly]
---

## Automated tasks (run by Cowork)

### Weekly habits check-in (ogni domenica)
Leggi i journal della settimana in career-coach/raw/journal/4-muffin/
Crea raw/habits-log/YYYY-WNN-habits.md con:
- Per ogni abitudine attiva: mantenuta / non mantenuta / parziale
- Note su cosa ha aiutato o ostacolato
- Aggiorna wiki/habits.md con lo streak corrente

### Monthly goal update (ogni fine mese)
Leggi raw/habits-log/ dell'ultimo mese + journal della settimana
Crea raw/updates/YYYY-MM-update.md con stato di ogni goal
Aggiorna wiki/2026-H2.md con semafori aggiornati e note

### Monthly retrospective (ultima domenica del mese)
Leggi raw/updates/YYYY-MM-update.md appena creato
Crea raw/retrospectives/YYYY-MM-retro.md con:
- Cosa sta funzionando
- Cosa non sta funzionando
- Cosa cambiare nelle abitudini
- Focus del mese prossimo

## Rules
- wiki/2026-H2.md è un documento vivo — aggiornato ogni mese
- raw/2026-H2-initial.md è immutabile — non modificarlo mai
- Le abitudini in wiki/habits.md hanno sempre il goal collegato
- Italiano per tutto il contenuto
- NON usare git — sync automatico tramite plugin Obsidian Git
