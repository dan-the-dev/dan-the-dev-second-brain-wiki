---
title: "Elixir"
type: topic
id: elixir
updated: 2026-08-20
---

# Elixir

## Un cambio di paradigma dichiarato

Elixir si presenta fin dal primo capitolo del suo testo di riferimento con un manifesto esplicito, incorniciato nel riferimento cinematografico a *Matrix* — "prendi la pillola rossa": **programmare significa trasformare dati**, non modellare gerarchie di classi con stato e comportamento[^elixir-book]. Il modello concettuale di riferimento è la command line Unix: piccoli strumenti focalizzati, componibili arbitrariamente, dove ognuno trasforma un input in un output — `grep Elixir *.pml | wc -l` è flessibile, affidabile, naturalmente parallelo, perché `wc` inizia a elaborare l'output di `grep` mentre questo lo sta ancora producendo. Le funzioni in Elixir giocano lo stesso ruolo dei comandi Unix: più sono piccole e focalizzate, più flessibilità e parallelismo si ottiene gratis — la trasformazione è il cuore della programmazione funzionale, una funzione trasforma i suoi input nel suo output.

Il testo dichiara sette modi concreti in cui invita a "pensare diversamente" rispetto alla programmazione tradizionale orientata agli oggetti: l'orientamento agli oggetti non è l'unico modo per progettare codice; la programmazione funzionale non deve essere per forza complessa o matematica; le basi della programmazione non sono necessariamente assegnazioni, `if` o cicli; la concorrenza non richiede necessariamente lock, semafori o monitor; i processi non sono per forza risorse costose; il meta-programming non è qualcosa aggiunto a posteriori a un linguaggio, ma può farne parte in modo nativo; e infine, anche se è lavoro, programmare dovrebbe restare divertente. Questo cambio di paradigma ha un prezzo dichiarato apertamente: bisogna disimparare molto di ciò che si sa sulla programmazione tradizionale e sentirsi per un po' completamente principianti[^elixir-book].

