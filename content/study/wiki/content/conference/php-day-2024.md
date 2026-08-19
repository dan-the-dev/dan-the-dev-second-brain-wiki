---
title: "PHP Day 2024"
type: conference
topics: ["php", "software-development"]
status: done
raw_source: raw/knowledge/conference/php-day-2024/content.md
updated: 2026-08-19
---

# PHP Day 2024

PHP Day 2024 è una conferenza italiana dedicata all'ecosistema PHP, con sessioni che spaziano dalle novità del linguaggio (PHP 8.1-8.4) alle pratiche di progettazione API, dal decision making tecnico all'automazione delle pipeline CI/CD, fino a una panoramica sull'AI generativa applicata a PHP.

## API eleganti con Laravel

Una delle sessioni più pratiche ha mostrato pattern per costruire API "crafty" con Laravel, portando alla luce due strumenti poco noti: l'header HTTP `ETag`, un identificatore di versione di una risorsa utile per il caching lato client senza bisogno di infrastruttura di cache lato server, e la possibilità nativa di Laravel di testare le risposte di un'API contro una specifica OpenAPI — un modo, secondo lo speaker, più robusto di tenere la documentazione allineata al codice rispetto alla generazione da annotazioni. È stato citato anche [Redoc](https://github.com/Redocly/redoc), una libreria che genera automaticamente siti di documentazione a partire da una specifica OpenAPI.

> [!info] Approfondimento aggiunto in fase di compilazione
> L'header `ETag` fa parte dello standard HTTP/1.1 (RFC 7232) e viene generalmente usato in coppia con header condizionali come `If-None-Match`: il client invia il valore ricevuto in una risposta precedente e il server, se la risorsa non è cambiata, può rispondere con un semplice `304 Not Modified` invece di ritrasmettere l'intero payload — un risparmio di banda importante per API con risposte pesanti e cambiamenti poco frequenti.

## Novità di PHP 8.1–8.4

Un talk tenuto da un maintainer del linguaggio ha ripercorso le novità principali delle ultime versioni. Fra quelle segnalate come meno conosciute: gli attributi `#[\SensitiveParameter]` introdotti in PHP 8.2, che nascondono automaticamente dati sensibili (come password) dagli stack trace e dalla stampa testuale degli oggetti — un miglioramento non banale per la sicurezza del logging in produzione — e la funzione `json_validate()` di PHP 8.3, utile solo nei casi in cui l'unico obiettivo sia la validazione, dato che se poi serve anche il dato JSON parsato bisogna comunque richiamare `json_decode()`.

## Monionlith: onion architecture in un monolite

La sessione "Monionlith" ha proposto l'applicazione dell'onion architecture (architettura a cipolla) all'interno di un monolite, come alternativa più graduale alla riscrittura completa verso microservizi. Il consiglio pratico condiviso è di iniziare il refactoring "affettando dall'esterno verso l'interno" (dai livelli periferici verso il core di dominio). È stato citato [deptrac](https://github.com/qossmic/deptrac), uno strumento di analisi statica per PHP che aiuta a comunicare, visualizzare e far rispettare le decisioni architetturali (ad esempio vietando dipendenze dirette fra livelli che dovrebbero restare separati).

## Decision making tecnico

Una sessione dedicata al processo decisionale ha proposto un framework in 7 passi (identificare la decisione, raccogliere informazioni rilevanti, identificare alternative, valutare le evidenze, scegliere fra le alternative, agire, rivedere la decisione e le sue conseguenze) insieme alla tecnica del "pre-mortem": immaginarsi un anno nel futuro con la decisione rivelatasi un disastro, e scrivere in 5-10 minuti la breve storia di quel disastro per far emergere rischi altrimenti invisibili.

Sul decision making di squadra, un punto centrale: il Lead developer non prende la decisione, ne *facilita* la presa da parte del team. Il framework proposto prevede di decidere chi è responsabile della decisione finale (spesso il lead, ma "responsabile" non significa "chi decide da solo"), dargli i "sudo rights", coinvolgere gli altri per costruire consenso, creare e reiterare spesso una visione tecnica condivisa, e documentare le decisioni tramite ADR (Architecture Decision Record).

> [!info] Approfondimento aggiunto in fase di compilazione
> Gli ADR (Architecture Decision Record) sono documenti brevi e versionati, tipicamente salvati nello stesso repository del codice, che registrano una decisione architetturale, il contesto in cui è stata presa e le conseguenze attese. Il formato più diffuso è quello proposto da Michael Nygard nel 2011 ("Documenting Architecture Decisions"), oggi uno standard de facto in molti team di ingegneria per rendere tracciabile il "perché" dietro alle scelte tecniche, non solo il "come" attuale del sistema.

## Automazione con GitHub Actions

Una sessione dedicata a GitHub Actions ha mostrato usi meno comuni dell'automazione via pipeline: controllo automatico delle licenze delle dipendenze, cache delle route, verifica della compilazione Tailwind, upload di asset su bucket S3, tag e release automatici basati su milestone con calcolo automatico della versione semver, compilazione e upload di binari. Sono stati segnalati anche [act](https://github.com/nektos/act) (per eseguire le GitHub Actions localmente, sia per testarle sia come sostituto di un Makefile) e la possibilità di usare condizionali per ottimizzare le pipeline (ad esempio saltare i test PHPUnit quando cambia solo CSS) e di scrivere step in Python invece che in Bash.

## Contribuire a PHP

Un talk da un core contributor ha condiviso alcuni spunti sulla PHP Foundation e su come iniziare a contribuire: alcune estensioni hanno solo l'8% di code coverage, quindi tradurre la documentazione o aggiungere test è un buon punto di ingresso. È stato ricordato un momento di forte rischio per il progetto, quando il linguaggio contava solo due maintainer attivi e uno dovette fermarsi per motivi personali — un promemoria della fragilità di alcuni progetti open source anche quando alla base di infrastrutture enormi.

## AI generativa in PHP

Un talk di uno speaker di Elasticsearch ha offerto un'introduzione chiara a come funzionano LLM e AI generativa, per poi presentare librerie per introdurre l'AI in applicazioni PHP e il caso d'uso principale promosso da Elasticsearch: creare un vector database per dare contesto all'AI e ottenere risposte più pertinenti (un pattern RAG). Sono stati citati [Ollama](https://github.com/ollama/ollama) (un approccio "Docker-like" per eseguire LLM localmente) e [LLPhant](https://github.com/theodo-group/LLPhant), una libreria PHP che fornisce interfacce sia per popolare un vector database sia per interagire con l'AI, supportando sia OpenAI sia Ollama.

## Sintesi

PHP Day 2024 mostra un ecosistema PHP maturo su più fronti contemporaneamente: linguaggio in evoluzione continua (sicurezza, validazione), pratiche architetturali per modernizzare monoliti senza riscritture drastiche, cultura di decision making e documentazione tecnica sempre più strutturata, automazione avanzata delle pipeline, e un'adozione crescente ma pragmatica dell'AI generativa.

## Vedi anche

- [[../concept/rag|RAG]]
- [[../software/elasticsearch|Elasticsearch]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/conference/php-day-2024/content.md`
