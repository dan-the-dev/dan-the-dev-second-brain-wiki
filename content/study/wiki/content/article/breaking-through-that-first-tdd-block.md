---
title: "Breaking Through That First TDD Block"
type: article
author: J.B. Rainsberger (The Code Whisperer)
topics: [tdd, agile-software-development]
raw_source: raw/knowledge/article/breaking-through-that-first-tdd-block/content.md
updated: 2026-08-19
---

# Breaking Through That First TDD Block

**blog.thecodewhisperer.com** · Articolo di J.B. Rainsberger

> [!info] Approfondimento aggiunto in fase di compilazione
> J.B. Rainsberger (pseudonimo online "The Code Whisperer") è un consulente e formatore canadese specializzato in TDD, design object-oriented e Integrated Tests, noto in particolare per il talk *Integrated Tests Are A Scam* e per una lunga attività di coaching su team che adottano il TDD in produzione. Il suo blog raccoglie da anni riflessioni pratiche, più che teoriche, sull'adozione quotidiana della disciplina — questo articolo ne è un esempio tipico: breve, aneddotico, orientato all'azione immediata.
> Fonte: [blog.thecodewhisperer.com — About](https://blog.thecodewhisperer.com/) · [J.B. Rainsberger — profilo pubblico](https://www.jbrains.ca/)

## Il problema che l'articolo affronta

Chi si avvicina per la prima volta al Test-Driven Development incontra quasi sempre lo stesso ostacolo, a prescindere dall'esperienza pregressa come programmatore: sapere *cosa* fare (scrivere il test prima del codice) non basta a saperlo *fare* con naturalezza. Il gap tra la comprensione teorica del ciclo rosso-verde-refactor e la capacità di eseguirlo senza sforzo cosciente è quello che l'articolo chiama, semplicemente, il "blocco" — ed è precisamente il motivo per cui la maggior parte dei tentativi di adottare il TDD in autonomia, senza una pratica deliberata, si arena entro le prime settimane.

## L'esercizio, attribuito a Kent Beck

L'articolo prende le mosse da un esercizio pubblicato originariamente da Kent Beck su Twitter, che Rainsberger ha applicato a sé stesso e riporta qui in sette passi molto meccanici:

1. Modifica il codice come faresti normalmente
2. Scrivi un test che passi solo grazie a quella modifica
3. Annulla la modifica
4. Riscrivi il test da zero, senza copiarlo dall'appunto — deve essere scritto di nuovo, a mano
5. Fai compilare il test cambiando il codice
6. Fallo fallire come previsto
7. Cambia il codice per farlo passare

La caratteristica dell'esercizio è che non chiede di "fare TDD" nel senso pieno del termine su una funzionalità reale: chiede di ripetere, deliberatamente e più volte, un singolo micro-movimento — scrivere prima il test, poi il codice — fino a farlo diventare un riflesso invece che una decisione cosciente ogni volta.

## L'esperienza diretta dell'autore

Rainsberger racconta di aver applicato l'esercizio per un intero pomeriggio, colloca l'episodio nel 1999, e descrive un cambiamento percepito "quasi immediatamente" — pur con momenti di evidente disagio nel processo, che cita quasi letteralmente: pensare, pensare, pensare, arrendersi, scrivere il codice di produzione, accorgersi dell'errore, annullare tutto, contare fino a dieci (letteralmente), e ricominciare scrivendo il test. Ripetendo l'esercizio per alcune settimane successive — nota, con una punta di ironia, che il proprio manager non sembrò accorgersi di alcun calo di produttività nel frattempo — il blocco descritto da Beck scompare quasi del tutto, sostituito da un'abitudine solida a scrivere sempre prima il test.

## Il primo momento di consapevolezza

Un primo "aha!" arriva già al passo 4 dell'esercizio: riscrivendo il test da zero, senza il supporto del copia-incolla, capita spesso di accorgersi che si può scrivere una versione più semplice, più piccola e più chiara di quella appena cancellata. È un effetto collaterale interessante dell'atto stesso di riscrivere: il primo tentativo porta con sé inerzia e dettagli superflui che una seconda stesura, fatta a mente più libera, tende naturalmente a scartare.

## Il cambiamento più profondo: da strutture dati a interfacce

Il beneficio più significativo che l'articolo individua, però, non riguarda la qualità del singolo test, ma il modo stesso di ragionare sul problema. Ripetendo l'esercizio, si comincia a pensare direttamente in termini di input e output desiderati, invece che di strutture dati e algoritmi. È un cambio di prospettiva che ha una conseguenza diretta e specifica: si smette di vedere solo classi, e si comincia a vedere interfacce — con un impatto immediato su come si valutano i design, sia i propri sia quelli altrui. Chi pensa prima in termini di interfaccia (cosa deve fare questo componente, visto da fuori) invece che di implementazione (come è fatto dentro) tende a scrivere codice più facilmente testabile quasi per costruzione, perché l'interfaccia pubblica diventa il punto di partenza naturale del ragionamento, non un ripensamento successivo.

## Perché un esercizio così meccanico funziona

Non c'è nulla di magico nel meccanismo: è ripetizione deliberata di un movimento molto piccolo, con feedback immediato a ogni ciclo. Fare e disfare la stessa modifica, riscrivendo il test ogni volta, costringe a interiorizzare il ritmo test-prima invece di limitarsi a "saperlo in teoria" — è lo stesso principio dietro alla pratica dei kata di programmazione: l'obiettivo non è il codice che ne risulta, che viene scartato, ma l'abitudine costruita ripetendo.

> [!info] Approfondimento aggiunto in fase di compilazione
> Questo meccanismo di ripetizione mirata con feedback immediato, applicato a un compito appena oltre la propria comfort zone, è lo stesso principio alla base della *deliberate practice* studiata da Anders Ericsson: l'abilità non nasce dalla semplice esposizione ripetuta a un compito, ma dalla ripetizione mirata di un ciclo breve con correzione immediata. Ericsson ha sviluppato questo modello studiando musicisti e scacchisti d'élite, ma è stato ripreso esplicitamente da diversi formatori della comunità Agile (tra cui Emily Bache, nota per la pratica dei kata) per giustificare l'efficacia di esercizi di ripetizione come questo.
> Fonte: [K. Anders Ericsson, Ralf Th. Krampe, Clemens Tesch-Römer, "The Role of Deliberate Practice in the Acquisition of Expert Performance", Psychological Review, 1993](https://psycnet.apa.org/record/1993-40718-001)

> [!info] Approfondimento aggiunto in fase di compilazione
> L'esercizio di Beck citato nell'articolo è un antecedente diretto di ciò che oggi viene chiamato più genericamente "TDD kata" — esercizi brevi, spesso ripetuti più volte dallo stesso praticante nell'arco di settimane, pensati esplicitamente per allenare il ritmo del ciclo rosso-verde-refactor senza il carico cognitivo di un problema di dominio reale. Il più noto tra questi è probabilmente il "Bowling Game Kata" di Robert C. Martin, diffuso nella comunità Extreme Programming pochi anni dopo la pubblicazione di questo stesso post.
> Fonte: [Uncle Bob — The Bowling Game Kata](https://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata)

## Sintesi

L'articolo è breve, ma il suo valore sta proprio nella sua specificità: non discute i vantaggi astratti del TDD, offre un protocollo riproducibile per chiunque si trovi bloccato di fronte alla stessa domanda ricorrente — "conosco le regole, perché continuo a scrivere prima il codice?" — e riporta un'evidenza aneddotica diretta di quanto in fretta quel blocco possa dissolversi con pratica deliberata e mirata, invece che con la sola esposizione ripetuta al problema.

## Collegamenti

- Topic: [[../topics/tdd|TDD]] · [[../topics/agile-software-development|Agile Software Development]]
- Contenuti collegati: [[../book/test-driven-development-by-example|Test-Driven Development: By Example]] · [[../book/agile-technical-practices-distilled-a-learning|Agile Technical Practices Distilled]]
- Autore: [[../person/jb-rainsberger|J.B. Rainsberger]]
- Persona citata: [[../person/kent-beck|Kent Beck]] (esercizio originale via tweet)

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/breaking-through-that-first-tdd-block/content.md`
- Articolo originale: [blog.thecodewhisperer.com](https://blog.thecodewhisperer.com/permalink/breaking-through-that-first-tdd-block)
