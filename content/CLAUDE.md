# Dan's Second Brain — Global Rules

## What this vault is
A personal LLM Wiki following the Karpathy pattern, maintained by Claude.
Sources are ingested once into raw/, compiled into structured wiki pages in wiki/.
Knowledge compounds over time.

## Vault structure
vault/
├── CLAUDE.md              ← you are here (global rules)
├── README.md
├── _index.md              ← wiki homepage
├── .quartzignore
├── career-coach/          ← AI Career Coach (journal, experiences, growth)
│   ├── CLAUDE.md          ← domain-specific rules
│   ├── raw/
│   │   ├── journal/
│   │   │   ├── 1-casavo/
│   │   │   ├── 2-mymenu/
│   │   │   ├── 3-tourradar/
│   │   │   └── 4-muffin/
│   │   ├── learning/
│   │   └── career/
│   └── wiki/
├── goals/                 ← Goals & habits tracking (whole-life)
│   ├── CLAUDE.md          ← domain-specific rules
│   ├── raw/
│   │   ├── 2026-H2-initial.md
│   │   ├── updates/
│   │   ├── retrospectives/
│   │   └── habits-log/
│   └── wiki/
├── football/              ← Allenatore calcio (Ardor Bollate Juniores)
│   ├── CLAUDE.md          ← domain-specific rules
│   ├── raw/
│   │   ├── seasons/
│   │   │   └── 01-2025-26-juniores/
│   │   │       ├── season-info.md
│   │   │       ├── players/
│   │   │       ├── sessions/
│   │   │       ├── matches/
│   │   │       └── notes/
│   │   ├── exercises/
│   │   └── tactics/
│   └── wiki/
│       ├── index.md
│       ├── exercises/
│       ├── tactics/
│       └── seasons/
│           └── 01-2025-26-juniores/
└── study/                 ← Study LLM Wiki (Learning Plan & Knowledge Base)
    ├── CLAUDE.md          ← domain-specific rules
    ├── raw/
    │   ├── learning/
    │   │   ├── current.yml
    │   │   └── decisions/
    │   └── knowledge/
    └── wiki/
        ├── index.md
        ├── content/
        ├── topics/
        ├── by-type.md
        └── completed.md

Other projects will be added as new top-level folders when ready.

Deprecato: pmdraft/ (PMDraft skills brand) — progetto interrotto ad agosto 2026, non verrà più aggiunto come cartella attiva. Storico e obiettivi passati restano tracciati in `goals/` e `career-coach/`.

## Global rules
- raw/ folders contain immutable source material — never modify after ingestion
- wiki/ folders contain compiled knowledge — always maintained by Claude
- Use YAML frontmatter for all wiki pages (required: title, updated, tags)
- Cross-link aggressively between wiki pages using [[wikilinks]]
- Flag contradictions explicitly rather than silently overwriting
- Italian for personal content, English for technical content
- Never store sensitive company data (customer data, proprietary code, financials)
- NON usare git direttamente e NON fare chiamate API esterne (GitHub, ecc.) per leggere/scrivere contenuti del vault — tutti i file si leggono e scrivono DIRETTAMENTE sul filesystem locale. Il sync su GitHub avviene automaticamente tramite il plugin Git di Obsidian, in background, senza intervento diretto di Claude sui comandi git.

## Come navigare tra i sub-wiki
Ogni sotto-cartella di primo livello (`career-coach/`, `goals/`, `football/`, `study/`, ...) è un sub-wiki autonomo con il proprio `CLAUDE.md`, che **estende e specializza** queste regole globali — non le sostituisce. Quando lavori dentro un sub-wiki:
1. Leggi prima questo file (regole globali, sempre valide).
2. Leggi il `CLAUDE.md` del sub-wiki specifico per: dominio, tipi di raw data, schema frontmatter, modalità operative e regole aggiuntive.
3. In caso di conflitto tra una regola globale e una regola di sub-wiki, la regola di sub-wiki vince solo se è una specializzazione coerente (es. frontmatter più dettagliato); se è una vera contraddizione, segnalala esplicitamente a Daniele invece di risolverla in autonomia.
4. I sub-wiki non si linkano tra loro salvo eccezioni esplicite (es. `goals/` che legge i journal di `career-coach/` per le retrospettive) — ogni dominio resta isolato per default.

## Come aggiungere un nuovo sub-wiki
Quando nasce un nuovo progetto/dominio da tracciare nel vault:
1. Crea una nuova cartella di primo livello (es. `nome-progetto/`) con la struttura standard `raw/` + `wiki/`.
2. Scrivi un `CLAUDE.md` dedicato dentro la cartella, seguendo lo stile degli altri (Domain, Filesystem, Raw data types, Wiki structure, Frontmatter schema, Modalità operative, Rules). Non duplicare le regole già coperte da questo file globale — richiamale, non riscriverle.
3. Aggiorna la sezione "Vault structure" qui sopra con il nuovo albero di cartelle.
4. Aggiungi una riga nella sezione "Riferimento ai CLAUDE.md dei progetti" qui sotto.
5. Se il progetto sostituisce o assorbe un progetto esistente, marca il vecchio come deprecato nella sezione "Vault structure" (vedi nota su `pmdraft/`) invece di cancellarne la memoria storica.

## Riferimento ai CLAUDE.md dei progetti
- [[career-coach/CLAUDE.md]] — AI Career Coach: diario di lavoro, esperienze professionali, crescita di carriera (Muffin e aziende precedenti).
- [[goals/CLAUDE.md]] — Goals & Habits: obiettivi e abitudini whole-life (non solo carriera), tracking semestrale H2 2026.
- [[football/CLAUDE.md]] — Allenatore Calcio: gestione stagione Ardor Bollate Juniores (allenamenti, partite, giocatori, tattiche, esercizi).
- [[study/CLAUDE.md]] — Study LLM Wiki: Professional Learning Plan (Topic, Learning Item, Knowledge, Decision History).

## Shared rules (expanded over time)
_No shared rules yet — they will emerge and be added here._
