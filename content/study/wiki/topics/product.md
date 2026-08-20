---
title: "Prodotto"
type: topic
id: product
updated: 2026-08-20
---

# Prodotto

Questo topic è deliberatamente minimo, e va letto per quello che è: non un errore di compilazione ma un riflesso onesto della struttura del piano di studio. L'unico contenuto agganciato direttamente è una voce concettuale — [[../content/concept/earnings-before-interest-taxes-depreciation-and|EBITDA]] — non un libro, un corso o un talk. Il lato pratico e sostanzioso dello sviluppo prodotto (scoperta del dominio, team di prodotto, forecasting, casi di studio, anti-pattern come la feature factory) vive nel topic gemello [[product-development|Product Development]], a cui questa pagina rimanda esplicitamente per tutto ciò che riguarda il "come" costruire prodotto. Quello che resta qui è la componente più strettamente finanziaria del vocabolario di prodotto: il minimo che un Tech Lead deve saper leggere per non restare escluso da una conversazione con un CFO, un investitore o un founder.

## EBITDA: misurare la redditività operativa a prescindere dalla struttura finanziaria

EBITDA è l'acronimo di *Earnings Before Interest, Taxes, Depreciation and Amortization* — utile al lordo di interessi, imposte, deprezzamento e ammortamento. Si calcola partendo dall'utile netto (o, più spesso in pratica, dal reddito operativo) e sommando indietro le quattro voci che dà il nome all'indicatore: gli interessi passivi sul debito, le imposte sul reddito, il deprezzamento (la svalutazione contabile di beni materiali come macchinari o impianti) e l'ammortamento (la stessa logica applicata a beni immateriali, come brevetti o software capitalizzato). Il risultato è una misura della redditività *operativa* di un'azienda: quanto valore genera il suo core business, isolato dalle scelte di come quel business è finanziato (capitale proprio o debito) e da dove è tassato o come ammortizza i propri asset.

Questo isolamento è esattamente il motivo per cui l'EBITDA è così diffuso nelle conversazioni fra profili tecnici e profili executive/investitori: permette di confrontare la performance operativa di due aziende — o due prodotti dentro la stessa azienda — che hanno strutture di capitale, regimi fiscali o politiche di ammortamento completamente diverse, cosa che l'utile netto da solo non permette di fare in modo pulito. Per questo è la metrica di riferimento in due contesti molto concreti: le valutazioni d'azienda tramite multipli (il rapporto *Enterprise Value / EBITDA* è probabilmente il multiplo più usato in M&A e private equity, proprio perché normalizza aziende con leve finanziarie diverse) e le operazioni a leva (leveraged buyout), dove l'EBITDA viene usato come proxy della capacità dell'azienda acquisita di generare cassa sufficiente a ripagare il debito contratto per acquisirla.

> [!info] Approfondimento aggiunto in fase di compilazione
> L'EBITDA non è un principio contabile riconosciuto (non è una *non-GAAP measure* certificata, per usare il linguaggio della SEC) ma una metrica costruita a partire dai numeri di bilancio, ed è per questo che ha ricevuto critiche pesanti da alcuni dei nomi più autorevoli della finanza. Charlie Munger, vicepresidente di Berkshire Hathaway, l'ha definita pubblicamente più volte con una frase diventata proverbiale negli ambienti di finance: ogni volta che si legge "EBITDA", bisognerebbe sostituire mentalmente le parole con "bullshit earnings" — perché l'indicatore ignora sistematicamente il capex (gli investimenti in beni capitali) necessario a mantenere in funzione l'attività, facendo apparire più sana di quanto sia una azienda che sta semplicemente rimandando investimenti necessari. Warren Buffett ha espresso la stessa riserva in forma più diretta, chiedendosi retoricamente se il management pensi che "la fatina dei denti" paghi per le spese in conto capitale. La lezione pratica per chi legge un EBITDA in una conversazione di business: è un indicatore utile per confrontare redditività operativa a parità di condizioni, ma va sempre affiancato da un'occhiata al flusso di cassa e al capex reale, mai preso come proxy diretto della cassa generata da un'azienda.
> Fonti: [Wikipedia — Earnings before interest, taxes, depreciation and amortization](https://en.wikipedia.org/wiki/Earnings_before_interest,_taxes,_depreciation_and_amortization) · [Corporate Finance Institute — Warren Buffett on EBITDA](https://corporatefinanceinstitute.com/resources/valuation/warren-buffett-ebitda/) · [brk-b.com — Why Charlie Munger Despised EBITDA](https://brk-b.com/why-charlie-munger-despised-ebitda_240201.html)

Per un Tech Lead o un ingegnere senior, il valore pratico di conoscere l'EBITDA non è saperlo calcolare — è un numero che arriva quasi sempre già pronto da finance — ma riconoscere *quando* e *perché* compare in una conversazione: tipicamente quando qualcuno sta valutando l'impatto economico di una decisione tecnica (un rallentamento nello sviluppo, un investimento in infrastruttura, un costo di licenza ricorrente) nei termini in cui lo leggerebbe un investitore o un board. È, in altre parole, un pezzo del vocabolario che serve a tradurre decisioni tecniche in linguaggio che il lato business dell'organizzazione può valutare senza bisogno di capire i dettagli implementativi sottostanti — lo stesso tipo di lavoro di traduzione che il topic [[business-development|Business Development]] tratta più in generale.

## Sintesi

Questo topic resta, e deve restare, minimo: non c'è ancora un percorso di studio strutturato sul "prodotto" in senso ampio dentro questo piano — quello vive interamente in [[product-development|Product Development]], dove la scoperta del dominio (EventStorming), gli anti-pattern (feature factory), la dinamica dei team di prodotto e gli strumenti di forecasting hanno tutti una trattazione piena. Qui resta solo il pezzo di vocabolario finanziario più immediatamente utile a un profilo tecnico che deve saper leggere — non necessariamente produrre — un discorso sui numeri di un prodotto.

## Vedi anche

- Contenuto: [[../content/concept/earnings-before-interest-taxes-depreciation-and|EBITDA]]
- Topic collegati: [[product-development|Product Development]] · [[business-development|Business Development]]
