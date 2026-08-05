---
title: Candidatura — Levels Software Engineer (Backend Focused)
company: Levels
role: Software Engineer (Backend Focused)
status: in-progress
applied: 2026-07-22
updated: 2026-07-24
tags: [job-search, candidatura, 2026]
---

# Levels — Software Engineer (Backend Focused)

https://levelstech.it

## L'azienda

**Sito**: [levelstech.it](https://levelstech.it)
**Settore**: Regtech — compliance documentale salute e sicurezza sul lavoro
**Prodotto**: Operatore Sicurezza — automatizza il controllo documentale H&S per general contractor verso subappaltatori (edilizia, industria ad alto rischio)
**Fondazione**: 2024 — 1 anno consulenza su 15 progetti → pivot prodotto giugno 2025
**Founder**:
- Tommaso Lucarelli (CEO)
- Emanuele Baldelli
- Filippo Caliò
- Dario Del Gaizo (copre ruolo tecnico parzialmente, lascia molta autonomia al team)
**ARR**: ~€400k con 50-51 clienti
**Team**: 12 persone — metà sales, metà prodotto
**HQ**: Talent Garden Calabiana, Milano
**Funding**: ~€1M totale (bootstrap consulenza + angel round + SAFE non ancora firmato) — nessun round strutturato ⚠️
**Runway**: da confermare da Dario ⚠️

### Roadmap
- Fine anno: coprire intera value chain ufficio sicurezza + portale subappaltatori per caricare documenti autonomamente
- Prospettiva: supplier network/trust layer edilizia; replica modello Francia, Spagna, Germania (normativa EU derivata dalla stessa direttiva 81/08 italiana)

## Il ruolo

**Titolo**: Software Engineer (Backend Focused) — con ambizione CTO
**Split**: ~100% backend
**Natura**: Doppia architettura:
1. Web app monolitica Next.js/React (upload doc, gestione cantieri/imprese)
2. Servizio API distribuito su AWS Lambda + Step Functions (estrazione dati documenti, aggregazione, motore regole compliance — centinaia/migliaia doc in pochi minuti, multi-tenant parallelo)
**Ambizione dichiarata**: crescita verso ruolo C-level / CTO — nessun CTO attuale
**Location**: ibrida flessibile, nessun giorno fisso — full remote possibile per profili eccezionali (Dario cita esempio CTO trovato a Bari)

### Perché si è liberato il ruolo
Membro chiave del team (entrato come SW engineer, cresciuto verso ruolo simil tech-lead) ha accettato offerta da scale-up americana. Obiettivo: non solo sostituire ma alzare il livello.
⚠️ **NON MENZIONARE MAI questa cosa in colloquio — istruzione esplicita di Guido.**

## Stack tecnico

- **Frontend**: Next.js / React (web app monolith) ✅
- **Backend API**: AWS Lambda + Step Functions ⚠️ — linguaggio da verificare (probabilmente TypeScript/Node.js data la scelta Next.js, ma da confermare)
- **IaC**: ~20k righe CloudFormation ⚠️ gap principale — ok anche Terraform/Pulumi background
- **CI/CD**: GitHub ✅
- **Database**: PostgreSQL / relazionale ✅
- **AI/coding agentico**: dato per scontato dal day one — Claude Code o simili ✅

## Compensazione

| Voce | Dettaglio |
|------|-----------|
| RAL | €55.000 – €65.000 in base a seniority/fit ⚠️ gap vs €70k target Dan |
| Stock option | ✅ |
| CCNL | Commercio, 14 mensilità |
| Buoni pasto | 20/mese × €8 = €160/mese |
| Welfare | €1.000/anno (Satispay) |
| Remote | Negoziabile per profili eccezionali |

⚠️ **RAL**: top band €65k vs target Dan €70k — gap €5k. Guido sta esplorando flessibilità con Dario/Filippo.

## Processo di selezione

| Step | Stato | Note |
|------|-------|------|
| 1 — Screening CV + call Welyk | ✅ | |
| 2 — Colloquio tecnico con Welik (29/07) | ✅ | Architettura + infra + tech + esperienze |
| 3 — Colloquio tecnico con team Levels | ✅ 05/08 | Esercizio pipeline documenti + discussione approccio XP — vedi note |
| 4 — Colloquio culturale/motivazionale founder | In attesa | |

## Note post colloquio tecnico (29/07)

**Focus**: domande architetturali generali + infrastruttura AWS + tecnologie/linguaggi + esperienze

**Emerso positivo**: approccio, proattività, product-driven mindset, accettare trade-off → fit percepito come totale
**Emerso gap**: Python + infra specifica — non autonomia dal giorno uno, ma Dan ha dichiarato disponibilità a studiare e mettersi in gioco in modo importante
**Preoccupazione**: Dan non sicuro di aver convinto pienamente il tecnico sulle domande di trade-off — le domande che ha fatto su quel tema erano migliorabili
**Wildcard**: incertezza sull'impressione del tecnico — Dan confida nel rapporto con Guido per arrivare almeno alla call con l'azienda

## Fit con Dan

### Punti di forza
- ✅ **"Fame del giorno zero, esperienza del giorno mille"** — Dan viene da una startup che ha ridotto le ore, non da una corporate. Non è "seduto". È la frase testuale di Dario sul profilo ideale.
- ✅ **Italiano nativo** — requisito knockout. L'azienda lavora su normativa e clienti italiani al 100%.
- ✅ **Claude Code in produzione** — Levels lo dà per scontato dal day one. Dan lo usa ogni giorno. Differenziatore diretto vs candidati che "lo stanno esplorando".
- ✅ **XP/TDD/CI-CD** — pratiche che i founder (ex-BI Amazon) non hanno portato. Dan introduce cultura engineering che manca nel team.
- ✅ **Next.js/React** — conosce il frontend, utile per ragionare su contratti API e experience sviluppatori.
- ✅ **PostgreSQL** — solido.
- ✅ **Drive C-level** — Dan ha già fatto TL in 3 aziende. Path verso CTO esiste qui concretamente, non è vago.
- ✅ **Startup DNA** — 4 esperienze in startup. Debito tecnico consapevole, velocità, pragmatismo: è il vocabolario XP.
- ✅ **Milano/Lainate** — vicino, nessun problema ibrido (Guido aveva scritto "da Torino" per errore).

### Punti di attenzione
- 🔴 **IaC in autonomia**: 20k righe CloudFormation, ownership completa richiesta. Dan ha lavorato su IaC in collaborazione, mai da solo. Sarà il focus del colloquio tecnico.
- ⚠️ **Linguaggio backend Lambda**: da chiarire. Se TypeScript/Node gap quasi zero; se Python, gap reale.
- ⚠️ **RAL**: top band €65k vs target €70k. In negoziazione via Guido.
- ⚠️ **Funding leggero**: ~€1M totale, SAFE non firmato, runway da confermare. Rischio finanziario da valutare prima di accettare eventuale offerta.

## Pro di Levels per Dan (valutazione lavorativa)

- **Path CTO esplicito e concreto** — non "potrebbe succedere", è il motivo dell'apertura
- **Autonomia totale** — Dario lascia molta autonomia decisionale, cultura "pirata autogestita"
- **Impatto immediato e visibile** — 12 persone, ogni scelta tecnica conta
- **AI dal day one** — Claude Code è expected, non sperimentale. Ambiente ideale per il modo di lavorare di Dan
- **Ownership architetturale reale** — nessun layer burocratico, nessun comitato architettura
- **Traction reale** — €400k ARR in 1 anno di prodotto è un segnale concreto
- **Internazionalizzazione in roadmap** — non è una startup che resta italiana per sempre
- **Stock option** su azienda early = upside potenziale

## Contro di Levels per Dan (valutazione lavorativa)

- **Funding leggero e runway incerto** — ~€1M, SAFE non firmato. Prima di accettare, chiedere mesi di cassa espliciti
- **RAL sotto target** — anche al top band, €65k vs €70k. Gap piccolo ma reale
- **IaC da imparare in autonomia** — 20k righe CF senza affiancamento può essere stressante all'inizio
- **Regtech/costruzioni** — dominio di nicchia, meno glamour di altri verticali
- **Nessun CTO formale ora** — significa che Dan fa quel lavoro parzialmente senza il titolo/equity da co-founder
- **Team molto giovane** — meno senior da cui imparare, Dan è il più esperto

## Prep colloquio team tech

### Prodotto — contesto utile
- **150k+ documenti analizzati**, 2000+ cantieri gestiti
- L'AI verifica: ITP, DURC, DVR, visura, patente a crediti, POS, documenti personale/macchinari
- **Albo Imprese**: un'impresa qualificata una volta vale su tutti i cantieri — solo i doc specifici del cantiere (POS) restano locali
- Caso Wolf System: da 45 a 5 minuti per fornitore (−90%)
- Espansione in roadmap: food, pharma, manifatturiero (stesso pattern, regole diverse)

### Domande probabili con risposte suggerite

**Q1 — Bulk document pipeline (ZIP con centinaia di documenti)**
> "Come progetteresti la pipeline per processare una ZIP con 200 documenti di un subappaltatore?"

Risposta:
- Upload diretto su S3 via pre-signed URL (evita API Gateway limits su file grandi)
- S3 event → Lambda orchestrator che unzippa e crea un task per documento
- Step Functions **Map state** con `maxConcurrency` per il fan-out parallelo (evita throttling Lambda)
- Ogni Lambda: estrae, OCR/parsing, valida contro le regole di compliance
- Risultati aggregati su DB; UI notificata via WebSocket o polling
- Dead Letter Queue + retry per i documenti falliti
- Gestione partial success: report granulare (doc X passato, doc Y fallito per scadenza DURC)

Trade-off da citare: "Preferisco async sempre per il bulk — il sync è tentante ma porta timeout e UX fragile. Step Functions ti dà visibilità sullo stato di ogni task senza dover costruire infrastruttura custom."

---

**Q2 — Tracking scadenze e notifiche**
> "Come gestiresti il monitoraggio delle scadenze documentali su 2000 cantieri?"

Risposta:
- Ogni documento ha `expiry_date` in DB
- EventBridge Scheduler (cron daily) → Lambda che query documenti in scadenza nei prossimi 30/15/7 giorni
- Notification dispatch via SES (email) o SNS; canale configurabile per tenant
- Idempotenza: log degli avvisi già inviati per evitare duplicati su retry
- Pro attivo: non solo "scaduto" ma "sta per scadere" — il prodotto avvisa prima, non dopo

---

**Q3 — Rule engine per la compliance**
> "Come costruiresti il motore di regole che verifica la conformità documentale? Le regole cambiano per legge."

Risposta:
- Regole come dati (JSON su DB), non hardcoded — permette di aggiungere nuovi settori (food, pharma) senza deploy
- Versioning delle regole: ogni verifica registra quale versione ha usato → decisioni storiche riproducibili
- Pipeline di valutazione: ogni documento passa attraverso le regole applicabili al suo tipo
- "Ho applicato lo stesso principio su sistemi di compliance finanziaria a Muffin — la logica di business che cambia per legge non deve stare nel codice"

---

**Q4 — Multi-tenant isolation nel processing parallelo**
> "Quando processi in parallelo per più clienti, come garantisci che un tenant grosso non rallenti gli altri?"

Risposta:
- Tenant ID propagato su tutte le Lambda invocation (metadata, non payload)
- Step Functions execution separata per tenant — isolamento nativo
- Rate limiting per tier: tenant premium ha concurrency maggiore, free tier capped
- SQS FIFO con MessageGroupId per tenant se serve ordering
- "Ho gestito multi-tenant con AWS Lambda a Mymenu — l'errore classico è dimenticare il tenant context in un Lambda intermedio"

---

**Q5 — AI extraction con confidence bassa**
> "Cosa succede quando l'AI non riesce a estrarre dati da un documento con certezza?"

Risposta:
- Confidence score threshold: sopra X → auto-approvato, sotto Y → coda di revisione manuale
- Human-in-the-loop per i casi ambigui — l'AI non decide da sola su compliance documentale
- Audit trail completo: ogni decisione AI loggata con snapshot documento + score → riproducibile e difendibile legalmente
- Feedback loop: le correzioni manuali alimentano il miglioramento del modello
- "In contesti regolatori l'auditability non è nice-to-have, è un requisito — la GDPR e il D.Lgs 81/08 richiedono tracciabilità delle decisioni"

---

### Domande da fare io al team

1. **"Qual è il principale pain point tecnico della pipeline di processing oggi?"** — capisce dove interverrò concretamente fin dal primo giorno

2. **"Come testate le Lambda functions e la Step Functions pipeline?"** — valuta la maturità engineering e se c'è TDD o solo test manuali

3. **"Quando un documento non viene estratto correttamente dall'AI, qual è il workflow attuale?"** — capisce se il human-in-the-loop è già implementato o è ancora un problema aperto

4. **"L'espansione a food e pharma è già in corso o in roadmap?"** — valuta la scalabilità del rule engine e quanto il codice è già astratto per questo

5. **"Come gestite il debito tecnico nelle 20k righe di CloudFormation?"** — capisce approccio pragmatismo vs qualità, allineamento XP

## Note post colloquio team tech (05/08)

**Esercizio**: pipeline documenti async (SQS, Step Functions, config-driven, aggregated view eventual consistency). Andato bene.

**Segnale positivo**: Dan ha nominato problemi reali che il team aveva già percepito — riconosciuto esplicitamente durante la call. Ragazzi giovani, entusiasti, mente aperta, bravi tecnicamente.

**Segnale di attenzione**: preoccupazione sul bilanciamento XP/TDD/trunk-based con la velocità. Gap culturale evidente ma con apertura. Opportunità di mini-academy interna — c'è tantissimo lavoro da fare su best practices, technical excellence, pratiche agili.

**Gap confermato**: CloudFormation infra (~20k righe), modifiche settimanali — da studiare attivamente.

**Non chiesto**: frequenza presenza ufficio (menzionato 1-2 giorni). Da chiarire con i founder.

**Valutazione**: se RAL raggiunge almeno livello Muffin attuale → potrebbe essere prima opzione.

## Domande da tenere per i founder (step 4)

- RAL + equity terms concreti
- Runway attuale in mesi di cassa
- SAFE: chi sono gli investitori, quando si chiude?
- Path CTO: timeline, trigger, equity associata?
- Full remote confermato anche post-onboarding?

---

**Risorse**
- [[../ricerca-lavoro-2026|← Ricerca Lavoro 2026]]
- ⚠️ Contesto da documento riservato Welyk — non citare in colloquio
