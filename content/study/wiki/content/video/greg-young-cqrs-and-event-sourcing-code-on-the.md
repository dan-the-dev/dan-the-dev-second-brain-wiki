---
title: "Greg Young - CQRS and Event Sourcing - Code on the Beach 2014"
type: video
topics: ["agile-software-development", "ddd", "technical-excellence"]
status: done
raw_source: raw/knowledge/video/greg-young-cqrs-and-event-sourcing-code-on-the/content.md
updated: 2026-08-19
---

# Greg Young - CQRS and Event Sourcing - Code on the Beach 2014

**Talk di Greg Young**, ideatore del pattern CQRS applicato all'event sourcing

Registrazione di uno dei talk più citati e influenti sull'event sourcing e CQRS, tenuto da Greg Young — lo stesso speaker che presentò per primo il tema pubblicamente nel 2006 a QCon San Francisco, davanti a Martin Fowler, Eric Evans e Gregor Hohpe. Il talk copre in profondità le motivazioni di business dell'event sourcing (non solo tecniche), il modello degli audit log "provabilmente corretti", le strategie di scaling e versioning, e la relazione fra CQRS e il principio di Command-Query Separation di Bertrand Meyer.

## Perché l'event sourcing: audit log provabilmente corretti

Il punto di partenza del talk non è tecnico ma di business: molti sistemi hanno audit log, ma pochi possono dimostrarne la correttezza — un problema paragonato scherzosamente alla scia di briciole di pane di Hansel e Gretel, resa inutile perché gli animali del bosco l'hanno mangiata. L'event sourcing risolve il problema catturando ogni transizione di stato del modello di dominio come fatto immutabile, rendendo l'audit log strutturalmente corretto per costruzione, non per disciplina applicativa — un requisito centrale nei settori regolamentati.

## Lo stato corrente come derivato transitorio

L'idea concettuale centrale è che lo stato corrente non è la fonte di verità, ma un derivato di primo livello (first-level derivative) calcolato dai fatti accumulati. Young usa l'esempio del saldo di un conto bancario: non è memorizzato come singola colonna in una tabella, ma calcolato come somma di tutte le transazioni precedenti — se fosse una colonna singola, sarebbe impossibile risolvere disaccordi sul saldo, perché quella colonna sarebbe l'unica fonte "autoritativa"; calcolandolo dalle transazioni, invece, chiunque può verificarlo e correggere errori. Nessun settore maturo (finanza, assicurazioni, contabilità) tratta lo "stato corrente" come primitiva: tutti lavorano per accumulo di eventi.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il principio per cui "in contabilità è illegale cancellare o modificare una voce di libro mastro" (citato esplicitamente nel talk) riflette la pratica contabile della partita doppia, che risale almeno al trattato di Luca Pacioli del 1494 (*Summa de arithmetica*): ogni correzione avviene per storno (una nuova scrittura che annulla ed eventualmente sostituisce la precedente), mai per cancellazione — lo stesso principio di immutabilità che l'event sourcing applica al software.

## Storno completo vs. correzione parziale

Un esempio pratico riguarda gli errori contabili: se per errore vengono trasferiti 10.000 dollari invece di 1.000, i contabili preferiscono uno storno completo (restituire i 10.000, poi effettuare correttamente il trasferimento di 1.000) piuttosto che una correzione parziale, perché il primo approccio produce una traccia di audit molto più chiara e comprensibile per chi verifica in seguito — un principio che si applica direttamente alla progettazione di sistemi event-sourced.

## Time travel, scaling e debug

Fra i benefici pratici discussi: la possibilità di eseguire un'applicazione a una versione specifica dello stream di eventi per il debug (uno strumento a riga di comando può "far girare" il dominio esattamente come si comportava in produzione in un dato momento, permettendo di usare un debugger passo-passo su un bug realmente accaduto); lo smoke testing, ovvero ri-eseguire ogni comando mai processato dal sistema attraverso una nuova versione del software, confrontando i risultati per individuare regressioni inattese; la facilità di scaling orizzontale, dato che copiare un sistema event-sourced non richiede sincronizzazione complessa poiché non ci sono modifiche in-place da coordinare.

