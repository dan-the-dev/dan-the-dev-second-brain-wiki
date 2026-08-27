---
title: "Come funziona CLAUDE CODE spiegato da un Developer"
type: video
topics: ["ai", "technology"]
status: to_watch
raw_source: raw/knowledge/video/come-funziona-claude-code-spiegato-da-un-dev/content.md
updated: 2026-08-27
---

# Come funziona CLAUDE CODE spiegato da un Developer

**Video** di [[../person/giuseppe-funicello|Giuseppe Funicello]] ("Giuppi"), 32:48

Screencast tecnico che analizza l'architettura interna di [[../software/claude-code|Claude Code]] partendo dal codice sorgente, con l'obiettivo dichiarato di rispondere a una domanda precisa: cosa distingue un coding agent da una semplice chat con un modello linguistico. La tesi centrale è che il valore non sta nel modello ma nell'**harness** — il sistema che costruisce il contesto, espone gli strumenti, gestisce i permessi e fa girare il ciclo — e che una volta compreso il ciclo di base (chiamata al modello → richiesta di uno strumento → esecuzione → risultato reinserito nel contesto → ripeti) si è capito "il 90% di come funziona tutto il resto". Le affermazioni tecniche più specifiche (nomi di file e funzioni) si basano su un codice sorgente che l'autore dichiara essere trapelato per errore il 31 marzo, una versione ricostruita non aggiornata ("3.13"): un limite esplicitamente riconosciuto anche dall'autore stesso.

## Il ciclo agentico: non si parla mai direttamente al modello

Il punto di partenza è che scrivere in una chat, e ancor più in un agente complesso come Claude Code, non significa parlare direttamente con l'LLM: esiste sempre un flusso agentico attorno alla chiamata, l'harness. Prima di tutto viene verificato lo stato di billing/token (se l'utente non ha token disponibili, la richiesta si ferma subito); poi viene costruito il **contesto** — system prompt, storico della conversazione, strumenti disponibili — descritto come "la parte singolarmente più importante" del lavorare con LLM e agenti, in quanto è ciò che raggiunge davvero il modello. Solo a questo punto la richiesta viene inviata.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il pattern "chiama il modello → il modello richiede uno strumento → esegui → reinserisci il risultato nel contesto → ripeti", che il video presenta come la struttura fondativa di ogni agente AI, ha una genealogia accademica precisa: è formalizzato nel paper *ReAct: Synergizing Reasoning and Acting in Language Models* (Yao et al., 2022, ICLR 2023), che per primo ha proposto di intercalare esplicitamente passi di ragionamento e passi d'azione nello stesso ciclo, invece di trattarli come fasi separate.

## Strumenti (tool): la vera differenza da una chat semplice

Oltre alla capacità di "ragionare", il modello riceve un elenco di **strumenti** che può richiedere di usare — leggere un file, scriverlo/modificarlo, fare una ricerca online — e questa è, secondo il video, "la grande differenza fra sistemi semplici come una chat e Claude Code". Quando il modello risponde, o dà una risposta diretta oppure richiede l'uso di uno strumento; una volta eseguito, il risultato viene restituito al modello nel giro successivo del loop. Nel codice, questo loop vive nel file `query.ts`: un ciclo `while` che gestisce il susseguirsi di chiamate al modello tramite dependency injection, inviando ad ogni turno lo storico completo dei messaggi, il system prompt, il "thinking level" (legato al budget disponibile), gli strumenti e una serie di opzioni — indipendentemente dal modello specifico chiamato (Opus, Haiku, Sonnet), che si limita sempre a continuare la conversazione sapendo di poter richiedere uno strumento.

## Costruire il system prompt: identità di base, CLAUDE.md e contesto dinamico

Il contesto raccoglie istruzioni a più livelli. Alla base c'è un'**identità immutabile** ("sei Claude, un assistente di coding"), assemblata nel file `prompts.ts` da una funzione (`getSystemPrompt`) che unisce molti pezzi diversi, seguita dalle definizioni degli strumenti disponibili (es. `FileWriteTool`), necessarie perché il modello sappia quali e quanti strumenti può richiedere — con tecniche di ottimizzazione (liste più piccole, categorie) per evitare di appesantire troppo il contesto.

I file **CLAUDE.md** — markdown che definiscono il comportamento dell'agente — si applicano su più livelli (sistema, utente/home, progetto), vengono letti e il loro contenuto inserito nel contesto. A questo si aggiunge il **contesto dinamico**, non scritto in alcun file: file aperti nell'editor, file modificati secondo **git**, diagnostica del linguaggio via **LSP** (Language Server Protocol) — tutto ciò che riflette la situazione corrente, non una configurazione statica. L'autore segnala esplicitamente il rischio opposto: avere troppi file CLAUDE.md appesantisce il contesto inutilmente, e la sua raccomandazione pratica è mantenerlo il più snello possibile, dato che i modelli sono sempre più capaci — un'osservazione che vale per qualsiasi agente, non solo Claude Code.

## Il registro degli strumenti e il sistema dei permessi

Il **tool registry** è l'elenco degli strumenti reali con cui l'agente opera sul mondo/sul computer: lettura e scrittura di file, comandi bash (in particolare `grep`), elenco directory, ricerca web, web fetch. Un esempio end-to-end chiarisce il meccanismo: l'utente chiede di modificare il componente calendario React → il modello usa uno strumento di ricerca per trovarlo → una volta trovato, richiede lo strumento di lettura file → il file viene letto, convertito in testo e il risultato accodato al contesto per il turno successivo. Le operazioni fisiche (come scrivere un file) passano sempre attraverso un **sistema di permessi**, che dipende non solo dalla modalità globale (dall'"accetta tutto"/YOLO mode al chiedere ogni volta) ma anche dal **tipo di permesso specifico per strumento** e dal suo **livello di rischio**: in *plan mode*, ad esempio, l'agente non può mai scrivere file (tranne il file del piano stesso) ma può sempre leggerli, perché la lettura è necessaria per costruire il piano.

