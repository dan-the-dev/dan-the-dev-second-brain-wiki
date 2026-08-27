---
title: "Ultime Modifiche"
type: recent-changes
updated: 2026-08-27
---

# Ultime Modifiche

Registro delle pagine toccate nell'ultima sessione di lavoro sul piano di studio — non uno storico cumulativo: a ogni nuova sessione questa pagina viene sovrascritta con il nuovo elenco, non integrata. Serve a ritrovare rapidamente cosa è cambiato senza dover confrontare a mano `raw/` e `wiki/`.

**Sessione del 2026-08-27** — Compilazione del video "Come funziona CLAUDE CODE spiegato da un Developer" e correzione di un errore di trascrizione sistematico ("Claude" trascritto come "Cloud" in più contenuti relativi a Claude Code e Claude Cowork), presente nell'import Recall originale.

## Correzione "Cloud" → "Claude"

Durante la compilazione è emerso che l'import originale conteneva un errore di trascrizione ricorrente: riferimenti a **Claude Code** e **Claude Cowork** (prodotti Anthropic) erano scritti come "Cloud Code" e "Cloud Cowork" in diversi contenuti grezzi, e i wikilink corrispondenti puntavano a un'entità `cloud-code` che in realtà è un prodotto reale e distinto — **Cloud Code di Google**, plugin IDE per Google Cloud — rimasto quindi invariato e non toccato da questa correzione (vedi [[content/software/cloud-code|Cloud Code]]).

- **raw/knowledge/software/cloud-cowork/ → claude-cowork/** — cartella e id rinominati; titolo e testo corretti da "Cloud Cowork" a "Claude Cowork".
- **wiki/content/software/claude-cowork.md** (rinominata da cloud-cowork.md) — titolo corretto; aggiunto un box `[!warning]` che segnala una possibile inaccuratezza pregressa nella descrizione catturata (menziona videoconferenza/app mobile, funzionalità che non corrispondono al reale Claude Cowork) e la probabile duplicazione con [[content/software/cowork|Cowork]] — segnalato per verifica manuale, non corretto nel merito per non inventare contenuto.
- **raw/knowledge/software/cowork/content.md** — corretto "Anthropic's earlier Cloud Code tool" → "Claude Code tool".
- **raw/knowledge/video/claude-cowork-la-guida-completa-per-creare-i-tuoi/content.md** — corretti oltre 30 punti nel testo grezzo dell'altro video già in archivio: "Cloud Code"/"Cloud Cowork"/"Cloud Desktop"/"Cloud MD" → "Claude Code"/"Claude Cowork"/"Claude Desktop"/"CLAUDE.md", il typo "Claud" → "Claude", "Cloud in Chrome" → "Claude in Chrome", "Antropic" → "Anthropic", wikilink `[[cloud-code]]`/`[[cloud-cowork]]` → `[[claude-code]]`/`[[claude-cowork]]`.
- **raw/knowledge/video/come-funziona-claude-code-spiegato-da-un-dev/content.md** — corretti i wikilink nella sezione Connections (il testo del corpo era già corretto).
- **[[content/software/claude-code|Claude Code]]** (nuova pagina, raw + wiki) — l'archivio non aveva un'entità propria per il prodotto Anthropic: i riferimenti finivano erroneamente sull'entità Google. Creata con nota che spiega il motivo.

## Nuovi contenuti raw

- **claude-code** — `raw/knowledge/software/claude-code/content.md`
  Nuova entità software per Claude Code (Anthropic), creata perché mancante — vedi sezione sopra.
- **giuseppe-funicello** — `raw/knowledge/person/giuseppe-funicello/content.md`
  Nuova entità persona per l'autore del video studiato in questa sessione, non presente nell'import originale.

## Nuove pagine wiki compilate

- **Come funziona CLAUDE CODE spiegato da un Developer** — [[content/video/come-funziona-claude-code-spiegato-da-un-dev|pagina]]
  Content page del video studiato: architettura interna di Claude Code (loop, tool registry, permessi, CLAUDE.md, compaction, MCP/hook/subagenti, skill come frammenti di prompt), con 3 box di approfondimento (paper ReAct, finestra di contesto, MCP come standard aperto).
- **Claude Code** — [[content/software/claude-code|pagina]]
  Nuova pagina entità software, vedi sezione di correzione sopra.
- **Giuseppe Funicello** — [[content/person/giuseppe-funicello|pagina]]
  Nuova pagina persona per l'autore/speaker del video, con bio da ricerca diretta (LinkedIn, canale YouTube).

## Pagine entità aggiornate (backlink + contenuto integrato)

- **Cowork** — [[content/software/cowork|pagina]]
  Aggiunto un paragrafo sul rapporto diretto con Claude Code (stesso motore, limitazioni aggiuntive) e backlink a Claude Code/Claude Cowork.
- **Claude (language model)** — [[content/software/claude-language-model|pagina]]
  Aggiunto un paragrafo sulla scelta Opus/Sonnet come compromesso capacità/budget di token, con backlink al nuovo video.
- **OpenAI Codex** — [[content/software/openai-codex|pagina]]
  Aggiunto il confronto tecnico Claude Code/Codex (TypeScript vs Rust, voce non confermata su una riscrittura in Rust) tratto dal nuovo video.
- **Anthropic** — [[content/organization/anthropic|pagina]]
  Aggiunto Claude Code come secondo prodotto collegato (prima era presente solo Claude language model).
- **YouTube** — [[content/website/youtube|pagina]]
  Aggiunti entrambi i video Claude Code/Claude Cowork come contenuti ospitati, seguendo la convenzione già in uso nella pagina.
- **Claude Cowork** — [[content/software/claude-cowork|pagina]]
  Vedi sezione di correzione sopra.

## Topic page aggiornate

- **AI** — [[topics/ai|pagina]]
  Nuova sezione "Dentro l'harness" che rende concreto, con la meccanica tecnica del nuovo video, il concetto di harness già introdotto nel topic; footnote e Persone citate aggiornate.
- **Tecnologia** — [[topics/technology|pagina]]
  Nuova sezione "Sotto il cofano: loop, tool registry e compaction" con un box di approfondimento sul paper ReAct (Yao et al., 2022); footnote e Software collegati aggiornati.

## Viste aggiornate

- **By Type** — [[by-type|pagina]]
  Aggiunto il nuovo video, conteggi aggiornati da 77 a 78 contenuti (9→10 video).
- **Completati** — [[completed|pagina]]
  Aggiunto il nuovo video all'elenco alfabetico, conteggi aggiornati, intro riformulata per includere anche l'aggiunta del 2026-08-27.
- **Study LLM Wiki (Index)** — [[index|pagina]]
  Conteggi aggiornati a 78, aggiunta nota sulla correzione Cloud→Claude di questa sessione.

## Vedi anche

- [[completed|Completati]]
- [[by-type|By Type]]
