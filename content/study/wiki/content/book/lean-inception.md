---
title: "Lean Inception"
type: book
author:
  - "Paulo Caroli"
topics: ["agile-software-development", "lean"]
status: done
study:
  method: full_reading
  started_at: "2024-06-03"
  completed_at: "2024-06-24"
raw_source: raw/knowledge/book/lean-inception/content.md
updated: 2026-08-20
---

# Lean Inception

**Autore: Paulo Caroli**

Manuale pratico di ThoughtWorks per condurre il workshop "Lean Inception": una sessione strutturata per stabilire una direzione iniziale condivisa e catturare gli obiettivi di un prodotto, identificando gli esiti attesi. Il libro parte da un'osservazione: niente insegna meglio cosa vogliamo davvero di un prodotto incompleto, rilasciato e in uso — e serve comunque bilanciare questa consapevolezza con la necessità di dare comunque una direzione iniziale (per quanto provvisoria, anche se la migliore possibile). La Lean Inception nasce come risposta a una lacuna della Lean Startup: quest'ultima dà indicazioni chiare su come **misurare** e **imparare** dopo aver costruito un MVP, ma non dice nulla su *cosa costruire* in primo luogo — è esattamente questo il vuoto che la serie di attività del workshop colma, aiutando un team a identificare le feature di un MVP.

## Costruire il prodotto giusto

Il workshop copre due casi d'uso: sviluppare l'MVP di un progetto o prodotto nuovo, oppure l'MVP di un'idea/feature già validata all'interno di un prodotto esistente (un "incremento"). L'approccio MVP non riguarda solo il primo rilascio: ogni incremento successivo è guidato dallo stesso principio, la validazione di un'ipotesi tramite dati — e le pratiche tecniche necessarie a sostenere questo ritmo prendono il nome di Continuous Delivery. Il feedback più prezioso, ricorda il libro, è proprio una risposta negativa: "pensa in grande, inizia in piccolo, impara in fretta" — è fondamentale avere una visione ampia, ma bisogna comunque partire con un passo piccolo e imparare da quello. Un prodotto può avere più obiettivi e servire più persone, ma ogni singolo MVP deve validare una sola ipotesi, una sola idea.

Un MVP deve possedere tre qualità, e ogni incremento MVP ne contiene sempre una parte di ciascuna:

**Valuable (di valore).** Deve generare il ritorno sull'investimento (ROI) atteso dal punto di vista del business — non è un esperimento fine a sé stesso, deve produrre valore misurabile.

**Usable (utilizzabile).** Significa aver davvero capito le persone che useranno il prodotto, i compiti che devono svolgere e l'ambiente in cui lavorano — non semplicemente "funzionante", ma pensato per chi lo userà.

**Feasible (fattibile).** Il team deve sapere come costruirlo: possedere la tecnologia e la conoscenza necessarie per realizzarlo davvero, non solo per immaginarlo.

A queste si aggiunge il **wow factor**: ciò che fa distinguere il prodotto sul mercato. Il libro lo considera fondamentale in ogni MVP, non un lusso opzionale. Infine, la "V" di MVP sta anche per *viable* (percorribile): un incremento non deve mai rompersi — la prima impressione è fondamentale e la fiducia degli utenti, una volta persa, si recupera con enorme difficoltà.

### Il funnel AARRR (metriche pirata)

Il libro introduce anche AARRR — le "metriche pirata" — un acronimo per le metriche di funnel che rappresentano le interazioni dei clienti con il prodotto, e ogni MVP dovrebbe puntare a validare tutti i passaggi del funnel:

**Acquisition (acquisizione)**: il numero di persone che hanno visitato il prodotto.

**Activation (attivazione)**: il numero di persone che hanno avuto una buona prima esperienza d'uso.

**Retention (ritenzione)**: il numero di persone tornate per saperne di più.

**Revenue (ricavo)**: il numero di persone che hanno compiuto un'azione generatrice di ricavo.

**Referral (passaparola)**: il numero di persone che hanno raccomandato il prodotto ad altri utenti.

## Le attività del workshop

Il libro descrive in dettaglio le singole attività che compongono l'inception, ciascuna con una propria dinamica facilitativa.

