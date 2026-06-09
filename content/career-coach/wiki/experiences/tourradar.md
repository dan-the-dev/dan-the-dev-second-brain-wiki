---
title: Esperienza — Tour Radar
company: tourradar
period: 2023-06-03 → 2024-09-17
total_days: 227
stack: [PHP, MySQL, Redis, Bitbucket, Jira, AWS X-Ray, Cypress, Percy, Amplitude, Google Tag Manager, k6, Confluence]
updated: 2026-06-08
tags: [experience, tourradar]
---

# Tour Radar

## Ruolo e periodo
Dan entra in Tour Radar (piattaforma di prenotazione viaggi organizzati) il 3 giugno 2023 come Senior Developer/Tech Lead, in un team **Web** distribuito guidato dal manager **Anton**. Il diario copre 227 giornate, da inizio giugno 2023 al 17 settembre 2024 (~15 mesi e mezzo), e racconta l'intero arco "ingresso → crescita → crisi → uscita": dall'isolamento iniziale in un team distribuito, attraverso il progetto bandiera **Tachyon** e due proposte strategiche da tech lead, fino al layoff aziendale di giugno 2024 che accelera una decisione già in incubazione — l'addio a favore di una nuova azienda, **Muffin**. Il giornale termina "in corsa", senza una chiusura esplicita, l'ultimo giorno documentato è il 17 settembre 2024 con lavoro ordinario su MR-3595.

## Timeline eventi chiave
- **2023-06-03 (day 1)** — Inizio in Tour Radar nel team Web; primo standup con Anton come manager; prime impressioni e onboarding
- **Estate 2023** — Difficoltà di socializzazione in un team molto distribuito e individuale: senso di isolamento ("loneliness")
- **~Lug-Ago 2023** — Avvio del lavoro sul **Project Tachyon** (cache Redis di pagine pre-calcolate per ridurre il TTFB), che diventerà il progetto bandiera dei mesi successivi
- **2023-09-20 (day 63)** — **Proposta strategica DDD/bounded context**: Dan elabora e condivide un'analisi dettagliata su Conway's Law, Team Topologies, modello "Spotify" ed EventStorming per ripensare la struttura organizzativa del team Web — "considerando la legge di Conway, team topologies, DDD e microservizi [...] la soluzione migliore che ho visto in passato è un modello tipo Spotify"
- **2023-12-11/12 (day 106-107)** — **Rilascio di Project Tachyon** in produzione, con feature flag di sicurezza ("release with flag off") — il momento clou del periodo
- **2024-01-08 ca.** — **Crisi post-rilascio**: bug critico individuato, flag-off d'urgenza, gestione dello stress da incidente in produzione
- **2024-01-22 (day 119)** — "Tachyon hand off done" — passaggio di consegne completato, chiusura del ciclo di sviluppo diretto
- **2024-01-29 / 01-31 (day 124, 126)** — **Proposta strategica "Web Framework"**: documento articolato in cui Dan sconsiglia di rifattorizzare il monolite esistente e propone di "morire in pace" mantenendolo in maintenance mode mentre si ricostruisce da zero per bounded context, con approccio DDD/EventStorming — "Web current repo needs to die — it will take years (safety is the priority here) but that's the target"
- **2024-02-20 (day 137)** — **Colloquio con WCS** ("Gestionali e BI per fondi pensione e fondi sanitari"): primo segnale concreto di ricerca attiva di nuove opportunità
- **2024-02-29 / 03-07 (day 144, 148)** — Thread ricorrente "Rispondere all'offerta WCS" / "Reply to WCS", poi sparisce dal diario senza essere accettata
- **2024-03-04 (day 146)** — **Rifiuto esplicito del task MR-2926**: "declined because not enough info and requires time we don't have now" — episodio di assertività matura nella gestione del carico
- **2024-04-22 (day 176)** — **DART Goals** annotati formalmente: "Improve communication skills", "AWS Certificate (Solution Architect)", miglioramento progetti/monitoring
- **2024-04-29 (day 178)** — All Hands Meeting con "mixed feelings": preoccupazione per la rimozione del flexible Friday, scetticismo sulla cultura del "tenere occupate le persone", apprezzamento per i temi "buy vs build" e "product vs project"
- **2024-05-07** — "1to1 positive" con Anton
- **2024-06-24 (day 207)** — **Annuncio di layoff in azienda**: "Layoff announced — very sad / apparently I'm not involved / Egor was involved"
- **2024-06-26 (day 208)** — **Riflessione critica scritta direttamente ad Anton**: "it would have been better if Travis responded to the question of 'how much time do we have to change things before another layoff happens?' — not an easy question but also not an easy unknown to live with while working" — momento di rottura della fiducia verso la leadership
- **2024-07-29 (day 217)** — **"Write to Marta (Muffin) for the final confirmation of resignation and some questions to Lorenzo"** — prima menzione esplicita delle proprie dimissioni: Dan ha già un'offerta da una nuova azienda, Muffin
- **2024-08-02 (day 219)** — "Holidayyyyys" come Win of the day, e tra le "Notes for when back": "Tell Andy the news about me leaving, then tell the team / Prepare and schedule a goodbye message to the company / Think to documentation [...] before leaving / Ask for the computer and amazon book how to send it to TR" — pianificazione dettagliata dell'uscita
- **2024-09-16 (day 226)** — "Sentire Marta Muffin per ingresso" — coordinamento dei dettagli di ingresso nella nuova azienda
- **2024-09-17 (day 227, ultima entry)** — Ultimo giorno documentato: lavoro ordinario su MR-3595, il giornale si interrompe senza chiusura esplicita

