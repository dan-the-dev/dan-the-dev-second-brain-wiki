---
title: "Agile Software Development"
type: topic
id: agile-software-development
updated: 2026-08-19
---

# Agile Software Development

Il topic più esteso di tutto l'archivio (37 contenuti), e non a caso: è l'ombrello sotto cui convergono quasi tutte le altre aree di studio di Dan — pratiche tecniche, gestione del flusso, cultura organizzativa, DevOps, qualità del codice, produttività dei team. Più che una singola disciplina, l'agilità qui emerge come un insieme di pratiche interconnesse che si rinforzano a vicenda: nessuno dei contenuti raccolti tratta l'agile come una metodologia a sé, ma come un modo di lavorare che si manifesta concretamente nel codice, nei rilasci, nelle riunioni e nella cultura del team.

## Le pratiche tecniche fondanti

Il nucleo tecnico del topic è costruito attorno a tre libri che, insieme, formano un curriculum quasi completo di "artigianato del software": [[../content/book/test-driven-development-by-example|Test-Driven Development: By Example]] di Kent Beck e [[../content/book/agile-technical-practices-distilled-a-learning|Agile Technical Practices Distilled]] (già sintetizzati in dettaglio nel topic [[tdd|TDD]]), [[../content/book/clean-code-a-handbook-of-agile-software|Clean Code]] di Robert C. Martin (naming, funzioni, le tre leggi del TDD, i quattro criteri del Simple Design di Kent Beck) e [[../content/book/practices-of-an-agile-developer|Practices of an Agile Developer]] (la metafora del surf, "il quick fix diventa sabbie mobili", Tell-Don't-Ask, standup meeting, perché anche gli architetti devono scrivere codice). A completare il quadro, [[../content/book/refactoring-improving-the-design-of-existing-code|Refactoring]] di Martin Fowler (appunti grezzi minimi, ma un riferimento imprescindibile) e l'articolo [[../content/article/trunk-based-development-and-branch-by-abstraction|Trunk-Based Development and Branch by Abstraction]], che porta la disciplina del piccolo passo dal singolo commit fino alla strategia di branching dell'intero team.

## Lean, flusso e gestione del debito

Il pensiero Lean applicato al software è un secondo asse portante, sviluppato più a fondo nel topic dedicato [[lean|Lean]]: [[../content/book/implementing-lean-software-development|Implementing Lean Software Development]] (le sette forme di spreco, la Legge di Little, i punti di Deming) e [[../content/book/slack-getting-past-burnout-busywork-and-the-myth|Slack]] di Tom DeMarco, che smonta il mito dell'efficienza totale. Sul lato della pratica quotidiana, [[../content/article/the-elephant-carpaccio-intre|The Elephant Carpaccio]] mostra come scomporre feature enormi in fette verticali sottilissime, mentre [[../content/article/cose-il-debito-tecnico-e-come-affrontarlo-in-modo|Cos'è il debito tecnico e come affrontarlo in modo Agile]] e [[../content/article/tech-debt-explained-to-everyone|Tech Debt Explained to Everyone]] affrontano lo stesso problema — il debito tecnico — da due angolazioni diverse (si veda anche il topic dedicato [[tech-debt|Tech Debt]]).

## DevOps e le Tre Vie

Il ponte tra sviluppo agile e operations è coperto da una tripletta coerente di fonti riconducibili a Gene Kim: il romanzo [[../content/book/the-phoenix-project-a-novel-about-it-devops-and|The Phoenix Project]], il libro [[../content/book/accelerate|Accelerate]] (le quattro metriche DORA, il modello di Westrum) e l'articolo di sintesi [[../content/article/the-three-ways-the-principles-underpinning-devops|The Three Ways]] — tutti approfonditi nel topic [[devops|DevOps]]. L'articolo [[../content/article/dora-balancing-ai-tensions-moving-from-ai|DORA — Balancing AI Tensions]] aggiorna lo stesso framework all'era dell'AI-assisted development.

