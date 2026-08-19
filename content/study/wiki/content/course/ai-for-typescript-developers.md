---
title: "AI for Typescript Developers"
type: course
topics: ["ai-development", "software-development", "technology"]
status: done
raw_source: raw/knowledge/course/ai-for-typescript-developers/content.md
updated: 2026-08-19
---

# AI for Typescript Developers

Corso pratico in tre giornate, orientato a sviluppatori TypeScript, sulla costruzione di applicazioni AI-powered usando il Vercel AI SDK. Copre i fondamentali dell'interazione con LLM (modelli, prompt, tool calling), lo streaming delle risposte, il pattern RAG e la gestione del contesto, il Model Context Protocol (MCP), i guardrail per l'uso sicuro dei tool e le pratiche di testing per applicazioni basate su LLM.

## Giorno 1 — Comprendere LLM, agenti e l'AI SDK

L'obiettivo della prima giornata è costruire applicazioni AI-powered comprendendo il ruolo del [Vercel AI SDK](https://vercel.com/docs/ai-sdk), descritto scherzosamente come "il jQuery dell'AI": un SDK che fornisce un'interfaccia unica per parlare con provider diversi, senza dipendere da Vercel o Next.js. L'SDK richiede come dati minimi un modello e un prompt, ma supporta anche system prompt, tools, un parametro `stopWhen` per abilitare conversazioni multi-step (di default l'SDK fa una sola chiamata), e la definizione strutturata dell'output (ad esempio in JSON).