## Stack tecnologico
**PHP** (monolite "Web", CodeIgniter — classi Pw_serp, Pw_tours, Pw_enquiries, Engine_model, Booking), **MySQL** (progetto di migrazione 5→8 con load testing k6), **Redis** (cuore del Project Tachyon), **Bitbucket** (repository, PR, pipeline CI/CD), **Jira/Atlassian**, **Slack**, **AWS X-Ray** (tracing performance), **AWS** (certificazione Solution Architect tra i DART goals), **Cypress** (E2E/snapshot testing), **Percy Snapshot** (visual regression), **Postman/Swagger**, **StatusCake/StatusRadar** (monitoring), **Grafana** (proposto), **Google Tag Manager/Amplitude** (tracking eventi booking), **k6** (load testing), **Confluence**, **HiBob**; in apprendimento personale: **TypeScript**, **Go**; inoltre **Docker**, **Gitleaks** (proposta sicurezza), **Zapier**.

## Progetti principali
- **Project Tachyon**: sistema di cache Redis basato su JSON pre-calcolati per le pagine TDP/SERP, per ridurre il TTFB — dalla POC (estate 2023) al rilascio in produzione (dicembre 2023), seguito da una crisi post-rilascio (bug critico, flag-off d'emergenza a gennaio 2024) e da un handoff completato il 22 gennaio 2024. Il progetto bandiera del periodo, simbolo sia delle competenze tecniche di Dan sia delle sfide di gestione del rischio in produzione
- **Migrazione MySQL 5 → MySQL 8**: progetto infrastrutturale con load testing k6 e ambienti paralleli — mai dichiarato concluso nel diario
- **SERP Top Links / MR-3251 (refactoring con Factory Pattern)**: refactoring esteso (marzo-luglio 2024) con `SerpCorrelatedLinkCalculator`, `SerpLinkCalculatorFactory`, `SerpTopLinksCollection` e generatori per sezioni (Islands, Mountains, Oceans, Guides, Destinations...) condivisi tra page-types — uno degli esempi più ricchi di applicazione di design pattern e collaborazione cross-team
- **SERP reduction next year pages (MR-3241)**: ottimizzazione che riduce da 24 a 11/12 mesi il calcolo delle pagine SERP, rilasciata a maggio 2024
- **Reviews / Top Operators**: calcolo recensioni, badge, prezzi medi e link per operatori turistici principali, integrato e rilasciato a maggio 2024
- **CLP blocks / MR-165**: progetto sui blocchi CLP portato avanti con Nico, "basically done" il 20 marzo 2024
- **Web Framework strategy**: documento di proposta architetturale per modernizzare lo stack del monolite Web (gennaio-marzo 2024)
- **Side-business di content creation**: newsletter (AgileBits, "Locanda del Tech"), podcast, corso email "TDD in 10 minuti", webinar TDD, articolo su Codemotion, partecipazione a community PHP (PUGMI, phpday) — crescita costante in parallelo al lavoro

## Competenze sviluppate
### Tecniche
- Design pattern avanzati (Factory, Strategy) applicati a un refactoring esteso e ben documentato (MR-3251)
- Caching e ottimizzazione delle performance (Redis, JSON pre-calcolati, TTFB) — competenza centrale dimostrata dal Project Tachyon, dalla concezione alla produzione
- Tracing e debug di performance in produzione (AWS X-Ray, gestione della crisi post-rilascio Tachyon)
- Testing avanzato: proposta di "Golden Master tests", discussione su unit vs integration test, TDD insegnato attraverso corso email e webinar
- Tracking/analytics (Amplitude, Google Tag Manager) — comprensione approfondita di trigger ed eventi di booking
- Apprendimento attivo di TypeScript e Go, ampliando lo stack personale
- Sicurezza (proposta Gitleaks per il controllo dei segreti)

### Soft skills e leadership
- Visione strategica e capacità propositiva: due proposte strutturali importanti (DDD/bounded context a settembre 2023, Web Framework a gennaio 2024) — crescita da "developer esecutore" a "tech lead visionario", anche senza un titolo formale
- Mentoring/aiuto ai colleghi: episodi ricorrenti di supporto diretto ("Help Kevin", "Help Nico", revisioni PR, sync su branch condivisi)
- Assertività e gestione del carico: capacità di rifiutare task poco definiti (MR-2926) con motivazioni chiare e dirette
- Comunicazione e feedback verso l'alto: capacità di scrivere un feedback diretto, articolato e critico al proprio manager dopo un evento delicato (layoff)
- Public speaking e divulgazione: crescita continua come content creator (newsletter, podcast, talk, workshop, community PHP)
- Gestione della transizione professionale: pianificazione ordinata e rispettosa delle proprie dimissioni
- Definizione di obiettivi strutturati: DART Goals espliciti annotati ad aprile 2024

## Cosa è andato bene ✅
- 2023-12-11/12: rilascio di Project Tachyon in produzione
- 2024-01-22: handoff di Tachyon completato con successo
- 2024-03-20: MR-165 "basically done"
- 2024-04-22: DART Goals annotati e pianificati con chiarezza
- 2024-05-07: "1to1 positive" con Anton
- 2024-05-23: proposta di un processo per "visibilità di altri team che toccano le stesse aree" accolta positivamente in retro
- 2024-07-15: "Islands finished, mountains looks so easy!" — il refactoring MR-3251 procede bene
- 2024-08-02: "Holidayyyyys" — primo giorno di vacanza dopo la decisione di dimettersi, segno di sollievo
- 2024-08-2x: rilascio di MR-3311 (SERP headings customization)

## Cosa è stato difficile ⚠️
- Estate-autunno 2023: senso di isolamento e difficoltà di comunicazione in un team distribuito
- 2024-01-08: bug critico post-rilascio Tachyon, flag-off d'emergenza, forte stress da incidente in produzione
- 2024-03-01/04: "MR-2926 not able to find a solution 😞" — necessità di rifiutare un task per mancanza di informazioni
- 2024-04-29: "mixed feelings" sull'All Hands Meeting — preoccupazioni su flexible Friday e scetticismo sulla strategia aziendale
- 2024-06-24: annuncio di layoff in azienda — "very sad", coinvolgimento del collega Egor, incertezza personale
- 2024-06-26: riflessione critica sulla gestione poco trasparente del layoff e sulla reale capacità dell'azienda di affrontare il tech debt
- 2024-08-29: "Papaleo... 😢" — perdita personale
- Tema persistente: lentezza dei processi, mancanza di test automatizzati, "cost of change in code is too high", dipendenza da troppe persone per sbloccare task

## Mood trend
- **Giu-Ago 2023**: tono neutro/esplorativo con sfumature di isolamento ("loneliness", difficoltà a socializzare in team distribuito) — energia orientata a "capire come funzionano le cose"
- **Set-Ott 2023**: tono propositivo/ambizioso — picco con la proposta DDD (20 settembre), Dan si sente investito di un ruolo da visionario del cambiamento
- **Nov-Dic 2023**: tono costruttivo e orientato all'obiettivo — focus totale su Tachyon, chiusura d'anno con il rilascio in produzione
- **Gen 2024**: oscillazione tra stress acuto (crisi/bug post-rilascio, flag-off) e sollievo/orgoglio (handoff completato il 22)
- **Feb 2024**: tono riflessivo e in transizione — primo segnale esterno (colloquio WCS), germoglia il dubbio sul proprio futuro
- **Mar 2024**: ambivalente — lavoro tecnico solido (MR-165, refactoring) convive con la valutazione lunga e sofferta dell'offerta WCS
- **Apr 2024**: propositivo ma con crescente scetticismo verso l'azienda — DART Goals ben definiti, ma "mixed feelings" sull'All Hands Meeting: prime crepe nella fiducia
- **Mag 2024**: operativo e relativamente sereno — buon ritmo di lavoro, 1:1 positivo con Anton, crescita parallela del side-business
- **Giu 2024**: punto di svolta emotivo — l'annuncio del layoff (24 giugno) genera tristezza e incertezza; la riflessione critica del 26 giugno segna la rottura della fiducia verso la leadership: il tono cambia definitivamente
- **Lug 2024**: risoluzione e sollievo crescente — Dan ha già una exit strategy (contatto con Marta/Muffin, dimissioni in finalizzazione): emerge serenità nel "sapere di andarsene"
- **Ago 2024**: disteso/in attesa — vacanze ("Holidayyyyys"), pianificazione meticolosa della transizione, qualche nota personale dolorosa (Papaleo)
- **Set 2024 (fino al 17/09)**: disimpegnato/in chiusura morbida — ritmo di lavoro più diradato, focus crescente su attività personali e sul coordinamento dell'ingresso in Muffin; il giornale si interrompe senza chiusura esplicita

## Lezioni imparate
1. **Il divario tra proposta strategica e cambiamento reale**: Dan elabora più volte (DDD, Web Framework, retro su visibilità tra team) proposte strutturali ben argomentate, ma raramente ne osserva l'adozione concreta — la "frustrazione dell'intrapreneur"
2. **La tensione costante tra qualità tecnica e velocità di consegna**: tema ricorrente per tutto il periodo — mancanza di test, "cost of change too high", refactoring come lavoro nascosto rispetto alle feature visibili
3. **La fiducia è una merce rara e fragile**: sia nel rapporto con Anton (alti e bassi, dal 1:1 positivo alla critica diretta), sia nella narrazione più ampia sull'azienda (il layoff come rottura di un patto implicito)
4. **L'isolamento nel lavoro distribuito si risolve costruendo relazioni di fiducia nel tempo** (Andy, Nico, Div) — non scompare da solo
5. **Una identità professionale "fuori dall'azienda" può crescere in parallelo**: il side-business di content creation (newsletter, podcast, corsi, community) diventa sempre più centrale, anticipando forse una direzione ibrida o autonoma
6. **I segnali di uscita precedono spesso la decisione effettiva di mesi**: il colloquio WCS (febbraio 2024) precede di 4 mesi il layoff e di 5 mesi la decisione definitiva — la "ricerca silenziosa" inizia ben prima della rottura conclamata
7. **Gli eventi traumatici accelerano decisioni già latenti, non le creano**: il layoff non genera il desiderio di andarsene, lo cristallizza — un pattern psicologico da osservare anche altrove
8. **La cura nella gestione delle uscite è uno stile distintivo**: la pianificazione meticolosa delle dimissioni (chi avvisare, in che ordine, come preparare la documentazione) si ripete identica a Mymenu — segno di un tratto professionale stabile

## Dati da CV

**Titolo ufficiale CV 2024**: Senior Software Engineer / Agile Senior Developer  
**Titolo LinkedIn**: Senior Software Engineer  
**Stack da CV**: PHP 8.2, custom MVC framework basato su CodeIgniter, AWS, Atlassian suite (Bitbucket, Jira, Confluence)  
**Progetto MySQL 5→8 da CV**: "Led a major MySQL 5 → MySQL 8 migration project, replacing a large set of database queries with a caching strategy to preserve performance and stability" — conferma e completa la descrizione del Project Tachyon  
**Nota narrativa CV 2024**: il titolo "Agile Senior Developer" appare per la prima volta — segnale che Dan stava già ridefinendo il suo posizionamento mentre era ancora in TourRadar, probabilmente in preparazione a nuovi colloqui (WCS, poi Muffin)

## Tornerei?
Probabilmente no. Tour Radar è il capitolo in cui Dan prova più chiaramente a esercitare una leadership tecnica visionaria (le due proposte strategiche DDD e Web Framework) ma si scontra ripetutamente con l'inerzia organizzativa — un'esperienza che culmina nella rottura di fiducia innescata dal layoff e dalla gestione poco trasparente della comunicazione da parte della leadership. Resta comunque un'esperienza di crescita tecnica solida (Tachyon, design pattern avanzati) e l'occasione in cui il suo "side-business" di divulgazione tecnica (newsletter, podcast, corsi) inizia a diventare un pilastro della sua identità professionale.