**Scrivere la vision del prodotto.** La vision definisce l'essenza del valore di business del prodotto. Si scrive un template su una lavagna visibile a tutti, si divide il team in piccoli gruppi che elaborano ciascuno una propria versione, e infine si riuniscono i risultati in un'unica versione condivisa.

**Il prodotto È — NON È — FA — NON FA.** Spiegare il prodotto sia per quello che è e fa, sia per quello che non è e non fa: i negativi, a volte, aiutano a chiarire i confini più dei positivi. Si divide la lavagna in quattro aree, si chiede ai partecipanti di aggiungere post-it, e si raggruppano le note simili.

**Chiarire gli obiettivi.** Il team cerca un consenso sugli obiettivi del prodotto. Ogni persona scrive tre risposte alla domanda "se dovessi definire questo prodotto con tre obiettivi per i suoi utenti, quali sarebbero?"; le risposte vengono raggruppate per similarità sulla lavagna, e riscritte collettivamente dall'intero team, elencandole infine in ordine di importanza.

**Capire i trade-off.** Un prodotto lean riflette le decisioni che il team prende sui compromessi. Si descrivono le categorie rilevanti per il prodotto (sicurezza, usabilità, scalabilità, ecc.) come righe di una griglia su una lavagna, con colonne etichettate "MORE" a sinistra e "LESS" a destra; ogni partecipante posiziona un post-it con le proprie iniziali su ogni riga (una colonna per riga, obbligatoriamente), e ogni post-it vale come un voto — il trade-off finale emerge democraticamente dal conteggio.

**Descrivere le personas.** Per identificare bene le funzionalità del prodotto è essenziale avere chiari gli utenti e i loro obiettivi. Una persona rappresenta un utente del sistema, descrivendone ruolo e bisogni attraverso una rappresentazione realistica. Il team si divide in coppie o terzetti, ciascuno crea una persona con un template dato, la presenta al resto del gruppo; si mescolano i gruppi e si ripete una o due volte, per poi tenere solo le tre persone migliori. Lo strumento chiave è l'**empathy map**: un template visivo con quattro aree che completano la domanda "COSA VEDO/PENSO/SENTO/DICO?". Le personas vanno tenute aggiornate con i dati reali raccolti dal prodotto e dai suoi incrementi successivi.

**Brainstorming delle feature.** Cosa deve offrire il prodotto per soddisfare i bisogni di queste personas? Quali funzionalità servono per raggiungere gli obiettivi di business? Si mettono gli obiettivi (massimo 3) come colonne della lavagna in ordine di priorità da sinistra a destra, e le personas (massimo 3) come righe dall'alto in basso; si fa un brainstorming di feature, tenendo solo quelle che rispondono a queste domande e che soddisfano almeno un obiettivo e una persona. Per stabilire le priorità si può usare la domanda "se avessimo un budget molto limitato e potessimo lavorare su un solo obiettivo, quale sarebbe?", oppure un esercizio di allocazione simbolica di denaro: ogni piccolo gruppo riceve 5 dollari in post-it e li posiziona dove ritiene che debbano essere investiti di più (per raggiungere l'obiettivo o per imparare di più); si discutono gli esiti, si dà la possibilità di ridistribuire, e si dà priorità agli item con più dollari.

## Valutare le feature: i quattro assi

Il brainstorming produce tipicamente molte idee di feature, ma serve capire quali approfondire. Ogni feature viene valutata su quattro assi distinti.

**Sforzo (Effort).** Misurato su una scala da E a EEE (da poco a molto sforzo necessario per realizzarla).

**Valore di business (Business Value).** Misurato su una scala da $ a $$$, in base a quanto la feature contribuisce agli obiettivi economici del prodotto.

**Esperienza utente (User Experience).** Misurata su una scala da un cuore (❤️) a tre cuori (❤️❤️❤️), in base a quanto la feature migliora l'esperienza per l'utente.

**Incertezza.** Rappresentata come un semaforo (verde/giallo/rosso) che nasce dall'incrocio di due assi di confidenza: quanta fiducia si ha su *cosa* costruire (cosa vogliono davvero business e utenti da questa feature) e quanta fiducia si ha su *come* costruirla. Il team crea questo grafico a semaforo, un membro legge ogni feature ad alta voce e la posiziona secondo la propria comprensione, si discutono i disaccordi salvando le informazioni utili emerse, e si concorda un valore finale. Le feature che finiscono nella zona rossa vanno scartate oppure spezzate in parti più piccole.