## Organizzazione, team e dominio

Sul lato organizzativo, [[../content/article/tutto-quello-che-ho-imparato-su-team-topologies|Tutto quello che ho imparato su Team Topologies]] introduce i quattro tipi di team e la Legge di Conway, mentre [[../content/book/domain-driven-design-distilled|Domain-Driven Design: Distilled]] e i video [[../content/video/greg-young-cqrs-and-event-sourcing-code-on-the|Greg Young — CQRS and Event Sourcing]] e [[../content/video/xpug-bg-27-01-2026-luca-giovenzana-bounded|XPUG Bg — Bounded Context]] esplorano la modellazione del dominio (si veda il topic [[ddd|DDD]]). Il corso [[../content/course/eventstorming-facilitation|Eventstorming Facilitation]] copre la tecnica di workshop collaborativo per far emergere quello stesso modello di dominio con gli stakeholder.

## Produttività, qualità e i suoi paradossi

Un gruppo folto di articoli discute cosa significhi davvero "produttività" in un contesto agile, spesso mettendo in guardia da metriche ingannevoli: [[../content/article/productivity|Productivity]], [[../content/article/the-developer-productivity-trap|The Developer Productivity Trap]] (McNamara Fallacy, Legge di Goodhart), [[../content/article/the-three-year-bill-why-fast-teams-slow-down|The Three-Year Bill]], [[../content/article/learned-and-actual-helplessness|Learned (and Actual) Helplessness]] e [[../content/article/doerr-s-law-on-product-teams|Doerr's Law on Product Teams]]. Sul fronte della qualità, [[../content/article/is-high-quality-software-worth-the-cost|Is High Quality Software Worth the Cost?]] riprende la "Design Stamina Hypothesis" di Fowler, mentre [[../content/article/book-summary-for-lean-software-development-an|il summary di Lean Software Development]] e il libro completo [[../content/book/lean-software-development-an-agile-toolkit|Lean Software Development: An Agile Toolkit]] chiudono il cerchio con i Poppendieck.

## L'agile ai tempi degli agenti AI

Tre contenuti più recenti portano il topic al presente: [[../content/article/humans-and-agents-in-software-engineering-loops|Humans and Agents in Software Engineering Loops]] e [[../content/article/the-golden-rules-of-agent-first-product|The Golden Rules of Agent-First Product Engineering]] discutono come i cicli di sviluppo agile si stiano riorganizzando attorno ad agenti AI nel loop, mentre [[../content/video/who-should-enable-tdd-scrum-master-line-manager|Who Should Enable TDD?]] (già coperto nel topic TDD) resta un ponte fra la disciplina tecnica classica e la sua abilitazione organizzativa.

## Conferenze

Due conferenze fanno da cornice più ampia a tutto il topic: [[../content/conference/italian-agile-days-2021|Italian Agile Days 2021]] e [[../content/conference/tdd-conference-2021|TDD Conference 2021]] (quest'ultima già ampiamente ripresa in [[tdd|TDD]]).

## Vedi anche

- Topic collegati: [[tdd|TDD]] · [[lean|Lean]] · [[devops|DevOps]] · [[tech-debt|Tech Debt]] · [[technical-excellence|Technical Excellence]] · [[ddd|DDD]] · [[extreme-programming|Extreme Programming]] · [[trunk-based-development|Trunk-Based Development]] · [[clean-code|Clean Code]] · [[refactoring|Refactoring]] · [[eventstorming|EventStorming]]
- Persone centrali: [[../content/person/kent-beck|Kent Beck]] · [[../content/person/gene-kim|Gene Kim]] · [[../content/person/martin-fowler-software-engineer|Martin Fowler]] · [[../content/person/robert-c-martin|Robert C. Martin]] · [[../content/person/tom-demarco|Tom DeMarco]] · [[../content/person/nicole-forsgren|Nicole Forsgren]]
