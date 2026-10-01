---
title: "Evals as Theory Building"
type: article
author: "High Performance AI Lab"
topics: ["ai-development", "ai"]
status: studied
study:
  method: read
  started_at: "2026-10-01"
  completed_at: "2026-10-01"
raw_source: raw/knowledge/article/evals-as-theory-building/content.md
updated: 2026-10-01
tags: [ai, evals, ai-development, testing, theory-building]
---

# Evals as Theory Building

**High Performance AI Lab** · 4 settembre 2026 · articolo firmato dal lab, senza un autore individuale.

L'articolo parte da un'osservazione semplice: ogni organizzazione prende decisioni sulla base di numeri, e quei numeri escono quasi sempre da una valutazione, che la si chiami "eval" o no. Valutare vuol dire scegliere un pezzo di realtà, osservarlo e dargli un verdetto. L'AI rende facilissimo produrre verdetti in quantità e a velocità prima impensabili, e proprio per questo la domanda si sposta: non basta sapere se un sistema ha passato un'eval, bisogna sapere *che cosa dimostra* quel passaggio e *come lo si può verificare*. La tesi dell'articolo è che un'eval non è un controllo messo in fondo al processo: è una **teoria di cosa significa avere successo**, e come ogni teoria va costruita, messa sotto pressione e rivista.

> [!tip] Per orientarsi: eval e test non sono la stessa cosa
> Le note di Daniele partono da un dubbio preciso: cosa cambia fra un'eval e un normale test? Il confronto completo è nel box dedicato più sotto ([Eval e test a confronto](#eval-e-test-a-confronto)). In breve: un test verifica che un sistema **deterministico** produca **esattamente** l'output atteso; un'eval stima **quanto bene** un sistema **probabilistico** si comporta su una distribuzione di casi, dove la risposta "giusta" può avere molte forme. Questo articolo fa un passo in più e sostiene che anche l'eval stessa va testata.

## I concetti chiave

**Eval come teoria di lavoro.** Un'eval non è solo un punteggio o un test: è una "working theory of success". Stabilisce cosa conta come miglioramento, quali fatti vengono osservati e come quei fatti diventano un verdetto. Chi scrive l'eval, in pratica, sta decidendo cosa il processo sarà in grado di riconoscere come progresso.

**Mappa e territorio.** I risultati di un'eval sono mappe: astrazioni utili che per forza di cose sono compromessi. Non sono il territorio, cioè la realtà. Il pericolo nasce quando la mappa (la metrica) diventa più importante del territorio: a quel punto smette di descrivere il lavoro e comincia a organizzare il lavoro attorno a sé.

**Fumo e fuoco.** Il risultato di un'eval è come il fumo: un indizio che rimanda a una causa, il fuoco. Se un sistema impara a produrre il fumo (il punteggio) senza il fuoco (il lavoro fatto davvero), l'eval è rotta. Aggiungere casi di test produce più fumo, ma non dimostra che il fuoco esista.

**ProofPack.** Uno strato indipendente di verifica e raccolta di evidenze per le eval. Mette l'eval sotto pressione con casi noti come corretti, contraffazioni controllate e variazioni generate, per verificare se il valutatore è davvero rigoroso. Lega ogni affermazione a "ricevute" precise (casi, versioni, output), così che la verifica possa essere ripetuta da altri in modo indipendente.

**Assay.** Lo strumento che tiene ferma la soglia di decisione. Registra *prima* che l'eval giri le regole di ammissione, di squalifica e di ripiego. Quando ProofPack fornisce i fatti verificati, Assay applica le regole già fissate e produce un esito delimitato (ammettere, rifiutare o invalidare), invece di piegare le regole al risultato desiderato.

**Il confine delle evidenze (evidence boundary).** Una separazione per cui il processo che cerca di migliorare un sistema non è quello che decide di esserci riuscito. Tiene distinti tre stati che altrimenti si confondono: "eval rotta", "modello fallito" e "pareggio". Serve a evitare che la pressione a produrre una risposta finisca per fabbricarne una.

**Loop accoppiati (coupled loops).** Un metodo basato su due cicli separati ma che si influenzano: uno migliora il sistema sotto test, l'altro migliora l'eval stessa (i casi, le definizioni, i controesempi). Senza il secondo ciclo, l'automazione si limita a raffinare le scorciatoie che l'eval premia.

