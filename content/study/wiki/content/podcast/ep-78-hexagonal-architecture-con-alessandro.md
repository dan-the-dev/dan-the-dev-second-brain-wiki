---
title: "Ep.78 - Hexagonal Architecture con Alessandro Minoccheri (flowing)"
type: podcast
topics: ["agile-software-development", "architecture", "technical-excellence"]
status: done
raw_source: raw/knowledge/podcast/ep-78-hexagonal-architecture-con-alessandro/content.md
updated: 2026-08-19
---

# Ep.78 - Hexagonal Architecture con Alessandro Minoccheri

**Podcast Gitbar** · ospite: [[../person/alessandro-minoccheri|Alessandro Minoccheri]] (Flowing)

Episodio del podcast italiano [[../podcast/gitbar|Gitbar]] dedicato interamente all'architettura esagonale, con ospite Alessandro Minoccheri, sviluppatore software presso Flowing, fondatore e co-organizzatore del PHP User Group Romagna. La conversazione ripercorre origini, motivazioni pratiche, benefici, costi e strategie di adozione graduale del pattern, con diversi casi reali tratti dall'esperienza dell'ospite.

## Origini del pattern

Secondo quanto discusso nell'episodio, il concetto ha radici che risalirebbero al 1992, con l'introduzione del "Boundary Control Entity" da parte di [[../person/ivar-jacobson|Ivar Jacobson]], per poi essere sviluppato e reso popolare come "hexagonal architecture" (ports and adapters) da Alistair Cockburn nel 2005. Da allora lo stesso principio di disaccoppiamento è stato ribattezzato più volte con nomi diversi — Onion Architecture, e la Clean Architecture di Robert C. Martin (2011, con la sua "Screaming Architecture").

## Perché serve: il problema della velocità iniziale

L'episodio parte dall'osservazione che, avviando un nuovo progetto, gli sviluppatori tendono a privilegiare la velocità installando rapidamente framework e librerie per risolvere problemi immediati — un approccio che porta a codice fortemente accoppiato, difficile da mantenere e modificare quando i requisiti di business cambiano. L'architettura esagonale viene presentata come soluzione: separare le porte (i punti di ingresso verso il dominio) dagli adattatori (le implementazioni concrete), tenendo la logica di dominio agnostica rispetto a framework e librerie.

## Un caso reale: cambiare database senza toccare la logica di business

Minoccheri condivide un'esperienza diretta particolarmente concreta: la sostituzione completa del database di un software finanziario, passando da [[../software/elasticsearch|Elasticsearch]] a MongoDB in un solo mese di gennaio, senza toccare la business logic — modificando esclusivamente gli adattatori. Lo stesso principio, spiega, si applica a metodi di pagamento o API esterne: la capacità di cambiare implementazione senza toccare il dominio è il beneficio concreto e misurabile dell'approccio.

> [!info] Approfondimento aggiunto in fase di compilazione
> L'episodio cita un articolo di Martin Fowler sul costo del software di alta qualità, che mostra graficamente come l'investimento iniziale in tempo e risorse venga ripagato nel lungo periodo da costi di modifica più bassi. Il riferimento concettuale più diretto è il celebre grafico "Design Stamina Hypothesis" di Fowler, che contrappone la velocità di consegna di un design povero (alta all'inizio, in rapido calo) a quella di un design curato (leggermente più lenta all'inizio, ma sostenuta nel tempo): [Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html)

## Il break-even point del disaccoppiamento

Uno dei temi più discussi è se il costo iniziale di complessità introdotto dall'architettura esagonale sia sempre giustificato — la domanda del "devil's advocate" posta esplicitamente durante la conversazione. Secondo Minoccheri, il punto di pareggio si raggiunge quando il team ha acquisito abbastanza esperienza da poter implementare un cambiamento in 30 minuti invece che in tre giorni, e il business può proporre modifiche senza la sensazione che ogni richiesta richieda giorni di lavoro.

## Refactoring di codice legacy: un caso da 30.000 righe

Un secondo caso di studio riguarda un progetto attivo da 7-8 anni, che generava valore significativo per il cliente ma la cui base di codice — 30.000-40.000 righe concentrate in un unico controller — aveva eroso la fiducia del team nei propri calcoli, a causa di un algoritmo eccessivamente complesso. La strategia adottata non è stata il refactoring incrementale dell'intero codice legacy, ma la creazione di una nuova cartella separata in cui reintrodurre gradualmente, con dependency injection e una netta separazione fra dominio e infrastruttura, le sole parti core del sistema affette da problemi — inclusi test che prima non esistevano. Un caso analogo, citato più brevemente, riguarda un team bloccato su Zend 1: la soluzione è stata creare un nuovo repository con framework e architettura moderni, migrando gradualmente API e funzionalità mentre il codice legacy continuava a coesistere.

## Prestazioni e over-engineering

Alla domanda se gli adapter possano degradare le prestazioni, Minoccheri risponde che, nella sua esperienza, è vero il contrario: separare le componenti permette di testare e misurare le prestazioni in modo indipendente, rendendo più facile identificare e risolvere problemi. Se le preoccupazioni sulle prestazioni emergono troppo presto nello sviluppo, secondo l'ospite è spesso un segnale che il focus si è spostato prematuramente dalla logica di dominio — un rischio di ottimizzazione prematura.

## Insegnare l'architettura esagonale ai junior

Sul tema della trasmissione di queste pratiche a sviluppatori junior, Minoccheri sconsiglia di dire loro semplicemente "studia questo framework", suggerendo invece di studiare design pattern e pratiche come il test-driven development, applicabili anche all'architettura esagonale senza aggiungere troppa complessità iniziale. Il suo approccio pratico è pair programming e code review, dando ai junior lo spazio per sbagliare senza timore di essere criticati — un'eco diretta dei temi di sicurezza psicologica trattati altrove in questo archivio.

## Functional Core, Imperative Shell

Verso la fine della conversazione viene introdotto il pattern Functional Core, Imperative Shell: un modo di applicare i principi della programmazione funzionale separando un "nucleo funzionale" — funzioni pure che ricevono input e producono output senza side effect — da un "guscio imperativo" che gestisce adapter, coordinamento e interazione con l'utente. Minoccheri nota affinità dirette con i principi dell'architettura esagonale e del DDD.

## Letture consigliate dall'ospite

Nel segmento finale, Minoccheri condivide i libri più influenti nella sua carriera: *Clean Code* e *Clean Architecture* di Robert C. Martin (con la battuta che non è un grande fan della personalità dell'autore, pur riconoscendone il valore dei libri), *Get Your Hands Dirty on Clean Architecture*, e *Designing Data-Intensive Applications* di Martin Kleppmann come lettura pratica per progettare sistemi centrati sui dati.

## Sintesi

L'episodio offre una delle trattazioni più pratiche e concrete dell'architettura esagonale presenti in questo archivio, ancorata a casi reali (cambio di database, refactoring di codebase legacy da 30k righe) piuttosto che alla sola teoria, e affronta esplicitamente il tema del costo/beneficio e della strategia di adozione graduale in un team.

## Vedi anche

- [[../concept/hexagonal-architecture-software|Hexagonal architecture (software)]]
- [[../concept/domain-driven-design|Domain-driven design]]
- [[../person/robert-c-martin|Robert C. Martin]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/podcast/ep-78-hexagonal-architecture-con-alessandro/content.md`
- Spotify: [episodio](https://open.spotify.com/episode/3Z6oeItjxg9O9E7Oq9J60S)
