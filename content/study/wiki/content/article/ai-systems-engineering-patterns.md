---
title: "AI Systems Engineering Patterns"
type: article
topics: ["ai", "ai-development", "technology"]
status: done
raw_source: raw/knowledge/article/ai-systems-engineering-patterns/content.md
updated: 2026-08-19
---

# AI Systems Engineering Patterns

Rassegna di 30 pattern di ingegneria dei sistemi AI, raccolti in 5 parti, frutto di 2,5 anni di esperienza pratica dell'autore. L'obiettivo dichiarato è mostrare a ingegneri senior e technical leader (CTO, Principal, Staff Engineer) che la loro esperienza tradizionale resta applicabile all'AI, a patto di adattare la prospettiva: molti pattern classici dell'ingegneria del software — composizione, separazione delle responsabilità, vincoli, caching, validazione dell'input, firewall — restano validi nei sistemi AI, semplicemente con nomi nuovi. Il cambiamento più profondo, secondo l'autore, riguarda l'interfaccia: i sistemi tradizionali parlano linguaggi strutturati, mentre i modelli AI "parlano" vettori, token e linguaggio naturale — e l'utente finale continua a pensare in linguaggio naturale.

## Prompt come codice sorgente

Un primo gruppo di pattern tratta il prompt come codice: template engine (Jinja2, Mustache, template literal ES6) per costruire prompt programmaticamente a partire da input utente strutturato (form, dropdown, slider), riducendo la libertà dell'utente ma aumentando qualità e consistenza — con l'accortezza di far passare le variabili interpolate attraverso un middleware di sanitizzazione, per prevenire attacchi di prompt injection indiretta. Un pattern collegato, lo Structured JSON Prompting, sposta il modello mentale da "scrivere prosa" a "scrivere configurazione", forzando l'output del modello ad aderire a uno schema JSON rigido (tramite Structured Outputs nativi o librerie come Instructor o il Vercel AI SDK), garantendo type safety al costo di una minore flessibilità e di un piccolo overhead di latenza.

## Tool use, MCP e sandboxing

Il pattern di Function Calling/Tool Use trasforma un chatbot in un agente, permettendo all'LLM di eseguire funzioni reali (chiamare API, leggere database, eseguire codice), disaccoppiando la logica del modello da quella di business — al prezzo di maggiore latenza e superficie di attacco. Il Model Context Protocol (MCP) viene descritto come uno standard — una sorta di "USB-C per l'AI" — che permette a un client di scoprire dinamicamente strumenti esposti da un server MCP, con il vantaggio di evitare il vendor lock-in ma il costo di un livello di astrazione aggiuntivo e di un modello di sicurezza ancora in evoluzione. Il pattern di Sandboxing fornisce all'agente un ambiente di esecuzione isolato e persistente in cui eseguire comandi shell e manipolare file — abilitando un "pensare facendo" che riduce drasticamente le allucinazioni su compiti matematici/logici, mantenendo stato persistente per workflow multi-step complessi.

## Gestione del contesto e retrieval

Sul fronte della gestione del contesto, l'articolo confronta Context Augmentation Graph (caricare l'intero dataset rilevante nel prompt, semplice ma costoso e limitato dalla finestra di contesto) con RAG (Retrieval-Augmented Generation, che usa database vettoriali o indici di ricerca per iniettare dinamicamente solo gli snippet rilevanti, riducendo le allucinazioni a costo di maggiore fragilità e complessità di tuning). Vengono discussi anche il Context Caching (il provider elabora una volta i prefissi statici del prompt, riducendo drasticamente costo e latenza per compiti ripetitivi) e il Semantic Caching (un database vettoriale usato come cache chiave-valore, che restituisce risposte cache quando una nuova query è semanticamente simile a una precedente sopra una soglia data — concettualmente affine al pattern di memoization).

> [!info] Approfondimento aggiunto in fase di compilazione
> Il paper che ha introdotto formalmente il RAG ("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", Lewis et al., Meta AI 2020) proponeva originariamente un retriever neurale addestrato end-to-end col generatore; l'architettura oggi dominante nell'industria — un database vettoriale esterno più un LLM generico non fine-tuned sul retrieval — è una semplificazione pratica di quel modello originale, resa possibile dai grandi miglioramenti nella qualità degli embedding generici.

## Routing, cascading e affidabilità

Il Router Pattern classifica le query prima che raggiungano un modello, indirizzando i task complessi verso modelli "densi" e quelli semplici verso modelli più economici (con un cenno alle architetture Mixture of Experts come Mixtral), ottenendo risparmi di costo significativi al prezzo di possibili errori di instradamento. Il pattern di Cascading agisce come un "try-catch sequenziale per l'intelligenza": si tenta prima con un modello economico, e solo in caso di fallimento si passa a uno più costoso, garantendo un pavimento di qualità minimo. L'LLM Gateway introduce un proxy centralizzato fra applicazione e provider di modelli, gestendo autenticazione, rate limiting e failover — disaccoppiando il codice applicativo dalle specifiche del vendor, ma introducendo un nuovo singolo punto di fallimento.

## Flow Engineering: da chatbot ad agente

L'ultimo pattern discusso, il Flow Engineering, riconosce che chiedere a un singolo modello di scrivere codice, testarlo e correggere errori in un unico prompt tende a fallire; la soluzione è scomporre il compito in passi deterministici controllati da un linguaggio di programmazione convenzionale, usando macchine a stati (come LangGraph) per gestire il flusso logico — ad esempio tornando al passo "scrivi codice" con il messaggio di errore come contesto, se un passo fallisce. Questo pattern segna, secondo l'autore, il passaggio concettuale da semplici "chatbot" ad "agenti" capaci di svolgere lavoro reale.

## Sintesi

Una rassegna densa e pragmatica, orientata a chi progetta sistemi AI in produzione più che a chi li usa: copre l'intero ciclo, dall'interfaccia con l'utente (prompt) alla gestione del contesto (RAG, caching), fino all'affidabilità e al costo (routing, cascading, gateway) — un complemento tecnico diretto al corso "AI for Typescript Developers" presente in questo archivio.

## Vedi anche

- [[../concept/rag|RAG]]
- [[../course/ai-for-typescript-developers|AI for Typescript Developers]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/ai-systems-engineering-patterns/content.md`
- [blog.alexewerlof.com](https://blog.alexewerlof.com/p/ai-systems-engineering-patterns)
