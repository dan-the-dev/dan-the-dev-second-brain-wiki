---
title: "Come (non) usare l'AI per programmare? - Reaction a @antirez"
type: video
topics: ["ai", "ai-development", "technology"]
status: done
raw_source: raw/knowledge/video/come-non-usare-l-ai-per-programmare-reaction-a/content.md
updated: 2026-08-19
---

# Come (non) usare l'AI per programmare? - Reaction a @antirez

**Video di reaction** a un articolo di [[../person/salvatore-sanfilippo|Salvatore Sanfilippo]] (antirez), creatore di Redis

Video di reazione e commento a un articolo di Salvatore Sanfilippo sull'uso dei large language model nella programmazione, che discute la tesi centrale dell'autore — l'AI come "conoscenza a livello di dottorato" a disposizione del programmatore — e la mette a confronto con l'esperienza pratica di chi realizza il video.

## La posizione di Sanfilippo: human-in-the-loop, non vibe coding

Secondo quanto riportato, Sanfilippo sostiene che un programmatore non dovrebbe interagire con i modelli linguistici direttamente dentro il proprio editor di codice, ma mantenere un approccio human-in-the-loop che preservi il controllo sul contesto e sul processo, evitando l'aggiunta di strumenti che possano portare a una perdita di controllo. La sua raccomandazione pratica è usare i modelli fuori dall'IDE, con un approccio "copia e incolla", per evitare il "vibe coding" — accettare e usare codice generato dai modelli senza revisionarlo a fondo — che considera ancora troppo rischioso.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il termine "vibe coding" è stato coniato pubblicamente da Andrej Karpathy in un post su X nel febbraio 2025, per descrivere un modo di programmare in cui ci si affida quasi interamente ai suggerimenti di un LLM, accettandoli senza leggerli riga per riga e correggendo per tentativi quando qualcosa non funziona — un termine che nel giro di pochi mesi è diventato di uso comune (e controverso) nel dibattito sulla programmazione assistita da AI.

## Il contrappunto: qualità comparabile a un collega

Chi realizza il video offre un punto di vista diverso basato sull'esperienza diretta dell'ultimo anno: la qualità dell'output AI è paragonabile a quella di un altro professionista, revisionabile e migliorabile allo stesso modo, con il vantaggio di un ciclo di feedback molto più rapido. Contrariamente al timore di un "effetto camera d'eco" (idee ripetute), l'esperienza riportata è che l'AI fornisce soluzioni e prospettive diverse, in modo simile a lavorare con altre persone — inclusa l'esplorazione di modi nuovi di risolvere un problema.

## Domini ad alta complessità: dove l'AI non basta

Il video discute i limiti dell'AI in domini con complessità elevata — codice C con vent'anni di storia, ottimizzazioni di performance dove le best practice generiche non si applicano — dove serve competenza specifica e talvolta bisogna andare deliberatamente controcorrente rispetto alle convenzioni, un terreno su cui l'AI (allenata prevalentemente su pattern comuni) offre meno valore.

## Guard rail e casi d'uso

Il punto di convergenza fra le due posizioni è la necessità di "guard rail" chiari — linee guida esplicite che aiutano l'AI a produrre codice di qualità in modo simile a come lavorerebbe un programmatore umano disciplinato. L'AI viene descritta come particolarmente utile per compiti ripetitivi a basso carico cognitivo (boilerplate, form ripetitivi, bug fix di routine) — paragonati nel video all'ascoltare musica mentre si lavora in "autopilota" — liberando tempo per i compiti che richiedono attenzione piena.

## Il rischio di perdita di competenza

Viene citato un podcast di 6 ore di DHH sulla filosofia dell'uso dell'AI nella programmazione, e la preoccupazione, condivisa da una parte della comunità, che un uso eccessivo dell'AI possa portare a una perdita percepita di competenza — mentre altri lo vedono semplicemente come uno strumento che libera tempo per altri aspetti del lavoro di programmazione. Il video collega questo tema all'apprendimento per pratica diretta (in analogia con imparare uno strumento musicale o un'arte marziale, dove guardare tutorial non sostituisce la pratica), sottolineando l'importanza di scrivere codice attivamente, non solo copiare e incollare, per costruire "memoria muscolare" e comprensione profonda.

## Sintesi

Il video offre un confronto equilibrato fra due prospettive esperte e complementari sull'uso responsabile dell'AI nella programmazione: quella più cauta e strutturata di Salvatore Sanfilippo (mantenere il controllo, evitare l'integrazione diretta nell'IDE) e quella più pragmatica di chi la usa quotidianamente con buoni risultati, purché accompagnata da revisione critica e guard rail espliciti — un tema che dialoga direttamente con i contenuti sul corso "AI for Typescript Developers" presente in questo archivio.

## Vedi anche

- [[../course/ai-for-typescript-developers|AI for Typescript Developers]]
- [[../software/redis|Redis]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/video/come-non-usare-l-ai-per-programmare-reaction-a/content.md`
- YouTube: [video](https://www.youtube.com/watch?v=l0CeNpR3OaI)
