---
title: Esperienza — Casavo
company: casavo
period: 2021-07-26 → 2021-10-04
total_days: 36
stack: [Elixir, PHP, Kotlin, Python, PostgreSQL, Snowflake, GitHub, Notion]
updated: 2026-06-08
tags: [experience, casavo]
---

# Casavo

## Ruolo e periodo
Dan lavora come Senior Developer in Casavo (proptech immobiliare), inserito nel team **Core System** all'interno di una tribe organizzata per squad cross-funzionali (8-12 persone, modello "frattale" per tribe/squad/CoP/CoI). Il diario raw a disposizione copre solo l'ultimo tratto del percorso — dal 26 luglio al 4 ottobre 2021 (36 giornate lavorative): dal giorno in cui matura la decisione di accettare l'offerta di Mymenu fino all'ultimo giorno in azienda. Documenta quindi soprattutto il **periodo di preavviso e il distacco**, non l'intera esperienza (iniziata, secondo i metadati del progetto, nel 2019).

## Timeline eventi chiave
- **2021-07-26** — Colloquio con Mymenu: conferme sulla bontà dell'ambiente e offerta economica in linea con le aspettative
- **2021-07-27** — Decide di accettare l'offerta Mymenu; lo comunica per primo al manager Andrea Mostosi durante il 1:1; tiene un mini-talk su Pattern Matching al Community Day Elixir
- **2021-07-29** — Fissa la data delle dimissioni: ultimo giorno il 4 ottobre
- **2021-08-16** — 1:1 informale con Fabio M. per parlare della decisione presa
- **2021-08-19** — Allinea con Andrea Mostosi il piano di comunicazione dell'addio al resto del team
- **2021-08-23** — Comunica ufficialmente alla tribe la decisione di lasciare, durante il digital coffee break: "le reazioni del team sono state incredibili, quantomeno loro mi riconoscono come persona di valore"
- **2021-08-30** — Annuncia l'addio al meeting Product & Tech insieme a Lorenzo Signoretti, anche lui in uscita nello stesso periodo
- **2021-09-07** — Forte frustrazione: refinement e retro trasformati ricorrentemente in "meeting di strategia" senza esiti concreti — "a livello personale non sono riusciti a rispondere a nessun mio need"
- **2021-09-17 / 09-27** — Organizza con Lorenzo la cena di saluto, che si tiene all'Osteria del Gnocco Fritto
- **2021-10-01** — Ultimo giorno di lavoro da remoto, invia il messaggio di saluto al team
- **2021-10-04** — Ultimo giorno in ufficio: caffè, pranzo e saluti in presenza, eventstorming finale — chiusura dell'esperienza Casavo

## Stack tecnologico
**Elixir** (linguaggio principale del team — al punto da tenere un talk interno su Pattern Matching), **PHP/Laravel** (formazione e conferenze in vista del cambio), **Kotlin** e **Python** (POC per generazione automatica di file Excel da template + JSON), **PostgreSQL** (proiezioni di eventi), **Snowflake** (data warehouse — landing/golden zone), **GitHub**, **Notion**, pratiche di **Event Sourcing/Event Storming** e **TDD** (kata, *TDD by Example*, *Refactoring*, *The Phoenix Project* / *DevOps Handbook*).

## Progetti principali
- **Core System**: sistema centrale FE/BE — gestione permessi, incident sulle login, refactoring "sqm" (metri quadri)
- **Lumière**: micro-servizio event-driven di proiezioni eventi per la reportistica (event store → proiezioni Postgres → landing/golden zone Snowflake)
- **Integrazione Doris**: automazione della ricezione lead dalle agenzie immobiliari
- **Metri quadri (mq)**: gestione e modifica dei dati di superficie degli immobili, transaction book, change management
- **CTA**: focus prioritario del team su MVP e iterazioni successive
- **Unit Economics / Excel automation**: POC per generare report Excel da template + JSON, prima in Python poi esplorando Kotlin
- **Worms**: gestione utenze e regole MQL
- **Casavo Gamma Drawdown Request**: aggiornamento di documenti finanziari con i dati del nuovo conto bancario
- **Confirm Property Info (BE+FE)**: sviluppo in mob/pair programming

## Competenze sviluppate
### Tecniche
- Approfondimento di Elixir e pattern matching, fino a saperlo insegnare ad altri (talk interno, tecnica di Feynman)
- TDD applicato sistematicamente attraverso kata (Bowling, Tennis refactoring)
- Familiarità con architetture event-driven e proiezioni di eventi (Lumière)
- Esplorazione proattiva di nuovi linguaggi (PHP, Kotlin) in preparazione al cambio di stack

