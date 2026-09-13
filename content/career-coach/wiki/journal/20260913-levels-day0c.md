---
title: Journal 2026-09-13
date: 2026-09-13
company: levels
day_number: 0c
has_morning_brief: false
dumps_count: 0
has_evening: false
tags: [journal, levels, daily, pre-onboarding, checklist]
updated: 2026-09-13
---

# Journal — Domenica 13 Settembre 2026
## Levels Day 0c — Vigilia del Day 1

## 🌙 Come è andata

Ultimo giorno prima dell'inizio ufficiale in Levels, domani 14 settembre. Muffin si è chiuso il 3-4 settembre ([[20260903-muffin-day257|day 257]]), poi una settimana di pausa tra le due esperienze. Oggi non è un vero giorno di lavoro ma un momento di preparazione: fissare per iscritto cosa verificare e chiedere nel primo giorno e nella prima settimana, prima che l'inizio effettivo assorba tutta l'attenzione.

Criterio guida usato per costruire le checklist: nel Day 1 restano le verifiche amministrative e le domande "rompighiaccio" che si possono fare a chiunque nel team fin da subito; in Settimana 1 tutto ciò che richiede più accesso, dati storici o fiducia costruita col team.

Le checklist qui sotto sono la versione di riferimento da usare domani e nei prossimi giorni — spuntale man mano. Il raw originale resta in [[../../raw/journal/5-levels/20260913/day0|raw/journal/5-levels/20260913/day0.md]].

---

## ✅ Checklist Day 1

### 📄 Contratto e amministrazione
- [ ] Copia firmata del contratto: ruolo, RAL, livello, decorrenza, periodo di prova
- [ ] CCNL applicato e inquadramento
- [ ] Modulo TFR: destinazione azienda vs fondo pensione
- [ ] Fondo pensione integrativo: adesione, eventuale contributo datoriale
- [ ] Documenti da consegnare all'HR: documento identità, codice fiscale, IBAN, eventuale stato di famiglia
  - [ ] CU provvisorio + referente per gestire il reddito percepito da Muffin nel 2026
- [ ] Visita medica / idoneità, se prevista dal ruolo
- [ ] Policy da firmare: privacy, codice etico, eventuale NDA
- [ ] Benefit: ticket restaurant, welfare aziendale, assicurazione sanitaria, altri fringe benefit
  - [ ] Come funziona l'iscrizione a Satispay per il welfare?
- [ ] Orario di lavoro, policy smart working/remote, ferie e permessi

### 💻 Setup operativo / IT
- [ ] Account e accessi: email, calendar, Slack/Teams, VPN se serve, tool AI aziendali
- [ ] Laptop/hardware aziendale
- [ ] Accessi a repository di codice, CI/CD, cloud provider, tool interni
- [ ] Badge/accesso fisico all'ufficio, regole di accesso al coworking TAG Calabiana (e altri TAG)
- [ ] Strumenti di comunicazione del team: canali Slack, mailing list, board
- [ ] Esiste documentazione aziendale esistente? Valutare se ha senso proporre una LLM wiki

