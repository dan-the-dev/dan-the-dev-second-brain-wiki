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
updated: 2026-08-20
---

# Accelerate

**Autori: [[../person/nicole-forsgren|Nicole Forsgren]], Jez Humble, Gene Kim**

*Accelerate* è la sintesi in forma di libro del programma di ricerca annuale "State of DevOps" (poi diventato DORA), costruito su oltre 23.000 risposte a survey raccolte in tutto il mondo, provenienti da più di 2.000 organizzazioni diverse — da piccole startup a grandi enterprise, sia su nuovi sistemi che su codice legacy. La ricerca si è sviluppata in quattro fasi successive (2014-2017), ciascuna con domande via via più mirate: la prima fase (2014) chiede se la consegna del software si può misurare in modo significativo e se ha un impatto sull'organizzazione; la seconda (2015) rivalida i risultati e indaga l'impatto delle pratiche tecniche, dell'automazione e delle pratiche di lean management, incluso il loro effetto su ansia da codice e burnout; la terza (2016) esplora se la sicurezza rallenta o aiuta il processo, se il trunk-based development contribuisce alla delivery, e il ruolo del lean product management; la quarta (2017) indaga le pratiche architetturali, l'impatto della leadership trasformazionale e gli effetti della software delivery anche in ambito no-profit.

## Capacità, non maturità

Il libro parte da una scelta metodologica netta: rifiutare i "modelli di maturità" a favore di **modelli di capacità**. La critica ai modelli di maturità è su quattro fronti: presuppongono un traguardo finale — come se un'organizzazione potesse "arrivare" a uno stato maturo ed essere finita — mentre i modelli di capacità puntano al miglioramento continuo, riconoscendo che il panorama tecnologico e di business cambia costantemente; impongono spesso lo stesso set di pratiche e strumenti a ogni team in modo rigido (Livello 1 e Livello 2 uguali ovunque), mentre i modelli di capacità sono dinamici e permettono ad aree diverse dell'organizzazione di percorrere strade diverse; misurano la competenza tecnica in sé, senza collegarla agli outcome di business, generando vanity metric che non dicono nulla sull'impatto reale; e suggeriscono un livello statico di tecnologia, processo e capacità da raggiungere, invece di un paradigma di miglioramento continuo. La ricerca ha identificato 24 capacità chiave che guidano il miglioramento delle performance di delivery — e attraverso di esse, delle performance organizzative. Il divario fra team ad alte prestazioni e team a basse prestazioni misurato dalla ricerca è enorme: 46 volte più deploy frequenti, 440 volte più veloci nel lead time, 170 volte più rapidi nel recupero da un'interruzione, 5 volte meno cambi falliti.

## Misurare la performance: le quattro metriche DORA

Misurare le performance nel software è difficile, perché l'inventario del lavoro è per sua natura invisibile. I tentativi tradizionali di misurazione — righe di codice, velocity, utilizzo — vengono tutti respinti perché misurano output, non outcome. Le righe di codice (LOC) sono inutili: in generale scrivere meno codice è meglio, ma la metrica non dice nulla sul valore di business generato. La velocity è relativa al singolo team, non è una misura oggettiva confrontabile fra team diversi. L'utilizzo al 100% è addirittura dannoso: dovrebbe sempre esistere una riserva di tempo libero nel sistema, perché la teoria delle code ci dice che più un team si avvicina al 100% di utilizzo, più il lead time tende all'infinito — più il team è occupato, più lento diventa qualsiasi nuovo lavoro. Una misura efficace deve avere due caratteristiche: essere concentrata su outcome globali, per evitare che i team competano l'uno contro l'altro, ed essere concentrata su outcome, non su output.

Le quattro metriche scelte dal libro — divenute poi lo standard noto come **DORA metrics** — sono le seguenti.

**Lead time di consegna (Delivery Lead Time)**: il tempo che intercorre fra il momento in cui un cliente fa una richiesta e il momento in cui quella richiesta viene soddisfatta. Usarlo come metrica è un'idea presa in prestito direttamente dal pensiero Lean, e sposta l'attenzione dalla produttività interna al tempo di attraversamento realmente percepito dal cliente.

