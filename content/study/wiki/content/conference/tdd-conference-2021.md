---
title: "TDD Conference 2021"
type: conference
year: 2021
topics: [tdd, agile-software-development, technical-excellence]
raw_source: raw/knowledge/conference/tdd-conference-2021/content.md
updated: 2026-08-19
---

# TDD Conference 2021

**First International TDD Conference** · sabato 10 luglio 2021 · [registrazione integrale](https://youtu.be/-_noEVCR__I) · [tddconf.com](http://tddconf.com/)

> [!info] Approfondimento aggiunto in fase di compilazione
> È stata la prima edizione internazionale di una conferenza interamente dedicata al Test-Driven Development, organizzata da Alex Bunardzic, sviluppatore con oltre trent'anni di esperienza specializzato in TDD ed Extreme Programming. Gli interventi sono stati successivamente raccolti in forma scritta da Codurance nel "TDD Knowledge Book" (Matheus Marabesi, ottobre 2021) e singolarmente riassunti da Maximiliano Contieri sul proprio blog e su DEV Community. L'iniziativa ha avuto seguito con una seconda edizione internazionale, segno che l'esperimento del 2021 ha trovato una comunità disposta a ripeterlo.
> Fonti: [Codurance — TDD Knowledge Book](https://www.codurance.com/publications/tdd-knowledge-book-insights-from-the-first-tdd-conference) · [maximilianocontieri.com — TDD Conference 2021, all talks](https://maximilianocontieri.com/tdd-conference-2021-all-talks) · [Second International TDD Conference](https://tddconference.github.io/)

## TDD all the things: BDD come lente migliore

Un filo conduttore dell'intera conferenza è che il BDD costituisca, di fatto, una definizione migliore dello stesso TDD, perché sposta il discorso dal "testare" al "descrivere comportamento" — è preferibile parlare di comportamento piuttosto che di test in senso stretto. Questo vale anche negli unit test scritti in stile TDD classico: si può strutturare il pensiero attorno alla forma Given/When/Then anche a livello di singolo test unitario, come nell'esempio riportato in sessione:

```
public void testShouldWaitForEventsToOccur()
{
    // GIVEN an automation element
    // WHEN we cause a slow event on that element
    // and we wait for the event
    // THEN we should be notified when the event occur
}
```

### Trattare le persone come legacy code

Una sessione ha usato una metafora insolita ma particolarmente efficace: **le persone hanno comportamenti pre-esistenti, sono come legacy code**. Come per il codice legacy, prima di introdurre un cambiamento nel comportamento di una persona (o di un team) bisogna prima "coprire" il comportamento esistente — nel caso delle persone, questo significa amplificare esplicitamente i segnali positivi già presenti — poi descrivere il comportamento desiderato (l'equivalente del test che fallisce) e infine ottenerlo (farlo passare). I tre modelli di feedback discussi in questa sessione sono presentati esplicitamente come tecniche di leadership tecnica, non di TDD in senso stretto: **amplificare i positivi** (ancorarsi al comportamento positivo già esistente e renderlo esplicito — ad esempio ringraziando concretamente per le cose fatte bene, assicurandosi che il valore di quel comportamento sia chiaro a chi lo mette in pratica); il **sandwich model fatto bene** (amplificare i positivi, poi descrivere l'esito desiderato — ma senza scrivere il codice al posto della persona, cioè senza risolvere il problema per loro); la **radical candour** (deve venire da un luogo di cura autentica, e presuppone che la persona con cui si parla abbia già ben chiara la stima che si ha di lei — ad esempio perché si è già praticato molto il "sandwich model" in precedenza).

### Il modello Dreyfus applicato al TDD

La stessa sessione ha usato il modello Dreyfus di acquisizione delle competenze per definire i livelli di padronanza del TDD, distinguendo cinque stadi: il **novizio** copia e modifica test esistenti, scrive i test dopo il codice invece che prima, riceve il lavoro da PM/PO senza contrattarne la forma, e cerca feedback in modo attivo; il **principiante con esperienza** a volte scrive test prima del codice, riesce a far partire il TDD da zero in modo occasionale, e comincia ad assegnarsi il lavoro in base alle proprie competenze; il **praticante (competente)** scrive sempre i test prima del codice, li usa per guidare il design (non solo per verificarlo), scrive test leggibili e significativi, e ha conversazioni con tester e rappresentanti di business prima di iniziare a lavorare; il **praticante esperto** insegna il TDD ad altri, sa quando usare lo spike-and-stabilize al posto del ciclo classico, rifattorizza per abitudine più che per sforzo cosciente, e lavora tipicamente in un flusso a uno o due elementi alla volta (single piece flow), concentrato sulle priorità più alte; l'**esperto** vero e proprio viene lasciato deliberatamente senza una descrizione definitiva nella sessione — un livello, forse, che si riconosce più facilmente di quanto si possa descrivere in anticipo.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il modello a cinque stadi (Novice, Advanced Beginner, Competent, Proficient, Expert) è stato proposto nel 1980 dai fratelli Stuart e Hubert Dreyfus attraverso una ricerca condotta presso l'Operations Research Center dell'Università di Berkeley, poi ampliato nel libro *Mind Over Machine* (1986). Un sesto stadio, la *Mastery*, è stato aggiunto successivamente da altri autori per descrivere chi non si limita più ad applicare intuitivamente un'abilità, ma cerca attivamente di espandere il proprio repertorio intuitivo, arrivando talvolta a trasformare l'intero dominio della disciplina.
> Fonte: [Wikipedia — Dreyfus model of skill acquisition](https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition)

Due concetti citati a margine della stessa sessione meritano di restare a disposizione anche fuori contesto. Lo **spike-and-stabilize** consiste nel provare rapidamente una o più soluzioni per ottenere feedback, per poi stabilizzare il risultato finale una volta eliminata l'incertezza principale: il risultato può essere indistinguibile da quello di un TDD classico, con la differenza che permette di ottenere feedback dagli stakeholder più rapidamente ed è più facile da modificare in risposta a quel feedback. Il **single piece flow** minimizza lo stock di lavoro in corso a un solo elemento per volta, per consegnare valore più rapidamente e ridurre gli sprechi legati al "magazzino" di lavoro non finito — a patto che più sviluppatori possano lavorare sullo stesso elemento contemporaneamente senza intralciarsi, altrimenti il tentativo produce esso stesso spreco.

## Perché potresti non voler usare il TDD

Una sessione ha affrontato con onestà le ragioni per cui il TDD è difficile da adottare, senza minimizzarle. Il TDD è descritto come una tecnica potente — cambia il modo di testare l'applicazione, cambia il modo di scrivere il codice, cambia il modo di pensare — ma con tre difficoltà distinte, ciascuna con una propria natura.

**È difficile iniziare**: il ciclo è semplice, ma semplice non significa facile. Sorgono continuamente domande su quale test scrivere e se sia davvero il test migliore possibile in quel momento, oltre a dubbi su come gestire la prima implementazione e il refactoring successivo. I test rossi spaventano all'inizio, ma vanno reinterpretati come alleati: test che restano *sempre* verdi nel lungo periodo cominciano, giustamente, ad apparire poco affidabili. Più esperienza si ha *senza* test e TDD, più è difficile iniziare: le proprie abitudini e tecniche di comfort consolidate vengono messe in discussione da un metodo che cambia tutto contemporaneamente — codice, test, modo di pensare. Il consiglio pratico offerto in sessione: osservare live coding altrui è un buon punto di partenza per superare questo ostacolo, perché permette di vedere concretamente le dinamiche in gioco.

**È difficile seguire il processo**: è facilissimo scrivere più codice di quanto il test richieda quando si è già sicuri di cosa serva alla fine — è controintuitivo procedere per piccoli passi quando la soluzione sembra già chiara in testa. Anche i piccoli aggiustamenti sono un requisito, ma dopo un po' la funzionalità diventa più chiara e una soluzione completa comincia a delinearsi nella mente, rendendo facile abbandonare il concetto di "piccolo passo". I benefici del TDD, inoltre, non sono tutti immediati: alcuni si manifestano solo dopo un po', il che non è un grande incentivo a restare fedeli al processo nei primi tempi. Il consiglio: seguire il processo senza giudicarlo, attenersi alle regole all'inizio, e dar loro fiducia per un periodo abbastanza lungo da vedere i benefici — ad esempio, un'intera funzionalità completata.

**È difficile fare il salto di livello**: quando si acquisisce esperienza e si vuole applicare il TDD a codice di produzione reale, la difficoltà cambia natura. I kata sono semplici — restano un ottimo punto di partenza — ma i prodotti reali portano con sé strumenti, requisiti, processi e persone: tutte variabili che i kata, per costruzione, eliminano. Il consiglio: esercitarsi molto con i kata, poi passare a problemi di vita reale.

## Il TDD Manifesto

Presentato in occasione del ventesimo anniversario dell'Agile Manifesto, il [TDD Manifesto](https://tddmanifesto.com/) nasce da una motivazione esplicita: colmare l'assenza di un documento di riferimento condiviso sui valori del TDD, in un'area circondata da molti fraintendimenti e priva, fino a quel momento, sia di un manifesto sia di una conferenza dedicata. Elenca cinque valori per contrasto: **baby step** invece di cambi su larga scala, **refactoring continuo** invece di miglioramenti tardivi della qualità, **test automatici** invece di script di test manuali, **documentazione eseguibile** invece di documenti statici che invecchiano male, **codice minimale** invece di soluzioni sovradimensionate ("gold-plated"). Ribadisce anche, con la stessa insistenza, cosa il TDD *non* è: non è una strategia di testing, non è un principio di design in sé, non è pensato per lo shell imperativo dell'applicazione, non è adatto a test di performance o di UX, e non risolve problemi umani.

## TDD su sistemi legacy

Questa sessione ha ribadito una definizione compatta e operativa: il TDD è una **tecnica di sviluppo software** basata su brevissimi cicli di programmazione ripetuti, in cui i requisiti diventano casi di test automatici concreti e specifici, e in cui si implementa sempre la soluzione più semplice possibile — l'hard-coding iniziale è incoraggiato, non è un difetto. È l'opposto dello sviluppo tradizionale, dove si aggiunge codice non testato e non validato.

I benefici di design elencati sono numerosi e vale la pena riportarli per intero, perché coprono angolazioni spesso trascurate quando si parla di TDD solo in termini di "prevenzione dei bug": testabilità e interfacce di classe migliori; design più semplici (KISS, YAGNI, evitare il [gold plating](https://en.wikipedia.org/wiki/Gold_plating_(project_management)), "fake it till you make it", fail fast); isolamento dei fallimenti (meno bisogno di debugger o logging); design by contract; modularizzazione; costruzione bottom-up; rimandare problemi di implementazione e ottimizzazione prematura; separazione tra casi d'uso normali ed eccezioni (casi alternativi); copertura completa dei branch; approccio incrementale a piccoli passi; feedback immediato con ricompense psicologiche dirette; e — un riferimento filosofico non banale citato esplicitamente in sessione — un fondamento nelle idee di apprendimento di Wittgenstein basate su esempi incrementali. Un punto viene ribadito con fermezza: **il TDD non garantisce di per sé un buon design** — richiede comunque giudizio.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il riferimento a Wittgenstein riguarda verosimilmente la sua riflessione sul concetto di "seguire una regola" (*Philosophische Untersuchungen*, 1953): per Wittgenstein, comprendere una regola non significa possedere una definizione astratta, ma essere in grado di applicarla correttamente a nuovi casi sulla base di esempi — un parallelo diretto con l'idea che, in TDD, la comprensione di un comportamento emerga dall'accumulo di esempi concreti (i test), non da una specifica formale scritta in anticipo. È un'analogia ricorrente nella letteratura su TDD e apprendimento test-driven, più che una citazione filosofica rigorosa.
> Fonte: [Stanford Encyclopedia of Philosophy — Wittgenstein's Rule-Following Considerations](https://plato.stanford.edu/entries/rule-following/)

Sul piano dei requisiti tecnici, la sessione ha sottolineato che i test devono girare in un ambiente completamente sotto controllo, che il TDD può rilevare problemi di accoppiamento (da affrontare con i Test Double), e che, quando applicato a sistemi legacy, il primo effetto pratico è proprio la rottura sistematica dell'accoppiamento esistente.

## Sintesi

La conferenza, nel suo insieme, restituisce un'immagine del TDD che va ben oltre la meccanica del ciclo rosso-verde-refactor: una sessione lo riformula in chiave BDD, una lo usa come metafora per la leadership tecnica e il cambiamento comportamentale nei team, una ne discute onestamente i costi di adozione senza minimizzarli, una ne fissa i valori fondativi in un manifesto pubblico, una ne ribadisce la definizione tecnica più rigorosa applicata al caso limite del codice legacy. È un buon esempio di come, arrivati a un certo livello di maturità, la comunità tecnica intorno a una pratica smetta di discuterne solo la sintassi e cominci a discuterne la cultura.

## Collegamenti

- Topic: [[../../topics/tdd|TDD]] · [[../../topics/agile-software-development|Agile Software Development]] · [[../../topics/technical-excellence|Technical Excellence]]
- Contenuti collegati: [[../book/test-driven-development-by-example|Test-Driven Development: By Example]] · [[../book/agile-technical-practices-distilled-a-learning|Agile Technical Practices Distilled]] · [[../article/breaking-through-that-first-tdd-block|Breaking Through That First TDD Block]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/conference/tdd-conference-2021/content.md`
- Registrazione: [youtu.be/-_noEVCR__I](https://youtu.be/-_noEVCR__I)
