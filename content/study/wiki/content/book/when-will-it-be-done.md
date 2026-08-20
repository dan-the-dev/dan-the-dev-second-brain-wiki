---
title: "When Will It Be Done? Lean-Agile Forecasting to Answer Your Customers' Most Important Question"
type: book
author:
  - "Daniel S. Vacanti"
topics: ["product-development", "tech-lead"]
status: done
study:
  method: full_reading
  started_at: "2024-03-18"
  completed_at: "2024-04-12"
raw_source: raw/knowledge/book/when-will-it-be-done/content.md
updated: 2026-08-20
---

# When Will It Be Done? Lean-Agile Forecasting to Answer Your Customers' Most Important Question

**Autore: Daniel S. Vacanti**

Il libro affronta di petto la domanda più temuta di ogni team di prodotto — "quando sarà pronto?" — sostenendo che la risposta corretta non è mai una data singola, ma una **previsione probabilistica**: un intervallo con una probabilità associata. La tesi di fondo è che situazioni altamente incerte (come le previsioni meteo) non sono per questo imprevedibili — esiste una scienza dedicata proprio a questo, la probabilità, e può essere applicata al lavoro di prodotto con dati che i team già possiedono.

## I tre principi base del forecasting

**Pensare in modo probabilistico, non deterministico.** Una previsione descrive il futuro, ma il futuro è incerto: pensare probabilisticamente significa riconoscere che esiste più di un possibile esito futuro, e descriverlo di conseguenza — una previsione è un calcolo che include sempre sia un intervallo sia la probabilità che quell'intervallo si verifichi. Questo è scomodo per chi è abituato alle scadenze deterministiche (una singola data), anche se sa già, per esperienza, che quelle date saranno quasi sempre sbagliate.

**Fare previsioni sia a breve che a lungo termine, sapendo che quelle a breve saranno più accurate.** La "durata di validità" di un piano a lungo termine è molto corta: la probabilità che le assunzioni fatte in fase di pianificazione restino vere nel tempo è quasi zero. Per questo l'orizzonte di previsione va tenuto il più corto possibile — riduce l'incertezza e massimizza l'apprendimento in vista della previsione successiva.

**Ri-prevedere ogni volta che si ottengono nuove informazioni.** Una previsione è valida solo fino a quando non ne arriva una nuova. Ri-prevedere di fronte a nuove informazioni è fondamentale per un buon forecasting: per fare previsioni corrette bisogna usare tutti i dati che si riescono a raccogliere, non solo quelli disponibili all'inizio.

## Previsione per un singolo elemento: cycle time e percentili

Per prevedere un singolo item, si tracciano i timestamp di inizio e fine lavorazione (definiti in modo condiviso), e la loro differenza è il **cycle time**. Riportando il cycle time di molti item su uno scatterplot nel tempo, si può disegnare una **linea di percentile** — ad esempio, una linea all'85° percentile a 43 giorni significa che l'85% degli item passati ha impiegato 43 giorni o meno. Il libro spiega perché i percentili sono lo strumento giusto: funzionano su qualsiasi distribuzione di dati, sono semplici da calcolare e non sono distorti dagli outlier. I percentili sono, in sé, delle previsioni: identificano un intervallo di esiti e la probabilità associata. Per usarli in modo sensato serve un set di dati storici rilevante per il contesto, e una soglia di confidenza (il percentile) appropriata al contesto stesso.

## Migliorare le previsioni per singolo item: cosa fare

La vera sfida è rendere più accurate nel tempo le previsioni a lungo termine — e le pratiche che lo ottengono sono, per fortuna, le stesse che migliorano anche il lavoro in sé. "Più accurato" significa ridurre l'ampiezza dell'intervallo di possibili esiti, alzandone al contempo la percentuale di confidenza.

