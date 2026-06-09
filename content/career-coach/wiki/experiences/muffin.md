---
title: Muffin — In Progress
company: muffin
period: 2024-10-07 → presente
total_days: 226
stack: [TypeScript, NestJS, React, Next.js, PostgreSQL, Docker, AWS, Hubspot, Mixpanel, Metabase, n8n, Jira, Figma, Cursor]
status: in-progress
last_updated: 2026-06-09
tags: [experience, muffin, in-progress]
---

# Muffin — In Progress

## Ruolo e periodo

**Ruolo**: Senior Developer & Tech Lead  
**Periodo**: ottobre 2024 → presente  
**Settore**: finanza agevolata (bandi, contributi, incentivi per le imprese in Italia)  
**Prodotto**: piattaforma B2B a due facce — lato consulente (CO = Consulente/Organizzazione) e lato azienda cliente (BE = Business Entity). Connette le aziende italiane con i consulenti che gestiscono pratiche di finanziamento agevolato.

Muffin è la prima esperienza di Dan come vero Tech Lead a tempo pieno: oltre allo sviluppo, gestisce il team, le relazioni con i consulenti esterni ([[gianni-bombelli|Gianni Bombelli]], [[fabio-fortini|Fabio Fortini]] di Qmates, [[nicola-qmates|Nicola]] di Cemate), conduce 1:1 con [[luca-sabena|Luca Sabena]] (PM) e [[jacopo|Jacopo]] (UX), porta avanti mentoring verso [[alessia|Alessia]] (sviluppatrice) e definisce la direzione tecnica del prodotto.

## Timeline eventi chiave

| Data | Giorno | Evento |
|------|--------|--------|
| 2024-10-07 | day 1 | Primo giorno: "Tante info", setup progetto |
| 2025-01-10 | ~day 30 | Inizio integrazione Hubspot — progetto centrale dei primi mesi |
| 2025-02-12 | day 48 | Offerta ad Alessia accettata ("Offerta ad Alessia!! 🙂") |
| 2025-02-12 | day 48 | War room eSaving/Ardor — cliente in crisi con feature non funzionanti |
| 2025-04-07 | day 73 | Onboarding Alessia come sviluppatrice nel team |
| 2025-06-25 | day 107 | Negoziazione con Qmates per prime offerte formali di supporto esterno |
| 2025-08-06 | day 121 | Ultimo giorno prima della pausa estiva |
| 2025-09-15 | day 122 | Ripresa: cambio formato diario (da Notion strutturato a "reflection" vocale) |
| 2025-09-15 | day 122 | eSaving: cliente va in produzione — gestione emergenza con feature rotte in prod |
| 2025-10-10 | day 134 | Valutazione Qmates vs. Devpunks come team di rinforzo esterno |
| 2026-01-07 | day 166 | Preparazione roadmap con Fabio, Luca e Nicola — giornata molto positiva |
| 2026-02-18 | ~day 178 | Integrazione Hubspot v2.0 completata — "una delle grandi soddisfazioni" |
| 2026-03-09 | day 195 | Decisione AI: il tool AI gestirà solo data ingestion dei bandi |
| 2026-03-13 | day 200 | CV mandato a Revenue Cat — primo segnale di "curiosità verso il mercato" |
| 2026-03-27 | ~day 210 | Adozione di Cursor come tool principale di sviluppo AI |
| 2026-05-25 | day 226 | Ultimo journal disponibile: focus su competizione, urgenza di accelerare |

## Stack tecnologico

**Backend**: TypeScript / NestJS / PostgreSQL  
**Frontend**: React / Next.js  
**Infrastruttura**: Docker / AWS  
**Integrazioni**: Hubspot (integrazione v2.0 completata da Dan — progetto maggiore), Mixpanel (analytics), Metabase (BI interno), n8n (workflow automation)  
**Tooling & PM**: Jira (Atlassian), Figma, Noticeable (release notes), Cursor (AI coding — adottato da marzo 2026)  
**Repository**: Muffin-Bakery/monorepo su GitHub — Turborepo + pnpm, multi-package, Docker support

