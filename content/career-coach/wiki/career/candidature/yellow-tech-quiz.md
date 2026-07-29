---
title: Yellow Tech — Video Quiz Preparazione
company: Yellow Tech (via Universo)
type: interview-prep
updated: 2026-07-29
tags: [job-search, interview-prep, yellow-tech, 2026]
---

# Yellow Tech — Appunti Video Quiz

> Formato: video preregistrati. Tieni questa pagina aperta mentre registri.
> Struttura: keyword + punti chiave. Non leggere — usa come post-it.

---

## Q1 — Il tuo percorso ⏱ 3 min
*Cronologico → insight chiave → perché YT e questo ruolo*

- 📍 **Partenza**: sviluppatore, percorso di crescita continua
- 📍 **Casavo**: svolta professionale e personale — la più formativa
- 📍 **TL** (più esperienze): gestito figure diverse, situazioni complesse
- 💡 **Lezione chiave TL**: non puoi prevenire problemi che il team non percepisce → ha sempre funzionato di più *essere disponibile davanti al problema* con soluzioni e pratiche concrete
- ➡️ **Perché Senior SWE (non TL)**: ho già fatto TL, passo indietro consapevole → margine di crescita interna in YT
- ➡️ **Perché YT**: posso portare cultura XP + SE solida in un team AI-first → contaminazione bidirezionale
- ➡️ **Perché questa posizione**: ho lavorato per trovare setup AI che garantissero qualità professionale — ho vissuto il problema dall'interno, so come si risolve
- 🎙️ **Extra se avanza**: coaching e corsi in passato (cloud, team locali) → mi interessa anche la parte adoption

---

## Q2 — Architettura integrazione (caso pratico)
*300 ordini/giorno, email/PDF, 5 persone, 5% errori, 8-10 min/ordine · SAP B1 Cloud + M365 · Budget €60K / 2 anni · Partenza entro 2 mesi · No dati sensibili*

**Approccio**

- 🎯 **Prima domanda**: dov'è il vero collo di bottiglia? Trovare l'MVP — il pezzo minimo che risolve il problema reale ora
- 📏 **Metriche di partenza** (piccoli obiettivi concreti):
  - Errori: 5% → 4%
  - Tempo: 8-10 min → 7-8 min (primo incremento)
- 🔄 **Iterativo incrementale**: MVP → misura → "basta?" → incremento → monitorare → decidere il budget rimanente
- 💰 **Budget**: non bruciare tutto a priori — solo la fase 1 è stimabile con certezza
- 👥 **Team piccolo**: vantaggio non svantaggio (decisioni rapide, mob/pair, AI agents)
- 🔒 **No dati sensibili**: semplifica le scelte tech (cloud LLM ok, no overhead compliance)
- ❓ **Domande da fare prima di partire**:
  - Qual è il formato prevalente? (PDF strutturato, email libera, entrambi in proporzione?)
  - Che tipo di errori sono quelli al 5%? (campi mancanti, SKU sbagliati, lettura OCR?)
  - Come funziona l'inserimento in SAP oggi, passo per passo?
  - Qual è l'obiettivo ideale a fine 2 anni? (automazione totale, o supporto alle 5 persone?)
  - Ci sono picchi? (stagionalità, campagne, clienti specifici)
- 🏗️ **Componenti principali** (alto livello):
  - Ingestione → parsing strutturato (LLM per non-strutturato) → validazione → integrazione SAP
  - Coda + retry per robustezza
  - Dashboard monitoring metriche operative

---

## Q3 — Affidabilità e failure

- 🔔 **Alerting tecnico**: errori infra/app → alert immediato → log per investigare → fix dati se necessario + hotfix
- 📊 **Monitoring metriche di prodotto**: % errori settimana su settimana — sale o scende? collegato ai rilasci
- 🔁 **Ogni incremento va monitorato**: se un rilascio non sposta la metrica, lo sai subito — non aspetti mesi
- 🧑‍💻 **Fase iniziale → semi-automatico** (questa è la chiave):
  - Sistema propone → operatore conferma → crei metrica naturale: "quante proposte sono giuste?"
  - Solo quando accuracy raggiunge threshold (es. <4% errori) → automatizzi completamente
  - Vantaggio: quando automatizzi hai già *prova oggettiva* che sei meglio del 5% manuale
