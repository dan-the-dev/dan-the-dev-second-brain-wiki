---
title: "The Economic Benefit of Refactoring"
type: article
author: "Giles Edwards-Alexander"
topics: ["refactoring", "ai-development"]
status: studied
study:
  method: read
  started_at: "2026-09-22"
  completed_at: "2026-09-22"
raw_source: raw/knowledge/article/refactoring-economic-benefit/content.md
updated: 2026-09-22
---

# The Economic Benefit of Refactoring

**martinfowler.com** · Articolo di Giles Edwards-Alexander (30 luglio 2026), parte della serie *Exploring Generative AI* di Martin Fowler — la stessa serie a cui appartiene [[../article/tdd-in-the-agent-loop|TDD inside the agent loop]].

> [!info] Approfondimento aggiunto in fase di compilazione
> *Exploring Generative AI* è la serie in corso sul sito di Martin Fowler dedicata a raccogliere contributi diretti di practitioner (non solo di Fowler stesso) su come l'AI generativa sta cambiando concretamente il lavoro di ingegneria del software — refactoring, TDD, code review, architettura — piuttosto che discuterne in astratto. I due articoli studiati in questa sessione toccano lo stesso problema di fondo da due lati opposti: quanto un codice ben organizzato (via refactoring) o un processo disciplinato (via TDD) valgano ancora qualcosa quando chi scrive il codice, in buona parte, è un agente AI.
> Fonte: [martinfowler.com/articles/exploring-gen-ai](https://martinfowler.com/articles/exploring-gen-ai/)

L'articolo parte da una tesi controintuitiva solo in apparenza: se il codice che si scrive oggi viene letto molto più spesso da agenti AI che da esseri umani, allora il refactoring — la disciplina di riorganizzare codice esistente senza cambiarne il comportamento — smette di essere un investimento sulla leggibilità per i colleghi futuri e diventa direttamente un investimento economico misurabile, perché riduce il costo in token che un agente deve spendere per orientarsi nel codice prima di poterlo modificare.

## Tre concetti per capire l'esperimento

Per seguire l'esperimento servono tre nozioni di base, che l'autore introduce esplicitamente come chiave di lettura. La prima è il **refactoring** stesso: cambiare la struttura interna del codice — come è organizzato, in quanti file, con quale confine tra le responsabilità — senza toccare *cosa* il codice fa dal punto di vista di chi lo usa. La seconda sono i **token**, l'unità con cui un modello linguistico misura sia il lavoro sia il costo: circa quattro caratteri di testo per token, e ogni volta che un agente deve "leggere" un file per orientarsi, quella lettura consuma token e quindi denaro. La terza è la distinzione fra **token di input e di output**: i token di input (tutto ciò che l'agente legge — il prompt, il codice esistente) sono più economici, singolarmente, di quelli di output (ciò che l'agente scrive), ma quando un file è enorme il costo di input esplode comunque, perché il modello deve attraversare l'intero file anche solo per trovare la singola riga da cambiare.

## L'esperimento: da 17.000 righe a 19 file

L'autore aveva costruito un'applicazione quasi interamente tramite agenti AI, senza rivedere da vicino ogni riga prodotta: il risultato, prevedibile col senno di poi, è stato un singolo file cresciuto fino a superare le **17.000 righe di codice**. Per capire se valesse economicamente la pena ripulirlo, ha impostato un esperimento in tre passaggi. Nel primo, la **baseline**, ha chiesto a un agente AI "fresco" (senza contesto pregresso sulla sessione) di fare una piccola modifica al file così com'era: il costo è stato di circa **159.000 token di input**, quasi interamente spesi a scandire migliaia di righe irrilevanti pur di individuare il punto giusto da modificare. Nel secondo passaggio, il **cleanup**, ha investito circa **8 ore di lavoro** per scomporre quel file monolitico in 19 file più piccoli, ciascuno organizzato attorno a una responsabilità coerente (tutto ciò che riguarda il database in un posto, tutto ciò che riguarda l'interfaccia in un altro, e così via). Nel terzo passaggio, il **risultato**, ha richiesto a un agente altrettanto "fresco" la stessa identica modifica di partenza: questa volta il costo è sceso a circa **27.000 token di input** — una riduzione dell'**83%**.

## Perché funziona: non è la quantità di codice, è la sua organizzazione

Il dato più controintuitivo dell'esperimento è che la quantità totale di codice non si è ridotta in modo significativo tra il prima e il dopo: il refactoring ha spostato codice, non lo ha eliminato. Il risparmio non viene quindi da "meno codice da leggere" in senso assoluto, ma dalla capacità dell'agente di **individuare più rapidamente il file giusto**: quando il codice è organizzato in modo logico e coerente, l'agente può isolare esattamente il file rilevante per il compito richiesto invece di dover attraversare — e quindi pagare, in token — porzioni enormi di codice irrilevante alla ricerca dell'ago nel pagliaio.

## Tre lezioni sorprendenti

