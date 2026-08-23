---
title: "Peopleware: Productive Projects and Teams"
type: book
author:
  - "Tom DeMarco"
  - "Timothy Lister"
topics: ["tech-lead", "leadership", "psychological-safety"]
status: in_progress
study:
  method: full_reading
  started_at: "2026-08-23"
raw_source: raw/knowledge/book/peopleware-productive-projects-and-teams/content.md
updated: 2026-08-23
---

# Peopleware: Productive Projects and Teams

**Autori: [[../person/tom-demarco|Tom DeMarco]], [[../person/timothy-lister|Timothy Lister]]**

> [!note] Lettura in corso — pagina aggiornata a ogni sessione
> Prima sessione di studio: 2026-08-23. Questa pagina copre finora la **Parte 1** del libro (Capitoli 1-2 su 39 capitoli totali, distribuiti in 6 parti) e viene tenuta aggiornata a ogni sessione di lettura, non solo al completamento del libro — scelta di metodo presa da Daniele il 2026-08-23 (vedi `raw/learning/decisions/2026-08-23.md`). Le sezioni sottostanti crescono progressivamente insieme alla lettura.

*Peopleware* nasce da un programma di ricerca degli autori basato su survey condotte su centinaia di progetti software e sulle persone che vi hanno partecipato, interpellate sulle cause che hanno portato quei progetti alla cancellazione, al rinvio o comunque a difficoltà rilevanti. Il libro rovescia l'assunto implicito di gran parte del management tecnico dell'epoca — che i problemi dello sviluppo software siano fondamentalmente problemi tecnici — sostenendo che la stragrande maggioranza dei problemi che un team incontra sono di natura **sociologica**, non tecnologica, e che gestire le persone come componenti modulari e intercambiabili di un sistema, per quanto sia la tentazione naturale di chi diventa manager partendo da un background tecnico, è un errore che va contro la natura stessa del lavoro intellettuale.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il termine "peopleware" non è stato coniato da DeMarco e Lister: la neologismo circolava già nella letteratura sui sistemi informativi. Peter G. Neumann lo aveva usato nel 1977 in un articolo intitolato "Peopleware in Systems", e Meilir Page-Jones lo aveva riproposto indipendentemente nel 1980 in *Practical Guide to Structured Systems Design*. È stato però il libro di DeMarco e Lister, pubblicato nel 1987, a portare il termine all'attenzione diffusa del settore, fissandolo nel vocabolario comune del management software come contraltare umano a "hardware" e "software".
> Fonte: [Wikipedia — Peopleware](https://en.wikipedia.org/wiki/Peopleware)

## Capitolo 1 — Somewhere today, a project is failing

Il punto di partenza del libro è quasi provocatorio: i progetti legati alla contabilità sono fra i più vecchi e più reinventati nella storia dell'informatica — esistono da quando esistono i computer, ci sono professionisti che potrebbero costruirli a occhi chiusi — eppure ancora oggi, da qualche parte, uno di questi progetti sta fallendo. Se la tecnologia per farli è più che matura, quasi banale, il fallimento non può dipendere da essa. Analizzando i dati raccolti dalle survey — rimossi i casi limite — gli autori non trovano **nessun singolo caso in cui il fallimento di un progetto sia spiegabile con problemi tecnologici**. Il dato quantitativo è netto: il 15% di tutti i progetti censiti arriva a una cancellazione, un annullamento o un rinvio; sui progetti più grandi, con orizzonti fino a 25 anni, la percentuale sale al 25%.

La causa più frequentemente citata dagli intervistati è "la politica". DeMarco e Lister però rifiutano questa etichetta come imprecisa: le persone tendono a raggruppare sotto "politica" un insieme eterogeneo di problemi — comunicazione carente, mancanza di personale, disincanto verso manager o clienti, scarsa motivazione, alto turnover — che in realtà appartengono a una categoria più precisa e più corretta: la **sociologia**. I problemi genuinamente politici sono, secondo gli autori, solo una piccola parte di questo insieme più ampio di problemi sociologici. La ragione per cui si preferisce comunque parlare di "politica" è quasi difensiva: descrivere un problema come politico permette di essere fatalisti al riguardo, di trattarlo come ingestibile e quindi di non doversene occupare. Ammettere invece che si tratta di un problema sociologico lo riporta dentro il perimetro di ciò che può essere osservato, compreso e — pur non essendo la competenza primaria di un tecnico — affrontato.

> [!info] Approfondimento aggiunto in fase di compilazione
> *Peopleware* fu pubblicato per la prima volta nel 1987 (Dorset House), con una seconda edizione rivista nel 1999 e una terza edizione nel 2013, quest'ultima con sei capitoli completamente nuovi oltre all'aggiornamento del materiale originale. La rivista *BYTE* lo recensì nel 1989 accostandolo esplicitamente a *The Mythical Man-Month* di [[../person/fred-brooks|Fred Brooks]] (1975) come testo di riferimento per i manager tecnici, riassumendone la tesi in una riga: "prendi le persone migliori, rendile felici, e lasciale libere di lavorare". Il parallelo con Brooks non è casuale: un anno prima di *Peopleware*, lo stesso Brooks aveva pubblicato il saggio *No Silver Bullet* (1986), sostenendo che non esiste alcuna singola innovazione tecnica capace di produrre un miglioramento di un ordine di grandezza nella produttività del software — una tesi complementare a quella di DeMarco e Lister: se la tecnologia non è la leva, resta la componente umana e organizzativa.
> Fonte: [Wikipedia — Peopleware](https://en.wikipedia.org/wiki/Peopleware:_Productive_Projects_and_Teams)

Anche i manager che concordano intellettualmente con questa lettura, però, raramente la applicano nel modo in cui dirigono i propri team: continuano a concentrarsi sulla gestione della componente tecnologica. Il motivo è duplice: quasi sempre arrivano al ruolo di manager perché erano bravi tecnicamente, e nessuno ha insegnato loro a gestire persone — mentre i problemi tecnici, per quanto difficili, restano comunque più semplici da affrontare rispetto a quelli relazionali e di comunicazione tra le persone. C'è anche un mito di fondo da sfatare: chi lavora nello sviluppo software tende a percepirsi come parte del mondo "high-tech", ma il vero high-tech — quello che produce le rivoluzioni tecnologiche di base — è ristretto a poche grandi organizzazioni; la maggior parte dei professionisti del settore *usa* quel lavoro nel proprio quotidiano, e opera in un contesto molto più umano e sociologico che genuinamente high-tech. Da qui la conclusione centrale del capitolo: la quasi totalità dei problemi che si incontrano in un sistema, in un'organizzazione o in un team è di natura sociologica, non tecnologica.

## Capitolo 2 — Make a Cheeseburger, Sell a Cheeseburger

### Dalla catena di montaggio al knowledge work

Il capitolo apre osservando che lo sviluppo software — un lavoro di *knowledge work* — è profondamente diverso dal lavoro di produzione industriale, ma la maggior parte dei manager tende comunque a importare nel proprio stile di gestione i riflessi appresi in contesti produttivi. In un ambiente di produzione ha senso voler eliminare completamente gli errori, minimizzare le interruzioni informali sul posto di lavoro, trattare i lavoratori come pezzi intercambiabili di un sistema, mantenere uno stato di lavorazione stabile e a ritmo costante, standardizzare le procedure secondo un manuale ed eliminare la sperimentazione, delegandola a un team centrale dedicato. In un contesto di produzione su larga scala questo funziona, perché l'obiettivo è eseguire al meglio istruzioni già definite. Applicato allo sviluppo software, questo stesso stile — la mentalità "make a cheeseburger" — è invece potenzialmente fatale: uccide lo spirito del team e sposta l'attenzione dai problemi reali. Per gestire i knowledge worker in modo efficace servono misure quasi opposte a quelle della produzione.

### Errori, sperimentazione e sicurezza psicologica

Fare errori occasionali è naturale e fa parte del processo per un knowledge worker, ma esiste un'associazione quasi istintiva — gli autori la definiscono "biblica" — fra l'errore e un senso di colpa. Lavorare direttamente su questo nodo è necessario. Un esempio citato è l'iterative design: si dà per scontato che sul tavolo finiranno molti progetti che verranno scartati, lavoro apparentemente "buttato" e quasi pensato per essere rifiutato — eppure questa pratica migliora enormemente il risultato finale, anche se nell'immediato può sembrare che ne aumenti i costi. Il contrario — un ambiente in cui gli errori non sono ammessi — porta le persone a scegliere sempre l'opzione più sicura e più difensiva, a non provare mai nulla di nuovo per paura delle conseguenze negative di un fallimento. Questo accade tipicamente quando i manager sistematizzano rigidamente il processo, impongono metodologie dall'alto o non lasciano ai membri del team alcuna decisione strategica: il livello tecnico può anche migliorare leggermente in queste condizioni, ma il livello sociologico crolla, generando problemi ben più gravi. L'approccio opposto — incoraggiare le persone a fare errori, chiedere quali altre strade sono state valutate di fronte a una soluzione proposta, far capire che nessuna scelta è "quella giusta" in senso assoluto, spingere verso esperimenti e tentativi quotidiani di miglioramento — è quello che il libro raccomanda.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il termine tecnico che oggi si usa per descrivere esattamente questa condizione — un ambiente in cui le persone si sentono libere di segnalare errori, fare domande e proporre idee senza temere conseguenze negative — è **sicurezza psicologica**, reso popolare accademicamente dalla ricercatrice di Harvard [[../person/amy-edmondson|Amy Edmondson]] a partire da un articolo del 1999 e poi sviluppato nel suo libro *The Fearless Organization* (già presente in questo archivio: [[../book/fearless-organization-creating-psychological|The Fearless Organization]]). *Peopleware*, pubblicato oltre un decennio prima che il termine venisse coniato in ambito accademico, ne descrive empiricamente la stessa dinamica osservata sul campo nei team di sviluppo software, senza però nominarla: un caso di convergenza fra osservazione pratica di settore e ricerca accademica successiva.
> Fonte: [Amy C. Edmondson — Psychological Safety and Learning Behavior in Work Teams (1999)](https://www.jstor.org/stable/2666999) · [[../topics/psychological-safety|Topic: Psychological Safety]]

Un fraintendimento correlato, sempre di origine industriale, è l'idea che il management consista nel far pensare solo il manager mentre gli altri eseguono — nel libro compare l'espressione informale "fare management vuol dire spaccare i culi" come sintesi caricaturale di questa visione. Su una catena di montaggio questo può anche funzionare; nel knowledge work no, perché i knowledge worker lavorano con il proprio cervello, non con le proprie mani soltanto, e per definizione ogni parte del loro lavoro richiede pensiero attivo. Applicare questo stile può anche mantenere le persone "attive" nel breve periodo, ma uccide la loro inventiva, la creatività e la capacità di pensiero — e il contraccolpo, anche se non immediato, arriva sempre. Il libro nota inoltre come questa pressione sia spesso superflua: la maggior parte dei knowledge worker ama il proprio lavoro e non ha bisogno di motivazione aggiuntiva esterna — semmai ha bisogno che qualcuno gli faccia capire che è meglio fare meno lavoro ma con più impatto.

### Le persone non sono componenti intercambiabili

Un altro fraintendimento mutuato dal mondo della produzione è che una persona possa essere facilmente sostituita da un'altra. Nel knowledge work questo non è vero, perché le persone fanno la differenza con la propria conoscenza e con la propria mente, non con un'operazione ripetibile. Il libro riporta due esempi contrapposti. Nel primo, un dipendente eccezionale, invitato a una review salariale, invece di chiedere un aumento chiede di poter migliorare la propria postazione di lavoro a casa: il manager, intelligente, coglie la richiesta e nel tempo l'azienda finisce per costruirgli un vero e proprio home office a proprie spese — un caso più unico che raro. Nel secondo, un manager preoccupato di essere "oscurato" dalla bravura dei propri collaboratori nota che uno di essi, spesso in trasferta, ha speso oltre il 50% in più della media sui pasti; lo redarguisce pubblicamente, senza accorgersi che il totale delle spese di quella persona era in realtà perfettamente sotto controllo — semplicemente aveva speso di più in quella specifica categoria, compensando altrove. Ogni persona è unica: è un valore da coltivare, non da eliminare per uniformità.

### Contro la "velocità di crociera"

Un ulteriore malinteso mutuato dalla catena di montaggio è l'idea di uno stato stabile — una "velocità di crociera" — come condizione desiderabile per un progetto. A meno che un progetto non venga cancellato, deve invece continuare a muoversi, evolvere e progredire. Il problema è che le persone vengono spesso valutate su metriche che alimentano proprio questo stato di crociera — quante righe di codice scrivono, quanta documentazione producono — senza che queste metriche riflettano un impatto reale sul successo del progetto. Il libro è netto su questo punto: una persona capace di generare un impatto vero vale più di due persone che semplicemente "fanno il proprio lavoro".

### Il tempo per pensare, non solo per fare

Una scusa ricorrente è di non avere mai il tempo di pensare al lavoro da fare, solo di eseguirlo. Ma quando a un team viene chiesto di completare un task, la percentuale di tempo che dovrebbe essere dedicata all'esecuzione pura non è mai il 100%: serve spazio per il brainstorming, per investigare metodi più efficaci, per capire come evitare o semplificare alcuni subtask, per studiare e migliorarsi, e anche solo per "staccare" e ricaricare il cervello. Troppo spesso il tempo di un team viene investito quasi interamente nel "fare" e troppo poco nel porsi le domande chiave — dobbiamo davvero farlo? come? quanto possiamo semplificarlo? sappiamo già come si fa, o dobbiamo investire tempo per scoprirlo? Più il problema è complesso, più — controintuitivamente — è importante dare spazio a queste domande, anche quando la pressione temporale sembra suggerire il contrario: la pressione, del resto, c'è quasi sempre, ma proprio per questo la qualità delle dinamiche di team diventa ancora più decisiva. Nonostante il consenso teorico su questo punto, la tendenza pratica resta quella opposta: si ragiona il proprio lavoro come un'attività individuale, e il tempo effettivamente speso in lavoro di squadra — inclusi studio, formazione e crescita — resta sotto il 5%, poco più di un giorno a settimana: una quota che il libro giudica ridicolmente bassa.

## Concetti chiave emersi finora

- Nessun progetto censito dalla ricerca è mai fallito per ragioni puramente tecnologiche; la quasi totalità dei problemi in un sistema, un'organizzazione o un team è di natura sociologica, non tecnologica — quello che le persone chiamano abitualmente (e impropriamente) "politica".
- Il knowledge work è strutturalmente diverso dal lavoro di produzione e richiede un management quasi opposto: standardizzazione, eliminazione degli errori e trattamento delle persone come componenti intercambiabili funzionano in fabbrica, non nello sviluppo software.
- Sperimentare, provare, commettere errori occasionali e imparare da essi fa parte della natura stessa del lavoro di un knowledge worker — ma sbagliare resta intrinsecamente difficile da accettare per un essere umano, e va lavorato in modo diretto.
- In un ambiente che non tollera l'errore, le persone scelgono sempre l'opzione più sicura e smettono di sperimentare per timore delle conseguenze; l'approccio opposto — incoraggiare esperimenti e tentativi quotidiani di miglioramento — produce risultati migliori.
- L'idea che il manager debba pensare e gli altri debbano solo eseguire può funzionare su una catena di montaggio, ma non nel knowledge work, dove ogni persona lavora per definizione con il proprio cervello.
- Le persone non sono intercambiabili: l'unicità individuale è un valore da coltivare, non un problema da uniformare.
- Un progetto non può procedere a "velocità di crociera": deve sempre evolvere; "righe di codice scritte" è un esempio di metrica che alimenta l'illusione di stabilità senza riflettere un impatto reale.
- "Non abbiamo tempo per pensare, dobbiamo solo fare" è una scusa che non regge: la pressione temporale è quasi sempre presente, ma va gestita, non usata per eliminare lo spazio di riflessione — spazio che diventa anzi più importante quanto più il problema è complesso.
- Il tempo dedicato dai team a collaborazione, studio e crescita — personale e di team, tecnica e di dominio — è tipicamente inferiore al 5%: una percentuale che il libro giudica troppo bassa (Daniele nota nei propri appunti un possibile confronto con una soglia più alta, indicativamente intorno al 20%, non ancora verificata nel testo — *[da confermare nelle prossime sessioni]*).

## Note di lettura di Daniele

Dopo la prima sessione, la cosa che colpisce di più è la chiarezza e la semplicità con cui Tom DeMarco riesce ancora una volta a spiegare questi concetti — la stessa qualità già notata leggendo *Slack* (vedi [[../book/slack-getting-past-burnout-busywork-and-the-myth|Slack]]) — e il modo in cui il libro usa gli esempi raccolti nei sondaggi per rendere concrete le tematiche affrontate.

## Prossimi passi

*My Takeaways* non ancora definiti: la lettura è alla prima sessione, i takeaway personali verranno aggiunti quando emergeranno con maggiore chiarezza, insieme ai capitoli restanti (Parti 2-6, dal Capitolo 3 in poi).

## Vedi anche

- [[../person/tom-demarco|Tom DeMarco]]
- [[../person/timothy-lister|Timothy Lister]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/peopleware-productive-projects-and-teams/content.md`
- [Wikipedia](https://en.wikipedia.org/wiki/Peopleware:_Productive_Projects_and_Teams)