Il libro introduce l'**età dell'item di lavoro** (work item age: il tempo trascorso da quando un item è entrato nel flusso, per gli item ancora non usciti) come segnale precoce di rischio. Tracciarla fornisce l'evidenza per intervenire proattivamente sulle previsioni dei singoli item: si può monitorare se un item si sta avvicinando alla previsione fatta per lui, capire perché, e agire per evitare che la superi — perché una volta che la previsione viene "sfondata", non si può più sapere con confidenza quando l'item finirà davvero. Una buona pratica è portare l'età degli item in discussione durante i daily standup.

Il cycle time si può inoltre scomporre in tempo attivo e tempo di attesa; la loro proporzione (tempo attivo / cycle time) è l'**efficienza di flusso**. Migliorare il tempo di attesa è di solito la leva più economica ed efficace per migliorare il cycle time complessivo, tramite azioni come: monitorare il Work In Progress, minimizzare le attese soprattutto quando un item è vicino al completamento, e rivedere le policy inefficaci. Migliorare il tempo attivo è più difficile ma comunque possibile, tramite: automazione, più programmazione sociale (pair/mob programming), e limiti di WIP più stretti. Vale comunque un avvertimento: la variazione esisterà sempre, l'obiettivo non è eliminarla ma esserne consapevoli per rendere il lavoro più prevedibile — e quando compare un outlier negativo, invece di liquidarlo come statisticamente irrilevante conviene fare una piccola indagine, perché potrebbe essere il segnale di un problema che diventerà più frequente in futuro. Il cycle time, ricorda il libro, non è un singolo valore: è una serie di valori, ciascuno con la propria probabilità di verificarsi.

## Cosa NON fare nelle previsioni per singolo item

Il libro dedica una sezione esplicita a sette pratiche comuni da evitare.

**Non comunicare mai una previsione come media.** Se il tuo pendolarismo medio per andare in ufficio è 24 minuti, ma hai un appuntamento importante alle 9 con l'amministratore delegato, a che ora parti? Sicuramente non alle 8:35: per massimizzare le probabilità di essere puntuale servono più vicini ai 45-60 minuti, non 24. Una media non è mai una previsione utile.

**L'esito più probabile non è comunque molto probabile.** Un'altra ragione per non fidarsi delle medie è che non somigliano affatto a una previsione: sono di solito un singolo valore anziché un intervallo, e mancano quasi sempre di una percentuale che ne rappresenti la probabilità.

**I tuoi dati non sono normali.** Anche introducendo la deviazione standard nei calcoli, il risultato cambia poco, perché i dati di cycle time quasi mai seguono una distribuzione normale. Una delle cose più importanti da capire lavorando nella conoscenza è che la statistica "da manuale" non si applica: non si vive in un mondo di distribuzioni normali.

**Non sprecare tempo a stimare e pianificare.** Stimare e pianificare sottraggono tempo al lavoro reale, rendendo meno prevedibili — sono, in sostanza, tempo di attesa.

**Non usare gli story point per il forecasting.** Spesso c'è poca o nessuna correlazione fra la complessità stimata di un item e il suo cycle time reale: alcuni studi citati mostrano item da 5 punti completati in metà del tempo di item da 3 punti. Quando si chiede una stima, inoltre, la maggior parte delle persone considera solo il tempo attivo — motivo principale per cui l'estimation di solito fallisce.