- 🌙 **Alle 2 di notte**:
  - Alert + on-call semplice (SMS/email)
  - Se il sistema è giù: ordini restano in coda, nessun dato perso, fallback manuale
  - Rollback del deploy se il problema è software

---

## Q4 — Sistema più complesso ⏱ 3 min

**Glitter + Smart Fridge** (Mymenu)

- 🥤 **Contesto**: e-commerce su frigo intelligente → sfida: CI/CD con hardware fisico
- 🔑 **Problema core**: vuoi rilasciare N volte al giorno, ma hai hardware fisico in mezzo
- 💡 **Soluzione**: feature flags verticali per frigo / cliente / utente
  - Versioni software versionato → attivate selettivamente per ogni frigo
  - Es: frigo interno → beta → clienti che volevano rischio → graduale → tutti
- 🐦 **Canary release** (pianificata, non implementata):
  - Frigo interno → test automatici → promotion automatica → rollout graduale → rollback automatico
- ↩️ **Cosa rifarei diversamente oggi**:
  - ❌ **Revel front-end separato**: inutile, bastava il monolite — non c'era vero bisogno di API, ha aggiunto complessità senza vantaggio
  - ❌ **Integrazione diretta API smart fridge**: avrei messo un layer di astrazione in mezzo → deduplicare interazioni simili, isolare complessità hardware dal dominio business

---

## Q5 — Incidente peggiore

**TourRadar — MySQL upgrade breaking**

- ⚙️ **Contesto**: upgrade MySQL (5.x → versione breaking) → perdita della cache automatica interna → query degradano bruscamente
- 🔔 **Come diagnosticato**: monitoring automatico sulle performance degli *script* (non solo query!) → alert partiti dopo un rilascio specifico
  - 💡 Nota da fare emergere: misuravamo script interi, non singole query → scope più ampio → ha intercettato il problema; una misura solo sulle query non l'avrebbe catturato perché il bug era nel loop che le chiamava
- ↩️ **Rollback**: manuale, scelta deliberata — nessun rollback automatico in quel momento
- 🐛 **Debugging**: bug nascosto — un ciclo ripetuto N volte annullava l'ottimizzazione che avevo introdotto
- ✅ **Fix TDD style**:
  1. Scrivo test che riproduce il bug → 🔴 rosso
  2. Correggo il bug
  3. Test → 🟢 verde → deploy
- 🔁 **Dopo**: rafforzato cultura monitoring ampio — comportamento dell'app, non solo infra

---

## Q6 — Rapporto con le AI ⏱ 3 min

- 📅 **Dal primo giorno**: mi tengo aggiornato per natura → ChatGPT da subito, prima per uso generale
- 📓 **Prima cosa concreta**: journal di lavoro quotidiano → **journal vocale** con AI (funzionava meglio di scritto, interrogabile)
- 🏗️ **Poi**: trasformato in struttura più complessa → pattern **LLM Wiki** *(cita autore — [Karpathy? verifica prima di registrare])*
- ⏸️ **Perché non mi sono lanciato subito nel coding con AI**:
  - Sono XP developer → eccellenza tecnica è un pilastro, non opzionale
  - Usare AI = cedere parte della conoscenza al modello → dovevo capire cosa ricevevo in cambio
  - La velocità nello scrivere codice non era il vero collo di bottiglia
- 💡 **Cosa ricevo in cambio — la risposta che ho trovato**: amplificazione delle best practices
  - Nei giorni di stanchezza o stress → l'AI garantisce standard che umanamente si rischia di abbassare
  - "Ogni singola modifica che vale la pena, non solo quando sei in forma"
- 🔧 **Cosa ho costruito**: set open source di agenti e skill su GitHub
  - Focus attuale: coding, nuove feature, refactoring
  - Prossimo passo: product development practices
- 🎯 **Ultima cosa imparata**: *[aggiorna qui il giorno della registrazione — cosa hai studiato/sperimentato di recente]*

---

**Risorse**
- [[universo|← Yellow Tech (Universo)]]
- [[../ricerca-lavoro-2026|← Ricerca Lavoro 2026]]
