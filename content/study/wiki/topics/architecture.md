---
title: "Architettura Software"
type: topic
id: architecture
updated: 2026-08-20
---

# Architettura Software

## Il problema che l'architettura esagonale risolve

Quando si avvia un nuovo progetto, la tendenza naturale è privilegiare la velocità: si installano rapidamente framework e librerie per risolvere i problemi immediati, spesso senza una riflessione esplicita su come quelle scelte tecnologiche finiranno per intrecciarsi con la logica di dominio dell'applicazione. Il risultato tipico, nel tempo, è codice fortemente accoppiato — difficile da mantenere, difficile da modificare quando i requisiti di business cambiano, e sempre più costoso da far evolvere man mano che il sistema cresce. L'architettura esagonale (nota anche come *Ports & Adapters*) nasce come risposta diretta a questo problema: separare le *porte* — i punti di ingresso e uscita verso il dominio — dagli *adattatori* — le implementazioni concrete di quelle porte — mantenendo la logica di dominio agnostica rispetto a framework, librerie e dettagli infrastrutturali. Il dominio parla solo attraverso interfacce ben definite; database, framework web, servizi esterni diventano dettagli sostituibili, non fondamenta a cui il codice di business resta ancorato.

## Origini e genealogia del pattern

Il principio di isolare la logica di dominio dal mondo esterno non nasce con un nome unico, ma attraverso una genealogia di idee strettamente imparentate, riformulate più volte nel corso di quasi trent'anni. Le sue radici più antiche risalirebbero al 1992, con l'introduzione del pattern "Boundary-Control-Entity" da parte di Ivar Jacobson — una delle prime formalizzazioni esplicite dell'idea che gli oggetti di un sistema debbano essere distinti in base al loro ruolo rispetto al confine fra dominio e mondo esterno. Il concetto è stato poi sviluppato e reso popolare, con il nome con cui è oggi più noto, da Alistair Cockburn nel 2005, sotto l'etichetta di "hexagonal architecture" (Ports & Adapters). Da allora lo stesso principio di disaccoppiamento è stato ribattezzato più volte con nomi diversi, ciascuno con la propria enfasi: l'Onion Architecture, che rende esplicita l'idea di strati concentrici attorno al dominio, e la Clean Architecture di Robert C. Martin (2011), che vi aggiunge la nozione di "Screaming Architecture" — l'idea che la struttura di un progetto ben architettato dovrebbe comunicare a colpo d'occhio di cosa si occupa il business, non quale framework usa.

> [!info] Approfondimento aggiunto in fase di compilazione
> La formulazione originale di Cockburn resta disponibile, mantenuta e aggiornata nel tempo dall'autore stesso, sulla sua pagina personale: [alistair.cockburn.us/hexagonal-architecture](https://alistair.cockburn.us/hexagonal-architecture). È il riferimento primario a cui risalire per la definizione autentica del pattern, distinta dalle molte riformulazioni successive.

## Il beneficio concreto: sostituire l'infrastruttura senza toccare il dominio

Il valore dell'architettura esagonale non è astratto: si misura nella capacità di sostituire un pezzo di infrastruttura senza modificare la logica di business. Un caso reale racconta la sostituzione completa del database di un software finanziario, passando da Elasticsearch a MongoDB in un solo mese, senza toccare la business logic — modificando esclusivamente gli adattatori. Lo stesso principio si applica a metodi di pagamento o API esterne: la capacità di cambiare implementazione senza toccare il dominio è il beneficio concreto e misurabile dell'approccio, non solo un vantaggio teorico da manuale.

