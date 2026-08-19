---
title: "XPUG Bg 27-01-2026, Luca Giovenzana, Bounded Context: un modo incrementale per liberarsi del legacy"
type: video
topics: ["agile-software-development", "ddd"]
status: done
raw_source: raw/knowledge/video/xpug-bg-27-01-2026-luca-giovenzana-bounded/content.md
updated: 2026-08-19
---

# Bounded Context: un modo incrementale per liberarsi del legacy

**Talk di Luca Giovenzana** all'XPUG Bergamo, 27 gennaio 2026

Talk che ripercorre, con un caso reale in un'insurtech (broker assicurativo), il percorso da un sistema legacy monolitico nato per validare rapidamente un'idea di startup fino a una strategia di modernizzazione incrementale basata sui bounded context del Domain-Driven Design, senza mai fermare il business.

## Come nasce il debito tecnico in una startup

Il talk parte da una definizione di startup come "istituzione umana progettata per creare qualcosa di nuovo in condizioni di estrema incertezza", il cui ciclo di vita si basa sull'iterazione rapida: idea → costruzione → misurazione nel mercato → raccolta dati → apprendimento → nuova idea. Usando il framework del "triangolo di ferro" (costo, tempo, scope — variabili interconnesse, dove comprimerne una comprime inevitabilmente la qualità), il talk mostra come un MVP, per essere rapido da costruire, sacrifichi quasi sempre design, astrazioni e pattern architetturali come l'architettura esagonale: il debito tecnico non è quasi mai una scelta deliberata, ma una conseguenza della necessità di validare un business con risorse limitate.

## Il caso reale: un broker assicurativo "conformista"

Il caso concreto discusso riguarda una startup insurtech che opera come broker, rivendendo polizze di altre compagnie assicurative (i "carrier"). Nel rapporto upstream/downstream fra broker e carrier, è il modello dati del carrier a essere dominante — e la startup, in una fase iniziale, adotta un approccio "conformista": prende i campi del modello del carrier e li usa direttamente nel proprio backend e database, senza costruire un proprio modello di dominio. Quando arriva un secondo prodotto (un secondo carrier per un tipo di polizza diverso), la strategia diventa copia-e-incolla: duplicare il modello esistente e adattarlo — risultando in più modelli paralleli, ciascuno conforme a un carrier diverso, senza vera astrazione interna condivisa.

Il talk sottolinea, con onestà, che questo approccio è del tutto legittimo per una startup che deve trovare il proprio product-market fit: l'obiettivo in quella fase non è seguire DDD, TDD o BDD, ma far funzionare il business.

## Il cambio di strategia: da conformista a broker vero

Dopo circa un anno e mezzo di validazione (con parte dello sviluppo esternalizzato per contenere i costi), la strategia dell'azienda cambia: da rivenditore di un singolo prodotto a vero broker, che deve offrire più carrier e prodotti, confrontandoli su prezzo e requisiti. Questo cambio di strategia rende insostenibile l'architettura "conformista" preesistente, e rende necessaria una modernizzazione — ma senza un "grande rewrite", data l'impossibilità di fermare un sistema che genera fatturato e paga gli stipendi.

## Bounded context come strumento di modernizzazione incrementale

Il concetto di bounded context viene presentato come l'insieme di informazioni che definisce il significato univoco di una parola o di un concetto in un dato contesto, con un modello chiaro, pochi stakeholder e un linguaggio privo di ambiguità — un principio affine alla singola responsabilità, ma applicato al linguaggio e al modello di dominio. I confini di un bounded context possono variare enormemente in scala, da una semplice cartella a un microservizio indipendente, e vengono tipicamente identificati tramite EventStorming, mappando prospettive diverse (ad esempio: il reparto amministrazione e il reparto logistica possono avere bounded context distinti anche parlando dello stesso concetto, come "fattura").

Un elemento architetturale chiave introdotto è il concetto di "carrier generico", un'astrazione che maschera le specificità di ciascun carrier reale dietro un anti-corruption layer, permettendo di attivare funzionalità come preventivi e polizze senza che il resto del sistema debba conoscere i dettagli di ciascun fornitore.

