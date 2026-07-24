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
| 2 — Colloquio tecnico con Pieralberto (tech mentor esterno) | 📅 Mercoledì 29/07 | Architettura AWS, document processing |
| 3 — Colloquio tecnico con team Levels | In attesa | Sfide reali di architettura, requisiti non definiti |
| 4 — Colloquio culturale/motivazionale founder | In attesa | |

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

## Domande per il colloquio tecnico — mercoledì (Pieralberto)

1. "In quale linguaggio sono scritte le Lambda functions? TypeScript/Node o altro?" — chiarisce se il gap backend è reale o presunto.
2. "Puoi walkthrough-armi l'architettura del document processing pipeline? Come sono organizzate le Step Functions e dove sono i pain point attuali?" — dimostra curiosità architetturale profonda.
3. "Come vi approcciate al debito tecnico consapevole in questa fase? Qual è la filosofia tra velocità e qualità del codice?" — valida allineamento XP e mindset pragmatico.

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
