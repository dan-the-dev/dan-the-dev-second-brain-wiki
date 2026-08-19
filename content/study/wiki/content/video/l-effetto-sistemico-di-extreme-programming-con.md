---
title: "L'effetto sistemico di eXtreme Programming con Nicola Moretto"
type: video
topics: ["agile-software-development", "extreme-programming"]
status: done
raw_source: raw/knowledge/video/l-effetto-sistemico-di-extreme-programming-con/content.md
updated: 2026-08-19
---

# L'effetto sistemico di eXtreme Programming con Nicola Moretto

**Video/intervista** con [[../person/nicola-moretto|Nicola Moretto]], software engineer e agile coach

Conversazione con Nicola Moretto — programmatore da quando aveva 12 anni, oggi CEO, CTO, agile coach, manager e developer contemporaneamente — su come le pratiche tecniche di Extreme Programming abbiano un effetto sistemico che va ben oltre il codice, arrivando a determinare la capacità stessa di un'organizzazione di essere davvero agile.

## L'origine dei problemi organizzativi

La tesi centrale del video è che gran parte dei problemi organizzativi tipici — product owner disfunzionali, sprint planning che non funzionano, team imprevedibili, controllo manageriale eccessivo, Gantt chart — non nascono da persone incompetenti o manager mal informati, ma dall'assenza delle pratiche tecniche che XP ha identificato più di vent'anni fa. "Il codice non mente": gli sviluppatori sono spesso i primi a sapere come sta andando davvero l'organizzazione, ma raramente vengono ascoltati.

## Rendere visibile il problema: mostrare l'architettura ai dirigenti

Una tecnica pratica condivisa da Moretto per far emergere questi problemi: lavorare 2-4 settimane in pair o mob programming con il team, disegnare l'architettura corrente del sistema, e poi mostrarla al CEO chiedendogli di spiegarla usando i nomi dati dal team tecnico. Tutto ciò che il CEO non riesce a spiegare è, tipicamente, qualcosa che non dovrebbe essere lì.

Moretto preferisce parlare di "inconsistenza" piuttosto che di "debito tecnico" — un termine che percepisce come accusatorio. L'obiettivo è raggiungere consistenza fra tre elementi: architettura, struttura organizzativa e strategia di business. Quando questi tre sono disallineati, l'organizzazione rallenta e non riesce a scalare. Cambiare il business è una decisione da un'ora; cambiare l'organizzazione richiede forse un mese; cambiare l'architettura richiede mesi o anni — ed è proprio l'architettura, secondo Moretto, a vincere sempre sull'organizzazione nel lungo periodo, il che rende conveniente iniziare proprio da lì.

## Da dove iniziare: pair/mob programming e test automation

Le pratiche XP di partenza sono il pair o mob programming, che nel tempo costruisce naturalmente ownership collettiva ed elimina i colli di bottiglia legati a singole persone, e l'automazione dei test, unico modo per mantenere sotto controllo il costo del cambiamento nel tempo. Per team più grandi, Moretto cita uno studio di Microsoft Research su Windows Vista che dimostra come l'ownership collettiva del codice abbia un impatto più forte sulla qualità rispetto alla semplice competenza individuale nello scrivere codice.

## Un caso reale: da monolite condiviso a piattaforma disaccoppiata

Moretto descrive un intervento concreto: un'organizzazione divisa in quattro prodotti (tre team "verticali" più un team "piattaforma"), dove i tre team verticali impattavano continuamente la stessa codebase condivisa — una divisione subottimale. La soluzione è stata introdurre componenti intermedi (adapter) per separare i verticali dalla piattaforma, con il team piattaforma che progressivamente riempiva quei componenti isolando le parti realmente comuni. Il prerequisito indispensabile per condividere una codebase fra più team, sottolinea Moretto, è avere pratiche tecniche solide: test completi, sviluppo trunk-based, test a più livelli. Il risultato finale è stato un layer di piattaforma sottile, ben architettato, disaccoppiato e sicuro da modificare — diventato responsabilità condivisa invece che di un singolo team, al punto che il team piattaforma originale si è naturalmente "svuotato" di compiti quando gli altri team hanno preso in carico direttamente le proprie parti.

