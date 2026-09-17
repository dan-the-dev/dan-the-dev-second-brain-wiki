---
title: Paolo
company: [levels]
role: AI Software Engineer (Paolo Battellani)
updated: 2026-09-17
tags: [people, levels]
---

# Paolo

## Chi è
Paolo Battellani, AI Software Engineer nel team tech di Levels. Owner de facto dell'infrastruttura (AWS) e della pipeline di gestione documenti/AI — su queste aree lavora più da solo ("business as usual") che in team con gli altri tre dev, diversamente da Filippo/Tommaso/Alberto che sono raggruppati sulla feature invito subappaltatori.

## Contesto delle interazioni

Day 2 (15/09): 1:1 focus AWS/infrastruttura. Regione attiva Irlanda; Paolo ha permessi elevati ma non root (il root è di Filippo). Alerting/monitoring via CloudWatch, retention log ~1 settimana, nessun log centralizzato, nessun monitoring/alerting dedicato sull'infrastruttura in sé — solo controlli manuali occasionali, soprattutto post-release. Discussione su LLM in app: modelli scelti più costosi perché al momento della decisione sembravano dare risultati migliori, assente uno strumento di valutazione automatica. Proposto a Paolo di valutare OpenRouter/OmniRouter per un system prompt più gestibile e un router con fallback tra modelli.

Day 3 (16/09): overview approfondita di infrastruttura, data model e pipeline documenti (vedi [[../journal/20260916-levels-day3|journal Day 3]] per il dettaglio tecnico completo). Punti chiave: infrastruttura gestita a mano via CloudFormation (~10 stack da template, versionati su un repo Git ma senza alcuna automazione di deploy), divisa in shared services / identity / levels; servizio LLM Proxy per centralizzare le chiamate LLM (usato anche da lambda); pipeline di document processing basata su step function/lambda, priva di logica applicativa esplicita e difficile da testare, oggi su Gemini Pro (costoso); anti-pattern di ownership sulla lambda di sync reportistica (il SAS chiude una transaction aperta da un altro servizio) — stesso anti-pattern già segnalato indipendentemente da Alberto; deploy lunghi (~20 minuti nel caso migliore), fatti fuori orario per evitare downtime oggi ritenuto inevitabile; cultura dei test assente, percepita come costo difficile da giustificare.

## Dinamica
Owner tecnico principale dell'infrastruttura e della pipeline AI/documenti — l'interlocutore più rilevante per capire davvero come funziona il sistema sotto al prodotto. Disponibile e dettagliato nelle spiegazioni (due overview approfondite in due giorni). Il pattern di ownership individuale osservato su di lui ("business as usual" gestito da solo) rispecchia la stessa dinamica già segnalata Day 1 come possibile fonte di dipendenze non gestite.

**Appunti manoscritti di Dan (16/09, integrati 17/09)**: il classico profilo tecnico, un po' chiuso in sé stesso, ma considerato una superstar — da gestire con attenzione. Da leggere non come un problema di personalità da correggere, ma come un profilo da proteggere (flow, spazio individuale) mentre si valorizza il suo contributo tecnico.

## Citazioni o momenti significativi
- Day 3 — overview completa di infrastruttura (CloudFormation manuale, shared services/identity/levels) e della pipeline documenti (presigned URL S3 → trigger → classificazione/isolamento/estrazione → save DB → webhook), oggi al 50% del progetto API e funzionante.

## Note
Insieme ad Alberto, la fonte più ricca di segnali tecnici concreti finora. Le criticità che emergono dal suo lavoro (deploy manuale/lungo, no test, nessun log centralizzato, anti-pattern di ownership sulla transaction) sono probabilmente il punto di partenza più naturale per la fase "impatto" tecnico di Dan, quando la fase di osservazione lascerà spazio a proposte — vedi riflessione career coach in [[../journal/20260916-levels-day3|journal Day 3]].
