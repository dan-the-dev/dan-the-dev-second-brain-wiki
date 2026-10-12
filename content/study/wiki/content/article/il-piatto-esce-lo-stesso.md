---
title: "Il piatto esce lo stesso"
type: article
author: "Matteo Pipitone"
topics: ["tech-debt", "technical-excellence", "clean-code"]
status: studied
study:
  method: read
  started_at: "2026-10-12"
  completed_at: "2026-10-12"
raw_source: raw/knowledge/article/il-piatto-esce-lo-stesso/content.md
updated: 2026-10-12
tags: [tech-debt, clean-code, boy-scout-rule, refactoring, mise-en-place, technical-excellence]
---

# Il piatto esce lo stesso

**[[../person/matteo-pipitone|Matteo Pipitone]]** · matteopipitone.it · 28 settembre 2026 · lettura di circa 7 minuti

L'articolo regge tutto su una sola metafora: una codebase disordinata è come una cucina disordinata. In entrambe il lavoro esce comunque, ed è proprio questo il problema. Il piatto arriva in sala, la feature va in produzione, nessuno si ferma, e quindi il disordine non viene mai percepito come un blocco: viene percepito come la normale velocità del lavoro. Da qui l'autore costruisce un ragionamento che tiene insieme il debito tecnico di Ward Cunningham, la Boy Scout Rule di Robert C. Martin e il principio del *clean as you go* delle cucine professionali raccontato da Dan Charnas, con una parte originale e molto concreta su cosa succede alla persona che pulisce quando nessun altro lo fa.

## I concetti chiave

**La codebase come cucina.** In una cucina in disordine i piatti escono lo stesso, ma ogni gesto costa di più: si cerca il coltello sotto i taglieri, si spostano le pentole per liberare un fornello. In una codebase disordinata le feature si consegnano lo stesso, ma prima di scrivere la riga che serve bisogna capire dove va messa, spostare cose che non c'entrano e sperare di non rompere altro. Il lavoro non si ferma: diventa più lento e più frustrante, per via di uno sforzo che non ha niente a che fare con il compito.

**Il debito tecnico come interesse nascosto.** Riprendendo Ward Cunningham, il debito tecnico è tempo preso in prestito per consegnare più in fretta. Il pericolo non è il prestito iniziale ma l'interesse: il rallentamento continuo, e la frustrazione che si accumula, ogni volta che si torna a toccare il codice disordinato.

**Morale e permanenza delle persone.** Il disordine genera una frustrazione che porta al burnout. Gli sviluppatori bravi, quelli che possono scegliere, se ne vanno dagli ambienti in cui devono lottare ogni giorno con il caos. Il risultato è che il team perde proprio le persone più disciplinate.

**La Boy Scout Rule.** Presa da Robert C. Martin, che a sua volta la riprende dall'etica del campeggio: "lascia il campeggio più pulito di come l'hai trovato". Nel codice significa migliorare un po' un file ogni volta che lo si tocca, invece di lasciarlo peggio di come lo si è trovato.

**Il paradosso del boy scout.** Quando la regola la segue una sola persona, quella persona sembra più lenta degli altri, perché pulisce anche il disordine altrui, mentre il beneficio della sua pulizia si distribuisce su tutto il team. Il costo è suo e visibile, il beneficio è di tutti e invisibile: il risultato è che chi lavora con disciplina viene criticato ingiustamente per la sua lentezza.

**La disciplina collettiva.** La Boy Scout Rule funziona davvero solo se la adotta tutto il team. Quando ognuno pulisce dopo di sé, la "tassa" nascosta del cercare gli attrezzi o del decifrare codice disordinato sparisce, e crescono insieme la velocità e la soddisfazione di tutti.

**Pulizia continua o pulizia a fine turno.** Pulire mentre si lavora permette di mantenere la produttività su periodi lunghi. Pulire solo alla fine funziona per i turni brevi, ma nel software fallisce, perché una codebase, a differenza di un servizio al ristorante, non ha quasi mai una "fine del servizio": chi aspetta la fine si condanna a un rallentamento perpetuo.