**Frequenza di deploy (Deployment Frequency)**: quanto spesso il software arriva effettivamente in produzione. È anche una proxy indiretta della dimensione dei batch di lavoro: più frequente è il deploy, più piccolo — e quindi meno rischioso — è ogni singolo cambiamento rilasciato.

**Tempo di ripristino del servizio (MTTR — Mean Time To Recover)**: quanto tempo serve per ripristinare il servizio dopo un'interruzione o un incidente in produzione. Misura la capacità dell'organizzazione di reagire quando, non se, qualcosa va storto.

**Tasso di cambi falliti (Change Fail Rate)**: la percentuale di cambiamenti che, una volta rilasciati in produzione, richiedono un intervento correttivo — un rollback, un hotfix, una patch d'emergenza.

Il dato controintuitivo centrale del libro emerge proprio da queste quattro metriche prese insieme: non esiste un trade-off fra velocità e stabilità. I team ad alte prestazioni sono migliori su *entrambi* gli assi contemporaneamente — velocità e qualità si rinforzano a vicenda, non si scambiano.

## Cultura organizzativa: il modello di Westrum

Il libro adotta la tassonomia del sociologo Ron Westrum per classificare le culture organizzative in tre tipi, ciascuno con un modo caratteristico di trattare l'informazione.

**Cultura patologica**: caratterizzata da un'ampia presenza di paura e minaccia. Le persone trattengono le informazioni o le trattengono per motivi politici — o le distorcono per apparire meglio di come stanno andando realmente le cose.

**Cultura burocratica (orientata alle regole)**: i dipartimenti si proteggono a vicenda, ognuno insiste sulle proprie regole e agisce "secondo il proprio libro". Non è necessariamente un male: le regole rappresentano la conoscenza accumulata dell'organizzazione e servono a garantire equità, evitando trattamenti preferenziali o discriminatori. Il problema nasce quando seguire le regole diventa più importante che raggiungere la missione.

**Cultura generativa (orientata alla performance)**: focalizzata sulla missione — "come raggiungiamo il nostro obiettivo?". È il tipo di cultura che il libro individua come predittore di migliori performance organizzative, perché abilita un flusso di informazione più efficace attraverso tre meccanismi: collaborazione più efficace, con alta fiducia sia orizzontale che verticale; enfasi sulla missione, che permette di mettere da parte le questioni personali o di dipartimento che una cultura burocratica invece amplifica; gerarchia meno rilevante nel determinare chi ha voce in capitolo.

Una buona informazione, secondo il libro, ha tre caratteristiche: risponde alle domande di cui chi la riceve ha bisogno, arriva in tempo utile, ed è presentata in un modo che chi la riceve può effettivamente usare. Una cultura generativa ha inoltre alcuni prerequisiti — fiducia e cooperazione fra le persone, una qualità più alta nel prendere decisioni, una migliore gestione delle persone — e su questo il libro è netto: "chi fa parte di un team conta meno di come i membri del team interagiscono, strutturano il proprio lavoro e vedono il proprio contributo". È tutta una questione di dinamiche di team, non di talento individuale isolato. Sul come cambiare la cultura, la citazione chiave del libro è: "il modo per cambiare la cultura non è prima cambiare come le persone pensano, ma iniziare cambiando come le persone si comportano" — cioè implementare pratiche Agile concrete cambia la cultura, non il contrario.

## Continuous Delivery: i cinque principi

Il libro definisce la Continuous Delivery come l'insieme di capacità che permette di portare in produzione, o nelle mani degli utenti, ogni tipo di cambiamento — feature, modifiche di configurazione, bugfix, esperimenti — in modo sicuro, veloce e sostenibile. La ricerca poggia su cinque principi.

**Costruire la qualità nel processo (Build quality in)**: investire in una cultura in cui ogni problema viene rilevato il più rapidamente possibile, supportati sia da strumenti che da persone — la qualità non si testa alla fine, si costruisce lungo tutto il processo.

