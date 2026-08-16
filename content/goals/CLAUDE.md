# Goals & Habits — Rules

## Domain
Dan's personal and professional goals and habits tracking.
Covers all life areas: professional, health, personal, financial, relationships.
NOT limited to career — this is a whole-life section.

## Raw data types
- raw/2026-H2-initial.md → goal list as defined at the start of H2 2026 (immutable)
- raw/2026-H2-redefinition-YYYY-MM-DD.md → snapshot completo in caso di ridefinizione major dei goal a metà periodo (immutabile, come l'initial ma con data). Non sostituisce il file initial come archivio storico, ma diventa il riferimento per il tracking attivo da quella data in poi.
- raw/updates/ → periodic updates, one file per month: YYYY-MM-update.md
- raw/retrospectives/ → monthly goal retrospectives: YYYY-MM-retro.md
- raw/habits-log/ → weekly habits check-in: YYYY-WNN-habits.md

## Wiki structure
- wiki/index.md → all periods, links to each semester file
- wiki/2026-H2.md → live status of H2 2026 goals (updated monthly, o subito dopo una ridefinizione major)
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

### Goal redefinition (raw/2026-H2-redefinition-YYYY-MM-DD.md)
---
title: Goals H2 2026 — Redefinition (data)
date: YYYY-MM-DD
status: active
updated: YYYY-MM-DD
tags: [goals, 2026, H2, redefinition]
supersedes_tracking: raw/2026-H2-initial.md
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

### Goal redefinition (on demand, quando Dan lo chiede esplicitamente)
Quando Dan chiede un aggiornamento completo/ridefinizione dei goal (non un normale update mensile):
- Crea raw/2026-H2-redefinition-YYYY-MM-DD.md (immutabile) con i nuovi goal, il perché, le abitudini suggerite e una tabella dei goal archiviati/mappati dal set precedente
- Aggiorna wiki/2026-H2.md con la nuova tabella di stato live e una nota che rimanda alla ridefinizione
- Aggiorna wiki/habits.md con le nuove abitudini collegate ai nuovi goal (streak azzerati, nota su abitudini archiviate)
- NON modificare mai raw/2026-H2-initial.md né le ridefinizioni precedenti — restano storico immutabile

## Rules
- wiki/2026-H2.md è un documento vivo — aggiornato ogni mese o dopo una ridefinizione
- raw/2026-H2-initial.md e ogni raw/2026-H2-redefinition-*.md sono immutabili — non modificarli mai una volta creati
- Le abitudini in wiki/habits.md hanno sempre il goal collegato
- Italiano per tutto il contenuto
- NON usare git — sync automatico tramite plugin Obsidian Git
