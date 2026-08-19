---
title: "TDD — Test-Driven Development"
type: topic
id: tdd
updated: 2026-08-19
---

# TDD — Test-Driven Development

Sintesi elaborata a partire da tutti i contenuti dell'archivio taggati `tdd`. Non è un riassunto di un singolo libro, ma un'unica trattazione costruita incrociando i cinque contenuti studiati sull'argomento — indicati in fondo alla pagina con il relativo link.

## Cos'è, in una definizione

Tecnica di sviluppo software basata su brevissimi cicli di programmazione, in cui i requisiti diventano casi di test automatici concreti e specifici, e in cui si implementa sempre la soluzione più semplice possibile (l'hard-coding iniziale è incoraggiato, non è un difetto). Il ciclo che tutte le fonti ripetono, con lo stesso nome, è **Red → Green → Refactor**: scrivi un test che fallisce, fallo passare nel modo più rapido possibile, poi rifattorizza per rimuovere la duplicazione introdotta.

È importante quanto le fonti sono concordi nel dire cosa il TDD **non** è: non è una strategia di testing, non è un principio di design, non garantisce da solo un buon design. È — come dice Kent Beck — un modo per gestire la paura durante la programmazione, e come nota la Agile Technical Practices Distilled, un modo per prendere decisioni di design con un feedback loop molto più corto.

## Le due leggi che generano tutto il resto

Da *Test-Driven Development: By Example* arrivano le due regole minime da cui Beck fa discendere l'intero metodo: **scrivi nuovo codice solo se un test automatico è fallito**, **elimina la duplicazione**. *Agile Technical Practices Distilled* le formalizza come **3 leggi del TDD** (non scrivere più test di quanto basti a fallire; non scrivere codice di produzione se non per far passare un test fallito; non scriverne più di quanto basti a farlo passare) — una formulazione più operativa delle stesse due regole.

Il punto su cui vale la pena soffermarsi, perché ricorre identico in più fonti, è questo: **il vero problema non è la duplicazione, è la dipendenza**. La duplicazione ne è solo il sintomo visibile — è per questo che "elimina la duplicazione" funziona come euristica pratica per ridurre l'accoppiamento, anche se il bersaglio reale è un altro.

## Portare la barra dal rosso al verde

Le tre strategie, con lo stesso nome in entrambi i libri:

- **Fake It** — restituisci una costante, poi trasformala gradualmente in un'espressione reale. Utile quando non si è sicuri dell'implementazione.
- **Obvious Implementation** — se la soluzione è chiara e veloce da scrivere, scrivila direttamente. Rischio: richiede di essere sicuri al 100%, altrimenti si torna indietro a Fake It.
- **Triangulation** — quando né la prima né la seconda danno sicurezza, si aggiunge un secondo (o terzo) esempio che forza il codice a diventare più generico.

## Il ritmo: dalla teoria all'abitudine

Qui le fonti si completano a vicenda in modo particolarmente utile. *Test-Driven Development: By Example* offre il repertorio di pattern per governare il ritmo (Test List con una lista "now" e una "later", One Step Test per scegliere il prossimo test da scrivere, Child Test quando un test si rivela troppo grande, Break e Do Over per quando ci si blocca). L'articolo *Breaking Through That First TDD Block* mostra invece **come si costruisce concretamente l'abitudine**, con un esercizio deliberato suggerito originariamente da Kent Beck: cambiare il codice, scrivere un test che passi solo grazie a quel cambio, annullare tutto, riscrivere il test da zero (mai copia-incolla) e ripetere. Chi lo ha praticato per qualche settimana riporta lo stesso effetto: si smette di pensare in termini di strutture dati e algoritmi e si inizia a pensare in termini di input e output desiderati — si iniziano a vedere interfacce dove prima si vedevano solo classi.

Questo collega direttamente il "come ci si allena" (l'articolo) al "perché funziona" (i due libri): la ripetizione deliberata di un micro-ciclo costruisce un'intuizione di design che nessuna lettura teorica da sola trasmette.

## Le due scuole: Classic e Outside-In

*Agile Technical Practices Distilled* è l'unica fonte dell'archivio a nominare esplicitamente la distinzione tra **TDD classico** (Detroit/Chicago School, quello di Kent Beck, focalizzato sullo stato) e **Outside-In TDD** (London School, dove i mock servono a disegnare l'interfaccia pubblica dei collaboratori prima ancora di implementarli, e le asserzioni sono più orientate alla collaborazione tra oggetti che allo stato). Il **double-loop TDD** applica il ciclo anche a livello di acceptance test: un ciclo esterno lento guida uno interno veloce, unit-test per unit-test.

Non è una distinzione da manuale fine a se stessa: cambia quando conviene usare l'uno o l'altro approccio. Con bassa conoscenza del dominio, il TDD classico aiuta a scoprire la soluzione esplorando; con conoscenza più profonda, l'Outside-In/ATDD è più efficiente perché più orientato al business — ma richiede che quella conoscenza ci sia già, altrimenti manca il feedback loop che il TDD classico offre naturalmente.

## Perché è difficile (e perché vale comunque la pena)

La conferenza TDD 2021 è la fonte più esplicita nel normalizzare le difficoltà, invece di minimizzarle: è difficile iniziare (semplice ≠ facile: molte domande su quale test scrivere), è difficile seguire il processo con disciplina (la tentazione di scrivere più codice del necessario quando si crede già di conoscere la soluzione), ed è difficile fare il salto dai kata al codice di produzione reale, con tutti i suoi vincoli reali di strumenti, requisiti, processi e persone.

Un'indicazione pratica ricorrente: i test **sempre verdi** nel lungo periodo non sono un segnale di salute, sono un segnale di allarme — vanno trattati come amici, non temuti.

## Chi dovrebbe guidarne l'adozione in un team

Il video *Who Should Enable TDD?* sposta la domanda dal piano tecnico a quello organizzativo. Nessuno dei tre ruoli tipicamente coinvolti — Scrum Master, Line Manager, Tech Lead — può farlo da solo: lo Scrum Master può fare coaching di processo ma spesso non ha le competenze tecniche; il Line Manager ha leve su hiring, valutazioni e budget di formazione, ma trovare persone con competenze TDD reali è difficile e i corsi da soli non bastano senza affiancamento continuativo; il Tech Lead può dare il mentoring tecnico necessario, ma ha bisogno a sua volta di essere supportato e incoraggiato a farlo, e di sviluppare competenze di coaching che non sono automaticamente incluse nell'essere un bravo tecnico.

La conclusione pratica: il Tech Lead è il ruolo chiave, ma **serve il supporto combinato** di Line Manager e Scrum Master — una strategia di hiring coerente insieme a coaching tecnico continuativo, su un orizzonte di mesi o anni, non di settimane.

## Sintesi

Messe insieme, le cinque fonti disegnano un percorso completo: **cosa è e perché funziona** (i due libri, con le loro leggi e pattern), **come si costruisce l'abitudine concretamente** (l'articolo, con l'esercizio deliberato), **quali sono le due scuole e quando scegliere l'una o l'altra** (Agile Technical Practices Distilled), **perché è difficile e come normalizzare la difficoltà** (la conferenza), e infine **come farlo diventare pratica di team, non solo individuale** (il video sul chi deve guidarlo). È un buon esempio di come contenuti diversi per formato e profondità — un libro dedicato, un capitolo dentro un libro più ampio, un articolo breve, una conferenza, un video — coprano in realtà angolazioni complementari dello stesso problema.

## Indice delle fonti utilizzate

- 📖 [[../content/book/test-driven-development-by-example|Test-Driven Development: By Example]] — Kent Beck, Addison-Wesley, 2002
- 📖 [[../content/book/agile-technical-practices-distilled-a-learning|Agile Technical Practices Distilled]] — Santos, Consolaro, Di Gioia (capitolo "Test Driven Development" + riferimenti sparsi)
- 📰 [[../content/article/breaking-through-that-first-tdd-block|Breaking Through That First TDD Block]] — blog.thecodewhisperer.com
- 🎤 [[../content/conference/tdd-conference-2021|TDD Conference 2021]] — First International TDD Conference, luglio 2021
- 🎬 [[../content/video/who-should-enable-tdd-scrum-master-line-manager|Who Should Enable TDD? - Scrum Master \| Line Manager \| Tech Lead]]

## Vedi anche

- Concetto: [[../content/concept/test-driven-development|Test-driven development (Wikipedia)]]
- Topic collegati: [[agile-software-development|Agile Software Development]] · [[technical-excellence|Technical Excellence]]
- Persona: [[../content/person/kent-beck|Kent Beck]]