### 🤝 Persone e team
- [ ] Meeting di benvenuto con manager/team lead
- [ ] Presentazione al team: chi è chi, ruoli
- [ ] Primo 1:1 con il manager: aspettative reciproche, focus iniziale, cadenza di 1:1 e performance review future
- [ ] Org chart e stakeholder principali
- [ ] Il mio ruolo rispetto al team: la mentorship tecnica è scontata, ma qual è il perimetro sul people management?
- [ ] Politiche attuali su formazione (budget), conferenze, piano hiring atteso nei prossimi 12-24 mesi, budget per tool AI (solo tech o tutta l'azienda?)

### 👀 Weekly del team (osservazione operativa)
- [ ] Partecipare al primo weekly
- [ ] Osservare formato: durata, agenda, tool usato per tracciare
- [ ] Chi partecipa e con che ruolo
- [ ] Annotare terminologia, progetti/nomi ricorrenti, acronimi da chiarire dopo
- [ ] Come vengono comunicati blocchi/rischi
- [ ] Non intervenire troppo il primo giorno: osservare e prendere appunti

### 📊 Domande rompighiaccio — Prodotto
- [ ] Utenti attivi (DAU/MAU) e trend recente; numero clienti (account/aziende) e utenti medi per cliente
- [ ] Quanti utenti sono paganti vs free/trial, tasso di conversione; modello di pricing e costo abbonamento
- [ ] MRR/ARR attuale e trend; churn rate (mensile/annuale) su utenti e su clienti
- [ ] Reliability attesa dal sistema: SLA promesso ai clienti, uptime target (es. 99.9%)
- [ ] Questi dati (utenti, MRR, uptime, churn) vengono monitorati? Con quali strumenti, chi li guarda, dove sono le dashboard
- [ ] NPS / customer satisfaction, eventuali survey
- [ ] Principali competitor e posizionamento/differenziazione; segmento di mercato principale (enterprise/SMB/consumer)
- [ ] Debito di prodotto noto: le 3 feature principali mancanti secondo il team

### 🛠️ Domande rompighiaccio — Team Tech
- [ ] Stato attuale dei lavori: su cosa si sta lavorando adesso, chi fa cosa; rilasci previsti nei prossimi giorni/settimane
- [ ] Frequenza dei rilasci (per giorno/settimana/mese)
- [ ] Situazione repository (~20 nell'org GitHub, ~10 modificati nell'ultima settimana): monolite o microservizi? Esiste un C4?
- [ ] Quanti bug segnalati/aperti negli ultimi mesi, trend, gravità tipica; debito tecnico noto e pain point principali secondo il team
- [ ] Come si traccia il lavoro (Jira/Linear/Trello/altro), struttura board e workflow
- [ ] Processo di deploy (CI/CD, feature flag, canary/rollback) e chi può rilasciare; copertura test/QA (automatizzati vs manuali, gate in CI)
- [ ] Come si monitora il sistema in produzione (logging, APM, alerting: Datadog/Grafana/Sentry ecc.)
- [ ] Supporto fuori orario / reperibilità: c'è on-call? Come è organizzato, chi risponde, SLA sugli incidenti
- [ ] Gestione incidenti: esistono postmortem/runbook? Come si comunicano internamente e ai clienti

---

## ✅ Checklist Settimana 1

### 🧱 Contesto tecnico
- [ ] Overview architettura/stack tecnico principale
- [ ] Setup ambiente di sviluppo locale, primo build/run funzionante
- [ ] Documentazione tecnica esistente (README, wiki interna, ADR)
- [ ] Processo di code review / PR / deploy
- [ ] Repo principali e loro scopo

### 🏢 Contesto organizzativo
- [ ] Roadmap/OKR del team e dell'azienda per il periodo corrente
- [ ] Processo Agile/Scrum/Kanban del team (sprint, planning, retro, standup)
- [ ] Stakeholder chiave (PM, designer, altri team)
- [ ] Come vengono prioritizzate le task/feature

### 🤝 Relazioni
- [ ] 1:1 introduttivi con i membri principali del team
- [ ] Confronto strutturato con il manager: aspettative primi 30-60-90 giorni
- [ ] Stile di comunicazione del team (sincrono vs async, tono)

### 🚀 Primi contributi
- [ ] Un primo task/ticket piccolo per prendere confidenza col workflow end-to-end
- [ ] Segnare le domande aperte man mano, invece di bloccarsi
- [ ] Individuare quick win o problemi evidenti (annotare, non proporre subito)

### 🔁 Retrospettiva fine settimana 1
- [ ] Rivedere questa checklist: cosa manca, cosa è emerso di inaspettato
- [ ] Primo bilancio: impressioni su team, cultura, workload
- [ ] Decidere il focus per la settimana 2

---

## ✅ Task

- Completati oggi: checklist Day 1 e Settimana 1 scritte, riviste e riordinate per l'ingresso in Levels
- Rimasti aperti: tutte le voci sopra, da verificare/spuntare a partire da domani

## 💡 Insights & decisioni

**Criterio Day 1 vs Settimana 1**: le domande che richiedono accesso, dati storici o fiducia costruita col team (debito tecnico, metriche di business approfondite, budget formazione/hiring) vanno in Settimana 1. Restano in Day 1 solo verifiche amministrative e domande rompighiaccio ottenibili da chiunque nel team fin dal primo giorno.

**Periodo di prova**: inizio 14/09/2026, durata 6 mesi → termine **14/03/2027**. Da qui in poi tracciamo l'avanzamento in [[../experiences/levels|wiki/experiences/levels]].