## Progetti principali

**Hubspot v2.0** — Dan progetta e costruisce la nuova integrazione CRM da zero, sostituendo un sistema precedente. È il progetto tecnico più visibile e complesso dei primi mesi. Completato intorno al day 178 (feb 2026), è citato come una delle soddisfazioni più grandi del periodo.

**Template system (pratiche/bandi)** — Ogni pratica di finanziamento è strutturata in moduli flessibili che permettono ai consulenti di personalizzare il flusso di lavorazione. Dan e Luca lavorano sull'architettura dei template: stati, sottofasi, raccolta documentale multipla. Progetto iterativo che occupa gran parte del 2025.

**eSaving / Ardor — War Room** — Cliente strategico che va in produzione con feature rotte. Gestione di emergenza documentata a partire da day 48 (~feb 2025) e ripresa a day 122 (~set 2025). Momento di alta pressione e test del team in condizioni critiche.

**BE onboarding** — Lavoro sul flusso di onboarding del cliente finale (business entity): semplificazione, chiarezza, riduzione dell'attrito nella registrazione e nel primo utilizzo della piattaforma.

**AI — data ingestion bandi** — Da day 195 (mar 2026): tool AI esterno gestisce solo l'ingestion dei dati dei bandi; la piattaforma fa poi pull per generare schede bando, sommari, recap. Dan definisce l'architettura del confine e i "paletti" per evitare interferenze tra sistemi.

## Competenze in sviluppo

### Tecniche

- **Tech leadership su monorepo condiviso** — gestione di architettura in un contesto multi-team con consultant esterni e team interno (Alessia, Luca Sarcina lato CO, Devpunks, Qmates)
- **Integrazione CRM enterprise** — Hubspot v2.0 costruita da Dan con API avanzate, progetto di alto profilo
- **AI integration design** — definire i confini tra sistemi AI esterni e piattaforma core (data ingestion vs. feature generation)
- **TypeScript/NestJS su scala** — architettura modulare in un codebase cresciuto rapidamente
- **Cursor / AI-assisted development** — adottato come workflow primario da marzo 2026

### Soft skills e leadership

- **Gestione 1:1 complessi** — relazione con Luca Sabena (PM pari con gap di execution) e con Jacopo (mentoring UX) sono le sfide relazionali principali
- **Mentoring involontario** — Dan si ritrova a fare da mentore a persone che dovrebbero essere sue pari (Luca, Jacopo), con costo emotivo significativo e rischio di micromanagement
- **Navigare la strategia ambigua** — la domanda "Muffin vende network o software gestionale?" resta aperta per tutto il periodo; Dan opera in assenza di una direzione chiara senza cristallizzarsi
- **Advocacy XP/TDD con resistenza** — Dan porta avanti l'approccio iterativo-incrementale e il testing di fronte alla resistenza di Luca e Jacopo; la svolta arriva con il rinforzo esterno (Gianni, Fabio, Nicola) che validano il suo approccio
- **Gestione stakeholder interni/esterni** — rapporto con Andrea Morelli (filtro/uomo nel mezzo sul team CO), con Claudio (quasi-CTO, alleato), con Michele (stakeholder preoccupato da velocità e costi)

## Cosa sta andando bene ✅

- **Hubspot v2.0** completata: progetto ambizioso portato in fondo, riconosciuto internamente
- **Rinforzo esterno (Qmates/Cemate)** finalmente in campo: Gianni, Fabio e Nicola validano l'approccio di Dan, accelerano l'adozione di pratiche che la sola advocacy interna non riusciva a sbloccare
- **Cursor adottato dal team**: l'AI-assisted development diventa parte del workflow quotidiano
- **Test end-to-end e test API** introdotti con consenso del team — "sospiro di sollievo: si è visto come posso tranquillamente non essere ai tavoli tecnici"
- **Mood generale in stabilizzazione** (day 205, apr 2026): "sono sereno, sto lasciando andare" — dopo i mesi più turbolenti di feb-mar 2026
- **Roadmap condivisa** costruita con Fabio e Nicola e presentata a Claudio — momento di allineamento molto positivo (day 166)

