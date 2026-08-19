---
title: "Cos'è il debito tecnico e come affrontarlo in modo Agile"
type: article
topics: ["agile-software-development", "tech-debt", "tech-lead", "technical-excellence"]
status: done
raw_source: raw/knowledge/article/cose-il-debito-tecnico-e-come-affrontarlo-in-modo/content.md
updated: 2026-08-19
---

# Cos'è il debito tecnico e come affrontarlo in modo Agile

**Autore: Luca Rossi**

L'articolo riparte dalla fonte originale del termine "debito tecnico", coniato da [[../person/ward-cunningham|Ward Cunningham]]: non un giudizio sulla qualità del codice, ma il risultato di uno scarto fra i bisogni del business e il modo in cui il software è scritto. Secondo Cunningham questo scarto nasce da due cause distinte — Wrong Design (la soluzione era sbagliata fin dall'inizio) e Rapid Evolution (la soluzione era corretta ma è diventata obsoleta per un contesto che è cambiato rapidamente).

## Il mito del codice pulito come prevenzione

L'articolo smonta l'idea che scrivere codice pulito fin dall'inizio basti a evitare il debito tecnico: anche con le migliori intenzioni il debito si accumula comunque, perché la causa non è quasi mai la scarsa capacità del team, ma un disallineamento di comprensione fra ciò che serve al business e ciò che viene effettivamente costruito.

## Due strategie: investire in design o abbracciare il ciclo rush-learn-refactor

Per ridurre il debito alla radice si può investire di più nella fase di design — analisi più approfondita, più discussione con gli stakeholder sull'evoluzione presente e futura del progetto, cercando lo "sweet spot" fra sforzo di design e debito accumulato. Ma quando il contesto di business cambia rapidamente, un approccio più agile può essere preferibile: il ciclo *rush, learn, refactor* — scrivere codice velocemente, imparare il più possibile sulla realtà del business, poi rifattorizzare per consolidare — accetta consapevolmente la creazione di debito, a patto di ripagarlo a breve termine con codice pulito e facile da rifattorizzare, tempo dedicato regolarmente al refactoring, e apprendimento continuo su cosa funziona e cosa va cambiato.

La chiusura dell'articolo è pragmatica: quale delle due strategie scegliere dipende da quanto è prevedibile il futuro del progetto — investire in design quando il dominio è stabile, abbracciare il ciclo rush-learn-refactor quando l'incertezza è alta.

## Vedi anche

- [[../person/ward-cunningham|Ward Cunningham]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/cose-il-debito-tecnico-e-come-affrontarlo-in-modo/content.md`
- [productheroes.it](https://www.productheroes.it/cosa-e-debito-tecnico-agile/)
