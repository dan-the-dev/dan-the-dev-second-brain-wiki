---
title: "Clean Code: A Handbook of Agile Software Craftsmanship"
type: book
author:
  - "Robert C. Martin"
topics: ["agile-software-development", "clean-code", "technical-excellence"]
status: done
study:
  method: full_reading
  started_at: "2022-01-10"
  completed_at: "2022-02-11"
raw_source: raw/knowledge/book/clean-code-a-handbook-of-agile-software/content.md
updated: 2026-08-19
---

# Clean Code: A Handbook of Agile Software Craftsmanship

**Autore: [[../person/robert-c-martin|Robert C. Martin]] ("Uncle Bob")**

Testo fondativo del movimento *software craftsmanship*, costruito attorno a un'idea semplice ma radicale: scrivere codice pulito non è un lusso stilistico, è ciò che ti autorizza a chiamarti professionista. Non esiste una scusa ragionevole per fare meno del proprio meglio. Martin distingue due componenti dell'artigianato del software — conoscenza e lavoro pratico: si può conoscere ogni principio sulla bicicletta e cadere comunque alla prima pedalata.

## Il costo composto del codice sporco

Il libro apre con un'osservazione empirica: con codice sporco la produttività decresce nel tempo — in un anno o due, team incredibilmente veloci diventano incredibilmente lenti. La reazione tipica dei team è il "grande redesign nei cieli": un team d'elite parte a riscrivere tutto da zero, e ora due sistemi corrono in parallelo, mentre il sistema legacy continua comunque a crescere di funzionalità — a volte per dieci anni, finché anche il nuovo sistema non viene giudicato da rifare. La tesi di Martin è tagliente: quando produciamo codice sporco è colpa nostra, ed è nostra responsabilità difenderlo — come un chirurgo non salterebbe il lavaggio delle mani solo per fare prima. Il "Primal Conundrum": crediamo che il disordine ci serva per rispettare le scadenze, ma è falso — l'unico modo per andare veloci è mantenere il codice il più pulito possibile. La regola pratica che riassume l'etica del libro è la **Boy Scout Rule**: lascia il campeggio più pulito di come l'hai trovato.

## Nomi, funzioni, commenti

Sui nomi: usare nomi che rivelano l'intenzione, evitare disinformazione e abbreviazioni, fare distinzioni realmente significative, preferire nomi pronunciabili e ricercabili, evitare notazione ungherese e codifiche di tipo/scope ormai inutili nei linguaggi moderni. Sulle funzioni, il principio cardine è la dimensione: piccole, poi ancora più piccole, e capaci di fare *una cosa sola* — un test pratico proposto è: se non riesci a estrarne un'altra funzione con un nome che non sia semplicemente una riformulazione del nome originale, la funzione fa davvero una cosa sola. Il numero ideale di argomenti è zero, poi uno, poi due; tre o più vanno quasi sempre evitati. Una funzione non dovrebbe avere effetti collaterali nascosti — sono bugie, perché la funzione promette di fare una cosa e ne fa segretamente un'altra. Sui commenti, la posizione di Martin è netta: un commento è sempre un fallimento — un compenso alla nostra incapacità di esprimerci abbastanza bene nel codice stesso. Il codice pulito con pochi commenti è sempre superiore al codice complesso pieno di commenti: l'energia va investita a ripulire il codice, non a spiegarlo.

## Oggetti, gestione degli errori, confini

