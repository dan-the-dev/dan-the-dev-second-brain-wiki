---
title: "Accelerate"
type: book
author:
  - "Nicole Forsgren"
  - "Jez Humble"
  - "Gene Kim"
topics: ["agile-software-development", "devops", "tech-lead"]
status: done
study:
  method: full_reading
  started_at: "2024-01-08"
  completed_at: "2024-02-02"
raw_source: raw/knowledge/book/accelerate/content.md
updated: 2026-08-19
---

# Accelerate

**Autori: [[../person/nicole-forsgren|Nicole Forsgren]], Jez Humble, Gene Kim**

*Accelerate* è la sintesi in forma di libro del programma di ricerca annuale "State of DevOps" (poi diventato DORA), costruito su oltre 23.000 risposte a survey raccolte in tutto il mondo, provenienti da più di 2.000 organizzazioni diverse — da piccole startup a grandi enterprise, sia su nuovi sistemi che su codice legacy. La ricerca si è sviluppata in quattro fasi successive (2014-2017), ciascuna con domande via via più mirate: dalla domanda iniziale ("la consegna del software si può misurare, e ha un impatto sull'organizzazione?") a domande più specifiche su sicurezza, trunk-based development, product management lean e leadership trasformazionale.

## Capacità, non maturità

Il libro parte da una scelta metodologica netta: rifiutare i "modelli di maturità" a favore di **modelli di capacità**. La critica ai modelli di maturità è su quattro fronti: presuppongono un traguardo finale ("arrivare" a uno stato maturo) invece del miglioramento continuo che il panorama tecnologico richiede; impongono lo stesso set di pratiche a ogni team, ignorando che parti diverse dell'organizzazione hanno bisogno di approcci diversi; misurano la competenza tecnica senza collegarla agli outcome di business, generando vanity metric; e suggeriscono un livello statico da raggiungere invece di un miglioramento continuo. La ricerca ha identificato 24 capacità chiave che guidano il miglioramento delle performance di delivery — e attraverso di esse, delle performance organizzative. Il divario fra team ad alte prestazioni e team a basse prestazioni è enorme: 46 volte più deploy frequenti, 440 volte più veloci nel lead time, 170 volte più rapidi nel recupero da un'interruzione, 5 volte meno cambi falliti.

## Le quattro metriche DORA

Le metriche di misurazione tradizionali — righe di codice, velocity, utilizzo — vengono respinte perché misurano output, non outcome: le righe di codice non dicono nulla sul valore di business (anzi, meno codice è spesso meglio); la velocity è relativa al singolo team e non oggettiva; l'utilizzo al 100% è dannoso, perché la teoria delle code ci dice che più un team si avvicina al 100% di utilizzo, più il lead time tende all'infinito. Le quattro metriche adottate — divenute poi lo standard noto come **DORA metrics** — sono: lead time di consegna, frequenza di deploy, tempo di ripristino del servizio (MTTR), tasso di cambi falliti. Il dato controintuitivo centrale del libro: non esiste un trade-off fra velocità e stabilità — i team ad alte prestazioni sono migliori su *entrambi* gli assi contemporaneamente.

## Cultura organizzativa: il modello di Westrum

Il libro adotta la tassonomia del sociologo Ron Westrum per classificare le culture organizzative in tre tipi: **patologica** (paura e minaccia diffuse, informazione trattenuta o distorta per motivi politici), **burocratica** (orientata alle regole, i dipartimenti si proteggono a vicenda seguendo "il proprio libro"), **generativa** (orientata alla missione, focalizzata su "come raggiungiamo il nostro obiettivo"). Una cultura generativa abilita il flusso di informazione attraverso tre meccanismi: collaborazione più efficace con alta fiducia orizzontale e verticale, enfasi sulla missione che mette da parte le questioni di dipartimento, gerarchia meno rilevante. Una citazione chiave del libro: "il modo per cambiare la cultura non è prima cambiare come le persone pensano, ma iniziare cambiando come le persone si comportano" — cioè implementare pratiche Agile concrete cambia la cultura, non il contrario.

## Continuous Delivery: i cinque principi