> [!info] Approfondimento aggiunto in fase di compilazione
> Elixir è stato creato da José Valim, sviluppatore brasiliano, che ne ha pubblicato la prima versione ufficiale (0.5) nel maggio 2012 dopo un prototipo iniziale nell'aprile 2011. Il problema di partenza che lo ha spinto a progettarlo era concreto: lavorando su progetti Ruby on Rails, si scontrava ripetutamente con bug di race condition difficili da riprodurre, tipici dei sistemi multi-core dove più core tentano di modificare la stessa area di memoria o la stessa risorsa contemporaneamente — un problema contro cui Ruby non offriva protezioni native. La soluzione è arrivata dall'incontro di due elementi: la programmazione funzionale (in particolare l'immutabilità, che impedisce la condivisione di dati fra processi) e la Erlang Virtual Machine, sviluppata da Ericsson nel 1986 e resa open source nel 1988 per sistemi distribuiti e tolleranti ai guasti, con un modello di concorrenza nativo capace — cosa rara per l'epoca — di far comunicare processi anche fra macchine diverse. Valim non si è limitato a "avvolgere" Erlang: ha rifinito il design di Elixir attraverso una ricerca approfondita su quali feature fossero davvero necessarie e come implementarle al meglio, mantenendo il linguaggio snello pur restando compatibile con l'ecosistema Erlang sottostante.
> Fonte: [The Story of Elixir — OSS History Newsletter](https://osshistory.org/p/elixir)

## Il match operator, non l'assegnazione

Il concetto più spiazzante per chi arriva da linguaggi orientati agli oggetti è che in Elixir il simbolo `=` **non è un'assegnazione, è un'asserzione** — il "match operator". `a = 1` funziona perché Elixir può rendere vero il lato sinistro uguagliandolo al destro, legando la variabile `a` al valore `1`. Ma poi `1 = a` funziona di nuovo (è un altro match, che passa, perché `a` vale già 1), mentre `2 = a` genera un errore di match, perché equivale a scrivere `2 = 1`[^elixir-book].

Questo si estende naturalmente al **pattern matching** strutturale: `[a, b, c] = [1, 2, 3]` lega ciascuna variabile al corrispondente elemento della lista, perché le due strutture combaciano — e lo stesso pattern funziona anche su liste innestate, dove una variabile può legarsi a un intero sottoelenco (`[a, b, c] = [1, 2, [3, 4, 5]]` lega `c` a `[3, 4, 5]`). Un valore letterale nel pattern deve corrispondere esattamente al valore corrispondente (`[a, 2, b] = [1, 2, 3]` combacia, ma `[a, 1, b] = [1, 2, 3]` fallisce), mentre una variabile si lega semplicemente al valore corrispondente. Il carattere underscore (`_`) ignora un valore nel match, come un jolly che accetta qualunque cosa; il caret (`^`) forza invece Elixir a usare il valore *esistente* della variabile invece di ri-legarla, così `[^a, a] = [2, 3]` combacia solo se il primo elemento è già uguale al valore corrente di `a`. Una variabile, una volta legata all'interno di un singolo match, mantiene quel valore per il resto del match stesso — `[a, a] = [2, 2]` funziona ma `[a, a] = [4, 5]` fallisce — restando comunque possibile ri-legarla a un nuovo valore in un match *successivo*. Il pattern matching non si limita alle assegnazioni: è una parte centrale del linguaggio, usata anche nelle condizioni, nelle chiamate di funzione e nell'invocazione delle funzioni stesse[^elixir-book].

> [!info] Approfondimento aggiunto in fase di compilazione
> Il testo di riferimento cita Joe Armstrong, creatore di Erlang (di cui Elixir eredita la VM e il modello di pattern matching), che paragona il simbolo `=` a quello dell'algebra: scrivere `x = a + 1` non significa "assegna il valore di a+1 a x", significa asserire che x e a+1 hanno lo stesso valore — se conosci x puoi ricavare a, e viceversa. La differenza principale rispetto a Erlang è che Erlang non permette affatto di ri-legare una variabile a un nuovo valore in un match successivo se quella variabile era già stata assegnata in precedenza — Elixir è più permissivo su questo punto. È un promemoria di quanto profondamente la sintassi familiare (`=`) possa nascondere semantiche completamente diverse fra paradigmi.

## Immutabilità: dati noti, non dati copiati

In un linguaggio non funzionale, un codice come `count = 99; do_something_with(count); print(count)` ci si aspetta stampi `99`, e ci si sorprenderebbe se non lo facesse. Ma se `do_something_with` modificasse il valore di `count`, magari in un'esecuzione parallela, diventerebbe molto difficile garantire che il codice produca risultati corretti; con un array la situazione è ancora più delicata, perché è più facile trovare linguaggi che lo trattano per riferimento, rendendo più probabile che una funzione chiamata lo modifichi silenziosamente — in un'applicazione complessa, con più processi in esecuzione parallela capaci di modificare lo stesso array, diventa impossibile prevederne lo stato in un dato momento[^elixir-book].

In Elixir tutti i valori sono immutabili: una volta che una variabile referenzia una lista, quella lista non cambierà mai, finché la variabile non viene ri-legata a un nuovo valore — trasformare dati significa produrre una *nuova* struttura, mai modificare quella esistente. L'obiezione ovvia sull'efficienza — copiare dati sembra costoso — viene ribaltata: poiché Elixir sa che i dati esistenti sono immutabili, può *riutilizzarli* nella costruzione di nuove strutture invece di copiarli. `list2 = [4 | list1]` non copia gli elementi di `list1`, costruisce semplicemente una nuova lista con testa `4` e coda `list1`, condividendo la struttura sottostante. Questo si riflette anche sul garbage collection: il codice Elixir gira su moltissimi processi leggeri, ciascuno con il proprio heap — i dati dell'applicazione sono distribuiti fra questi processi, quindi ogni heap resta piccolo, il garbage collection è più veloce, e non serve affatto se il processo termina insieme al proprio heap.

Programmare con dati immutabili, una volta accettato il modello, diventa sorprendentemente semplice piuttosto che più complicato: non si capitalizza una stringa modificandola sul posto, si restituisce una sua *copia* capitalizzata — in un linguaggio funzionale si trasformano sempre i dati, non si modificano mai sul posto[^elixir-book].

## Sintesi

Il percorso di studio su Elixir, per ora limitato a un solo testo di riferimento, converge su due idee strettamente collegate fra loro: il pattern matching come meccanismo di asserzione strutturale — non assegnazione — che pervade il linguaggio ben oltre la semplice sintassi di `=`, e l'immutabilità dei dati come proprietà che, lungi dall'essere solo un vincolo funzionale astratto, abilita concretamente concorrenza sicura e garbage collection efficiente grazie al modello a processi leggeri ereditato dalla Erlang VM. Sono le due fondamenta su cui si costruisce l'intera proposta di Elixir: pensare la programmazione come trasformazione di dati invece che come gestione di stato mutabile condiviso.

## Indice delle fonti

[^elixir-book]: Dave Thomas, *Programming Elixir 1.6*, Pragmatic Bookshelf — [[../content/book/programming-elixir-1-6|pagina dedicata]]

## Vedi anche

- Contenuti fonte: [[../content/book/programming-elixir-1-6|Programming Elixir 1.6]]
- Topic collegati: [[software-development|Software Development]]