Martin distingue nettamente oggetti (nascondono i dati dietro astrazioni ed espongono funzioni) e strutture dati (espongono i dati e non hanno funzioni significative) come quasi opposti concettuali: il codice procedurale rende facile aggiungere nuove funzioni senza toccare le strutture dati esistenti, mentre il codice OOP rende facile aggiungere nuove classi senza toccare le funzioni esistenti. La Legge di Demetra ("non parlare con estranei") mette in guardia dai "train wreck" — catene di chiamate che espongono la struttura interna di classi collaboratrici. Sulla gestione degli errori: preferire le eccezioni ai codici di ritorno, evitare le eccezioni checked (il costo/beneficio non regge, e rompono l'open/closed principle), non restituire mai null, non passare mai null. Sui confini con codice di terze parti, la raccomandazione è avvolgere sempre le API esterne in un'astrazione propria — sia per minimizzare la dipendenza, sia per rendere più facile il mocking nei test, sia per creare "learning test" che documentano come si comporta la libreria.

## Unit test: le tre leggi del TDD

Le tre leggi che Martin propone per il TDD: non si può scrivere codice di produzione finché non esiste un test che fallisce; non si può scrivere più test di quanto basti per fallire (anche un errore di compilazione conta come fallimento); non si può scrivere più codice di produzione di quanto basti per far passare il test corrente. Le tre leggi ti chiudono in un ciclo di circa 30 secondi, dove test e codice di produzione vengono scritti *insieme*. Un test sporco equivale a non avere test — o peggio: più sporchi sono, più diventano difficili da modificare, e senza test puliti si perde la capacità di mantenere il codice di produzione flessibile, perché sono i test a rimuovere la paura di cambiare le cose. Le regole **F.I.R.S.T.**: Fast (veloci), Independent (indipendenti, eseguibili in ordine casuale), Repeatable (ripetibili in ogni ambiente), Self-Validating (esito booleano, passa o fallisce), Timely (scritti tempestivamente, appena prima del codice di produzione).

## Classi, sistemi, design emergente

Sulle classi: piccole, con una sola responsabilità (Single Responsibility Principle — "una classe dovrebbe avere una, e una sola, ragione per cambiare"), con alta coesione fra le variabili di istanza. A livello di sistema, Martin raccomanda di separare nettamente la costruzione del sistema dal suo utilizzo — spostando tutta la logica di wiring in un `main` dedicato o in un container, tramite Dependency Injection e Inversion of Control — e ricorda che pensare di "fare bene il sistema la prima volta" è un mito: si parte piccoli ma disaccoppiati, e si cresce incrementalmente, senza Big Design Up Front.

Il capitolo sul **design emergente** riprende le quattro regole del Simple Design di [[../person/kent-beck|Kent Beck]]: passa tutti i test, non contiene duplicazione, esprime l'intento del programmatore, minimizza il numero di classi e metodi — in quest'ordine di priorità. Avere test è ciò che permette di rifattorizzare senza paura, e la duplicazione viene definita "il nemico primario di un sistema ben progettato".

> [!info] Approfondimento aggiunto in fase di compilazione
> Le quattro regole del Simple Design che Martin cita sono la formulazione di Kent Beck del 1999, poi rifinita nel tempo (l'ordine "no duplicazione" prima di "esprime l'intento" viene talvolta invertito in formulazioni successive dello stesso Beck) — un piccolo promemoria che anche i principi più citati del movimento agile hanno avuto una storia editoriale, non sono nati già scolpiti nella pietra.

## Concorrenza

Il libro chiude con un capitolo sulla concorrenza, descritta come strategia di disaccoppiamento fra il "cosa" e il "quando" viene fatto un lavoro — potenzialmente in grado di migliorare il throughput, ma solo se elimina tempo di attesa reale, non come proprietà automatica. Martin sfata alcuni miti (la concorrenza migliora sempre le prestazioni, non impatta il design) e conferma altri (aggiunge overhead reale, la concorrenza corretta è complessa, i bug di concorrenza spesso non sono riproducibili). I principi di difesa proposti: applicare il Single Responsibility Principle anche al codice di concorrenza, tenendolo separato dal resto; limitare rigorosamente lo scope dei dati condivisi; usare copie dei dati quando possibile; rendere i thread il più indipendenti possibile.

## Vedi anche

- [[../person/robert-c-martin|Robert C. Martin]]
- [[../person/kent-beck|Kent Beck]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/clean-code-a-handbook-of-agile-software/content.md`
