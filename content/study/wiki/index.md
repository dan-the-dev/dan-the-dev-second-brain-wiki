---
title: Study LLM Wiki
type: index
updated: 2026-08-22
---

# Study LLM Wiki

Panoramica del Learning Plan di Daniele: cosa vuole imparare, attraverso quali contenuti, e cosa ha già studiato.

## Stato attuale

Il piano è ora popolato: **6 Topic attivi** in `raw/learning/current.yml`, ciascuno con un Learning Item principe, più **8 aree di backlog** con contenuti non prioritari non ancora promossi a Topic — vedi la vista compilata [[plan/learning-plan|Learning Plan]]. Nessuno Study Period è stato ancora definito. Vedi la Decision History per il contesto di creazione del progetto: [[../raw/learning/decisions/2026-08-19|Decision — creazione Study LLM Wiki]].

È stato inoltre importato e **compilato integralmente** lo storico della knowledge base precedente (Notion, poi Recall): **186 contenuti catturati** in `raw/knowledge/`, di cui **75 con un concetto di studio** (book, article, video, conference, podcast, course) sono ora disponibili come pagine wiki leggibili in `wiki/content/`, organizzate anche per argomento in **34 pagine Topic** (`wiki/topics/`). Questi contenuti restano in gran parte un archivio di conoscenza pregresso, distinto dal piano: alcuni titoli del piano/backlog risultano già presenti in archivio (vedi le note in [[plan/learning-plan|Learning Plan]]), ma il collegamento formale Topic-del-piano ↔ contenuto-già-studiato non è ancora sistematico.

Dal 2026-08-22, l'archivio cresce anche per aggiunta manuale tramite il flusso "Online articles study draft": 2 articoli (con le rispettive 2 pagine persona per gli autori, non presenti nell'import originale) sono stati catturati, compilati e integrati nelle pagine Topic pertinenti (`ai`, `software-development`, `technical-excellence`, `leadership`, `communication`, `tech-lead`), portando il totale a **77 contenuti con concetto di studio**. Questa distinzione fra import storico Recall e aggiunte manuali successive resta visibile in [[by-type|By Type]]; [[knowledge-archive|Archivio Recall importato]] documenta solo l'import originale del 2026-08-19 e non viene aggiornato con le aggiunte successive.

## Viste disponibili

- [[plan/learning-plan|Learning Plan]] — Topic attivi, Learning Item, backlog e Study Period del piano, compilati da `raw/learning/current.yml`
- [[by-type|By Type]] — tutti i 77 contenuti organizzati per tipo (book, article, video, conference, podcast, course), con i topic associati
- [[completed|Completati]] — elenco alfabetico completo dei 77 contenuti compilati (senza timeline cronologica per la maggior parte: le date di studio non erano recuperabili dall'export originale)
- [[recent-changes|Ultime Modifiche]] — cosa è stato toccato nell'ultima sessione di lavoro (si sovrascrive a ogni sessione, non è uno storico cumulativo)
- [[knowledge-archive|Archivio Recall importato]] — inventario di lavoro dell'intero import (186 voci, incluse le 111 entità di riferimento senza concetto di studio)
- Topic (`wiki/topics/<id>.md`) — 34 pagine, una per ciascun argomento emerso dai contenuti (es. [[topics/agile-software-development|Agile Software Development]], [[topics/tdd|TDD]], [[topics/tech-lead|Tech Lead]])

## Struttura

- **Learning Plan** → `raw/learning/current.yml` (source of truth) — vedi la vista compilata [[plan/learning-plan|Learning Plan]]
- **Decision History** → `raw/learning/decisions/` — perché il piano è organizzato così — vedi [[decisions/index|Decisioni]]
- **Knowledge Base** → `raw/knowledge/` — cosa è stato effettivamente studiato o catturato — vedi [[knowledge-archive|Archivio Recall importato]]
- **Wiki compilata** → `wiki/plan/`, `wiki/content/`, `wiki/topics/`, `wiki/by-type.md`, `wiki/completed.md` — viste derivate, mai fonte di verità

## Prossimi passi

Il piano continua a crescere ed evolvere tramite richieste naturali, ad esempio:
- "Per i prossimi mesi voglio concentrarmi su Continuous Integration"
- "Aggiungi questo libro al piano"
- "Questo libro non voglio leggerlo integralmente, trasformalo in book summary"
- "Di questi contenuti importati da Recall, questi fanno parte del piano su Topic X"

`wiki/timeline.md` verrà creato solo quando esisteranno Study Period concreti in `current.yml` — non prima, per non inventare una cronologia che i dati non supportano.
