---
title: Paolo
company: [levels]
role: AI Software Engineer (Paolo Battellani)
updated: 2026-10-09
tags: [people, levels]
---

# Paolo

## Chi è
Paolo Battellani, AI Software Engineer nel team tech di Levels. Owner de facto dell'infrastruttura (AWS) e della pipeline di gestione documenti/AI — su queste aree lavora più da solo ("business as usual") che in team con gli altri tre dev, diversamente da Filippo/Tommaso/Alberto che sono raggruppati sulla feature invito subappaltatori.

## Contesto delle interazioni

Day 2 (15/09): 1:1 focus AWS/infrastruttura. Regione attiva Irlanda; Paolo ha permessi elevati ma non root (il root è di Filippo). Alerting/monitoring via CloudWatch, retention log ~1 settimana, nessun log centralizzato, nessun monitoring/alerting dedicato sull'infrastruttura in sé — solo controlli manuali occasionali, soprattutto post-release. Discussione su LLM in app: modelli scelti più costosi perché al momento della decisione sembravano dare risultati migliori, assente uno strumento di valutazione automatica. Proposto a Paolo di valutare OpenRouter/OmniRouter per un system prompt più gestibile e un router con fallback tra modelli.

Day 3 (16/09): overview approfondita di infrastruttura, data model e pipeline documenti (vedi [[../journal/20260916-levels-day3|journal Day 3]] per il dettaglio tecnico completo). Punti chiave: infrastruttura gestita a mano via CloudFormation (~10 stack da template, versionati su un repo Git ma senza alcuna automazione di deploy), divisa in shared services / identity / levels; servizio LLM Proxy per centralizzare le chiamate LLM (usato anche da lambda); pipeline di document processing basata su step function/lambda, priva di logica applicativa esplicita e difficile da testare, oggi su Gemini Pro (costoso); anti-pattern di ownership sulla lambda di sync reportistica (il SAS chiude una transaction aperta da un altro servizio) — stesso anti-pattern già segnalato indipendentemente da Alberto; deploy lunghi (~20 minuti nel caso migliore), fatti fuori orario per evitare downtime oggi ritenuto inevitabile; cultura dei test assente, percepita come costo difficile da giustificare.

Day 14 (01/10): prima frizione di coordinamento ([[../journal/20261001-levels-day14|journal Day 14]]). Paolo si collega a mezzanotte per un lavoro non chiaro, la mattina dorme e manca alla riunione in cui il team si organizza, nonostante Dan l'avesse taggato. Fa poi un'attività diversa da quella che in teoria gli spettava, senza confrontarsi con il team. Per Dan, *"così è dura"*. Prossimo passo: una chiacchierata che parta dalla curiosità (cosa stava risolvendo di notte?) e chiuda con un accordo su come coinvolgerlo e su come segnala i cambi di priorità.

Day 19 (08/10): frizione sul lavoro in parallelo ([[../journal/20261008-levels-day19|journal Day 19]]). Porta avanti due attività senza chiuderne nessuna, anche se in retro aveva detto che "di cose da fare in parallelo ce n'è sempre". Al daily esprime qualche perplessità. Nel confronto sul servizio mail per il cliente la tensione si scioglie: esito positivo. Dan osserva un forte multitasking (più tab di Claude aperte insieme) e una soluzione tecnica molto complessa, con tanti job per coprire tutti i casi limite, e cerca di riportarla verso la semplicità. Prossimo passo: pair sul servizio mail (09/10).

Day 20 (09/10): pair sul servizio mail, impostato insieme il piano per la parte di codice ([[../journal/20261009-levels-day20|journal Day 20]]). In due giorni si passa dalla frizione al daily a un piano condiviso.

## Dinamica
Owner tecnico principale dell'infrastruttura e della pipeline AI/documenti — l'interlocutore più rilevante per capire davvero come funziona il sistema sotto al prodotto. Disponibile e dettagliato nelle spiegazioni (due overview approfondite in due giorni). Il pattern di ownership individuale osservato su di lui ("business as usual" gestito da solo) rispecchia la stessa dinamica già segnalata Day 1 come possibile fonte di dipendenze non gestite.

**Appunti manoscritti di Dan (16/09, integrati 17/09)**: il classico profilo tecnico, un po' chiuso in sé stesso, ma considerato una superstar — da gestire con attenzione. Da leggere non come un problema di personalità da correggere, ma come un profilo da proteggere (flow, spazio individuale) mentre si valorizza il suo contributo tecnico.

## Citazioni o momenti significativi
- Day 3 — overview completa di infrastruttura (CloudFormation manuale, shared services/identity/levels) e della pipeline documenti (presigned URL S3 → trigger → classificazione/isolamento/estrazione → save DB → webhook), oggi al 50% del progetto API e funzionante.

## Note
Insieme ad Alberto, la fonte più ricca di segnali tecnici concreti finora. Le criticità che emergono dal suo lavoro (deploy manuale/lungo, no test, nessun log centralizzato, anti-pattern di ownership sulla transaction) sono probabilmente il punto di partenza più naturale per la fase "impatto" tecnico di Dan, quando la fase di osservazione lascerà spazio a proposte — vedi riflessione career coach in [[../journal/20260916-levels-day3|journal Day 3]].