Il libro definisce la Continuous Delivery come l'insieme di capacità che permette di portare in produzione ogni tipo di cambiamento (feature, config, bugfix, esperimenti) in modo sicuro, veloce e sostenibile, sui cinque principi: costruire la qualità dentro il processo (rilevare i problemi rapidamente); lavorare in piccoli batch; lasciare che il computer esegua compiti ripetitivi mentre le persone risolvono problemi; perseguire senza sosta il miglioramento continuo; responsabilità condivisa da tutti i coinvolti nel processo. Le fondamenta pratiche: configuration management completo (ambienti provisionabili automaticamente da version control), Continuous Integration (integrazione quotidiana sul trunk, con build automatica a ogni commit), Continuous Testing (test come parte dell'intero processo, non solo a "lavoro finito").

> [!info] Approfondimento aggiunto in fase di compilazione
> Il dato sul version control della configurazione — più correlato alle performance di delivery del version control del codice applicativo stesso — è uno dei risultati più citati (e sorprendenti) della ricerca DORA: la configurazione viene tipicamente trattata come questione secondaria, ma i dati suggeriscono che è proprio lì che si annidano i colli di bottiglia nascosti della maggior parte delle organizzazioni.

## Architettura: accoppiamento debole, non tipo di sistema

Un risultato controintuitivo: il tipo di sistema (greenfield, sistema di record, software custom, mainframe...) ha un impatto limitato sulle performance — l'eccezione sono il software custom sviluppato da terzi e i sistemi mainframe, entrambi correlati a performance più basse. Ciò che conta davvero è se il sistema (e il team che lo costruisce) è **debolmente accoppiato**, misurato su due assi: deployability (si può rilasciare indipendentemente dagli altri servizi) e testability (si può testare senza un ambiente integrato). Il libro applica la legge di Conway in chiave prescrittiva con la **"inverse Conway maneuver"**: le aziende dovrebbero prima correggere la struttura di team e organizzazione, per abilitare poi l'architettura conseguente desiderata — accoppiamento debole non significa assenza di comunicazione fra team, ma comunicazione concentrata su obiettivi condivisi di alto livello, non su decisioni minute.

## Sicurezza, management pratiche lean, product development

Il libro dedica un capitolo a integrare la sicurezza informativa nel ciclo di delivery ("shift left on security"), notando come il movimento DevOps sia in realtà un caso specifico di un problema più ampio — funzioni diverse (dev, ops, ma anche test, product management, security) che non lavorano efficacemente insieme. Sul fronte delle pratiche di management lean: limitare il work-in-progress, gestione visuale delle metriche chiave, uso quotidiano dei dati di performance applicativa per le decisioni di business — pratiche che riducono il burnout e portano verso una cultura generativa. Sul fronte del product management lean: suddividere prodotti e feature in piccoli batch completabili in meno di una settimana (incluso l'uso di MVP), buona visibilità sul flusso di lavoro dal business al cliente, ricerca attiva e continua di feedback, autorità del team di cambiare le specifiche senza autorizzazione esterna — tutti fattori statisticamente significativi nel predire performance di delivery più alte.

## Sostenibilità: deployment pain e burnout

Il libro tratta la "deployment pain" — la paura e l'ansia che gli ingegneri provano quando rilasciano in produzione — come un indicatore diretto di insostenibilità del processo, causata tipicamente da tre fattori: software non progettato per essere deployabile, cambi manuali richiesti durante il deployment, troppi passaggi di consegna fra team. Sul burnout, il libro elenca i fattori di rischio (sovraccarico di lavoro, incapacità di influenzare le decisioni, ricompense insufficienti, ambiente di lavoro non supportivo, mancanza di equità decisionale, disallineamento fra valori individuali e organizzativi) e le leve per contrastarlo, centrate su cultura organizzativa, riduzione della deployment pain, efficacia della leadership.

## Leadership trasformazionale

Le cinque caratteristiche di un leader trasformazionale identificate dalla ricerca: visione chiara di dove si trova l'azienda e dove dovrebbe essere fra cinque anni; comunicazione ispirazionale anche in contesti incerti; stimolazione intellettuale (sfidare le persone a pensare i problemi in modo diverso); leadership supportiva (attenzione ai bisogni personali); riconoscimento personale dei traguardi. Una leadership trasformazionale efficace ha un impatto misurabile su norme culturali ad alta fiducia, produttività degli sviluppatori, sperimentazione, allineamento strategico cross-organizzativo.

## Vedi anche

- [[../person/nicole-forsgren|Nicole Forsgren]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/accelerate/content.md`
