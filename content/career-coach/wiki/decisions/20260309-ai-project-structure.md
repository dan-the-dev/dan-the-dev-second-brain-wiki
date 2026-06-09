---
title: Decisione architettura AI — il tool gestisce solo la data ingestion
date: 2026-03-09
company: muffin
outcome: positive
updated: 2026-06-09
tags: [decision, muffin]
---

# Decisione architettura AI — il tool gestisce solo la data ingestion

## Contesto
Day 195 (9 marzo 2026). Un team esterno sviluppa un tool AI per l'ingestion dei dati dei bandi (contributi, incentivi, finanziamenti europei). Il dibattito è su quanto questo tool debba fare e dove finisca la responsabilità del tool AI e inizi quella della piattaforma Muffin.

## Opzioni valutate
- Il tool AI gestisce l'intero ciclo: ingestion + generazione di sommari, schede bando, recap
- Il tool AI gestisce solo la data ingestion; la piattaforma Muffin fa pull e genera i contenuti (sommari, schede, recap)

## Scelta fatta
Dan stabilisce i "paletti": il tool AI è responsabile esclusivamente della data ingestion dei bandi. La piattaforma Muffin fa pull dei dati grezzi e genera in autonomia i contenuti derivati (scheda bando, sommario, recap). La generazione rimane nella piattaforma anche per garantire che i sistemi non si diano fastidio a vicenda e per lasciare spazio di evoluzione indipendente alla feature generation.

## Outcome
Positivo. La separazione netta riduce il rischio di accoppiamento tra sistemi e dà a Muffin il controllo sulla presentazione e sull'evoluzione dei contenuti. Dan descrive il team AI come "in gamba" ma è prudente nel non spingere troppo in là sulle dipendenze, riconoscendo che la loro autonomia è sana.

## Note
Questa decisione riflette un principio di design chiaro: i sistemi AI esterni fanno data ingestion, la piattaforma fa product logic. È un confine architetturale difendibile e trasparente — e lascia Muffin in controllo del proprio prodotto anche se il tool AI dovesse cambiare fornitore o tecnologia.
