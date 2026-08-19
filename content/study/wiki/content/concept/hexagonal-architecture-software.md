---
title: "Hexagonal architecture (software)"
type: concept
topics: []
raw_source: raw/knowledge/concept/hexagonal-architecture-software/content.md
updated: 2026-08-19
---

# Hexagonal architecture (software)

**Pattern architetturale (Ports & Adapters)**

L'architettura esagonale, ideata da Alistair Cockburn e nota anche come pattern "Ports & Adapters", propone di isolare la logica di dominio di un'applicazione da tutto ciò che è esterno — database, framework web, interfacce utente, servizi di terze parti — collegandola al mondo esterno esclusivamente tramite interfacce ben definite (le "porte") e implementazioni specifiche di quelle interfacce (gli "adattatori"). L'obiettivo è rendere il dominio testabile e indipendente da qualsiasi dettaglio infrastrutturale, così che tecnologie e framework possano essere sostituiti senza toccare la logica di business. È un pattern strettamente imparentato con il Domain-Driven Design.

## Indice dei contenuti collegati in questo archivio

- [[../podcast/ep-78-hexagonal-architecture-con-alessandro|Ep. 78 — Hexagonal Architecture con Alessandro]] (argomento centrale)

## Fonte

- Appunti grezzi originali: `raw/knowledge/concept/hexagonal-architecture-software/content.md`
- Wikipedia: [Hexagonal architecture (software)](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))
