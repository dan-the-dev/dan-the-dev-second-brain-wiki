---
title: Alberto
company: [levels]
role: AI Software Engineer (Alberto Sandri)
updated: 2026-09-16
tags: [people, levels]
---

# Alberto

## Chi è
Alberto Sandri, AI Software Engineer nel team tech di Levels. La persona più esperta sulla parte SSO/identity, e insieme a Tommaso (Vilotto) è sul backend della feature in corso (invito ai subappaltatori).

## Contesto delle interazioni
Day 1 (14/09): prima call col team dev, guidata da Alberto sulla parte SSO/architettura. Punti emersi: account AWS separati invece di un unico account con cluster diversi (motivo non chiaro, domanda aperta); circa 20 repository totali, una decina toccati di frequente; complessità architetturale percepita come ingiustificata, impressione condivisa da tutto il team; domande aperte su git strategy e su se le API condividano lo stesso dataset del SaaS; punto interrogativo su "crediti" (verosimilmente uso AI/LLM) da chiarire.

Day 2 (15/09): programmata la prima sessione di pairing con Alberto per il 16/09, 10:00-11:00.

Day 3 (16/09): sessione collaborativa in cui Alberto mostra a Dan come lavora sulla feature in corso. Uso molto intensivo dell'AI ma dentro una struttura disciplinata — skill "superpowers" (verosimilmente di Matt Pocock): piano generato, scomposizione in sottotask, una task alla volta, code review, poi merge sul branch. Legge bene la documentazione (Swagger), ma di sua ammissione non legge i test generati dall'AI — troppo tempo richiesto secondo lui. Struttura backend classica (controller → handler → service, pattern repository, Prisma come ORM). Impressione di Dan: buon processo nel complesso. Alberto ha inoltre segnalato per primo (indipendentemente da Paolo) l'anti-pattern sulla lambda di sync reportistica, dove il SAS chiude una transaction aperta/gestita da un altro servizio (vedi [[../journal/20260916-levels-day3|journal Day 3]]).

## Dinamica
Guida naturalmente le conversazioni tecniche sulla parte identity/SSO — punto di riferimento del team su quell'area. Condivide con il resto del team la percezione di complessità architetturale ingiustificata, segnale di apertura al cambiamento più che di difesa dello status quo.

## Citazioni o momenti significativi
- Day 1 — guida la call su SSO/architettura, introduce il modello identity (email + organization, gruppi cantiere, albo delle imprese, JWT per login/refresh/revoke).

## Note
Primo contatto tecnico diretto e prima sessione di pairing programmata — occasione per Dan di osservare da vicino le abitudini di sviluppo del team (uno degli obiettivi espliciti della fase di osservazione Day 2, insieme alla proposta di ridurre il batch size dei branch verso dev).
