---
title: "When Will It Be Done? Lean-Agile Forecasting to Answer Your Customers' Most Important Question"
type: book
author:
  - "Daniel S. Vacanti"
topics: ["product-development", "tech-lead"]
status: done
study:
  method: full_reading
raw_source: raw/knowledge/book/when-will-it-be-done/content.md
updated: 2026-08-19
---

# When Will It Be Done? Lean-Agile Forecasting to Answer Your Customers' Most Important Question

**Autore: Daniel S. Vacanti**

Il libro affronta di petto la domanda più temuta di ogni team di prodotto — "quando sarà pronto?" — sostenendo che la risposta corretta non è mai una data singola, ma una **previsione probabilistica**: un intervallo con una probabilità associata. La tesi di fondo è che situazioni altamente incerte (come le previsioni meteo) non sono per questo imprevedibili — esiste una scienza dedicata proprio a questo, la probabilità, e può essere applicata al lavoro di prodotto con dati che i team già possiedono.

## I tre principi base del forecasting

Il libro fissa tre principi guida. Primo, **pensare in modo probabilistico, non deterministico**: una previsione utile descrive il futuro come un insieme di esiti possibili, non come un'unica data — per quanto scomodo questo possa essere per chi è abituato alle scadenze fisse. Secondo, **fare previsioni sia a breve che a lungo termine**, sapendo che quelle a lungo termine hanno una "durata di validità" molto più breve: le assunzioni su cui si basano restano vere sempre meno a lungo, quindi conviene tenere l'orizzonte di previsione il più corto possibile per ridurre l'incertezza e massimizzare l'apprendimento in vista della previsione successiva. Terzo, **ripetere la previsione ogni volta che arrivano nuove informazioni** — una previsione è valida solo fino alla successiva.

## Previsione per un singolo elemento: cycle time e percentili

Per prevedere un singolo item, si tracciano i timestamp di inizio e fine lavorazione (definiti in modo condiviso), e la loro differenza è il **cycle time**. Riportando il cycle time di molti item su uno scatterplot nel tempo, si può disegnare una **linea di percentile** — ad esempio, una linea all'85° percentile a 43 giorni significa che l'85% degli item passati ha impiegato 43 giorni o meno. I percentili funzionano su qualsiasi distribuzione di dati, sono semplici da calcolare e non sono distorti dagli outlier: sono, in sé, delle previsioni.

Per migliorare le previsioni nel tempo, il libro introduce l'**età dell'item di lavoro** (work item age: il tempo trascorso da quando un item è entrato nel flusso, per gli item ancora non usciti) come segnale precoce — monitorarla nei daily standup permette di intervenire prima che un item superi la previsione fatta per lui, invece di scoprirlo solo a consuntivo. Il cycle time si può inoltre scomporre in tempo attivo e tempo di attesa; la loro proporzione (tempo attivo / cycle time) è l'**efficienza di flusso**, e ridurre il tempo di attesa è quasi sempre la leva più economica ed efficace per migliorare il cycle time complessivo (monitorare il WIP, minimizzare le attese vicino al completamento, rivedere policy inefficaci), mentre migliorare il tempo attivo è più difficile ma possibile (automazione, pair/mob programming, limiti di WIP più stretti).

## Cosa NON fare nelle previsioni per singolo item

Il libro è esplicito su una serie di pratiche comuni da evitare. Non comunicare mai una previsione come **media**: se il tuo pendolarismo medio è 24 minuti ma hai un appuntamento importante alle 9, non parti alle 8:35 — la media non massimizza le probabilità di essere puntuale, e in generale l'esito più probabile non è comunque molto probabile in senso assoluto. I dati di cycle time, inoltre, quasi mai seguono una distribuzione normale, quindi la statistica "da manuale" (deviazione standard classica) non si applica bene al lavoro della conoscenza. Stimare e pianificare sottrae tempo al lavoro reale ed è esso stesso tempo di attesa. Gli **story point non vanno usati per il forecasting**: la correlazione fra complessità stimata e cycle time reale è spesso debole o assente (alcuni studi citati mostrano item da 5 punti completati in metà del tempo di item da 3 punti) — in parte perché quando si chiede una stima, le persone tendono a considerare solo il tempo attivo, ignorando le attese. Il libro distingue anche fra **"right sizing" e "same sizing"**: non serve che tutti gli item siano della stessa dimensione — conviene invece dimensionare gli item intorno al valore del percentile di previsione scelto (se l'85° percentile è 12 giorni, "giusto" è vicino a 12 giorni). Infine, ignorare le **pull policy** (classi di priorità speciali, item bloccati ignorati, assenza di limiti WIP, mancanza di una Definition of Done chiara per ogni fase) è un errore ricorrente che inquina qualunque previsione.

