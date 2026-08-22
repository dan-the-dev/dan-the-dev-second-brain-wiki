---
title: "Why did Martin Fowler invite 60 engineers to a ski resort?"
type: article
author: Ivett Ördög
topics: [ai, software-development, technical-excellence]
raw_source: raw/knowledge/article/why-did-martin-fowler-invite-60-engineers-to-a-ski-resort/content.md
updated: 2026-08-22
---

# Why did Martin Fowler invite 60 engineers to a ski resort?

**ivettordog.com** · Articolo di Ivett Ördög

> [!info] Approfondimento aggiunto in fase di compilazione
> Il "precedente storico" a cui allude il titolo è lo Snowbird Ski Resort meeting del febbraio 2001, in Utah, dove diciassette sviluppatori — fra cui Kent Beck, Martin Fowler, Ward Cunningham e Robert C. Martin — scrissero l'Agile Manifesto durante un ritiro sugli sci. Il retreat ThoughtWorks descritto in questo articolo, tenuto 25 anni dopo con circa 60 partecipanti, è costruito esplicitamente come eco di quell'evento, incluso l'uso della Chatham House Rule — la convenzione, nata nel 1927 al Chatham House di Londra, che permette di riportare pubblicamente il contenuto di una discussione a patto di non attribuirlo mai a chi lo ha detto — che spiega perché l'articolo riporti solo idee, mai nomi di partecipanti.
> Fonte: [agilemanifesto.org — History](https://agilemanifesto.org/history.html) · [Chatham House — Chatham House Rule](https://www.chathamhouse.org/about-us/chatham-house-rule)

Il retreat "Future of Software Engineering", organizzato da ThoughtWorks come omaggio dichiarato a quel precedente, non ha prodotto un nuovo manifesto — ma ha fatto emergere quattro domande aperte sul futuro dell'ingegneria del software, che strutturano l'intero articolo.

## Dovremmo ancora leggere il codice? Compilatori contro ingegneri

La prima domanda — se sistemi scritti e mantenuti interamente dall'AI, senza che nessun umano ne legga mai il codice, siano un traguardo desiderabile o un rischio — è quella su cui Ördög registra la spaccatura più netta fra i partecipanti al retreat. C'è consenso ampio su un punto più circoscritto: migliorare le capacità dell'agente ha una leva più alta rispetto a migliorare direttamente il sistema che l'agente produce. Non c'è invece accordo sul fatto che la prima cosa possa sostituire del tutto la seconda. Alcuni partecipanti riportano esperienze dirette di sistemi costruiti al 100% dall'AI, ma la fattibilità dipende in modo marcato dal dominio: è un approccio genuinamente solido per sistemi backend transazionali, e funziona particolarmente bene per riscrivere COBOL — e linguaggi datati equivalenti — in stack moderni.

> [!info] Approfondimento aggiunto in fase di compilazione
> La riscrittura di COBOL assistita da LLM non è un caso ipotetico isolato: nel 2023 IBM ha presentato watsonx Code Assistant for Z, uno strumento pensato esplicitamente per tradurre codice COBOL legacy verso Java su mainframe z/OS, e casi simili sono stati riportati da diverse grandi banche e assicurazioni alle prese con sistemi COBOL di decenni fa e una carenza cronica di programmatori COBOL formati. È probabilmente questo il contesto concreto a cui allude l'articolo quando isola la riscrittura di codice legacy come dominio in cui l'AI "funziona particolarmente bene".
> Fonte: [IBM Newsroom — watsonx Code Assistant for Z](https://newsroom.ibm.com/2023-09-topics-ai-code-assistant-z)

Ördög riassume il nodo del dibattito in una metafora efficace: la domanda è se gli agenti siano più simili a compilatori — che rigenerano il codice da zero ogni volta che serve, rendendo la leggibilità umana del codice generato secondaria — oppure più simili a ingegneri, che mantengono una codebase esistente modellandola nel tempo, per cui la leggibilità resta un requisito di prima classe indipendentemente da chi la modifica.

## Il software funziona davvero? Testing come specifica eseguibile

La seconda domanda parte da un dato scomodo: il settore non è mai stato bravo a produrre software privo di bug, e l'ultimo anno ha peggiorato la situazione di un ordine di grandezza — un'affermazione che Ördög sostiene con osservazioni dirette (GitHub che fatica a garantire anche un solo "nine" di disponibilità) e con un aneddoto personale: ha finito per scriversi da sé un proprio strumento di editing video e un proprio teleprompter, perché le opzioni commerciali crashavano fino a diventare inutilizzabili. Gli agenti AI producono codice a un ritmo che rende impossibile la revisione riga per riga, e la revisione umana era già notoriamente inadeguata a catturare bug prima che il problema si aggravasse — da cui la tesi centrale di questa sezione: il testing conta più di prima, non meno.

Il punto su cui l'articolo prende posizione netta riguarda cosa sostituisce cosa: non se una specifica dettagliata possa rimpiazzare i test, ma come farla funzionare *come* test. La proposta di Ördög è che la specifica debba includere esempi che facciano doppio servizio da test automatici — una specifica che, letta da una macchina, è anche una suite eseguibile, e letta da un umano, resta comprensibile come contratto del comportamento atteso.

## La qualità del codice conta ancora? Perché "buono per gli umani" e "buono per gli agenti" convergono

La terza domanda tocca un punto su cui Ördög è una voce nota ai lettori abituali del suo blog: se il codice facile da modificare sia la stessa cosa per umani e per AI, o due cose diverse — se le AI debbano essere vincolate a scrivere in linguaggi ad alto livello o possano scrivere direttamente codice macchina. La sua posizione è che le due qualità coincidano, sostenuta da due argomenti distinti. Il primo è empirico: le AI sono addestrate su codice scritto da umani per essere letto da umani, quindi è quel tipo di codice che comprendono meglio — un modello allenato su codice denso e non convenzionale avrebbe meno da cui generalizzare. Il secondo è strutturale: le AI, come gli umani, hanno una soglia di attenzione limitata (una finestra di contesto limitata, nel caso dei modelli), quindi qualunque tecnica che aiuti un umano a orientarsi in una codebase — nomi chiari, funzioni piccole, basso accoppiamento — aiuta allo stesso modo un agente a orientarsi nello stesso codice.

Il punto più interessante dell'articolo, però, è l'ammissione che segue: la propria esperienza costruendo e usando Habit Hooks — lo strumento, sviluppato da Ördög, che converte pratiche di buona programmazione in indicazioni operative per agenti di coding — ha prodotto un effetto collaterale ironico rispetto all'intenzione originale. Lo strumento nasceva per mantenere il codice manutenibile per gli umani, ma l'ha di fatto avvicinata al campo "dark factory" descritto nella prima sezione: dato che è l'agente stesso, tramite Habit Hooks, a mantenere il codice manutenibile durante lo sviluppo, l'agente può fare più progressi in autonomia — riducendo, non aumentando, il bisogno del coinvolgimento diretto dell'autrice. È una tensione che l'articolo non risolve esplicitamente, e che lascia aperta: se codificare la qualità in uno strumento automatico è ciò che rende possibile delegare di più, la convergenza fra "buono per gli umani" e "buono per gli agenti" potrebbe essere allo stesso tempo la ragione per cui gli umani, nel tempo, leggono sempre meno codice — non di più.

## Il rischio dei Citizen Developer

La quarta domanda sposta lo sguardo dal singolo sistema alla professione nel suo complesso. Ördög cita una stima di Robert C. Martin, formulata a metà anni 2010, secondo cui il numero di sviluppatori raddoppia circa ogni cinque anni — proiettando quel trend, per il 2050 ogni essere umano sulla Terra, bambini inclusi, dovrebbe essere uno sviluppatore software, una conclusione palesemente assurda che la stima stessa era pensata per mettere in discussione.

> [!info] Approfondimento aggiunto in fase di compilazione
> La stima citata è tratta dal post "My Lawn" di Robert C. Martin (Clean Coder Blog, giugno 2014), dove l'osservazione sul raddoppio dei programmatori ogni cinque anni viene usata come argomento a favore di pratiche di programmazione più rigorose e formative più solide per il numero crescente di sviluppatori senza esperienza pregressa che entrano nel settore — lo stesso tema di fondo, applicato oggi ai "citizen developer" abilitati dall'AI invece che ai neolaureati in bootcamp.
> Fonte: [Clean Coder Blog — "My Lawn" (2014)](https://blog.cleancoder.com/uncle-bob/2014/06/20/MyLawn.html)

Ördög legge la recente contrazione delle assunzioni di ingegneri software non come segnale che la professione sia meno richiesta, ma — lettura che sottoscrive esplicitamente — come prova che gli strumenti agentici hanno abbassato drasticamente la soglia per essere considerato sviluppatore. È un cambiamento che descrive con entusiasmo genuino: vuole che ogni persona possa esercitare il potere di costruire strumenti utili modellando un sistema un piccolo esperimento alla volta, senza dover aspettare lei o altri ingegneri per farlo al posto loro. Ma il beneficio arriva insieme a un rischio speculare, non teorico: la sicurezza è il rischio più ovvio, ma la compiacenza — accettare risultati scorretti come veri, senza verificarli — può essere altrettanto dannosa, e diversi partecipanti al retreat hanno raccontato episodi concreti di colleghi in finance e customer service che hanno esposto accidentalmente dati sensibili o preso decisioni sbagliate fidandosi troppo di risultati generati da un agente. Diventare sviluppatori non è mai stato così facile, conclude l'articolo, ma non è mai stato nemmeno così rischioso — e gestire quella tensione resta, esplicitamente, una domanda aperta.

## Sintesi

L'articolo non prende posizione unica su nessuna delle quattro domande che pone — è, nel suo impianto stesso, un resoconto di un dibattito ancora aperto, non un manifesto — ma le quattro domande condividono una struttura comune: ciascuna riguarda dove tracciare il confine fra ciò che si può delegare in sicurezza a un agente e ciò che richiede ancora giudizio umano diretto, che si tratti di leggere codice, verificarne il comportamento, deciderne lo stile, o autorizzare chi può scriverlo. Ördög chiude con un tono dichiaratamente ottimista: la possibilità di concentrarsi sui problemi difficili invece che sul lavoro ripetitivo, e il compito, tutt'altro che scontato, di definire concretamente cosa significhi che costruire sistemi diventi una commodity.

## Collegamenti

- Topic: [[../../topics/ai|AI]] · [[../../topics/software-development|Software Development]] · [[../../topics/technical-excellence|Technical Excellence]]
- Contenuti collegati: [[../article/humans-and-agents-in-software-engineering-loops|Humans and Agents in Software Engineering Loops]] · [[../article/code-is-cheap-now-software-isnt|Code Is Cheap Now. Software Isn't.]] · [[../article/dora-balancing-ai-tensions-moving-from-ai|DORA — Balancing AI Tensions]]
- Autrice: [[../person/ivett-ordog|Ivett Ördög]]
- Persone citate: [[../person/robert-c-martin|Robert C. Martin]] (stima sul raddoppio degli sviluppatori) · [[../person/martin-fowler-software-engineer|Martin Fowler]] (nel titolo, come figura simbolica del retreat)
- Organizzazione: [[../organization/thoughtworks|Thoughtworks]] (organizzatrice del retreat)
- Concetto: [[../concept/large-language-model|Large Language Model]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/why-did-martin-fowler-invite-60-engineers-to-a-ski-resort/content.md`
- Articolo originale: [ivettordog.com](https://www.ivettordog.com/blog/2026-07-05-future-of-software-engineering-retreat-reflections)
