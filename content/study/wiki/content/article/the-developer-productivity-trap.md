---
title: "The Developer Productivity Trap"
type: article
topics: ["software-development"]
status: done
raw_source: raw/knowledge/article/the-developer-productivity-trap/content.md
updated: 2026-08-19
---

# The Developer Productivity Trap

Rassegna densa e ben documentata sul perché ogni tentativo, in decenni di storia del settore, di ridurre la produttività degli sviluppatori a un singolo numero abbia prodotto incentivi perversi, gaming delle metriche e "surrogation" — il fenomeno per cui le persone finiscono per concentrarsi sulla metrica invece che su ciò che essa dovrebbe rappresentare.

## Il fallimento delle metriche tradizionali

Righe di codice, story point e grafici di velocity sono stati tutti, in tempi diversi, fraintesi come misure di produttività. Le righe di codice sono l'esempio più problematico: incentivano codice gonfio e trascurato, e non tengono conto del valore creato — illustrato con l'esperienza di Bill Atkinson, che nel 1982 rese il motore di calcolo delle regioni di QuickDraw per l'Apple Lisa sei volte più veloce scrivendo 2.000 righe *in meno*. Story point e velocity, nati come strumenti di pianificazione, sono stati fraintesi come metriche di produttività, portando i team a gonfiare le stime e concentrarsi sullo sforzo anziché sul valore — con conseguenze su fiducia, frustrazione e cultura del team.

## Tre cornici teoriche: McNamara Fallacy, Goodhart's Law, Surrogation

L'articolo lega insieme tre concetti distinti per spiegare perché qualunque metrica singola finisca manipolata: la **McNamara Fallacy** (dal Segretario alla Difesa USA che durante la guerra del Vietnam usò il conteggio dei nemici uccisi come misura primaria di successo) descrive il processo in quattro passi con cui si privilegiano le metriche facilmente misurabili, scartando ciò che non lo è; la [[../concept/goodhart-s-law|Legge di Goodhart]] ("quando una misura diventa un obiettivo, cessa di essere una buona misura") si manifesta quando sviluppatori e team manipolano metriche come la frequenza di deploy per raggiungere target; la **surrogation** è il processo inconscio per cui una metrica viene scambiata per l'obiettivo stesso, per sostituzione di attributo — un rischio che si materializza, secondo la ricerca citata (Black, Meservy, Tayler, Williams; Harris e Tayler), ogni volta che si combinano obiettivi strategici astratti, metriche concrete e visibili, e l'accettazione della metrica come rappresentazione dell'obiettivo — condizioni quasi sempre presenti nell'ingegneria del software.

## DORA, SPACE e la critica al framework McKinsey

Le metriche DORA (Deployment Frequency, Lead Time, MTTR, Change Failure Rate), introdotte da [[../person/nicole-forsgren|Nicole Forsgren]], Jez Humble e Gene Kim nel 2018, non erano pensate per confrontare team fra loro — eppure vengono spesso usate proprio così dalla leadership, ignorando che non catturano soddisfazione degli sviluppatori, carico cognitivo, qualità del codice o valore di business. Il report DORA 2025 ha risposto introducendo sette archetipi di team, mentre il framework SPACE (Forsgren e colleghi) affronta la natura multidimensionale della produttività su cinque assi. Il report McKinsey "Yes, you can measure software developer productivity" viene citato come esempio negativo: criticato duramente da [[../person/kent-beck|Kent Beck]] e Dave Farley per misurare solo sforzo o output, non risultati e impatto — un framework che gli autori giudicano destinato a produrre sorveglianza e minore sicurezza psicologica per gli sviluppatori.

## La metafora manifatturiera non regge

Citando [[../person/peter-drucker|Peter Drucker]], l'articolo osserva che il lavoro della conoscenza — di cui lo sviluppo software è un caso — è fondamentalmente diverso dal lavoro manifatturiero: richiede che chi lavora controlli il compito, possieda i mezzi di produzione concettuali, e si concentri sull'efficacia più che sull'efficienza. La metafora manifatturiera fallisce perché nel software l'output non è standardizzato, l'efficienza non è il vincolo primario, la qualità non è misurabile indipendentemente, e il lavoro stesso è creativo — richiede problem solving, generazione di idee, immaginazione anticipatoria.

## Output vs. outcome, e il lavoro invisibile

[[../person/martin-fowler-software-engineer|Martin Fowler]] distingue output (ciò che viene prodotto) da outcome (il cambiamento che l'output produce), sostenendo che l'obiettivo dovrebbe essere minimizzare l'output e massimizzare l'outcome — spesso la soluzione migliore è il cambiamento più piccolo, la funzionalità *non* costruita, il codice cancellato: cose che le metriche di output non solo non catturano, ma spesso penalizzano. [[../person/charity-majors|Charity Majors]] (CTO di Honeycomb) aggiunge che parte del lavoro ingegneristico più impattante è invisibile alle metriche individuali — pairing, mobbing, mentoring — e può addirittura apparire come output ridotto ("due persone che fanno il lavoro di una").

## L'AI come amplificatore, non come soluzione

L'introduzione degli assistenti di coding AI amplifica i problemi esistenti delle metriche di produttività, invece di risolverli: può creare un "gap di percezione" in cui gli sviluppatori credono che l'AI li stia aiutando più di quanto faccia realmente, e può alimentare surrogation attorno a metriche come "percentuale di codice generato da AI" — richiamando direttamente la frase del DORA Report 2025: "l'AI non aggiusta un team, amplifica ciò che c'è già".

## La domanda giusta

La conclusione dell'articolo capovolge la domanda: non "quanto sono produttivi i nostri sviluppatori", ma "come creiamo le condizioni perché possano fare il loro lavoro migliore" — feedback loop rapidi, basso carico cognitivo, stati di flow protetti. Cita la ricerca di Gergely Orosz e Abi Noda secondo cui i team più efficaci usano mix di metriche qualitative e quantitative specifiche del proprio contesto, non framework preconfezionati, e l'approccio di Google alla misurazione della produttività, che si basa su metriche qualitative (stato di flow, navigabilità del codebase, percezione del debito tecnico) raccolte chiedendo direttamente alle persone — perché sono cose che i sistemi automatizzati non possono catturare da soli.

## Vedi anche

- [[../person/martin-fowler-software-engineer|Martin Fowler]]
- [[../concept/goodhart-s-law|Legge di Goodhart]]
- [[../person/nicole-forsgren|Nicole Forsgren]]
- [[../person/kent-beck|Kent Beck]]
- [[../person/peter-drucker|Peter Drucker]]
- [[../person/charity-majors|Charity Majors]]
- [[../person/cal-newport|Cal Newport]]
- [[../software/github|GitHub]]
- [[../organization/microsoft-research|Microsoft Research]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/the-developer-productivity-trap/content.md`
- [a4al6a.substack.com](https://a4al6a.substack.com/p/the-developer-productivity-trap)