Un punto centrale del corso riguarda il fatto che gli LLM non hanno memoria persistita: ogni messaggio inviato porta con sé l'intera conversazione precedente più il nuovo messaggio — e non possono eseguire azioni o prendere decisioni autonomamente, ma solo restituire testo in risposta a testo. Per dare loro "strumenti" si usano i tool (o *function calling*): il modello risponde chiedendo di eseguire un tool che ritiene utile, il client lo esegue e restituisce il risultato in una nuova richiesta, mantenendo lo storico completo della conversazione.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il *function calling* (o tool calling) negli LLM è stato reso mainstream da OpenAI a metà 2023 con l'API Chat Completions, e da allora è diventato lo standard de facto per collegare un modello linguistico a sistemi esterni deterministici (database, API, calcoli). Martin Fowler ha scritto una guida di riferimento sul pattern: [Function Calling Using LLMs](https://martinfowler.com/articles/function-call-LLM.html).

## Giorno 2 — Streaming, memoria e RAG

La seconda giornata affronta lo streaming delle risposte tramite il metodo `streamText` (al posto di `generateText`), che restituisce un flusso di dati suddivisibile in chunk per dare l'effetto di scrittura "live" — gestito lato browser come `text/event-stream`.

Sul tema della gestione del contesto, il corso presenta cinque strategie di *memory management* (da implementare manualmente, poiché l'LLM non ha capacità di gestione della memoria propria): nessuna memoria (tutto nel contesto della conversazione), sliding window (si scartano i messaggi più vecchi quando la memoria si esaurisce), summary (si riassume la conversazione e si scarta lo storico), memoria selettiva (si mantengono solo i messaggi rilevanti), memoria esterna (lo storico viene salvato in un database interrogabile a necessità).

Il pattern RAG (Retrieval-Augmented Generation) viene descritto come un approccio in cui il modello non si affida solo ai propri dati di addestramento, ma prima di rispondere legge da una memoria esterna aggiuntiva — riassunto nella formula "search first, then write". La combinazione di embedding e vector database è la variante più diffusa di RAG per la "ricerca semantica": un embedding trasforma un testo in un vettore di numeri che ne rappresenta il significato, e la similarità fra vettori (valutata su decine di migliaia di dimensioni) permette di trovare contenuti semanticamente vicini anche se lessicalmente diversi (l'esempio citato è la vicinanza semantica fra "queen/king" e "sad/unhappy").

> [!info] Approfondimento aggiunto in fase di compilazione
> Il termine RAG (Retrieval-Augmented Generation) è stato introdotto in un paper di Meta AI (allora Facebook AI Research) del 2020, "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (Lewis et al.), che proponeva di combinare un modello generativo con un retriever neurale su un indice di documenti — l'architettura concettuale che sta ancora oggi alla base della maggior parte dei sistemi RAG basati su vector database.

Fra i punti pratici condivisi: è fondamentale specificare esplicitamente informazioni di base come la data corrente, perché gli LLM non vi hanno accesso autonomo; il contenuto del system prompt va scelto con cura perché viene "cachato" con più forza dal modello (anche se non condiviso fra conversazioni diverse); le operazioni deterministiche restano sempre sotto il controllo del codice, mai dell'LLM, e non bisogna mai fidarsi ciecamente dell'input dell'utente; il parametro `seed` rende le risposte deterministiche, utile per il debug.

Per il chunking di testi lunghi, viene raccomandato di evitare di spezzare in un punto che cambia il significato, preferendo una leggera duplicazione (overlap) fra chunk adiacenti per preservarne il contesto. Per migliorare la ricerca su grandi quantità di dati, viene descritta la tecnica di *query expansion* (generare varianti della domanda dell'utente per aumentare le probabilità di trovare risultati rilevanti nei vettori) insieme a tecniche di ranking e alla generazione di risposte ipotetiche come ulteriore strategia di ricerca.

## Giorno 3 — MCP, guardrail e testing

La terza giornata introduce il Model Context Protocol (MCP): un protocollo standard per esporre un tool remoto, così da non dover reimplementare da zero l'integrazione ogni volta che si vuole far interagire l'AI con uno strumento diverso. Gli MCP locali comunicano via stdin/stdout, quelli remoti via streaming HTTP e SSE; nel Vercel AI SDK si usa `createMCPClient`, definendo trasporto e URL, per poi recuperare con `.tools()` la lista dei tool remoti disponibili da passare direttamente a `generateText` o `streamText`.

Sul tema dei guardrail — i limiti imposti a un LLM per evitare comportamenti indesiderati — il corso presenta due modalità: "LLM as judge" (un secondo LLM valuta in modo oggettivo se una richiesta va ammessa, eventualmente con esempi few-shot di richieste ammesse/non ammesse) e l'enforcement via system prompt (specificare esplicitamente quali richieste sono ammesse e rifiutare le altre). Viene sottolineato come i rischi di prompt injection siano analoghi (e per certi versi peggiori) di quelli storici della SQL injection, dato il raggio d'azione più ampio e la platea di utenti meno tecnica.

Per il tool calling vengono condivise alcune best practice: specificare con precisione nella *tool description* quando un tool va usato, usare Zod per la validazione dei parametri, e usare il system prompt per governare policy e strategia (ordine di utilizzo, condizioni di abilitazione/disabilitazione). Un caso critico discusso: se un modello non riceve un parametro esplicito (es. il cliente risponde "quella che vuoi" a una domanda sul metodo di pagamento), tende a inventarselo — un rischio che si mitiga specificando nel system prompt regole come "ogni valore di ogni parametro di tool deve essere fornito esplicitamente dall'utente".

Sul testing, il corso distingue fra unit testing classico (l'SDK offre `MockLanguageModelV3` e `simulateReadableStream` per il mocking) ed *evals*: non unit test in senso stretto, ma chiamate dirette al modello con prompt di test, a cui si assegna uno score per valutare quanto la risposta soddisfi l'esigenza reale — utile anche per confrontare modelli diversi fra loro o per validare comportamenti specifici (ad esempio tramite `toolCallAccuracy`, se le chiamate ai tool sono quelle attese).

## Sintesi

Il corso offre una mappa pratica e aggiornata (autunno 2026, con riferimenti a strumenti e SDK di frontiera) di cosa serve davvero per costruire applicazioni AI-powered production-ready in TypeScript: non solo la chiamata al modello, ma gestione del contesto, retrieval, protocolli standard per i tool, guardrail di sicurezza e strategie di testing specifiche per sistemi il cui comportamento non è deterministico per natura.

## Vedi anche

- [[../concept/rag|RAG]]
- [[../concept/large-language-model|Large language model]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/course/ai-for-typescript-developers/content.md`
