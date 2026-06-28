---
title: Muffin — In Progress
company: muffin
period: 2024-10-07 → presente
total_days: 238
stack: [TypeScript, NestJS, React, Next.js, PostgreSQL, Docker, AWS, Hubspot, Mixpanel, Metabase, n8n, Jira, Figma, Cursor]
status: in-progress
last_updated: 2026-06-28
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
| 2026-05-25 | day 226 | Focus su competizione, urgenza di accelerare |
| 2026-06-10 | day 228 | [DECISIONE] Roadmap con stime: approccio scelto da Fabio/Gianni/Luca — Dan fortemente contrario |
| 2026-06-10 | day 228 | Call con Condense (primo fornitore infrastruttura alternativo a Fastweb): impressione positiva |
| 2026-06-11 | day 229 | Opportunità Ancora (Staff Software Engineer): colloquio 15/06 con CTO Andrea Rusconi — RAL €70k-€95k + equity |
| 2026-06-11 | day 229 | Notizia: Gianni (Qmates) potrebbe essere spostato su altro cliente a luglio/agosto |
| 2026-06-12 | day 230 | Call riservata con Michele: "scossone" in arrivo — probabile uscita di Luca, budget Qmates a rischio |
| 2026-06-15 | day 231 | Call conoscitiva Ancora con Andrea Rusconi (CTO) — impressione non positiva: non conosceva XP, Dan stesso incerto sul match. Probabilmente non si proseguirà. |
| 2026-06-16 | day 232 | [DECISIONE] Sync con Luca strutturato male: troppo disordine, da migliorare. Roadmap presentata al business — andata bene. 1:1 Alessia: goals strutturati (AI fluency, AWS, Tech Lead?) |
| 2026-06-17 | day 233 | Luca inizia a usare la roadmap come scadenze — campanello d'allarme. Dan preferisce "far bollire". Alessia coinvolta in artifact infrastruttura — ottimo passo TL |
| 2026-06-18 | day 234 | Feature invito rilasciata in prod ✅. Bug autore template certificati risolto ✅. Refinement con Jacopo su ricerca progetti. Settimana "super super super positiva" |
| 2026-06-23 | day 236 | Release piani corporate ✅, filtro azienda ✅. Banner "progetti senza clienti" parzialmente completati (pagina progetto + bando-da-progetto ✅, bandi generali ❌). Ancora comunica che non proseguirà — chiuso senza rimpianti. Refinement Luca+Jacopo ancora difficile. |
| 2026-06-24 | day 237 | Design "clienti in collaborazione vs non registrati" sbloccato: Luca approva ✅. Showcase impostato per lunedì ✅. Frizione alta Luca-Jacopo: Jacopo posiziona le scelte design come "gusto" non come UX argomentata — problema esplicitato. |
| 2026-06-26 | day 238 | Giornata formazione leggera. Sperimentato Cursor con skill/prompt personali — risultato buono. Side project Fantapic (mondiali) — weekend dedicato. Piano lunedì: finire tabella progetti + Alessia + pratiche aziende registrate. |

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

**Invito da progetto (feature BE)** — Da day 227 (giu 2026): feature che permette ai consulenti di invitare aziende clienti direttamente da un progetto. Backend: partita IVA obbligatoria + automatismo di associazione automatica dei progetti quando una nuova azienda si registra o accetta una relazione. Dan fa pair con Alessia per l'intera settimana. Aggiunta complessità: logica solo per aziende beneficiarie, con verifica della consultant enterprise corretta. **Rilasciata in produzione il 18 giugno 2026 (day 234).** ✅

**Monte Carlo simulation (forecast delivery)** — Day 229-230 (giu 2026): Dan costruisce un simulatore Monte Carlo con n8n per supportare le stime di delivery del team. Input manuale (da calcoli prefatti via form), output forecast generato dal tool. Risposta tecnica alla pressione di adottare un approccio basato su stime.

