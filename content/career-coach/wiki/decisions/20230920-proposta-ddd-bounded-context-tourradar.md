---
title: Elaborare e proporre una riorganizzazione DDD/bounded context per il team Web
date: 2023-09-20
company: tourradar
outcome: unknown
updated: 2026-06-08
tags: [decision, tourradar]
---

# Elaborare e proporre una riorganizzazione DDD/bounded context per il team Web

## Contesto
Tre mesi e mezzo dopo l'arrivo in Tour Radar, Dan osserva da vicino i problemi strutturali del monolite PHP "Web": team che si scontrano sulle stesse aree di codice, difficoltà a far evolvere l'architettura, mancanza di autonomia e chiarezza organizzativa. Il 20 settembre 2023 (day 63) decide di mettere per iscritto un'analisi e una proposta.

## Opzioni valutate
- Continuare a lavorare nei limiti della struttura organizzativa esistente, segnalando i problemi solo quando emergono
- Elaborare e condividere proattivamente un'analisi strutturale, proponendo un cambiamento di paradigma organizzativo

## Scelta fatta
Dan elabora un documento articolato che applica la legge di Conway, Team Topologies, DDD e i principi del modello "Spotify": "considerando la legge di Conway, team topologies, DDD e microservizi [...] la soluzione migliore che ho visto in passato è un modello tipo Spotify". Propone di fare EventStorming per identificare i bounded context, costruire una struttura di team basata su di essi (con comunicazione solo tramite micro-servizi/eventi) e di organizzare le tribe per cliente (es. travellers, tour operators). La condivide con Anton e il team.

## Outcome
Esito incerto/non confermato nel diario: non risultano segnali di adozione strutturale immediata. La proposta sembra essere accolta con interesse intellettuale ma senza un cambiamento concreto a breve termine — un pattern che si ripeterà con la successiva proposta "Web Framework" (gennaio 2024) e che culminerà, mesi dopo, nella riflessione amara post-layoff sulla scarsa volontà di cambiamento reale dell'azienda di fronte al tech debt.
