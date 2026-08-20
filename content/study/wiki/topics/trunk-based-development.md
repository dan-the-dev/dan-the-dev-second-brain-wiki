---
title: "Trunk-Based Development"
type: topic
id: trunk-based-development
updated: 2026-08-20
---

# Trunk-Based Development

## Cos'è il Trunk-Based Development

Nel Trunk-Based Development (TBD) gli sviluppatori integrano regolarmente il proprio codice in un ramo principale condiviso, il "trunk", con l'obiettivo di ridurre la distanza fra sviluppatori, promuovere collaborazione frequente e ridurre i conflitti di merge. I vantaggi che ne derivano sono concreti: release più frequenti e più piccole, feedback più rapido e miglioramento continuo, riduzione dei rischi legati a branch di lunga durata, maggiore visibilità e trasparenza sullo stato del codice[^tbd-article].

Esistono tre stili concreti di TBD, non un'unica pratica rigida: il commit diretto sul trunk dopo build e test locali; il feature branch di vita brevissima — uno o due giorni al massimo — che viene poi mergeato; e un sistema di "patch review" accoppiato, come Mondrian (usato internamente da Google), che valida il codice *prima* del commit sul trunk invece che dopo[^tbd-article].

I risultati della ricerca DORA/*Accelerate*, che indaga sistematicamente le pratiche correlate a buone performance di delivery, confermano il quadro empiricamente: i team con le migliori performance hanno meno di tre branch attivi contemporaneamente, con branch dal ciclo di vita molto breve (meno di un giorno), e non hanno mai code freeze o periodi di stabilizzazione. Feature branch di lunga durata e GitFlow, secondo la stessa ricerca, restano appropriati soprattutto per progetti open source, dove il modello di collaborazione e fiducia fra contributori è strutturalmente diverso da quello di un team aziendale che lavora sullo stesso codice ogni giorno[^accelerate].

## Branch by Abstraction

La tecnica per introdurre cambiamenti importanti o nuove funzionalità in un sistema esistente senza creare branch di lunga durata è il **Branch by Abstraction** (BBA): si introduce un'astrazione — un'interfaccia o API — che permette al vecchio e al nuovo comportamento di coesistere all'interno dello stesso trunk; una volta che la nuova implementazione è completa e testata, si passa interamente a essa e si rimuove la vecchia. Come chiarisce l'autore del testo di riferimento, il nome del pattern va letto alla lettera: "by abstraction instead of by branching in source control" — non significa disseminare il codice di condizionali ovunque, ma usare un concetto di astrazione idiomatico per il linguaggio in uso, esattamente come si farebbe per qualunque altra dipendenza da disaccoppiare[^tbd-article].

## Feature flag e gestione del rischio

I **feature flag** permettono di attivare o disattivare funzionalità a runtime senza bisogno di un redeploy, abilitando rilasci incrementali, A/B testing e la disattivazione rapida di funzionalità problematiche in produzione. Vanno però gestiti con attenzione per non diventare essi stessi una forma di debito tecnico dimenticato: la raccomandazione pratica è rimuovere il flag e il codice associato a esso circa un mese dopo il rilascio, una volta che la nuova funzionalità si è dimostrata stabile. Una frase riassume bene il rapporto fra pratica individuale e collettiva che sta dietro al TBD: **"Individuals practice Trunk-Based Development, and teams practice CI"** — è la disciplina del singolo sviluppatore nell'integrare spesso, moltiplicata su tutto il team, a produrre l'effetto di Continuous Integration reale. Le pipeline CI devono di conseguenza gestire correttamente tutte le permutazioni previste dei flag attivi, non solo lo stato "finale" del codice[^tbd-article].

## Requisiti tecnici e organizzativi

Un sistema di version control adatto al TBD ha requisiti tecnici specifici: velocità di sincronizzazione inferiore ai tre secondi, branching e merging leggeri, permessi granulari. Su questa base si costruisce anche la pratica del **monorepo** — con Google come esempio di riferimento su scala estrema — supportata da tecnologie come lo sparse checkout di Git, che permette di lavorare su un sottoinsieme del repository senza doverlo scaricare per intero[^tbd-article].

Gli errori tipici nell'adozione del TBD sono ricorrenti e riconoscibili: chiamare "trunk" un branch senza adottarne davvero le pratiche, usare feature branch di lunga durata mascherati da pratica corretta, non cancellare i branch dopo il merge, fare cherry-pick di bugfix dai branch di release verso il trunk invece di correggere direttamente il trunk stesso. Ma l'avvertenza più importante riguarda il fattore culturale prima ancora di quello tecnico: l'adozione di TBD richiede prima di tutto sicurezza psicologica, collaborazione e comunicazione — sintetizzata dalla citazione "Culture eats strategy for breakfast": anche il miglior piano tecnico fallisce se la cultura aziendale non lo sostiene[^tbd-article].

## Sintesi

Il TBD, in questo percorso di studio, emerge come pratica tecnica (integrazione frequente su un trunk condiviso, Branch by Abstraction per i cambiamenti grandi, feature flag per disaccoppiare deploy e rilascio) sorretta da due condizioni che da sole ne decidono il successo: strumenti adeguati (version control veloce, pipeline capaci di gestire le permutazioni dei flag) e una cultura di squadra che renda sicuro integrare spesso invece di isolarsi in branch lunghi. La conferma indipendente della ricerca DORA — pochi branch, vita brevissima, nessun code freeze come tratto distintivo dei team più performanti — colloca il TBD non come una preferenza stilistica, ma come una delle pratiche tecniche più correlate a buone performance di delivery misurate su larga scala.

## Indice delle fonti

[^tbd-article]: Paul Hammant, *Trunk-Based Development And Branch By Abstraction* — [[../content/article/trunk-based-development-and-branch-by-abstraction|pagina dedicata]]
[^accelerate]: Nicole Forsgren, Jez Humble, Gene Kim, *Accelerate* — [[../content/book/accelerate|pagina dedicata]]

## Vedi anche

- Contenuti fonte: [[../content/article/trunk-based-development-and-branch-by-abstraction|Trunk-Based Development And Branch By Abstraction]] · [[../content/book/accelerate|Accelerate]]
- Topic collegati: [[agile-software-development|Agile Software Development]] · [[devops|DevOps]] · [[technical-excellence|Technical Excellence]] · [[dora|DORA]]
- Organizzazioni citate: [[../content/organization/thoughtworks|ThoughtWorks]]
