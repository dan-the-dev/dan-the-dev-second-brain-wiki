---
title: "Breaking Through That First TDD Block"
type: article
author: J.B. Rainsberger (The Code Whisperer)
topics: [tdd, agile-software-development]
raw_source: raw/knowledge/article/breaking-through-that-first-tdd-block/content.md
updated: 2026-08-19
---

# Breaking Through That First TDD Block

**blog.thecodewhisperer.com** · Articolo

Un articolo breve ma pratico su come superare il blocco iniziale di chi si avvicina al Test-Driven Development, costruito attorno a un esercizio suggerito originariamente da Kent Beck via Twitter.

## L'esercizio

1. Modifica il codice come faresti normalmente
2. Scrivi un test che passi solo grazie a quella modifica
3. Annulla la modifica
4. Riscrivi il test da zero (senza copia-incolla)
5. Fai compilare cambiando il codice
6. Fallo fallire come previsto
7. Cambia il codice per farlo passare

L'autore del blog riporta l'esperienza di averlo praticato per un intero pomeriggio nel 1999, notando quasi da subito una differenza, pur con momenti di straniamento nel processo ("pensa, pensa, pensa, arrenditi, scrivi il codice di produzione... annulla tutto, conta fino a dieci, ora scrivi il test..."). Ripetendolo per qualche settimana, il blocco descritto da Beck è scomparso quasi del tutto, costruendo l'abitudine a scrivere prima il test.

## Il primo "aha!"

Un primo momento di consapevolezza arriva già al passo 4: riscrivendo il test da zero, spesso ci si accorge che si può scrivere una versione più semplice, piccola e chiara di quella appena cancellata. Il cambiamento più profondo, però, riguarda il modo di pensare al problema: si inizia a ragionare direttamente in termini di input e output desiderati, invece che di strutture dati e algoritmi — smettendo di vedere solo classi e iniziando a vedere interfacce, con un impatto diretto su come si valutano i propri design e quelli altrui.

## Perché funziona

Il meccanismo non è magico: è ripetizione deliberata. Fare e disfare la stessa piccola modifica, riscrivendo il test ogni volta, costringe a interiorizzare il ritmo test-prima invece di limitarsi a "saperlo in teoria". È lo stesso principio dietro alla pratica dei kata: l'obiettivo non è il codice che ne risulta, ma l'abitudine che si costruisce ripetendo.

## Collegamenti

- Topic: [[../topics/tdd|TDD]] · [[../topics/agile-software-development|Agile Software Development]]
- Contenuti collegati: [[../book/test-driven-development-by-example|Test-Driven Development: By Example]] · [[../book/agile-technical-practices-distilled-a-learning|Agile Technical Practices Distilled]]
- Persona citata: [[../person/kent-beck|Kent Beck]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/breaking-through-that-first-tdd-block/content.md`
- Articolo originale: [blog.thecodewhisperer.com](https://blog.thecodewhisperer.com/permalink/breaking-through-that-first-tdd-block)
