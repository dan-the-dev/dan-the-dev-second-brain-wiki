---
title: "Learning Plan"
type: plan
updated: 2026-09-18
---

# Learning Plan

Vista leggibile del piano di studio di Daniele, compilata a partire da `raw/learning/current.yml` (source of truth — questa pagina non lo sostituisce e non va mai modificata a mano come se lo fosse). Per la vista per argomento già studiato si veda [[../index|Study LLM Wiki]] e [[../topics/agile-software-development|Topics]]; per l'archivio grezzo importato da Recall si veda [[../knowledge-archive|Archivio Recall importato]].

## Panoramica

Il piano è organizzato per **Topic**, ciascuno con un contenuto principe (tendenzialmente un solo libro) da studiare. I contenuti non prioritari sono tenuti separati in un **Backlog**, raggruppato anch'esso per argomento.

- **6 Topic attivi** nel piano: **1 completato** (People & Software Management, con *Peopleware* concluso il 2026-09-18) e **5 ancora da iniziare**, ciascuno con **1 Learning Item** di tipo `book` in stato `planned`.
- **8 aree di Backlog**, per un totale di **12 Learning Item** in coda, non ancora promossi a Topic del piano — mix di `book` e `book_summary`.
- **Nessuno Study Period definito**: né a livello di piano generale né per singolo Topic. Daniele non ha ancora indicato un periodo concreto (es. "per i prossimi tre mesi voglio concentrarmi su...") su nessuno di questi argomenti.
- **Nessun campo priorità** presente nel piano attuale: l'ordinamento tra i Topic e tra gli item di backlog non riflette una priorità esplicita, solo l'ordine in cui compaiono in `current.yml`.

## Cosa leggere dopo Peopleware

Con *Peopleware* completato, il Topic "People & Software Management" non ha più un Learning Item attivo in coda: nessun nuovo libro è stato indicato per questo Topic, quindi resta senza contenuto principe finché Daniele non ne aggiunge uno esplicitamente. Le opzioni concrete per il prossimo libro, tutte già presenti nel piano, sono:

| Opzione | Topic | Tipo | Titolo | Autori | Note |
|---|---|---|---|---|---|
| 1 | Infrastructure as Code | book | Infrastructure as Code | Kief Morris | Legato al contesto AWS di Levels |
| 2 | AI Engineering | book | AI Engineering | Chip Huyen | Archivio già ricco su AI in generale, vedi [[../topics/ai-development\|AI Development]] e [[../topics/ai\|AI]] |
| 3 | Product Development & Product Leadership | book | Empowered | Marty Cagan | Vedi anche il topic già compilato [[../topics/product-development\|Product Development]] |
| 4 | Business & Finance | book | Finance for Managers | Harvard Business Essentials | Unico Topic del piano su basi finanziarie |
| 5 | UX Research & Product Discovery | book | Just Enough Research | Erika Hall | Unico Topic del piano su ricerca utente |

Oltre a queste 5, il **Backlog** (dettagliato più sotto) contiene altri 12 Learning Item non ancora promossi a Topic, alcuni collegati a contenuti già studiati in archivio (es. *The DevOps Handbook* già letto per intero, *Team Topologies* già coperto via articolo, *The Phoenix Project* già letto con *The Unicorn Project* come suo seguito in backlog): sono un'opzione legittima se un tema di backlog interessa più di uno dei 5 Topic sopra. Nessuna di queste opzioni ha una priorità esplicita assegnata: la scelta resta a Daniele — basta indicarla in una richiesta naturale (es. "il prossimo libro è Empowered") perché lo stato dell'item passi da `planned` a `in_progress` e riparta il ciclo di compilazione sessione per sessione.

## Topic del piano

### People & Software Management

> Riprendere e approfondire produttività, persone, team e condizioni organizzative del lavoro software.

| Tipo | Titolo | Autori | Stato |
|---|---|---|---|
| book | Peopleware | Tom DeMarco, Tim Lister | done |