L'esperimento porta con sé tre osservazioni che vanno oltre il singolo numero dell'83%. La prima è che **l'AI non sa ripulire da sola i propri disastri**: gli agenti, lasciati liberi, continueranno felicemente ad aggiungere codice a un file già enorme all'infinito, a meno che un essere umano non intervenga esplicitamente per fermarli e imporre una riorganizzazione — il degrado strutturale non genera nell'agente alcun segnale di allarme che lo spinga a correggersi da solo. La seconda è che **l'organizzazione conta più della dimensione**: spezzare un file enorme in pezzi più piccoli ma scelti a caso non produce lo stesso beneficio, perché l'agente resta comunque confuso; i file devono essere organizzati secondo un criterio logico e coerente (per responsabilità, per dominio) perché il guadagno si materializzi davvero. La terza è il cosiddetto **"effetto scogliera"**: il risparmio non arriva in modo graduale via via che si ripulisce il codice — finché il file principale resta grande, il costo resta alto quasi senza variazioni; è solo quando la scomposizione supera una soglia sufficiente che il costo precipita quasi istantaneamente, come da un dirupo, piuttosto che scendere lungo una china dolce.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il risultato di questo singolo esperimento aneddotico trova conferma in dati più ampi raccolti nel corso del 2026 sull'economia degli agenti di coding. Un'analisi di Augment Code sul token spend nei loop agentici osserva che le operazioni di lettura (*read*) assorbono la stragrande maggioranza dei token consumati in una sessione — circa il 76% del totale, contro il 12% dell'esecuzione e il 12% delle modifiche — e che un indice del codebase capace di restringere subito ciò che l'agente apre per primo riduce direttamente questa spesa "di pre-ricerca". Un'analisi indipendente di Vantage sui costi del coding agentico osserva inoltre che il costo di una sessione non cresce in modo lineare con la sua lunghezza: una sessione che richiede il doppio dei "turni" di un'altra può arrivare a costare 3-4 volte tanto, perché ogni turno successivo deve ripagare per intero tutto il contesto accumulato nei turni precedenti — un meccanismo diverso ma complementare rispetto all'"effetto scogliera" osservato in questo articolo, e che spiega perché intervenire presto, prima che il contesto si accumuli, costi sistematicamente meno che intervenire tardi.
> Fonte: [Augment Code — AI Coding Cost Analysis: Where Token Spend Really Goes in an Agent Loop](https://www.augmentcode.com/guides/ai-coding-cost-analysis-agent-token-spend) · [Vantage — The Hidden Cost Driver in Agentic Coding Sessions in 2026](https://www.vantage.sh/blog/agentic-coding-costs)

> [!info] Approfondimento aggiunto in fase di compilazione
> Il report DORA 2025 *State of AI-assisted Software Development* arriva a una conclusione strutturalmente affine, pur partendo da una prospettiva organizzativa più ampia: l'AI non crea eccellenza ingegneristica da sola, la **amplifica** — chi ha già pratiche solide (piattaforme condivise, convenzioni chiare, contesto ben distribuito nel codice) vede l'adozione dell'AI tradursi in miglioramenti reali, mentre chi ha processi deboli o architetture legacy vede l'AI amplificare il disordine esistente, semplicemente producendolo più in fretta. L'esperimento di questo articolo è un caso concreto e misurabile della stessa dinamica su scala di un singolo file: la struttura del codice non è un dettaglio estetico irrilevante nell'era degli agenti, è precisamente ciò che determina se l'AI aiuta o peggiora la situazione.
> Fonte: [dora.dev — State of AI-assisted Software Development 2025](https://dora.dev/dora-report-2025/)

## Note e riflessioni personali

Due riflessioni aggiuntive, nate dalla lettura. La prima è pratica: una dashboard che mostri il costo totale in token del team — sia aggregato sia per singola sessione — sarebbe uno strumento prezioso per rendere visibile esattamente questo tipo di dinamica, e per capire in anticipo quando un file o un modulo sta per superare la soglia oltre la quale conviene fermarsi e rifattorizzare invece di continuare ad aggiungere codice. La seconda collega direttamente questo articolo al suo gemello nella stessa serie, [[../article/tdd-in-the-agent-loop|TDD inside the agent loop]]: il TDD — o più in generale l'abitudine al refactoring continuo, piccolo e frequente, invece che rimandato — è precisamente il meccanismo che impedisce a un file di arrivare mai a 17.000 righe in primo luogo. Visto così, il valore del TDD nel loop degli agenti non sta (solo) nel migliorare la qualità del singolo test o del singolo commit, ma nel mantenere il costo dell'agente **basso e stabile nel tempo**, evitando che si accumuli fino all'"effetto scogliera" descritto in questo articolo.

## Sintesi

L'articolo trasforma un'intuizione già diffusa nella comunità — "il codice pulito è più facile da mantenere" — in un numero concreto e misurabile nell'era degli agenti AI: **83% di risparmio** su un singolo esperimento, ottenuto non riducendo la quantità di codice ma riorganizzandola secondo confini di responsabilità coerenti. Il refactoring, in questa lettura, smette di essere solo una questione di leggibilità per gli sviluppatori umani e diventa una leva economica diretta sul costo operativo di ogni interazione futura con un agente — con l'avvertenza, ribadita più volte, che il beneficio richiede un intervento umano deliberato: nessun agente, lasciato a sé stesso, si ferma spontaneamente a fare pulizia.

## Vedi anche

- Topic collegati: [[../../topics/refactoring|Refactoring]] · [[../../topics/ai-development|AI Development]]
- Contenuto collegato nella stessa serie: [[../article/tdd-in-the-agent-loop|TDD inside the agent loop - theater or actual value?]]
- Contenuti collegati in archivio: [[../book/refactoring-improving-the-design-of-existing-code|Refactoring: Improving the Design of Existing Code]] (Martin Fowler) · [[../article/ai-systems-engineering-patterns|AI Systems Engineering Patterns]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/refactoring-economic-benefit/content.md`
- Articolo originale: [martinfowler.com](https://martinfowler.com/articles/exploring-gen-ai/refactoring-economic-benefit.html)