**Lo spike come cucina di casa.** Il codice scritto per imparare o sperimentare (lo *spike*) è come cucinare a casa: è accettabile lasciarlo in disordine, perché è temporaneo e il costo lo paga chi lo scrive. Il problema nasce quando lo spike resta per sbaglio in produzione e qualcun altro deve mantenerlo.

**La pulizia è al servizio della consegna.** L'obiettivo non è una codebase immacolata ma la consegna efficiente di valore. Si pulisce ciò che è d'intralcio adesso e ciò che ostacolerà la prossima persona, non di più: la perfezione non è lo scopo.

## Il costo di uno spazio di lavoro in disordine

In una cucina disordinata si lavora male, ma i piatti escono. Si cerca il coltello sotto i taglieri, si spostano le pentole per liberare un fornello, e alla fine il piatto è pronto: magari è anche buono. Solo che ci si è messo il doppio, e ogni gesto si è portato via un po' di pazienza. Le codebase funzionano spesso allo stesso modo. Le feature si consegnano, niente lo impedisce esplicitamente, ma prima di scrivere la riga che serve bisogna capire dove deve stare, spostare cose che non c'entrano e sperare di non rompere qualcos'altro.

È per questo che il debito tecnico è così facile da ignorare: non blocca il lavoro, lo rallenta. Quando qualcosa si rompe lo si vede subito; quando il lavoro diventa ogni giorno un po' più lento, quella lentezza diventa la nuova normalità. E il costo del disordine si paga a ogni singolo compito. Lasciare un oggetto fuori posto costa poco nel momento in cui lo si fa, ma si paga ogni volta che lo si incontra di nuovo: un coltello nascosto sotto i taglieri non fa perdere tempo una volta sola, lo fa perdere a ogni piatto che ha bisogno di quel coltello.

Ward Cunningham, che ha coniato l'espressione "debito tecnico" nel 1992, aveva descritto esattamente questa dinamica. Consegnare codice in fretta è come accendere un prestito: si accelera all'inizio, a patto di restituire il prestito più avanti con il refactoring. Il pericolo arriva quando il prestito non viene mai restituito, e ogni minuto passato nel codice disordinato diventa interesse su quel debito.

C'è poi un costo nascosto che non compare quasi mai nelle stime: la frustrazione. Lavorare ogni giorno in un ambiente caotico stanca più del lavoro in sé. Le persone perdono la passione, fanno il minimo indispensabile per andare avanti, e il disordine cresce perché nessuno ha più l'energia di sistemarlo. L'autore dice di essere arrivato a capirlo proprio attraverso l'analogia: nessuno vuole lavorare in una cucina sporca. Un cuoco bravo sceglie di non lavorare in un posto dove per trovare un coltello deve spostare i taglieri. Nel software vale lo stesso: chi può scegliere se ne va.