## Finestra di contesto e compaction

Poiché ogni chiamata di strumento e ogni turno aggiungono contenuto, il contesto cresce continuamente fino a raggiungere il limite di token del modello — la **finestra di contesto**. Claude Code applica tre livelli di "compaction" (compressione): **automatica** (quando il contesto si riempie, l'agente riassume tutto il lavoro svolto finora — un'operazione che l'autore descrive categoricamente come una perdita di qualità, perché riassumere significa perdere informazione, da cui la raccomandazione di preferire operazioni più atomiche), **manuale** (il comando `/compact`, con istruzioni personalizzabili su come comprimere) e **micro-compaction** (nel codice: svuotare selettivamente i risultati di strumenti già usati, ad esempio centinaia di "read file" ormai superflui).

> [!info] Approfondimento aggiunto in fase di compilazione
> Questo limite strutturale — un contesto che cresce ma non può crescere all'infinito — è lo stesso vincolo già discusso in [[../concept/large-language-model|Large language model]] a proposito della finestra di contesto come "capacità di attenzione" del modello: la compaction descritta in questo video è, in pratica, una delle tecniche concrete con cui un harness gestisce quel limite strutturale nella pratica quotidiana di un coding agent.

## Estendere l'agente: MCP, hook e subagenti

Oltre al file CLAUDE.md, il video individua due meccanismi ulteriori di estensione. Il **Model Context Protocol (MCP)** aggiunge strumenti esterni al di là di quelli locali — ad esempio dare all'agente visibilità su un database aziendale o su un software di editing video — con lo stesso meccanismo di fondo (dire al modello che esistono nuovi strumenti e come chiamarli), ma con l'esecuzione che avviene da remoto tramite lo strumento MCP. Gli **hook** si agganciano a momenti specifici del ciclo di vita dell'agente (prima/dopo un task) per iniettare istruzioni — l'autore li ha usati in passato ma ora tende a evitarli, perché complicano il sistema. I **subagenti** funzionano come piccole versioni dell'agente principale ma con un **contesto separato**: l'agente principale delega un'operazione specifica (es. security review, code review) a un subagente il cui contesto non porta con sé l'intera storia — la loro "grande forza" è proprio dividere il contesto per far lavorare meglio l'agente, anche se l'autore non ne è un fan sfegatato per la complessità che aggiungono. Segnala inoltre che la versione corrente di Claude Code (non quella trapelata) usa i subagenti in modo estensivo, eseguendoli **in parallelo** per velocizzare il lavoro.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il Model Context Protocol non è una funzionalità interna di Claude Code ma uno standard aperto, annunciato pubblicamente da Anthropic il 25 novembre 2024 come specifica indipendente dal singolo agente, proprio per permettere a client diversi di scoprire dinamicamente gli strumenti esposti da un server esterno — lo stesso protocollo già discusso, da un'altra angolazione, nel topic [[../../topics/technology|Tecnologia]] a proposito dell'ecosistema di estensione di Claude Cowork.

## Le skill: semplici frammenti di prompt

Il video smonta esplicitamente la percezione delle skill come qualcosa di "magico": una skill è semplicemente un **pezzo di prompt** — un file con header (nome, descrizione, strumenti consentiti) seguito da un corpo di istruzioni aggiuntive. Claude Code carica in contesto tutte le skill disponibili (a livello utente, progetto, o fornite da plugin); quando l'utente chiede, ad esempio, "review these changes", il modello — sapendo di avere una skill `review-code` — richiede di usarla come farebbe con un tool, e uno `SkillTool` dedicato si occupa di trovarla, prendere il suo contenuto e **inserirlo nel contesto**, dopodiché l'agente prosegue il compito originale arricchito da quelle istruzioni. La sintesi del video è che, una volta capito che nel loop il modello dice sempre "usa questo strumento", tutto diventa semplice — perché quello strumento può essere molte cose diverse, inclusa "aggiungi la skill al prompt".

## Conclusioni: un "mappazzone" utile da studiare

L'autore conclude definendo Claude Code un **"mappazzone"** — un grosso blob disordinato con molte funzionalità nascoste e mille pezzi incastrati — comunque utile da studiare a fondo; per chi vuole costruire un proprio agente, consiglia di partire da un design più semplice e razionale piuttosto che da Claude Code stesso. Il messaggio centrale resta però che, sotto la complessità apparente, si tratta fondamentalmente di un **loop**: ogni chiamata al modello sa di avere strumenti a disposizione, un system prompt costruito su più livelli, e una serie di sistemi di supporto (cache, limiti interni, delega a modelli più economici per certe chiamate) che restano fuori dall'ambito del video ma fanno parte della stessa orchestrazione.

## Sintesi

Un contenuto complementare, non sovrapposto, ai video più orientati all'uso pratico di Claude Cowork e Claude Code già presenti nell'archivio (vedi [[../../topics/technology|Tecnologia]] e [[../../topics/ai|AI]]): dove quelli descrivono *cosa si può fare* con questi strumenti, questo scende nell'architettura interna — loop, tool registry, permessi, compaction, meccanismi di estensione — con riferimenti diretti al codice sorgente, pur con la cautela che le informazioni più specifiche si basano su una versione non aggiornata e trapelata del codice.

## Vedi anche

- [[../software/claude-code|Claude Code]]
- [[../software/claude-cowork|Claude Cowork]]
- [[../software/cowork|Cowork]]
- [[../software/openai-codex|OpenAI Codex]]
- [[../software/claude-language-model|Claude (language model)]]
- [[../concept/large-language-model|Large language model]]
- [[../website/youtube|YouTube]]

- [[../person/giuseppe-funicello|Giuseppe Funicello]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/video/come-funziona-claude-code-spiegato-da-un-dev/content.md`
- YouTube: [video](https://www.youtube.com/watch?v=25pEmK5FxgI)
