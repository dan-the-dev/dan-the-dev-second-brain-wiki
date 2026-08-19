---
title: "Claude Cowork: la guida completa per creare i tuoi agenti AI personali da zero"
type: video
topics: ["ai", "technology"]
status: done
raw_source: raw/knowledge/video/claude-cowork-la-guida-completa-per-creare-i-tuoi/content.md
updated: 2026-08-19
---

# Claude Cowork: la guida completa per creare i tuoi agenti AI personali da zero

**Video** condotto da Alberto Cabas Vidani

Guida pratica a Claude Cowork, presentato come strumento pensato per utenti non tecnici che vogliono usare un agente AI per compiti reali sul proprio computer e sul browser — descritto come una versione più semplice e "sicura" di Claude Code, con un'interfaccia più intuitiva e limitazioni pensate per prevenire danni accidentali.

## Cos'è e come si differenzia da Claude Code

Claude Cowork gira all'interno di una macchina virtuale per evitare di eseguire operazioni direttamente sul sistema operativo dell'utente — una scelta di sicurezza che ha un costo in termini di prestazioni (setup iniziale di circa 40 secondi, utilizzo CPU che può arrivare al 90%) rispetto a Claude Code, più veloce e adatto a power user che lavorano direttamente sul proprio ambiente senza virtualizzazione. L'utente sceglie una cartella di lavoro all'interno della propria cartella utente (non è possibile selezionare cartelle di sistema, una misura di sicurezza esplicita), e può scegliere fra i modelli Opus (per task complessi, con maggior consumo di token) e Sonnet (per task più semplici).

> [!info] Approfondimento aggiunto in fase di compilazione
> La scelta di eseguire l'agente in una macchina virtuale isolata, invece che direttamente sul sistema operativo host, riflette un pattern di sicurezza noto come "sandboxing": limitare il raggio d'azione di un processo (in questo caso un agente AI con permessi ampi) a un ambiente contenuto, in modo che un errore o un comportamento indesiderato non possa propagarsi al sistema più ampio. È lo stesso principio su cui si basano i container Docker o le macchine virtuali usate nei CI/CD pipeline per l'esecuzione di codice non fidato.

## Casi di studio pratici

Il video mostra due casi di studio concreti. Nel primo, Cowork viene incaricato di organizzare una collezione di foto (inclusi file RAW), identificandone il soggetto, scrivendo metadati e categorizzandole — un processo che ha richiesto correzioni manuali quando alcune categorizzazioni si sono rivelate errate, e che si è interrotto una volta per un falso errore di rate limit, risolto riavviando la chat. Nel secondo caso, tramite l'estensione "Claude in Chrome", Cowork naviga autonomamente YouTube Studio per estrarre e analizzare le statistiche di un canale, producendo un report con pattern rilevanti e raccomandazioni, e permettendo di salvare il processo come "ricetta" riutilizzabile per analisi periodiche.

## Skill, connettori e plugin

Il video descrive tre meccanismi di estensione di Cowork: i connettori (server che collegano Cowork ad app esterne, distinti in connettori web e connettori desktop, questi ultimi con più capacità perché operano direttamente sul computer dell'utente), le skill (dette "competenze": procedure testuali riutilizzabili, create manualmente o tramite uno "skill creator" dedicato, che Cowork riconosce ed esegue quando richiamate) e i plugin (pacchetti predefiniti di skill, comandi e connettori, organizzati per categoria — finance, data, legal — creati principalmente da Anthropic o partner al momento della registrazione).

## Limiti e considerazioni pratiche

Il video segnala apertamente i limiti dello strumento: la necessità di un abbonamento Pro a pagamento (con limiti di utilizzo che si resettano ogni 5 ore, e limiti settimanali aggiuntivi salvo piani superiori), il maggiore consumo di risorse rispetto a Claude Code dovuto alla virtualizzazione, e lo stato ancora beta del prodotto, con possibili disconnessioni o fallimenti recuperabili (riavvio, logout/login, reinstallazione).

## Sintesi

Un contenuto di tipo guida pratica/prodotto più che teorico, utile come riferimento procedurale su come impostare e usare Claude Cowork per compiti reali — di taglio complementare rispetto ai contenuti più teorici sull'uso dell'AI nello sviluppo software presenti altrove nell'archivio.

## Fonte

- Appunti grezzi originali: `raw/knowledge/video/claude-cowork-la-guida-completa-per-creare-i-tuoi/content.md`
- YouTube: [video](https://www.youtube.com/watch?v=dgptpnVsQLo)
