# Football — Rules

## Domain

Ardor Bollate — Juniores. Dan is vice-allenatore and board member.

## Raw data types accepted

- Training session dumps (free text from chat)
- Match reports (free text from chat)
- Player roster (CSV or free text)
- Exercise descriptions

## Wiki structure

- `wiki/index.md` — overview stagione corrente, link a roster e calendario
- `wiki/players/` — una pagina per giocatore con profilo, presenze, note
- `wiki/sessions/` — una pagina per sessione di allenamento
- `wiki/matches/` — una pagina per partita
- `wiki/exercises/` — libreria esercizi

## Frontmatter schema

### Sessione di allenamento
```yaml
---
title: Allenamento YYYY-MM-DD
type: training
date: YYYY-MM-DD
presenti: [Nome Cognome, ...]
assenti: [Nome Cognome, ...]
durata_minuti: 90
esercizi: [nome-esercizio, ...]
note: ""
tags: [training, ardor]
updated: YYYY-MM-DD
---
```

### Partita
```yaml
---
title: Partita YYYY-MM-DD vs [Avversario]
type: match
date: YYYY-MM-DD
avversario: ""
risultato: "X-X"
titolari: [Nome Cognome, ...]
subentrati: [Nome Cognome, ...]
minuti: {Nome Cognome: 90, ...}
marcatori: [Nome Cognome, ...]
note: ""
tags: [match, ardor]
updated: YYYY-MM-DD
---
```

## Rules

- Always update `wiki/players/[nome].md` presenze count after each session/match
- Link every session and match to the players involved using `[[players/nome]]`
- Dashboard data is generated from frontmatter YAML by n8n — keep it consistent