**Ontologia dell'eval.** L'insieme delle distinzioni che un'eval è in grado di vedere: cosa conta come caso, quali relazioni contano, quali differenze sono errori. Quando c'è disaccordo su un'eval, di solito si finisce a discutere proprio di queste definizioni.

**Theory building.** Ripreso dal concetto di Peter Naur: il processo per cui ogni nuovo caso, controesempio o vicolo cieco approfondisce la comprensione che un'organizzazione ha del lavoro. Trasforma le eval da generatori di punteggi in strumenti per costruire conoscenza pratica.

**Ricevute (receipts).** I dati verificabili che sostengono i risultati di un'eval: attacchi, casi, output, fallimenti, riparazioni. Non possono contenere tutta la comprensione umana di un compito, ma offrono un punto di partenza controllabile da cui mettere in discussione, ricostruire e verificare le affermazioni.

## Un'eval è una teoria del successo

Il punto di partenza è che un'eval *definisce* cosa il processo può riconoscere come miglioramento. Sceglie quali situazioni contano e quali fatti si trasformano in un "passato" o in un "fallito". Ne segue un problema concreto: due sistemi possono migliorare lo stesso punteggio per ragioni opposte. Uno fa meglio il lavoro; l'altro ha imparato ad aggirare l'eval. Sulla dashboard i due numeri sono identici, ma uno rappresenta un progresso e l'altro un camuffamento. Per questo la domanda importante non è "ha passato?", ma "che cosa dimostra il fatto che abbia passato, e come lo verifico?".

## Ogni eval è una mappa

Un'eval fa un compromesso inevitabile: riduce la realtà in pezzi più piccoli e leggibili. La soddisfazione del cliente diventa un voto, un problema risolto diventa un ticket chiuso. La riduzione rende le cose visibili, ma ne fa anche sparire altre. L'esempio dell'articolo è quello di un team di supporto misurato sul numero di ticket chiusi: il team viene premiato per chiudere ticket anche quando il problema del cliente resta irrisolto. A quel punto l'eval ha smesso di osservare il lavoro e ha cominciato a organizzarlo attorno a sé.

È il rischio di scambiare la mappa per il territorio. La mappa non è in malafede: semplicemente omette qualcosa di importante e, nel frattempo, acquista autorità. Quando budget e promozioni dipendono da lei, l'astrazione rimodella la realtà che doveva descrivere. Le mappe servono, perché il territorio intero non ce lo si può portare dietro; ma la mappa deve restare responsabile verso i viaggi reali.

> [!info] Approfondimento aggiunto in fase di compilazione — la legge di Goodhart
> Il fenomeno descritto in questa sezione ha un nome preciso, la **legge di Goodhart**, nella formulazione resa celebre da Marilyn Strathern: "quando una misura diventa un obiettivo, smette di essere una buona misura". L'economista Charles Goodhart la formulò nel 1975 a proposito delle politiche monetarie, ma vale ovunque una metrica venga legata a incentivi, e nel machine learning ha un nome specifico: *reward hacking* o *specification gaming*, cioè un sistema che ottimizza la metrica invece dell'obiettivo che la metrica doveva rappresentare. L'esempio dei ticket chiusi dell'articolo è un caso da manuale. Nell'archivio la legge ha una sua pagina: [[../concept/goodhart-s-law|Goodhart's law]].
> Fonte: [Wikipedia — Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law)

## Fumo e fuoco

Il risultato di un'eval funziona come il fumo che sale dietro una collina: si deduce il fuoco (il lavoro buono) dal fumo (il punteggio) perché ci si fida del legame fra i due. Un sistema che soddisfa il valutatore senza fare davvero il lavoro spezza questa catena. Il punteggio può essere calcolato in modo impeccabile e, ciò nonostante, non indicare più il punto che si credeva. Aggiungere casi di test produce più fumo, ma non prova che ci sia il fuoco. Il rigore comincia quando si mette sotto esame l'eval stessa, con tre domande: sa rifiutare un comportamento sbagliato? Sa accettare un comportamento onesto? Resta stabile ai margini?

## ProofPack e Assay

