# Football — Allenatore Calcio Rules

## Domain
Daniele è vice-allenatore e membro del consiglio dell'Ardor Bollate Juniores.
Questo vault gestisce: allenamenti, partite, giocatori, tattiche, esercizi.

## Filesystem
Tutti i file vengono letti e scritti DIRETTAMENTE sul filesystem locale.
NON usare git — sync automatico tramite plugin Obsidian Git.
NON fare chiamate API esterne.

## Raw data types

### Stagioni — raw/seasons/{N}-{YYYY-YY}-{categoria}/
Ogni stagione ha una cartella numerata progressivamente:
- season-info.md → informazioni base stagione (immutabile dopo compilazione)
- players/ → rosa stagione: uno file per giocatore {nome-cognome}.md
- sessions/ → dump allenamenti: {YYYYMMDD}-session.md
- matches/ → dump partite: {YYYYMMDD}-vs-{avversario}.md
- notes/ → note varie: {YYYYMMDD}-{slug}.md

### Esercizi — raw/exercises/
Libreria esercizi trasversale a tutte le stagioni.
Un file per esercizio: {slug-esercizio}.md

### Tattiche — raw/tactics/
Schemi tattici trasversali.
Un file per schema: {slug-schema}.md

## Wiki structure
- wiki/index.md → overview, link a stagioni, esercizi, tattiche
- wiki/seasons/{stagione}/index.md → summary stagione
- wiki/seasons/{stagione}/info.md → info base compilate
- wiki/seasons/{stagione}/players.md → rosa con stats aggregate
- wiki/seasons/{stagione}/sessions.md → storico allenamenti
- wiki/seasons/{stagione}/matches.md → storico partite
- wiki/seasons/{stagione}/stats.md → classifiche e statistiche
- wiki/seasons/{stagione}/exercises-report.md → analisi esercizi usati
- wiki/seasons/{stagione}/formations.md → moduli usati
- wiki/seasons/{stagione}/fitness.md → andamento presenze
- wiki/seasons/{stagione}/attendance.md → storico presenze allenamenti per giocatore
- wiki/seasons/{stagione}/injuries.md → storico infortuni
- wiki/seasons/{stagione}/player-profiles.md → caratteristiche/attributi giocatori
- wiki/seasons/{stagione}/objectives.md → obiettivi stagione e status
- wiki/seasons/{stagione}/lessons.md → retrospettiva stagione
- wiki/exercises/index.md → libreria esercizi compilata con score e frequenza
- wiki/tactics/index.md → schemi tattici documentati

## Frontmatter schema

### Session dump
---
title: Session YYYY-MM-DD
date: YYYY-MM-DD
type: training
season: 01-2025-26
presenti: []
assenti: []
durata_minuti: 90
score: 1-5
esercizi:
  - nome: ""
    categoria: riscaldamento|possesso|tattica|fisico|calci-piazzati|partitella
    durata_minuti: 0
    score: 1-5
    note: ""
note_generali: ""
updated: YYYY-MM-DD
---

### Match dump
---
title: Match YYYY-MM-DD vs [Avversario]
date: YYYY-MM-DD
type: match
season: 01-2025-26
avversario: ""
casa_trasferta: casa|trasferta
risultato: "X-X"
convocati: []
titolari: []
sostituzioni:
  - giocatore_uscito: ""
    giocatore_entrato: ""
    minuto: 0
marcatori:
  - giocatore: ""
    minuto: 0
    tipo: gol|rigore|autogol
assist:
  - giocatore: ""
    minuto: 0
note: ""
updated: YYYY-MM-DD
---

### Player file
---
title: "{Nome Cognome}"
name: ""
surname: ""
season: 01-2025-26
ruolo: portiere|difensore|centrocampista|attaccante
anno_nascita: 0
note: ""
updated: YYYY-MM-DD
---

### Exercise file
---
title: ""
slug: ""
categoria: riscaldamento|possesso|tattica|fisico|calci-piazzati|partitella
descrizione: ""
video_url: ""   # link YouTube o Instagram, opzionale
durata_consigliata_minuti: 0
numero_giocatori: ""
materiale: []
score_medio: 0
volte_usato: 0
stagioni_usato: []
note: ""
updated: YYYY-MM-DD
---

## Modalità operative

### 📋 DUMP ALLENAMENTO
Trigger: Daniele invia dump vocale o testo di un allenamento

1. Identifica la stagione corrente dalla cartella più recente in raw/seasons/
2. Crea raw/seasons/{stagione}/sessions/{YYYYMMDD}-session.md
   con frontmatter completo estratto dal dump; se il file esiste già, usa le informazioni fornite per aggiornare il contenuto
3. Per ogni esercizio citato:
   - Controlla se esiste in raw/exercises/
   - Se non esiste: crea il file raw/exercises/{slug}.md
   - Se esiste: aggiorna volte_usato e score_medio
4. Aggiorna wiki/seasons/{stagione}/sessions.md aggiungendo la sessione
5. Aggiorna wiki/seasons/{stagione}/stats.md (presenze)
6. Aggiorna wiki/exercises/index.md
7. Rispondi con conferma: data, presenti (N giocatori), esercizi salvati

### ⚽ DUMP PARTITA
Trigger: Daniele invia dump vocale o testo di una partita

1. Crea raw/seasons/{stagione}/matches/{YYYYMMDD}-vs-{avversario}.md
   con frontmatter completo estratto dal dump; se il file esiste già, usa le informazioni fornite per aggiornare il contenuto
2. Aggiorna wiki/seasons/{stagione}/matches.md
3. Aggiorna wiki/seasons/{stagione}/stats.md (gol, assist, minuti)
4. Rispondi con conferma: risultato, marcatori, note chiave

### 👥 AGGIORNA ROSA
Trigger: Daniele fornisce lista giocatori o aggiunge/rimuove un giocatore

1. Crea o aggiorna i file in raw/seasons/{stagione}/players/
2. Aggiorna wiki/seasons/{stagione}/players.md

### 📊 COMPILA WIKI STAGIONE (su richiesta)
Trigger: "compila la wiki della stagione" o fine stagione

Leggi tutti i raw della stagione e genera/aggiorna:
- wiki/seasons/{stagione}/index.md
- wiki/seasons/{stagione}/players.md (stats aggregate)
- wiki/seasons/{stagione}/stats.md (classifiche complete)
- wiki/seasons/{stagione}/exercises-report.md
- wiki/seasons/{stagione}/formations.md
- wiki/seasons/{stagione}/fitness.md
- wiki/seasons/{stagione}/attendance.md
- wiki/seasons/{stagione}/injuries.md
- wiki/seasons/{stagione}/player-profiles.md
- wiki/seasons/{stagione}/objectives.md
- wiki/seasons/{stagione}/lessons.md (solo su richiesta esplicita)

### ❓ DOMANDE E QUERY
Trigger: Daniele fa domande tipo "chi ha fatto più allenamenti?",
"qual è il nostro modulo migliore?", "suggerisci la formazione per sabato"

Leggi i wiki compilati e rispondi direttamente senza riscrivere file.

## Rules
- NON usare git — sync automatico tramite Obsidian Git
- NON modificare mai i file raw dopo la loro creazione
- Stagione corrente = cartella con numero più alto in raw/seasons/
- I nomi dei giocatori vanno sempre normalizzati (Nome Cognome, prima lettera maiuscola)
- Italiano per tutto il contenuto
- Non chiedere conferma per: creare file raw, aggiornare wiki
- Chiedi conferma solo per: eliminare file, cambiare stagione corrente
