---
title: "Tech Debt"
type: topic
id: tech-debt
updated: 2026-08-20
---

# Tech Debt

## Origine e definizione: la metafora del prestito

Il termine "debito tecnico" nasce da un'intuizione molto concreta di Ward Cunningham, non da una teorizzazione astratta a tavolino. Nel suo experience report del 1992 al OOPSLA, dedicato al progetto WyCash Portfolio Management System, Cunningham descrive la scelta di spedire una prima versione del software — funzionante, ma basata su una comprensione ancora incompleta del dominio — come l'equivalente di accendere un prestito finanziario[^cunningham-oopsla]. Spedire codice "non del tutto giusto" per imparare più in fretta dal mercato è, in questo senso, come prendere in prestito denaro: accelera nel breve periodo, ma genera un interesse che si accumula nel tempo, sotto forma di codice via via più costoso da cambiare, finché quell'interesse non viene ripagato tramite refactoring — cioè finché il codice non viene riportato ad allinearsi con la comprensione, nel frattempo maturata, del problema reale. È una metafora, non un giudizio morale: un piccolo debito accelera lo sviluppo, esattamente come un piccolo prestito finanziario, a patto di essere ripagato con prontezza[^tech-debt-explained].

Ward Cunningham è oggi ricordato anche come inventore del primo wiki (WikiWikiWeb, 1995) e come uno dei firmatari dell'Agile Manifesto — un percorso che rende coerente il fatto che la metafora del debito tecnico sia nata da un contesto di programmazione estrema orientata all'apprendimento rapido e iterativo, non da un contesto di ingegneria del software rigidamente pianificata.

## Le due cause dello scarto fra bisogno e codice

Un punto centrale, spesso perso quando la metafora del debito viene ripetuta in modo superficiale, è che il debito tecnico non è affatto sinonimo di "codice scritto male". È piuttosto il risultato di uno scarto fra i bisogni del business, nel presente, e il modo in cui il software è stato scritto — uno scarto che secondo Cunningham può nascere da due cause ben distinte[^cose-debito]. La prima è il **Wrong Design**: la soluzione implementata era sbagliata già al momento in cui è stata scritta, per una comprensione incompleta o errata del problema. La seconda, più insidiosa perché non è un errore di nessuno, è la **Rapid Evolution**: la soluzione era corretta quando è stata scritta, ma il contesto di business è cambiato così rapidamente da renderla obsoleta — non per un difetto del codice, ma per il semplice fatto che il mondo attorno a quel codice si è mosso più in fretta di quanto il codice stesso potesse anticipare.

Questa distinzione ha una conseguenza pratica immediata: **il mito del codice pulito come prevenzione totale del debito tecnico è appunto un mito**. Anche con le migliori intenzioni e la massima disciplina, il debito si accumula comunque, perché la sua causa più comune non è la scarsa capacità tecnica del team, ma un disallineamento — spesso inevitabile — fra ciò che serve realmente al business in un dato momento e ciò che il team ha effettivamente potuto costruire con l'informazione disponibile a quel momento[^cose-debito]. Scrivere codice pulito riduce l'attrito nel ripagare il debito quando emerge, ma non lo elimina alla radice: il debito nasce dalla natura stessa dell'apprendimento progressivo su un dominio, non da una mancanza di rigore.

## Cruft: la faccia tecnica del debito

Se Cunningham fornisce la metafora finanziaria, Martin Fowler ne fornisce il correlato tecnico più preciso: il **cruft**, cioè l'insieme delle carenze di qualità interna di un sistema — codice difficile da leggere, componenti troppo accoppiati, test fragili o assenti — che rendono progressivamente più costoso modificare ed estendere quel sistema[^tech-debt-explained]. Il cruft è, in un certo senso, la sostanza fisica dell'interesse che il debito tecnico genera: più cruft si accumula, più ogni nuova funzionalità costa in tempo e rischio rispetto a quanto sarebbe costata su una base di codice più pulita. È lo stesso motivo per cui, quando la barra dei test in TDD rimane verde ma il refactoring viene sistematicamente saltato, il debito tecnico si accumula silenziosamente anche in presenza di una suite di test solida: i test proteggono dalla regressione funzionale, non dal degrado della qualità interna.

## Comunicare il debito a chi non è tecnico

Una delle sfide più concrete — e più spesso trascurate — nella gestione del debito tecnico è comunicarlo efficacemente a stakeholder che non hanno gli strumenti per valutarne il peso tecnico. La metafora del mutuo per la casa aiuta proprio qui: accendere un mutuo per comprare casa non è, di per sé, un problema — lo diventa solo se il debito smette di essere sotto controllo, se le rate non vengono pagate o se il piano di rimborso viene ignorato[^tech-debt-explained]. Allo stesso modo, il debito tecnico non è intrinsecamente negativo: può rappresentare una decisione consapevole, presa per raggiungere un obiettivo specifico nel breve periodo — validare un'ipotesi di prodotto, rispettare una scadenza di mercato, testare un'idea prima di investirci risorse ingegneristiche massicce. Il problema, tecnico o finanziario che sia, nasce quando il debito non viene gestito: la chiave sta nel riconoscere che accumulare debito consapevolmente può essere vantaggioso, a patto di avere fin dall'inizio un piano esplicito per ripagarlo, evitando che si trasformi in un costo silenzioso e crescente nel lungo periodo.

Tradurre questo in termini comprensibili a un product manager o a uno stakeholder di business significa smettere di parlare di "codice sporco" e cominciare a parlare di velocità futura: ogni unità di debito non ripagata è un costo che si aggiunge al prezzo di ogni funzionalità successiva, non un problema isolato di un singolo componente. È lo stesso principio, applicato in senso inverso, per cui i team ad alte prestazioni misurati dalla ricerca DORA (si veda il topic [[dora|DORA]]) risultano più veloci *e* più stabili contemporaneamente: qualità interna e velocità di consegna non sono in trade-off strutturale, sono la stessa variabile osservata da due lati.