**ProofPack** è lo strato di verifica indipendente che mette pressione sulle eval, con tre strumenti diversi. I **casi noti come corretti** servono a scoprire se il valutatore rifiuta tutto indiscriminatamente. Le **contraffazioni controllate** servono a scoprire se rileva i difetti che dice di rilevare. Le **variazioni generate** servono a scoprire se la regola regge anche oltre gli esempi che l'avevano fatta sembrare convincente. In un caso concreto, un avversario automatico ha trovato 89 "fughe" (escapes) su 153 tentativi, e quelle fughe sono state usate per costruire un'eval più robusta. ProofPack lega ogni affermazione a ricevute esatte (casi, versioni del sistema, output, tracce), così che se un pezzo manca o è stato alterato la verifica fallisce.

I fatti verificati, però, non bastano: resta da chiedersi se siano *sufficienti* per la decisione da prendere. È il compito di **Assay**, che tiene ferma la soglia di decisione. Prima che l'eval giri, Assay registra quattro cose: l'affermazione che si vuole dimostrare, cosa deve essere preservato, cosa causa la squalifica e quale ripiego resta disponibile. Quando arrivano i fatti di ProofPack, Assay applica la regola fissata in anticipo, e gli esiti possibili sono tre: **ammettere** un passo successivo delimitato, **rifiutare** una modifica, oppure **invalidare** il record. Questa separazione è quella che l'articolo chiama **evidence boundary**: impedisce che la pressione a produrre una risposta fabbrichi un falso successo.

