---
title: Study LLM Wiki
type: index
updated: 2026-08-19
---

# Study LLM Wiki

Panoramica del Learning Plan di Daniele: cosa vuole imparare, attraverso quali contenuti, e cosa ha già studiato.

## Stato attuale

Il piano vero e proprio non contiene ancora Topic o Learning Item: `raw/learning/current.yml` resta vuoto lato piano — vedi la Decision History per il contesto: [[decisions/2026-08-19|Decision — creazione Study LLM Wiki]].

È stato invece importato e **compilato integralmente** lo storico della knowledge base precedente (Notion, poi Recall): **186 contenuti catturati** in `raw/knowledge/`, di cui **75 con un concetto di studio** (book, article, video, conference, podcast, course) sono ora disponibili come pagine wiki leggibili in `wiki/content/`, organizzate anche per argomento in **34 pagine Topic** (`wiki/topics/`). Nessuno di questi contenuti è ancora formalmente agganciato al piano (`current.yml`): restano un archivio di conoscenza pregresso, navigabile ma distinto dal piano futuro.

## Viste disponibili

- [[by-type|By Type]] — tutti i 75 contenuti organizzati per tipo (book, article, video, conference, podcast, course), con i topic associati
- [[completed|Completati]] — elenco alfabetico completo dei 75 contenuti compilati (senza timeline cronologica: le date di studio non erano recuperabili dall'export originale)
- [[knowledge-archive|Archivio Recall importato]] — inventario di lavoro dell'intero import (186 voci, incluse le 111 entità di riferimento senza concetto di studio)
- Topic (`wiki/topics/<id>.md`) — 34 pagine, una per ciascun argomento emerso dai contenuti (es. [[topics/agile-software-development|Agile Software Development]], [[topics/tdd|TDD]], [[topics/tech-lead|Tech Lead]])

## Struttura

- **Learning Plan** → `raw/learning/current.yml` (source of truth) — non ancora popolato
- **Decision History** → `raw/learning/decisions/` — perché il piano è organizzato così — vedi [[decisions/index|Decisioni]]
- **Knowledge Base** → `raw/knowledge/` — cosa è stato effettivamente studiato o catturato — vedi [[knowledge-archive|Archivio Recall importato]]
- **Wiki compilata** → `wiki/content/`, `wiki/topics/`, `wiki/by-type.md`, `wiki/completed.md` — viste derivate, mai fonte di verità

## Prossimi passi

Aggiungere i primi Topic e Learning Item a `raw/learning/current.yml`, ad esempio tramite richieste naturali:
- "Per i prossimi mesi voglio concentrarmi su Continuous Integration"
- "Aggiungi questo libro al piano"
- "Questo libro non voglio leggerlo integralmente, trasformalo in book summary"
- "Di questi contenuti importati da Recall, questi fanno parte del piano su Topic X"

`wiki/timeline.md` verrà creato solo quando esisteranno Study Period concreti in `current.yml` — non prima, per non inventare una cronologia che i dati non supportano.