**Lavorare in piccoli batch**: suddividere il lavoro in pezzi molto più piccoli per ottenere feedback essenziale rapidamente. Comporta un certo overhead di coordinamento, ma è un investimento ampiamente ripagato.

**Il computer esegue i compiti ripetitivi, le persone risolvono i problemi**: investire nel semplificare e automatizzare tutto il lavoro ripetitivo — regression testing, deployment del software — per liberare le persone e destinarle al lavoro di problem-solving a valore più alto.

**Perseguire senza sosta il miglioramento continuo**: i team ad alte prestazioni non sono mai soddisfatti dello stato attuale; il miglioramento è parte del lavoro quotidiano, non un'iniziativa separata da schedulare quando c'è tempo.

**Tutti sono responsabili**: throughput, qualità e stabilità sono risultati raggiungibili solo attraverso la stretta collaborazione di tutte le persone coinvolte nel processo — non responsabilità di un singolo team o di un singolo ruolo.

Per implementare con successo la CD, il libro individua tre fondamenta pratiche. Il **configuration management completo** richiede di essere in grado di provisionare gli ambienti e di costruire, testare e distribuire il software in modo completamente automatico a partire da ciò che è versionato. La **Continuous Integration**, seguendo il principio dei piccoli batch, richiede di integrare quotidianamente i propri cambiamenti sul branch principale, con ogni cambiamento che innesca un processo di build che include l'esecuzione dei test unitari — se qualunque parte del processo fallisce, gli sviluppatori la sistemano immediatamente. La **Continuous Testing** richiede che il test non sia qualcosa che si fa solo a "lavoro finito", ma parte dell'intero processo: test automatici, unitari e di accettazione, eseguiti a ogni commit ma anche localmente e molto frequentemente da ogni sviluppatore, mentre i tester conducono exploratory testing in modo continuo sull'ultima versione disponibile.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il dato sul version control della configurazione — più correlato alle performance di delivery del version control del codice applicativo stesso — è uno dei risultati più citati (e sorprendenti) della ricerca DORA: la configurazione viene tipicamente trattata come questione secondaria, ma i dati suggeriscono che è proprio lì che si annidano i colli di bottiglia nascosti della maggior parte delle organizzazioni.

## L'impatto della Continuous Delivery

Implementare pratiche di CD migliora anche la cultura organizzativa, non solo la velocità tecnica. La ricerca dimostra un impatto positivo su due capacità dirette: la possibilità di rilasciare in produzione on demand, e un feedback rapido sulla qualità e sulla deployability del sistema, disponibile a chiunque ne abbia bisogno. Gli impatti organizzativi misurati includono una più forte identificazione con l'organizzazione, un livello più alto di performance di delivery (lead time, frequenza di deploy, tempo di ripristino), un tasso di cambi falliti più basso, e una cultura più generativa e orientata alla performance. La CD si è dimostrata anche capace di aiutare a realizzare uno dei dodici principi del Manifesto Agile — "i processi agili promuovono uno sviluppo sostenibile: sponsor, sviluppatori e utenti dovrebbero essere in grado di mantenere un ritmo costante indefinitamente" — attraverso un minore livello di deployment pain e una riduzione del burnout del team. Anche sul fronte della qualità gli impatti sono positivi: la percezione di qualità da parte del team migliora, così come la percentuale di tempo speso in lavoro non pianificato e la percentuale di tempo speso a lavorare su difetti segnalati dagli utenti finali diminuiscono.

## Pratiche di CD: cosa funziona e cosa no

