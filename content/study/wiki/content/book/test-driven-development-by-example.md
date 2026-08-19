---
title: "Test-Driven Development: By Example"
type: book
author: Kent Beck
topics: [tdd, agile-software-development]
raw_source: raw/knowledge/book/test-driven-development-by-example/content.md
updated: 2026-08-19
---

# Test-Driven Development: By Example

**Kent Beck** · Addison-Wesley Professional, novembre 2002 · Libro letto integralmente

> [!info] Approfondimento aggiunto in fase di compilazione
> Il libro è stato pubblicato da Addison-Wesley Professional nel novembre 2002 (ISBN 0321146530), all'interno della Addison-Wesley Signature Series curata dallo stesso Beck. È il testo che ha reso mainstream la pratica del Test-Driven Development, distillando esperienze già presenti nella comunità Smalltalk/Extreme Programming degli anni '90.
> Fonte: [O'Reilly — Test-Driven Development: By Example](https://www.oreilly.com/library/view/test-driven-development/0321146530)

## Perché questo libro

L'obiettivo dichiarato del libro è semplice da enunciare e difficile da raggiungere: **codice pulito che funziona**. Beck lo costruisce attorno a due regole minime — *scrivi nuovo codice solo se un test automatico è fallito* ed *elimina la duplicazione* — da cui derivano un ordine di lavoro preciso (rosso, verde, refactor) e un intero repertorio di pattern per applicarlo in pratica. Il libro è diviso in due parti pratiche (l'esempio del Money e uno più orientato agli xUnit) più una terza parte di riflessione ("Mastering TDD") che ne discute i limiti e le implicazioni.

## Il ciclo e i due esempi guidati

Il ciclo che il libro insegna a interiorizzare è:

1. Aggiungi rapidamente un test
2. Esegui tutti i test e osserva quello nuovo fallire
3. Fai una piccola modifica
4. Esegui tutti i test e osservali passare
5. Fai refactoring per rimuovere la duplicazione

Il primo esempio guidato (il "Money example", con l'esercizio disponibile su [questo repository](https://github.com/dan-the-dev/tdd-by-example-multi-currency)) mostra quanto possano essere piccoli e "brutti" i passi intermedi, e quanto spesso vadano eseguiti i test. Il punto centrale che il libro ribadisce più volte: **il vero problema non è la duplicazione, è la dipendenza** — la duplicazione ne è solo il sintomo, ed è per questo che eliminarla funziona come euristica per ridurre l'accoppiamento.

Due strategie per portare rapidamente la barra al verde:

- **Fake It** — restituisci una costante, poi trasformala gradualmente in un'espressione reale
- **Obvious Implementation** — se la soluzione è ovvia, scrivila direttamente
- **Triangulation** — quando né Fake It né Obvious Implementation danno sicurezza, aggiungi un secondo test che forzi una generalizzazione

## I pattern per il TDD

Il libro raccoglie i pattern in quattro famiglie: pattern per il TDD in generale (Isolated Test, Test List, Test First, Assert First, Evident Data), pattern per la "barra rossa" (One Step Test, Starter Test, Explanation Test, Learning Test, Regression Test, e i più umani Break e Do Over), pattern di testing (Mock Object, Self Shunt, Log String, Crash Test Dummy) e pattern per la "barra verde" (Fake It, Triangulate, Obvious Implementation, One to Many).

Alcuni dei più utili nella pratica quotidiana:

- **Test List** — prima di iniziare, elenca tutti i test che sai di dover scrivere, distinguendo una lista "now" da una "later"; aggiornala mentre impari di più sul problema.
- **Child Test** — se scopri di aver scritto un test troppo grande per essere risolto in un solo passo, scomponilo in test più piccoli invece di forzare il passo.
- **Regression Test** — davanti a un difetto, scrivi prima il test più piccolo possibile che lo riproduce; chiediti sempre perché quel test non era già stato scritto.
- **Broken Test / Clean Check-In** — lascia l'ultimo test rotto quando lavori da solo (è un segnalibro naturale per riprendere), ma lascia sempre tutti i test verdi prima di un check-in in team.

## Refactoring: i pattern "grandi"

La sezione sul refactoring copre operazioni più ampie di quelle di Fowler: Reconcile Differences (unifica gradualmente due pezzi di codice simili prima di eliminarli), Isolate Change, Migrate Data (duplica temporaneamente il dato durante una migrazione di rappresentazione), Extract/Inline/Move Method, Extract Interface, Method Object, Add Parameter, Method Parameter to Constructor Parameter.

## Mastering TDD: i limiti onesti della pratica

La parte più interessante per chi il TDD lo pratica già da tempo è la terza, dove Beck risponde direttamente alle obiezioni più comuni:

- **"TDD non garantisce un buon design"** — ma riduce la Mean Time Between Failure e dà fiducia per rifattorizzare in sicurezza.
- **Quanti test bastano?** — "scrivi test finché la paura non si trasforma in noia": è un criterio soggettivo basato su fiducia, non un numero fisso.
- **Si può fare TDD su sistemi enormi?** — sì, perché eliminare la duplicazione produce oggetti piccoli testabili in isolamento indipendentemente dalla dimensione complessiva del sistema.
- **TDD e Extreme Programming** — Beck collega esplicitamente il ciclo rosso/verde/refactor alle altre pratiche XP: il pairing beneficia dei test come "materiale di conversazione", l'integrazione continua diventa più frequente, il design semplice emerge quasi automaticamente da "scrivi solo ciò che serve a far passare il test".

Una frase riassume bene il paradosso centrale del libro: *"Code for tomorrow, design for today"* — l'opposto del consiglio tradizionale — perché non pensare al futuro del codice, paradossalmente, lo rende più adattabile in futuro.

## Collegamenti

- Topic: [[../topics/tdd|TDD]] · [[../topics/agile-software-development|Agile Software Development]]
- Altri contenuti sullo stesso argomento: [[breaking-through-that-first-tdd-block|Breaking Through That First TDD Block]] · [[../book/agile-technical-practices-distilled-a-learning|Agile Technical Practices Distilled]] · [[../conference/tdd-conference-2021|TDD Conference 2021]] · [[../video/who-should-enable-tdd-scrum-master-line-manager|Who Should Enable TDD?]]
- Concetto collegato: [[../concept/test-driven-development|Test-driven development (Wikipedia)]]
- Autore: [[../person/kent-beck|Kent Beck]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/test-driven-development-by-example/content.md`
- Libro: Kent Beck, *Test-Driven Development: By Example*, Addison-Wesley Professional, 2002
