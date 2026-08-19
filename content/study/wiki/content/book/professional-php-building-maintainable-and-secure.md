---
title: "Professional PHP: Building Maintainable and Secure Applications"
type: book
author:
  - "Patrick Louys"
topics: ["php", "software-development"]
status: done
study:
  method: full_reading
raw_source: raw/knowledge/book/professional-php-building-maintainable-and-secure/content.md
updated: 2026-08-19
---

# Professional PHP: Building Maintainable and Secure Applications

**Autore: Patrick Louys**

Libro in due parti: una prima parte teorica sui principi di codice manutenibile, e un tutorial pratico che costruisce, passo passo, un'applicazione PHP moderna con architettura a layer, DDD/CQRS e attenzione alla sicurezza.

## Codice manutenibile e debito tecnico

Il punto di partenza: una codebase deve essere leggibile e comprensibile per l'intero team, incluso chi arriva quella settimana — e deve essere flessibile, perché i requisiti di business cambiano continuamente e non si può prevedere come. Scrivere codice completamente privo di bug è un obiettivo irrealistico (tranne in settori dove i bug hanno costi troppo alti da tollerare): l'obiettivo dovrebbe essere codice buono, leggibile, comprensibile, manutenibile. Sul debito tecnico, il libro cita direttamente [[../person/ward-cunningham|Ward Cunningham]]: "spedire codice la prima volta è come indebitarsi — un po' di debito velocizza lo sviluppo finché viene ripagato prontamente con una riscrittura; il pericolo è quando il debito non viene ripagato". Anche quando si sceglie consapevolmente di accumulare debito (per una scadenza importante), va scritto comunque il miglior codice possibile, limitando il debito solo a quanto strettamente necessario — nascondendolo dietro un'interfaccia, per rendere il refactoring futuro un cambio isolato invece che una riscrittura totale. Sulla riscrittura completa di un sistema legacy: quasi mai una buona idea per progetti grandi, perché richiede di mantenere il vecchio codice mentre si scrive il nuovo, duplicando lo sforzo per ogni nuova funzionalità richiesta nel frattempo — la Boy Scout Rule ("lascia il posto più pulito di come l'hai trovato") applicata sistematicamente concentra il miglioramento proprio sulle parti di codice che cambiano più spesso.

## Concetti fondamentali: astrazione, coupling, coesione, DRY

Il libro rispiega questi concetti con un'analogia efficace — un laptop il cui monitor viene alimentato attraverso il trackpad invece che direttamente: risparmia qualche centesimo, ma quando il trackpad viene aggiornato e quel connettore rimosso, il monitor smette di funzionare per un accoppiamento del tutto arbitrario. Sul principio DRY: la duplicazione da evitare è quella di *conoscenza*, non di codice che appare simile — codice simile che esprime comportamenti diversi non è vera duplicazione. Un'applicazione pratica citata spesso: i commenti che si limitano a descrivere cosa fa il codice violano DRY, perché duplicano un'informazione che il codice comunica già da solo.

## Metodi

Regole pratiche su naming (verbi descrittivi, coerenza nei termini usati per azioni simili — `findUser`/`fetchUser`/`retrieveUser` scegline uno), numero di parametri (ogni parametro aggiunge carico mentale; raggrupparli in un oggetto solo se sono davvero coesi — se è difficile trovare un nome per l'oggetto risultante, probabilmente non appartengono insieme), parametri flag (da evitare: `sendNotification($msg, $asEmail)` va sempre spezzato in due metodi distinti, perché il flag è conoscenza che chiamante e metodo devono condividere implicitamente), dichiarazioni di tipo (documentazione vivente del contratto del metodo), visibilità (default privato — esporre solo il comportamento che serve davvero all'esterno), dimensione (10 righe l'ideale, 20 il campanello d'allarme, mai più di un livello di indentazione). Sul principio **Command-Query Separation**, con una citazione di Bertrand Meyer — "porre una domanda non dovrebbe cambiare la risposta" — una query restituisce sempre lo stesso risultato senza effetti collaterali, un comando cambia stato e non restituisce nulla (con l'eccezione pragmatica, non dogmatica, di un metodo che crea un record e ne restituisce l'ID).

## Oggetti e principi SOLID

