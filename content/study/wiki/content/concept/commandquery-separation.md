---
title: "Command–query separation"
type: concept
topics: []
raw_source: raw/knowledge/concept/commandquery-separation/content.md
updated: 2026-08-19
---

# Command–query separation

**Principio di progettazione software**

Il Command-Query Separation (CQS) è un principio, formulato da Bertrand Meyer nell'ambito del linguaggio Eiffel, secondo cui ogni metodo di un oggetto dovrebbe essere o un *comando* che produce un effetto collaterale osservabile senza restituire un valore, oppure una *query* che restituisce un valore senza modificare lo stato del sistema — mai entrambe le cose insieme. Applicato con rigore, semplifica il ragionamento su un sistema perché separa nettamente ciò che "fa qualcosa" da ciò che "risponde a una domanda". È un'idea affine, ma distinta, dal pattern architetturale CQRS (Command Query Responsibility Segregation), che ne estende il principio a livello di architettura applicativa.

## Indice dei contenuti collegati in questo archivio

Nessun collegamento diretto rilevato tramite wikilink nell'archivio.

## Fonte

- Appunti grezzi originali: `raw/knowledge/concept/commandquery-separation/content.md`
- Wikipedia: [Command–query separation](https://en.wikipedia.org/wiki/Command–query_separation)