**Study Period:** nessuno definito.

> [!note] Aggiornamento 2026-09-18 — libro completato
> *Peopleware* è stato letto per intero in 15 sessioni, dal 2026-08-23 al 2026-09-18: la pagina compilata [[../content/book/peopleware-productive-projects-and-teams|Peopleware: Productive Projects and Teams]] copre ora tutte e sei le Parti del libro (Capitoli 1-39), con `status: done`. Nessun nuovo Learning Item è stato ancora indicato per questo Topic: resta senza contenuto principe attivo finché Daniele non ne sceglie uno — vedi [[#Cosa leggere dopo Peopleware|Cosa leggere dopo Peopleware]] più sopra.
>
> Nota storica: il disallineamento segnalato il 2026-08-20 era un errore di importazione, non una rilettura intenzionale — la pagina compilata `done` di allora era stata generata dagli appunti raw minimi importati da Recall (solo un riferimento alla pagina Wikipedia del libro), senza che il libro fosse mai stato effettivamente letto. Daniele ha iniziato la lettura reale il 2026-08-23, correggendo lo stato del piano da `planned` a `in_progress`. Vedi `raw/learning/decisions/2026-08-23.md`.

### Infrastructure as Code

> Imparare a gestire l'infrastruttura come codice, con particolare attenzione al contesto AWS di Levels.

| Tipo | Titolo | Autori | Stato |
|---|---|---|---|
| book | Infrastructure as Code | Kief Morris | planned |
| other | AWS CloudFormation Best Practices | — | planned |

**Study Period:** nessuno definito.

Nessun contenuto collegato già presente nella knowledge base.

### AI Engineering

> Costruire una comprensione strutturata dell'AI generativa e di come utilizzare foundation models e LLM per costruire prodotti software.

| Tipo | Titolo | Autori | Stato |
|---|---|---|---|
| book | AI Engineering | Chip Huyen | planned |

**Study Period:** nessuno definito.

Nessun contenuto collegato già presente nella knowledge base (l'archivio contiene comunque contenuti già studiati sul tema AI in generale, vedi il topic [[../topics/ai-development|AI Development]] e [[../topics/ai|AI]] per il sapere già raccolto, non ancora collegato a questo Topic del piano).

### Product Development & Product Leadership

> Capire come costruire prodotti digitali efficaci, collegando product strategy, team, decisioni di prodotto e delivery.

| Tipo | Titolo | Autori | Stato |
|---|---|---|---|
| book | Empowered | Marty Cagan | planned |

**Study Period:** nessuno definito.

Nessun contenuto collegato già presente nella knowledge base per questo titolo specifico (l'archivio contiene comunque il topic già compilato [[../topics/product-development|Product Development]], costruito su altre fonti).

### Business & Finance

> Sviluppare le basi finanziarie necessarie per comprendere budget, costi, investimenti, ROI e valore generato dalla tecnologia.

| Tipo | Titolo | Autori | Stato |
|---|---|---|---|
| book | Finance for Managers | Harvard Business Essentials | planned |

**Study Period:** nessuno definito.

Nessun contenuto collegato già presente nella knowledge base.

### UX Research & Product Discovery

> Imparare a utilizzare la ricerca per comprendere utenti e problemi e prendere decisioni di prodotto migliori, senza spostarsi verso il mestiere specifico del designer.

| Tipo | Titolo | Autori | Stato |
|---|---|---|---|
| book | Just Enough Research | Erika Hall | planned |

**Study Period:** nessuno definito.

Nessun contenuto collegato già presente nella knowledge base.

## Backlog

Contenuti non prioritari, tenuti fuori dai Topic attivi del piano ma già identificati come interessanti. Raggruppati per area così come compaiono in `current.yml`; nessun campo stato o priorità è presente su questi item nella fonte, quindi non ne viene rappresentato nessuno.

### AI / LLM Foundations

| Tipo | Titolo | Autori |
|---|---|---|
| book | Hands-On Large Language Models | Jay Alammar, Maarten Grootendorst |

### DevOps & Software Delivery

| Tipo | Titolo | Autori |
|---|---|---|
| book_summary | The DevOps Handbook | Gene Kim, Jez Humble, Patrick Debois, John Willis |

> [!note] Già presente nella Knowledge Base
> Il libro integrale (non il solo summary) risulta già letto e compilato in archivio: [[../content/book/the-devops-handbook|The DevOps Handbook]] (stato `done`, lettura integrale). Il piano prevede qui una versione `book_summary`, quindi si tratta di un tipo di Learning Item diverso da quanto già studiato, non di una duplicazione.

### FinOps & Technology Economics

| Tipo | Titolo | Autori |
|---|---|---|
| book_summary | FinOps Framework | — |
| book_summary | FinOps for Engineers | — |

### Legacy Software

| Tipo | Titolo | Autori |
|---|---|---|
| book_summary | Working Effectively with Legacy Code | Michael Feathers |

### Management & Leadership

| Tipo | Titolo | Autori |
|---|---|---|
| book | High Output Management | Andy Grove |

### Product Development & Product Leadership

| Tipo | Titolo | Autori |
|---|---|---|
| book | Project to Product | Mik Kersten |
| book_summary | Team Topologies | Matthew Skelton, Manuel Pais |

> [!note] Già presente nella Knowledge Base
> I concetti di Team Topologies risultano già studiati e compilati in archivio tramite un'altra fonte: [[../content/article/tutto-quello-che-ho-imparato-su-team-topologies|Tutto quello che ho imparato su Team Topologies]] (stato `done`). Il piano prevede qui un `book_summary` dedicato del libro originale di Skelton e Pais, quindi resta un Learning Item distinto e legittimo, non una duplicazione.

### UX Research & Product Discovery

| Tipo | Titolo | Autori |
|---|---|---|
| book_summary | Don't Make Me Think | Steve Krug |

### DevOps / Software Engineering Fiction

| Tipo | Titolo | Autori |
|---|---|---|
| book | The Unicorn Project | Gene Kim |

> [!note] Contenuto collegato ma distinto
> Nell'archivio è già presente e studiato il romanzo "gemello" dello stesso autore: [[../content/book/the-phoenix-project-a-novel-about-it-devops-and|The Phoenix Project]] (stato `done`). The Unicorn Project ne è il seguito/riscrittura dal punto di vista di un altro personaggio — è un libro diverso, non ancora letto.

## Study Period

Nessuno Study Period è attualmente definito, né a livello di piano generale (`study_periods: []` nella root del file) né per singolo Topic (ogni Topic ha `study_periods: []`). Uno Study Period viene creato in `current.yml` solo quando Daniele indica esplicitamente un periodo concreto di focus (es. "per i prossimi tre mesi voglio concentrarmi su Continuous Integration") — finché non accade, questa sezione resta vuota per fedeltà alla fonte.

## Decisioni sulla struttura del piano

Le seguenti decisioni sono registrate direttamente in `current.yml` e motivano l'organizzazione attuale del piano:

- Il piano non è più una semplice lista di libri: è organizzato per Topic e Learning Item.
- Ogni Topic ha un contenuto principe, tendenzialmente un solo libro.
- I contenuti non prioritari sono mantenuti come backlog e raggruppati per Topic in ordine alfabetico.
- `book_summary` è un Learning Item a tutti gli effetti e indica lo studio dei concetti del libro tramite summary, senza leggerlo integralmente.
- Non sono stati definiti Study Period.
- Non sono stati aggiunti contenuti non emersi nella conversazione.

Per il contesto narrativo più ampio di come e perché è nato questo progetto, vedi [[../decisions/index|Decision History]].

## Fonte

- Source of truth: `raw/learning/current.yml` (non modificato da questa pagina — questa è solo la sua rappresentazione compilata)
