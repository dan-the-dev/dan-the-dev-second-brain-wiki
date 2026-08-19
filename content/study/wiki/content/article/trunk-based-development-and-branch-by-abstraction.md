---
title: "Trunk-Based Development And Branch By Abstraction"
type: article
topics: ["agile-software-development", "trunk-based-development"]
status: done
raw_source: raw/knowledge/article/trunk-based-development-and-branch-by-abstraction/content.md
updated: 2026-08-19
---

# Trunk-Based Development And Branch By Abstraction

**Autore: Paul Hammant**

Esplorazione approfondita del Trunk-Based Development (TBD) e della tecnica "Branch by Abstraction" (BBA), scritta da un autore che promuove TBD da anni sulla base della propria esperienza in ThoughtWorks e con numerosi clienti.

## Cos'è il Trunk-Based Development

Nel TBD gli sviluppatori integrano regolarmente il proprio codice in un ramo principale condiviso (il "trunk"), con l'obiettivo di ridurre la distanza fra sviluppatori, promuovere collaborazione frequente e ridurre i conflitti di merge. I vantaggi: release più frequenti e più piccole, feedback più rapido e miglioramento continuo, riduzione dei rischi legati a branch di lunga durata, maggiore visibilità e trasparenza. Il documento distingue tre stili: commit diretto sul trunk dopo build e test locali; feature branch di vita brevissima (uno o due giorni) che vengono poi mergeati; un sistema di "patch review" accoppiato — come Mondrian, usato da Google — che valida il codice *prima* del commit sul trunk.

## Branch by Abstraction

BBA è la tecnica per introdurre cambiamenti importanti o nuove funzionalità in un sistema esistente senza creare branch di lunga durata: si introduce un'astrazione (un'interfaccia o API) che permette al vecchio e al nuovo comportamento di coesistere; una volta che la nuova implementazione è completa e testata, si passa interamente a essa e si rimuove la vecchia. Come chiarisce l'autore: "by abstraction instead of by branching in source control" — non significa disseminare il codice di condizionali, ma usare un concetto di astrazione idiomatico per il linguaggio in uso.

## Feature flag, CI/CD e monorepo

I feature flag permettono di attivare/disattivare funzionalità a runtime senza redeploy — abilitando rilasci incrementali, A/B testing, disattivazione rapida di funzionalità problematiche — ma vanno gestiti con attenzione per evitare che diventino essi stessi debito tecnico dimenticato: l'autore raccomanda di rimuovere i flag e il codice associato circa un mese dopo il rilascio. Una frase riassume il rapporto fra pratica individuale e collettiva: "Individuals practice Trunk-Based Development, and teams practice CI". Le pipeline CI devono gestire tutte le permutazioni previste dei flag attivi. Sul fronte degli strumenti, il documento discute i requisiti di un VCS adatto al TBD (velocità di sync inferiore ai tre secondi, branching/merging leggero, permessi granulari) e la pratica del monorepo — con Google come esempio di riferimento, e tecnologie come lo sparse checkout di Git per lavorare su un sottoinsieme del repository.

## Errori comuni e fattore culturale

L'autore elenca errori tipici di adozione: chiamare "trunk" un branch senza adottarne davvero le pratiche, usare feature branch di lunga durata, non cancellare i branch dopo il merge, fare cherry-pick di bugfix dai branch di release al trunk invece di correggere direttamente il trunk. Ma l'adozione di TBD, avverte il documento, richiede prima di tutto un cambiamento culturale — sicurezza psicologica, collaborazione, comunicazione — sintetizzato dalla citazione "Culture eats strategy for breakfast": anche il miglior piano tecnico fallisce se la cultura aziendale non lo sostiene.

## Vedi anche

*(nessuna entità collegata)*

## Fonte

- Appunti grezzi originali: `raw/knowledge/article/trunk-based-development-and-branch-by-abstraction/content.md`