Sul **version control**, la ricerca mostra che tenere sotto controllo di versione la configurazione di sistema e applicativa è correlato alle performance di delivery in modo ancora più forte del semplice versionamento del codice applicativo — la configurazione è spesso trattata come questione secondaria, ma è una convinzione errata. Sul **test automation**, due pratiche predicono in modo affidabile buone performance IT: avere test automatici affidabili (abbastanza da poter dire "se il test è verde, si può rilasciare") e avere gli sviluppatori stessi, non solo i tester, che creano e mantengono i test di accettazione — questo non significa eliminare i tester, il cui ruolo resta essenziale nel manual testing esplorativo, di usabilità e di accettazione, oltre che nell'aiutare gli sviluppatori a far evolvere la suite di test automatici. Sul **test data management**, occorre essere in grado di creare un set di dati fittizi, adeguato e abbastanza grande da eseguire l'intera suite di test. Sul **trunk-based development**, i team che ottengono i risultati migliori hanno meno di tre branch attivi contemporaneamente, con branch dal ciclo di vita molto breve (meno di un giorno), e non hanno mai code freeze o periodi di stabilizzazione — feature branch e GitFlow, secondo la ricerca, restano appropriati soprattutto per progetti open source. Sull'**information security**, la raccomandazione è di incorporare la sicurezza informativa direttamente nel processo di delivery, non come fase separata a valle.

## Architettura: accoppiamento debole, non tipo di sistema

L'architettura del software e dei servizi da cui dipende può essere una barriera significativa sia al tempo che alla stabilità del processo di rilascio. Un risultato controintuitivo della ricerca: il tipo di sistema — la ricerca ne classifica dieci: sistemi greenfield di nuova costruzione, sistemi di engagement usati dall'utente finale, sistemi di record usati per memorizzare informazioni critiche di business, software custom sviluppato da terzi, software custom sviluppato internamente, software commerciale pacchettizzato, software embedded, software con una componente installata dall'utente (incluse le app), software non-mainframe eseguito su server di altre aziende, software non-mainframe eseguito su server propri, e software mainframe — ha un impatto limitato sulle performance di delivery. L'eccezione sono il software custom sviluppato da terzi e i sistemi mainframe, entrambi correlati a performance più basse; per tutti gli altri tipi non esiste una correlazione significativa fra tipo di sistema e performance.

Ciò che conta davvero è se il sistema — e il team che lo costruisce e lo mantiene — è **debolmente accoppiato**, misurato su due assi: la deployability, cioè la capacità di rilasciare o distribuire un servizio in modo indipendente dagli altri, e la testability, cioè la capacità di eseguire la maggior parte dei test senza bisogno di un ambiente integrato. Il libro applica la legge di Conway ("i team sono vincolati a produrre design che sono copie della struttura di comunicazione dell'organizzazione") in chiave prescrittiva con la **"inverse Conway maneuver"**: le aziende dovrebbero prima correggere la struttura di team e organizzazione, per abilitare poi l'architettura conseguente desiderata. Accoppiamento debole non significa assenza di comunicazione fra team: l'obiettivo è che la banda di comunicazione non venga saturata da decisioni minute e granulari, ma resti concentrata sulla discussione di obiettivi condivisi di alto livello. L'accoppiamento debole abilita anche lo scaling: i team ad alte prestazioni sono gli unici capaci di aumentare i deploy per sviluppatore man mano che aggiungono nuove persone al team — e sul fronte degli strumenti, il libro raccomanda di lasciare che i team scelgano i propri strumenti, fornendo per motivi di sicurezza una lista pre-approvata di librerie e pacchetti facilmente utilizzabili fra cui scegliere.

## Sicurezza, management lean e product development

Il movimento DevOps, nota il libro, è in realtà mal chiamato: il suo intento originale era portare insieme sviluppatori e operations per creare soluzioni win-win, ma questo stesso tipo di comportamento va ricercato ogni volta che funzioni diverse — non solo dev e ops, ma anche testing, product management e sicurezza informativa — non lavorano efficacemente insieme. Sullo **shift left on security**: costruire la sicurezza dentro lo sviluppo del software migliora sia le performance di delivery che la qualità della sicurezza stessa, impattando positivamente sulla capacità di raggiungere la Continuous Delivery. Il **movimento Rugged** propone alcuni nomi per estendere DevOps alla sicurezza — DevSecOps è uno, Rugged DevOps un altro — prendendo ispirazione dal Rugged Manifesto.