**Visione NotebookLM per Muffin** — Day 230 (giu 2026): Dan esplora con Claude prototipi sulla visione AI-native del prodotto. Ispirazione: NotebookLM. Tre assi: (1) chatbot sul bando con note personali integrate; (2) scrittura documenti stile Canvas per la pratica; (3) repo AI-ready con pratiche XP amplificate. Visione a lungo termine per il refactor della piattaforma.

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
- **Feature invito rilasciata in prod** (day 234, giu 2026): dopo una settimana di pair con Alessia, feature completata e mandata in produzione. Corner case complessi gestiti bene. Segnale di buona collaborazione e pair programming efficace.
- **Settimana 15-18 giugno "super super super positiva"**: anche in un contesto di tensione strategica elevata, il team operativo funziona. Fabio e Dan iniziano i live update per progetti di aziende non registrate.
- **Alessia in crescita**: coinvolta in decisioni infrastrutturali, goals chiari dal 1:1, percorso verso Tech Lead avviato concretamente.
- **Design "clienti in collaborazione vs non registrati" sbloccato** (day 237, 24 giu 2026): dopo sessioni di brainstorming difficili (lunedì 2-3 opzioni veloce + tutta la giornata di martedì-mercoledì), Luca approva il design. Passo avanti su una feature strategicamente importante.
- **Cursor con skill personali** (day 238, 26 giu 2026): Dan sta costruendo i propri prompt/workflow su Cursor — non solo utente passivo ma costruttore attivo. Segnale di maturazione dell'approccio AI-assisted.
- **Fantapic** — side project per i mondiali avviato: Dan si diverte, weekend dedicato. Segnale di energia creativa positiva al di fuori di Muffin.

## Sfide attuali ⚠️

- **"Scossone" imminente** (day 230, giu 2026): Michele ha fatto capire in una call riservata che ci saranno cambiamenti. Probabile uscita di Luca. Jacopo status incerto. Dan ha dichiarato esplicitamente: "Se tocca Alessia è guerra vera." Variabile critica: il budget Qmates — se non si riesce a tenerli anche nel 2027, serve una strategia alternativa per il refactor della piattaforma.
- **Luca Sabena** — la relazione con il PM è la sfida relazionale principale e più costosa del periodo. A giugno 2026 Michele conferma di non essere contento di Luca — la sua posizione appare a rischio. Aggravante week 15-18 giugno: Luca inizia a usare la roadmap come scadenze da rispettare (day 233) — esattamente il problema già anticipato, ora manifesto. Dan preferisce "far bollire" prima di reagire; Fabio lo ha sentito in privato.
- **Sync Luca da ristrutturare** (day 232, 16 giu 2026): Luca arrivato 20 min in ritardo, voleva andare dopo 5 min. Problema emesso su gestione colonna: la decisione era già stata presa ma Luca non ricordava dove l'aveva messa. [DECISIONE] Il sync mattiniero con Luca va strutturato meglio.
- **Roadmap con stime** (day 228, giu 2026): decisione presa da Fabio/Gianni/Luca di prioritizzare con stime. Dan è fortemente contrario — ha letto "When Will It Be Done?" proprio per evitare questo approccio e considera la priorità sufficiente. Sta cercando di accettarla ma non la condivide.
- **Possibile uscita di Gianni** (day 229, giu 2026): Qmates potrebbe spostare Gianni su altro cliente a luglio/agosto. Dan ha comunicato a Fabrizio (Qmates) le criticità in modo trasparente: destabilizzazione del team, perdita di credibilità di Qmates dentro Muffin. Nota a margine: la presenza di Gianni, più bravo e più scettico sull'AI, rende a volte difficile il ruolo di Tech Lead di Dan.
- **Opportunità esterna Ancora — risultato non positivo** (day 231, 15 giu 2026): call conoscitiva con Andrea Rusconi (CTO). Segnali preoccupanti: non conosceva XP (Extreme Programming); risposta poco chiara alla domanda "perché microservizi?"; Dan stesso incerto se sia un match corretto. Impressione generale: probabilmente non si proseguirà. Il pattern "evento esterno come accelerante" si è attivato — ma l'opportunità specifica non sembra quella giusta. → [[patterns/index|Pattern 3]].
- **Jacopo — "è tutto gusto"** (day 236-237, 23-24 giu 2026): il problema UX di Jacopo si esplicita chiaramente questa settimana. Posiziona ogni scelta di design come preferenza soggettiva/gusto personale, senza framework né argomentazione verificabile. Non c'è modo di spostare la conversazione. Luca stesso lo riconosce come problema. Dan identifica la conversazione necessaria: non "devi fare meglio" ma "devi cambiare come parli del tuo lavoro." → [[patterns/index|Pattern 5]]
- **Strategia ambigua** — "Muffin vende network o bandi (software)?" ancora non risolto; la mancanza di direzione chiara complica la prioritizzazione della roadmap
- **Competizione in arrivo** — day 226 (mag 2026): urgenza di accelerare vs. competitori
- **Andrea Morelli** — "uomo nel mezzo" tra il team product e il team CO dei consulenti: tende a fare da filtro invece che da promotore

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
| Giu 2026 (day 227–230) | misto/teso | Giornata in ufficio + pair positiva (day 227); poi tensione crescente: roadmap con stime, Gianni a rischio, "scossone" Michele, opportunità Ancora. "Un po' triste per la situazione complessiva, ma lucido." |
| Giu 2026 (day 231–234) | positivo/operativo | Settimana "super super super positiva" nonostante la tensione strategica. Feature invito in prod. Collaborazione con Alessia e Fabio fluida. Call Ancora non positiva — ridimensiona l'urgenza esterna ma non la lascia cadere. |
| Giu 2026 (day 235–238) | misto/positivo | Ancora chiusa definitivamente (senza rimpianti). Design sbloccato mercoledì — soddisfazione operativa. Frustrazione crescente su Jacopo ("è tutto gusto"). Giornata formazione + Fantapic il venerdì — energia positiva fuori da Muffin. Banner "progetti senza clienti" quasi completi, showcase pronto per lunedì. |

