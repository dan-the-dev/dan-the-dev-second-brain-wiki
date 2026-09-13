---
title: Tech Hiring & Team Strategy — Playbook (Muffin)
company: muffin
period: 2024-2025
source: raw/learning/technical-leadership/Tech Strategy ideas - Muffin.md
tags: [learning, technical-leadership, hiring, team-structure, employer-branding]
updated: 2026-09-13
---

# Tech Hiring & Team Strategy — Playbook

## Perché questo documento

Appunti raccolti durante Muffin su tre fronti collegati: come strutturare un team ideale, come valutare tecnicamente i candidati, come costruire employer branding tecnico. Non tutto è stato applicato fino in fondo (Muffin è entrata in crisi di liquidità prima di poter scalare il team come previsto — vedi [[../experiences/muffin|Muffin]]), ma il pensiero dietro queste idee resta valido e riutilizzabile. Compilato per portarlo con me in [[../experiences/levels|Levels]], arricchito con riferimenti a framework/pratiche note che confermano (o correggono) l'intuizione originale.

## 1. Struttura di team ideale (fine 2025)

**Product team**: 1 PM · 1 Tech Lead · 1 Senior BE · 1 Senior FE · 1 Senior UX
**Platform team**: 1 Infra expert (Head of Infrastructure)

Figure junior/mid aggiuntive su PM/dev/UX come backup e crescita — con un'eccezione esplicita: *PM e Tech Lead non hanno bisogno di un backup individuale, perché il backup è il team stesso*.