## Scalare o "de-scalare"?

Su un tema controcorrente, Moretto cita l'idea di Craig Larman: l'obiettivo dovrebbe essere "de-scalare" l'organizzazione, non scalarla — ottenere lo stesso risultato con 10 persone piuttosto che con 100, applicando alle aziende lo stesso principio di minimalismo che si applica al codice (meno astrazioni, meno costrutti). Un team XP ben funzionante tende infatti a restare piccolo ed è efficace quanto un team molto più grande che non pratica XP; aggiungere persone spesso rallenta invece di velocizzare, mentre migliorare le pratiche tecniche accelera a parità di organico.

## Dall'alto, dal basso, o dal centro?

Sull'introduzione dell'agilità in un'organizzazione, Moretto osserva che partire dall'alto o dal basso sono approcci comparabili, ma partire dal centro (middle management) è la situazione peggiore, perché richiede di spingere in entrambe le direzioni contemporaneamente. Partire dal basso è vantaggioso perché permette di lavorare sulle pratiche tecniche e dimostrare con la consegna continua che il controllo eccessivo è superfluo — ma anche in questo caso serve cautela: cambiare le pratiche tecniche deve precedere, non seguire, l'introduzione di un nuovo processo.

## Perché Scrum senza XP genera più debito tecnico

Un'osservazione tagliente: Scrum ha "vinto" sul mercato mentre Extreme Programming ha fallito sul piano del marketing e del branding, nonostante XP definisca proprio le pratiche tecniche che rendono Scrum sostenibile. Quando Scrum viene introdotto dal centro dell'organizzazione senza le pratiche tecniche di XP, i team lavorano spesso per 6-7 mesi producendo ancora più debito tecnico di prima, perché le iterazioni brevi aumentano la pressione senza fornire gli strumenti tecnici per sostenerla — l'opposto dell'effetto che l'agilità dovrebbe produrre.

## Quando l'agilità non è adatta

Moretto identifica scenari in cui l'agilità è quasi impossibile da realizzare: organizzazioni non pronte alla trasparenza che richiede (ad esempio un business che non si fida delle stime), o che dipendono interamente da fornitori esterni per lo sviluppo software — segno, in quest'ultimo caso, che l'organizzazione non considera il software un asset strategico. In questi contesti, un approccio waterfall può essere onestamente più adatto.

## Letture e influenze citate

Moretto cita come influenze fondanti Tom DeMarco (*Peopleware* e *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, definendolo un precursore del pensiero agile fin dagli anni '70) e la coaching sistemica (Richard Hackman, Alan Cardon, John Whittington). Fra le citazioni più dirette dell'episodio: "l'architettura deve urlare il linguaggio del business" (Uncle Bob), "l'architettura vince sempre sull'organizzazione dell'azienda", "l'obiettivo è de-scalare l'organizzazione, non scalarla" (Craig Larman), e la celebre frase di Kent Beck: "in software development, 'perfetto' è un verbo, non un aggettivo. Non esiste un processo perfetto. Non esiste un design perfetto. Non esistono storie perfette."

## Sintesi

Un contenuto che collega esplicitamente, con casi reali ed esempi concreti, le pratiche tecniche di Extreme Programming a esiti organizzativi che normalmente vengono attribuiti a fattori di processo o di management — rafforzando la tesi, condivisa con la sessione "L'illusione dell'ortogonalità" di Italian Agile Days 2021 presente in questo archivio, che le pratiche tecniche siano la vera precondizione per qualunque trasformazione agile sostenibile.

## Vedi anche

- [[../conference/italian-agile-days-2021|Italian Agile Days 2021]]
- [[../concept/scrum-project-management|Scrum (project management)]]
- [[../person/tom-demarco|Tom DeMarco]]

## Fonte

- Appunti grezzi originali: `raw/knowledge/video/l-effetto-sistemico-di-extreme-programming-con/content.md`
- YouTube: [video](https://www.youtube.com/watch?v=0StMHUdq3Bc)