## Note per il futuro

- **Ancora — chiusa definitivamente** (day 236, 2026-06-23): Ancora ha comunicato che non proseguiranno. Dan se lo aspettava — i dubbi percepiti in call erano reciproci (no XP, visione "tra due anni non si scrive più codice"). Distanza culturale troppo grande. Capitolo chiuso senza rimpianti. Questo NON chiude il capitolo mercato — conferma che la ricerca rimane esplorativa. → [[patterns/index|Pattern 3]].
- **"Scossone" imminente**: la call con Michele (day 230) porta notizie che cambiano lo scenario. Da monitorare: (1) Luca esce? Quando? Chi lo sostituisce? (2) Budget Qmates confermato per 2027? (3) Se Gianni esce, chi porta avanti il rinforzo tecnico? (4) Alessia è intoccabile — se fosse coinvolta, Dan ha dichiarato "è guerra vera".
- **Visione refactor piattaforma**: la visione NotebookLM-inspired esplora un AI-repo nuovo con pratiche XP amplificate. Questo potrebbe essere il progetto che giustifica un altro anno a Muffin — ma solo se ci sono le condizioni (Qmates, budget, leadership stabile).
- **Revenue Cat** (day 200, 2026-03-13): Dan ha mandato il CV "per curiosità" — primo segnale di apertura al mercato. Superato da Ancora (day 229) come segnale più concreto.
- **Domanda strategica aperta**: finché Muffin non risponde chiaramente "vendiamo network O software gestionale", la roadmap resterà sempre negoziata.
- **Il mentoring dei pari** (Luca, Jacopo) è il costo silenzioso più alto di questa esperienza.
- **Cursor + AI workflow**: adottato, funziona. Da capitalizzare come competenza esportabile nel CV e nei prossimi colloqui.
- **Se/quando Dan uscirà** da Muffin: il playbook è già scritto (pattern 1) — iniziare dalla persona di maggiore fiducia (Claudio), non aspettare che un evento esterno costringa la mano.

## Dati da CV

**Titolo ufficiale CV 2026**: Head of Software Development (pagina esperienza) / Lead Software Engineer | Technical Coach (header CV)  
**Titolo LinkedIn**: Lead Software Engineer  
**Tre titoli per lo stesso ruolo**: Head of Software Development (contrattuale), Lead Software Engineer (LinkedIn), Senior Developer & Tech Lead (journal/self-description) — scelta consapevole di posizionamento diverso per canali diversi  
**Stack aggiuntivo da CV**: pnpm, Turbo, Storybook — dettagli architettura monorepo non nel journal  
**Descrizione ufficiale azienda**: "Fintech platform simplifying access to facilitated finance through technology and AI-powered tools" — più sintetica e market-friendly della descrizione interna ("finanza agevolata per imprese italiane")  
**Pratiche da CV**: TDD, Pair/Mob programming, Trunk-Based Development — conferma l'advocacy continua anche in Muffin
