---
title: Candidatura — Smartness Fullstack Team Leader
company: Smartness
role: Fullstack Team Leader - PHP & Node.js
status: in-progress
applied: 2026-07-22
updated: 2026-07-22
tags: [job-search, candidatura, 2026]
---

# Smartness — Fullstack Team Leader (SmartPMS)

https://www.linkedin.com/jobs/...
Seconda job description -> https://people-jobs.com/smartness/position/fullstack-team-leader-node-js-vue-js-a28fa4e1-e5a8-47a4-b396-aaaccc380612
## L'azienda

**Sito**: [smartness.io](https://smartness.io)
**Settore**: Hospitality tech — SaaS per accommodation providers
**Prodotto**: SmartPMS — gestione alloggi, revenue optimization, direct bookings
**Scala**: 4.000+ clienti, 40+ paesi, miliardi di € in bookings processati
**Stage**: Growth — "fastest-growing B2B SaaS in the industry"
**Notorietà**: Italy's Top 10 LinkedIn Startups
**Investitori**: Internazionali (non specificati)
**Location**: Remote

## Il ruolo

**Titolo originale**: Fullstack Team Leader — SmartPMS Engineering (PHP)
**Nuovo ruolo proposto**: Fullstack Team Leader — Node.js & Vue.js (colloquio 05/08)
**Team**: SmartPMS Engineering team
**Natura**: Leadership + hands-on coding (non ruolo puramente manageriale)
**Location**: Remote ✅

### Responsabilità chiave
- Lead del team + contributo diretto al codice in produzione
- Code review, promozione standard di qualità
- Supporto a decisioni architetturali complesse
- Collaborazione con PM, QA, DevOps su iniziative business-critical
- Gestione progetti multi-stakeholder con priorità in conflitto
- Hiring, onboarding, mentoring, crescita del team
- AI adoption nel workflow del team

## Stack tecnico

- **Backend primario**: **PHP + Laravel** ✅ (mandatory — stack storico di Dan)
- **Frontend**: Vue.js / React / Angular (Dan ha React)
- **Backend secondario**: Node.js ✅ (significant plus)
- **Cloud**: non specificato — infra distribuita cloud-based
- **AI**: uso attivo di AI tools nel workflow quotidiano (richiesto esplicitamente)
- **Altro apprezzato**: .NET, C#, Java, Spring (non richiesti)

## Compensazione

| Voce | Dettaglio |
|------|-----------|
| RAL | €45k–€75k (OTE) — top band per esperienza significativa |
| Equity | ✅ Accesso all'equity aziendale |
| Remote | ✅ Full remote |
| Note | "Exceptional candidates beyond standard range" — apertura dichiarata |

⚠️ **Target Dan**: €70k è raggiungibile ma è al top del range standard. Vale chiedere esplicitamente la top band dato il profilo.

## Processo di selezione

| Step | Stato | Data |
|------|-------|------|
| TestGorilla (Critical Thinking + video questions) | ✅ Completato | 23/07 |
| HR Interview 30 min con Anna Torbetto | ✅ Completato | 29/07 |
| Technical challenge JS (seconda chance da Anna) | ⚠️ Completato con problemi | 03/08 — piattaforma Testlify ha dato errori, segnalato ad Anna |
| **HM & Tech Interview — Emanuele Micheletti** | ✅ 05/08 ore 17:00 | Coding live a sorpresa — Dan si è impappinato ma ha ragionato a voce alta |
| "Big over interview" | ⏳ A breve | Potrebbe includere coding — CTO/PO/futuro riporto (da confermare) |

⚠️ Agosto = possibili rallentamenti per ferie.

## Note post HR call (29/07 — Anna Torbetto)

**Confermato:**
- Full remote ✅
- €75K ci stanno (forse era anche un po' basso) + ticket pasto quotidiani ✅
- Prima settimana di onboarding a Rovereto — logistica da organizzare
- Il ruolo è TL sull'**UNICO progetto ancora in PHP** — tutto il resto della suite è Node + Vue.js
- Team diretto: TL (Dan) + PM dedicato SmartPMS + CDO
- 130 persone totali — azienda stabile, cambiamenti forse più lenti

**Impressione:**
Anna Torbetto ottima — conversazione trasparente, Dan ha condiviso alcune situazioni complesse e le risposte di Anna sono piaciute molto. Approccio diretto e serio.

**⚠️ Preoccupazione crescita:**
Dan parte già al top del range standard (€75K). Da chiarire nelle fasi successive se c'è un percorso di crescita economica reale o se ci si ferma lì per anni. È il punto critico da sondare con PM/CDO.

---

## Fit con Dan

**Punti di forza**:
- PHP + Laravel: ✅ stack storico — Mymenu era Laravel, Fantapick è in Laravel attivo
- Node.js: ✅ forte
- React: ✅ solido
- 10+ anni e 3-5 anni TL: ✅ centra perfettamente i requisiti
- AI adoption esplicita: ✅ Claude Code + Cursor in produzione, differenziatore principale
- Mentoring e crescita del team: ✅ esperienza diretta (Alessia, 1:1 strutturate)
- Code review mindset: ✅ parte del workflow quotidiano
- Gestione stakeholder complessi: ✅ esperienza con roadmap e trade-off con product

**Punti di attenzione**:
- ⚠️ **Cultura hustle**: JD contiene segnali da leggere con attenzione — "work much harder than most", stress menzionato esplicitamente ("even though it might come with its stress"), disclaimer "we may need to part ways". Vale sondare in colloquio.
- Hospitality tech: dominio nuovo ma internazionale e stimolante
- RAL cap €75k — è il tetto, non il medio

## Prep colloquio Emanuele Micheletti (05/08 ore 17:00)

### Chi è Emanuele
- SWE su **Smartpricing** (prodotto Smartness) — pricing engine per 5K+ hotel
- Stack: Node.js, Kubernetes, Kafka, Nats, Redis, Opensearch, Docker
- Ha **raddoppiato le performance del pricing engine** — orientato fortemente all'ottimizzazione
- Ha creato una libreria di parsing usata da **80+ servizi interni**
- Lead di un team di 3 su Smartpaying (nuovo prodotto CRM 2024)
- Core maintainer di **mitmproxy** (44k stars su GitHub) — lavora in Rust, Swift, C
- Ha sviluppato Proxelar (1k stars) — MITM proxy toolkit
- Ha finanziato l'università con una web agency propria (Hekti)
- Laurea Magistrale Finance Math Engineering @ PoliTo (2023)
- Giovane (~26-27 anni) ma tecnicamente eccellente e con mentalità da builder

### 5 domande probabili da Emanuele

**Q1 — Node.js performance / profiling**
> "Hai mai ottimizzato un servizio Node.js con problemi di performance? Com'hai identificato il bottleneck?"
Ha raddoppiato le performance del pricing engine. Risposta: event loop blocking, profiling con clinic.js o node --prof, CPU-bound vs I/O-bound, caching strategico.

**Q2 — Sistema distribuito: ordering e idempotenza**
> "Come gestisci l'ordering dei messaggi e l'idempotenza in un sistema con più consumer in parallelo?"
Stack con Kafka + Nats. Risposta: Kafka partition key per ordering per entità, idempotency key su ogni messaggio, upsert idempotente sul DB, deduplication window.

**Q3 — Design: sistema real-time su migliaia di entità**
> "Come progetteresti un sistema che aggiorna i prezzi di 5000+ hotel in base a dati in tempo reale?"
È letteralmente il suo lavoro. Vogliono il ragionamento: fan-out strategy, caching per-hotel, invalidation, SLA per update latency.

**Q4 — Leadership: gestire disaccordi tecnici**
> "Com'hai gestito una situazione in cui il team aveva visioni diverse su una decisione architetturale?"
Risposta: approccio XP di decisione collettiva, ADR per documentare, esempi concreti da Mymenu/Muffin.

**Q5 — Vue.js gap**
> "La nostra suite usa Vue.js — hai esperienza?"
Risposta onesta: "Non è il mio framework primario, vengo da React. Stesso paradigma — composition API, Pinia. Ho già iniziato a guardarci."

### 5 domande da fare tu

1. "Ho visto che sei core maintainer di mitmproxy — come influenza il lavoro open source il modo in cui approcci il codice in produzione?"
2. "Il pricing engine gestisce 5K+ hotel — com'è strutturata l'architettura per garantire latenza e consistenza in tempo reale?"
3. "Avete sia Kafka che Nats — come avete deciso cosa va su uno vs l'altro?"
4. "Smartpaying è un nuovo prodotto — quali trade-off hai fatto costruendolo da zero?"
5. "Come team, quanto spazio c'è per introdurre nuove pratiche tecniche?"

## Note

Smartness era già nei radar di Dan nel 2023-2024 (2 job salvati su LinkedIn: Software Architect e Full Stack Engineering Lead). Questa candidatura è la più naturale del pool dal punto di vista del fit tecnico — PHP/Laravel è esattamente lo stack storico primario di Dan. La riserva principale è culturale, non tecnica.

---

## 🏨 Analisi prodotti Smartness (per il colloquio)

> Sito reale: **smartness.com** (smartness.io è in vendita su GoDaddy — non usarlo)
> Sede legale: Smartness Srl / Helium Srl — Arco (TN), Italia

### Il business in breve

Vertical SaaS B2B per l'hospitality: hotel, B&B, affitti vacanze, property manager con 5-150 unità. La proposta di valore è aiutare le strutture a crescere, ridurre la dipendenza dalle OTA (Booking.com, Airbnb) e automatizzare le operazioni quotidiane.

**Traction reale (2026)**:
- **5.000+ clienti** in **41 paesi**
- **€47M Series B** — round appena chiuso, crescita 6x dal Series A 2023
- **#1 fastest-growing B2B hospitality SaaS in Europa** (Sifted 250)
- Riconosciuta da Hotel Tech Report

### La suite di prodotti — tutto si chiama "Smart"

| Prodotto | Categoria | Cosa fa |
|----------|-----------|---------|
| **SmartPMS** ← *il tuo team* | Operations | All-in-one PMS: gestione prenotazioni, front desk, self check-in, payments, accounting, compliance. Automatizza il 90% delle operazioni. Multi-user, multi-property, multi-company. |
| **Smartpricing** | Revenue | Dynamic pricing AI: calcola il prezzo ottimale in tempo reale. +30% revenue annuo medio dichiarato. |
| **Smartchat** | Guest experience | AI chatbot 24/7 su Booking.com, WhatsApp, Airbnb, email. Gestisce il 70% delle domande degli ospiti. |
| **Smartconnect** | Marketing & CRM | Email marketing automatizzato, segmentazione clienti, marketplace di servizi/esperienze. |
| **Smartpay** | Payments | Pagamenti integrati: depositi, rimborsi, riconciliazioni, reminder automatici. |
| **Smartads** | Marketing | Gestione campagne Google e Meta, traffico verso sito diretto. |
| **Smartreputation** | Guest experience | Gestione recensioni, sentiment analysis, visibilità. |
| **Smartsite** | Marketing | Website builder per strutture ricettive, template ottimizzati. |
| **Smartresults** | Pay-per-result | Modello a performance: si paga in base ai risultati generati. |
| **Booking Engine** | Distribution | Canale di vendita diretto integrato nel sito della struttura. |
| **Channel Manager** | Distribution | Sync prezzi e disponibilità su 100+ OTA, GDS, metasearch, wholesaler. |

### SmartPMS in dettaglio — il prodotto del tuo team

SmartPMS è il core della piattaforma — tutto il resto ci si integra sopra. È il prodotto tecnicamente più complesso della suite.

**Funzionalità principali:**
- Dashboard operativa (revenue, prenotazioni, arrivi/partenze del giorno)
- Front desk planner + calendario prenotazioni con 20+ filtri
- Self check-in e gestione dati ospiti (conformità GDPR + invio dati autorità locali)
- Housekeeping & CMMS (manutenzione): task automatici, assegnazione, tracking real-time
- Accounting: fatture, ricevute, split pagamenti owner/guest, report finanziari
- Booking engine integrato (fino a +50% direct bookings dichiarato)
- Channel manager (100+ OTA in sync)
- Dynamic pricing nativo (integrazione Smartpricing)
- Quote builder, upselling integrato
- Owner portal (per property manager con più clienti/proprietari)

**Multi-tenant**: multi-user, multi-property, multi-company — architettura complessa

**Integrazioni esistenti**: Stripe, Vikey, Salto, Nuki, Feratel, Paytourist, Sevdesk, HBenchmark e altri

### Il mercato e i competitor

Smartness compete nel mercato PMS hospitality con:
- **PMS tradizionali** (Cloudbeds, Little Hotelier, Mews, Opera Cloud)
- **Revenue management standalone** (RateGain, Duetto)
- **Nuovi entranti AI-first** (startup varie)

Il differenziatore principale è l'integrazione verticale: tutto in uno stack unico invece di best-of-breed disconnesso. Il modello Smartresults (pay-per-result) è innovativo nel settore.

### Cosa aspettarsi ti chiedano al colloquio HR

- "Cosa sai di Smartness e del prodotto SmartPMS?" → usa questa sezione
- "Perché hospitality tech?" → dominio internazionale, prodotto B2B SaaS complesso, clienti PMI (un contesto che Dan conosce)
- "Come gestiresti la qualità del codice con un team che usa AI tools?" → XP + review discipline
- "Hai esperienza con integrazioni complesse?" → sì, channel manager = OTA APIs, payment gateways, compliance locale = complessità reale

---

**Risorse**
- [[../ricerca-lavoro-2026|← Ricerca Lavoro 2026]]
- [[../ranking|← Ranking]]