Una volta assegnato il semaforo, il team costruisce anche una tabella condivisa di Sforzo, UX e Valore di Business: ogni persona assegna i propri valori secondo la propria comprensione, si discutono i disaccordi salvando le informazioni utili, e si concorda un valore finale per ciascun asse.

## Mostrare il percorso degli utenti

Uno user journey descrive la sequenza di passaggi che un utente segue per raggiungere un obiettivo: quale obiettivo vuole raggiungere questa persona? Come inizia la sua giornata? Cosa fa prima e dopo questo passaggio? Si sceglie una persona e un obiettivo per lei, si posizionano su un post-it in alto a sinistra della lavagna, si sceglie un punto di partenza e si descrive ogni passo fino al raggiungimento dell'obiettivo. Lungo il percorso si segnano le feature che già aiutano a compiere quel passo, o le feature future che potrebbero farlo — collegando così lo user journey direttamente al catalogo di feature emerso dal brainstorming.

## Il sequenziamento delle feature e le "onde"

Le feature vengono messe in ordine di priorità le une rispetto alle altre, con l'obiettivo di identificare l'MVP e i suoi incrementi successivi. Si crea un template di sequenza (una lista numerata), si spiegano le regole, si ricordano gli obiettivi (definire la sequenza per consegnare le feature), e si posizionano le feature nella sequenza fino a raggiungere un accordo condiviso.

Una volta ottenuta una sequenza, servono le regole delle "onde" (waves): un'onda è un gruppo di feature che compone un incremento, e ogni MVP è fatto di una o più onde. Il libro propone un set di regole di esempio, ciascuna con un proprio scopo:

**Massimo 3 feature per onda.** Mantiene ogni incremento piccolo e gestibile, coerente con il principio "inizia in piccolo".

**Al massimo una feature con semaforo rosso per onda.** Limita la quantità di incertezza ad alto rischio che un singolo incremento può assorbire in una volta.

**Le feature non possono essere solo gialle o rosse.** Ogni onda deve contenere anche elementi a bassa incertezza, per bilanciare rischio e concretezza in ogni incremento.

**Massimo 5 E (punteggio di sforzo) per onda.** Un tetto esplicito allo sforzo complessivo che un'onda può assorbire, per mantenerla realizzabile in tempi brevi.

**La somma dei valori delle feature deve essere almeno 4 $ e 4 ❤️.** Un pavimento minimo di valore di business e di esperienza utente, per garantire che ogni onda porti comunque un beneficio sostanziale.

**Le feature dipendenti vanno nelle onde successive.** Una feature che dipende da un'altra non può essere sequenziata prima della feature da cui dipende.

Il libro nota comunque, con una certa cautela, che questa fase si appoggia ancora su stime e t-shirt sizing — uno strumento imperfetto, non il migliore possibile, ma comunque utile in questa fase.

## L'MVP Canvas

Il workshop si chiude definendo i pensieri essenziali sull'MVP in un one-pager, l'**MVP Canvas**, composto da sette elementi:

**Proposta MVP**: qual è la proposta per questo MVP.

**Personas segmentate**: per chi è pensato questo MVP.

**Journey**: quali percorsi utente vengono migliorati da questo MVP.

**Feature**: cosa si sta effettivamente costruendo in questo MVP.

**Risultato atteso**: quale apprendimento o esito si sta cercando.

**Metriche per validare l'ipotesi**: come si misura il successo.

**Costo e tempistiche**: costo previsto e data di consegna attesa.

Alcuni suggerimenti pratici accompagnano il canvas: restare concentrati sulla proposta (più un MVP è focalizzato, meglio è); minimizzare i rischi segmentando bene le personas (per chi è pensato specificamente questo MVP); e rivalutare periodicamente le feature dell'MVP chiedendosi se sono davvero il minimo indispensabile, se sono percorribili, se possono essere semplificate, e se manca qualcosa di essenziale.

## Vedi anche

*(nessuna entità collegata)*

## Fonte

- Appunti grezzi originali: `raw/knowledge/book/lean-inception/content.md`
