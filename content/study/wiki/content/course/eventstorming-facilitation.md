---
title: "Eventstorming facilitation"
type: course
topics: ["agile-software-development", "eventstorming", "product-development"]
status: done
raw_source: raw/knowledge/course/eventstorming-facilitation/content.md
updated: 2026-08-19
---

# Eventstorming facilitation

Corso pratico sulla facilitazione dell'EventStorming, tecnica di workshop collaborativo per esplorare un dominio di business partendo dagli eventi che lo attraversano, fino ad arrivare a un modello di sistema condiviso. Il percorso descritto segue le tre fasi classiche della tecnica — chaotic exploration, process modeling, software modeling — usando come esercizio propedeutico la fiaba di Cenerentola.

## Big Picture / Chaotic exploration

La fase di esplorazione caotica inizia facendo scrivere a ogni partecipante una propria timeline personale degli eventi rilevanti per il dominio in esame, per poi identificare in gruppo quattro eventi comuni e costruire su quelli una timeline unica e condivisa. Il passo successivo è la costruzione di una narrazione condivisa, che ha il compito esplicito di far emergere gli "hotspot" — i punti di disaccordo fra i partecipanti, spesso il segnale più prezioso dell'intero workshop perché rivelano dove il dominio è realmente ambiguo o mal compreso a livello organizzativo.

Una volta che la narrazione si è consolidata almeno parzialmente, si passa alla costruzione dei box dei bounded context, mappando sistemi e persone coinvolte, problemi e opportunità, e usando emoji per marcare rapidamente elementi ricorrenti sulla board. La selezione di quale bounded context approfondire per primo avviene tramite *arrow voting* (due frecce di voto a testa).

Il corso raccomanda di iniziare sempre con un test veloce di 5-10 minuti sui primi quattro passi usando un dominio semplice e neutro (la fiaba di Cenerentola), per far familiarizzare i partecipanti con il formato prima di applicarlo al dominio reale, spesso carico di complessità organizzativa e politica.

> [!info] Approfondimento aggiunto in fase di compilazione
> L'EventStorming è stato ideato da Alberto Brandolini (lo stesso autore della sessione "L'illusione dell'ortogonalità" citata in Italian Agile Days 2021, presente in questo archivio) attorno al 2013, come evoluzione pratica dei principi del Domain-Driven Design pensata per essere accessibile anche a non tecnici. La caratteristica distintiva è l'uso di sticky note arancioni per rappresentare gli eventi di dominio al passato ("Ordine Effettuato", "Pagamento Rifiutato"), scelta deliberatamente per costringere i partecipanti a pensare in termini di "cosa succede" invece che "cosa fa il sistema".

## Process Modeling

Una volta identificato tramite arrow voting il bounded context su cui concentrarsi, si passa al Process Modeling: un livello di dettaglio intermedio in cui gli eventi vengono arricchiti con i comandi che li generano, gli attori che li eseguono, le policy che li determinano automaticamente e le viste (read model) su cui gli attori si basano per decidere. Il materiale del corso include una fase di warm-up guidata e un esempio applicato prima di procedere al livello successivo.

## Software Modeling

L'ultima fase, il Software Modeling, traduce il process model in una rappresentazione più vicina all'implementazione software: aggregati, comandi e eventi vengono organizzati in una forma che anticipa la struttura del codice (nello spirito della sintassi Given/When/Then usata per gli aggregate in stile CQRS/Event Sourcing), fornendo una base diretta per la progettazione tecnica successiva al workshop.

## Sintesi

L'EventStorming, come descritto in questo corso, è una tecnica progressiva a tre livelli di dettaglio (big picture, process, software) che permette a un gruppo eterogeneo — tecnici e non tecnici insieme — di costruire una comprensione condivisa di un dominio complesso partendo dagli eventi che lo attraversano nel tempo, prima di scendere nei dettagli implementativi. È uno strumento complementare al Domain-Driven Design, spesso usato come attività propedeutica per identificare i bounded context su cui poi applicare tecniche più formali di modellazione.

## Vedi anche

- [[../concept/domain-driven-design|Domain-driven design]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/course/eventstorming-facilitation/content.md`