## Il caso del "super user attack": la truffa del Pick Six

Il talk include un aneddoto reale usato per illustrare il rischio di un amministratore di sistema fraudolento con accesso root: una delle più grandi truffe nel gioco d'azzardo ippico americano degli ultimi cent'anni, in cui un tecnico modificava manualmente le proprie schedine dopo aver visto l'esito delle prime quattro corse su sei, garantendosi vincite plurimilionarie — scoperto non per un errore tecnico ma per sfortuna, durante il Breeders' Cup, quando due cavalli a quota altissima (43 a 1 e 56 a 1) vinsero inaspettatamente. La contromisura tecnica proposta è il "worm drive" (write-once, read-many): un supporto su cui i dati, una volta scritti, non possono essere alterati — reso ancora più robusto da un meccanismo di "heartbeat" crittografico che rileva se il disco è stato fisicamente sostituito.

## Aggregate, snapshot e versioning

Il talk chiarisce che un sistema event-sourced reale non replica l'intero stream globale, ma partiziona gli eventi per aggregate (nel senso del Domain-Driven Design) — un concetto assimilabile a un documento in un database a documenti. Per aggregate con moltissimi eventi (l'esempio citato è l'order book di una borsa valori), si usano gli snapshot: lo stato corrente di una proiezione, salvato periodicamente, per evitare di rigiocare l'intero storico ogni volta. Young mette però in guardia: gli snapshot sono "malvagi" ("evil") perché introducono problemi di versioning — se cambia qualcosa collegato a uno snapshot, tutti gli snapshot vanno rigenerati — e la sua regola pratica è di non prenderli nemmeno in considerazione sotto le 1000 occorrenze di eventi per aggregate, dato che la maggior parte degli aggregate reali (l'esempio citato è una pratica di mutuo, con 50-100 eventi) ne conta molti meno.

## CQRS: dalla separazione dei metodi alla separazione dei sistemi

Il talk fa risalire l'origine concettuale di CQRS al Command-Query Separation (CQS) di Bertrand Meyer: i metodi di un oggetto dovrebbero essere comandi (void, con effetti collaterali, non funzioni pure) oppure query (non-void, senza effetti collaterali, funzioni pure) — mai entrambe le cose. CQRS estende lo stesso principio a livello di sistema: separare la parte di scrittura da quella di lettura, perché in molti sistemi il rapporto fra query e comandi è di uno o due ordini di grandezza (spesso 99 letture per ogni scrittura), e le query sono naturalmente più facili da scalare orizzontalmente grazie alla tolleranza per la consistenza eventuale, mentre i comandi richiedono consistenza forte.

> [!info] Approfondimento aggiunto in fase di compilazione
> Nel talk viene citato un controesempio di Martin Fowler al principio CQS in senso stretto: il metodo `pop()` di uno stack, che sia restituisce un valore sia muta lo stato — una violazione "pragmatica" spesso accettata nella pratica quotidiana della programmazione a oggetti, che illustra come CQS sia più un principio guida che una regola assoluta. Il riferimento è discusso nell'articolo di Fowler "CommandQuerySeparation" su martinfowler.com.

## Sintesi

Uno dei contenuti tecnicamente più densi e influenti dell'archivio: offre non solo la spiegazione meccanica di event sourcing e CQRS, ma le motivazioni di business (audit, tracciabilità, conformità normativa) che ne giustificano l'adozione, insieme a considerazioni pratiche di scaling, versioning e sicurezza raramente trattate insieme nello stesso contenuto.

## Vedi anche

- [[../person/martin-fowler-software-engineer|Martin Fowler]]
- [[../concept/domain-driven-design|Domain-driven design]]
- [[../person/bertrand-meyer|Bertrand Meyer]]
- [[../concept/commandquery-separation|Command–query separation]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/video/greg-young-cqrs-and-event-sourcing-code-on-the/content.md`
- YouTube: [video](https://www.youtube.com/watch?v=JHGkaShoyNs)
