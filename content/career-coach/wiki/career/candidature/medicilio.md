---
title: Candidatura — Medicilio Engineering Lead
company: Medicilio
role: Engineering Lead
status: rejected
applied: 2026-06-30
ref: 86ca1xejx
updated: 2026-07-22
rejected: 2026-07-22
tags: [job-search, candidatura, 2026]
---

# Medicilio — Engineering Lead
https://www.linkedin.com/jobs/view/4425792951/?trk=eml-email_jobs_viewed_job_reminder_01-job_card-0-jobcard_body_4425792951&refId=4Ew4rIzGQb%2BXPI6bvchBHg%3D%3D&trackingId=SBxTmOFfS4au5Z5Wx9AT1A%3D%3D

## L'azienda

**Sito**: da verificare
**Settore**: Healthcare tech
**Modello**: prodotto digitale in ambito sanitario/clinico
**Team**: non specificato nella JD
**Sede**: Remote-first EU — uffici facoltativi a Milano e Sicilia
**Valori dichiarati**: Trust · Care · Curiosity · Expansion · Joy

## Il ruolo

**Titolo**: Engineering Lead
**Riporta a**: Head of Engineering (partner diretto, non subordinato passivo)
**Ownership**: un dominio completo — persone, codice, direzione tecnica, interfaccia con product e design
**Struttura**: lead di più pod interni al dominio
**Modello di delivery**: artifact-driven con AI-assisted execution — gli ingegneri progettano, revisionano, approvano ogni stadio; AI assiste l'esecuzione

### Responsabilità chiave
- 1:1, performance review, crescita, hiring del proprio dominio
- Definire e proteggere il technical bar tra i pod
- Decisioni architetturali di dominio; allineamento con Head of Eng per quelle cross-domain
- Restare hands-on nel codice (PR review, pattern, astrazioni riusabili)
- Definire dove e come l'AI si inserisce nel workflow del team
- Post-release review, eliminazione di classi di errore (non incidenti singoli)

## Stack tecnico

- **Backend**: Python (Django / FastAPI)
- **Frontend**: TypeScript (React)
- **Database**: PostgreSQL
- **Cloud**: Google Cloud Platform
- **AI tooling**: Claude, Cursor, MCP, sandboxed agents

## Compensazione & benefit

| Voce | Dettaglio |
|------|-----------|
| RAL | €55.000 – €85.000 (top band per chi dimostra ownership e leadership) |
| Equity | Possibile — allocazione e vesting discussi all'offer stage |
| Lavoro | Remote-first EU |
| Uffici | Milano e Sicilia (facoltativi) |
| Welfare | Non specificato nella JD |

## Processo di selezione

*(da verificare con il recruiter/HR)*

| Step | Formato | Note |
|------|---------|-------|
| 1 | Video call 30 min | Screening con Jörg Stommel (VP of Engineering) ✅ |
| 2 | Technical call 2 ore | Lunedì — con Alessio Ferrara (Head of Engineering) |

## Preparazione colloquio tecnico (weekend 12-13/07)

