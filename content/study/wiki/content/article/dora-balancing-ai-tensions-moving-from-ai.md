---
title: "DORA | Balancing AI tensions: Moving from AI adoption to effective SDLC use"
type: article
topics: ["agile-software-development", "ai", "dora"]
status: done
raw_source: raw/knowledge/article/dora-balancing-ai-tensions-moving-from-ai/content.md
updated: 2026-08-19
---

# DORA | Balancing AI tensions: Moving from AI adoption to effective SDLC use

Analisi del report 2025 *DORA State of AI-assisted Software Development*, costruita su un deep dive qualitativo di 1.110 risposte aperte di ingegneri software di [[../organization/google|Google]] raccolte nel Q3 2025. Il punto di partenza è un dato apparentemente entusiasmante — il 90% dei professionisti tecnici usa l'AI al lavoro e oltre l'80% ritiene che abbia aumentato la propria produttività — ma la tesi centrale del report è che l'impatto dell'AI sul ciclo di vita dello sviluppo software (SDLC) non sia un miglioramento lineare, bensì una serie di trade-off profondi.

## L'AI come amplificatore, non come livellatore

Il concetto chiave è che l'AI amplifichi ciò che già esiste: in un'organizzazione con piattaforme interne solide, API chiare e forti pratiche di test, l'AI agisce da collaboratore potente; in un team con tooling frammentato, dati a silos o infrastruttura fragile, l'AI si limita ad aiutare a generare debito tecnico più velocemente. Questo spiega un dato apparentemente contraddittorio del report: l'adozione crescente dell'AI è associata sia a un aumento del throughput di delivery sia a un aumento dell'instabilità delle release.

## La "tassa di verifica"

Il tempo risparmiato nella scrittura di codice viene spesso riassorbito nell'auditing: il 30% degli sviluppatori riporta poca o nessuna fiducia nel codice generato dall'AI, costringendo a trattare ogni output come potenzialmente inaffidabile. Questo sposta il carico cognitivo dall'autore al reviewer — chi scrive guadagna velocità, ma chi revisiona deve comunque controllare riga per riga, con un carico spesso più alto di prima.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il report propone come contromisura di spostare parte dell'automazione e della responsabilità di verifica *sull'autore stesso* (agenti che rivedono il proprio output prima della PR, batch piccoli, test automation robusta) — un'evoluzione diretta del principio "shift left" della qualità già centrale nella letteratura Continuous Integration/Continuous Delivery, applicato ora anche al codice generato da AI.

## Il paradosso della competenza

Abbassare la barriera d'ingresso con l'AI è una rete di sicurezza potente, ma rischia di scavalcare la "lotta produttiva" necessaria per sviluppare competenza tecnica profonda — un rischio di apprendimento superficiale e degrado di skill a lungo termine, soprattutto per chi è agli inizi della carriera e userebbe l'AI per validare assunzioni senza mai verificarle davvero.

## Gap di workflow e tool sprawl

L'AI ha finora avuto impatto soprattutto sull'"inner loop" (generazione di codice, ricerca di informazioni, prototipazione), lasciando un gap nella fase di integrazione in produzione, che richiede ancora sforzo umano significativo. L'uso di più strumenti AI scollegati fra loro introduce inoltre un nuovo livello di complessità decisionale — il "tool sprawl" — che rischia di rompere proprio lo stato di flow che questi strumenti dovrebbero preservare.

## Cosa serve alla leadership tecnica

Il report chiude con raccomandazioni operative per i technology leader: superare le metriche di output ristrette (righe di codice accettate) a favore di framework olistici come SPACE, H.E.A.R.T. o Value Stream Management; ripensare il code review spostando automazione e AI verso l'autore; adattare i tempi di progetto per tenere conto del divario fra prototipazione rapida e qualità production-grade; e proteggere attivamente lo spazio per l'apprendimento profondo — ad esempio affiancando ingegneri junior a mentor senior nella revisione di decisioni architetturali generate dall'AI, o riservando componenti di sistema complessi alla scrittura manuale.

## Vedi anche

- [[../organization/google|Google]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/dora-balancing-ai-tensions-moving-from-ai/content.md`
- [dora.dev](https://dora.dev/insights/balancing-ai-tensions/)
