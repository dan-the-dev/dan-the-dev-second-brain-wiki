---
title: "Large language model"
type: concept
topics: []
raw_source: raw/knowledge/concept/large-language-model/content.md
updated: 2026-08-22
---

# Large language model

**Modello di apprendimento automatico per il linguaggio naturale**

Un large language model (LLM) è un modello di apprendimento automatico, tipicamente basato sull'architettura Transformer, addestrato su enormi quantità di testo per predire e generare linguaggio naturale. Alla base di sistemi come Claude, ChatGPT e Gemini, gli LLM sono anche il motore tecnico degli agenti AI applicati all'ingegneria del software (code review, generazione di codice, pair programming assistito), tema ricorrente in diversi contenuti di questo archivio dedicati all'impatto dell'AI sul lavoro degli sviluppatori.

Due limiti strutturali del modello, discussi nel retreat ThoughtWorks 2026 raccontato da Ivett Ördög, spiegano direttamente perché le pratiche di codice pensate per gli umani restino rilevanti anche quando chi legge il codice è un LLM. Il primo è di provenienza dei dati: un LLM è addestrato prevalentemente su codice scritto da umani per essere letto da umani, quindi è quel tipo di codice — convenzionale, con nomi che comunicano intento — che comprende e genera meglio, mentre codice denso o scritto secondo convenzioni non standard offre al modello meno pattern da cui generalizzare. Il secondo è di natura architetturale: la finestra di contesto di un LLM è un vincolo rigido di dimensione, l'equivalente tecnico di una "soglia di attenzione" limitata — per cui qualunque tecnica che aiuti un umano a orientarsi in una porzione limitata di codice alla volta (funzioni piccole, basso accoppiamento, nomi espliciti) aiuta un LLM allo stesso modo, riducendo quanto contesto deve tenere "in memoria" per ragionare correttamente. Questi due vincoli sono anche il fondamento tecnico del dibattito, più ampio, se un agente basato su LLM vada pensato come un compilatore (che rigenera codice da zero, rendendo la sua leggibilità secondaria) o come un ingegnere che mantiene una codebase esistente nel tempo — approfondito nel topic [[../../topics/ai|AI]].

## Indice dei contenuti collegati in questo archivio

- [[../article/humans-and-agents-in-software-engineering-loops|Humans and Agents in Software Engineering Loops]] (menzione)
- [[../article/why-did-martin-fowler-invite-60-engineers-to-a-ski-resort|Why did Martin Fowler invite 60 engineers to a ski resort?]] (menzione)

## Fonte

- Appunti grezzi originali: `raw/knowledge/concept/large-language-model/content.md`
- Wikipedia: [Large language model](https://en.wikipedia.org/wiki/Large_language_model)
