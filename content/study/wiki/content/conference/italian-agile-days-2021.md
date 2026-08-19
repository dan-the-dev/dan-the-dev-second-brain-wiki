---
title: "Italian Agile Days 2021"
type: conference
topics: ["agile-software-development"]
status: done
raw_source: raw/knowledge/conference/italian-agile-days-2021/content.md
updated: 2026-08-19
---

# Italian Agile Days 2021

Italian Agile Days 2021 (IAD) è la storica conferenza italiana dedicata all'agilità nello sviluppo software e nell'organizzazione del lavoro. L'edizione 2021 ha toccato temi che vanno dalla sicurezza psicologica dei team ai limiti del TDD applicato senza confini architetturali chiari, dal contratto come strumento di collaborazione (non di controllo) all'evoluzione da "working software" a "working products".

## Sicurezza psicologica e il Progetto Aristotele

La prima traccia di rilievo dell'unconference ha ripreso il tema della sicurezza psicologica: un ambiente in cui le persone credono che la franchezza sia benvenuta, dove i colleghi si fidano e si rispettano a vicenda e si sentono liberi — quasi obbligati — a essere schietti, perché il rischio interpersonale è accettato dal team come parte del lavoro.

Il riferimento centrale è stato il Progetto Aristotele di Google, la ricerca interna che ha isolato le variabili che *non* influenzano l'efficacia di un team (collocazione fisica, sistema decisionale a consenso, loquacità dei membri, performance o intelligenza individuale, dimensione del team, anzianità di servizio) da quelle che invece contano davvero. Le cinque caratteristiche identificate come determinanti sono state riassunte così: sicurezza psicologica ("se commetto un errore nei confronti del team, questo non sarà usato contro di me"), affidabilità ("quando un membro del team dice che farà qualcosa, lo farà in tempo e bene"), struttura e chiarezza (obiettivi chiari e processo decisionale efficiente), scopo e significato (il lavoro dà un senso di appagamento personale), impatto (comprendere come il proprio lavoro contribuisce agli obiettivi dell'organizzazione).

> [!info] Approfondimento aggiunto in fase di compilazione
> Il Progetto Aristotele è stato condotto dal People Analytics team di Google fra il 2012 e il 2015, analizzando oltre 180 team interni con metodi sia qualitativi che quantitativi. Il nome è un omaggio alla frase attribuita ad Aristotele "il tutto è maggiore della somma delle parti", scelta perché la ricerca ha dimostrato che *chi* compone un team conta meno di *come* i membri interagiscono fra loro. Fonte: [re:Work — Guide: Understand team effectiveness](https://rework.withgoogle.com/print/guides/5721312655835136/)

## I limiti del TDD senza confini definiti

Una delle sessioni più dense, "L'illusione dell'ortogonalità" di A. Brandolini, ha affrontato il tema di pratiche che "in teoria funzionano ma a volte no" — il TDD tra queste. La tesi centrale è che il TDD funziona bene in contesti con un solo sviluppatore o dove l'intero team è allineato sull'approccio, ma fallisce quando manca un ingrediente cruciale: confini definiti a livello di team. Il riferimento è diretto al Domain-Driven Design e ai suoi bounded context — porzioni di sistema con un singolo scopo, più facili da ottimizzare per un unico obiettivo.

Quando i confini non vengono rispettati (colleghi che non fanno TDD, copertura "a macchia di leopardo", commit distruttivi altrui), la pratica smette di generare valore. Se applicato bene, invece, il TDD porta a design migliore, codice più affidabile, maggiore apertura all'evoluzione e stime più precise — al punto che l'autore sottolinea come il TDD non sia una pratica strettamente ingegneristica, ma abbia impatti su ansia, pianificazione e reattività di business.

Sul tema delle dipendenze fra team, la sessione ha proposto tre principi guida: proteggere i confini, minimizzare le dipendenze, massimizzare il lavoro *non* fatto.

## Da "working software" a "working product"

Lorenzo Cassulo ha discusso il passaggio culturale, a vent'anni dall'Agile Manifesto, da un focus sul "software funzionante" a uno sul "prodotto funzionante": un buon software può essere pessimo nel sostenere il cambiamento nel tempo, se costruito senza una visione di prodotto condivisa. Il percorso proposto passa per l'identificazione di un cliente unico e condiviso, la definizione comune di "valore" (quantificabile e discutibile), e la costruzione di una organizzazione product-driven — una Product Community, non un semplice team — dove il cambiamento riguarda conoscenza→cultura, comunicazione→relazioni, team→community, stakeholder→product contributor, dipartimenti→skill.

## Il contratto come attivatore di collaborazione

Alessandro Violini ha discusso il ruolo del contratto nello sviluppo software, distinguendo backlog ("il cosa") e pianificazione ("il come") e mettendo in guardia da due antipattern: il backlog che diventa fine a se stesso invece di essere uno strumento verso uno scopo, e la pianificazione che pretende di non cambiare o che avanza senza raccogliere dati. Fra i modelli contrattuali discussi, il contratto "a corpo" (rischio tutto sul fornitore o sul cliente a seconda di come va) e il "time & material" sono stati contrapposti al contratto agile, in cui il fornitore vende una capacità settimanale/per sprint del team, pianificata periodicamente insieme al cliente.

## Testing come strategia, non come dovere

Ferdinando Santacroce ha discusso la Agile Testing Matrix di Brian Marick, sottolineando come l'obiettivo non sia conoscere ogni possibile tipo di test, ma orientarsi per trovare la strategia di testing adatta al contesto, bilanciando effort e valore. Il rischio da gestire è duplice: testare la cosa sbagliata, o testare la cosa giusta troppo tardi.

> [!info] Approfondimento aggiunto in fase di compilazione
> La Agile Testing Matrix di Brian Marick (proposta originariamente attorno al 2003) incrocia due assi — test che supportano il team vs. test che criticano il prodotto, e test business-facing vs. technology-facing — generando quattro quadranti che Lisa Crispin e Janet Gregory hanno poi reso popolari nel libro *Agile Testing* (2009) come riferimento standard per pianificare strategie di test in team agili.

## Sintesi

IAD 2021 offre un ritratto composito della maturità (e delle difficoltà) del movimento agile italiano vent'anni dopo il Manifesto: pratiche tecniche come il TDD che funzionano solo dentro confini architetturali chiari, la centralità della sicurezza psicologica nei team ad alte prestazioni, e la spinta verso un'organizzazione orientata al prodotto più che al semplice "software che funziona".

## Vedi anche

- [[../person/aristotle|Aristotele]]
- [[../concept/hexagonal-architecture-software|Hexagonal architecture]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/conference/italian-agile-days-2021/content.md`
