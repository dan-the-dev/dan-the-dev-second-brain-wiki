---
title: "Async Code Reviews Are Choking Your Company's Throughput"
type: video
topics: ["agile-software-development", "extreme-programming"]
status: done
raw_source: raw/knowledge/video/async-code-reviews-are-choking-your-companys/content.md
updated: 2026-08-19
---

# Async Code Reviews Are Choking Your Company's Throughput

**Talk di Dragan Stepanovic** (senior/principal engineer, Talabat/Delivery Hero) — background in Extreme Programming, Theory of Constraints, Lean e Systems Thinking

Un talk che usa dati reali — uno studio su oltre 40 repository ad alta attività, con decine di migliaia di pull request — per dimostrare, con l'approccio del systems thinking, come le code review asincrone basate su pull request possano diventare un collo di bottiglia sistemico per il throughput di un team, indipendentemente dalla bravura individuale degli sviluppatori.

## Lo scenario: Ema e Luka

Il talk parte da uno scenario illustrativo: Ema e Luka lavorano su ticket diversi in un team Scrum. Quando Ema completa il suo lavoro e apre una pull request, Luka è occupato con un altro ticket e non può rivedere subito — Ema, nel frattempo, prende un altro task, generando un "effetto ping-pong" in cui entrambi aspettano la disponibilità dell'altro, con conseguente allungamento del tempo totale.

## Engagement e dimensione della pull request

Lo studio misura l'"engagement" (numero di commenti non banali su una PR, escludendo commenti come "looks good to me") in funzione della dimensione della pull request (righe di codice). Il risultato, visualizzato con uno scatter plot, mostra una curva a legge di potenza: normalizzando i commenti per dimensione, la probabilità di ricevere feedback proporzionale al codice cambiato *diminuisce esponenzialmente* al crescere della PR — le pull request più grandi ricevono, in proporzione, sempre meno feedback, rendendo più difficile costruire qualità nel codice proprio dove servirebbe di più.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il fenomeno per cui le pull request di grandi dimensioni ricevono revisioni sistematicamente più superficiali è documentato anche in letteratura accademica: uno studio su larga scala di Microsoft Research su pull request interne ("Modern Code Review: A Case Study at Google", Sadowski et al., 2018, e studi correlati su Microsoft) osserva correlazioni simili fra dimensione del cambiamento e profondità del review, spesso legate al fenomeno psicologico del "review fatigue".

Il talk collega questo fenomeno alla sunk cost fallacy: più tempo ed energia emotiva un autore ha investito in una PR grande, più i revisori sono riluttanti a criticarla in profondità, rendendo le correzioni sostanziali sempre più rare e ritardate man mano che la PR cresce.

## Wait time vs. processing time

Un contributo centrale del talk è la distinzione fra *wait time* (tempo di attesa dell'attenzione di qualcuno) e *processing time* (tempo effettivo di lavoro). Analizzando 500 pull request che hanno impiegato sei mesi ad attraversare il sistema, il tempo di attesa cumulativo misurato è stato di circa 28 mesi — un multiplo enorme rispetto al tempo di programmazione effettivo. Normalizzando il wait time per dimensione della PR, emerge un pattern controintuitivo: il costo di revisione per riga di codice *aumenta esponenzialmente* al *diminuire* della dimensione della PR — le pull request più piccole, pur essendo generalmente considerate una best practice, pagano un costo relativo di attesa molto più alto.

## Il ciclo di retroazione sistemico

Usando diagrammi a ciclo causale (causal loop diagram), il talk modella la dinamica come due feedback loop in tensione. Un loop di rinforzo: PR più piccole → revisione più rapida → minore attesa percepita → maggiore motivazione a mantenerle piccole. Un loop di bilanciamento che lo contrasta: PR più piccole → più PR prodotte nell'unità di tempo → più richieste di revisione in coda per ciascun revisore → minore motivazione individuale a rivedere → attese più lunghe.

> [!info] Approfondimento aggiunto in fase di compilazione
> I diagrammi a ciclo causale (causal loop diagrams) sono uno strumento chiave del System Dynamics, la disciplina fondata da Jay Forrester al MIT negli anni '50 per modellare comportamenti complessi di sistemi socio-tecnici nel tempo. W. Edwards Deming, altra figura centrale nella cultura Lean/XP citata in questo archivio, insisteva similmente sul fatto che circa il 90% delle prestazioni di un sistema dipende dal design del sistema stesso, non dagli sforzi individuali — un principio richiamato esplicitamente nel talk.

## Flow efficiency: il paradosso delle PR piccole

Analizzando un dataset di 5000 pull request, il talk mostra che la *flow efficiency* (percentuale di tempo speso lavorando attivamente su un elemento, contro il tempo passato in attesa) diminuisce al diminuire della dimensione della PR, con un calo marcato attorno alle 120 righe di codice. La conclusione è controintuitiva: se il metodo di lavoro asincrono resta invariato, frammentare un cambiamento grande in tante PR piccole può *aumentare* il tempo totale necessario a processarlo, invece di ridurlo — perché il tempo di attesa per singola PR cresce più velocemente di quanto diminuisca il tempo di elaborazione.

## La soluzione proposta: verso la code review continua

Per mantenere costante il costo di revisione per dimensione mentre le PR si riducono, le persone coinvolte dovrebbero reagire esponenzialmente più in fretta — un requisito che, portato all'estremo, converge verso pratiche di *revisione continua* invece che asincrona: in primis il pair programming, che fornisce feedback su ogni riga scritta in tempo reale, azzerando di fatto il wait time. Il talk cita esplicitamente il libro di Don Reinertsen sui trade-off fra velocità e qualità nei flussi di lavoro, e la ricerca DORA/State of DevOps come prova che throughput e stabilità non sono necessariamente in tensione, contrariamente all'intuizione comune.

## Resource efficiency vs. flow efficiency

Un tema ricorrente nella parte finale del talk è la distinzione, mutuata dal Lean, fra ottimizzare per l'efficienza delle risorse (tenere tutti occupati) e ottimizzare per l'efficienza del flusso (far fluire il lavoro rapidamente attraverso il sistema). La mentalità della resource efficiency — molto diffusa, specie in contesti di outsourcing time & material — porta a ritardi di integrazione sistemici, perché ogni persona "tiene" il proprio lavoro fino a quando non ha tempo per gli altri.

## Cultura, sperimentazione e paura del fallimento

Lo speaker collega esplicitamente questi problemi tecnici a fattori culturali: la mancanza di una cultura della sperimentazione (la paura di sbagliare, riassunta nella frase "nobody ever got fired for buying IBM") ostacola l'adozione di pratiche nuove come il pair o mob programming, anche quando i dati ne dimostrano i benefici sistemici. La sicurezza psicologica emerge di nuovo come precondizione: senza di essa, i team tendono a preferire il noto anche quando è dimostrabilmente più lento.

## Sintesi

Questo talk offre probabilmente la trattazione più rigorosa e quantitativa, in questo archivio, del legame fra pratiche di code review, throughput di un team e teoria dei sistemi — traducendo con dati concreti l'intuizione, condivisa da molte altre fonti dell'archivio (XP, Team Topologies, la ricerca DORA), che le pratiche di feedback continuo (pair/mob programming) battono sistematicamente i modelli di feedback differito, non per ragioni ideologiche ma per dinamiche misurabili del sistema.

## Vedi anche

- [[../concept/extreme-programming|Extreme programming]]
- [[../person/w-edwards-deming|W. Edwards Deming]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/video/async-code-reviews-are-choking-your-companys/content.md`
- YouTube: [video](https://www.youtube.com/watch?v=7kajvevy_OA)
