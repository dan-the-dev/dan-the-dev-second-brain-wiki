# Study LLM Wiki — Rules

## Domain
Il Professional Learning Plan di Daniele: cosa vuole imparare, attraverso quali contenuti, quando (se deciso), e cosa ha effettivamente studiato.
Dan è Senior Developer e Tech Lead dal 2012.
Non è una reading list: è un piano di apprendimento organizzato per argomenti (Topic), alimentato da contenuti eterogenei (Learning Item).

## Filesystem
Tutti i file vengono letti e scritti DIRETTAMENTE sul filesystem locale.
Cartella base del progetto: `study/`
NON usare git, NON fare chiamate API GitHub.
Il sync su GitHub avviene automaticamente tramite il plugin Git di Obsidian (stesso vault di career-coach).

## Modello concettuale
Il sistema distingue quattro concetti, tenuti separati ma collegati:

```
Topic            = cosa voglio imparare
Learning Item    = attraverso quale contenuto lo studio
Study Period     = quando decido di concentrarmi su quel topic (opzionale, per ora)
Knowledge        = cosa ho effettivamente studiato e cosa ne ho ricavato
Decision         = perché il piano è organizzato/cambiato in questo modo
```

### Topic
Un'area o argomento da imparare (es. Continuous Integration, Technical Leadership, AI Engineering, Product Management, Software Architecture). Un topic non è legato a un singolo contenuto.

### Learning Item
Una risorsa attraverso cui si studia un topic. Tipi ammessi (tassonomia estendibile):
`book`, `book_summary`, `article`, `video`, `podcast`, `course`, `project`, `other`

- `book` → si vuole leggere/studiare il libro integralmente
- `book_summary` → si vogliono studiare i concetti principali tramite un summary, senza leggere il libro per intero. È comunque un elemento a pieno titolo del piano, non un contenuto di serie B. `type: book_summary` + `status: planned` significa "questo libro fa parte del piano, lo studierò tramite summary" — non che sia già stato completato.
- Gli altri tipi rappresentano direttamente la modalità di studio.

Un Learning Item può appartenere a **uno o più Topic**. Non imporre nel modello dati una gerarchia rigida Topic → Content: usare relazioni esplicite (`item.topics: [...]`). Questo evita di duplicare un contenuto rilevante per più aree (es. un libro utile sia per Continuous Integration sia per DevOps). La UI/wiki può comunque rappresentare i dati in modo gerarchico.

### Study Period
Predisposto nel modello (`study_periods: []`) ma NON popolato finché Daniele non definisce concretamente un periodo di focus (es. "settembre → novembre su Continuous Integration"). Non inventare mai date o periodi.

### Knowledge (raw/knowledge/)
Vedi sezione dedicata sotto. Distinta dal piano: il piano descrive cosa si vuole studiare, la knowledge base cosa si è effettivamente studiato e imparato.

### Decision
Vedi Decision History sotto. Descrive il perché, non il come-è-adesso (quello è `current.yml`).

## Struttura raw data

```
raw/
├── learning/
│   ├── current.yml              ← source of truth del Learning Plan
│   └── decisions/
│       └── YYYY-MM-DD.md
│
└── knowledge/
    ├── books/<id>/content.md
    ├── articles/<id>/content.md
    ├── videos/<id>/content.md
    ├── podcasts/<id>/content.md
    └── courses/<id>/content.md
```

La cartella fisica sotto `raw/knowledge/` è solo organizzativa. Ogni contenuto ha un `id` stabile che collega il file di knowledge al relativo item in `current.yml` — non serve che la sotto-cartella corrisponda esattamente al `type` dell'item.

## Learning Plan — schema `raw/learning/current.yml`

```yaml
plan:
  name: "Professional Learning Plan"
  year: 2026
  updated_at: "YYYY-MM-DD"

topics:
  - id: continuous-integration
    name: "Continuous Integration"
    description: "..."

items:
  - id: accelerate
    type: book
    title: "Accelerate"
    author: "Nicole Forsgren, Jez Humble, Gene Kim"
    topics:
      - continuous-integration
      - devops
    status: planned
    priority: high

study_periods: []
```

Questa struttura è un riferimento, non uno schema rigido: non aggiungere campi che non servono. Mantenere lo YAML semplice — niente database mascherato.

### Stati Learning Item
`backlog`, `planned`, `next`, `in_progress`, `done`, `paused`, `cancelled`

### Timeline
Se esistono Study Period, la timeline si costruisce su di essi. Se non esistono, non inventare una timeline: un Learning Item può stare nel piano anche senza data (questo distingue "cosa voglio imparare" da "quando lo studierò").

## Decision History — `raw/learning/decisions/YYYY-MM-DD.md`

```markdown
# Study Plan Decision — YYYY-MM-DD

## Context
Perché stiamo costruendo o modificando il piano.

## Decision
Quale decisione è stata presa.

## Reasoning
Le motivazioni principali.

## Changes
- Added: ...
- Reorganized: ...
- Changed to book_summary: ...

## Alternatives considered
Le alternative considerate e perché non sono state scelte.
```

`current.yml` descrive **come è** il piano adesso. Le decisioni descrivono **perché** è così. Non confondere le due cose, non riscrivere le decisioni passate.

## Knowledge — schema `raw/knowledge/<tipo>/<id>/content.md`

