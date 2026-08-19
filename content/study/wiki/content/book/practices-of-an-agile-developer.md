---
title: "Practices of an Agile Developer"
type: book
author:
  - "Venkat Subramaniam"
  - "Andy Hunt"
topics: ["agile-software-development", "technical-excellence"]
status: done
study:
  method: full_reading
raw_source: raw/knowledge/book/practices-of-an-agile-developer/content.md
updated: 2026-08-19
---

# Practices of an Agile Developer

**Autori: Venkat Subramaniam, Andy Hunt**

Raccolta di pratiche concrete e quotidiane per sviluppatori agili, organizzata attorno a una metafora di apertura: lo sviluppo software non è un processo lineare e deterministico come una strada, è più simile al surf — un ambiente dinamico e imprevedibile in cui ogni onda (requisito, sfida) è diversa dalle altre. Come un surfista di successo ha forma fisica, equilibrio e agilità, uno sviluppatore di successo deve saper adattarsi rapidamente al mutare della situazione. Ogni pratica del libro è presentata nello stesso formato: un consiglio, "cosa si prova" quando lo si applica bene, e come "mantenere l'equilibrio" evitando gli eccessi opposti.

## Iniziare con l'agilità

Il libro insiste su un punto spesso trascurato: lo sviluppo software non avviene in un IDE, avviene nella testa — dove ci sono emozioni, politiche d'ufficio, ego, memoria. Un atteggiamento professionale si concentra su risultati, non sulla colpa: **"la colpa non aggiusta i bug"** — invece di puntare il dito, puntarlo verso soluzioni possibili. Sulle "quick fix": un buon programmatore, davanti a una correzione rapida su codice che non conosce, si prende il tempo di capire perché quella correzione funziona e se nasconde altri problemi — un cattivo programmatore lascia il codice così com'è. Man mano che gli hack veloci si accumulano, la chiarezza del codice crolla, fino ai "non toccare quel modulo" — bandiera rossa di un codice ormai fuori controllo.

Un principio ricorrente: **criticare le idee, non le persone** — dare feedback su un'idea con parole che non la squalifichino, per non uccidere l'innovazione: se c'è il rischio che un'idea venga ridicolizzata, le persone smettono di condividerle, e un buon lavoro di sviluppo richiede proprio creatività condivisa. E quando serve coraggio — ammettere di seguire la strada sbagliata, proporre di ripulire codice disordinato — bisogna trovarlo comunque, anche se la prima volta è scomodo: il sollievo arriva dopo.

## Consegnare ciò che l'utente vuole

**"Nessun piano sopravvive al contatto col nemico"** — nel software, il nemico è il cambiamento, e l'agilità dipende dalla capacità di riconoscerlo e adattarsi. Alcuni principi chiave: lasciare che siano i clienti a prendere le decisioni di business (presentando opzioni con pro, contro e costi in termini comprensibili, non tecnici); lasciare che il design *guidi* senza *dettare* — un buon design è accurato ma non preciso, è una mappa, non il territorio; giustificare sempre la scelta di una tecnologia rispetto al problema reale, non il contrario; mantenere il progetto sempre rilasciabile, tramite Continuous Integration; integrare presto e spesso, perché l'integrazione è uno dei rischi maggiori dello sviluppo — più si aspetta, peggio è; automatizzare il deployment fin dall'inizio, non alla fine; ottenere feedback frequente tramite demo settimanali o bisettimanali, per mantenere il prodotto "in bella vista" durante tutto lo sviluppo.

