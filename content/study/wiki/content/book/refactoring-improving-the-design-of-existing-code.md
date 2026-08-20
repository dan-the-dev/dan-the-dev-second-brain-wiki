---
title: "Refactoring: Improving the Design of Existing Code"
type: book
author:
  - "Martin Fowler"
topics: ["agile-software-development", "refactoring", "technical-excellence"]
status: done
study:
  method: full_reading
  started_at: "2023-07-03"
  completed_at: "2023-07-28"
raw_source: raw/knowledge/book/refactoring-improving-the-design-of-existing-code/content.md
updated: 2026-08-20
---

# Refactoring: Improving the Design of Existing Code

**Autore: [[../person/martin-fowler-software-engineer|Martin Fowler]]**

Gli appunti grezzi catturati per questo libro non contengono contenuto sostanziale — solo titolo e la struttura vuota del template (Summary, Key Concepts, My Notes, My Takeaways, Connections, Sources sono tutti segnaposto senza testo), senza sintesi né concetti chiave estratti. Il libro è il testo di riferimento del refactoring come disciplina sistematica — tecniche nominate, descritte passo-passo, per migliorare la struttura del codice esistente senza cambiarne il comportamento osservabile — un tema che ricorre trasversalmente in molti altri contenuti di questo archivio (si vedano ad esempio [[clean-code-a-handbook-of-agile-software|Clean Code]] e [[implementing-lean-software-development|Implementing Lean Software Development]]). Per una sintesi effettiva del catalogo di refactoring servirà tornare al testo originale.

> [!info] Approfondimento aggiunto in fase di compilazione
> In assenza di appunti di lettura propri, ecco il contesto pubblico generale sul libro (non appunti personali di Daniele). La prima edizione è del 1999 (con esempi in Java); la seconda edizione, pubblicata nel 2018, è stata riscritta da zero — non un semplice aggiornamento — con esempi in JavaScript, per riflettere l'uscita del linguaggio dall'ambito classi-centrico verso strutture come funzioni di prima classe e moduli. Delle 68 voci del catalogo originale, la seconda edizione ne mantiene tutte tranne 10 e ne aggiunge 17 nuove; dalla seconda edizione, il catalogo completo è mantenuto anche online su refactoring.com, con il volume cartaceo che ne offre una selezione curata.
>
> La struttura del libro segue sempre lo stesso schema in entrambe le edizioni: un esempio esteso iniziale che mostra il refactoring "in azione" su un pezzo di codice reale; un capitolo di principi generali (cos'è il refactoring, perché farlo, quando non farlo); un capitolo dedicato ai **code smell** — i segnali che indicano che una porzione di codice ha bisogno di refactoring, come Duplicated Code, Long Method, Large Class, Long Parameter List, Divergent Change, Shotgun Surgery, Feature Envy, Data Clumps e Primitive Obsession, fra gli altri; un'introduzione al ruolo dei test automatici come rete di sicurezza indispensabile per rifattorizzare senza rompere nulla; e infine il vero e proprio catalogo di refactoring, organizzato come materiale di riferimento (da consultare quando serve, non da leggere in sequenza) più che come narrazione lineare — ogni voce con nome proprio, motivazione, meccanica passo-passo ed esempio (fra le più note: Extract Function/Method, Inline Function, Extract Variable, Rename, Move Function, Extract Class, Replace Conditional with Polymorphism).
> Fonte: [martinfowler.com — The Second Edition of "Refactoring"](https://martinfowler.com/articles/refactoring-2nd-ed.html) · [martinfowler.com/books/refactoring.html](https://www.martinfowler.com/books/refactoring.html)

## Vedi anche

- [[../person/martin-fowler-software-engineer|Martin Fowler]]
- [[clean-code-a-handbook-of-agile-software|Clean Code]]
- [[implementing-lean-software-development|Implementing Lean Software Development]]
- Topic: [[../../topics/refactoring|Refactoring]] · [[../../topics/technical-excellence|Technical Excellence]] · [[../../topics/tdd|TDD]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/refactoring-improving-the-design-of-existing-code/content.md`