> [!info] Approfondimento aggiunto in fase di compilazione — il caso delle 89 fughe, e chi parla
> Riletto l'articolo originale, il caso delle 89 fughe su 153 tentativi riguarda una campagna avversaria contro un harness di benchmark del lab: un sistema automatico cercava risposte sbagliate che il valutatore avrebbe comunque accettato, e ne ha trovate 89. Dopo la revisione, l'harness bloccava tutte le 89 fughe note e rilevava anche 49 difetti piantati deliberatamente per metterlo alla prova. Va tenuto presente anche un elemento di contesto: ProofPack e Assay sono strumenti dello stesso High Performance AI Lab ("We have applied that pressure to our own work"). I principi dell'articolo (testare l'eval, fissare le regole prima di guardare i risultati, separare chi migliora da chi giudica) valgono indipendentemente dagli strumenti, ma il testo è anche la presentazione dei prodotti di chi lo firma.
> Fonte: [High Performance AI Lab — Evals as Theory Building](https://highperformanceailab.com/articles/evals-as-theory-building/)

## L'eval entra nel loop

Un'eval cambia natura quando i suoi risultati diventano feedback, perché a quel punto seleziona ciò che il sistema successivo diventerà. I loop di ricerca automatizzati sono pericolosi proprio perché sono fedeli alla loro eval: se l'eval premia una scorciatoia, l'automazione la troverà e la perfezionerà. La risposta dell'articolo sono due **loop accoppiati**: uno migliora chi esegue il compito, l'altro migliora l'eval. Si informano a vicenda senza fondersi in uno solo. Un fallimento può diventare un nuovo caso; un valutatore riparato può diventare uno strumento più forte. Ogni modifica genera una nuova affermazione da dimostrare, per cui la prova di ieri non può autorizzare in silenzio l'eval di oggi.

## Costruire una teoria, con le ricevute

Prima di giudicare un flusso di lavoro, un'eval deve decidere che cosa quel flusso contiene: deve darsi una **ontologia**, cioè l'insieme delle distinzioni che è in grado di vedere. Quando queste distinzioni sono esplicite, i disaccordi possono cadere con precisione sulle definizioni che hanno prodotto un certo punteggio, invece di restare una discussione vaga sul numero.

Qui l'articolo si appoggia a Peter Naur, che chiamava "teoria" la comprensione che permette a qualcuno di spiegare come un sistema corrisponde al lavoro reale e perché i suoi confini sono stati tracciati proprio lì. Si costruisce teoria quando ogni nuovo caso approfondisce questa comprensione. Le ricevute non possono contenere tutta la comprensione delle persone che fanno il lavoro, ma forniscono un punto di partenza controllabile da cui quella teoria può essere messa in discussione e ricostruita. Un caso fallito, così, smette di essere un aneddoto e diventa una definizione che si può esaminare.

> [!info] Approfondimento aggiunto in fase di compilazione — Peter Naur, "Programming as Theory Building" (1985)
> Peter Naur, informatico danese (la "N" della notazione Backus-Naur Form, premio Turing 2005), pubblicò *Programming as Theory Building* nel 1985 su *Microprocessing and Microprogramming*. La tesi è che un programma non coincide con il suo codice sorgente: il vero programma è la **teoria** condivisa che vive nella testa di chi ci lavora, cioè la comprensione di come il codice risolve il problema e del perché è fatto così. Il codice ne è una rappresentazione con perdita di informazione, e per questo, secondo Naur, un programma non si ricostruisce dal solo codice: quando il team che ne possiede la teoria si disperde, il programma "muore" anche se il codice continua a girare. Programmare, quindi, è prima di tutto costruire una teoria, non produrre testo. Il saggio è tornato molto citato con l'arrivo degli agenti di coding: se il codice lo scrive un agente, la teoria chi la costruisce? L'articolo applica la stessa lente alle eval: il punteggio è il "codice" della valutazione, la teoria è la comprensione di cosa significhi davvero fare bene quel lavoro, e le ricevute sono il modo per non perderla.
> Fonte: [Peter Naur — Programming as Theory Building (PDF)](https://gwern.net/doc/cs/algorithm/1985-naur.pdf) · [Summary di Al Sweigart](https://inventwithpython.com/drafts/naur-programming-as-theory-building.html)

## Cosa rende possibile un'eval rigorosa

La maggior parte dei sistemi di valutazione finisce con un punteggio. Un approccio rigoroso, invece, *comincia* da una domanda: perché ci si dovrebbe fidare di questo risultato, e quanta autorità gli si dovrebbe concedere? ProofPack mette sotto pressione l'eval e conserva i fatti per la verifica indipendente; Assay trasforma le evidenze sul flusso di lavoro in ambienti e controlli espliciti, e governa ammissione e scadenza delle conclusioni. Su questa base i loop automatici possono migliorare gli harness e distillare flussi di lavoro in modelli senza prendere ogni segnale per verità. Lo stesso confine delle evidenze si può estendere oltre il modello, all'ottimizzazione hardware e alla sicurezza delle prestazioni.

Il punteggio ha un ruolo legittimo: la realtà va astratta per poter entrare in un sistema AI. Ma un punteggio non può dimostrare da solo il proprio significato né decidere da solo la propria autorità. Ha bisogno di definizioni, controesempi, evidenze e condizioni di verifica. I modelli cambieranno; ciò che deve accumularsi nel tempo è la teoria del successo dell'organizzazione, insieme alle ricevute che le permettono di sopravvivere al modello successivo.

## Eval e test a confronto

> [!info] Approfondimento aggiunto in fase di compilazione — cosa cambia fra un'eval e un test tradizionale
> Richiesto esplicitamente da Daniele nelle note: un confronto fra eval e test "normali", dal punto di vista di chi pratica il TDD da anni.
>
> | | Test tradizionale (unit/integration) | Eval di un sistema AI |
> |---|---|---|
> | **Sistema verificato** | Deterministico: stesso input, stesso output | Probabilistico: stesso input, output diversi a ogni esecuzione |
> | **Oracolo** | Un valore atteso esatto (`assertEquals`) | Spesso non esiste una sola risposta giusta: rubriche, criteri, giudizio umano o di un altro modello (*LLM-as-judge*) |
> | **Esito** | Binario: verde o rosso | Spesso un punteggio o un tasso (es. "92% dei casi accettabili"), da leggere statisticamente |
> | **Cosa si misura** | Correttezza di un comportamento specificato | Qualità di un comportamento su una distribuzione di casi realistici |
> | **Unità** | Una funzione, un caso | Un dataset di casi (spesso tratti da tracce reali di produzione) |
> | **Costo** | Millisecondi, praticamente gratis | Chiamate a modelli, tempo umano di revisione: costa di più eseguirle e mantenerle |
> | **Quando fallisce** | C'è un bug nel codice | Può esserci un problema nel modello, nel prompt, nel contesto... oppure **nell'eval stessa** |
> | **Rischio tipico** | Test fragili o tautologici | Goodhart: il sistema impara a soddisfare il valutatore invece di fare il lavoro |
>
> Il continuum è più sfumato di quanto la tabella suggerisca. Hamel Husain, uno dei riferimenti più citati sul tema, descrive tre livelli: **asserzioni deterministiche** (veri unit test sull'output del modello: il JSON è valido? la risposta contiene il dato richiesto? non cita un concorrente?), **valutazioni umane e con modelli** basate sul tracciamento delle conversazioni reali, e **A/B test** in produzione. Il primo livello è identico ai test che Daniele conosce; gli altri due sono il territorio specifico delle eval. Il metodo che propone, la *error analysis*, ricorda molto il TDD: si leggono a mano le tracce, si classificano i fallimenti e per ciascuno si scrive un controllo (un'asserzione se il criterio è oggettivo, un giudice LLM se serve giudizio), che poi resta come rete contro le regressioni.
>
> Questo articolo aggiunge un tassello che nei test tradizionali è quasi assente: **l'eval va testata a sua volta**. Nel TDD c'è un'idea simile, il passo Red, che serve a vedere il test fallire per avere fiducia che sappia distinguere codice giusto da sbagliato, e il *mutation testing*, che introduce difetti apposta per vedere se i test se ne accorgono. ProofPack generalizza esattamente questa idea: casi noti come corretti (il valutatore non deve rifiutare tutto) e contraffazioni controllate (deve accorgersi dei difetti piantati). Detto con il linguaggio di Daniele: un'eval è un test con un oracolo imperfetto, e per questo serve un secondo livello di test che controlli l'oracolo.
> Fonte: [Hamel Husain — Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/) · [Hamel Husain — AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) · [Konstantin Gredeskoul — Evals: the unit tests for the non-deterministic parts of your app](https://kig.re/2026/06/22/writing-evals-for-ai-powered-apps.html)

## Note e riflessioni personali

Daniele annota che le eval, in generale, sono per lui ancora un argomento nuovo e che non gli era chiaro cosa cambi rispetto a un test normale: un tema da approfondire e da imparare. Il confronto qui sopra prova a rispondere partendo da ciò che già conosce. La differenza di fondo non è nella tecnica ma nell'oracolo: in un test so con certezza qual è la risposta giusta, in un'eval no, e quindi la fiducia va costruita attorno al valutatore oltre che attorno al sistema. Da qui il collegamento più naturale con un contenuto già studiato, [[../article/tdd-in-the-agent-loop|TDD inside the agent loop]]: anche lì emergeva che il rischio con un agente sono i test tautologici, che validano l'implementazione con la sua stessa logica, e che la difesa è misurare l'esito (per esempio con il mutation testing) più che imporre il processo. È lo stesso problema visto dall'altra parte: in entrambi i casi bisogna chiedersi se lo strumento di verifica sa davvero distinguere il giusto dallo sbagliato.

## Sintesi

L'articolo sposta l'attenzione dal punteggio al valutatore. Un'eval è una teoria di cosa significhi avere successo, e come ogni mappa semplifica il territorio: quando la mappa acquista autorità (budget, promozioni, loop automatici che ottimizzano su di lei) rischia di rimodellare la realtà invece di descriverla, e un sistema può imparare a produrre il fumo senza il fuoco. La risposta proposta ha quattro pezzi: mettere l'eval sotto pressione con casi corretti, contraffazioni e variazioni (ProofPack); fissare le regole di decisione prima di vedere i risultati (Assay); separare chi migliora il sistema da chi decide che il miglioramento c'è stato (evidence boundary); far evolvere sistema ed eval in due loop accoppiati. Sopra tutto c'è l'idea di Naur: ciò che deve accumularsi non sono i punteggi, che invecchiano con i modelli, ma la teoria del lavoro e le ricevute che permettono di verificarla. Per chi viene dal testing tradizionale, il passo da fare è accettare un oracolo imperfetto e quindi trattare anche l'oracolo come qualcosa da testare.

## Vedi anche

- Topic collegati: [[../../topics/ai-development|AI Development]] · [[../../topics/ai|AI]] · [[../../topics/tdd|TDD]]
- Concetti: [[../concept/goodhart-s-law|Goodhart's law]] · [[../concept/large-language-model|Large Language Model]]
- Contenuti collegati in archivio: [[../article/tdd-in-the-agent-loop|TDD inside the agent loop]] · [[../article/humans-and-agents-in-software-engineering-loops|Humans and Agents in Software Engineering Loops]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/evals-as-theory-building/content.md`
- Articolo originale: [highperformanceailab.com](https://highperformanceailab.com/articles/evals-as-theory-building/)
