---
title: "Agile Technical Practices Distilled"
type: book
author: [Pedro M. Santos, Marco Consolaro, Alessandro Di Gioia]
topics: [agile-software-development, ddd, tdd, technical-excellence]
raw_source: raw/knowledge/book/agile-technical-practices-distilled-a-learning/content.md
updated: 2026-08-19
---

# Agile Technical Practices Distilled

**Pedro M. Santos, Marco Consolaro, Alessandro Di Gioia** · Libro letto integralmente

Sottotitolo: *A learning journey in technical practices and principles of software design*. È probabilmente il contenuto più denso dell'intero archivio: attraversa in sequenza pairing, TDD, refactoring, code smells, test doubles, legacy code, design pattern, principi di design (SOLID e oltre), Domain-Driven Design e chiude sui 12 principi Agile. Ogni capitolo termina con una sezione "Suggested books" — di fatto una bibliografia ragionata che vale la pena tenere come backlog di letture future.

## Pair Programming

Il pair programming serve ad accorciare il ciclo di feedback: si modifica il software mentre lo si scrive, discutendo le scelte di design in tempo reale. I due ruoli — **driver** (scrive) e **navigator** (guarda da un livello strategico, fa domande, revisiona) — vanno alternati per mantenerne alta la qualità. Tecniche di alternanza:

- **Chess clock** — cambio a tempo, si abbina bene al Pomodoro
- **Ping pong / popcorn** — alternanza continua scrivendosi i test a vicenda
- **Strong-style pairing** (Llewellyn Falco) — il driver esegue esattamente ciò che dice il navigator, sono ammesse solo domande di chiarimento

Letture suggerite: *Extreme Programming Explained* (Kent Beck), *The Clean Coder* (Robert C. Martin), *The Software Craftsman* (Sandro Mancuso).

## Test-Driven Development

Approccio classico (Detroit/Chicago School, Kent Beck), fondato sulle **3 leggi del TDD**: non scrivere più codice di test di quanto basti a farlo fallire; non scrivere codice di produzione se non per far passare un test fallito; non scrivere più codice di produzione di quanto basti a far passare quel test.

Il ciclo **Red → Green → Refactor** non è completo senza il refactor: il primo passo è cercare duplicazione (principio DRY), ma senza rimuoverla troppo presto — un'astrazione sbagliata è più difficile da eliminare del codice duplicato. Da qui la **Rule of Three**: estrai un'astrazione solo alla terza occorrenza della duplicazione.

Le tre strategie per passare dal rosso al verde (Fake It, Obvious Implementation, Triangulation) sono le stesse di *Test-Driven Development: By Example* — vedi [[test-driven-development-by-example|la pagina dedicata]] per l'approfondimento completo. Da segnalare qui la sistematizzazione in **arrange / act / assert**, con il consiglio pratico di scrivere prima l'assert e "lavorare all'indietro" per arrivare al test minimo necessario.

