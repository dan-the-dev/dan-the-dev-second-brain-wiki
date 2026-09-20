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
- wiki/seasons/{stagione}/players/{nome-cognome}.md → pagina dedicata per ogni giocatore in rosa, con 4 sezioni fisse, in quest'ordine:
  1. **📅 Presenze agli allenamenti** — tabella (data, allenamento/amichevole, presente sì/no)
  2. **⚽ Presenze in partita** — tabella (data, avversario, casa/fuori casa, convocato, minuti, gol, assist, gialli, rossi — solo gare ufficiali, una riga per ogni gara compresa quella corrente)
  3. **🩹 Infortuni** — tabella (data inizio, data fine/"in corso", descrizione, ultimo aggiornamento)
  4. **📝 Note personali** — log datato (non tabellare) di note individuali raccolte nel tempo dai dump di allenamento e partita (rendimento, atteggiamento, aneddoti, episodi disciplinari, ecc.), voci in ordine cronologico inverso nel formato `**GG/MM/AAAA** — testo (fonte: [[../sessions/YYYYMMDD|allenamento]] o [[../matches/YYYYMMDD|partita]])`. Se non ci sono note specifiche per il giocatore, riportare una riga placeholder ("Nessuna nota personale specifica registrata finora.") invece di ometter la sezione — la sezione va sempre presente e va aggiornata a ogni DUMP ALLENAMENTO/PARTITA che menzioni il giocatore per nome.
  Ogni giocatore aggiunto a rosa a partire da un dump partita/allenamento (non da un esplicito aggiornamento rosa) va comunque creato con questa struttura e segnalato a Daniele per conferma di anno di nascita/ruolo.
- wiki/seasons/{stagione}/sessions.md → storico allenamenti
- wiki/seasons/{stagione}/matches.md → indice storico partite (calendario, competizioni, tabella con link alle pagine dedicate)
- wiki/seasons/{stagione}/matches/{YYYYMMDD}.md → pagina dedicata a ogni singola gara (amichevoli incluse), con 3 sezioni fisse, in quest'ordine:
  1. **Convocati/non convocati** e info di base (risultato, casa/trasferta, competizione)
  2. **⚽ Tabellino / Cronologia della partita** — tabella minuto-per-minuto in ordine cronologico di TUTTI gli eventi segnati nel dump: gol (con marcatore/assist), cartellini (gialli e rossi), sostituzioni, e altri eventi rilevanti esplicitamente notati (es. rigori sbagliati, momenti di controllo/calo). I minuti dei gol/cambi vanno presi dal frontmatter quando disponibile; per eventi solo narrati con minuto relativo al tempo (es. "26' del secondo tempo") si converte in minuto assoluto approssimato, segnalando l'approssimazione con un asterisco/nota
  3. **📝 Recap** — le note raw riscritte in prosa leggibile (non copiate/trascritte letteralmente), organizzate per fasi di gara con eventuali note su singoli e sugli avversari
  4. **🎯 Consigli da coach** — sezione SEMPRE presente, con suggerimenti concreti per lavorare sui difetti evidenziati dalla gara: principi di gioco su cui insistere e/o esercizi specifici (linkare a [[../../../exercises/index|libreria esercizi]] o proporne di nuovi) per correggerli in allenamento. Non è un semplice riassunto dei difetti ma un'indicazione operativa di cosa fare in settimana.
  Questa struttura vale per tutte le pagine partita, passate e future: se una pagina partita esistente non la rispetta (es. manca la sezione Consigli da coach), va corretta.
