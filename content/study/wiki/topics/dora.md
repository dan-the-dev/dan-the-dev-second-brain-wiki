---
title: "DORA"
type: topic
id: dora
updated: 2026-08-20
---

# DORA

## Cos'è DORA e da dove nascono le sue metriche

DORA (DevOps Research and Assessment) è il gruppo di ricerca — oggi parte di Google Cloud — fondato da Nicole Forsgren, Jez Humble e Gene Kim, che dal 2014 conduce lo "State of DevOps Report", lo studio annuale su larga scala che ha identificato le metriche di performance ingegneristica alla base del libro *Accelerate*.

> [!info] Approfondimento aggiunto in fase di compilazione
> Nel 2014, il primo studio DORA ha cercato di collegare scientificamente le prestazioni IT alle prestazioni organizzative, identificando quattro variabili iniziali: deployment frequency, lead time per i cambiamenti, mean time to recover (MTTR) e change fail rate. L'analisi statistica di quell'anno rivelò però che il change fail rate non correlava significativamente con le altre tre — la definizione iniziale del modello si basò quindi solo su tre metriche. Nel 2015 il modello si consolidò nella "dualità di throughput e stabilità" che è diventata lo standard riconosciuto oggi: throughput (deployment frequency e lead time) da un lato, stabilità (MTTR e change fail rate) dall'altro — dimostrando che i team ad alte prestazioni eccellono su entrambi i fronti insieme, non sacrificando l'uno per l'altro. Nel 2018 DORA introdusse una quinta dimensione, "availability", come misura della salute operativa, ridefinendo l'oggetto di misura da "IT performance" a "Software Delivery and Operational (SDO) performance". Nel 2021 il concetto di "availability" fu espanso in "reliability", riconoscendo che l'affidabilità include anche latenza, performance e scalabilità, non solo uptime. Nel 2024 è arrivato il cambiamento più recente: l'introduzione di una quinta metrica formale, il "deployment rework rate", nata dal riconoscimento che il change failure rate funzionava in realtà come un proxy imperfetto per il lavoro di rilavorazione che ogni cambiamento richiede. DORA è nata come società di ricerca indipendente, poi acquisita da Google nel 2018 e diventata parte di Google Cloud, pur mantenendo l'identità di programma di ricerca autonomo — le sue metriche ("the four keys") sono oggi uno standard de facto nell'industria per misurare la performance dei team di ingegneria software.
> Fonte: [dora.dev — A history of DORA's software delivery metrics](https://dora.dev/insights/dora-metrics-history/) · [dora.dev — DORA's software delivery performance metrics](https://dora.dev/guides/dora-metrics/)

## L'AI come amplificatore, non come livellatore

Il report 2025 *DORA State of AI-assisted Software Development* — costruito su un deep dive qualitativo di 1.110 risposte aperte raccolte nel Q3 2025 da ingegneri software di Google — aggiorna il framework DORA classico all'era dello sviluppo assistito da AI. Il punto di partenza è un dato apparentemente entusiasmante: il 90% dei professionisti tecnici usa l'AI al lavoro, e oltre l'80% ritiene che abbia aumentato la propria produttività. Ma la tesi centrale del report è che l'impatto dell'AI sul ciclo di vita dello sviluppo software (SDLC) non sia un miglioramento lineare — è una serie di trade-off profondi, e proprio per questo va misurato con lo stesso rigore con cui DORA ha sempre misurato la performance dei team.

Il concetto chiave del report è che l'AI amplifichi ciò che già esiste, piuttosto che livellare le differenze fra organizzazioni. In un'organizzazione con piattaforme interne solide, API chiare e forti pratiche di test, l'AI agisce da collaboratore potente. In un team con tooling frammentato, dati a silos o infrastruttura fragile, l'AI si limita ad aiutare a generare debito tecnico più velocemente. Questo spiega un dato apparentemente contraddittorio emerso dal report: l'adozione crescente dell'AI è associata sia a un aumento del throughput di delivery sia a un aumento dell'instabilità delle release — esattamente le due dimensioni, throughput e stabilità, che il modello DORA misura fin dal 2015. L'AI non elimina il trade-off classico fra le due: lo rende più visibile e più rapido a manifestarsi.

## La "tassa di verifica"

Uno degli effetti meno intuitivi dell'adozione AI è quello che il report definisce implicitamente come una tassa di verifica: il tempo risparmiato nella scrittura di codice viene spesso riassorbito nell'auditing. Il 30% degli sviluppatori riporta poca o nessuna fiducia nel codice generato dall'AI, il che costringe a trattare ogni output come potenzialmente inaffidabile. Il risultato è uno spostamento del carico cognitivo dall'autore al reviewer: chi scrive guadagna velocità, ma chi revisiona deve comunque controllare riga per riga, con un carico spesso più alto di prima — un costo che, se non contabilizzato, rischia di far apparire artificialmente migliorate metriche come il lead time, mentre il costo reale si sposta più a valle, nella fase di code review.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il report propone come contromisura di spostare parte dell'automazione e della responsabilità di verifica sull'autore stesso — agenti che rivedono il proprio output prima della PR, batch di modifiche più piccoli, test automation robusta — un'evoluzione diretta del principio "shift left" della qualità già centrale nella letteratura Continuous Integration/Continuous Delivery, applicato ora anche al codice generato da AI.

## Il paradosso della competenza

Abbassare la barriera d'ingresso con l'AI è una rete di sicurezza potente, ma comporta un rischio specifico: quello di scavalcare la "lotta produttiva" necessaria per sviluppare competenza tecnica profonda. È un rischio di apprendimento superficiale e degrado di skill nel lungo periodo, particolarmente insidioso per chi è agli inizi della carriera e userebbe l'AI per validare assunzioni senza mai verificarle davvero contro la realtà del sistema — perdendo così proprio l'occasione di sviluppo che la difficoltà, se affrontata direttamente, avrebbe offerto.

## Gap di workflow e tool sprawl

Fin qui l'AI ha avuto impatto soprattutto sull'"inner loop" dello sviluppo — generazione di codice, ricerca di informazioni, prototipazione — lasciando un gap significativo nella fase di integrazione in produzione, che richiede ancora sforzo umano rilevante. A complicare ulteriormente il quadro, l'uso di più strumenti AI scollegati fra loro introduce un nuovo livello di complessità decisionale, il "tool sprawl": ogni strumento aggiuntivo, per quanto potente singolarmente, rischia di rompere proprio lo stato di flow che questi strumenti dovrebbero preservare, costringendo lo sviluppatore a decidere continuamente quale strumento usare per quale compito invece di concentrarsi sul problema.

## Cosa serve alla leadership tecnica

Il report si chiude con raccomandazioni operative rivolte esplicitamente ai technology leader, coerenti con lo spirito originario di DORA — misurare per decidere, non per controllare:

**Superare le metriche di output ristrette** (come le righe di codice accettate dall'AI) a favore di framework più olistici come SPACE, H.E.A.R.T. o Value Stream Management, che catturano dimensioni multiple della performance invece di un singolo proxy facilmente ingannevole.

**Ripensare il code review**, spostando automazione e responsabilità di verifica AI verso l'autore invece che accumularle tutte sul reviewer, per non trasformare la tassa di verifica in un collo di bottiglia strutturale.

**Adattare i tempi di progetto** per tenere conto del divario reale fra la velocità di prototipazione con AI e il tempo necessario per portare quel prototipo a qualità production-grade — un divario che l'entusiasmo iniziale per l'AI tende sistematicamente a sottostimare.

**Proteggere attivamente lo spazio per l'apprendimento profondo**, ad esempio affiancando ingegneri junior a mentor senior nella revisione di decisioni architetturali generate dall'AI, o riservando alla scrittura manuale i componenti di sistema più complessi — un investimento deliberato contro il paradosso della competenza descritto sopra.

## Sintesi

DORA nasce come programma di ricerca empirica sulla performance ingegneristica, costruito su metriche che sono evolute nel tempo — dalle quattro variabili iniziali del 2014 alla dualità throughput/stabilità del 2015, fino all'espansione della reliability nel 2021 e alla quinta metrica del deployment rework rate nel 2024 — mantenendo però costante il principio di fondo: misurare insieme velocità e stabilità, mai l'una a scapito dell'altra. Il report 2025 sull'AI-assisted development applica lo stesso principio metodologico al fenomeno più recente e disruptivo del settore: l'AI non è né una soluzione automatica né una minaccia automatica, è un amplificatore delle condizioni organizzative preesistenti, che sposta carico cognitivo (la tassa di verifica), introduce nuovi rischi di sviluppo (il paradosso della competenza) e nuova complessità decisionale (il tool sprawl) — e che richiede, per essere gestita bene, esattamente lo stesso tipo di misurazione rigorosa e olistica che DORA promuove da oltre un decennio.

## Vedi anche

- Contenuti: [[../content/article/dora-balancing-ai-tensions-moving-from-ai|DORA — Balancing AI Tensions]]
- Organizzazioni: [[../content/organization/devops-research-and-assessment|DevOps Research and Assessment]] · [[../content/organization/google|Google]]
- Topic collegati: [[devops|DevOps]] · [[ai|AI]] · [[agile-software-development|Agile Software Development]]
