---
title: "EventStorming"
type: topic
id: eventstorming
updated: 2026-08-20
---

# EventStorming

L'EventStorming è una tecnica di workshop collaborativo per esplorare un dominio di business partendo dagli eventi che lo attraversano nel tempo, fino a costruire — insieme a chi quel dominio lo vive ogni giorno, tecnici e non tecnici nella stessa stanza — un modello condiviso abbastanza solido da guidare la progettazione del software che lo dovrà supportare. È stata ideata da Alberto Brandolini attorno al 2013 come evoluzione pratica dei principi del Domain-Driven Design, pensata esplicitamente per essere accessibile anche a chi non ha alcuna formazione tecnica: l'intuizione di fondo è che la comprensione condivisa di un dominio complesso si costruisce meglio attorno a un muro pieno di sticky note che dentro un documento di specifiche letto da una sola persona alla volta.

> [!info] Approfondimento aggiunto in fase di compilazione
> Brandolini ha sistematizzato la tecnica nel libro *Introducing EventStorming* (pubblicato progressivamente su Leanpub e poi come risorsa gratuita su eventstorming.com), maturato attraverso anni di workshop condotti sul campo prima come consulente indipendente e poi attraverso Avanscoperta, la scuola di formazione che ha fondato a Milano. La scelta delle sticky note arancioni per rappresentare gli eventi di dominio al passato ("Ordine Effettuato", "Pagamento Rifiutato") non è estetica: è un vincolo deliberato che costringe i partecipanti — inclusi quelli tecnici, abituati a pensare in termini di funzionalità e classi — a ragionare in termini di "cosa succede nel dominio", non "cosa fa il sistema". È lo stesso spostamento di prospettiva che è al cuore del Domain-Driven Design: partire dal linguaggio e dagli eventi del dominio, non dalla struttura del codice.
> Fonti: [eventstorming.com — Introducing EventStorming](https://www.eventstorming.com/book/) · [Avanscoperta — EventStorming](https://www.avanscoperta.it/en/eventstorming/) · [Wikipedia — Event storming](https://en.wikipedia.org/wiki/Event_storming)

## Le tre fasi: dal caos alla struttura software

La tecnica è progressiva, articolata in tre livelli di dettaglio crescente, pensati per essere percorsi in sequenza nello stesso workshop o in sessioni separate a seconda della maturità del gruppo e della complessità del dominio.

**Big Picture / Chaotic Exploration** è il punto di partenza, e il nome descrive bene cosa succede: si parte deliberatamente dal caos, non da una struttura imposta dall'alto. Ogni partecipante scrive la propria timeline personale degli eventi rilevanti per il dominio in esame — senza coordinarsi con gli altri, senza filtro — per poi passare a un lavoro di gruppo in cui si identificano gli eventi comuni fra le timeline individuali e si costruisce, a partire da quelli, una timeline unica e condivisa. Il passo successivo è costruire attorno a quella timeline una narrazione condivisa, e qui emerge uno degli elementi più preziosi dell'intero workshop: gli **hotspot**, i punti in cui i partecipanti non sono d'accordo su cosa succeda davvero o su come dovrebbe succedere. Un hotspot non è un fallimento del workshop — è il segnale più prezioso che il workshop può produrre, perché rivela dove il dominio è realmente ambiguo o mal compreso a livello organizzativo, spesso in punti che nessun documento di specifiche avrebbe mai fatto emergere perché nessuno si era mai accorto che ci fosse disaccordo.

Una volta che la narrazione si è consolidata almeno in parte, si passa alla costruzione dei box dei **bounded context**: si mappano sistemi e persone coinvolte, problemi e opportunità, usando emoji per marcare rapidamente elementi ricorrenti direttamente sulla board, senza rallentare il flusso del workshop con notazioni troppo formali. Quando ci sono più bounded context candidati e serve scegliere quale approfondire per primo, la tecnica usa l'**arrow voting**: ogni partecipante riceve due frecce di voto da assegnare, e il bounded context con più consenso viene affrontato per primo nella fase successiva.

**Process Modeling** è il livello intermedio: una volta identificato tramite arrow voting il bounded context su cui concentrarsi, gli eventi vengono arricchiti con il resto del vocabolario necessario a capire *come* accadono, non solo *cosa* accade — i comandi che li generano, gli attori che li eseguono, le policy che li determinano automaticamente quando un evento scatena un'azione senza intervento umano diretto, e le viste (read model) su cui gli attori si basano per decidere cosa fare. È il livello in cui il modello comincia ad assomigliare a un flusso di lavoro comprensibile, più che a una semplice sequenza di fatti.

**Software Modeling** è l'ultimo livello, quello che traduce il process model in una rappresentazione molto più vicina all'implementazione software vera e propria: aggregati, comandi ed eventi vengono organizzati in una forma che anticipa direttamente la struttura del codice, nello spirito della sintassi Given/When/Then tipica degli aggregate in stile CQRS/Event Sourcing (si veda [[architecture|Architettura Software]] per una trattazione diretta di CQRS ed Event Sourcing). È il punto in cui il workshop collaborativo, condotto insieme a persone non tecniche, sfocia in una base diretta e concreta per la progettazione tecnica che seguirà.

## Come si conduce un workshop: format e accorgimenti pratici

Un accorgimento di facilitazione ricorrente, e particolarmente utile per chi deve introdurre l'EventStorming per la prima volta in un gruppo, è iniziare sempre con un test veloce di 5-10 minuti sui primi passi della fase Big Picture usando un dominio semplice e volutamente neutro — la fiaba di Cenerentola è l'esempio classico usato a scopo didattico. Il motivo è pratico: far familiarizzare i partecipanti con il formato del workshop (sticky note, timeline, hotspot) su un dominio a bassissimo rischio politico e organizzativo, prima di applicare la stessa tecnica al dominio reale, che porta quasi sempre con sé complessità organizzativa, disaccordi pregressi e sensibilità politiche che possono bloccare un gruppo alla prima difficoltà se non ha già interiorizzato il formato.

## Perché funziona: un ponte fra tecnici e non tecnici

Il valore distintivo dell'EventStorming rispetto ad altre tecniche di discovery del dominio sta nel fatto che è pensata per un gruppo eterogeneo — sviluppatori, product owner, esperti di dominio, stakeholder di business — nella stessa stanza, allo stesso momento, senza che nessuno dei due lati debba "tradurre" per l'altro dopo il fatto. Questo la rende un'attività propedeutica particolarmente efficace per identificare i bounded context su cui poi applicare tecniche più formali di modellazione del dominio, tipiche del [[ddd|Domain-Driven Design]]: l'EventStorming produce il materiale grezzo (eventi, comandi, policy, hotspot, confini candidati) su cui il lavoro di modellazione DDD vero e proprio — Ubiquitous Language, Bounded Context espliciti, Aggregate — può poi essere costruito con più rigore.

## Sintesi

L'EventStorming è, in sostanza, una tecnica di scoperta collaborativa del dominio articolata in tre livelli progressivi di dettaglio — Big Picture/Chaotic Exploration, Process Modeling, Software Modeling — che permette a un gruppo eterogeneo di tecnici e non tecnici di costruire, insieme e nello stesso momento, una comprensione condivisa di un dominio complesso partendo dagli eventi che lo attraversano nel tempo, prima di scendere nei dettagli implementativi. Il suo contributo più prezioso non è tanto la struttura finale del modello quanto ciò che emerge nel processo — in particolare gli hotspot, i punti di disaccordo che rivelano dove un'organizzazione ha realmente bisogno di chiarezza. È uno strumento complementare, non alternativo, al Domain-Driven Design: la porta d'ingresso pratica verso una modellazione più formale del dominio.

## Vedi anche

- Contenuto: [[../content/course/eventstorming-facilitation|Eventstorming Facilitation]]
- Topic collegati: [[ddd|DDD]] · [[product-development|Product Development]] · [[agile-software-development|Agile Software Development]] · [[architecture|Architettura Software]]
- Persone: Alberto Brandolini
