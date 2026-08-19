---
title: "Implementing Lean Software Development"
type: book
author:
  - "Mary Poppendieck"
  - "Tom Poppendieck"
topics: ["agile-software-development", "lean", "product-development", "tech-lead"]
status: done
study:
  method: full_reading
raw_source: raw/knowledge/book/implementing-lean-software-development/content.md
updated: 2026-08-19
---

# Implementing Lean Software Development

**Autori: Mary Poppendieck, [[../person/tom-poppendieck|Tom Poppendieck]]**

Seguito più operativo di *Lean Software Development*, che traduce i sette principi lean in pratiche concrete, ripartendo dalla storia del Toyota Production System — dall'idea delle parti intercambiabili di Honoré Blanc (Francia, 1785) alla produzione di massa Ford, fino a Kiichiro Toyoda, Taiichi Ohno e Shigeo Shingo, che costruiscono il TPS proprio per competere con le case automobilistiche americane senza replicarne il modello. La metafora centrale del libro è quella dell'inventario come "livello dell'acqua": tenerlo alto nasconde gli scogli (gli sprechi); abbassarlo li fa emergere, costringendo ad affrontarli.

## Principi vs pratiche

Distinzione metodologica di apertura: i principi sono verità di fondo che non cambiano nel tempo e nello spazio; le pratiche sono l'applicazione di quei principi in un contesto specifico, e *devono* cambiare quando cambia il contesto. Copiare pratiche da altri contesti senza conoscerne i principi è un errore storicamente dimostrato — ma conoscere i principi rende sensato copiare (e adattare) pratiche da contesti simili per accelerare l'introduzione di miglioramenti.

## I sette principi lean, in pratica

**Eliminare gli sprechi**: il primo passo è saper riconoscere lo spreco, il che richiede prima di tutto avere un'idea chiara di cosa sia "valore" per il cliente — cosa non banale, perché anche il cliente cambia idea su ciò che gli serve. Nel software, l'inventario è il lavoro parzialmente fatto: si perde, invecchia, nasconde problemi di qualità, blocca capitale — esattamente come l'inventario in manifattura. Lo spreco più grande, di gran lunga, sono le funzionalità in eccesso: solo il 20% delle feature viene usato regolarmente, e i due terzi sono usate raramente o mai — un costo enorme di sviluppo e complessità aggiunta senza ritorno. Un mito da sfatare: la specifica anticipata *non* riduce lo spreco — produce invece "scope bloat".

**Costruire la qualità dentro**: l'obiettivo non è tracciare i difetti in un sistema, ma evitare di crearli. Shigeo Shingo distingue ispezione *dopo* che i difetti si verificano da ispezione per *prevenirli* — il lean punta decisamente sulla seconda, fermando la linea (jidoka) al primo segnale di problema invece di accumulare debito da correggere dopo. Un mito correlato: il compito dei test non è trovare difetti, è prevenirli.

**Creare conoscenza**: uno degli errori più gravi del modello a cascata è pensare che la conoscenza (i "requisiti") esista prima dello sviluppo, in un momento separato dalla scrittura del codice — mentre lo sviluppo software è esso stesso un processo di creazione di conoscenza, e il design vero emerge durante la scrittura del codice, non prima. Un mito da sfatare: le previsioni non creano prevedibilità — più le previsioni sono complesse, dettagliate, su un futuro lontano e in un ambiente incerto, meno saranno accurate; la vera prevedibilità nasce riducendo il tempo di risposta agli eventi, non affinando le previsioni.

**Rimandare l'impegno**: rendere le decisioni reversibili quando possibile, e programmare quelle irreversibili per "l'ultimo momento responsabile" — non l'ultimo momento possibile, ma l'ultimo in cui la decisione può ancora essere presa informata. Un mito correlato, con una citazione di Eisenhower ("i piani sono inutili, ma pianificare è indispensabile"): pianificare non è un impegno.

**Consegnare velocemente**: le aziende che competono sulla velocità hanno tipicamente anche un vantaggio di costo e una qualità superiore — non esiste il trade-off "la fretta genera scarti": esistono due strade per l'alta qualità, rallentare ed essere cauti, oppure sviluppare persone e processi che migliorano continuamente e costruiscono qualità dentro, permettendo velocità *e* qualità insieme.

**Rispettare le persone**: tre pilastri del TPS applicati alle persone — leadership imprenditoriale che coinvolge e concentra gli sforzi; forza lavoro tecnicamente esperta, coltivata come vero vantaggio competitivo; pianificazione e controllo basati sulla responsabilità, dove ai team vengono dati obiettivi generali e fiducia per auto-organizzarsi, non istruzioni dettagliate su come eseguire.

**Ottimizzare il tutto**: la sub-ottimizzazione è comunissima nello sviluppo software, spesso causata da incentivi mal allineati (l'esempio dell'help desk pagato a chiamata, che non ha alcun incentivo a ridurre le chiamate). Un mito da sfatare: non si ottimizza per decomposizione — misurare e migliorare i singoli pezzi separatamente non produce un miglioramento del tutto; meglio ridurre le metriche a una sola, quella che conta davvero (ROI per i progetti, profitti e perdite per i prodotti).

## I sette sprechi aggiornati

Il libro aggiorna la lista classica dei sprechi lean al contesto software: lavoro parzialmente fatto; funzionalità extra (il peggiore secondo Ohno); "rilearning" — riscoprire qualcosa che si sapeva e si è dimenticato, la miglior definizione di "rework"; handoff — i passaggi di consegne perdono sempre conoscenza tacita, impossibile da trasferire completamente per iscritto; task switching — il cambio di contesto fra 3-4 task consuma più tempo del lavoro effettivo; ritardi — la causa più comune è aspettare la disponibilità di persone di altre aree; difetti — i test possono solo provare che il codice fa ciò che pensiamo dovrebbe fare, mai eliminare del tutto la possibilità di fallimento.

## Teoria delle code e Legge di Little

Applicata allo sviluppo software: **tempo di ciclo = numero di elementi in corso / tasso medio di completamento**. Due leve per migliorare il tempo di ciclo: far le cose più velocemente (di solito richiede più soldi) o ridurre il work-in-progress (raramente richiede soldi, ma è intellettualmente più difficile da accettare). Un'osservazione pratica ricorrente nel libro: appena un sistema supera l'80% di utilizzo, il tempo di risposta comincia a crescere rapidamente — da cui la scelta di Google di dedicare il 20% del tempo degli sviluppatori a slack/apprendimento personale, anche come meccanismo di controllo del carico.

## Persone, conoscenza, sistemi legacy

Ampio spazio è dedicato al pensiero di W. Edwards Deming — i suoi quattro pilastri della "profound knowledge" (apprezzamento per il sistema, conoscenza della variazione, teoria della conoscenza, psicologia) e i suoi 14 punti, fra cui "drive out fear" ed eliminare le quote numeriche per lavoratori e manager in favore della leadership. Sul debito tecnico: qualunque cosa renda il codice difficile da cambiare è debito tecnico, e ha un tasso di interesse molto alto — l'unico modo per restare avanti è avere team, processi e infrastruttura tecnica che non lascino mai accumulare quel debito. Per i sistemi legacy il libro propone tre approcci: riscrivere e buttare via (quasi sempre impossibile in pratica), "refactoring into submission" (costruire prima una suite di test affidabile, poi rifattorizzare i pezzi necessari prima di aggiungere nuovo codice), e strangolamento (estrarre gradualmente pezzi del sistema legacy sostituendoli con codice nuovo).

## Vedi anche

- [[../person/tom-poppendieck|Tom Poppendieck]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/implementing-lean-software-development/content.md`