Questo beneficio, però, non è gratuito: introduce un costo iniziale di complessità, ed è legittimo chiedersi se sia sempre giustificato. Il punto di pareggio (*break-even point*) si raggiunge quando il team ha acquisito abbastanza esperienza con l'architettura da poter implementare un cambiamento in 30 minuti invece che in tre giorni, e il business può proporre modifiche senza la sensazione che ogni richiesta comporti giorni di lavoro. Prima di quel punto di pareggio, il costo dell'indirection può effettivamente superare il beneficio; dopo, si inverte, ed è lì che l'investimento iniziale comincia a ripagare.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il riferimento concettuale più diretto per questo trade-off è la "Design Stamina Hypothesis" di Martin Fowler, che contrappone graficamente la velocità di consegna di un design povero (alta all'inizio, in rapido calo) a quella di un design curato (leggermente più lenta all'inizio, ma sostenuta nel tempo): [Is High Quality Software Worth the Cost? — martinfowler.com](https://martinfowler.com/articles/is-quality-worth-cost.html)

## Refactoring del legacy: isolare il core invece di riscrivere tutto

Un secondo caso di studio riguarda un progetto attivo da 7-8 anni, che generava valore significativo per il cliente ma la cui base di codice — 30.000-40.000 righe concentrate in un unico controller — aveva progressivamente eroso la fiducia del team nei propri calcoli, a causa di un algoritmo eccessivamente complesso. La strategia adottata non è stata il refactoring incrementale dell'intero codice legacy in blocco, ma la creazione di una nuova cartella separata in cui reintrodurre gradualmente, con dependency injection e una netta separazione fra dominio e infrastruttura, le sole parti core del sistema affette da problemi — inclusi test che prima non esistevano affatto. Un caso analogo, più breve, riguarda un team bloccato su una versione ormai datata di un framework (Zend 1): la soluzione è stata creare un nuovo repository con framework e architettura moderni, migrando gradualmente API e funzionalità mentre il codice legacy continuava a coesistere con quello nuovo, senza un blocco totale dello sviluppo in attesa di una riscrittura completa.

Il filo comune fra i due casi è lo stesso: davanti a un legacy troppo grande e rischioso per essere riscritto in un colpo solo, l'architettura esagonale offre un modo per isolare progressivamente il nucleo di dominio, un pezzo alla volta, senza dover fermare il sistema né accettare il rischio di una riscrittura totale.

## Prestazioni, over-engineering e il rischio dell'ottimizzazione prematura

Una domanda ricorrente su questo pattern è se l'introduzione di adattatori possa degradare le prestazioni. L'esperienza pratica suggerisce il contrario: separare le componenti permette di testare e misurare le prestazioni di ciascuna in modo indipendente, rendendo più facile identificare e risolvere problemi puntuali invece di doverli diagnosticare in un sistema monolitico e intrecciato. Quando le preoccupazioni sulle prestazioni emergono troppo presto nello sviluppo — prima ancora che il dominio sia stabile — è spesso un segnale che il focus si è spostato prematuramente dalla logica di dominio ai dettagli implementativi: un classico caso di ottimizzazione prematura, questa volta applicato al livello architetturale invece che al singolo algoritmo.

## Insegnare l'architettura esagonale a chi è agli inizi

Trasmettere questa pratica a sviluppatori junior richiede un approccio diverso da un semplice "studia questo framework": è più efficace far studiare design pattern e pratiche trasversali come il test-driven development, che restano applicabili anche all'architettura esagonale senza costringere a introdurre troppa complessità tutta insieme fin dal primo giorno. L'approccio pratico più efficace resta il pair programming e la code review, dando ai junior lo spazio per sbagliare senza il timore di essere criticati — un'eco diretta dei temi di sicurezza psicologica che attraversano trasversalmente anche altri topic di questo archivio: un'architettura ben disaccoppiata aiuta poco se il contesto in cui viene insegnata scoraggia l'errore, che è invece il modo più naturale in cui chi è agli inizi impara davvero a maneggiarla.

## Functional Core, Imperative Shell

Un pattern strettamente imparentato, spesso introdotto in continuità con l'architettura esagonale, è il *Functional Core, Imperative Shell*: un modo di applicare i principi della programmazione funzionale separando un "nucleo funzionale" — funzioni pure che ricevono input e producono output senza side effect — da un "guscio imperativo" che gestisce adattatori, coordinamento e interazione con l'utente. L'affinità con l'architettura esagonale e con il Domain-Driven Design è diretta: in entrambi i casi il nucleo (dominio, funzioni pure) resta isolato e testabile in modo semplice, mentre la complessità di interazione con il mondo esterno — persistenza, I/O, effetti collaterali — viene spinta ai margini del sistema, nel guscio, dove è più facile contenerla e sostituirla.

## Letture di riferimento sul tema

Fra i testi più citati per approfondire questa famiglia di pattern architetturali figurano *Clean Code* e *Clean Architecture* di Robert C. Martin, *Get Your Hands Dirty on Clean Architecture*, e *Designing Data-Intensive Applications* di Martin Kleppmann come lettura pratica per progettare sistemi centrati sui dati — quest'ultimo particolarmente utile per chi vuole capire come le decisioni architetturali di isolamento del dominio si intreccino con le scelte di persistenza e distribuzione dei dati su scala.

## Sintesi

L'architettura esagonale, insieme alle sue varianti concettualmente equivalenti (Onion Architecture, Clean Architecture, Functional Core/Imperative Shell), risponde a un problema molto concreto: il codice si accoppia naturalmente alla propria infrastruttura se non si fa uno sforzo deliberato per impedirlo, e quell'accoppiamento diventa via via più costoso da sciogliere man mano che il sistema cresce. Il pattern non è gratuito — introduce un costo iniziale, e va adottato con consapevolezza del punto di pareggio a cui ripaga — ma offre un percorso concreto e graduale, verificato su casi reali di sostituzione di database e di refactoring di legacy voluminoso, per tenere la logica di dominio testabile, comprensibile e indipendente dalle scelte tecnologiche del momento.

## Vedi anche

- Contenuto: [[../content/podcast/ep-78-hexagonal-architecture-con-alessandro|Ep. 78 — Hexagonal Architecture con Alessandro Minoccheri]]
- Concetto collegato: [[../content/concept/hexagonal-architecture-software|Hexagonal architecture (software)]]
- Persone: [[../content/person/alessandro-minoccheri|Alessandro Minoccheri]] · [[../content/person/ivar-jacobson|Ivar Jacobson]] · [[../content/person/alistair-cockburn|Alistair Cockburn]] · [[../content/person/robert-c-martin|Robert C. Martin]]
- Topic collegati: [[ddd|DDD]] · [[technical-excellence|Technical Excellence]] · [[php|PHP]]
- Materiale architetturale trattato in modo più esteso, seppur senza tag dedicato, dentro il topic [[ddd|DDD]]: [[../content/book/professional-php-building-maintainable-and-secure|Professional PHP]] (architettura a strati/esagonale, CQRS) e [[../content/video/greg-young-cqrs-and-event-sourcing-code-on-the|Greg Young — CQRS and Event Sourcing]]