## Sfide attuali ⚠️

- **Luca Sabena** — la relazione con il PM è la sfida relazionale principale e più costosa del periodo: Luca dovrebbe essere un pari, ma Dan finisce per fargli da mentore operativo, il che genera frustrazione crescente e rischia di rallentare tutto il resto
- **Jacopo** — il designer/UX mostra gap di seniority; Dan definisce un reshape dei ruoli: Luca guida discovery, Dan guida il build con Jacopo sul versante operativo
- **Strategia ambigua** — "Muffin vende network o bandi (software)?" ancora non risolto a day 222; la mancanza di direzione chiara complica la prioritizzazione della roadmap
- **Competizione in arrivo** — day 226 (mag 2026): "dobbiamo fare focus per riuscire ad accelerare [...] la competizione è abbastanza chiara da certi punti di vista e noi invece la stavamo trascurando"
- **Pressione su velocità e costi** — Michele (stakeholder) preoccupato dal ritmo percepito lento e dalla sensazione di rifare cose già pagate
- **Andrea Morelli** — "uomo nel mezzo" tra il team product e il team CO dei consulenti: tende a fare da filtro invece che da promotore, ostacolando la collaborazione diretta

## Mood trend

| Periodo | Mood | Note |
|---------|------|------|
| Ott–Dic 2024 (day 1–30) | medio-alto | Entusiasmo da inizio, tante info, setup |
| Gen–Mar 2025 (day 30–65) | medio, alti e bassi | War room eSaving, offerta Alessia — pressione ma anche risultati |
| Apr–Giu 2025 (day 65–107) | medio | Onboarding Alessia, template system — lavoro intenso |
| Lug–Ago 2025 (day 107–121) | non documentato (estivo) | Pausa |
| Set–Dic 2025 (day 122–165) | altalenante | Ripresa post-estate, tensioni Luca, ingresso Qmates |
| Gen–Feb 2026 (day 166–185) | basso/medio | Conflitto comunicativo con Luca, feedback duro da Fabio ("comunicazione violenta"), riflessioni profonde |
| Mar 2026 (day 185–205) | in risalita | Cursor, AI, nuova struttura team, Revenue Cat come segnale di mercato |
| Apr–Mag 2026 (day 205–226) | medio-alto | "Sono sereno, sto lasciando andare"; attenzione sulla competizione |

## Note per il futuro

- **Revenue Cat** (day 200, 2026-03-13): Dan ha mandato il CV "per curiosità" — "se mi offrono 200k, è difficile dire di no". Primo segnale esplicito di apertura al mercato; da monitorare se si ripete il pattern degli eventi esterni come acceleranti.
- **Domanda strategica aperta**: finché Muffin non risponde chiaramente "vendiamo network O software gestionale", la roadmap resterà sempre negoziata. Dan dovrebbe decidere se spingere per risolverla o imparare a operare comfortably con l'ambiguità.
- **Il mentoring dei pari** (Luca, Jacopo) è il costo silenzioso più alto di questa esperienza — da riconoscere esplicitamente nei prossimi 1:1 con Claudio e da strutturare diversamente (es. coaching esterno per Luca, ruoli più separati con Jacopo).
- **Cursor + AI workflow**: adottato, funziona. Da capitalizzare come competenza esportabile nel CV e nei prossimi colloqui.
- **Se/quando Dan uscirà** da Muffin: il playbook è già scritto (pattern 1) — iniziare dalla persona di maggiore fiducia (Claudio), non aspettare che un evento esterno costringa la mano.
