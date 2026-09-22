---
title: "Ultime Modifiche"
type: recent-changes
updated: 2026-09-22
---

# Ultime Modifiche

Registro delle pagine toccate nell'ultima sessione di lavoro sul piano di studio — non uno storico cumulativo: a ogni nuova sessione questa pagina viene sovrascritta con il nuovo elenco, non integrata. Serve a ritrovare rapidamente cosa è cambiato senza dover confrontare a mano `raw/` e `wiki/`.

**Sessione del 2026-09-22** — Compilazione di due articoli della serie *Exploring Generative AI* di martinfowler.com, catturati come draft vuoti in una sessione precedente e ora studiati da Daniele con appunti personali reali: *The Economic Benefit of Refactoring* (Giles Edwards-Alexander) e *TDD inside the agent loop - theater or actual value?* (Birgitta Böckeler). Prima applicazione dello standard di compilazione introdotto con *Peopleware* (riscrittura in prosa, non riassunto; box `[!info] Approfondimento aggiunto in fase di compilazione` con ricerca online aggiuntiva) a contenuti di tipo `article`, non solo `book`.

## Raw aggiornati

- **The Economic Benefit of Refactoring** — `raw/knowledge/article/refactoring-economic-benefit/content.md`
  Frontmatter corretto: `topics` da `ai-engineering` (id di piano, errato in questo contesto) a `refactoring`, `ai-development` (id reali della tassonomia `wiki/topics/`); `status: captured` → `studied`; `study.started_at`/`completed_at: 2026-09-22`. Sezione "Connections" corretta con i link giusti. Corpo (Summary, My Notes) lasciato intatto — appunti di Daniele, non modificati.
- **TDD inside the agent loop - theater or actual value?** — `raw/knowledge/article/tdd-in-the-agent-loop/content.md`
  Stesse correzioni di frontmatter: `topics` → `tdd`, `ai-development`; `status: studied`; date di studio `2026-09-22`. "Connections" corretta.

## Pagine wiki compilate create

- **The Economic Benefit of Refactoring** — [[content/article/refactoring-economic-benefit|pagina]] (nuova)
  Sintesi in prosa dei tre concetti chiave (refactoring, token, input/output), dei tre passaggi dell'esperimento (baseline 159k token → cleanup 8h → risultato 27k token, -83%) e delle tre lezioni sorprendenti (l'AI non si autopulisce, l'organizzazione conta più della dimensione, l'"effetto scogliera"), ciascuna con paragrafo dedicato. Due box di approfondimento con ricerca online: dati di Augment Code e Vantage sul token spend nei loop agentici, e il report DORA 2025 sull'AI come amplificatore delle pratiche esistenti. Sezione di note personali che collega l'articolo al suo gemello sul TDD.
- **TDD inside the agent loop - theater or actual value?** — [[content/article/tdd-in-the-agent-loop|pagina]] (nuova)
  Sintesi in prosa dell'esperimento di Böckeler (tre workflow, tre risultati principali, la tabella dei quattro obiettivi umani del TDD vs la realtà per un agente, i quattro approcci alternativi proposti), ciascun elemento enumerato con paragrafo dedicato. Tre box di approfondimento con ricerca online, esplicitamente richiesti da Daniele: il contro-parere di Jason Gorman (il TDD aiuta a gestire il contesto limitato del modello, non la qualità del design), il filone "TDD per la fiducia nel comportamento" (SD Times, caso Ask Redfin), e la ricerca su TDAD che distingue cosa del TDD serve solo all'umano (il rituale rosso-verde-refactor) da cosa resta utile anche per l'agente (sapere quali test sono rilevanti). Sezione di note personali che sviluppa l'idea di Daniele del TDD come "checkpoint umano" nel loop, collegata a *Humans and Agents in Software Engineering Loops* già in archivio.

## Pagine Topic aggiornate

- **Refactoring** — [[topics/refactoring|pagina]]
  Nuova sezione "Il refactoring come leva economica nell'era degli agenti AI", con box DORA 2025. Footnote `[^refactoring-economic]` aggiunta, Sintesi e Vedi anche estesi.
- **TDD** — [[topics/tdd|pagina]]
  Nuova sezione "TDD dentro il loop degli agenti: teatro o valore reale?", che sintetizza il verdetto di Böckeler, il contro-parere di Gorman e la ricerca su TDAD, con un box di lettura conciliante (autonomia piena vs checkpoint umani). Footnote `[^tdd-agent-loop]` aggiunta, Sintesi riscritta per includere il nuovo asse "cosa succede quando il TDD lo esegue un agente", Vedi anche esteso.
- **AI Development** — [[topics/ai-development|pagina]]
  Nuova sezione "L'economia e la disciplina del lavoro con agenti di coding", che introduce entrambi gli articoli come coppia complementare (costo economico della struttura del codice / disciplina di processo del TDD) e rimanda ai topic dedicati per l'approfondimento. Sintesi estesa da tre a quattro livelli, footnote e Vedi anche aggiornati.

## Pagine di indice aggiornate

- **By Type** — [[by-type|pagina]] — totale 78→80 contenuti, Article 35→37, le due nuove voci inserite in ordine alfabetico con annotazione *(studiato 2026-09-22)*.
- **Completati** — [[completed|pagina]] — stessa correzione di conteggio, elenco alfabetico aggiornato con le due nuove voci.
- **Study LLM Wiki — Index** — [[index|pagina]] — "Stato attuale" aggiornato con la nuova nota sui due articoli e il totale a 80.

## Vedi anche

- [[content/article/refactoring-economic-benefit|The Economic Benefit of Refactoring]]
- [[content/article/tdd-in-the-agent-loop|TDD inside the agent loop - theater or actual value?]]
- [[topics/refactoring|Refactoring]]
- [[topics/tdd|TDD]]
- [[topics/ai-development|AI Development]]
