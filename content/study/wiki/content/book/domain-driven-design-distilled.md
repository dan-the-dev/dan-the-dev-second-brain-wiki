---
title: "Domain-Driven Design: Distilled"
type: book
author:
  - "Vaughn Vernon"
topics: ["agile-software-development", "ddd"]
status: done
study:
  method: full_reading
  started_at: "2021-09-27"
  completed_at: "2021-10-15"
raw_source: raw/knowledge/book/domain-driven-design-distilled/content.md
updated: 2026-08-20
---

# Domain-Driven Design: Distilled

**Autore: Vaughn Vernon**

Gli appunti grezzi catturati per questo libro non contengono contenuto sostanziale — solo titolo, autore e la struttura vuota del template (Summary, Key Concepts, My Notes, My Takeaways, Connections, Sources sono tutti segnaposto senza testo), senza sintesi né concetti chiave estratti. Il libro fa comunque parte del piano di lettura (studiato secondo `current.yml` e secondo le date riportate qui sotto): per una sintesi effettiva dei suoi contenuti servirà tornare al testo originale.

> [!info] Approfondimento aggiunto in fase di compilazione
> In assenza di appunti di lettura propri, ecco il contesto pubblico generale sul libro (non appunti personali di Daniele). Pubblicato nel 2016, *Domain-Driven Design Distilled* è pensato esplicitamente come primer breve e accessibile (poco più di 100 pagine) rispetto al testo che ha fondato la disciplina, *Domain-Driven Design: Tackling Complexity in the Heart of Software* di Eric Evans (2003, noto informalmente come "il libro blu") — un testo denso, spesso percepito come ostico da chi vi si avvicina per la prima volta. Lo stesso Vernon è autore anche di *Implementing Domain-Driven Design* (2013), il testo più esteso e operativo sullo stesso argomento. Il libro distillato organizza il DDD attorno alla distinzione fra due livelli di design che attraversa l'intera disciplina:
>
> **Strategic design** (design strategico): riguarda come scomporre un dominio complesso in parti gestibili. Include il **Bounded Context**, il confine esplicito entro cui un modello e il suo linguaggio restano coerenti e privi di ambiguità; la **Ubiquitous Language**, il vocabolario condiviso fra sviluppatori ed esperti di dominio all'interno di quel confine; l'identificazione dei **subdomain** (core, supporting, generic) per capire dove concentrare l'attenzione progettuale; e il **Context Mapping**, che descrive come più bounded context si relazionano fra loro sia a livello di team sia a livello tecnico e di integrazione.
>
> **Tactical design** (design tattico): riguarda come modellare concretamente il codice dentro un singolo bounded context. Include gli **Aggregate**, cluster di oggetti trattati come un'unica unità di consistenza — con regole pratiche su dimensione contenuta, riferimenti solo per identità fra aggregate diversi e consistenza eventuale fra di essi — e i **Domain Event**, gli eventi che rappresentano fatti di business rilevanti accaduti nel dominio, con un accenno all'event sourcing come tecnica correlata.
>
> Il libro chiude con un capitolo di strumenti di "accelerazione e management", in cui spicca l'**Event Storming**, la tecnica di modellazione collaborativa (ideata da Alberto Brandolini) in cui domain expert e sviluppatori mappano insieme il dominio partendo dagli eventi di business — spesso citata come il modo più rapido per portare uno strategic design DDD in un team che parte da zero. Nell'archivio di Daniele questo stesso tema è ripreso, con appunti più ricchi, nel topic collegato [[../../topics/eventstorming|EventStorming]].
> Fonte: [O'Reilly — Domain-Driven Design Distilled](https://www.oreilly.com/library/view/domain-driven-design-distilled/9780134434964/) · [Wikipedia — Domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design)

## Vedi anche

- Topic: [[../../topics/ddd|DDD]] · [[../../topics/agile-software-development|Agile Software Development]] · [[../../topics/eventstorming|EventStorming]]
- [[agile-technical-practices-distilled-a-learning|Agile Technical Practices Distilled]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/domain-driven-design-distilled/content.md`