**Right sizing, non same sizing.** Molti sostengono che, per poter fare previsioni, tutti gli item debbano avere la stessa dimensione: falso. Diventando familiari con l'idea di previsione, si diventa familiari anche con l'idea di dimensione "giusta": se la previsione corrente (all'85° percentile, ad esempio) è di 12 giorni, allora 12 giorni è la dimensione giusta per un item. È comunque ancora una forma di stima — ma la stima non può sparire del tutto, può solo essere minimizzata; l'obiettivo è ridurre al minimo il right sizing per minimizzare, appunto, la stima.

**Non ignorare le pull policy.** Le pull policy sono le regole con cui il team sceglie il prossimo item da lavorare. Gli errori comuni da evitare: creare classi speciali che danno priorità ad alcuni item, ignorare gli item bloccati, ignorare o non usare i limiti di WIP, e non condividere una Definition of Done chiara per ogni fase del flusso.

## Previsione per più elementi: la simulazione Monte Carlo

Il throughput è la misura di quanto velocemente gli item escono da un processo: un numero di item completati per unità di tempo (es. 5 a settimana). Immaginando di aver completato 10 item in 2 settimane con 50 item rimasti, rispondere "10 settimane" sarebbe di nuovo l'errore della media. Quando la domanda riguarda un intero insieme di item, nemmeno la probabilità avanzata basta, perché non si hanno tutti i numeri e le variabili disponibili — a meno di non ricorrere alla **simulazione Monte Carlo**: simulare il lavoro centinaia o migliaia di volte per ottenere una distribuzione di probabilità dei possibili esiti.

Il procedimento generale: si definisce una distribuzione di probabilità basata sugli input possibili (il throughput storico reale — per ogni data di completamento passata si conta quanti item sono terminati in quella data); si selezionano casualmente valori da quella distribuzione e si esegue un calcolo (una simulazione del lavoro) per quegli input; si ripete il procedimento tante volte quante servono per avere una quantità di dati sufficiente — indicativamente finché l'istogramma dei risultati smette di cambiare in modo significativo con nuovi input. Ogni punto dell'istogramma risultante è una simulazione: la somma dei punti (l'altezza della barra) è il numero totale di simulazioni, e per identificare la data che dà una probabilità del 50% basta contare fino a raggiungere metà del numero di simulazioni. È fondamentale, sottolinea il libro, esprimere sempre l'esito come "entro o prima di" quella data — mai come una data secca.

Esiste anche la domanda simmetrica, "quanti posso completarne?": l'approccio è simile ma con alcune sfumature — la simulazione si ferma alla data target invece che al raggiungimento di un numero di item, e si conta il numero di item raggiunti invece delle date; il percentile va letto al contrario, come "x item o più".

## Migliorare le previsioni multi-item: cosa fare

**Throughput consistente.** Un throughput consistente conta più di un throughput alto in media. Confrontando due team che completano 30 item in 30 giorni, un team che ne completa circa 1 al giorno con qualche giorno a 0 e qualche giorno a 2 ottiene, con una simulazione Monte Carlo, il 95% di probabilità di completarne 24 in 30 giorni; un team che ne completa 3 in alcuni giorni ma ha molti più giorni a 0 ottiene, a parità di totale, solo il 95% di probabilità di completarne 16 — perché un giorno a zero item è molto più probabile che si ripeta nelle simulazioni per il secondo team. Consistenza e prevedibilità contano più della velocità di punta.

**Ri-prevedere sulla base di nuove informazioni.** È l'essenza stessa dell'agilità: fare progressi anche con informazioni imperfette, restando capaci di adattarsi non appena arrivano informazioni migliori.

**Considerare diverse tecniche di selezione degli input.** L'approccio casuale puro è solo una delle opzioni possibili. Si può selezionare casualmente solo tra i dati dello stesso giorno della settimana (dati di lunedì per simulare un lunedì); oppure solo tra dati dello stesso "tipo" di giorno (dati di un giorno feriale per qualunque giorno feriale simulato, dati di un weekend per un weekend simulato); il libro accenna anche, senza approfondirla, a una tecnica basata sulle catene di Markov (Markov Chain Monte Carlo).

**Prestare attenzione alle assunzioni del modello.** Il contesto è fondamentale, anche per i dati. Ad esempio: usare dati di input coerenti con il periodo che si sta prevedendo (non usare i dati di dicembre per prevedere marzo, perché dicembre include le festività natalizie), e non usare dati di un periodo in cui il team era più piccolo per assenze del personale.

## Cosa NON fare nelle previsioni multi-item

Quando una previsione segnala che qualcosa non va, bisogna agire — ad esempio riducendo lo scope, cambiando la data, aggiungendo risorse/ore di lavoro, oppure accettando un rischio di fallimento più alto. Ma alcune cose vanno evitate a prescindere.

**Non usare le medie.** Una previsione deve sempre includere un intervallo e una probabilità, mai un singolo valore medio.

**Non usare la Legge di Little per prevedere.** Principalmente perché è costruita su valori medi — e le medie, come detto, non sono uno strumento di previsione affidabile.

**Non stimare.** Vale la stessa raccomandazione già fatta per la previsione di singoli item: stimare sottrae tempo al lavoro reale.

**Dimenticare il curve fitting.** È complicato e, in pratica, non è determinante per la qualità della previsione.

## Fidarsi della previsione: la Legge di Little come verifica, non come motore

Il libro chiarisce l'unico uso legittimo della **Legge di Little**: non per prevedere, ma per *verificare* la qualità di una previsione già fatta. Nella sua formulazione da teoria delle code: Tempo di Ciclo medio = WIP medio / Throughput medio. Perché la formula abbia senso, però, devono valere delle assunzioni precise, tutte da controllare e mai da dare per scontate: la formula nasce dalla teoria delle code; è una relazione fra valori medi; richiede che il sistema sia in uno stato stazionario nel periodo in cui si misurano le medie; richiede un periodo di tempo di osservazione/misurazione definito; e richiede che il calcolo sia fatto con unità di misura coerenti fra loro. In generale, più cose si lavorano contemporaneamente in un dato momento, più tempo impiegherà in media ciascuna di esse a finire.

Usare Kanban da solo non basta a soddisfare queste condizioni: i limiti di WIP per singola colonna potrebbero non vincolare il WIP globale del sistema; quei limiti, quando esistono, vanno effettivamente rispettati; e il lavoro va costantemente "tirato" (pull), non solo limitato passivamente. Contrariamente a un'idea diffusa, la dimensione uniforme degli item non è necessaria, per due ragioni principali: la Legge di Little lavora su medie, e la variabilità di per sé non ha un grande impatto sulla prevedibilità (i grandi impatti negativi vengono di solito da un WIP alto, non dalla variabilità delle dimensioni). La Legge di Little riguarda la misurazione, non la previsione: lavora sul passato, non sul futuro — ed essendo basata su medie, vale comunque la stessa cautela già espressa contro l'uso delle medie per prevedere.

## Visualizzare e migliorare la stabilità del sistema

Il **Cumulative Flow Diagram** (CFD) ha sempre il tempo sull'asse X e un conteggio cumulativo di item sull'asse Y: una linea superiore rappresenta gli arrivi cumulativi, una inferiore le uscite cumulative — essendo cumulativo, nessuna linea può mai decrescere. Riguarda solo il WIP, non il backlog: la distanza verticale fra le due linee è il WIP fra quei passaggi del flusso, quella orizzontale è il cycle time medio. Il CFD mostra cosa è già successo.

Per migliorare la stabilità del sistema, alcune delle assunzioni della Legge di Little diventano linee guida pratiche da perseguire attivamente: l'assunzione #1 (il tasso medio di arrivo di un processo deve uguagliare il tasso medio di uscita) si traduce in linee del CFD parallele, cioè un WIP costante; l'assunzione #2 (tutto ciò che viene iniziato deve prima o poi essere completato ed uscire dal sistema) si traduce nella regola "smetti di iniziare, inizia a finire"; l'assunzione #4 (il WIP medio deve restare costante) è la terza linea guida pratica. Sulla quantità minima di dati necessaria per iniziare: la "regola del 5" (una media di 5 item copre il 93% dei casi) e almeno 11 punti dato per stimare in modo affidabile una distribuzione uniforme.

## Vedi anche

- [[implementing-lean-software-development|Implementing Lean Software Development]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/when-will-it-be-done/content.md`
