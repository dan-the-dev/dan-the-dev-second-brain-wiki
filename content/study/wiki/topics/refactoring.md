---
title: "Refactoring"
type: topic
id: refactoring
updated: 2026-08-20
---

# Refactoring

## Cos'è il refactoring, e cosa non è

Il refactoring è la tecnica disciplinata per migliorare la struttura interna di codice esistente **senza cambiarne il comportamento osservabile**. Non è "riscrivere", non è "sistemare un po' le cose mentre si aggiunge una funzionalità": è un processo di trasformazioni piccole, ciascuna verificabile, che nel loro insieme spostano il design del codice verso una forma migliore mantenendo intatto ciò che il codice fa dal punto di vista di chi lo usa. Il testo di riferimento su questo tema — *Refactoring: Improving the Design of Existing Code* di [[../content/person/martin-fowler-software-engineer|Martin Fowler]] — resta il catalogo più autorevole e sistematico della disciplina, benché gli appunti di lettura raccolti in questo archivio per il libro stesso siano andati perduti nel processo di studio: la sintesi che segue si appoggia perciò sul contesto pubblico verificabile sul libro, non su appunti personali di lettura[^refactoring-book].

> [!info] Approfondimento aggiunto in fase di compilazione
> La prima edizione del libro è del 1999, con esempi in Java; la seconda edizione, pubblicata nel 2018, è stata riscritta da zero — non un semplice aggiornamento — con esempi in JavaScript, per riflettere l'uscita del linguaggio dall'ambito classi-centrico verso strutture come funzioni di prima classe e moduli. Delle 68 voci del catalogo originale, la seconda edizione ne mantiene tutte tranne 10 e ne aggiunge 17 nuove; dalla seconda edizione, il catalogo completo è mantenuto anche online su refactoring.com, con il volume cartaceo che ne offre una selezione curata.
>
> La struttura del libro segue sempre lo stesso schema in entrambe le edizioni: un esempio esteso iniziale che mostra il refactoring "in azione" su un pezzo di codice reale; un capitolo di principi generali (cos'è il refactoring, perché farlo, quando non farlo); un capitolo dedicato ai **code smell** — i segnali che indicano che una porzione di codice ha bisogno di refactoring, fra cui Duplicated Code, Long Method, Large Class, Long Parameter List, Divergent Change, Shotgun Surgery, Feature Envy, Data Clumps e Primitive Obsession; un'introduzione al ruolo dei test automatici come rete di sicurezza indispensabile per rifattorizzare senza rompere nulla; e infine il vero e proprio catalogo di refactoring, organizzato come materiale di riferimento — da consultare quando serve, non da leggere in sequenza — con ogni voce corredata di nome proprio, motivazione, meccanica passo-passo ed esempio. Fra le voci più note del catalogo: Extract Function/Method, Inline Function, Extract Variable, Rename, Move Function, Extract Class, Replace Conditional with Polymorphism.
> Fonte: [martinfowler.com — The Second Edition of "Refactoring"](https://martinfowler.com/articles/refactoring-2nd-ed.html) · [martinfowler.com/books/refactoring.html](https://www.martinfowler.com/books/refactoring.html)

## Il refactoring come parte del ciclo, non fase separata

Il punto su cui converge il resto del percorso di studio — sviluppato in modo molto più ricco nel topic [[tdd|TDD]], nella parte dedicata a *Test-Driven Development: By Example* di Kent Beck e ad *Agile Technical Practices Distilled* — è che il refactoring non è una fase separata da pianificare a parte, ma il terzo tempo di ogni ciclo di sviluppo disciplinato: **Red, Green, Refactor**. Si scrive un test che fallisce, si scrive il codice minimo per farlo passare, e solo a quel punto si migliora il design del codice appena scritto, mantenendo i test verdi durante tutto il processo.

Il primo passo del refactoring, in questa lettura, è quasi sempre cercare duplicazione, seguendo il principio DRY (*Don't Repeat Yourself*) — ma con un'avvertenza precisa: **un'astrazione sbagliata è più difficile da rimuovere di codice duplicato**. Da qui la *Rule of Three*: estrarre un'astrazione solo alla terza occorrenza della stessa duplicazione, non alla prima né alla seconda, per essere ragionevolmente sicuri che sia quella giusta. La regola pratica che vale la pena portarsi dietro è restare nel verde mentre si rifattorizza: se serve rifattorizzare codice non coperto da test, prima si aggiungono i test, poi si rifattorizza, mai il contrario — e conviene fare commit il più spesso possibile, ogni volta che una piccola modifica ha successo e i test restano verdi, in modo da poter tornare indietro all'ultimo commit "verde" in caso di blocco. Una stima citata in quel percorso attribuisce l'80% del valore del refactoring al miglioramento della leggibilità, e solo il 20% a un cambiamento reale di design — motivo per cui, quando il codice non è chiaro, conviene sempre rifattorizzare prima per la leggibilità e solo dopo per il design.

Il pattern language del TDD contribuisce con un proprio repertorio di tecniche di refactoring più specifiche, che vanno oltre il catalogo generale di Fowler. *Reconcile Differences* affronta il caso, molto comune nella pratica, di due pezzi di codice simili ma non identici: invece di unificarli con un salto netto (rischioso), li si avvicina gradualmente finché non diventano identici, e solo allora si uniscono — una tecnica che riduce drasticamente il rischio dei refactoring "a scatola nera" che richiedono di seguire mentalmente flussi di controllo e valori di dati complessi. *Migrate Data* risolve il problema di spostarsi da una rappresentazione a un'altra duplicando temporaneamente il dato, con due percorsi simmetrici — dall'interno verso l'esterno o viceversa — entrambi articolati in cinque passi molto meccanici che minimizzano il rischio di rompere qualcosa a metà cambio. Extract Method, Inline Method, Extract Interface, Move Method, Method Object, Add Parameter e Method Parameter to Constructor Parameter completano un repertorio di operazioni atomiche, ciascuna con una propria meccanica passo-passo pensata per essere eseguita in sicurezza anche manualmente, senza il supporto di un IDE[^tdd-topic].

## Sintesi

Il refactoring, in questo percorso di studio, non ha un singolo testo compilato in profondità — il libro di Fowler resta il riferimento bibliografico canonico, con il suo catalogo di code smell e tecniche nominate, ma la comprensione operativa più ricca è arrivata attraverso il topic [[tdd|TDD]], che tratta il refactoring non come fase isolata da programmare a parte, ma come terzo tempo indissociabile di ogni ciclo Red-Green-Refactor. È un buon esempio di come, in questo archivio, la conoscenza su un argomento possa emergere più da come viene *usato* dentro un'altra disciplina (il TDD) che dal testo dedicato che ne porta il nome nel titolo.

## Indice delle fonti

[^refactoring-book]: Martin Fowler, *Refactoring: Improving the Design of Existing Code*, Addison-Wesley — [[../content/book/refactoring-improving-the-design-of-existing-code|pagina dedicata]]
[^tdd-topic]: Sezione "Refactoring come parte integrante del ciclo, non fase separata" del topic [[tdd|TDD]], basata su Kent Beck, *Test-Driven Development: By Example*, e su Pedro M. Santos, Marco Consolaro, Alessandro Di Gioia, *Agile Technical Practices Distilled*

## Vedi anche

- Contenuti fonte: [[../content/book/refactoring-improving-the-design-of-existing-code|Refactoring: Improving the Design of Existing Code]]
- Topic collegati: [[tdd|TDD]] · [[clean-code|Clean Code]] · [[technical-excellence|Technical Excellence]]
- Persone: [[../content/person/martin-fowler-software-engineer|Martin Fowler]]