Sulle **pratiche di management lean**: limitare il work-in-progress per aumentare il throughput, gestione visuale che mostri le metriche chiave di qualità e produttività, uso quotidiano dei dati di performance applicativa e infrastrutturale per le decisioni di business. Queste pratiche riducono il burnout e portano verso una cultura più generativa. Sul **processo di cambiamento leggero**: la ricerca mostra che richiedere approvazione solo per i cambiamenti ad alto rischio non è correlato a performance software più alte — la raccomandazione è usare un processo semplice e leggero basato su peer review o pair programming, combinato con una pipeline di deployment che rilevi e rifiuti automaticamente i cambiamenti problematici.

Sul **product development lean**, quattro fattori sono risultati statisticamente significativi nel predire performance di delivery più alte: il team suddivide prodotti e feature in piccoli batch completabili in meno di una settimana, incluso l'uso di MVP; il team ha una buona comprensione — e visibilità — del flusso di lavoro dal business al cliente; l'organizzazione cerca attivamente e regolarmente feedback dai clienti e lo incorpora nel design del prodotto; il team ha l'autorità di creare e modificare le specifiche come parte del processo di sviluppo, senza bisogno di approvazione esterna. Su quest'ultimo punto il libro è netto sulla sperimentazione: se un team non può cambiare requisiti o specifiche senza autorizzazione in risposta a ciò che scopre — per esempio dal feedback dei clienti — la capacità di innovare viene inibita. Un effective product management guida le performance: il ciclo virtuoso fra maggiore performance di delivery e pratiche di lean product management produce risultati migliori per l'intera organizzazione.

## Sostenibilità: deployment pain e burnout

Il libro tratta la **deployment pain** — la paura e l'ansia che ingegneri e personale tecnico provano quando rilasciano codice in produzione — come un indicatore diretto di insostenibilità del processo, non come un fastidio marginale; è preoccupante anche quando sviluppatori e tester non hanno idea di cosa comporti effettivamente un deployment. Migliorare le capacità tecniche chiave riduce la deployment pain, tipicamente causata da tre fattori: software non scritto pensando alla deployability, cambi manuali richiesti come parte del processo di deployment, troppi passaggi di consegna fra team diversi. Per ridurla, il libro raccomanda di costruire sistemi progettati per essere rilasciati facilmente in più ambienti, garantire che lo stato del sistema in produzione sia riproducibile in modo automatico a partire dalle informazioni in version control (a eccezione, ovviamente, dei dati di produzione), e costruire intelligenza nell'applicazione e nella piattaforma in modo che il processo di deployment sia il più semplice possibile.

Sul **burnout** — esaurimento fisico, mentale o emotivo causato da eccesso di lavoro o stress — il libro elenca i fattori di rischio: sovraccarico di lavoro, incapacità di influenzare le decisioni che riguardano il proprio lavoro, ricompense insufficienti, ambiente di lavoro non supportivo, mancanza di equità nei processi decisionali, disallineamento fra valori individuali e valori organizzativi. I manager che vogliono evitare il burnout ai propri dipendenti dovrebbero concentrarsi su: favorire un ambiente di lavoro rispettoso e supportivo che valorizzi l'apprendimento dai fallimenti invece della colpevolizzazione; comunicare un forte senso di scopo; investire nello sviluppo dei dipendenti; chiedere ai dipendenti cosa impedisce loro di raggiungere i propri obiettivi e poi risolverlo; dare tempo, spazio e risorse per sperimentare e imparare; dare ai dipendenti l'autorità di prendere decisioni che riguardano il proprio lavoro e i propri risultati. Per ridurre o contrastare il burnout in generale, le leve principali su cui agire sono: cultura organizzativa, deployment pain, efficacia della leadership, investimento in DevOps, performance organizzative.

## Soddisfazione, identità ed engagement dei dipendenti