Il frontmatter è comune a tutti i tipi; il corpo Markdown può (e deve) variare per tipo di contenuto — non forzare la stessa struttura ovunque.

```markdown
---
id: accelerate
type: book
title: "Accelerate"
author:
  - "Nicole Forsgren"
  - "Jez Humble"
  - "Gene Kim"
status: studied
topics:
  - continuous-integration
  - devops
source:
  type: book
  url: ""
study:
  method: full_reading
  started_at: "YYYY-MM-DD"
  completed_at: "YYYY-MM-DD"
---

# Accelerate

## Summary
...

## Key Concepts
...

## Key Insights
...

## My Notes
...

## My Takeaways
...

## Connections
- [[continuous-integration]]

## Sources
- ...
```

Esempi di sezioni per tipo (adattare, non è uno schema fisso):
- **book**: Summary, Key Concepts, My Notes, My Takeaways, Connections
- **book_summary**: come sopra ma più sintetico; `study.method: ai_summary`
- **video**: Summary, Key Ideas, Timestamp / Sections, My Notes, Takeaways
- **article**: Summary, Main Arguments, Evidence, My Notes, Takeaways

Vedi `raw/knowledge/TEMPLATE.md` per l'esempio completo e `raw/knowledge/README.md` per la convenzione di cartelle.

Un Learning Item può esistere nel piano prima che esista il relativo file di knowledge (significa: pianificato, non ancora studiato). Quando Daniele studia il contenuto, si crea/aggiorna il file corrispondente e si collegano le due rappresentazioni tramite `id`.

## Wiki structure (compilata da raw/)

```
wiki/
├── index.md            ← overview, stato del piano, link alle sezioni
├── topics/<id>.md       ← vista per Topic: i suoi Learning Item + knowledge collegata
├── plan.md              ← vista completa del Learning Plan
├── timeline.md          ← quando esistono Study Period
├── next.md              ← prossimo Learning Item prioritario
├── by-type.md           ← vista per tipo di contenuto
├── completed.md         ← contenuti effettivamente completati
└── decisions/
    └── index.md          ← indice della Decision History
```

La wiki è una **rappresentazione** del piano, non una seconda source of truth: non va mai modificata a mano come se fosse dato grezzo. Va rigenerata dai dati raw quando il piano cambia in modo significativo. Le pagine vuote/non ancora rilevanti (es. `timeline.md` finché non esistono Study Period) non vanno create finché non c'è contenuto reale da mostrare.

## Regole fondamentali

1. **Non inventare**: libri, contenuti, topic, autori, date, priorità, motivazioni, Study Period. Se un'informazione non è nota, ometterla o segnalarla come non definita.
2. **Preservare le decisioni esistenti**: non riscrivere inutilmente tutto `current.yml`, non cambiare arbitrariamente l'ordine, non eliminare contenuti, non trasformare un `book` in `book_summary` senza motivo esplicito, non introdurre nuovi topic senza ragione.
3. **Topic e Learning Item sono distinti**: Topic = cosa voglio imparare, Learning Item = attraverso cosa lo imparo. Un Learning Item può appartenere a più Topic nel modello dati, anche se la wiki lo mostra in modo gerarchico.
4. **Il piano non è una reading list**: può contenere libri, book summary, articoli, video, podcast, corsi, progetti, altro. L'obiettivo è pianificare l'apprendimento, non l'acquisto/lettura di libri.

## Workflow conversazionale

Quando viene chiesta una modifica al piano:
1. Leggere `raw/learning/current.yml`
2. Leggere le decisioni recenti in `raw/learning/decisions/` quando pertinenti
3. Consultare `raw/knowledge/` quando serve capire cosa è già stato studiato
4. Comprendere la richiesta
5. Proporre la modifica quando è significativa (nuovo topic, riorganizzazione, cambio tipo) e attendere conferma
6. Dopo l'approvazione, modificare `current.yml`
7. Registrare una entry in `raw/learning/decisions/` quando la modifica è strategicamente significativa
8. Rigenerare le pagine wiki compilate interessate

## Filosofia

Il progetto deve restare semplice: niente LMS, niente project management tool.
Knowledge + Learning Plan + AI reasoning + compilazione automatica.
Markdown/YAML + Git (sync automatico Obsidian), AI come interfaccia conversazionale, frontend compilato come vista, nessun database se non necessario. La complessità sta nell'elaborazione, non nella gestione manuale dei dati.

## Rules
- TUTTI i file raw vanno scritti sul filesystem locale — MAI chiamate API GitHub
- NON usare git — il sync è automatico tramite plugin Obsidian Git
- MAI modificare le entry passate di Decision History
- `current.yml` è l'UNICA source of truth del piano — la wiki è sempre derivata
- Non inventare mai contenuti, topic, autori, date, priorità, Study Period (vedi Regole fondamentali)
- `book_summary` è un Learning Item a pieno titolo, non uno stato speciale di `book`
- Un Learning Item può avere più Topic; non forzare gerarchie rigide nei dati
- Italiano per i contenuti, inglese per frontmatter/tag/id tecnici
- Non chiedere conferma per: leggere/esplorare i file raw, piccoli aggiornamenti di stato esplicitamente richiesti
- Chiedi conferma per: riorganizzazioni ampie del piano, cambio `book` → `book_summary`, definizione di Study Period, cancellazione di topic/item
- Registra una Decision History solo per cambiamenti strategicamente significativi, non per ogni piccola modifica