## Previsione per più elementi: la simulazione Monte Carlo

Quando la domanda riguarda un intero insieme di item (es. "quando finiremo i 50 item rimasti nel backlog?"), calcolare una media del throughput passato e proiettarla linearmente è lo stesso errore visto sopra applicato su scala più larga. La risposta rigorosa è la **simulazione Monte Carlo**: si definisce una distribuzione di probabilità basata sul throughput storico reale (quanti item sono stati completati per ogni unità di tempo passata), si estraggono ripetutamente valori casuali da questa distribuzione per simulare l'avanzamento del lavoro futuro, e si ripete la simulazione centinaia o migliaia di volte finché l'istogramma dei risultati si stabilizza. Ogni punto dell'istogramma rappresenta l'esito di una simulazione; contando quante simulazioni raggiungono un certo traguardo entro una certa data (o quante unità completano entro una data fissa) si ottiene direttamente una previsione probabilistica — "X% di probabilità di finire entro il giorno Y", oppure "X item o più completati entro la data Z".

## Migliorare le previsioni multi-item: cosa fare e cosa evitare

Un throughput **consistente** conta più di un throughput alto: confrontando due team che completano lo stesso numero di item in 30 giorni, quello con variazione minore (meno giorni a zero item) ottiene previsioni Monte Carlo molto più favorevoli di quello che alterna picchi e giorni vuoti — la prevedibilità, non la velocità di punta, è ciò che rende affidabili le previsioni. Vanno inoltre ri-eseguite le previsioni ogni volta che arrivano nuove informazioni (l'essenza stessa dell'agilità: procedere con informazioni imperfette restando pronti ad adattarsi), e va prestata attenzione al contesto dei dati storici usati come input (non usare dati di dicembre per prevedere marzo, non usare dati di un periodo con team sotto organico). Da evitare: usare medie, usare la Legge di Little per prevedere (è costruita su medie), stimare, e inseguire il curve fitting (complesso e in pratica ininfluente).

## Fidarsi della previsione: la Legge di Little come verifica, non come motore

Il libro chiarisce un uso legittimo della **Legge di Little** (Tempo di Ciclo medio = WIP medio / Throughput medio, nella sua forma da teoria delle code): non per prevedere, ma per *verificare* la qualità di una previsione già fatta — perché la legge vale solo sotto assunzioni precise (sistema in stato stazionario, periodo di osservazione definito, unità di misura coerenti) che vanno controllate, non date per scontate. Usare Kanban da solo non basta a soddisfare queste condizioni: i limiti WIP per colonna potrebbero non vincolare il WIP globale, e il lavoro va costantemente "tirato" (pull), non solo limitato. Contrariamente a un'idea diffusa, la dimensione uniforme degli item **non è necessaria**: la legge lavora su medie, e la variabilità di per sé ha un impatto limitato sulla prevedibilità (l'impatto negativo maggiore viene di solito da un WIP alto, non dalla variabilità delle dimensioni).

## Visualizzare e migliorare la stabilità del sistema

Il **Cumulative Flow Diagram** (CFD) — asse X il tempo, asse Y il conteggio cumulativo di item, con una linea per gli arrivi cumulativi e una per le uscite cumulative, mai decrescenti — rende visibile la stabilità del flusso: la distanza verticale fra le linee è il WIP, quella orizzontale è il cycle time medio. Per migliorare la stabilità del sistema, le tre assunzioni della Legge di Little diventano linee guida pratiche: tasso di arrivo medio uguale al tasso di uscita medio (linee del CFD parallele, WIP costante), tutto ciò che si inizia va anche finito ("stop starting, start finishing"), e il WIP medio deve restare costante. Sulla quantità minima di dati necessaria: la "regola del 5" (una media di 5 item copre il 93% dei casi) e almeno 11 punti dato per stimare una distribuzione uniforme.

## Vedi anche

- [[implementing-lean-software-development|Implementing Lean Software Development]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/when-will-it-be-done/content.md`