> [!info] Approfondimento aggiunto in fase di compilazione
> L'anti-corruption layer è un pattern del Domain-Driven Design descritto originariamente da Eric Evans nel libro *Domain-Driven Design: Tackling Complexity in the Heart of Software* (2003): un livello di traduzione esplicito che isola il modello di dominio interno da un sistema esterno con un modello concettualmente diverso o di qualità inferiore, evitando che le sue caratteristiche "corrompano" il modello interno.

## Strangler Fig Pattern e sostituzione incrementale

Fra le opzioni valutate per affrontare il sistema legacy — un "grande revamp" (scartato, perché il sistema legacy continua a generare valore e non può essere interrotto) e un approccio incrementale — il talk sceglie il secondo, applicando lo Strangler Fig Pattern: costruire attorno al sistema legacy, sostituendolo pezzo per pezzo, come un ficus strangolatore che cresce attorno a un albero fino a rimpiazzarlo.

Il punto di partenza scelto per il primo pezzo da sostituire viene guidato da opportunità di business concrete (un nuovo prodotto assicurativo con margini più alti), non da priorità puramente tecniche — mostrando come sia possibile ottenere valore immediato (nuove funzionalità) e allo stesso tempo iniziare a liberarsi del debito tecnico nella stessa iniziativa.

## Il "legacy migrator" e la migrazione incrementale del traffico

Per gestire la transizione, il team introduce un bounded context dedicato chiamato "legacy migrator", che funge da ponte fra il sistema legacy e il nuovo sistema, migrando preventivi e dati esistenti e permettendo agli utenti già presenti nel vecchio flusso di continuare senza interruzioni, mentre i nuovi clienti vengono progressivamente instradati verso l'architettura nuova. La validazione avviene direttamente in produzione, con traffico limitato inizialmente (ad esempio solo clienti sopra i 65 anni) prima di estendere il nuovo sistema a tutta la base utenti.

## Monolite modulare come tappa intermedia

L'implementazione concreta separa i nuovi componenti da quelli esistenti all'interno dello stesso servizio, risultando in un monolite modulare con bounded context organizzati in moduli/package separati all'interno della stessa codebase. Le chiamate dirette fra moduli sono state in parte sostituite da un pattern mediator (una forma di comunicazione basata su comandi/messaggi), scelto deliberatamente per rendere possibile, in futuro, una conversione verso microservizi o comunicazione asincrona senza dover riscrivere la logica di business.

## Debito tecnico "consapevole" e risultati

Il talk chiude riconoscendo esplicitamente che l'approccio adottato genera comunque debito tecnico — ma questa volta in modo consapevole e con componenti il più possibile disaccoppiati fra loro. Il risultato concreto citato è un modello "Policy" reso generico e riutilizzabile per due prodotti assicurativi diversi (vita e infortuni), ottenuto per via incrementale: la mappatura dei contesti (context mapping) non è stata fatta a priori come esercizio teorico, ma emersa e raffinata a posteriori, validata scrivendo codice e osservando cosa effettivamente funzionava.

## Sintesi

Un caso di studio raro nell'archivio per la sua concretezza operativa: mostra come i principi teorici di Domain-Driven Design (bounded context, anti-corruption layer, context mapping) possano guidare una modernizzazione incrementale reale di un sistema legacy che genera fatturato, senza mai fermare il business — un contrappunto pratico diretto alla discussione più teorica su DDD ed event sourcing presente nel talk di Greg Young in questo archivio.

## Vedi anche

- [[../concept/domain-driven-design|Domain-driven design]]
- [[../podcast/ep-78-hexagonal-architecture-con-alessandro|Ep. 78 — Hexagonal Architecture con Alessandro Minoccheri]]
- [[../video/greg-young-cqrs-and-event-sourcing-code-on-the|Greg Young — CQRS and Event Sourcing]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/video/xpug-bg-27-01-2026-luca-giovenzana-bounded/content.md`
- YouTube: [video](https://www.youtube.com/watch?v=bGiyDUz55K8)
