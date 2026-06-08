---
title: Costruire e rilasciare Project Tachyon nonostante il rischio
date: 2023-12-11
company: tourradar
outcome: mixed
updated: 2026-06-08
tags: [decision, tourradar]
---

# Costruire e rilasciare Project Tachyon nonostante il rischio

## Contesto
Le pagine TDP/SERP del monolite "Web" soffrono di un TTFB troppo alto, con query lente e dati real-time costosi da calcolare. A partire da luglio 2023 Dan inizia a lavorare a un sistema di cache: **Project Tachyon**, basato su JSON pre-calcolati e serviti tramite Redis. Il 20 settembre 2023 propone esplicitamente una "strategia di produzione che riduca i rischi": rilasci piccoli e incrementali invece di un grande rilascio monolitico, con feature flag di sicurezza.

## Opzioni valutate
- Continuare a ottimizzare le query esistenti sul monolite, accettando i limiti strutturali del sistema
- Costruire un nuovo layer di cache pre-calcolata (Tachyon), accettando il rischio di introdurre un cambiamento profondo nel modo in cui "Web" recupera i dati — ma mitigandolo con piccole PR incrementali e feature flag

## Scelta fatta
Dan e il team scelgono di costruire Tachyon, seguendo l'approccio a basso rischio proposto da Dan: PR piccole, feature flag per attivare/disattivare cache e query, test di snapshot dove possibile. Il rilascio in produzione avviene l'11-12 dicembre 2023, "with flag off" come misura di sicurezza.

## Outcome
Esito misto: il rilascio inizialmente va a buon fine ed è il momento clou tecnico del periodo, ma a gennaio 2024 emerge un bug critico che richiede un flag-off d'emergenza e giorni di gestione dello stress da incidente in produzione. Il progetto viene comunque portato a termine con un handoff completo il 22 gennaio 2024 ("Tachyon hand off done"). Resta il progetto bandiera dell'esperienza Tour Radar — prova tangibile delle competenze tecniche di Dan, ma anche lezione concreta sui rischi della gestione del cambiamento in produzione anche quando ci si premunisce con processi prudenti.
