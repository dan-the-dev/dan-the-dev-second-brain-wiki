---
title: "The Product Engineer Company: How Portkey Works and Builds Its Product"
type: article
topics: ["product-development"]
status: done
raw_source: raw/knowledge/article/the-product-engineer-company-how-portkey-works/content.md
updated: 2026-08-19
---

# The Product Engineer Company: How Portkey Works and Builds Its Product

**Autore: Gregor Ojstersek**, con contributi di Vrushank Vyas (Portkey)

Case study su Portkey — azienda di infrastruttura AI (AI gateway, observability, guardrail, governance, prompt management), in procinto di essere acquisita da Palo Alto Networks al momento della cattura dell'articolo — costruita attorno a una scelta organizzativa radicale: 24 "product engineer", zero product manager, un solo product designer, su 32 persone totali.

## Ogni ingegnere è anche product manager

Ogni ingegnere di Portkey ha piena ownership end-to-end delle decisioni di prodotto, un modello reso possibile — secondo l'articolo — dalla natura fortemente tecnica del prodotto stesso (infrastruttura), che richiede comprensione tecnica per prendere buone decisioni di prodotto. Il team è distribuito, con un nucleo negli Stati Uniti e il resto in India, e lo stack tecnico è basato su Node.js/TypeScript, con un impegno esplicito a ridurre gli strumenti separati tenendo tutto (anche i task) come file Markdown dentro il repository principale.

## AI generativa nel workflow interno

Circa il 40% del codice di Portkey è generato da AI — un dato coerente con un prodotto infrastrutturale dove i cambiamenti, per quanto delicati e costosi, beneficiano comunque dell'accelerazione. L'azienda è passata da Cursor a Claude Code, e quasi ogni dipendente costruisce skill personalizzate di uso quotidiano. Portkey ha costruito due agenti AI interni: un task-tracking agent, e "Dagger", un pricing agent — costruito sopra il Claude Agent SDK — che scansiona oltre 1.600 modelli LLM su 80 provider per tenere traccia di cambi di prezzo, feature e API, aprendo automaticamente PR quando rileva variazioni.

## Disciplina nella scelta delle feature

Portkey è molto selettiva su cosa costruire: ogni feature deve giustificare la propria esistenza risolvendo un bisogno reale e ampiamente rilevante, e viene costruita solo quando il team può garantirne l'affidabilità su scala di produzione (centinaia di milioni di richieste, trilioni di token al giorno). L'azienda ha deliberatamente scelto di non costruire alcune funzionalità — come le valutazioni AI — per restare concentrata sul proprio strato infrastrutturale. Tutti i 100+ clienti enterprise girano sullo stesso identico prodotto, senza build personalizzate o branch di release separati.

## Cultura "a bilanciere"

L'organizzazione ingegneristica è intenzionalmente strutturata "a bilanciere" (barbell): a un estremo ingegneri concentrati su affidabilità e infrastruttura, all'altro ingegneri capaci di trasformare rapidamente idee in prototipi funzionanti. Ci si aspetta che ogni ingegnere scriva feature, gestisca la UI, scriva documentazione, supporti i clienti e faccia debugging — un modello non adatto a tutti, ma pensato per chi apprezza un'ownership ampia. L'azienda usa l'AI anche nei colloqui tecnici (consentita, perché riflette il lavoro quotidiano reale) ma non nei colloqui comportamentali o di leadership, dove si vogliono vedere pensieri e idee della persona.

## Vedi anche

- [[../software/claude-language-model|Claude]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/the-product-engineer-company-how-portkey-works/content.md`
- [newsletter.eng-leadership.com](https://newsletter.eng-leadership.com/p/the-product-engineer-company-how)
