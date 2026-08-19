---
title: "Programming Elixir 1.6"
type: book
author:
  - "Dave Thomas"
topics: ["elixir", "software-development"]
status: done
study:
  method: full_reading
raw_source: raw/knowledge/book/programming-elixir-1-6/content.md
updated: 2026-08-19
---

# Programming Elixir 1.6

**Autore: Dave Thomas**

Introduzione a Elixir costruita attorno a un cambio di paradigma dichiarato fin dal primo capitolo ("prendi la pillola rossa"): **programmare significa trasformare dati**, non modellare gerarchie di classi con stato e comportamento. Il modello di riferimento è la command line Unix: piccoli strumenti focalizzati, componibili arbitrariamente, dove ognuno trasforma un input in un output (`grep Elixir *.pml | wc -l`) — flessibile, affidabile, naturalmente parallelo, perché `wc` inizia a elaborare l'output di `grep` mentre questo lo sta ancora producendo. Le funzioni in Elixir giocano lo stesso ruolo dei comandi Unix: più sono piccole e focalizzate, più flessibilità e parallelismo si ottiene gratis. Il libro avverte onestamente: adottare questo modello richiede di disimparare molto di ciò che si sa sulla programmazione tradizionale, ma promette che diventa divertente.

## Il match operator, non l'assegnazione

Il concetto probabilmente più spiazzante per chi arriva da linguaggi OOP: in Elixir il simbolo `=` **non è un'assegnazione, è un'asserzione** — il "match operator". `a = 1` funziona perché Elixir può rendere vero il lato sinistro uguagliandolo al destro (legando la variabile `a` al valore `1`). Ma poi `1 = a` funziona di nuovo (è un altro match, che passa, perché `a` vale già 1) — mentre `2 = a` genera un errore di match, perché equivale a scrivere `2 = 1`. Questo si estende al **pattern matching** strutturale: `[a, b, c] = [1, 2, 3]` lega ciascuna variabile al corrispondente elemento della lista, perché le due strutture combaciano; un valore letterale nel pattern deve corrispondere esattamente, mentre una variabile si lega al valore corrispondente. Il carattere underscore (`_`) ignora un valore nel match, come un jolly; il caret (`^`) forza invece Elixir a usare il valore *esistente* della variabile invece di ri-legarla. Una variabile, una volta legata all'interno di un singolo match, mantiene quel valore per il resto del match stesso — da cui `[a, a] = [2, 2]` funziona ma `[a, a] = [4, 5]` fallisce.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il libro cita Joe Armstrong, creatore di Erlang (di cui Elixir eredita la VM e il modello di pattern matching), che paragona il simbolo `=` a quello dell'algebra: scrivere `x = a + 1` non significa "assegna il valore di a+1 a x", significa asserire che x e a+1 hanno lo stesso valore — se conosci x puoi ricavare a, e viceversa. È un promemoria di quanto profondamente la sintassi familiare (`=`) possa nascondere semantiche completamente diverse fra paradigmi.

## Immutabilità: dati noti, non dati copiati

Elixir impone l'immutabilità di tutti i valori: una volta che una variabile referenzia una lista, quella lista non cambierà mai (finché la variabile non viene ri-legata a un nuovo valore) — trasformare dati significa produrre una *nuova* struttura, mai modificare quella esistente. Il libro affronta di petto l'obiezione ovvia sull'efficienza: copiare dati sembra inefficiente, ma è vero il contrario. Poiché Elixir sa che i dati esistenti sono immutabili, può *riutilizzarli* nella costruzione di nuove strutture — `list2 = [4 | list1]` non copia gli elementi di `list1`, costruisce semplicemente una nuova lista con testa `4` e coda `list1`. Sul garbage collection: il codice Elixir gira su moltissimi processi leggeri, ciascuno col proprio heap — i dati dell'applicazione sono distribuiti fra questi processi, quindi ogni heap resta piccolo, il garbage collection è più veloce, e non serve affatto se il processo termina. Programmare con dati immutabili, una volta accettato il modello, diventa sorprendentemente semplice: non si capitalizza una stringa, si restituisce una *copia* capitalizzata — in un linguaggio funzionale si trasformano sempre i dati, non si modificano mai sul posto.

## Vedi anche

*(nessuna entità collegata)*

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/programming-elixir-1-6/content.md`