**Concetto applicato**: questa struttura anticipa quasi esattamente il modello **[Team Topologies](https://teamtopologies.com/key-concepts)** di Matthew Skelton e Manuel Pais — *stream-aligned team* (il product team, allineato a un flusso di valore end-to-end) + *platform team* (l'infra expert, che fornisce servizi interni per ridurre il carico cognitivo dello stream-aligned team). Vale la pena leggere il libro per intero prima della prossima riorganizzazione: aggiunge altri due tipi di team (*enabling* — competenze temporanee per sbloccare gli altri team; *complicated-subsystem* — sottosistemi che richiedono expertise profonda e isolata) che potrebbero servire quando il team cresce oltre la taglia attuale. [Panoramica sintetica su Atlassian](https://www.atlassian.com/devops/frameworks/team-topologies) · [I quattro tipi di team, IT Revolution](https://itrevolution.com/articles/four-team-types/).

**Nota sul "no backup per PM/Tech Lead"**: è una scelta di design interessante ma rischiosa se non esplicitata — nella pratica a Muffin il mentoring involontario di un pari (Luca, Jacopo — → [[../patterns/index#5-il-mentoring-involontario-di-un-pari|Pattern 5]]) mostra cosa succede quando il "backup diffuso" non basta e il Tech Lead finisce comunque a colmare da solo un gap di competenza. Da tenere a mente: il principio regge solo se il team è già senior in modo omogeneo.

## 2. Processo di valutazione tecnica

Pipeline in tre passaggi: **screening question alla candidatura → home assignment (kata) o portfolio di codice come fallback → interview tecnica in pairing sul codice condiviso**, con domande condivise in anticipo.

**Concetto applicato — take-home assessment**: la letteratura è divisa. Punti a favore emersi in ricerca: meno stress da performance live, il candidato lavora con i suoi strumenti, testa un ventaglio più ampio di competenze ([Karat — 3 tipi di technical assessment](https://karat.com/how-to-hire-software-engineers-3-types-of-technical-assessment/)). Punti contro ricorrenti: alto tasso di abbandono, tempo-non-timeboxato che rende il confronto tra candidati poco equo, rubriche di valutazione raramente condivise con chi le sostiene ([Holloway Guide to Technical Recruiting](https://www.holloway.com/g/technical-recruiting-hiring/sections/take-homes), [critica diretta su Medium](https://medium.com/swlh/take-home-coding-assignments-are-a-waste-of-time-8da74085749e)). La scelta di Muffin di limitare l'esercizio a "mezza giornata" e di offrire il fallback del portfolio va nella direzione giusta — **miglioria da portare avanti**: condividere sempre la rubrica di valutazione col candidato, indipendentemente dall'esito, per ridurre la sensazione di "scatola nera" che la ricerca segnala come il problema più comune.

**Concetto applicato — kata come strumento di valutazione**: il kata **99 Bottles** non è scelto a caso — è lo stesso esercizio al centro del libro *[99 Bottles of OOP](https://sandimetz.com/99bottles)* di Sandi Metz, riferimento diretto della comunità software craftsmanship per insegnare design incrementale via TDD (partire dalla soluzione "Shameless Green", poi refactoring guidato dai code smell). Usarlo in sede di hiring è un modo elegante per far emergere, con un solo esercizio piccolo, sia la meccanica del refactoring sia le scelte di design sotto duplicazione — esattamente il tipo di segnale che Muffin cercava. Il template repository fornito (Make + Docker) e il suggerimento di committare i cicli red/green/refactor sono un ottimo dettaglio operativo, raro nei processi di hiring standard.

## 3. Domande di screening (value-fit)

Il file originale ripete lo stesso set di domande tre volte (screening iniziale, call tecnica, "directory domande" finale) — consolidate qui in un'unica lista, organizzata per cosa cercano di far emergere:

**Opinioni tecniche e capacità di argomentarle**
- Cosa distingue "buon codice" da "cattivo codice", secondo te?
- Come ti migliori come ingegnere?
- Quali sono le tue pratiche preferite nello sviluppo software?
- Come affronti un design system?

**Autoconsapevolezza e onestà**
- Cosa ti interessa davvero di questa azienda/job description?
- Cosa cerchi in un lavoro?
- Dove vedi i tuoi punti di forza da developer?
- Qual è stato il progetto più impegnativo su cui hai lavorato? Cosa lo rendeva tale?

**Collaborazione e code review**
- Stai rivedendo una PR grossa con una nuova feature importante: il codice non ti convince, sospetti bug. Come gestisci la review? Cosa pensi delle PR grandi in generale?

**Approccio personale e stack**
- Se dovessi costruire un sito personale, che stack useresti e perché?
- Quanti linguaggi hai usato? Qual è quello che conosci meglio? (da usare come base per il kata)

**Insight**: questo set di domande è, di fatto, la versione "lato azienda" dello stesso meccanismo che Dan applica oggi come candidato nella propria ricerca lavoro — → [[../patterns/index#9-i-colloqui-come-screening-di-allineamento-valoriale|Pattern 9, colloqui come screening di allineamento valoriale]]. Vale la pena rileggere le due liste insieme: le domande che Dan pone a Freename/Levels/Smartness nel 2026 (TDD, formazione con budget reale, metriche di produttività) sono lo specchio esatto di quelle che scriveva per i candidati Muffin nel 2024-2025. Lo stesso filtro valoriale funziona da entrambi i lati del tavolo.

## 4. Il kit "reverse interview" per i candidati

Riferimento incluso nei materiali: [viraptor/reverse-interview](https://github.com/viraptor/reverse-interview) — un elenco di domande che i candidati possono fare all'azienda. Esistono varianti simili molto curate, utili come confronto: [platisd/reverse-interview-questions](https://github.com/platisd/reverse-interview-questions) e la guida di [Tech Interview Handbook](https://www.techinterviewhandbook.org/final-questions/). Il principio comune: le domande migliori sono aperte, senza risposta "giusta", e vanno rivolte a chi fa sviluppo — non a HR/recruiter — perché è lì che emergono i segnali reali (processi, on-call, mentorship, come si comunicano gli incidenti). Il [Pragmatic Engineer](https://blog.pragmaticengineer.com/reverse-interviewing/) suggerisce esplicitamente di chiedere 1:1 separati con il futuro manager e con almeno un futuro collega.

**Simmetria da sfruttare**: la checklist Day 1/Settimana 1 scritta per l'ingresso in Levels (→ [[../experiences/levels|Levels]], [[../../raw/journal/5-levels/20260913/day0|raw/day0]]) è, in pratica, un reverse-interview che Dan applica a sé stesso nel nuovo ruolo — stesso principio, sponda opposta.

## 5. Test tecnici — frontend e backend

**Frontend**: consumo di una API pubblica ([fakestoreapi.com](https://fakestoreapi.com/products)) + fedeltà a un design Figma, vincolo unico TypeScript, mezza giornata di impegno dichiarato. Valuta organizzazione dei componenti, gestione dello stato, uso dei test, confidenza con Figma.

**Backend**: kata 99 Bottles, libertà di framework, incoraggiamento esplicito a mostrare i commit dei cicli TDD red/green/refactor.

Entrambi condividono tre principi espliciti nel testo originale, tutti solidi e da mantenere:
1. Timebox dichiarato (mezza giornata) comunicato al candidato in anticipo
2. Priorità alla qualità di ciò che si consegna sul completamento — "preferiamo un risultato di cui vai fiero" anche se incompleto
3. Richiesta di rendere visibili le decisioni prese (README o mail) — testa la comunicazione tecnica, non solo il codice

## 6. Employer branding tecnico

Leve individuate: tech blog, supporto a community/meetup (Crafted, XP MI/BG, Agile Torino), sponsorizzazione conference (JSDay, React Day, Codemotion, Italian Agile Days, CloudConf).

**Concetto applicato**: la ricerca conferma la direzione ma aggiunge un vincolo di credibilità che vale la pena tenere presente — gli sponsor developer-facing funzionano quando costruiscono *credibilità tecnica*, non solo visibilità di brand: "sponsoring a developer conference requires a different mindset than traditional event marketing [...] developer conferences [...] operate on credibility" ([WeAreDevelopers](https://www.wearedevelopers.com/magazine/686-why-and-how-to-sponsor-developer-events)). Stesso principio per il blog tecnico: i post con più ritorno sono scritti dagli ingegneri stessi su problemi reali, non da marketing ([daily.dev, Employer Branding Guide](https://daily.dev/blog/employer-branding-for-engineering-teams-what-developers-look-for/)) — coerente con l'idea, già presente nelle note originali, di un eventuale podcast/tech blog gestito dal team invece che da comunicazione esterna.

## 💡 Sintesi: cosa portare a Levels

- **Team structure**: se/quando Levels crescerà oltre il team attuale, proporre esplicitamente il framework Team Topologies (stream-aligned + platform, poi enabling se serve) invece di reinventarlo da zero — è già il modello verso cui le note di Muffin tendevano istintivamente.
- **Hiring**: se emergerà la responsabilità di assumere in Levels, riproporre la pipeline screening → kata/portfolio → pairing, ma aggiungendo la condivisione esplicita della rubrica di valutazione col candidato (gap identificato dalla ricerca).
- **Domande valoriali**: il set di domande di screening Muffin e il set di domande da candidato (Pattern 9) sono la stessa cosa vista dai due lati — mantenerli aggiornati insieme, non come documenti separati.
- **Employer branding**: se rilevante in Levels (startup già "build in public" via la newsletter di Filippo — vedi [[../experiences/levels|Levels]]), il principio guida è credibilità tecnica prima di reach: contenuti scritti da chi scrive codice, non da marketing.

## Link correlati

- Raw source: [[../../raw/learning/technical-leadership/Tech Strategy ideas - Muffin|Tech Strategy ideas - Muffin.md]]
- [[../experiences/muffin|Muffin]] — esperienza in cui queste idee sono nate
- [[../experiences/levels|Levels]] — dove portarle avanti
- [[../patterns/index#9-i-colloqui-come-screening-di-allineamento-valoriale|Pattern 9 — Colloqui come screening di allineamento valoriale]]
- [[../patterns/index#5-il-mentoring-involontario-di-un-pari|Pattern 5 — Il mentoring involontario di un pari]]
