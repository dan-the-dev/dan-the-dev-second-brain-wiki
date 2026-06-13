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
- wiki/seasons/{stagione}/lessons.md → retrospettiva stagione
- wiki/exercises/index.md → libreria esercizi compilata con score e frequenza
- wiki/tactics/index.md → schemi tattici documentati

## Database Schema (sync)

Quando compili la wiki di una stagione, genera ANCHE il file
football/sync/seasons/{stagione}/data.sql con DELETE + INSERT per le
tabelle COMPUTED relative a quella stagione, seguendo esattamente questo schema:

### Tabelle per-stagione (DELETE WHERE season_code = '{stagione}' poi INSERT)

seasons(code, name, category, competition, girone, delegazione,
        year_start, year_end, piazzamento)

players(id, season_code, nome, cognome, anno_nascita, ruolo, fuoriquota, note)
  - id = slug "nome-cognome" lowercase senza accenti

player_stats(player_id, season_code, presenze_allenamenti, totale_allenamenti,
              presenze_partite, minuti_giocati, gol, assist)

player_attributes(id, player_id, season_code, piede, ruolo_preferito,
                   ruoli_alternativi, punti_forza, aree_crescita, note)

player_injuries(id, player_id, season_code, data_inizio, data_fine, tipo, note)

sessions(id, season_code, data, durata_minuti, score_fisico,
         presenti_count, assenti_count, note)
  - id = "YYYYMMDD-session"

session_exercises(session_id, exercise_slug, categoria, durata_minuti, score, note)

session_attendance(session_id, player_id, presente)
  - una riga per ogni giocatore della rosa per ogni sessione

matches(id, season_code, data, avversario, competizione, fase,
        casa_trasferta, gol_fatti, gol_subiti, status, note)
  - id = "YYYYMMDD-vs-avversario-slug"
  - competizione = 'campionato' | 'coppa-lombardia'
  - fase = null per campionato, altrimenti girone|trentaduesimi|sedicesimi|ottavi|quarti|semifinale|finale
  - status = 'played' | 'scheduled'

match_scorers(match_id, player_id, minuto, tipo)
  - tipo = 'gol' | 'rigore' | 'autogol'

match_assists(match_id, player_id, minuto)

match_lineups(match_id, player_id, status, minuto_in, minuto_out, posizione)
  - status = 'titolare' | 'subentrato' | 'convocato'

match_cards(match_id, player_id, tipo, minuto)
  - tipo = 'giallo' | 'rosso'

formations(season_code, modulo, volte_usato, vittorie, pareggi, sconfitte,
           gol_fatti, gol_subiti)

opponents(season_code, nome, gol_fatti, gol_subiti, note)

season_objectives(season_code, obiettivo, status)
  - status = 'in corso' | 'raggiunto' | 'non raggiunto'

### Tabella trasversale (UPSERT, non DELETE)

exercises(slug, nome, categoria, descrizione, score_medio, volte_usato, stagioni_usato)
  - INSERT ... ON CONFLICT (slug) DO UPDATE
  - non filtrare per stagione, è condivisa tra tutte

### Views (non generate da Claude — già create in Supabase)

exercises_by_category — pubblica, statistiche esercizi per categoria squadra
formations_by_category — riservata (global_tactics_access), statistiche tattiche per categoria squadra
Queste si aggiornano automaticamente leggendo le tabelle COMPUTED, nessuna azione richiesta.

## Regole generazione SQL

- player_id = slug "nome-cognome" lowercase, spazi -> trattini, senza accenti
- Per tabelle con season_code: DELETE FROM tabella WHERE season_code = '{stagione}'
  poi INSERT — non toccare altre stagioni
- Per tabelle figlie (session_exercises, session_attendance, match_*):
  DELETE tramite join sugli id di sessions/matches della stagione, poi INSERT
- exercises: sempre UPSERT con ON CONFLICT (slug) DO UPDATE,
  aggiornando volte_usato e score_medio cumulativamente
- session_attendance: genera una riga per OGNI giocatore della rosa
  per OGNI sessione (presente = true/false), anche se non esplicitamente
  menzionato nel dump (default: presente se non specificato altrimenti)
- Genera SQL valido PostgreSQL, statements separati da newline
- Salva in football/sync/seasons/{stagione}/data.sql (sovrascrivi sempre il file)

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