Cinque proprietà di un buon unit test: **Fast, Isolated, Repeatable, Self-validating, Timely** (talvolta riassunte con l'acronimo FIRST).

## Transformation Priority Premise

La Transformation Priority Premise dà un ordine di priorità alle trasformazioni di codice, dalla più semplice alla più complessa (da "nessuna implementazione → return null" fino a "variabile → mutazione"): quando si passa un test o si rifattorizza, ci si dovrebbe attenere alla trasformazione più semplice possibile finché resta sufficiente, per evitare di introdurre complessità non necessaria.

## Object Calisthenics

Un insieme di vincoli — non regole su cosa fare, ma su cosa *non* fare — per portare alle estreme conseguenze i principi dell'OOP: un solo livello di indentazione per metodo, evitare `else`, incapsulare i tipi primitivi, prime-class collection, niente getter/setter, un punto per riga (evitare *train wreck*), niente abbreviazioni, entità piccole, non più di due variabili di istanza per classe, tutte le classi devono avere stato. Le euristiche di fondo sono **Tell, Don't Ask** e la **Legge di Demeter**.

## Refactoring

*"Refactor: non perché sai già dove sta l'astrazione, ma perché la vuoi trovare"* (Martin Fowler). Il refactoring cambia il design senza cambiare il comportamento, ed è possibile solo con i test sempre verdi. L'80% del refactoring migliora la leggibilità, il 20% cambia il design. Regola pratica: **resta nel verde durante il refactoring**, **fai commit il più spesso possibile**, **rifattorizza prima la leggibilità, poi il design**.

Pattern degno di nota: il **Parallel Change** (expand → migrate → contract) per implementare breaking change in sicurezza, copiando prima il codice esistente, dando tempo ai chiamanti di migrare, e rimuovendo il vecchio solo alla fine.

Letture suggerite: *Refactoring* (Fowler) — vedi anche il contenuto omonimo già in archivio — e *Refactoring Workbook* (William C. Wake).

## Code Smells

Gli *smell* sono sintomi, non il problema in sé: segnalano decisioni di design da rivedere. Due macro-categorie:

- **Design smell** (alto livello, tardivi da individuare): Rigidity, Fragility, Immobility, Viscosity, Needless Complexity, Needless Repetition, Opacity.
- **Code smell** (più granulari): Bloaters (Long Method, Large Class, Primitive Obsession, Long Parameter List, Data Clumps), Couplers (Feature Envy, Inappropriate Intimacy, Message Chains, Middleman), Object-Orientation Abusers (Switch Statements, Temporary Fields, Refused Bequest), Change Preventers (Divergent Change, Shotgun Surgery, Parallel Inheritance Hierarchies), Dispensables (Comments, Duplicated Code, Lazy/Data Class, Dead Code, Speculative Generality).

Tre smell da tenere sempre d'occhio perché generano a cascata molti altri: **Primitive Obsession**, **Feature Envy**, **Message Chain**.

## Test Doubles

I Test Double (stunt double dei test) isolano il codice sotto test dalle sue dipendenze. La distinzione utile viene dal **Command-Query Separation**: gli **stub/fake** sostituiscono metodi query, i **mock/spy** sostituiscono metodi command. Regole guida: usa i double solo per classi che possiedi (per librerie di terze parti, scrivi un thin wrapper e fai il double di quello), verifica il minimo indispensabile, non aggiungere comportamento reale ai double, limita i double ai collaboratori diretti (Legge di Demeter).

Letture suggerite: *Growing Object-Oriented Software, Guided by Tests* (Freeman, Pryce), *xUnit Test Patterns* (Meszaros).

## Testing Legacy Code

"Codice senza test è codice legacy, indipendentemente da quanto sia scritto bene." Tecniche per introdurre test in codice esistente fortemente accoppiato: creare un **SEAM** per rompere le dipendenze, usare l'ereditarietà per isolare un comportamento con un metodo `protected virtual` da sovrascrivere nei test, scrivere **characterization test** (che documentano il comportamento reale, non quello desiderato) e, quando input/output sono ben definiti, la tecnica del **Golden Master**.

Lettura suggerita: *Working Effectively with Legacy Code* (Michael C. Feathers).

## Design Patterns

I design pattern sono un vocabolario condiviso per problemi ricorrenti, ma vanno sempre adattati al contesto — non applicati "out of the box", e mai usati come nome dei metodi. Il libro riassume in forma tabellare le tre grandi famiglie (creazionali, comportamentali, strutturali) con la relativa "domanda-problema → soluzione".

Letture suggerite: *Design Patterns* (Gang of Four/Erich Gamma), *Head First Design Patterns*, *Patterns of Enterprise Application Architecture* (Fowler), *Refactoring to Patterns* (Kerievsky).

## Cohesion & Coupling

**Coupling** misura l'interdipendenza tra componenti (dovrebbe essere il più basso possibile, ma non oltre) — con sette varianti di *interaction coupling* (message, data, stamp, control, external, common, content, in ordine crescente di pericolosità) più l'*inheritance coupling*, il tipo più forte, da usare solo per vere relazioni "is-a" (Liskov).

**Cohesion** misura quanto le responsabilità di un modulo siano focalizzate e correlate (il più alta possibile, ma non oltre): a livello di classe si distinguono coesione ideale, mixed role, mixed domain, mixed instance; a livello di metodo, coesione funzionale (ideale), sequenziale, comunicazionale, procedurale, temporale, logica, coincidentale.

## SOLID Principles ++

Il capitolo ripercorre i cinque principi SOLID con esempi minimi (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) e ne aggiunge due meno noti: il **Balanced Abstraction Principle** (tutte le istruzioni di un metodo allo stesso livello di astrazione) e il **Least Astonishment Principle** (il design deve rispettare le aspettative di chi legge il codice — il "principio del WTF").

Letture suggerite: *Clean Code* (Robert C. Martin), *Object-Oriented Software Construction* (Bertrand Meyer), *Structured Analysis and Systems Specification* (Tom DeMarco).

## Connascence

La **connascence** (co+nascita) unifica coesione e accoppiamento in un concetto più esaustivo: due elementi sono connascenti se un cambiamento nell'uno richiede un cambiamento nell'altro. Tre dimensioni per misurarla — **grado** (quante entità coinvolte), **località** (quanto sono vicine), **forza** (quanto è probabile/difficile il cambiamento compensativo). Delle dieci categorie elencate (name, type, position, value, meaning, algorithm, execution order, timing, identity, manual task), solo **name** e **type** sono considerate connascence "buone", cioè accettabili nel proprio codice.

## The 4 Elements of Simple Design

In ordine di priorità: **passa i test**, **minimizza la duplicazione**, **massimizza la chiarezza**, **ha meno elementi possibile**. Lettura suggerita: *Understanding the Four Rules of Simple Design* (Corey Haines).

## Outside-In Development

Si passa da "costruire le cose per bene" a "costruire le cose giuste": la **TDD London School / Outside-In TDD** (in contrapposizione al classic TDD) parte dall'interfaccia pubblica verso l'interno, usando mock per abbozzare collaboratori non ancora implementati. Il **double-loop TDD** applica il ciclo TDD anche a livello di acceptance test, con un ciclo esterno lento (acceptance) e uno interno veloce (unit).

> [!info] Approfondimento aggiunto in fase di compilazione
> Questo approccio è descritto in modo più esteso nel libro a cui il capitolo stesso rimanda come lettura consigliata, *Growing Object-Oriented Software, Guided by Tests* di Steve Freeman e Nat Pryce (2009) — considerato il testo di riferimento per la "London School" del TDD, distinta dalla scuola "classica" di Kent Beck per l'uso sistematico dei mock come strumento di design invece che solo di isolamento.
> Fonte: [Growing Object-Oriented Software — sito ufficiale](http://www.growing-object-oriented-software.com/)

## Behavior-Driven Development

Il *poka yoke* (mistake-proofing) distingue tra **mistake** (errore, inevitabile) e **defect** (errore che arriva al cliente). Tre categorie di difetto — requisiti corretti ma codice sbagliato, requisiti sbagliati ma codice corretto, requisiti fraintesi — di cui solo la prima è risolvibile con l'automazione dei test; la terza richiede comunicazione, da cui il principio Agile della conversazione faccia a faccia. Le user story sono segnaposto per una conversazione, non specifiche complete. Il **walking skeleton** è una minima implementazione end-to-end che collega i componenti architetturali principali.

## Domain-Driven Design

Il dominio (business) è il cuore del sistema: più ci si avvicina al modello di dominio, meno compromessi di design si dovrebbero accettare. Concetti chiave: **knowledge crunching** (distillare la conoscenza di dominio in collaborazione con gli esperti), **bounded context** (i sottosistemi in cui si raggruppano le attività per tenere sotto controllo l'entropia complessiva, evitando sia troppa coesione — un unico bounded context enorme — sia troppo accoppiamento — un bounded context per ogni attività), **domain event** (eventi rilevanti a livello dell'intera organizzazione, non solo locale).

Sync vs Async: le query si adattano bene alla comunicazione sincrona (espongono dati in sola lettura), i command a quella asincrona (richiedono più tempo, spesso conseguenza di un evento).

Bibliografia estesa citata qui (ventuno titoli): tra i più rilevanti, *Domain-Driven Design: Tackling Complexity in the Heart of Software* (Eric Evans) e *Implementing Domain-Driven Design* (Vaughn Vernon) — quest'ultimo autore anche di *Domain-Driven Design Distilled*, già presente in questo archivio.

## The 12 Agile Principles

Il capitolo chiude riportando per intero i 12 principi del Manifesto Agile, dalla consegna anticipata e continua di software di valore fino alla riflessione periodica del team sul come migliorare.

## Collegamenti

- Topic: [[../topics/agile-software-development|Agile Software Development]] · [[../topics/ddd|DDD]] · [[../topics/tdd|TDD]] · [[../topics/technical-excellence|Technical Excellence]]
- Contenuti collegati sul TDD: [[test-driven-development-by-example|Test-Driven Development: By Example]] · [[breaking-through-that-first-tdd-block|Breaking Through That First TDD Block]] · [[../conference/tdd-conference-2021|TDD Conference 2021]]
- Autori: Pedro M. Santos, Marco Consolaro, Alessandro Di Gioia

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/agile-technical-practices-distilled-a-learning/content.md`
