---
title: "How LennyRPG was built in 8 hours"
type: article
topics: ["ai-development", "technology"]
status: done
raw_source: raw/knowledge/article/how-lennyrpg-was-built-in-8-hours-by-ben-shih-in/content.md
updated: 2026-08-19
---

# How LennyRPG was built in 8 hours

**Autore: Ben Shih**

Racconto in prima persona di come, dopo che [[../person/lenny-rachitsky|Lenny Rachitsky]] ha reso pubbliche le trascrizioni di oltre 300 episodi del suo podcast, l'autore ne abbia tratto ispirazione per costruire [[../software/lennyrpg|LennyRPG]], un piccolo gioco RPG in cui il giocatore incontra gli ospiti del podcast e viene messo alla prova da loro — realizzato in circa 8 ore usando un workflow assistito da AI.

Il workflow seguito è: definire l'idea centrale, scrivere un PRD, costruire un proof of concept, aggiungere funzionalità, rifinire e pubblicare. Gli strumenti usati includono [[../software/miro-video-software|Miro]] per la progettazione, e Claude Code, Codex e Composer per la scrittura del codice — inizialmente con la libreria RPG-JS, poi abbandonata in favore di [[../software/phaser-game-framework|Phaser]] per i suoi limiti. Claude Code è stato usato anche per generare avatar RPG e musica di sottofondo, automatizzando compiti che altrimenti avrebbero richiesto molto tempo, oltre che per un sanity-check della logica di gioco e l'identificazione di bug potenziali. La classifica del gioco è stata realizzata con Supabase e l'MCP di Claude Code, che ha gestito automaticamente struttura del database e connessione, velocizzando il processo.

## Vedi anche

- [[../person/lenny-rachitsky|Lenny Rachitsky]]
- [[../software/lennyrpg|LennyRPG]]
- [[../software/claude-language-model|Claude]]
- [[../software/phaser-game-framework|Phaser]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/how-lennyrpg-was-built-in-8-hours-by-ben-shih-in/content.md`
- [freedium-mirror.cfd](https://freedium-mirror.cfd/https://medium.com/design-bootcamp/how-lennyrpg-was-built-in-8-hours-1c34f601cc43)