## Due strategie per gestirlo: investire in design o abbracciare il ciclo rush-learn-refactor

Per ridurre il debito alla radice esistono, in sostanza, due strategie complementari, e la scelta fra le due dipende da quanto è prevedibile il futuro del progetto[^cose-debito].

La prima è **investire di più nella fase di design**: un'analisi più approfondita del problema, più discussione con gli stakeholder sull'evoluzione presente e futura del prodotto, alla ricerca di uno "sweet spot" fra sforzo di design anticipato e debito che inevitabilmente si accumulerà comunque. Questa strategia funziona meglio quando il dominio di business è relativamente stabile: più il futuro è prevedibile, più ha senso pagare in anticipo il costo di un design più solido.

La seconda è il ciclo **rush, learn, refactor**: scrivere codice velocemente per imparare il più possibile, il più in fretta possibile, sulla realtà del business — per poi rifattorizzare consolidando quell'apprendimento in una soluzione più solida. Questa strategia accetta consapevolmente la creazione di debito come parte del processo, a condizione di ripagarlo a breve termine attraverso tre impegni concreti: codice scritto in modo da restare facile da rifattorizzare anche sotto pressione, tempo dedicato regolarmente — non "quando ci sarà tempo" — al refactoring, e apprendimento continuo su cosa nella soluzione attuale funziona e cosa va cambiato. Questa seconda strategia è preferibile quando l'incertezza sul business è alta: quando non si sa ancora abbastanza per progettare bene in anticipo, è più efficiente imparare scrivendo e poi consolidare, piuttosto che progettare a lungo su ipotesi che potrebbero rivelarsi sbagliate.

Nessuna delle due strategie elimina il debito: entrambe lo gestiscono. La differenza è dove, nel ciclo di vita del progetto, si sceglie di pagarne il costo — prima, sotto forma di tempo di design, o dopo, sotto forma di tempo di refactoring disciplinato.

> [!info] Approfondimento aggiunto in fase di compilazione
> Martin Fowler ha proposto una lettura che completa la metafora finanziaria di Cunningham distinguendo il debito tecnico lungo due assi ortogonali: se è stato contratto deliberatamente o inavvertitamente, e se è stato contratto in modo negligente ("reckless") o prudente. Ne risultano quattro quadranti. Il debito **reckless e deliberato** ("non abbiamo tempo per il design") è la forma più pericolosa: si sa di stare tagliando un angolo, e lo si fa senza alcun piano di rientro. Il debito **prudente e deliberato** ("dobbiamo spedire ora e affrontare le conseguenze dopo") è la forma sana descritta anche dagli articoli di questo percorso: una scelta consapevole, con un piano di rimborso. Il debito **reckless e inavvertito** ("cos'è il layering?") nasce da una carenza di competenza che nemmeno si riconosce come tale. Il debito **prudente e inavvertito** ("ora sappiamo come avremmo dovuto farlo") è quello che emerge quasi sempre, in modo del tutto legittimo, dall'apprendimento progressivo su un dominio — la stessa dinamica descritta sopra come Rapid Evolution. La distinzione utile, per Fowler, non è "il debito c'è o non c'è", ma se il team sa di averlo contratto e ha intenzione di ripagarlo.
> Fonte: [Ward Cunningham, "The WyCash Portfolio Management System", OOPSLA 1992](https://c2.com/doc/oopsla92.html) · [Martin Fowler, "Technical Debt", martinfowler.com/bliki](https://martinfowler.com/bliki/TechnicalDebt.html)

## Sintesi

Il debito tecnico, letto attraverso queste fonti, non è un difetto morale del codice né una scusa per giustificare software scritto male: è una metafora finanziaria precisa, coniata da chi lavorava concretamente sul problema di spedire software funzionante sotto incertezza, e serve a rendere visibile — soprattutto a chi non legge codice — un costo altrimenti invisibile: il tempo extra che ogni funzionalità futura costerà se lo scarto fra bisogno di business e struttura del codice non viene periodicamente ridotto. Le sue cause sono duplici (un design sbagliato fin dall'inizio, o un contesto che è cambiato più in fretta del codice), la sua gestione è duplice (investire prima in design, o imparare in fretta e rifattorizzare dopo), e la sua comunicazione a chi non è tecnico funziona meglio quando si evita il linguaggio della colpa e si usa quello, molto più neutro e molto più efficace, del prestito e del piano di rimborso.

## Vedi anche

- Contenuti: [[../content/article/cose-il-debito-tecnico-e-come-affrontarlo-in-modo|Cos'è il debito tecnico e come affrontarlo in modo Agile]] · [[../content/article/tech-debt-explained-to-everyone|Tech Debt Explained to Everyone]]
- Topic collegati: [[tech-lead|Tech Lead]] · [[technical-excellence|Technical Excellence]] · [[agile-software-development|Agile Software Development]] · [[dora|DORA]]
- Persone: [[../content/person/ward-cunningham|Ward Cunningham]] · [[../content/person/martin-fowler-software-engineer|Martin Fowler]]

[^cunningham-oopsla]: Ward Cunningham, "The WyCash Portfolio Management System", OOPSLA 1992 — [c2.com/doc/oopsla92.html](https://c2.com/doc/oopsla92.html)
[^cose-debito]: [[../content/article/cose-il-debito-tecnico-e-come-affrontarlo-in-modo|Cos'è il debito tecnico e come affrontarlo in modo Agile]]
[^tech-debt-explained]: [[../content/article/tech-debt-explained-to-everyone|Tech Debt Explained to Everyone]]