- wiki/seasons/{stagione}/opponents.md → scouting squadre avversarie: bilancio scontri (amichevoli e gare ufficiali) e note tattiche raccolte dal mister, una sezione per squadra
- wiki/seasons/{stagione}/stats.md → classifiche e statistiche
- wiki/seasons/{stagione}/exercises-report.md → analisi esercizi usati
- wiki/seasons/{stagione}/formations.md → moduli usati
- wiki/seasons/{stagione}/fitness.md → andamento presenze
- wiki/seasons/{stagione}/attendance.md → storico presenze allenamenti per giocatore
- wiki/seasons/{stagione}/test-fisici.md → test fisici somministrati nella stagione (test usato, risultati per giocatore, gruppi derivati), organizzata per data per permettere il confronto tra somministrazioni successive
- wiki/seasons/{stagione}/multe.md → registro sanzioni/multe (data, giocatore, cifra, motivazione, stato pagamento) secondo il Regolamento di Squadra, con totali fatte/da pagare/pagate
- wiki/seasons/{stagione}/injuries.md → storico infortuni
- wiki/seasons/{stagione}/player-profiles.md → caratteristiche/attributi giocatori
- wiki/seasons/{stagione}/objectives.md → obiettivi stagione e status
- wiki/seasons/{stagione}/lessons.md → retrospettiva stagione
- wiki/seasons/{stagione}/momenti-chiave.md → riflessioni da coach raccolte nel tempo (episodi, segnali, retrospettive parziali), organizzate in voci datate, aggiunte a richiesta di Daniele — non attende la fine stagione come lessons.md
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
    categoria: riscaldamento-tecnico|riscaldamento-atletico|possesso|tattica|preparazione-atletica|monitoraggio-carico-atletico|test-fisici|calci-piazzati|partitella
    durata_minuti: 0
    score: 1-5
    note: ""
note_generali: ""
autovalutazioni:
  - giocatore: ""
    tqr: 6-20 | null   # somministrato PRIMA della seduta; null se non applicabile (es. prima sessione della stagione) o non rilevato
    rpe: 6-20 | null   # somministrato DOPO la seduta; null se non rilevato
updated: YYYY-MM-DD
---
Nota: `autovalutazioni` include solo i giocatori presenti che hanno effettivamente compilato almeno uno dei due valori.
Scale complete e significato in [[wiki/exercises/rpe-scala-borg|RPE]] e [[wiki/exercises/tqr-total-quality-recovery|TQR]].

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
categoria: riscaldamento-tecnico|riscaldamento-atletico|possesso|tattica|preparazione-atletica|monitoraggio-carico-atletico|test-fisici|calci-piazzati|partitella
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
4. Crea/aggiorna wiki/seasons/{stagione}/sessions/{YYYYMMDD}.md con stato, orario, programma allenamento,
   tabella presenze (con colonne TQR pre e RPE post per ogni giocatore, "—" se assente o non applicabile) e note
5. Aggiorna wiki/seasons/{stagione}/sessions.md aggiungendo/aggiornando la riga della sessione (stato 🟡/🟢)
6. Aggiorna wiki/seasons/{stagione}/attendance.md (contatori presenze/assenze per giocatore)
7. Aggiorna wiki/exercises/index.md
8. Rispondi con conferma: data, presenti (N giocatori), esercizi salvati

### ⚽ DUMP PARTITA
Trigger: Daniele invia dump vocale o testo di una partita

1. Crea raw/seasons/{stagione}/matches/{YYYYMMDD}-vs-{avversario}.md
   con frontmatter completo estratto dal dump; se il file esiste già, usa le informazioni fornite per aggiornare il contenuto
2. Crea/aggiorna wiki/seasons/{stagione}/matches/{YYYYMMDD}.md seguendo sempre la struttura fissa a 4 sezioni definita sopra (convocati, tabellino/cronologia, recap, consigli da coach)
3. Aggiorna wiki/seasons/{stagione}/matches.md aggiungendo/aggiornando la riga della gara nella tabella indice "Partite con pagina dedicata"
4. Aggiorna wiki/seasons/{stagione}/stats.md (gol, assist, minuti) e wiki/seasons/{stagione}/opponents.md (scouting avversario)
5. Aggiorna la pagina dedicata di ogni giocatore convocato ({nome-cognome}.md): riga nella tabella "Presenze in partita" + eventuale voce in "Note personali" se il dump lo menziona per nome; se un giocatore convocato non ha ancora una pagina dedicata, creala (vedi nota sopra su "Wiki structure")
6. Se l'infortunio di un giocatore risulta risolto (es. rientra e gioca minuti in gara), aggiorna la sua tabella Infortuni e wiki/seasons/{stagione}/injuries.md con la data fine
7. Rispondi con conferma: risultato, marcatori, note chiave

Questo vale anche per le amichevoli, trattate come le altre gare ufficiali ai fini della pagina dedicata (raw dump comunque nella cartella sessions/ se dumpate come sessione).

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
