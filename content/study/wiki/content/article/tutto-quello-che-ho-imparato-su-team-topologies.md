---
title: "Tutto quello che ho imparato su Team Topologies"
type: article
topics: ["agile-software-development"]
status: done
raw_source: raw/knowledge/article/tutto-quello-che-ho-imparato-su-team-topologies/content.md
updated: 2026-08-19
---

# Tutto quello che ho imparato su Team Topologies

Sintesi ampia del framework Team Topologies (Matthew Skelton e Manuel Pais), costruita attorno all'idea che le organizzazioni IT moderne debbano bilanciare stabilità e velocità, e che i team non vadano pensati come semplici collezioni di persone ma come sistemi **socio-tecnici** che richiedono autonomia e visione chiara.

## Legge di Conway e carico cognitivo

Il punto di partenza è la legge di [[../person/melvin-conway|Conway]]: le organizzazioni che progettano sistemi sono vincolate a produrre design che rispecchiano la propria struttura comunicativa — da cui l'importanza di disegnare strutture di team che siano *precursori* dell'architettura desiderata, non conseguenze accidentali dell'organigramma. Il secondo concetto cardine è il **carico cognitivo**: esiste un limite alla quantità di informazione che un cervello umano — o un team — può gestire, e le organizzazioni dovrebbero minimizzare il carico cognitivo intrinseco ed eliminare quello estraneo, per lasciare spazio al carico cognitivo "pertinente", quello dove nascono davvero creatività e valore. Va misurato chiedendo ai team se si sentono efficaci, non con proxy come le righe di codice.

## Dimensione e autonomia

Sul dimensionamento dei team, l'articolo richiama il Numero di Dunbar di [[../person/robin-dunbar|Robin Dunbar]] per suggerire una dimensione fra 5 e 9 persone, ottimale per fiducia e collaborazione, e la legge di [[../person/fred-brooks|Fred Brooks]] sul costo della comunicazione per giustificare investimenti in strumenti e ambienti che agevolino, invece di ostacolare, la collaborazione. Un principio organizzativo ricorrente: i team devono avere piena ownership del prodotto o servizio su cui lavorano — mai ownership condivisa fra più team, per evitare diffusione di responsabilità — e vanno tenuti il più autonomi possibile, riducendo le dipendenze esterne bloccanti.

## Le quattro topologie

Il cuore del framework sono quattro tipologie di team, pensate per agire come "calamite" organizzative:

- **[[../concept/stream-aligned-team|Stream-Aligned Team]]** — il tipo principale, allineato a un singolo flusso di lavoro che produce valore per l'utente finale, con l'obiettivo di ridurre il carico cognitivo e incorporare rapidamente il feedback del cliente attraverso produzione costante in produzione e correzione di rotta rapida.
- **Platform Team** — fornisce servizi interni che riducono il carico cognitivo dei team stream-aligned, abilitandoli a generare valore con sostanziale autonomia.
- **Enabling Team** — aiuta i team stream-aligned a colmare lacune di conoscenza tramite coaching, mentoring e facilitazione (Servant Leadership), senza eseguire il lavoro al posto loro.
- **Complicated-Subsystem Team** — realizza e mantiene le parti del sistema che richiedono conoscenza specialistica, sottraendole al carico cognitivo dei team stream-aligned.

## Modalità di interazione

Team Topologies definisce tre modalità di interazione fra team: **Collaborazione** (adatta a situazioni complesse e incerte), **X-as-a-Service** (adatta quando serve delivery predicibile e poca interazione, con forte responsabilità del team fornitore verso i consumatori) e **Facilitazione** (la modalità principale degli Enabling Team). Scegliere la modalità giusta per ogni relazione fra team migliora chiarezza di scopo ed engagement, e riduce la frustrazione.

## Rompere il monolite

Per fratturare un monolite in sistemi più autonomi, l'articolo propone diversi "piani di frattura" possibili: i bounded context di dominio, la compliance regolatoria, la frequenza di cambiamento, l'ubicazione dei team, il rischio, le performance, le user personas, la tecnologia. Un avvertimento specifico: non separare mai il lavoro di manutenzione del vecchio sistema da quello di costruzione del nuovo, perché questo interrompe il feedback e riduce la possibilità di costruire davvero un prodotto migliore.

## Adozione pratica

Il consiglio conclusivo per adottare Team Topologies: trattare lo sviluppo software come centro di produzione di valore, non come centro di costo; fornire una visione di business chiara con obiettivi realistici; partire identificando i flussi di lavoro esistenti e assegnando responsabilità a team stream-aligned e complicated-subsystem — un percorso di introduzione graduale descritto anche da Jurgen Appelo nel modello unFIX.

## Vedi anche

- [[../person/melvin-conway|Melvin Conway]]
- [[../person/fred-brooks|Fred Brooks]]
- [[../person/robin-dunbar|Robin Dunbar]]
- [[../concept/stream-aligned-team|Stream-Aligned Team]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/tutto-quello-che-ho-imparato-su-team-topologies/content.md`
- [intre.it](https://www.intre.it/2021/10/12/tutto-quello-che-ho-imparato-su-team-topologies/)