### Soft skills e leadership
- Gestione progressiva e rispettosa di una comunicazione delicata (manager → team → azienda)
- Capacità di dare feedback diretto e onesto, anche quando scomodo (su scalability, "radical honesty", gestione dei meeting)
- Mentoring informale (talk tecnici, supporto a colleghi su bug e fix)
- Gestione consapevole delle proprie emozioni in un periodo di forte transizione (malinconia, rabbia, gratitudine)

## Cosa è andato bene ✅
- Talk interno sul Pattern Matching molto apprezzato — ulteriore conferma che insegnare è il modo migliore per imparare
- Le demo di prodotto (Scalability e altre) vanno bene nonostante imprevisti organizzativi
- Il processo di uscita viene accolto con stima e affetto dal team — "mi riconoscono come persona di valore"
- Bel clima fino alla fine: cena di saluto, gesti spontanei dei colleghi (scambio di contatti personali con Luca Z.)
- Continua a investire in formazione personale fino all'ultimo giorno (TDD, kata, libri, conferenze)

## Cosa è stato difficile ⚠️
- Il feedback dato sui problemi del team (es. su scalability) cade nel vuoto: "ancora più grave che nessuno abbia risposto al mio messaggio"
- Refinement e retro che si trasformano sistematicamente in meeting di strategia senza esiti concreti — fonte ricorrente di rabbia
- Percezione di scollamento tra visione a lungo termine ("i film su dove arrivare tra 5 anni") e capacità di tradurla in passi concreti nell'oggi
- Nell'ultimo periodo, sensazione di essere poco coinvolto e utile (backlog poco popolato, ruolo da "uditore")
- Il distacco emotivo: malinconia ricorrente per qualcosa che professionalmente lo entusiasma ma che non risponde più ai suoi bisogni personali

## Mood trend
- **Lug 2021**: operativo e coinvolto nei progetti tecnici, ma con il pensiero già altrove — il giorno 2 segna lo spartiacque: presa della decisione, mix di sollievo e tensione nel comunicarla
- **Ago 2021**: rientro dalle ferie complicato da poco lavoro disponibile; alternanza tra leggerezza (POC Excel con Gianlu, demo Scalability) e crescente tensione emotiva per la comunicazione progressiva dell'addio (1:1 con Fabio M., con la tribe, con Luca Z.)
- **Set 2021**: mood ambivalente — entusiasmo residuo per prodotto e cultura Casavo convive con rabbia per i meeting "che diventano meeting di strategia", senso di inutilità nei giorni vuoti, ma anche soddisfazione nei piccoli traguardi (kata, video XP, supporto ai colleghi)
- **Inizio Ott 2021**: chiusura malinconica ma serena — gli ultimi giorni sono vissuti con gratitudine, nostalgia ("non nego di essere malinconico 😢") e senso di "giusta conclusione"

## Lezioni imparate
1. **Comunicare le decisioni difficili in modo progressivo e rispettoso dei ruoli funziona**: prima il manager diretto, poi il team, poi l'organizzazione — riduce l'impatto e dimostra rispetto reciproco
2. **Il feedback sistematicamente non ascoltato è il principale acceleratore di un addio**: pesa più di qualunque problema tecnico la sensazione di non essere ascoltati su temi sollevati più volte (scalability, radical honesty, gestione dei meeting)
3. **I rituali agili perdono valore quando si trasformano sistematicamente in altro**: la disciplina sullo scopo del meeting (refinement ≠ strategia) è più importante del rituale stesso
4. **Investire nella propria formazione anche nei momenti di transizione** mantiene motivazione e lascia un'eredità di valore al team che si lascia
5. **Le persone restano**: la qualità delle relazioni costruite (Luca Z., Gianlu, Lorenzo, Fede) è ciò che si porta via, più di qualsiasi progetto tecnico

## Tornerei?
Probabilmente no, nelle stesse condizioni. Il prodotto e la cultura tecnica di Casavo piacciono davvero a Dan ("mi piace tantissimo quel che si sta creando in Casavo"), ma l'azienda — sul piano dell'ascolto del feedback, della qualità dei meeting e dell'attenzione al lavoro remoto — non è riuscita a rispondere ai suoi bisogni. Il ricordo che ne porta è agrodolce: nostalgia per le persone e per un ambiente tecnicamente stimolante, insieme alla convinzione che lasciare sia stata "la scelta giusta" dal punto di vista professionale.
