---
title: Ricerca Lavoro
started: 2026-06-11
status: exploratory
urgency: low
updated: 2026-06-15
tags: [career, job-search]
---

# 🔍 Ricerca Lavoro

## Contesto

**Data di inizio**: giugno 2026 (candidatura Ancora)
**Urgenza**: bassa — ricerca esplorativa, non c'è fretta
**Motivi**:
- Ambiente Muffin non positivo: comunicazione accusatoria, poca cultura di feedback e crescita
- Incertezza organizzativa crescente (possibile uscita Luca, situazione Qmates)
- Mancanza di crescita economica prospettica
- Voglia di trovare un contesto più sano e stimolante

**Criterio di scelta**: restare a Muffin ha senso *solo se* c'è crescita economica reale nell'orizzonte. Se arriva un'opportunità con contesto migliore + crescita economica, si valuta seriamente.

**Supporto Career Coach**: usare questa pagina per tracciare candidature e colloqui nel tempo, e farsi supportare nella scelta finale.

---

## Candidature

### 1. Ancora — Staff Software Engineer
**Stato**: ⏳ Attesa feedback
**Data candidatura**: ~2026-06-11
**Link JD**: https://www.linkedin.com/jobs/view/4416635056/

#### L'azienda
Ancora aggrega studi di commercialisti italiani e ci costruisce sopra una piattaforma AI-native proprietaria. Non vendono software sul mercato aperto — la tech è l'infrastruttura interna alla loro rete di studi.
Team: 5 persone. CEO Andrea Chirolli (ex Futura EdTech, €16M), COO Andrea Abriani (ex investment banking Londra), CTO Andrea Rusconi (ex Satispay 10+ anni, ha portato la piattaforma da zero all'unicorno fintech).
Investor: Ithaca, Angel Invest, 2100 Ventures.

#### Il ruolo
- 3ª hire tecnica, greenfield, mandato architetturale esplicito
- Riporto diretto CTO
- RAL €70.000 – €95.000
- Equity 0,3% – 0,5% stock options
- Milano, hybrid 3+2

#### Sfide tecniche dichiarate
- Double-entry bookkeeping, multi-currency, journal entries immutabili
- Agent-first API design (API progettate per essere consumate da LLM)
- Multi-tenant isolation con RLS
- Event sourcing e audit trail immutabile
- Observability per sistemi AI agentivi

#### Hiring process
1. Call conoscitiva ~15 min (CTO)
2. Architecture review async ~2h
3. Technical interview 1h (remote)
4. Final interview in-person Milano

#### Colloqui

| Data | Tipo | Interlocutore | Note | Esito |
|------|------|---------------|------|-------|
| 2026-06-15 18:00 | Call conoscitiva ~15 min | Andrea Rusconi (CTO) | Go + microservizi ad eventi, POC fatta, da solo. Non conosceva XP. Non sembrava convinto. | ⏳ Attesa feedback |

#### Note e impressioni post-call (15/06)

**Business model chiarito**: non SaaS. Acquisiscono studi e danno il software come prodotto interno. C'è più domanda di acquisizione che offerta. Piattaforma agentica.

**Stack tecnico**: Go, microservizi ad eventi. CTO da solo. Ha fatto una POC. Gli preme molto la coerenza tra servizi (conventions condivise). Primo studio in acquisizione: in arrivo.

**Visione del ruolo**: capire il business, scrivere codice con forte uso di LLM. Aspettativa dichiarata: in 2 anni non si scriverà più codice (tutto delegato agli agenti).

**Segnali di mismatch**:
- Andrea Rusconi non conosceva XP — background molto diverso (Satispay = scale engineering, non XP/agile artigianale)
- Non sembrava convinto di Dan durante la call
- Dan stesso non è sicuro che sia il match giusto

**Valutazione Dan**: 🤔 Da riflettere. Non è detto si prosegua.

---

## Template per nuove candidature

```
### N. [Azienda] — [Ruolo]
**Stato**: 🔵 Candidato / 🟡 In corso / 🟢 Offerta / 🔴 Chiuso
**Data candidatura**: YYYY-MM-DD
**Link JD**: 

#### L'azienda
#### Il ruolo
#### Colloqui
| Data | Tipo | Interlocutore | Note | Esito |
|------|------|---------------|------|-------|

#### Note e impressioni
```