I dipendenti dei team ad alte prestazioni sono 2,2 volte più propensi a raccomandare la propria organizzazione a un amico come un ottimo posto in cui lavorare, e 1,8 volte più propensi a raccomandare il proprio team. Le aziende con dipendenti molto coinvolti (highly engaged) sono cresciute in ricavi 2,5 volte di più rispetto alle altre: l'employee engagement, conclude il libro, non è una metrica "feel good" fine a sé stessa, guida direttamente gli outcome di business. Quando i leader investono nelle proprie persone e le mettono in condizione di dare il meglio, queste si identificano più fortemente con l'organizzazione e sono disposte a fare uno sforzo extra per farla avere successo — nel mondo competitivo di oggi, la cosa migliore che si possa fare per prodotti, azienda e persone è istituire una cultura di sperimentazione e apprendimento. Le persone che si sentono supportate dal proprio datore di lavoro, che hanno gli strumenti e le risorse per fare il proprio lavoro, e che sentono che il proprio giudizio viene valorizzato, producono un lavoro migliore. E benché DevOps sia soprattutto una questione di cultura, la job satisfaction dipende fortemente anche dall'avere gli strumenti e le risorse giuste per lavorare: le buone pratiche tecniche DevOps sono un predittore diretto della soddisfazione lavorativa.

## Leadership trasformazionale

La leadership ha un impatto potente sui risultati — essere leader non significa avere persone che rispondono a te, significa ispirare e motivare chi ti circonda. Un buon leader influenza la capacità di un team di consegnare codice, progettare buoni sistemi e applicare i principi Lean. La leadership trasformazionale è essenziale per stabilire e sostenere norme culturali generative ad alta fiducia, creare tecnologia che abiliti la produttività degli sviluppatori riducendo i tempi di lead time e sostenendo infrastrutture più affidabili, supportare la sperimentazione e l'innovazione del team, e lavorare attraverso i silo organizzativi per raggiungere un allineamento strategico. La ricerca identifica cinque caratteristiche di un leader trasformazionale.

**Visione**: una comprensione chiara di dove si trova oggi l'azienda e di dove dovrebbe essere fra cinque anni.

**Comunicazione ispirazionale**: ispirare e motivare quando si comunica, anche — e soprattutto — in un contesto incerto o in continuo cambiamento.

**Stimolazione intellettuale**: sfidare le persone a pensare i problemi in modo diverso da come li hanno sempre pensati.

**Leadership supportiva**: avere a cuore i bisogni e i sentimenti personali di chi si guida.

**Riconoscimento personale**: riconoscere i traguardi e i miglioramenti, complimentarsi personalmente con le persone per il lavoro svolto.

## Il ruolo dei manager

I manager dovrebbero investire attivamente in iniziative DevOps per facilitare il proprio team: creare spazio e opportunità di apprendimento e miglioramento, assicurandosi che tutte le risorse necessarie siano disponibili per chiunque ne abbia bisogno; stabilire un budget dedicato alla formazione (anche il tempo conta come budget) e lasciare che le persone scelgano la formazione a cui sono interessate; incoraggiare lo staff a partecipare a conferenze ed eventi almeno una volta l'anno, condividendo poi quanto imparato con il team; organizzare hack day interni (hackathon) e "yak day" dedicati al debito tecnico; tenere mini conferenze interne regolari; dare allo staff tempo dedicato per sperimentare con nuovi strumenti e tecnologie.

Sul fronte della cultura, il libro propone alcune leve concrete. Per abilitare la collaborazione cross-funzionale: costruire fiducia con le proprie controparti in altri team, incoraggiare i praticanti a muoversi fra dipartimenti diversi, cercare attivamente, incoraggiare e premiare il lavoro che facilita la collaborazione. Per creare un clima di apprendimento: creare un budget di formazione e sostenerlo internamente, assicurarsi che il team abbia le risorse per un apprendimento informale e lo spazio per esplorare nuove idee, rendere sicuro fallire per costruire una cultura dell'innovazione, creare occasioni e spazio per condividere informazioni, incoraggiare condivisione e innovazione con demo day e forum. Per fare un uso efficace degli strumenti: garantire che il team possa scegliere i propri strumenti (a meno che non ci sia una ragione molto valida per non farlo), e fare del monitoring una priorità.

## Vedi anche

- [[../person/nicole-forsgren|Nicole Forsgren]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/accelerate/content.md`
