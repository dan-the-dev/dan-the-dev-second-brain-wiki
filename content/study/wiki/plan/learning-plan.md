---
title: "Learning Plan"
type: plan
updated: 2026-08-20
---

# Learning Plan

Vista leggibile del piano di studio di Daniele, compilata a partire da `raw/learning/current.yml` (source of truth — questa pagina non lo sostituisce e non va mai modificata a mano come se lo fosse). Per la vista per argomento già studiato si veda [[../index|Study LLM Wiki]] e [[../topics/agile-software-development|Topics]]; per l'archivio grezzo importato da Recall si veda [[../knowledge-archive|Archivio Recall importato]].

## Panoramica

Il piano è organizzato per **Topic**, ciascuno con un contenuto principe (tendenzialmente un solo libro) da studiare. I contenuti non prioritari sono tenuti separati in un **Backlog**, raggruppato anch'esso per argomento.

- **6 Topic attivi** nel piano, ciascuno con **1 Learning Item** — tutti di tipo `book`, tutti in stato `planned` (nessuno ancora iniziato).
- **8 aree di Backlog**, per un totale di **12 Learning Item** in coda, non ancora promossi a Topic del piano — mix di `book` e `book_summary`.
- **Nessuno Study Period definito**: né a livello di piano generale né per singolo Topic. Daniele non ha ancora indicato un periodo concreto (es. "per i prossimi tre mesi voglio concentrarmi su...") su nessuno di questi argomenti.
- **Nessun campo priorità** presente nel piano attuale: l'ordinamento tra i Topic e tra gli item di backlog non riflette una priorità esplicita, solo l'ordine in cui compaiono in `current.yml`.

## Topic del piano

### People & Software Management

> Riprendere e approfondire produttività, persone, team e condizioni organizzative del lavoro software.

| Tipo | Titolo | Autori | Stato |
|---|---|---|---|
| book | Peopleware | Tom DeMarco, Tim Lister | planned |

**Study Period:** nessuno definito.

> [!note] Già presente nella Knowledge Base
> Questo libro risulta già letto e compilato in archivio come contenuto studiato: [[../content/book/peopleware-productive-projects-and-teams|Peopleware: Productive Projects and Teams]] (stato `done` nella knowledge base). Nel piano l'item ha invece stato `planned`: è un disallineamento tra le due fonti che vale la pena verificare con Daniele — potrebbe trattarsi di una rilettura pianificata intenzionalmente, oppure di uno stato del piano da aggiornare.

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