> [!info] Approfondimento aggiunto in fase di compilazione — quanto costa davvero il disordine, in numeri
> La tesi dell'articolo, che il disordine non ferma il lavoro ma lo rallenta in modo continuo, oggi ha anche qualche misura. Lo studio più citato è **"Code Red: The Business Impact of Code Quality"** di Adam Tornhill e Markus Borg (IEEE/ACM TechDebt Conference, 2022), che ha analizzato 30.737 file di 39 codebase proprietarie in produzione. Nel codice di bassa qualità ha trovato **15 volte più difetti** che nel codice sano; risolvere un ticket nel codice peggiore richiedeva in media il **124% di tempo in più** (e già il codice di qualità intermedia richiedeva il 78% in più); e il tempo massimo di ciclo era **fino a 9 volte più lungo**, cioè lavorare nel disordine rende anche le stime molto meno prevedibili. Va detto che lo studio è correlazionale e che la metrica di qualità usata è quella dello strumento commerciale degli autori (CodeScene), ma è il dato quantitativo più vicino all'immagine del coltello sotto i taglieri: l'interesse si paga a ogni ticket.
> Sul fronte delle percezioni, il report **The Developer Coefficient** di Stripe (2018, con Harris Poll, oltre 1.000 sviluppatori e 1.000 dirigenti in cinque Paesi) stimava che uno sviluppatore passi circa **17 ore a settimana** fra debito tecnico (circa 13,5) e codice scritto male (circa 3,8), cioè intorno al **42% della settimana lavorativa**.
> Fonte: [Tornhill, Borg — Code Red (arXiv)](https://arxiv.org/abs/2203.04374) · [InfoQ — The business impact of code quality](https://www.infoq.com/articles/business-impact-code-quality) · [Dice — Technical Debt and Bad Code Have a Bigger Impact Than You Think](https://insights.dice.com/2018/12/06/technical-debt-bad-code-bigger-impact-think/)

## Pulire mentre si lavora

Le cucine professionali risolvono il problema con un principio preciso: *clean as you go*, pulire mentre si lavora. Dan Charnas, nel libro *Work Clean*, ha intervistato molti chef professionisti e lo ha individuato come uno dei principi fondamentali del loro modo di lavorare. Invece di pulire tutto a fine serata, i cuochi puliscono fra un piatto e l'altro: un servizio dura ore, e nessuna cucina reggerebbe se accumulasse tutto il disordine fino alla chiusura.

Nel software lo stesso principio si chiama **Boy Scout Rule**, nel nome che gli ha dato Robert C. Martin in *Clean Code*: lascia il codice più pulito di come l'hai trovato. Quando si tocca un file non serve riscriverlo da capo: basta non peggiorarlo e sistemare una piccola cosa, già che si è lì.

> [!info] Approfondimento aggiunto in fase di compilazione — la mise en place e i dieci principi di *Work Clean*
> *Work Clean: The Life-Changing Power of Mise-en-Place to Organize Your Life, Work, and Mind* (Rodale, 2016) è il libro in cui il giornalista Dan Charnas prova a portare fuori dalla cucina la disciplina della **mise en place**, letteralmente "mettere al proprio posto": l'organizzazione della postazione e degli ingredienti prima e durante il servizio. Il libro si basa su decine di interviste a professionisti della cucina, dagli studenti di scuole di cucina ai cuochi di linea fino a chef di altissimo livello come **Thomas Keller** (The French Laundry, Per Se) e **Alfred Portale** (Gotham Bar and Grill), e la riduce a dieci principi. *Cleaning as you go*, pulire mentre si lavora, è il terzo, dopo la pianificazione (*planning is prime*) e la disposizione degli spazi e dei movimenti (*arranging spaces, perfecting movements*). Il punto rilevante per questo articolo è che nel libro la pulizia non è un'attività separata dal lavoro, ma una parte del lavoro stesso, eseguita in continuazione.
> La stessa cultura è raccontata, con toni molto più crudi, in *Kitchen Confidential* di Anthony Bourdain (2000), da cui viene la frase forse più citata sul tema: "Mise-en-place is the religion of all good line cooks", la mise en place è la religione di tutti i buoni cuochi di linea. Per Bourdain la postazione in ordine non è una questione estetica, ma la condizione per reggere il ritmo del servizio.
> Fonte: [Penguin Random House — Work Clean](https://www.penguinrandomhouse.com/books/546003/work-clean-by-dan-charnas/9781623365929) · [Tasting Table — The pre-cooking ritual Anthony Bourdain always completed](https://tastingtable.com/1612604/anthony-bourdain-mise-en-place-ritual)

## Il paradosso di chi pulisce da solo

C'è però un problema. In una cucina dove nessun altro pulisce, chi pulisce mentre cucina ci mette di più: non pulisce solo il proprio disordine, sgombera anche lo spazio lasciato dagli altri. È il prezzo della Boy Scout Rule quando la segue una persona sola. Il costo si vede nel suo output più lento; il beneficio invece è invisibile, perché si distribuisce sul lavoro di tutti gli altri. Il risultato è che questa persona viene spesso criticata perché è più lenta, mentre il motivo del ritardo resta nascosto.

Nel software, allo sviluppatore che pulisce il file che sta toccando viene chiesto spesso perché la sua stima è più lunga di quella dei colleghi. A quel punto ha due strade: andarsene o smettere di pulire. La maggior parte sceglie una delle due, perché restare costa il doppio: si sente ripetere di continuo che è lento, ed è costretto a lavorare in un ambiente in cui non vorrebbe lavorare. In entrambi i casi il team perde l'unica persona che stava tenendo le cose in ordine.

C'è una terza possibilità: che anche il resto del team cominci a pulire. Succede quando il beneficio diventa visibile, per esempio quando chi arriva nuovo trova gli attrezzi al loro posto. Oppure quando la leadership guarda lo stato dello spazio di lavoro e non solo la velocità di consegna. A quel punto chi pulisce non è più il più lento: diventano tutti più veloci, perché sparisce la tassa nascosta del disordine. Non si perde più tempo a cercare gli attrezzi o a spostare quello che è in mezzo; nel codice, si scrive direttamente la riga che serve senza prima spostare cose che non c'entrano. E le persone sono più contente, perché la fatica veniva più dal disordine che dal lavoro in sé. Chi può scegliere, adesso, resta.

> [!info] Approfondimento aggiunto in fase di compilazione — come si rende visibile il beneficio: il refactoring dentro il lavoro, non accanto
> Il paradosso descritto dall'autore nasce dal fatto che la pulizia viene vista come un'attività in più, che allunga la stima. La letteratura sul refactoring risponde spostandola *dentro* il lavoro di feature, dove non può più essere trattata come un costo separato.
> **Opportunistic refactoring.** Martin Fowler (2011) descrive il refactoring come qualcosa che si fa "opportunisticamente": ogni volta che qualcuno trova codice poco chiaro o mal strutturato, lo sistema in quel momento, o almeno lascia il codice un po' meglio di come l'ha trovato. Fowler lo collega esplicitamente alla stessa *camp site rule* di Uncle Bob e sostiene che il refactoring non dovrebbe comparire come attività pianificata a parte, ma essere parte normale del lavoro su ogni feature.
> **Preparatory refactoring.** È la forma più difendibile davanti a chi chiede "perché la tua stima è più lunga?". Prima di aggiungere una funzionalità, si ristruttura il codice esistente in modo che la funzionalità diventi semplice da aggiungere. Kent Beck l'ha riassunta in una frase rimasta famosa: *"make the change easy (warning: this may be hard), then make the easy change"*. Il refactoring qui non è pulizia per la prossima persona, ma la strada più rapida per consegnare la feature corrente: il beneficio torna subito a chi lo fa.
> **La Design Stamina Hypothesis.** Sempre Fowler sostiene che, senza attenzione al design, si va più veloci solo all'inizio: dopo un periodo che secondo la sua esperienza si misura in settimane, non in mesi, le curve si incrociano e il codebase ben tenuto diventa il più veloce. È lo stesso argomento di [[is-high-quality-software-worth-the-cost|Is High Quality Software Worth the Cost?]].
> Fonte: [Martin Fowler — Opportunistic Refactoring](https://www.martinfowler.com/bliki/OpportunisticRefactoring.html) · [Martin Fowler — An example of preparatory refactoring](https://martinfowler.com/articles/preparatory-refactoring-example.html) · [Martin Fowler — Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html)

## La manutenzione continua è indispensabile

Si può pulire in due modi: mentre si lavora o a fine turno. Pulire mentre si lavora mantiene l'ordine e permette di tenere la velocità su periodi lunghi. Pulire solo alla fine funziona per i turni brevi; man mano che il turno si allunga la velocità cala, perché ogni nuovo piatto parte in un ambiente più disordinato del precedente.

Il problema è che una codebase è un servizio che non finisce quasi mai. Dietro ogni feature consegnata ce n'è un'altra. Chi rimanda la pulizia alla "fine" si ritrova rallentato per mesi prima di arrivarci, ammesso che ci arrivi. Qualunque modo si scelga, resta valida una regola essenziale: il turno dopo deve trovare la cucina pulita. Chi arriva domani, che sia un collega o noi stessi fra tre mesi, non dovrebbe dover cominciare spostando le pentole lasciate sul fornello. È la Boy Scout Rule vista dalla parte della persona che viene dopo.

## L'eccezione della cucina di casa

La cucina di casa è diversa da quella di un ristorante. Quando si cucina per sé è accettabile lasciare disordine, perché il servizio è breve e il costo lo paga chi cucina. Nel software questo corrisponde allo **spike**: codice scritto per imparare qualcosa o per rispondere a una domanda, destinato a essere buttato. Lì il disordine va bene. Il problema nasce quando la cucina di casa diventa per sbaglio un ristorante: il codice dello spike resta in produzione e qualcun altro deve mantenerlo.

> [!info] Approfondimento aggiunto in fase di compilazione — cos'è uno spike in Extreme Programming
> Lo *spike solution* è una pratica di Extreme Programming: un esperimento rapido, quasi a forza bruta, per imparare una cosa sola (se una libreria fa quello che serve, quanto costa davvero una storia, se un approccio tecnico regge), ridurre il rischio e rendere più affidabile una stima. Le regole di XP dicono esplicitamente che la maggior parte degli spike non è abbastanza buona da essere tenuta: bisogna aspettarsi di buttarla. James Shore e Shane Warden, in *The Art of Agile Development*, aggiungono un dettaglio che conta per la discussione qui sotto: uno spike non chiama il codice di produzione, è un programma a parte, piccolo e isolato. Ron Jeffries, uno dei fondatori di XP, ha una posizione un po' più flessibile: racconta di aver provato a scrivere gli spike in forma di unit test dentro il build, notando però che erano rumorosi e ogni tanto disturbavano l'esecuzione dei test. In tutte le versioni resta fermo il punto: lo spike è usa e getta, e il suo prodotto è la conoscenza, non il codice.
> Fonte: [c2.com — Spike Solution](https://c2.com/xp/SpikeSolution.html) · [James Shore — The Art of Agile Development: Spike Solutions](https://www.jamesshore.com/v2/books/aoad1/spike_solutions) · [O'Reilly — Extreme Programming Installed: Spike Solution](https://www.oreilly.com/library/view/extreme-programming-installed/0201708426/0201708426_ch06lev1sec3.html)

## La pulizia è al servizio della consegna

Una cucina pulita non è l'obiettivo: l'obiettivo è il piatto. Uno chef che passa tutto il turno a lucidare i banconi mentre le comande si accumulano non sta lavorando meglio, sta lavorando sulla cosa sbagliata. Con il codice vale lo stesso: la pulizia non è un motivo per smettere di consegnare, e non è nemmeno una scusa per buttare giù tutto e ripartire da zero. Si pulisce solo ciò che è d'intralcio adesso e ciò che ostacolerà la prossima persona, non di più.

Lo stesso confine vale anche dall'altra parte. Un management che pretende velocità senza concedere il tempo di pulire si ritroverà con consegne sempre più lente. L'articolo si chiude con un invito: chi ha lavorato in un ambiente così, o ha trovato il modo di convincere il proprio team a pulire mentre lavora, è invitato a scrivere all'autore.

## Note e riflessioni personali

**Il livello della cucina conta: l'eccellenza è maniacale.** Daniele nota quanto sia impressionante che la "tecnologia" della cucina sia la stessa del software, e quanto il parallelo serva a mostrare che c'è anche una questione di livello di competenza. Nelle cucine dei ristoranti di basso livello la pulizia continua funziona meno bene; in quelle di alto livello è maniacale. Allo stesso modo, nello sviluppo software sembra impossibile fare refactoring continuo, applicare la Boy Scout Rule e tenere la barra alta, ma i team che fanno eccellenza fanno esattamente questo. Daniele ha chiesto esplicitamente di cercare reference su questo punto: sono raccolte nel box qui sotto.

> [!info] Approfondimento aggiunto in fase di compilazione — reference: l'eccellenza è disciplina continua, in cucina come nel software
> **In cucina.** Le fonti sulla cucina professionale confermano l'intuizione di Daniele, con un'avvertenza: nessuna di quelle trovate misura la differenza fra cucine di alto e basso livello, ma descrivono la disciplina della pulizia continua come un tratto distintivo dei cuochi migliori. *Work Clean* nasce proprio dall'osservazione di chef come Thomas Keller e Alfred Portale, che portano la mise en place a un livello quasi rituale, e la presenta come l'insieme di abitudini che separa i professionisti dai dilettanti. Bourdain, in *Kitchen Confidential*, chiama la mise en place "la religione di tutti i *buoni* cuochi di linea": la parola "buoni" è il punto. La pulizia continua non è ciò che si fa quando c'è tempo: è ciò che permette ai migliori di reggere un ritmo che gli altri non reggono.
> **Nel software.** Qui le evidenze sono più solide, perché esistono studi su larga scala.
> - **La ricerca DORA** (*Accelerate*, Forsgren, Humble, Kim, 2018, e i report State of DevOps successivi) ha mostrato che i team con le migliori prestazioni di delivery sono *contemporaneamente* più veloci e più stabili, smentendo il trade-off fra velocità e qualità. Fra le capability tecniche che predicono queste prestazioni c'è la **code maintainability**, cioè la facilità di trovare, riusare e cambiare il codice, gestendo in modo attivo il debito tecnico e di design. È la versione misurata del "i team eccellenti tengono la barra alta". Si veda [[../book/accelerate|Accelerate]] e il topic [[../../topics/dora|DORA]].
> - **Extreme Programming** (Kent Beck, 1999) mette il refactoring continuo fra le pratiche quotidiane, non fra le attività straordinarie: è il terzo passo del ciclo red-green-refactor, ripetuto più volte all'ora. Non a caso XP è nato in un contesto, il progetto C3 in Chrysler, in cui l'obiettivo dichiarato era portare le buone pratiche "al massimo". Si veda [[../book/extreme-programming-explained|Extreme Programming Explained]].
> - **Fowler**, con l'*opportunistic refactoring* e la *Design Stamina Hypothesis* (box più sopra), sostiene che i team migliori non producono zero cruft: ne producono meno e ne rimuovono abbastanza da continuare ad andare veloci. È la differenza fra la cucina che non si sporca mai, che non esiste, e quella che si pulisce di continuo.
> - **Lo studio Code Red** (Tornhill, Borg, 2022, box più sopra) dà il rovescio della medaglia in numeri: nel codice trascurato i difetti sono 15 volte di più e lo sviluppo richiede più del doppio del tempo.
> Messi insieme, questi dati sostengono la stessa conclusione di Daniele: la pulizia continua non è un lusso dei team che hanno tempo, è uno dei motivi per cui i team migliori *hanno* tempo.
> Fonte: [Penguin Random House — Work Clean](https://www.penguinrandomhouse.com/books/546003/work-clean-by-dan-charnas/9781623365929) · [Google Cloud / DORA — Code maintainability](https://dora.dev/capabilities/code-maintainability/) · [Martin Fowler — Opportunistic Refactoring](https://www.martinfowler.com/bliki/OpportunisticRefactoring.html) · [Tornhill, Borg — Code Red (arXiv)](https://arxiv.org/abs/2203.04374)

**Lo spike non è "non pulire per un po'": è una postazione a parte.** Il paragone con lo spike convince meno Daniele. Se lo spike fosse davvero "non pulire per un po' di tempo", nella cucina condivisa si finirebbe per sporcare lo spazio in cui lavorano anche gli altri, e quindi inquinare il loro lavoro. Daniele vede lo spike più come cucinare in una zona d'appoggio: un altro posto, dove ci si può sporcare di più, sapendo che nel frattempo gli altri continuano a servire i clienti dalla linea principale.

La lettura di Daniele è più vicina alla definizione originale di XP di quella dell'articolo. Come riportato nel box sullo spike, Shore e Warden lo descrivono come un programma a parte che non chiama il codice di produzione, e le regole di XP chiedono di aspettarsi di buttarlo. Il disordine dello spike è quindi accettabile proprio perché è *isolato*, non perché è *breve*. Il rischio indicato dall'autore (lo spike che finisce in produzione) diventa, in questa lettura, un errore di separazione: qualcuno ha portato il piatto della zona d'appoggio direttamente in sala. La metafora della cucina di casa coglie il "chi paga il costo", ma non il "dove si sporca", che è la parte che protegge il team. In pratica, uno spike ben fatto vive in un branch, in una cartella o in un repository separati, ha una scadenza, e alla fine produce una decisione o una stima, mentre il codice di produzione viene riscritto da zero, pulito, con i test.

## Sintesi

L'articolo usa la cucina per rendere visibile un costo che nel software resta invisibile: il disordine non blocca il lavoro, lo rallenta un po' a ogni compito, e la lentezza diventa la normalità. È l'interesse sul debito di cui parlava Cunningham, a cui si aggiunge un costo umano: la frustrazione, che allontana proprio le persone più brave. La risposta delle cucine professionali è pulire mentre si lavora; nel software si chiama Boy Scout Rule. Il contributo originale dell'autore è il **paradosso di chi pulisce da solo**: il costo della pulizia ricade su chi la fa, il beneficio si distribuisce su tutti, e chi pulisce sembra lento, finché se ne va o smette. Se ne esce solo quando la disciplina diventa collettiva, perché il beneficio diventa visibile o perché la leadership guarda lo stato della codebase e non solo la velocità. Due confini chiudono il ragionamento: lo spike può essere disordinato perché è usa e getta (e, per Daniele, soprattutto perché è isolato dal codice condiviso), e la pulizia è al servizio della consegna, non un fine. Le fonti aggiunte (Work Clean, Bourdain, DORA, XP, Fowler, Code Red) confermano l'intuizione di Daniele: la pulizia continua e maniacale è un tratto dei migliori, in cucina come nei team software.

## Vedi anche

- Topic collegati: [[../../topics/tech-debt|Tech Debt]] · [[../../topics/clean-code|Clean Code]] · [[../../topics/technical-excellence|Technical Excellence]] · [[../../topics/refactoring|Refactoring]] · [[../../topics/extreme-programming|Extreme Programming]] · [[../../topics/dora|DORA]]
- Persone: [[../person/matteo-pipitone|Matteo Pipitone]] · [[../person/ward-cunningham|Ward Cunningham]] · [[../person/robert-c-martin|Robert C. Martin]] · [[../person/martin-fowler-software-engineer|Martin Fowler]] · [[../person/kent-beck|Kent Beck]]
- Libri in archivio: [[../book/clean-code-a-handbook-of-agile-software|Clean Code]] · [[../book/accelerate|Accelerate]] · [[../book/extreme-programming-explained|Extreme Programming Explained]] · [[../book/refactoring-improving-the-design-of-existing-code|Refactoring]]
- Articoli collegati: [[cose-il-debito-tecnico-e-come-affrontarlo-in-modo|Cos'è il debito tecnico e come affrontarlo in modo Agile]] · [[tech-debt-explained-to-everyone|Tech Debt Explained to Everyone]] · [[is-high-quality-software-worth-the-cost|Is High Quality Software Worth the Cost?]] · [[refactoring-economic-benefit|The Economic Benefit of Refactoring]] · [[the-three-year-bill-why-fast-teams-slow-down|The Three-Year Bill]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/il-piatto-esce-lo-stesso/content.md`
- Articolo originale: [matteopipitone.it](https://www.matteopipitone.it/blog/il-piatto-esce-lo-stesso/)
- Fonti citate dall'articolo: Ward Cunningham, *The WyCash Portfolio Management System*, OOPSLA 1992 · Robert C. Martin, *Clean Code*, 2008 · Dan Charnas, *Work Clean*, 2016