Sull'ereditarietà: **vietarla di default**. L'OOP non riguarda l'ereditarietà — c'è persino il principio "composition over inheritance". Il trucco pratico per capire se ha senso: "sto dicendo che B è un A. Ha senso?" (una sedia a rotelle è una sedia: ok; un divano è una sedia: no). Per questo il libro raccomanda di dichiarare tutte le classi `final` per default: rimuovere `final` in futuro, se serve davvero estendere, è facile; il contrario è molto più difficile. Il libro passa in rassegna i principi SOLID e GRASP come strumenti didattici e di riferimento, e introduce **YAGNI** ("you ain't gonna need it") come contrappeso necessario al DRY: alcuni sviluppatori si infatuano del DRY e creano soluzioni riusabili anche quando non serve — l'anticipazione del futuro è una ricetta per il disastro; scrivere codice per il problema attuale, nient'altro, mantenendo però il refactoring facile per quando il futuro arriverà davvero.

## Dependency Injection e interfacce

Il tutorial mostra la differenza fra istanziare direttamente una dipendenza nel costruttore (accoppiamento forte, difficile da cambiare) e chiederla come parametro (dependency injection, inversione del controllo). Un punto stilistico specifico, con citazione di [[../person/robert-c-martin|Robert C. Martin]] ("nessun client dovrebbe essere costretto a dipendere da metodi che non usa"): **mai** dare il suffisso `Interface` a un'interfaccia — è una fuga di dettaglio implementativo che accoppia il codice client a "un'interfaccia" invece che a "una classe", e porta a nomi scomodi (la prima implementazione di `ClassInterface` diventa `Class`, rendendola artificialmente speciale rispetto alle altre). Meglio: `interface TemplateRenderer` → `class TwigTemplateRenderer`. Da evitare: controller astratti che gestiscono le dipendenze per conto delle sottoclassi, e i Service Locator, che nascondono le vere dipendenze di una classe invece di dichiararle esplicitamente.

## Architettura a layer, CQRS, entity e value object

Il libro adotta un'architettura a layer — nota anche come ports & adapter, hexagonal, onion o clean architecture, tutti nomi per la stessa idea — con presentation layer (il confine fra il mezzo di accesso, es. HTTP, e l'applicazione), application layer (dal vocabolario DDD: le interazioni possibili fra mondo esterno e applicazione — query e comandi), e domain layer (la logica di business vera e propria). Sui **value object**: incapsulano un valore (semplice o composito) garantendo tipizzazione forte, ordine dei parametri inequivocabile, e validazione integrata nello stato — `new Coordinates(50, 25)` invece di due interi anonimi. Sulla distinzione **Entity vs Data Class**: un'entity ha un filo di continuità garantito da un ID univoco anche quando tutti i suoi attributi cambiano; una data class no — cambiando un attributo, diventa un oggetto diverso (`Money` è tipicamente una data class, a meno che non si stia scrivendo il software di una zecca di stato, dove ogni banconota ha un ID unico).

Sul **CQRS** (Command-Query Responsibility Segregation): un comando è un value object immutabile con nome imperativo, gestito da un command handler dedicato; nei progetti più grandi si passa attraverso un **command bus**, un livello di indirezione che abilita transazioni, retry, logging, asincronia. Sull'uso degli UUID come identificatori: il vantaggio principale non è evidente a prima vista — poter generare l'ID *prima* di persistere sul database permette di costruire oggetti immutabili fin dalla creazione, invece di dover prima creare l'oggetto senza ID e poi assegnarglielo dopo il salvataggio.

## Sicurezza

Sezioni pratiche su SQL injection (sempre query builder e parametri nominati, mai concatenazione), password hashing (mai crittografia, sempre hash con salt — `password_hash()` di PHP usa Bcrypt e aggiunge il salt di default), prevenzione del brute force (rallentare con `sleep()` non funziona contro attacchi multi-thread; la soluzione pragmatica proposta è il CAPTCHA dopo un certo numero di tentativi falliti — non infallibile, ma rende l'attacco economicamente costoso, che è l'obiettivo realistico contro un attaccante con risorse illimitate), e autorizzazione (RBAC come approccio base — controllare sempre il *permesso*, non il *ruolo* — con ABAC come alternativa più flessibile ma più complessa per casi che lo richiedono davvero).

## Vedi anche

- [[../person/ward-cunningham|Ward Cunningham]]
- [[../person/robert-c-martin|Robert C. Martin]]
- [[../person/bertrand-meyer|Bertrand Meyer]]
- [[../software/symfony|Symfony]]
- [[domain-driven-design-distilled|Domain-Driven Design: Distilled]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/professional-php-building-maintainable-and-secure/content.md`
