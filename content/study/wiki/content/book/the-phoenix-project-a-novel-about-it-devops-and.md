---
title: "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win"
type: book
author:
  - "Gene Kim"
  - "Kevin Behr"
  - "George Spafford"
topics: ["agile-software-development", "devops"]
status: done
study:
  method: full_reading
raw_source: raw/knowledge/book/the-phoenix-project-a-novel-about-it-devops-and/content.md
updated: 2026-08-19
---

# The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win

**Autori: [[../person/gene-kim|Gene Kim]], Kevin Behr, George Spafford**

Romanzo aziendale (nello stesso genere de *The Goal* di Eliyahu Goldratt) che ha reso popolare, in forma narrativa, i principi che poi confluiranno nel manuale operativo [[the-devops-handbook|The DevOps Handbook]] e nella sintesi teorica dell'articolo [[../article/the-three-ways-the-principles-underpinning-devops|The Three Ways: The Principles Underpinning DevOps]]. La trama segue Bill, promosso a capo dell'IT di un'azienda automobilistica in crisi, che deve salvare il progetto "Phoenix" — cronicamente in ritardo — mentre l'intera organizzazione affoga nel lavoro non pianificato.

## La trama e le "Quattro Categorie di Lavoro"

Il libro identifica quattro tipi di lavoro che attraversano un reparto IT: i **progetti di business** (richiesti dall'azienda), i **progetti IT interni** (infrastruttura, manutenzione), i **cambiamenti** (change request che modificano lo stato di un sistema) e il **lavoro non pianificato** — quello generato da incidenti, errori, guasti. Quest'ultima categoria è la più insidiosa: non è mai schedulata, eppure consuma la capacità destinata a tutte le altre, ed è quasi sempre la conseguenza diretta di scelte fatte nelle prime tre categorie. Il debito tecnico, nel libro, è esattamente questo: **il lavoro non pianificato è l'interesse che si paga sul debito**.

## Brent e la Teoria dei Vincoli

Applicando la **Teoria dei Vincoli** di Eliyah Goldratt all'IT, il romanzo identifica in Brent — l'unico ingegnere che conosce a memoria ogni sistema fragile dell'azienda — il collo di bottiglia (bottleneck) che determina la velocità dell'intera organizzazione. Ogni processo che passa per Brent, anche indirettamente, è vincolato dalla sua disponibilità: aggiungere capacità altrove nel sistema, quando il vincolo è Brent, non aumenta il throughput complessivo — lo fa solo liberare Brent, proteggerlo da interruzioni, e sistematicamente trasferire la sua conoscenza. Il libro descrive anche i **quattro centri di lavoro** (macchina, uomo, metodo, misure) come lente per diagnosticare dove un processo si inceppa.

## Lo slack del 20% e la risoluzione

Una delle raccomandazioni pratiche più citate del libro è destinare il **20% della capacità IT** a lavoro non legato a progetti di business — refactoring, automazione, pagamento del debito tecnico — per evitare che l'intero sistema collassi sotto il peso del lavoro non pianificato accumulato. La risoluzione della trama arriva con la formazione di un team trasversale e dedicato (la "Unicorn Team", da cui il titolo del sequel *The Unicorn Project*) che, applicando questi principi, porta l'organizzazione da rilasci trimestrali rischiosi a **10 deploy al giorno**.

## Le Tre Vie (estratto da The DevOps Handbook)

Il volume include un lungo estratto che sintetizza teoricamente ciò che la narrativa mostra in pratica: le **Tre Vie**, sviluppate poi in dettaglio in [[the-devops-handbook|The DevOps Handbook]] e riassunte anche nell'articolo [[../article/the-three-ways-the-principles-underpinning-devops|The Three Ways]].

### I miti del DevOps e la spirale discendente

L'estratto apre smontando alcuni miti comuni (che DevOps riguardi solo strumenti, o solo le startup web) e descrive la **spirale discendente in tre atti** tipica del conflitto Dev-vs-Ops: Dev consegna codice fragile sotto pressione di deadline; Ops, per proteggere la stabilità, irrigidisce i processi di rilascio; questo rallenta ulteriormente Dev, che accumula più fretta e più debito tecnico al giro successivo — un ciclo che si autoalimenta e peggiora ad ogni iterazione.

### Radici storiche

Il DevOps viene collocato nella sua genealogia: il **Lean Movement** (Toyota Production System), il **Manifesto Agile** del 2001, la conferenza del 2008 in cui Patrick Debois e Andrew Schafer introducono per primi l'idea di "Agile Infrastructure", il libro *Continuous Delivery* di Jez Humble e David Farley, e la **Toyota Kata** di Mike Rother come metodo di miglioramento continuo scientificamente guidato.

### Il flusso di valore tecnologico

L'estratto introduce il **technology value stream**: la distinzione fra *lead time* (il tempo totale percepito dal cliente, dalla richiesta alla consegna) e *process time* (il tempo di lavoro effettivo). Il classico esempio del batch di newsletter — stampare, piegare, imbustare una alla volta (single-piece flow) contro farlo a lotti separati per fase — mostra visivamente perché lotti più piccoli riducono il lead time complessivo nonostante sembrino meno "efficienti" per singola fase. La metrica **%C/A** (percent complete and accurate) misura quanto lavoro arriva a ogni fase successiva senza bisogno di essere corretto o completato a valle.

> [!info] Approfondimento aggiunto in fase di compilazione
> Il principio del batch size ridotto e del single-piece flow ha origine nel Toyota Production System di Taiichi Ohno — lo stesso quadro teorico ripreso in modo esteso in [[implementing-lean-software-development|Implementing Lean Software Development]]. Le due letture si rafforzano a vicenda: quella di Poppendieck spiega il *perché* lean, questa il *come* applicarlo specificamente al flusso DevOps.

### La Prima Via — Flow

Ottimizzare il flusso di lavoro da sinistra (sviluppo) a destra (produzione), mai il contrario. Include principi come rendere visibile il lavoro, limitare il work-in-progress, ridurre le dimensioni dei lotti, ridurre il numero di passaggi di consegna, individuare ed eliminare continuamente i vincoli, ed eliminare le difficoltà (hardship) nel flusso stesso. L'analogia della **andon cord** (la corda che, nella fabbrica Toyota, chiunque può tirare per fermare la linea non appena nota un difetto) e il conseguente **swarming** — l'intero team che converge per risolvere il problema prima di riprendere — sono presentati come pratica cardine per non lasciare che i piccoli problemi si accumulino in una crisi.

### La Seconda Via — Feedback

Creare cicli di feedback veloci e costanti dalla destra (produzione) verso la sinistra (sviluppo), per individuare e risolvere i problemi appena si presentano, e prima che possano crescere. Comprende il monitoraggio continuo dei sistemi in produzione, la responsabilità condivisa (Dev e Ops insieme) sulla qualità, e l'uso del **modello culturale di Westrum** — le organizzazioni generative, dove le informazioni fluiscono liberamente e i messaggeri non vengono puniti, ottengono risultati migliori delle organizzazioni burocratiche o patologiche.

### La Terza Via — Apprendimento continuo e sperimentazione

Costruire una cultura che favorisca sia la sperimentazione continua (assumersi rischi e imparare dal successo e dal fallimento) sia la comprensione che ripetizione e pratica sono i prerequisiti della maestria. Vengono citati i **blameless post-mortem** — analizzare gli incidenti concentrandosi sul sistema e sui processi, non sulla colpa individuale — e il **Chaos Monkey** di Netflix, che disattiva deliberatamente componenti in produzione per costringere l'organizzazione a costruire sistemi resilienti per default. Chiude la sequenza di domande della **coaching kata** di Jim Womack, usata per guidare — non dettare — il miglioramento continuo di un team: qual è la condizione target, qual è la condizione attuale, quali ostacoli stanno impedendo di raggiungere la condizione target, qual è il prossimo passo.

## Vedi anche

- [[../person/gene-kim|Gene Kim]]
- [[the-devops-handbook|The DevOps Handbook]]
- [[../article/the-three-ways-the-principles-underpinning-devops|The Three Ways: The Principles Underpinning DevOps]]
- [[implementing-lean-software-development|Implementing Lean Software Development]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/the-phoenix-project-a-novel-about-it-devops-and/content.md`