**Interlocutore**: [Alessio Ferrara](https://www.linkedin.com/in/ale-ferrara/) — Head of Engineering
- Background: Nexi Digital (Java/Spring, 1 anno) → Medicilio Software Engineer → Senior → HoE (2 anni 10 mesi totali)
- Percorso molto rapido all'interno di Medicilio — forte tecnicamente sullo stack interno (Python/GCP)
- Probabile focus sulla profondità tecnica, meno sulla filosofia di leadership

**Piano weekend**

*Sabato*
- Mattina (2h): Python quickstart — list comprehensions, decorators, context managers, type hints, classi
- Pomeriggio (3h): Django + DRF — setup, models, serializers, views, urls, CRUD funzionante

*Domenica*
- Build progetto realistico: **Patient Monitoring API**
  - Models: `Patient`, `Measurement` (tipo, valore, timestamp)
  - `POST /measurements/` — registra misurazione
  - `GET /patients/{id}/measurements/` — lista con flag `warning` su threshold
  - Test con `pytest-django`
- AI-assisted workflow: CLAUDE.md con regole progetto, Claude Code per scaffolding, Dan approva ogni step
- Obiettivo: poter dire "ho costruito questa mini API Django nel weekend" con codice da mostrare

## Colloqui

| Data | Tipo | Interlocutore | Note | Esito |
|------|------|---------------|------|-------|
| 30/06 | — | — | Candidatura inviata, ref 86ca1xejx | ✅ |
| 08/07 ore 14:00 | Video call 30 min | Jörg Stommel — VP of Engineering | Screening iniziale | ✅ Passato — fit culturale confermato |
| 14/07 | Technical call 2 ore | Alessio Ferrara — Head of Engineering | Svolta — impressione positiva, andati avanti dopo pausa | ✅ Passato |
| 22/07 | — | Jörg Stommel | Rifiuto via email — "after careful consideration" | 🔴 Rifiutato |

## Note dal colloquio 08/07

### Prodotti Medicilio
- **Prodotto 1 — Radiologia digitale**: paziente fa la lastra → immagine sincronizzata sul cloud → medico scrive report → inviato al paziente senza andare in ospedale
- **Prodotto 2 — Remote Patient Monitoring** (introdotto 2.5 anni fa): post-chirurgia, il medico aggiunge il paziente alla piattaforma con il pathway (misurazioni, giorni), Medicilio spedisce i device + tablet al paziente, setup assistito, misurazioni streamed live, il medico riceve notifiche su trend/escalation/threshold

### Scala e crescita
- Pazienti attuali: ~300
- In arrivo: **10.000-15.000 pazienti** — won a government tender da 100-150M insieme ad altri ospedali
- Team engineering attuale: **8 persone** → target: **16**
- Il tender è il momento di scala — da qui la necessità di dividere in sub-team (struttura che non c'è ancora) e di assumere Engineering Lead

### Artifact-driven model (Jörg's words)
L'intero product lifecycle è strutturato in step con artifact immutabili:
- Requirements gathering → PRD → design/prototyping → planning tecnico → PR review → QA → deployment → reconciliation → data gathering (loop)
- Ogni step ha un artifact chiaro, immutabile, allegato al ticket o codebase
- Gli umani firmano ogni step (accountability + traceability)

**Tre tier**:
- **Tier 1**: development completamente autonomo (AI crea PR, AI PR agent verifica contro standard, AI fixup, engineer firma alla fine)
- **Tier 2**: developer-driven con AI assistance
- **Tier 3**: green field con scaffold AI su standard esistenti

**Punto chiave di Jörg**: "If you have a good code base, AI amplifies it x100. If you have a shitty code base, it amplifies the shitty code base x100." → loro hanno buona architettura, design patterns, standard → posizione ottimale per sfruttare l'AI.

### Ruolo cercato
- Engineering Lead che abbraccia questo approccio E contribuisce a migliorarlo
- Separato: stanno cercando anche un "AI enablement engineer" dedicato a rollout per tutta l'azienda (non solo engineering)

### Contesto azienda
- Azienda italiana, mercato italiano
- Full remote (nata remote-first)
- Ufficio nuovo a Milano — vogliono persone che ci vengano con regolarità, non ogni giorno
- Jörg parla in inglese — dinamiche internazionali nonostante mercato IT

### Dan nel colloquio
- Framing dell'uscita da Muffin: "messy situation, company trying to understand direction, values might change" — onesto, non allarmante ✅
- Buon fit culturale confermato da Jörg
- Connessione su XP, pair programming, 1:1s, growth ladder

## Domande da fare a Jörg

1. **AI workflow in pratica**: "The JD mentions an artifact-driven, AI-assisted delivery model — how does that actually look day-to-day today, and what's the gap between where you are and where you want to be?"

2. **Struttura del team**: "How many engineers would I be leading in my domain, and how does the Engineering Lead interface with the Head of Engineering on cross-domain technical decisions?"

3. **La sfida più grossa adesso**: "What's the biggest technical or organizational challenge the engineering team is working through right now?"

4. **Impatto del contesto healthcare**: "How does working in a regulated healthcare environment affect your engineering cadence — in terms of compliance, data handling, and pace of shipping?"

5. **Definizione di successo**: "What would make someone in this role clearly successful after the first 6 months?"

## Fit con Dan

**Punti di forza**:
- AI-assisted workflows con Claude/Cursor/MCP — Dan li usa in produzione, non come esperimento
- Artifact-driven delivery + CLAUDE.md = Dan ha costruito esattamente questo sistema per sé
- Valori aziendali (Trust, Care, Curiosity, Expansion, Joy) sono quasi una riscrittura dei principi XP
- Tech Lead con direct report (Alessia), 1:1 strutturati, growth conversations
- Gestione roadmap e trade-off con il product (Luca)
- GDPR awareness (esperienza Muffin)
- TypeScript/React: ✅ solido
- Italiano nativo (nice-to-have valorizzato)

**Punti di attenzione**:
- Python/Django/FastAPI: ⚠️ da valutare profondità background backend Python
- Healthcare/regulated environments: ⚠️ nessuna esperienza diretta (è nice-to-have)

## Temi da preparare — Technical call 14/07

Temi ad alto livello da cui ci si aspettano domande, basati sulla JD e sul contesto Medicilio.

### 1. Stack Python e profondità tecnica
Alessio viene da Java/Spring, conosce bene lo stack interno. Si aspetta che Dan sappia orientarsi su Python/Django/FastAPI anche senza anni di esperienza — e che sia onesto sulla lacuna. Il tema non è "sai Python?" ma "come ti muovi quando devi imparare uno stack nuovo?"

### 2. System design feature-driven
Non modellare i dati upfront. Partire dagli scenari utente (medico, paziente, pathway), costruire la slice più sottile che funziona end-to-end, lasciare emergere il modello. Il sistema di patient monitoring è il caso d'uso centrale — threshold, notifiche, scalabilità da 300 a 15K pazienti.

### 3. Testing e qualità del codice
Come garantisci la qualità in un contesto healthcare dove un bug può avere conseguenze reali? TDD come approccio, acceptance test che descrivono il comportamento atteso, CI che blocca le regressioni. Il collegamento tra qualità tecnica e sicurezza del paziente è il frame giusto.

### 4. AI-assisted workflow e artifact-driven model
Come funziona concretamente il workflow AI-assisted che Dan usa? Come si collega al modello a 3 tier di Medicilio? Punto di forza — prepararsi a descriverlo in modo specifico, non astratto. CLAUDE.md, contesto di dominio fornito all'AI, PR review assistita, approvazione umana su ogni step.

### 5. Scalabilità organizzativa — team da 8 a 16
Come si struttura un team che raddoppia? Come si introduce la figura dell'Engineering Lead senza rompere quello che già funziona? Come si preserva la cultura tecnica mentre si scala? Questo è il problema reale che Medicilio sta cercando di risolvere assumendo questa figura.

### 6. Leadership tecnica e people management
Come si conduce una 1:1 strutturata? Come si valuta la crescita di un engineer? Come si gestisce il technical bar in un dominio? Non aspettarsi domande filosofiche — Alessio è giovane e pragmatico, probabilmente chiede esempi concreti.

### 7. Contesto healthcare e dati sensibili
Nessuna esperienza diretta richiesta, ma aspettarsi domande su come si ragiona in un ambiente regolamentato: audit trail, data integrity, chi può accedere a cosa, implicazioni di un bug su dati medici. Frame: cautela ingegneristica, non burocrazia.

### 8. Ownership e decisioni cross-dominio
Come si interfaccia un Engineering Lead con l'HoE su decisioni che toccano più domini? Come si porta una proposta tecnica senza aspettare il permesso per ogni cosa? Il rapporto con Alessio stesso è il caso d'uso — utile riflettere su come lo immagina Dan.

---

## Note dal colloquio 14/07 — Alessio Ferrara

### Com'è andata
Complessivamente molto positiva. La call era divisa in due parti:
- **Prima metà — tecnica**: domande su sistemi distribuiti, microservizi, disaccoppiamento. Pausa intermedia — hanno deciso di continuare, segnale quasi sempre positivo.
- **Seconda metà — alto livello**: ragionamento su un problema reale del loro sistema. Dan ha centrato i punti descrivendo le soluzioni (outbox pattern, retry, disaccoppiamento) anche senza ricordarsi i nomi esatti. Pochi controbattiti, impressione di feeling positivo.

### Contesto tecnico emerso
- Hanno microservizi probabilmente non tagliati benissimo — c'è lavoro da fare sulla loro architettura
- Il tema sync/async non è chiarissimo da come lo ha raccontato Alessio — da approfondire nel prossimo step
- Dan come Engineering Lead (60/40) non dovrà necessariamente risolverlo da solo — ma dovrà guidare il team in quella direzione

### Cose non ricordate durante la call (da tenere a mente)
- **Outbox pattern** — descritto correttamente ma senza il nome
- **Exponential backoff** — spiegato "a pane e salame" ma concetto corretto

### Cose da chiedere nel prossimo step
- Sede fisica e politica hybrid/remote concreta (non è stato chiesto)
- Approfondire architettura sync/async — non è chiaro dal racconto di Alessio
- Struttura del dominio che Dan andrebbe a guidare

### Next steps
- Jörg torna dalle vacanze dopo il **20 luglio**
- Alessio vuole confrontarsi con Jörg prima di procedere
- Si rifaranno vivi dopo il 20

## Scambio post-rifiuto

### Email di rifiuto — Jörg (22/07)
Rifiuto gentile dopo "careful consideration". Nessun dettaglio sulla motivazione.

### Risposta di Dan a Jörg
Ringraziamento, dispiacere genuino (era la prima scelta), richiesta di feedback, porta aperta per il futuro.

### Feedback di Alessio (risposta personale)
> "The decision wasn't about technical ability. Your knowledge and hands-on experience with the stack came through clearly, and on depth alone you were genuinely strong."

Motivazione del rifiuto: mancanza di segnale sulla dimensione **facilitazione e apertura** — cercavano qualcuno che "actively draws out and champions other people's ideas, stays open when their own approach gets challenged, and facilitates decisions across functions rather than driving toward a preferred solution."

> "We saw a lot of conviction in your own thinking, which is a real asset in many contexts, but we didn't get as much signal on that facilitation-and-openness dimension as the role demands."

### Risposta di Dan ad Alessio
Accettato il feedback con rispetto. Sottolineato che facilitazione, apertura e crescita del team sono valori fondanti di XP (collective ownership, pair programming, feedback, respect) — non qualcosa di aggiunto, ma il modo in cui Dan lavora ogni giorno. Espresso stupore genuino che questo non sia emerso. Ribadita la porta aperta per future occasioni.

### Riflessione
Feedback da portare nei prossimi colloqui: la conviction può oscurare il listening anche quando il listening c'è. Mostrare esplicitamente comportamenti di facilitazione — fare domande, lasciare spazio, non arrivare con la soluzione già pronta.

## Note e impressioni

Candidatura più sentita del pool. Fit culturale e tecnico reale. Rifiuto inaspettato — motivazione sulla dimensione facilitazione contrasta con il background XP e con i feedback ricevuti in passato. Porta lasciata aperta da entrambe le parti.

---

**Risorse**
- [[../ricerca-lavoro-2026|← Ricerca Lavoro 2026]]
