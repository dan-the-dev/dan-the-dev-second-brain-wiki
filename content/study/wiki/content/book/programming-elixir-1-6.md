---
title: "Programming Elixir 1.6"
type: book
author:
  - "Dave Thomas"
topics: ["elixir", "software-development"]
status: done
study:
  method: full_reading
  started_at: "2021-08-23"
  completed_at: "2021-09-17"
raw_source: raw/knowledge/book/programming-elixir-1-6/content.md
updated: 2026-08-20
---

# Programming Elixir 1.6

**Autore: Dave Thomas**

Introduzione a Elixir costruita attorno a un cambio di paradigma dichiarato fin dal primo capitolo ("prendi la pillola rossa"): **programmare significa trasformare dati**, non modellare gerarchie di classi con stato e comportamento. Il modello di riferimento è la command line Unix: piccoli strumenti focalizzati, componibili arbitrariamente, dove ognuno trasforma un input in un output (`grep Elixir *.pml | wc -l`) — flessibile, affidabile, naturalmente parallelo, perché `wc` inizia a elaborare l'output di `grep` mentre questo lo sta ancora producendo. Le funzioni in Elixir giocano lo stesso ruolo dei comandi Unix: più sono piccole e focalizzate, più flessibilità e parallelismo si ottiene gratis — l'idea di trasformazione è il cuore della programmazione funzionale, una funzione trasforma i suoi input nel suo output. Questo potere ha un prezzo: bisogna disimparare molto di ciò che si sa sulla programmazione tradizionale e sentirsi per un po' completamente principianti — ma il libro promette che è anche divertente, e che si finisce per pensare ai problemi in modo diverso, scrivendo codice che fa cose sorprendenti con pochissimo sforzo.

Il libro dichiara fin da subito, come manifesto, sette modi in cui invita a "pensare diversamente": l'orientamento agli oggetti non è l'unico modo per progettare codice; la programmazione funzionale non deve essere per forza complessa o matematica; le basi della programmazione non sono assegnazioni, if o cicli; la concorrenza non richiede necessariamente lock, semafori o monitor; i processi non sono per forza risorse costose; il meta-programming non è qualcosa aggiunto a posteriori a un linguaggio, ma può farne parte in modo nativo; e infine, anche se è lavoro, programmare dovrebbe restare divertente.

## Il match operator, non l'assegnazione

Il concetto probabilmente più spiazzante per chi arriva da linguaggi OOP: in Elixir il simbolo `=` **non è un'assegnazione, è un'asserzione** — il "match operator". `a = 1` funziona perché Elixir può rendere vero il lato sinistro uguagliandolo al destro (legando la variabile `a` al valore `1`). Ma poi `1 = a` funziona di nuovo (è un altro match, che passa, perché `a` vale già 1) — mentre `2 = a` genera un errore di match, perché equivale a scrivere `2 = 1`. Questo si estende al **pattern matching** strutturale: `[a, b, c] = [1, 2, 3]` lega ciascuna variabile al corrispondente elemento della lista, perché le due strutture combaciano — e lo stesso pattern funziona anche su liste innestate, dove una variabile può legarsi a un intero sottoelenco (`[a, b, c] = [1, 2, [3, 4, 5]]` lega `c` a `[3, 4, 5]`). Un valore letterale nel pattern deve corrispondere esattamente al valore corrispondente (`[a, 2, b] = [1, 2, 3]` combacia, ma `[a, 1, b] = [1, 2, 3]` fallisce), mentre una variabile si lega semplicemente al valore corrispondente. Il carattere underscore (`_`) ignora un valore nel match, come un jolly che dice "accetto qualunque cosa qui"; il caret (`^`) forza invece Elixir a usare il valore *esistente* della variabile invece di ri-legarla, così `[^a, a] = [2, 3]` combacia solo se il primo elemento è già uguale al valore corrente di `a`. Una variabile, una volta legata all'interno di un singolo match, mantiene quel valore per il resto del match stesso — da cui `[a, a] = [2, 2]` funziona ma `[a, a] = [4, 5]` fallisce; resta comunque possibile ri-legare la stessa variabile a un nuovo valore in un match *successivo*. Il pattern matching non si limita alle assegnazioni: è una parte centrale di Elixir, usata anche nelle condizioni, nelle chiamate di funzione e nell'invocazione delle funzioni stesse.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il libro cita Joe Armstrong, creatore di Erlang (di cui Elixir eredita la VM e il modello di pattern matching), che paragona il simbolo `=` a quello dell'algebra: scrivere `x = a + 1` non significa "assegna il valore di a+1 a x", significa asserire che x e a+1 hanno lo stesso valore — se conosci x puoi ricavare a, e viceversa. La differenza principale rispetto a Erlang è che Erlang non permette affatto di ri-legare una variabile a un nuovo valore in un match successivo, se quella variabile era già stata assegnata in precedenza — Elixir è più permissivo su questo punto. È un promemoria di quanto profondamente la sintassi familiare (`=`) possa nascondere semantiche completamente diverse fra paradigmi.

## Immutabilità: dati noti, non dati copiati

Il libro parte da un'osservazione familiare anche a chi non conosce la programmazione funzionale: in un linguaggio non funzionale, un codice come `count = 99; do_something_with(count); print(count)` ci si aspetta stampi `99` — e ci si sorprenderebbe se non lo facesse. Ma se `do_something_with` modificasse il valore di `count`, magari in un'esecuzione parallela, diventerebbe molto difficile garantire che il codice produca risultati corretti; con un array la situazione è ancora più delicata, perché è più facile trovare linguaggi che lo trattano per riferimento, rendendo più probabile che una funzione chiamata lo modifichi silenziosamente — in un'applicazione complessa, con più processi in esecuzione parallela capaci di modificare lo stesso array, diventa impossibile prevederne lo stato in un dato momento.

In Elixir tutti i valori sono immutabili: una volta che una variabile referenzia una lista, quella lista non cambierà mai (finché la variabile non viene ri-legata a un nuovo valore) — trasformare dati significa produrre una *nuova* struttura, mai modificare quella esistente. Il libro affronta di petto l'obiezione ovvia sull'efficienza: copiare dati sembra inefficiente, ma è vero il contrario. Poiché Elixir sa che i dati esistenti sono immutabili, può *riutilizzarli* nella costruzione di nuove strutture — `list2 = [4 | list1]` non copia gli elementi di `list1`, costruisce semplicemente una nuova lista con testa `4` e coda `list1`. Sul garbage collection: il codice Elixir gira su moltissimi processi leggeri, ciascuno col proprio heap — i dati dell'applicazione sono distribuiti fra questi processi, quindi ogni heap resta piccolo, il garbage collection è più veloce, e non serve affatto se il processo termina. Programmare con dati immutabili, una volta accettato il modello, diventa sorprendentemente semplice: non si capitalizza una stringa, si restituisce una *copia* capitalizzata — in un linguaggio funzionale si trasformano sempre i dati, non si modificano mai sul posto.

## Vedi anche

*(nessuna entità collegata)*

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/programming-elixir-1-6/content.md`