Sui contratti a prezzo fisso, il libro è tagliente: **"i prezzi fissi sono promesse infrante"** — anche nell'edilizia, dove si pensa funzionino, circa il 30% dei costi di costruzione deriva da errori. L'alternativa proposta è un contratto agile: offrire il primo incremento (l'MVP, non più di 4-6 settimane), lasciare che il cliente decida se continuare dopo ogni iterazione, costruendo fiducia progressiva invece di imporre una previsione irrealistica fin dall'inizio.

## Feedback agile

Il capitolo sui test si apre con una metafora: gli unit test automatizzati sono "angeli sulle spalle" — avvisano immediatamente di un problema. Vengono elencati sette benefici concreti: feedback istantaneo, codice più robusto, strumento di design, booster di fiducia, sonda per diagnosticare problemi, documentazione affidabile, aiuto all'apprendimento. Sul principio "usalo prima di costruirlo" (eat your own dog food), il TDD viene presentato come lo strumento naturale, perché costringe a guardare il codice dal punto di vista di chi lo userà. Sull'acceptance testing automatizzato: una tecnica pratica proposta è dare al cliente un file (CSV, Excel) con cui configurare autonomamente input e output attesi dei test, usato poi nella pipeline CI — un buon modo anche per migrare logica di business da un foglio Excel al software, usando il foglio stesso come oracolo dei test finché i risultati non coincidono al 100%. Sul misurare i progressi: **misurare quanto lavoro resta**, non metriche irrilevanti — il backlog visibile è la metrica che conta.

## Coding agile

Il principio guida è il **PIE**: Program Intently and Expressively — scrivere codice per essere chiaro, non intelligente, perché il codice viene letto molto più spesso di quanto venga scritto, e capire cosa fa è spesso più difficile che capire come cambiarlo. Sui commenti: "comunica nei commenti" — evitare commenti inutili, commentare solo ciò che il codice non può esprimere da solo (perché il codice esiste, prerequisiti o promesse, eccezioni). Sui trade-off: non esiste una soluzione migliore in assoluto — vanno valutati insieme performance, comodità, produttività, costo, tempo di mercato, e la complessità va introdotta solo con una ragione concreta, mai per "eleganza percepita" (premature optimization is the root of all evil). Sul codificare a incrementi: mai scrivere per ore, nemmeno per minuti, senza fermarsi a verificare con test che si è sulla strada giusta.

Sulla coesione: **Tell, don't ask** — il codice OO dovrebbe dire agli oggetti cosa fare, non chiedere il loro stato per poi decidere al posto loro (l'esempio del fattorino: non gli daresti il portafoglio sperando prenda solo i due dollari dovuti). Sulla sostituzione per contratto: il principio di sostituzione di Liskov va rispettato preferendo composizione/delegazione a ereditarietà quando la relazione è "ha-un" invece di "è-un" — la delega è quasi sempre da preferire.

## Debug agile

Alcune pratiche pratiche: mantenere un log delle soluzioni ai problemi già affrontati, ricercabile, per non rifare la stessa ricerca due volte; trattare i warning come errori fin dall'inizio, prima che diventino ingestibili; attaccare i problemi in isolamento — separare il modulo sospetto dal contesto, con la "binary chop" (dividere lo spazio del problema a metà) come tecnica pratica; gestire o propagare sempre le eccezioni, mai sopprimerle, nemmeno temporaneamente; fornire messaggi di errore utili — un messaggio di alto livello comprensibile all'utente, con un link ai dettagli tecnici per chi deve risolvere il problema.

## Collaborazione agile

Sugli standup: mantenerli brevi, focalizzati, in piedi apposta perché restino corti — le tre domande classiche (cosa ho fatto ieri, cosa farò oggi, quali blocchi ho). Un capitolo cita direttamente [[../person/martin-fowler-software-engineer|Martin Fowler]] e il suo articolo "Who needs an architect?": **gli architetti devono scrivere codice** — non si programma in PowerPoint, e il ruolo vero dell'architetto è fare da mentore al team, elevandone il livello, non disegnare tutto in anticipo senza feedback; un programmatore che rifiuta di progettare è una persona che rifiuta di pensare. Sull'ownership collettiva del codice: chiunque nel team dovrebbe poter lavorare su qualunque parte del sistema, per ridurre il rischio del bus factor e distribuire conoscenza. Sull'essere mentori: la conoscenza cresce quando viene data, non sottratta — a differenza del denaro, insegnare qualcosa arricchisce entrambe le parti; e "lasciare che le persone capiscano da sole" (dare la canna da pesca, non il pesce) aiuta a costruire autonomia reale, non solo a rispondere a domande. Sulle code review: evitare le sessioni mensili "all-nighter" (inefficaci), preferire revisione continua appena il codice è pronto, in rotazione fra tutto il team, e chiudere sempre il ciclo mostrando come si è risposto al feedback ricevuto.

## Vedi anche

- [[../person/martin-fowler-software-engineer|Martin Fowler]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/practices-of-an-agile-developer/content.md`
